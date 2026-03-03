// Quiz Data Structure
const quizData = {
    'Test 01 Computer': {
        duration: 3600, // 60 minutes in seconds
        questions: [
            { q: 'कंप्यूटर सिस्टम में अंकगणित तर्क इकाई (ALU) क्या करती है?', options: ['अंकगणित और बुलियन लॉजिकल गणना करती है', 'डेटा के प्रवाह को नियंत्रित करती है', 'मेमोरी आवंटन का प्रबंधन करती है', 'इनपुट और आउटपुट डिवाइस को जोड़ती है', 'उपर्युक्त में से कोई नहीं'], answer: 0 },
            { q: 'निम्नलिखित में से कौन-सा विकासकर्ता प्रौद्योगिकी विकास के साथ सुमेलित नहीं है?', options: ['जॉन वॉन न्यूमैन – कंप्यूटर आर्किटेक्चर', 'एलन ट्यूरिंग – डेटाबेस मैनेजमेंट', 'जैक किल्बी – इंटीग्रेटेड सर्किट टेक्नोलॉजी', 'टिम बर्नर्स-ली – वर्ल्ड वाइड वेब टेक्नोलॉजी', 'उपर्युक्त में से कोई नहीं'], answer: 1 },
            { q: '1954 में इंटरनेशनल बिजनेस मशीन्स (IBM) में जॉन बैकस और उनकी टीम ने कौन-सी प्रोग्रामिंग भाषा विकसित की?', options: ['COBOL', 'FORTRAN', 'C', 'UNIX', 'उपर्युक्त में से कोई नहीं'], answer: 1 },
            { q: 'हेक्साडेसिमल संख्या प्रणाली का आधार क्या है?', options: ['8', '10', '16', '2', 'उपर्युक्त में से कोई नहीं'], answer: 2 },
            { q: 'पहला दूरसंचार उपकरण था-', options: ['टेलीफोन', 'टेलीग्राफ', 'कंप्यूटर', 'टेलीविजन'], answer: 1 },
            { q: 'कंप्यूटरों के संदर्भ में POST का क्या अर्थ है?', options: ['Power-On Self-Test', 'Power-On System Test', 'Post-Operating System Test', 'Pre-Operating System Test', 'उपर्युक्त में से कोई नहीं'], answer: 0 },
            { q: 'भारत में प्रथम कंप्यूटर कहाँ प्रतिस्थापित (इंस्टॉल) किया गया?', options: ['टाटा इंस्टीट्यूट ऑफ फंडामेंटल रिसर्च, मुम्बई', 'इंडियन स्टेटिस्टिकल इंस्टीट्यूट, कोलकाता', 'कम्प्युटेशनल रिसर्च लेबोरेटरी (CRL), पुणे', 'इंडियन रेलवेज, नई दिल्ली'], answer: 1 },
            { q: 'डेटा का बैकअप न होने का संभावित परिणाम क्या है?', options: ['बेहतर ग्राफिक्स', 'कंप्यूटर की गति में वृद्धि', 'बेहतर इंटरनेट कनेक्टिविटी', 'डेटा हानि (Data loss)', 'उपर्युक्त में से कोई नहीं'], answer: 3 },
            { q: 'कैलकुलेटर किस प्रकार की कंप्यूटर कार्य पद्धति पर कार्य करता है?', options: ['हाइब्रिड कंप्यूटर', 'एनालॉग कंप्यूटर', 'डिजिटल कंप्यूटर', 'इनमें से कोई नहीं'], answer: 2 },
            { q: 'भारत में निर्मित प्रथम सुपर कंप्यूटर को क्या नाम दिया गया?', options: ['आकाश', 'परम', 'अर्जुन', 'सिद्धार्थ'], answer: 1 },
            { q: 'कंप्यूटरों की दूसरी पीढ़ी (सेकंड जनरेशन) किस दौरान देखी गई थी?', options: ['1940-1956', '1963-1972', '1956-1963', '1973-Present'], answer: 2 },
            { q: '........ वर्ष से तृतीय पीढ़ी के कंप्यूटर का प्रयोग शुरू हुआ था।', options: ['1940-1956', '1965-1971', '1957-1962', '1973- वर्तमान'], answer: 1 },
            { q: 'निम्नलिखित में से किस व्यक्ति को \'कंप्यूटिंग के जनक\' के रूप में जाना जाता है?', options: ['चार्ल्स बैबेज', 'टिम बर्नर्स ली', 'फिलिप डॉन एस्ट्रिज', 'जेम्स गॉसलिंग्स'], answer: 0 },
            { q: 'निम्नलिखित में से कौन-सा कंप्यूटर एनालॉग आउटपुट को डिजिटल फॉर्म में परिवर्तित करने से मुख्यत: सम्बद्ध है?', options: ['डिजिटल कंप्यूटर', 'एनालॉग कंप्यूटर', 'हाइब्रिड कंप्यूटर', 'मेनफ्रेम कंप्यूटर'], answer: 2 },
            { q: '........ कंप्यूटर का सबसे आम प्रकार है। इसका उपयोग आम तौर पर द्विआधारी संख्या प्रणाली का उपयोग करके मात्राओं के साथ जानकारी को संसाधित करने के लिए किया जाता है।', options: ['हाइब्रिड', 'डिजिटल', 'एनालॉग', 'कॉम्प्लेक्स'], answer: 1 },
            { q: '1943 में जे डब्ल्यू मौचली और जे. प्रेस्पर इर्ट द्वारा बिना किसी यांत्रिक हिस्सों के बनाये गए पहले कंप्यूटर को क्या कहा गया था?', options: ['ENIAC', 'Mark I', 'Mark II', 'EDVAC'], answer: 0 },
            { q: 'कंप्यूटर की मूल भाषा (The fundamental language of a computer) क्या है?', options: ['सामान्य भाषा', 'मशीन स्तर भाषा (Machine level language)', 'असेंबली स्तर भाषा', 'उच्च स्तर भाषा', 'उपर्युक्त में से कोई नहीं'], answer: 1 },
            { q: '\'स्टोर्ड-प्रोग्राम आर्किटेक्चर\' की अवधारणा सबसे पहले निम्नलिखित में से किस अग्रदूत द्वारा व्यक्त की गई थी?', options: ['ग्रेस हॉपर', 'जॉन वॉन न्यूमैन', 'स्टीव जॉब्स', 'बिल गेट्स', 'उपर्युक्त में से कोई नहीं'], answer: 1 },
            { q: 'निम्नलिखित में से कौन पाँचवीं पीढ़ी के कंप्यूटरों की नींव है?', options: ['वीवीएलएसआई', 'आर्टिफिशियल इंटेलिजेंस', 'ट्रांजिस्टर', 'वैक्यूम ट्यूब'], answer: 1 },
            { q: 'पहले यांत्रिक कैलकुलेटर को ........ कहा जाता था।', options: ['गैलेलियो', 'कैलकुलेटर', 'पास्कलाइन', 'ऑर्बेट'], answer: 2 },
            { q: 'असेंबली लैंग्वेज का इस्तेमाल कंप्यूटर की ........ पीढ़ी में किया गया था।', options: ['तीसरी', 'पहली', 'चौथी', 'दूसरी'], answer: 3 },
            { q: 'निम्नलिखित में से कौन-सा ऑपरेशन के आधार पर कंप्यूटर का एक प्रकार नहीं है?', options: ['डिजिटल', 'हाइब्रिड', 'रिमोट', 'एनालॉग'], answer: 2 },
            { q: 'किसे आधुनिक कंप्यूटर का जनक माना जाता है?', options: ['बिल गेट्स', 'सुन्दर पिचाई', 'चार्ल्स बैबेज', 'स्टीव जॉब्स'], answer: 2 },
            { q: 'पहली पीढ़ी के कंप्यूटरों में ........ का प्रयोग किया जाता था।', options: ['निर्वात नलिकाओं (वैक्यूम ट्यूब्स) का', 'प्रथनकों (ट्रांजिस्टर) का', 'अर्द्धचालकों का', 'यांत्रिक गियर्स का'], answer: 0 },
            { q: 'कंप्यूटर की दूसरी पीढ़ी ........ पर आधारित थी।', options: ['एकीकृत परिपथों', 'प्रथनकों (ट्रांजिस्टर)', 'VLSI चिप्स', 'निर्वात नलिकाओं'], answer: 1 },
            { q: 'भारत का सबसे शक्तिशाली सुपर कंप्यूटर \'प्रत्युष\' IITM में कहाँ स्थापित किया गया है?', options: ['हैदराबाद', 'रुड़की', 'कानपुर', 'पुणे'], answer: 3 },
            { q: 'निम्नलिखित में से कौन एक 2018 में स्थापित भारत का सबसे तेज सुपर कंप्यूटर है?', options: ['आदित्य', 'सहर्ष T', 'TIFR - Cray XC30', 'प्रत्युष'], answer: 3 },
            { q: 'कौन इच्छानुसार डेटा को स्टोर, प्रोसेस और पुनः प्राप्त कर सकता है?', options: ['टाइपराइटर', 'टैब', 'मॉनिटर', 'कंप्यूटर', 'उपर्युक्त में से कोई नहीं'], answer: 3 },
            { q: 'कंप्यूटर का जनक कौन है?', options: ['जॉन वॉन', 'एलन ट्यूरिंग', 'ब्लेज़ पास्कल', 'चार्ल्स बैबेज', 'उपर्युक्त में से कोई नहीं'], answer: 3 },
            { q: 'कंप्यूटर बनाने का पहला विश्वविद्यालय-आधारित प्रयास क्या था?', options: ['स्टैनफोर्ड विश्वविद्यालय', 'हार्वर्ड विश्वविद्यालय', 'आयोवा स्टेट विश्वविद्यालय', 'पेनिसल्वेनिया विश्वविद्यालय', 'उपर्युक्त में से कोई नहीं'], answer: 2 },
            { q: 'डिजिटल रूप में सूचना संग्रहीत करने के लिए किस उपकरण का उपयोग किया जाता है?', options: ['पाठ्यपुस्तक', 'टाइपराइटर', 'व्हाइटबोर्ड', 'लैपटॉप', 'उपर्युक्त में से कोई नहीं'], answer: 3 },
            { q: 'कंप्यूटर का प्राथमिक उद्देश्य क्या है?', options: ['ड्राइंग और डिजाइनिंग', 'मनोरंजन', 'गेमिंग', 'डेटा का भंडारण, प्रसंस्करण और पुनर्प्राप्ति', 'उपर्युक्त में से कोई नहीं'], answer: 3 },
            { q: 'कंप्यूटर पीढ़ी और संबंधित प्रौद्योगिकी का सही मिलान?', options: ['पहली - वैक्यूम ट्यूब्स', 'दूसरी - ट्रांजिस्टर', 'तीसरी - एकीकृत सर्किट', 'चौथी - माइक्रोप्रोसेसर चिप्स'], answer: 0 },
            { q: 'कौन-से कंप्यूटर वास्तविक संख्याओं से निपटते हैं और गिनती करके उत्तर प्राप्त करते हैं?', options: ['डिजिटल', 'लो स्पीड', 'एनालॉग', 'हार्ड स्पीड', 'उपर्युक्त में से कोई नहीं'], answer: 0 },
            { q: 'पहली पीढ़ी के कंप्यूटरों में इस्तेमाल की जाने वाली मुख्य मेमोरी डिवाइस क्या थी?', options: ['ट्रांजिस्टर मेमोरी', 'चुंबकीय डिस्क', 'एकीकृत सर्किट', 'चुंबकीय ड्रम', 'उपर्युक्त में से कोई नहीं'], answer: 3 },
            { q: 'कंप्यूटर सिस्टम के दो मुख्य घटक क्या हैं?', options: ['मेमोरी और स्टोरेज', 'हार्डवेयर और सॉफ्टवेयर', 'प्रोसेसर और नेटवर्क', 'इनपुट और आउटपुट', 'उपर्युक्त में से कोई नहीं'], answer: 1 },
            { q: '1981 में कंप्यूटर के इतिहास में कौन-सी महत्वपूर्ण घटना घटी?', options: ['एप्पल की मैकिन्टोश लाइन का शुभारंभ', 'पहले RISC वर्कस्टेशन का विमोचन', 'पहले चुंबकीय टेप स्टोरेज का परिचय', 'IBM PC का परिचय', 'उपर्युक्त में से कोई नहीं'], answer: 3 },
            { q: 'बाइनरी संख्या 11100001111 का दशमलव समतुल्य क्या होगा?', options: ['1806', '1807', '2806', '2807'], answer: 1 },
            { q: 'बाइनरी संख्या 1011 का दशमलव समतुल्य क्या होगा?', options: ['8', '9', '11', '15'], answer: 2 },
            { q: 'कंप्यूटर में डेटा किस रूप में भंडारण होता है?', options: ['आक्टल', 'हेक्सा-डेसीमल', 'डेसीमल', 'बाइनरी'], answer: 3 },
            { q: 'कंप्यूटर माउस का आविष्कार किसने किया था?', options: ['डगलस एंजेलबर्ट', 'वानेवर बुश', 'रॉबर्ट स्मिथ', 'बर्टरम राफेल'], answer: 0 },
            { q: 'निम्नलिखित में से किस द्विआधारी संक्रिया का परिणाम 111010 होगा?', options: ['111111 - 1011', '100101 + 10101', '110001 + 10101', '111101 - 101'], answer: 1 },
            { q: 'निम्नलिखित में से कौन-सी द्विआधारी संक्रिया परिणाम स्वरूप 101011 देगी?', options: ['100010 + 11001', '110101 - 1010', '101111 - 1100', '100101 + 1010'], answer: 1 },
            { q: 'निम्न में से कौन-सा बाइनरी संख्या प्रणाली का उदाहरण है?', options: ['3A16', '14870', '11101', '35026'], answer: 2 },
            { q: 'संख्या \'147\' के समतुल्य बाइनरी संख्या कौन सी है?', options: ['10010011', '10011011', '10110011', '10001111'], answer: 0 },
            { q: 'बाइनरी संख्या प्रणाली को यह भी कहते हैं-', options: ['बेस 2 संख्या प्रणाली', 'बेस 8 संख्या प्रणाली', 'बेस 16 संख्या प्रणाली', 'बेस 10 संख्या प्रणाली'], answer: 0 },
            { q: 'बाइनरी नंबर प्रणाली में प्रयुक्त किये जाने वाले विशिष्ट प्रतीकों की सही संख्या है-', options: ['सोलह', 'दस', 'आठ', 'दो'], answer: 3 },
            { q: 'डि मॉर्गन का द्वितीय प्रमेय कहता है कि एक NAND गेट एक बबल्ड ........ गेट के तुल्य होता है।', options: ['XAND', 'AND', 'OR', 'XOR', 'उपर्युक्त में से कोई नहीं'], answer: 2 },
            { q: 'बाइनरी संख्या 0000 1111 0010 1101 का 1\'s कॉम्प्लिमेंट (पूरक) क्या है?', options: ['1111 0000 1101 0010', '1111 0000 0010 1101', '1001 0010 1010 1100', '1111 1100 1010 1100', 'उपर्युक्त में से कोई नहीं'], answer: 0 },
            { q: 'सेंट्रल प्रोसेसिंग यूनिट (CPU) की मूल संगणना इकाई को क्या कहते हैं?', options: ['Core', 'Processor', 'Random Access memory (RAM)', 'Disc', 'उपर्युक्त में से कोई नहीं'], answer: 0 },
            { q: 'जब कोई प्रक्रिया "Ready" अवस्था में होती है, तो इसका क्या अर्थ होता है?', options: ['प्रक्रिया निष्पादित होने के लिए रेडी है, लेकिन सी पी यू आवंटित होने की प्रतीक्षा कर रही है', 'प्रक्रिया वर्तमान में सी पी यू पर निष्पादित हो रही है', 'प्रक्रिया ने निष्पादन पूरा कर लिया है और समाप्त हो गई है', 'प्रक्रिया किसी बाहरी घटना की प्रतीक्षा कर रही है', 'उपर्युक्त में से कोई नहीं'], answer: 0 },
            { q: 'मेमोरी डेटा रजिस्टर (MDR) क्या रखता है?', options: ['CPU की वर्तमान स्थिति', 'वर्तमान निर्देश का पता', 'निष्पादित करने के लिए अगला निर्देश', 'मेमोरी में संग्रहीत या पुन:प्राप्त किया जा रहा मान', 'उपर्युक्त में से कोई नहीं'], answer: 3 }
        ]
    }
};

