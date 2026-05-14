/**
 * VeriTruth | Simulation Engine
 * Providing realistic mock data for UI/UX demonstration.
 */

const mockDatabase = {
    trusted: {
        truthScore: 94,
        verdict: "REAL",
        summary: "This article originates from a highly reputable news organization with a long history of factual reporting. The claims made in the text are supported by multiple independent sources and align with established data.",
        redFlags: ["No significant red flags detected"],
        publisherAnalysis: "Verified legacy media organization with strict editorial standards and a transparent correction policy."
    },
    unreliable: {
        truthScore: 18,
        verdict: "FAKE",
        summary: "This content exhibits multiple hallmarks of misinformation. The language is highly sensationalized, designed to provoke an emotional response rather than inform. Several claims directly contradict verifiable public records.",
        redFlags: [
            "Sensationalist/Clickbait headlines",
            "Lack of primary source citations",
            "Anonymously registered domain",
            "Logical inconsistencies in the main argument"
        ],
        publisherAnalysis: "This domain has been flagged by multiple fact-checking organizations as a frequent spreader of unverified or misleading claims."
    },
    satire: {
        truthScore: 45,
        verdict: "MIXED",
        summary: "This article appears to be satirical or opinion-based. While not strictly 'fake news' in a malicious sense, the facts are intentionally distorted for comedic or rhetorical effect.",
        redFlags: [
            "Hyperbolic statements",
            "Satirical context detected",
            "Not intended as a primary news source"
        ],
        publisherAnalysis: "Well-known satirical outlet or opinion blog. Content should be consumed as entertainment/commentary, not as factual reporting."
    },
    default: {
        truthScore: 62,
        verdict: "MIXED",
        summary: "The analysis of this URL is inconclusive. While some elements align with factual reporting, the article relies heavily on biased framing and lacks sufficient corroboration for its more controversial claims.",
        redFlags: [
            "Heavily biased framing",
            "Limited corroborating sources",
            "Occasional use of emotionally charged language"
        ],
        publisherAnalysis: "Independent news site or digital-first outlet with variable editorial oversight. Reader discretion is advised."
    }
};

// Application State
const state = {
    isAnalyzing: false
};

// UI Elements
const elements = {
    heroSection: document.getElementById('hero'),
    analysisSection: document.getElementById('analysis-state'),
    resultsSection: document.getElementById('results'),
    urlInput: document.getElementById('news-url'),
    analyzeBtn: document.getElementById('analyze-btn'),
    statusText: document.getElementById('status-text'),
    gaugeFill: document.getElementById('gauge-fill'),
    truthPercentage: document.getElementById('truth-percentage'),
    verdictBadge: document.getElementById('verdict-badge'),
    verdictTitle: document.getElementById('verdict-title'),
    aiInsights: document.getElementById('ai-insights-text'),
    redFlagsList: document.getElementById('red-flags-list'),
    publisherContext: document.getElementById('publisher-context'),
    resetBtn: document.getElementById('reset-btn')
};

// Initialize
function init() {
    elements.analyzeBtn.addEventListener('click', handleAnalysis);
    elements.resetBtn.addEventListener('click', resetApp);
    
    elements.urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAnalysis();
    });
}

// Analysis Logic
async function handleAnalysis() {
    const url = elements.urlInput.value.trim();
    
    if (!url || !url.startsWith('http')) {
        alert("Please enter a valid URL (starting with http:// or https://).");
        return;
    }
    
    showSection('analysis');

    try {
        // Step 1: Simulate the "investigative" phase
        updateStatus("Scraping metadata and article headers...");
        await new Promise(r => setTimeout(r, 1200));
        
        updateStatus("Analyzing linguistic patterns and sentiment...");
        await new Promise(r => setTimeout(r, 1500));
        
        updateStatus("Cross-referencing with global fact-check databases...");
        await new Promise(r => setTimeout(r, 1800));
        
        // Step 2: Determine which mock result to use
        const result = determineMockResult(url);
        
        displayResults(result);
    } catch (error) {
        console.error("Analysis Error:", error);
        alert("Verification failed. Please check your network connection.");
        showSection('hero');
    }
}

function determineMockResult(url) {
    const urlLower = url.toLowerCase();
    
    // Simple domain-based logic for simulation
    if (urlLower.includes('bbc.com') || urlLower.includes('reuters.com') || urlLower.includes('nytimes.com')) {
        return mockDatabase.trusted;
    } else if (urlLower.includes('theonion.com') || urlLower.includes('borowitz')) {
        return mockDatabase.satire;
    } else if (urlLower.includes('scam') || urlLower.includes('viral-news') || urlLower.includes('free-money')) {
        return mockDatabase.unreliable;
    }
    
    // Randomize or use default for others
    return mockDatabase.default;
}

// UI Transition Helpers
function showSection(section) {
    elements.heroSection.classList.add('hidden');
    elements.analysisSection.classList.add('hidden');
    elements.resultsSection.classList.add('hidden');

    if (section === 'hero') elements.heroSection.classList.remove('hidden');
    if (section === 'analysis') elements.analysisSection.classList.remove('hidden');
    if (section === 'results') elements.resultsSection.classList.remove('hidden');
}

function updateStatus(text) {
    elements.statusText.textContent = text;
}

// Result Display
function displayResults(data) {
    showSection('results');
    
    // Update Gauge
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (data.truthScore / 100) * circumference;
    
    elements.gaugeFill.style.strokeDasharray = circumference;
    elements.gaugeFill.style.strokeDashoffset = offset;
    
    // Set color based on score
    if (data.truthScore > 75) elements.gaugeFill.style.stroke = "var(--success)";
    else if (data.truthScore > 40) elements.gaugeFill.style.stroke = "var(--warning)";
    else elements.gaugeFill.style.stroke = "var(--error)";

    // Animate percentage text
    animateNumber(elements.truthPercentage, 0, data.truthScore, 2000);
    
    // Update Badge
    elements.verdictBadge.textContent = data.verdict;
    elements.verdictBadge.className = `badge ${data.verdict.toLowerCase()}`;
    elements.verdictTitle.textContent = getVerdictTitle(data.verdict);

    // Update Content
    elements.aiInsights.textContent = data.summary;
    elements.publisherContext.textContent = data.publisherAnalysis;
    
    // Update Red Flags
    elements.redFlagsList.innerHTML = '';
    data.redFlags.forEach(flag => {
        const li = document.createElement('li');
        li.textContent = flag;
        elements.redFlagsList.appendChild(li);
    });
}

function getVerdictTitle(verdict) {
    switch(verdict) {
        case 'REAL': return 'Source Verified';
        case 'FAKE': return 'High Risk Detected';
        case 'MIXED': return 'Caution Advised';
        default: return 'Analysis Complete';
    }
}

function animateNumber(element, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = `${current}%`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

function resetApp() {
    elements.urlInput.value = '';
    showSection('hero');
}

// Boot
init();
