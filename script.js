// script.js

let tests = [
    'Test 01 Computer'
];

let testCategories = {
    'previous-year': [
        // 'Previous Year 2024 Main Exam',
        // 'Previous Year 2023 Main Exam',
        // 'Previous Year 2022 Main Exam',
        // 'Previous Year 2021 Main Exam',
        // 'Previous Year 2020 Main Exam'
    ],
    'sectional': [
        'Test 01 Computer',
        'Test 02 Hindi',
        'Test 03 English',
        'Test 04 Aptitude',
        'Test 05 Reasoning',
        'Test 06 General Knowledge'
    ],
    'full-length': [
        'Full Length Mock 01',
        'Full Length Mock 02',
        'Full Length Mock 03',
        'Full Length Mock 04',
        'Full Length Mock 05'
    ]
};

let currentCategory = null;

// Daily Updates Data - Tests uploaded today
const dailyUpdates = [
    {
        testName: 'Test 01 Computer',
        category: 'sectional',
        uploadTime: 'Today at 10:30 AM',
        description: '50 questions on Computer Fundamentals',
        isNew: true
    },
    {
        testName: 'Full Length Mock 05',
        category: 'full-length',
        uploadTime: 'Today at 9:15 AM',
        description: '100 questions - Complete Mock Exam',
        isNew: true
    }
];

// Function to populate daily updates
function populateDailyUpdates() {
    const container = document.getElementById('daily-updates-container');
    if (!container) return;
    
    // Get daily updates from localStorage (set by admin) or use defaults
    const storedUpdates = JSON.parse(localStorage.getItem('dailyUpdates') || 'null');
    const updates = storedUpdates || dailyUpdates;
    
    container.innerHTML = '';
    
    if (updates.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No new tests uploaded today</p>';
        return;
    }
    
    updates.forEach(update => {
        const card = document.createElement('div');
        card.className = 'daily-update-card';
        card.innerHTML = `
            <span class="update-badge ${update.isNew ? 'new' : ''}">
                ${update.isNew ? '🆕 NEW' : 'UPDATED'}
            </span>
            <div class="update-title">${update.testName}</div>
            <div class="update-info">
                <div>📁 Category: <strong>${getCategoryLabel(update.category)}</strong></div>
                <div>⏰ ${update.uploadTime}</div>
                <div>❓ ${update.description}</div>
            </div>
            <button class="attempt-btn" onclick="startDailyTest('${update.testName}', '${update.category}')">
                🚀 Attempt Now
            </button>
        `;
        container.appendChild(card);
    });
}

// Helper function to get category label
function getCategoryLabel(category) {
    const labels = {
        'previous-year': 'Previous Year Papers',
        'sectional': 'Sectional Tests',
        'full-length': 'Full Length Mocks'
    };
    return labels[category] || category;
}

// Function to start test from daily updates
function startDailyTest(testName, category) {
    currentCategory = category;
    const url = 'mocktest.html?test=' + encodeURIComponent(testName);
    window.location.href = url;
}