// Global state
let currentTest = null;
let currentAnswers = {};
let flaggedQuestions = new Set();
let timeLeft = 0;
let timerInterval = null;
let currentQuestionIndex = 0;

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function startTimer(duration) {
    timeLeft = duration;
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        // Warning alerts
        if (timeLeft === 300) alert('⏰ 5 minutes remaining!');
        else if (timeLeft === 60) alert('⏰ 1 minute remaining!');
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Test auto-submitting...');
            submitTest();
        }
    }, 1000);
}

function updateTimer() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    const timerEl = document.getElementById('timer');
    timerEl.textContent = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
    
    // Change color when time is low
    if (timeLeft <= 60) {
        timerEl.classList.add('warning');
    }
}

function renderSidebar() {
    const container = document.getElementById('question-nav');
    container.innerHTML = '';
    
    currentTest.questions.forEach((_, idx) => {
        const div = document.createElement('div');
        div.className = 'q-number';
        div.textContent = (idx + 1);
        
        if (idx === currentQuestionIndex) {
            div.classList.add('active');
        } else if (flaggedQuestions.has(idx)) {
            div.classList.add('flagged');
        } else if (currentAnswers.hasOwnProperty(idx)) {
            div.classList.add('attempted');
        } else {
            div.classList.add('skipped');
        }
        
        div.onclick = () => jumpToQuestion(idx);
        container.appendChild(div);
    });
}

