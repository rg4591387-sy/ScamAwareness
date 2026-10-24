import { SCAM_CATEGORIES } from '../src/data/categories';
import { QUIZ_QUESTIONS, getQuestionsByCategory } from '../src/data/questions';
import { SIMULATION_SCENARIOS } from '../src/data/simulations';
import { CHECKLIST_SECTIONS } from '../src/data/checklistData';
import { LEARNING_TRACKS } from '../src/data/learningPaths';
import { calculateCyberSafetyScore } from '../src/services/storage';

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

async function runTests() {
  console.log('--- RUNNING SCAMSHIELD AI 2.0 INTEGRITY VERIFICATION SUITE ---\n');

  // 1. Verify 12 Categories
  assert(SCAM_CATEGORIES.length === 12, `Must have exactly 12 categories (found: ${SCAM_CATEGORIES.length})`);

  const categoryIds = SCAM_CATEGORIES.map((c) => c.id);
  const uniqueIds = new Set(categoryIds);
  assert(uniqueIds.size === 12, 'All 12 category IDs must be completely unique');

  const requiredIds = [
    'phishing',
    'fake-jobs',
    'upi-fraud',
    'impersonation',
    'suspicious-links',
    'fake-prizes',
    'romance-social',
    'qr-fraud',
    'otp-takeover',
    'digital-arrest',
    'customer-support',
    'social-identity',
  ];

  requiredIds.forEach((id) => {
    assert(categoryIds.includes(id), `Required category "${id}" exists`);
  });

  SCAM_CATEGORIES.forEach((cat) => {
    assert(cat.howItWorks.length >= 3, `Category "${cat.name}" has in-depth howItWorks steps`);
    assert(cat.warningSigns.length >= 3, `Category "${cat.name}" has warning signs`);
    assert(Boolean(cat.realisticExample.scenario), `Category "${cat.name}" has realistic scenario`);
    assert(cat.manipulationTechniques.length >= 2, `Category "${cat.name}" has manipulation techniques`);
    assert(cat.howToStaySafe.length >= 3, `Category "${cat.name}" has prevention rules`);
    assert(cat.whatToDoIfAffected.length >= 2, `Category "${cat.name}" has response rules`);
  });

  // 2. Verify Question Banks
  console.log('\n--- VERIFYING CATEGORY QUESTION BANKS ---');
  let totalQuestionsCount = 0;
  categoryIds.forEach((catId) => {
    const qList = getQuestionsByCategory(catId);
    totalQuestionsCount += qList.length;
    assert(qList.length >= 5, `Category "${catId}" has at least 5 unique questions (found: ${qList.length})`);

    qList.forEach((q) => {
      assert(q.answerOptions.length === 4, `Question "${q.questionId}" has 4 options`);
      assert(q.correctAnswer >= 0 && q.correctAnswer < 4, `Question "${q.questionId}" correctAnswer is 0-3`);
      assert(Boolean(q.explanation), `Question "${q.questionId}" has explanation`);
      assert(q.optionExplanations.length === 4, `Question "${q.questionId}" has 4 option explanations`);
    });
  });
  assert(totalQuestionsCount >= 70, `Total questions bank exceeds 70 questions (found: ${totalQuestionsCount})`);

  // 3. Verify Simulation Lab Scenarios
  console.log('\n--- VERIFYING SIMULATION SCENARIOS ---');
  assert(SIMULATION_SCENARIOS.length >= 6, `Simulation Lab has at least 6 scenarios (found: ${SIMULATION_SCENARIOS.length})`);
  SIMULATION_SCENARIOS.forEach((sim) => {
    assert(sim.options.length >= 2, `Simulation "${sim.title}" has choices`);
    assert(sim.options.some((o: any) => o.isSafe), `Simulation "${sim.title}" has a safe resolution`);
    assert(sim.options.some((o: any) => !o.isSafe), `Simulation "${sim.title}" has dangerous choices`);
  });

  // 4. Verify Checklist Data
  console.log('\n--- VERIFYING SAFETY CHECKLIST SECTIONS ---');
  assert(CHECKLIST_SECTIONS.length === 5, `Checklist has 5 sections (found: ${CHECKLIST_SECTIONS.length})`);
  let totalChecklistItems = 0;
  CHECKLIST_SECTIONS.forEach((sec) => {
    totalChecklistItems += sec.items.length;
    sec.items.forEach((it: any) => {
      assert(Boolean(it.title && it.explanation && it.deepDive), `Checklist item "${it.title}" has details`);
    });
  });
  assert(totalChecklistItems === 20, `Checklist has exactly 20 items (found: ${totalChecklistItems})`);

  // 5. Verify Learning Tracks
  console.log('\n--- VERIFYING LEARNING PATHS ---');
  assert(LEARNING_TRACKS.length === 6, `Learning paths has 6 tracks (found: ${LEARNING_TRACKS.length})`);

  // 6. Verify Cyber Safety Score Formula Calculation
  console.log('\n--- VERIFYING CYBER SAFETY SCORE CALCULATION ---');
  const emptyScore = calculateCyberSafetyScore({
    scansCount: 0,
    quizAttempts: [],
    completedCategories: [],
    completedModules: [],
    completedSimulations: [],
    checklistCompletedIds: [],
    savedAnalyses: [],
    weeklyChallengeCompleted: false,
    lastActive: new Date().toISOString(),
  });
  assert(emptyScore.totalScore === 0, `New user score must be honestly 0 (got: ${emptyScore.totalScore})`);

  const partialScore = calculateCyberSafetyScore({
    scansCount: 2,
    quizAttempts: [
      { id: '1', categoryId: 'phishing', categoryName: 'Phishing', score: 4, total: 5, percentage: 80, answers: [], completedAt: '' },
    ],
    completedCategories: ['phishing', 'fake-jobs'], // 2/12 * 25 = 4
    completedModules: [],
    completedSimulations: ['sim-1'], // 1/6 * 20 = 3
    checklistCompletedIds: ['c1', 'c2', 'c3', 'c4', 'c5'], // 5/20 * 20 = 5
    savedAnalyses: [],
    weeklyChallengeCompleted: false,
    lastActive: new Date().toISOString(),
  });
  assert(partialScore.totalScore === 40, `Partial score calculated accurately: expected 40, got ${partialScore.totalScore}`);

  console.log(`\n========================================`);
  console.log(`VERIFICATION SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