const quizzes = {
    'Test 01 Computer': `
        <ol>
            <li><strong>कंप्यूटर सिस्टम में अंकगणित तर्क इकाई (ALU) क्या करती है?</strong><br/>
                (a) अंकगणित और बुलियन लॉजिकल गणना करती है<br/>
                (b) डेटा के प्रवाह को नियंत्रित करती है<br/>
                (c) मेमोरी आवंटन का प्रबंधन करती है<br/>
                (d) इनपुट और आउटपुट डिवाइस को जोड़ती है<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>निम्नलिखित में से कौन-सा विकासकर्ता प्रौद्योगिकी विकास के साथ सुमेलित नहीं है?</strong><br/>
                (a) जॉन वॉन न्यूमैन – कंप्यूटर आर्किटेक्चर<br/>
                (b) एलन ट्यूरिंग – डेटाबेस मैनेजमेंट<br/>
                (c) जैक किल्बी – इंटीग्रेटेड सर्किट टेक्नोलॉजी<br/>
                (d) टिम बर्नर्स-ली – वर्ल्ड वाइड वेब टेक्नोलॉजी<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (b) (सही सुमेलित: एलन ट्यूरिंग – अग्रणी कंप्यूटर वैज्ञानिक एवं गणितज्ञ)</em>
            </li>
            <li><strong>1954 में इंटरनेशनल बिजनेस मशीन्स (IBM) में जॉन बैकस और उनकी टीम ने कौन-सी प्रोग्रामिंग भाषा विकसित की?</strong><br/>
                (a) COBOL<br/>
                (b) FORTRAN<br/>
                (c) C<br/>
                (d) UNIX<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>हेक्साडेसिमल संख्या प्रणाली का आधार क्या है?</strong><br/>
                (a) 8<br/>
                (b) 10<br/>
                (c) 16<br/>
                (d) 2<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>पहला दूरसंचार उपकरण था-</strong><br/>
                (a) टेलीफोन<br/>
                (b) टेलीग्राफ<br/>
                (c) कंप्यूटर<br/>
                (d) टेलीविजन<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>कंप्यूटरों के संदर्भ में POST का क्या अर्थ है?</strong><br/>
                (a) Power-On Self-Test<br/>
                (b) Power-On System Test<br/>
                (c) Post-Operating System Test<br/>
                (d) Pre-Operating System Test<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>भारत में प्रथम कंप्यूटर कहाँ प्रतिस्थापित (इंस्टॉल) किया गया?</strong><br/>
                (a) टाटा इंस्टीट्यूट ऑफ फंडामेंटल रिसर्च, मुम्बई<br/>
                (b) इंडियन स्टेटिस्टिकल इंस्टीट्यूट, कोलकाता<br/>
                (c) कम्प्युटेशनल रिसर्च लेबोरेटरी (CRL), पुणे<br/>
                (d) इंडियन रेलवेज, नई दिल्ली<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>डेटा का बैकअप न होने का संभावित परिणाम क्या है?</strong><br/>
                (a) बेहतर ग्राफिक्स<br/>
                (b) कंप्यूटर की गति में वृद्धि<br/>
                (c) बेहतर इंटरनेट कनेक्टिविटी<br/>
                (d) डेटा हानि (Data loss)<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कैलकुलेटर किस प्रकार की कंप्यूटर कार्य पद्धति पर कार्य करता है?</strong><br/>
                (a) हाइब्रिड कंप्यूटर<br/>
                (b) एनालॉग कंप्यूटर<br/>
                (c) डिजिटल कंप्यूटर<br/>
                (d) इनमें से कोई नहीं<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>भारत में निर्मित प्रथम सुपर कंप्यूटर को क्या नाम दिया गया?</strong><br/>
                (a) आकाश<br/>
                (b) परम<br/>
                (c) अर्जुन<br/>
                (d) सिद्धार्थ<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>कंप्यूटरों की दूसरी पीढ़ी (सेकंड जनरेशन) किस दौरान देखी गई थी?</strong><br/>
                (a) 1940-1956<br/>
                (b) 1963-1972<br/>
                (c) 1956-1963<br/>
                (d) 1973-Present<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>........ वर्ष से तृतीय पीढ़ी के कंप्यूटर का प्रयोग शुरू हुआ था।</strong><br/>
                (a) 1940-1956<br/>
                (b) 1965-1971<br/>
                (c) 1957-1962<br/>
                (d) 1973- वर्तमान<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>निम्नलिखित में से किस व्यक्ति को 'कंप्यूटिंग के जनक' के रूप में जाना जाता है?</strong><br/>
                (a) चार्ल्स बैबेज<br/>
                (b) टिम बर्नर्स ली<br/>
                (c) फिलिप डॉन एस्ट्रिज<br/>
                (d) जेम्स गॉसलिंग्स<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>निम्नलिखित में से कौन-सा कंप्यूटर एनालॉग आउटपुट को डिजिटल फॉर्म में परिवर्तित करने से मुख्यत: सम्बद्ध है?</strong><br/>
                (a) डिजिटल कंप्यूटर<br/>
                (b) एनालॉग कंप्यूटर<br/>
                (c) हाइब्रिड कंप्यूटर<br/>
                (d) मेनफ्रेम कंप्यूटर<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>........ कंप्यूटर का सबसे आम प्रकार है। इसका उपयोग आम तौर पर द्विआधारी संख्या प्रणाली का उपयोग करके मात्राओं के साथ जानकारी को संसाधित करने के लिए किया जाता है।</strong><br/>
                (a) हाइब्रिड<br/>
                (b) डिजिटल<br/>
                (c) एनालॉग<br/>
                (d) कॉम्प्लेक्स<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>1943 में जे डब्ल्यू मौचली और जे. प्रेस्पर इर्ट द्वारा बिना किसी यांत्रिक हिस्सों के बनाये गए पहले कंप्यूटर को क्या कहा गया था?</strong><br/>
                (a) ENIAC<br/>
                (b) Mark I<br/>
                (c) Mark II<br/>
                (d) EDVAC<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>कंप्यूटर की मूल भाषा (The fundamental language of a computer) क्या है?</strong><br/>
                (a) सामान्य भाषा<br/>
                (b) मशीन स्तर भाषा (Machine level language)<br/>
                (c) असेंबली स्तर भाषा<br/>
                (d) उच्च स्तर भाषा<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>'स्टोर्ड-प्रोग्राम आर्किटेक्चर' की अवधारणा सबसे पहले निम्नलिखित में से किस अग्रदूत द्वारा व्यक्त की गई थी?</strong><br/>
                (a) ग्रेस हॉपर<br/>
                (b) जॉन वॉन न्यूमैन<br/>
                (c) स्टीव जॉब्स<br/>
                (d) बिल गेट्स<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>निम्नलिखित में से कौन पाँचवीं पीढ़ी के कंप्यूटरों की नींव है?</strong><br/>
                (a) वीवीएलएसआई<br/>
                (b) आर्टिफिशियल इंटेलिजेंस<br/>
                (c) ट्रांजिस्टर<br/>
                (d) वैक्यूम ट्यूब<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>पहले यांत्रिक कैलकुलेटर को ........ कहा जाता था।</strong><br/>
                (a) गैलेलियो<br/>
                (b) कैलकुलेटर<br/>
                (c) पास्कलाइन<br/>
                (d) ऑर्बेट<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>असेंबली लैंग्वेज का इस्तेमाल कंप्यूटर की ........ पीढ़ी में किया गया था।</strong><br/>
                (a) तीसरी<br/>
                (b) पहली<br/>
                (c) चौथी<br/>
                (d) दूसरी<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>निम्नलिखित में से कौन-सा ऑपरेशन के आधार पर कंप्यूटर का एक प्रकार नहीं है?</strong><br/>
                (a) डिजिटल<br/>
                (b) हाइब्रिड<br/>
                (c) रिमोट<br/>
                (d) एनालॉग<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>किसे आधुनिक कंप्यूटर का जनक माना जाता है?</strong><br/>
                (a) बिल गेट्स<br/>
                (b) सुन्दर पिचाई<br/>
                (c) चार्ल्स बैबेज<br/>
                (d) स्टीव जॉब्स<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>पहली पीढ़ी के कंप्यूटरों में ........ का प्रयोग किया जाता था।</strong><br/>
                (a) निर्वात नलिकाओं (वैक्यूम ट्यूब्स) का<br/>
                (b) प्रथनकों (ट्रांजिस्टर) का<br/>
                (c) अर्द्धचालकों का<br/>
                (d) यांत्रिक गियर्स का<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>कंप्यूटर की दूसरी पीढ़ी ........ पर आधारित थी।</strong><br/>
                (a) एकीकृत परिपथों<br/>
                (b) प्रथनकों (ट्रांजिस्टर)<br/>
                (c) VLSI चिप्स<br/>
                (d) निर्वात नलिकाओं<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>भारत का सबसे शक्तिशाली सुपर कंप्यूटर 'प्रत्युष' IITM में कहाँ स्थापित किया गया है?</strong><br/>
                (a) हैदराबाद<br/>
                (b) रुड़की<br/>
                (c) कानपुर<br/>
                (d) पुणे<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>निम्नलिखित में से कौन एक 2018 में स्थापित भारत का सबसे तेज सुपर कंप्यूटर है?</strong><br/>
                (a) आदित्य<br/>
                (b) सहर्ष T<br/>
                (c) TIFR - Cray XC30<br/>
                (d) प्रत्युष<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कौन इच्छानुसार डेटा को स्टोर, प्रोसेस और पुनः प्राप्त कर सकता है?</strong><br/>
                (a) टाइपराइटर<br/>
                (b) टैब<br/>
                (c) मॉनिटर<br/>
                (d) कंप्यूटर<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कंप्यूटर का जनक कौन है?</strong><br/>
                (a) जॉन वॉन<br/>
                (b) एलन ट्यूरिंग<br/>
                (c) ब्लेज़ पास्कल<br/>
                (d) चार्ल्स बैबेज<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कंप्यूटर बनाने का पहला विश्वविद्यालय-आधारित प्रयास क्या था?</strong><br/>
                (a) स्टैनफोर्ड विश्वविद्यालय<br/>
                (b) हार्वर्ड विश्वविद्यालय<br/>
                (c) आयोवा स्टेट विश्वविद्यालय<br/>
                (d) पेनिसल्वेनिया विश्वविद्यालय<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>सूची-I और सूची-II का सही मिलान करें (अपोलो गाइडेंस कंप्यूटर आदि):</strong><br/>
                1. अपोलो गाइडेंस कंप्यूटर (AGC) -> B. वजन 70 पाउंड और आयतन लगभग 1 घन फुट<br/>
                2. AGC की भंडारण क्षमता -> A. 64KB डेटा स्टोर कर सकता है<br/>
                3. AGC की प्रसंस्करण शक्ति -> D. आधुनिक मानकों की तुलना में बहुत सीमित (बिट्स और क्लॉक स्पीड)<br/>
                4. आधुनिक लैपटॉप -> C. माइक्रोप्रोसेसरों, उच्च क्षमता भंडारण का उपयोग<br/>
                <em>उत्तर: (b)</em><br/>
            </li>
            <li><strong>डिजिटल रूप में सूचना संग्रहीत करने के लिए किस उपकरण का उपयोग किया जाता है?</strong><br/>
                (a) पाठ्यपुस्तक<br/>
                (b) टाइपराइटर<br/>
                (c) व्हाइटबोर्ड<br/>
                (d) लैपटॉप<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कंप्यूटर का प्राथमिक उद्देश्य क्या है?</strong><br/>
                (a) ड्राइंग और डिजाइनिंग<br/>
                (b) मनोरंजन<br/>
                (c) गेमिंग<br/>
                (d) डेटा का भंडारण, प्रसंस्करण और पुनर्प्राप्ति<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कंप्यूटर पीढ़ी और संबंधित प्रौद्योगिकी का सही मिलान:</strong><br/>
                पहली -> वैक्यूम ट्यूब्स<br/>
                दूसरी -> ट्रांजिस्टर<br/>
                तीसरी -> एकीकृत सर्किट<br/>
                चौथी -> माइक्रोप्रोसेसर चिप्स<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कौन-से कंप्यूटर वास्तविक संख्याओं से निपटते हैं और गिनती करके उत्तर प्राप्त करते हैं?</strong><br/>
                (a) डिजिटल<br/>
                (b) लो स्पीड<br/>
                (c) एनालॉग<br/>
                (d) हार्ड स्पीड<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>पहली पीढ़ी के कंप्यूटरों में इस्तेमाल की जाने वाली मुख्य मेमोरी डिवाइस क्या थी?</strong><br/>
                (a) ट्रांजिस्टर मेमोरी<br/>
                (b) चुंबकीय डिस्क<br/>
                (c) एकीकृत सर्किट<br/>
                (d) चुंबकीय ड्रम<br/>
                (e) उपर्युक्त में से کوئی نہیں<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कंप्यूटर सिस्टम के दो मुख्य घटक क्या हैं?</strong><br/>
                (a) मेमोरी और स्टोरेज<br/>
                (b) हार्डवेयर और सॉफ्टवेयर<br/>
                (c) प्रोसेसर और नेटवर्क<br/>
                (d) इनपुट और आउटपुट<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>1981 में कंप्यूटर के इतिहास में कौन-सी महत्वपूर्ण घटना घटी?</strong><br/>
                (a) एप्पल की मैकिन्टोश लाइन का शुभारंभ<br/>
                (b) पहले RISC वर्कस्टेशन का विमोचन<br/>
                (c) पहले चुंभकीय टेप स्टोरेज का परिचय<br/>
                (d) IBM PC का परिचय<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>बाइनरी संख्या 11100001111 का दशमलव समतुल्य क्या होगा?</strong><br/>
                (a) 1806<br/>
                (b) 1807<br/>
                (c) 2806<br/>
                (d) 2807<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>बाइनरी संख्या 1011 का दशमलव समतुल्य क्या होगा?</strong><br/>
                (a) 8<br/>
                (b) 9<br/>
                (c) 11<br/>
                (d) 15<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>कंप्यूटर में डेटा किस रूप में भंडारण होता है?</strong><br/>
                (a) आक्टल<br/>
                (b) हेक्सा-डेसीमल<br/>
                (c) डेसीमल<br/>
                (d) बाइनरी<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>कंप्यूटर माउस का आविष्कार किसने किया था?</strong><br/>
                (a) डगलस एंजेलबर्ट<br/>
                (b) वानेवर बुश<br/>
                (c) रॉबर्ट स्मिथ<br/>
                (d) बर्टरम राफेल<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>निम्नलिखित में से किस द्विआधारी संक्रिया का परिणाम 111010 होगा?</strong><br/>
                (a) 111111 - 1011<br/>
                (b) 100101 + 10101<br/>
                (c) 110001 + 10101<br/>
                (d) 111101 - 101<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>निम्नलिखित में से कौन-सी द्विआधारी संक्रिया परिणाम स्वरूप 101011 देगी?</strong><br/>
                (a) 100010 + 11001<br/>
                (b) 110101 - 1010<br/>
                (c) 101111 - 1100<br/>
                (d) 100101 + 1010<br/>
                <em>उत्तर: (b)</em>
            </li>
            <li><strong>निम्न में से कौन-सा बाइनरी संख्या प्रणाली का उदाहरण है?</strong><br/>
                (a) 3A16<br/>
                (b) 14870<br/>
                (c) 11101<br/>
                (d) 35026<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>संख्या '147' के समतुल्य बाइनरी संख्या कौन सी है?</strong><br/>
                (a) 10010011<br/>
                (b) 10011011<br/>
                (c) 10110011<br/>
                (d) 10001111<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>बाइनरी संख्या प्रणाली को यह भी कहते हैं-</strong><br/>
                (a) बेस 2 संख्या प्रणाली<br/>
                (b) बेस 8 संख्या प्रणाली<br/>
                (c) बेस 16 संख्या प्रणाली<br/>
                (d) बेस 10 संख्या प्रणाली<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>बाइनरी नंबर प्रणाली में प्रयुक्त किये जाने वाले विशिष्ट प्रतीकों की सही संख्या है-</strong><br/>
                (a) सोलह<br/>
                (b) दस<br/>
                (c) आठ<br/>
                (d) दो<br/>
                <em>उत्तर: (d)</em>
            </li>
            <li><strong>सभी छब्बीस अक्षरों, दस प्रतीकों और दस संख्याओं को एनकोड करन्या के लिए कितने बिट की आवश्यकता होती है?</strong><br/>
                (a) 6<br/>
                (b) 5<br/>
                (c) 3<br/>
                (d) 2<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>डि मॉर्गन का द्वितीय प्रमेय कहता है कि एक NAND गेट एक बबल्ड ........ गेट के तुल्य होता है।</strong><br/>
                (a) XAND<br/>
                (b) AND<br/>
                (c) OR<br/>
                (d) XOR<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (c)</em>
            </li>
            <li><strong>बाइनरी संख्या 0000 1111 0010 1101 का 1's कॉम्प्लिमेंट (पूरक) क्या है?</strong><br/>
                (a) 1111 0000 1101 0010<br/>
                (b) 1111 0000 0010 1101<br/>
                (c) 1001 0010 1010 1100<br/>
                (d) 1111 1100 1010 1100<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>सेंट्रल प्रोसेसिंग यूनिट (CPU) की मूल संगणना इकाई को क्याहते हैं?</strong><br/>
                (a) Core<br/>
                (b) Processor<br/>
                (c) Random Access memory (RAM)<br/>
                (d) Disc<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>जब कोई प्रक्रिया "Ready" अवस्था में होती है, तो उसका क्या अर्थ होता है?</strong><br/>
                (a) प्रक्रिया निष्पादित होने के लिए रेडी है, लेकिन सी पी यू आवंटित होने की प्रतीक्षा कर रही है<br/>
                (b) प्रक्रिया वर्तमान में सी पी यू पर निष्पादित हो रही है<br/>
                (c) प्रक्रिया ने निष्पादन पूरा कर लिया है  और समाप्त हो गई है<br/>
                (d) प्रक्रिया किसी बाहरी घटना की प्रतीक्षा कर रही है<br/>
                (e) उपर्युक्त में से कोई नहीं<br/>
                <em>उत्तर: (a)</em>
            </li>
            <li><strong>मेमोरी डेटा रजिस्टर (MDR) क्या रखता है?</strong><br/>
                (a) CPU की वर्तमान स्थिति<br/>
                (b) वर्तमान निर्देश का पता<br/>
                (c) निष्पादित करने के लिए अगला निर्देश<br/>
                (d) मेमोरी में संग्रहीत या पुन:प्राप्त किया जा रहा मान<br/>
                (e) उपर्युक्तमें से कोई नहीं<br/>
                <em>उत्तर: (d)</em>
            </li>
        </ol>
    `
};