function renderCurrentQuestion() {
    const container = document.getElementById('questions-container');
    const q = currentTest.questions[currentQuestionIndex];
    
    const qDiv = document.createElement('div');
    qDiv.className = 'question-box';
    
    let optionsHTML = q.options.map((opt, i) => {
        const isSelected = currentAnswers[currentQuestionIndex] === i;
        return `
            <label class="option ${isSelected ? 'selected' : ''}">
                <input type="radio" name="q${currentQuestionIndex}" value="${i}" 
                    ${isSelected ? 'checked' : ''} 
                    onchange="selectAnswer(${currentQuestionIndex}, ${i})">
                <span>${String.fromCharCode(97 + i)}) ${opt}</span>
            </label>
        `;
    }).join('');
    
    const isFlagged = flaggedQuestions.has(currentQuestionIndex);
    qDiv.innerHTML = `
        <div class="question-header">
            <span class="question-num">Q ${currentQuestionIndex + 1}</span>
            <button class="flag-btn ${isFlagged ? 'flagged' : ''}" 
                onclick="toggleFlag(${currentQuestionIndex})" 
                title="Flag for review">
                🚩
            </button>
        </div>
        <div class="question-text">${q.q}</div>
        <div class="options-container">
            ${optionsHTML}
        </div>
        <div class="notes-section">
            <div class="notes-label">📝 Notes (Optional)</div>
            <textarea class="notes-input" id="notes-${currentQuestionIndex}" 
                placeholder="Write your notes or hints here...">${getNotes(currentQuestionIndex) || ''}</textarea>
        </div>
    `;
    
    container.innerHTML = qDiv.outerHTML;
}

