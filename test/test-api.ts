// API Test Suite
const PORT = 5001;
process.env.PORT = String(PORT);
process.env.NODE_ENV = 'development';

async function runApiTests() {
  console.log('--- STARTING SERVER FOR API ENDPOINT INTEGRATION TESTS ---');

  // Dynamically import server to bind to test port
  await import('../server/server.js');

  // Give server 600ms to bind
  await new Promise((r) => setTimeout(r, 600));

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, msg: string) {
    if (condition) {
      console.log(`[PASS] ${msg}`);
      passed++;
    } else {
      console.error(`[FAIL] ${msg}`);
      failed++;
    }
  }

  async function api(path: string, options: any = {}) {
    const res = await fetch(`http://localhost:${PORT}/api${path}`, {
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    });
    const body = await res.json().catch(() => ({}));
    return { status: res.status, body };
  }

  try {
    // 1. Health Endpoint
    console.log('\n--- TESTING GET /api/health ---');
    const health = await api('/health');
    assert(health.status === 200, 'GET /api/health returns 200 OK');
    assert(health.body.status === 'ok', 'Health status is "ok"');
    assert(typeof health.body.geminiConfigured === 'boolean', 'geminiConfigured is a boolean');
    assert(!('geminiApiKey' in health.body), 'API key is NOT exposed in health check');
    assert(!('apiKey' in health.body), 'No secret key fields present in health check');

    // 2. Analyzer Endpoint (Validation)
    console.log('\n--- TESTING POST /api/analyze (Validation) ---');
    const emptyTest = await api('/analyze', {
      method: 'POST',
      body: JSON.stringify({ message: '', context: 'sms' }),
    });
    assert(emptyTest.status === 400, 'Empty message rejected with status 400');

    const tooShortTest = await api('/analyze', {
      method: 'POST',
      body: JSON.stringify({ message: 'hi', context: 'sms' }),
    });
    assert(tooShortTest.status === 400, 'Too short message rejected with status 400');

    // 3. Analyzer Endpoint (Demo Mode Execution)
    console.log('\n--- TESTING POST /api/analyze (Demo Mode Execution) ---');
    const demoTest = await api('/analyze', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Dear user, your SBI account KYC blocked today. Click http://sbi-fake-kyc.online',
        context: 'sms',
        forceDemo: true,
      }),
    });
    assert(demoTest.status === 200, 'POST /api/analyze returns 200 OK');
    assert(demoTest.body.isDemo === true, 'Analysis labeled explicitly as isDemo: true');
    assert(['High', 'Medium', 'Low', 'Uncertain'].includes(demoTest.body.riskLevel), 'riskLevel is valid enum');
    assert(Array.isArray(demoTest.body.warningSigns), 'warningSigns is an array');
    assert(demoTest.body.warningSigns.length > 0, 'Identified red flags in demo test');
    assert(Array.isArray(demoTest.body.recommendedActions), 'recommendedActions is an array');
    assert(Boolean(demoTest.body.linkSafety), 'linkSafety notice included');
    assert(Boolean(demoTest.body.educationalDisclaimer), 'educationalDisclaimer included');

    // 4. Progress Endpoints
    console.log('\n--- TESTING /api/progress REPOSITORY ENDPOINTS ---');
    const getProg = await api('/progress');
    assert(getProg.status === 200, 'GET /api/progress returns 200 OK');
    assert(typeof getProg.body.scansCount === 'number', 'scansCount is a number');

    // Record a quiz
    const quizPost = await api('/progress/quiz', {
      method: 'POST',
      body: JSON.stringify({
        id: 'test-quiz-1',
        categoryId: 'phishing',
        categoryName: 'Phishing Emails',
        score: 5,
        total: 5,
        percentage: 100,
        answers: [],
        completedAt: new Date().toISOString(),
      }),
    });
    assert(quizPost.status === 200, 'POST /api/progress/quiz returns 200 OK');
    assert(quizPost.body.success === true, 'Quiz attempt saved successfully');

    // Mark category complete
    const catPost = await api('/progress/category', {
      method: 'POST',
      body: JSON.stringify({ categoryId: 'fake-jobs' }),
    });
    assert(catPost.status === 200, 'POST /api/progress/category returns 200 OK');
    assert(catPost.body.completedCategories.includes('fake-jobs'), 'Category marked completed');

    // Save checklist items
    const chkPost = await api('/progress/checklist', {
      method: 'POST',
      body: JSON.stringify({ completedIds: ['chk-link-1', 'chk-link-2'] }),
    });
    assert(chkPost.status === 200, 'POST /api/progress/checklist returns 200 OK');
    assert(chkPost.body.checklistCompletedIds.length === 2, 'Checklist items saved');

    // Save simulation
    const simPost = await api('/progress/simulation', {
      method: 'POST',
      body: JSON.stringify({ simulationId: 'sim-internship-offer' }),
    });
    assert(simPost.status === 200, 'POST /api/progress/simulation returns 200 OK');
    assert(simPost.body.completedSimulations.includes('sim-internship-offer'), 'Simulation saved');

    // Clear progress
    const clearDel = await api('/progress', { method: 'DELETE' });
    assert(clearDel.status === 200, 'DELETE /api/progress returns 200 OK');
    assert(clearDel.body.success === true, 'Data cleared successfully');

    console.log(`\n========================================`);
    console.log(`API TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
    console.log(`========================================`);

    process.exit(failed > 0 ? 1 : 0);
  } catch (err) {
    console.error('API test execution error:', err);
    process.exit(1);
  }
}

runApiTests();