function scrollToExams() {
    document.getElementById('exams').scrollIntoView({ behavior: 'smooth' });
}

function startTest(exam) {
    if (exam === 'uplekhpal') {
        showCategories();
    }
}

function showCategories() {
    document.getElementById('exams').style.display = 'none';
    document.getElementById('test-list-section').style.display = 'none';
    document.getElementById('test-categories-section').style.display = 'block';
    document.getElementById('test-categories-section').scrollIntoView({ behavior: 'smooth' });
}

function selectCategory(category) {
    currentCategory = category;
    const categoryNames = {
        'previous-year': 'Previous Year Papers',
        'sectional': 'Sectional Tests',
        'full-length': 'Full Length Mock Tests'
    };
    showTests(categoryNames[category]);
}

function showTests(categoryName = 'Available Tests') {
    document.getElementById('test-categories-section').style.display = 'none';
    document.getElementById('test-list-section').style.display = 'block';
    document.getElementById('test-list-title').textContent = categoryName;
    renderTests();
    document.getElementById('test-list-section').scrollIntoView({ behavior: 'smooth' });
}

function backToExams() {
    document.getElementById('test-categories-section').style.display = 'none';
    document.getElementById('test-list-section').style.display = 'none';
    document.getElementById('exams').style.display = 'block';
    document.getElementById('exams').scrollIntoView({ behavior: 'smooth' });
}