function selectAnswer(qIdx, optIdx) {
    currentAnswers[qIdx] = optIdx;
    updateProgress();
    renderSidebar();
}

function toggleFlag(qIdx) {
    if (flaggedQuestions.has(qIdx)) {
        flaggedQuestions.delete(qIdx);
    } else {
        flaggedQuestions.add(qIdx);
    }
    renderSidebar();
    renderCurrentQuestion();
}

function jumpToQuestion(idx) {
    saveNotes(currentQuestionIndex);
    currentQuestionIndex = idx;
    renderCurrentQuestion();
    renderSidebar();
    updateProgressIndicator();
}

function nextQuestion() {
    saveNotes(currentQuestionIndex);
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
        renderSidebar();
        updateProgressIndicator();
    }
}

function previousQuestion() {
    saveNotes(currentQuestionIndex);
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
        renderSidebar();
        updateProgressIndicator();
    }
}

function updateProgressIndicator() {
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');
    prev.disabled = (currentQuestionIndex === 0);
    next.textContent = (currentQuestionIndex === currentTest.questions.length - 1) ? 'Review' : 'Next →';
    
    document.getElementById('q-indicator').textContent = 
        `Q ${currentQuestionIndex + 1} / ${currentTest.questions.length}`;
}

function updateProgress() {
    const totalQ = currentTest.questions.length;
    const attempted = Object.keys(currentAnswers).length;
    const skipped = totalQ - attempted;
    
    document.getElementById('progress-counter').textContent = `${attempted}/${totalQ}`;
    document.getElementById('progress-detail').textContent = 
        `${attempted} Attempted | ${skipped} Skipped`;
    
    const percentage = (attempted / totalQ) * 100;
    document.getElementById('progress-fill').style.width = percentage + '%';
}