function backToCategories() {
    document.getElementById('test-list-section').style.display = 'none';
    document.getElementById('test-categories-section').style.display = 'block';
    document.getElementById('test-categories-section').scrollIntoView({ behavior: 'smooth' });
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

document.addEventListener('DOMContentLoaded', function() {
    initializeDeviceMode();
    populateDailyUpdates();

    // Listen for storage changes made by admin panel in other tabs
    window.addEventListener('storage', function(event) {
        // if any relevant key is modified, refresh to reflect updates automatically
        const keysToWatch = ['allTests','dailyUpdates','testCategories','customCategories'];
        if (keysToWatch.includes(event.key)) {
            console.log('Storage change detected for', event.key, 'reloading UI');
            location.reload();
        }
    });
});

// Real-time sync from Firestore (if available)
try {
    if (window.db) {
        // Sync daily updates
        window.db.collection('dailyUpdates').orderBy('addedAt','desc')
            .onSnapshot(snapshot => {
                const updates = snapshot.docs.map(d => d.data());
                localStorage.setItem('dailyUpdates', JSON.stringify(updates));
                if (typeof populateDailyUpdates === 'function') populateDailyUpdates();
            });

        // Sync tests collection
        window.db.collection('tests')
            .onSnapshot(snapshot => {
                const testsArr = snapshot.docs.map(d => d.data());
                localStorage.setItem('allTests', JSON.stringify(testsArr));

                // Build testCategories and flat tests list
                const categoriesMap = {};
                const flatTests = [];
                testsArr.forEach(t => {
                    flatTests.push(t.testName);
                    if (!categoriesMap[t.category]) categoriesMap[t.category] = [];
                    categoriesMap[t.category].push(t.testName);
                });
                window.testCategories = categoriesMap;
                window.tests = flatTests;

                // Refresh UI
                if (document.getElementById('test-list')) renderTests();
                if (typeof populateDailyUpdates === 'function') populateDailyUpdates();
            });
    }
} catch (e) {
    console.warn('Firestore realtime sync not available:', e);
}

function showTests() {
    const section = document.getElementById('test-list-section');
    section.style.display = 'block';
    renderTests();
    section.scrollIntoView({ behavior: 'smooth' });
}

function renderTests() {
    const list = document.getElementById('test-list');
    list.innerHTML = '';
    
    // Get tests from current category if available, otherwise use default tests array
    let testsToShow = currentCategory ? testCategories[currentCategory] : tests;
    
    if (testsToShow.length === 0) {
        const empty = document.createElement('li');
        empty.textContent = 'No tests available. Use the box below to add new tests.';
        list.appendChild(empty);
        return;
    }
    
    testsToShow.forEach((test) => {
        const li = document.createElement('li');
        li.textContent = test;
        li.style.cursor = 'pointer';
        li.onclick = () => {
            const url = 'mocktest.html?test=' + encodeURIComponent(test);
            window.location.href = url;
        };
        list.appendChild(li);
    });
}

function addTest() {
    const input = document.getElementById('new-test-name');
    const name = input.value.trim();
    if (name) {
        // Add to the current category
        if (currentCategory && testCategories[currentCategory]) {
            testCategories[currentCategory].push(name);
        } else {
            tests.push(name);
        }
        input.value = '';
        renderTests();
    }
}

function startQuiz(testName) {
    const content = quizzes[testName];
    if (!content) {
        alert('Quiz content not available for ' + testName);
        return;
    }
    document.getElementById('quiz-title').textContent = testName;
    document.getElementById('quiz-content').innerHTML = content;
    document.getElementById('test-list-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
}

function closeQuiz() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('test-list-section').style.display = 'block';

}