function submitTest() {
    saveNotes(currentQuestionIndex);
    clearInterval(timerInterval);
    
    const questions = currentTest.questions;
    const totalQ = questions.length;
    const attempted = Object.keys(currentAnswers).length;
    
    let correct = 0;
    let wrong = 0;
    
    Object.keys(currentAnswers).forEach(qIdx => {
        const idx = parseInt(qIdx);
        const userAns = currentAnswers[idx];
        const correctAns = questions[idx].answer;
        
        if (userAns === correctAns) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    const skipped = totalQ - attempted;
    const score = (correct * 1) + (wrong * -0.25);
    
    // Save to leaderboard
    const userName = prompt('Enter your name for leaderboard:', 'Anonymous');
    const userData = {
        name: userName || 'Anonymous',
        testName: getQueryParam('test'),
        score: score,
        attempted: attempted,
        correct: correct,
        wrong: wrong,
        skipped: skipped,
        total: totalQ,
        date: new Date().toLocaleString()
    };
    
    saveToLeaderboard(userData);
    const rank = getRank(score);
    
    // Display results
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('quiz-header').style.display = 'none';
    document.getElementById('progress-bar-container').style.display = 'none';
    
    document.getElementById('result-total').textContent = totalQ;
    document.getElementById('result-attempted').textContent = attempted;
    document.getElementById('result-correct').textContent = correct;
    document.getElementById('result-wrong').textContent = wrong;
    document.getElementById('result-skipped').textContent = skipped;
    document.getElementById('result-score').textContent = score.toFixed(2);
    document.getElementById('rank-display').textContent = rank;
    
    // Generate detailed review
    generateDetailedReview(questions);
    
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('back-btn').style.display = 'inline-block';
}

function generateDetailedReview(questions) {
    const reviewContainer = document.getElementById('detailed-review');
    reviewContainer.innerHTML = '';
    
    Object.keys(currentAnswers).forEach(qIdx => {
        const idx = parseInt(qIdx);
        const q = questions[idx];
        const userAnsIdx = currentAnswers[idx];
        const correctAnsIdx = q.answer;
        const isCorrect = userAnsIdx === correctAnsIdx;
        
        const reviewDiv = document.createElement('div');
        reviewDiv.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
        
        let optionsHTML = q.options.map((opt, i) => {
            let optClass = 'review-option';
            let label = '';
            
            if (i === userAnsIdx && i === correctAnsIdx) {
                optClass += ' correct-answer';
                label = ' ✅ Your Answer (Correct)';
            } else if (i === userAnsIdx && i !== correctAnsIdx) {
                optClass += ' wrong-answer';
                label = ' ❌ Your Answer (Wrong)';
            } else if (i === correctAnsIdx) {
                optClass += ' correct-answer';
                label = ' ✅ Correct Answer';
            }
            
            return `
                <div class="${optClass}">
                    <strong>${String.fromCharCode(97 + i)})${label}</strong> ${opt}
                </div>
            `;
        }).join('');
        
        const statusIcon = isCorrect ? '✅' : '❌';
        const statusText = isCorrect ? 'CORRECT' : 'WRONG';
        
        reviewDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <div class="review-question">Q ${idx + 1}. ${q.q}</div>
                <span style="font-weight: bold; color: ${isCorrect ? '#4caf50' : '#f44336'};">${statusIcon} ${statusText}</span>
            </div>
            <div class="review-options">
                ${optionsHTML}
            </div>
        `;
        
        reviewContainer.appendChild(reviewDiv);
    });
}

function saveToLeaderboard(result) {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    leaderboard.push(result);
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 100)));
}

function getRank(score) {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    let rank = 1;
    leaderboard.forEach(entry => {
        if (entry.score > score) rank++;
    });
    return `${rank} / ${leaderboard.length}`;
}

function getNotes(qIdx) {
    const notes = JSON.parse(localStorage.getItem('test-notes') || '{}');
    return notes[qIdx] || '';
}

function saveNotes(qIdx) {
    const textarea = document.getElementById(`notes-${qIdx}`);
    if (textarea) {
        let notes = JSON.parse(localStorage.getItem('test-notes') || '{}');
        notes[qIdx] = textarea.value;
        localStorage.setItem('test-notes', JSON.stringify(notes));
    }
}

function goBack() {
    localStorage.removeItem('test-notes');
    window.location.href = 'index.html#exams';
}

function setDesktopMode() {
    document.body.classList.remove('mobile-mode');
    document.body.classList.add('desktop-mode');
    document.getElementById('desktop-btn').classList.add('active');
    document.getElementById('mobile-btn').classList.remove('active');
    localStorage.setItem('deviceMode', 'desktop');
}

function setMobileMode() {
    document.body.classList.remove('desktop-mode');
    document.body.classList.add('mobile-mode');
    document.getElementById('mobile-btn').classList.add('active');
    document.getElementById('desktop-btn').classList.remove('active');
    localStorage.setItem('deviceMode', 'mobile');
}

function initializeDeviceMode() {
    const savedMode = localStorage.getItem('deviceMode') || 'desktop';
    if (savedMode === 'mobile') {
        setMobileMode();
    } else {
        setDesktopMode();
    }
}

function initQuiz() {
    const testName = getQueryParam('test');
    if (!testName) {
        document.getElementById('quiz-container').innerHTML = '<p>Quiz not found.</p>';
        return;
    }
    
    // Check if test is in quizData (legacy format)
    if (quizData[testName]) {
        currentTest = quizData[testName];
    } else {
        // Check if test is in localStorage (added via admin panel)
        const allTests = JSON.parse(localStorage.getItem('allTests') || '[]');
        const adminTest = allTests.find(t => t.testName === testName);
        
        if (!adminTest) {
            document.getElementById('quiz-container').innerHTML = '<p>❌ Quiz not found. Please check if the test exists.</p>';
            return;
        }
        
        // Convert admin test format to quizData format
        currentTest = {
            duration: adminTest.duration * 60, // Convert minutes to seconds
            questions: adminTest.questions.map(q => ({
                q: q.question,
                options: q.options,
                answer: q.correct,
                explanation: q.explanation || 'No explanation provided.'
            })),
            testName: adminTest.testName,
            category: adminTest.category
        };
    }
    
    if (!currentTest) {
        document.getElementById('quiz-container').innerHTML = '<p>Quiz not found.</p>';
        return;
    }
    
    document.getElementById('page-title').textContent = testName;
    
    renderCurrentQuestion();
    renderSidebar();
    updateProgressIndicator();
    document.getElementById('quiz-container').style.display = 'flex';
    document.getElementById('quiz-header').style.display = 'flex';
    document.getElementById('progress-bar-container').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'inline-block';
    
    startTimer(currentTest.duration);
    updateProgress();
    
    // Initialize device mode
    initializeDeviceMode();
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextQuestion();
        if (e.key === 'ArrowLeft') previousQuestion();
    });
}

document.addEventListener('DOMContentLoaded', initQuiz);
