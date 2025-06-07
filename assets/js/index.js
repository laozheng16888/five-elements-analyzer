{\rtf1\ansi\ansicpg936\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const analysisForm = document.getElementById('analysis-form');\
    const reportSummary = document.getElementById('report-summary');\
    const mainElementAnalysis = document.getElementById('main-element-analysis');\
    const elementDistributionChartCtx = document.getElementById('element-distribution-chart').getContext('2d');\
    let elementChart; // To hold the Chart.js instance\
\
    // Placeholder for advice spans\
    const loveAdviceSpan = document.getElementById('love-advice');\
    const familyAdviceSpan = document.getElementById('family-advice');\
    const careerAdviceSpan = document.getElementById('career-advice');\
    const wealthAdviceSpan = document.getElementById('wealth-advice');\
    const healthAdviceSpan = document.getElementById('health-advice');\
\
    analysisForm.addEventListener('submit', (e) => \{\
        e.preventDefault();\
\
        const name = document.getElementById('name').value;\
        const birthDate = document.getElementById('birth-date').value;\
        const birthTime = document.getElementById('birth-time').value;\
\
        // --- \uc0\u20116 \u34892 \u35745 \u31639 \u26680 \u24515 \u36923 \u36753  (\u38656 \u35201 \u24744 \u23454 \u29616 ) ---\
        // 1. \uc0\u26681 \u25454  birthDate \u21644  birthTime \u35745 \u31639 \u26085 \u20027 \u20116 \u34892 \
        //    \uc0\u36825 \u36890 \u24120 \u28041 \u21450 \u23558 \u26085 \u26399 \u26102 \u38388 \u36716 \u25442 \u20026 \u20843 \u23383 \u65292 \u28982 \u21518 \u20998 \u26512 \u26085 \u26609 \u22825 \u24178 \u22320 \u25903 \
        // 2. \uc0\u35745 \u31639 \u20116 \u34892 \u27604 \u20363  (\u37329 \u12289 \u26408 \u12289 \u27700 \u12289 \u28779 \u12289 \u22303 )\
        //    \uc0\u36825 \u21516 \u26679 \u28041 \u21450 \u20843 \u23383 \u20013 \u30340 \u22825 \u24178 \u22320 \u25903 \u20116 \u34892 \u23646 \u24615 \u30340 \u32479 \u35745 \
        // 3. \uc0\u26681 \u25454 \u35745 \u31639 \u32467 \u26524 \u29983 \u25104 \u31616 \u29256 \u20998 \u26512 \u21644 \u24314 \u35758 \
\
        // \uc0\u31034 \u20363 \u25968 \u25454  (\u35831 \u26367 \u25442 \u20026 \u23454 \u38469 \u35745 \u31639 \u32467 \u26524 )\
        const dummyResult = \{\
            mainElement: "\uc0\u26408 ",\
            mainElementDescription: "\uc0\u20320 \u23646 \u20110 \u26408 \u22411 \u20154 \u26684 \u65292 \u36890 \u24120 \u27491 \u30452 \u21892 \u33391 \u65292 \u23500 \u26377 \u21516 \u24773 \u24515 \u65292 \u26377 \u31215 \u26497 \u30340 \u36827 \u21462 \u31934 \u31070 \u65292 \u20294 \u20063 \u21487 \u33021 \u22266 \u25191 \u24049 \u35265 \u12290 ",\
            elementRatios: \{\
                \uc0\u26408 : 30,\
                \uc0\u28779 : 20,\
                \uc0\u22303 : 15,\
                \uc0\u37329 : 25,\
                \uc0\u27700 : 10\
            \},\
            advice: \{\
                love: "\uc0\u24863 \u24773 \u19978 \u27880 \u37325 \u27807 \u36890 \u21644 \u29702 \u35299 \u65292 \u36991 \u20813 \u36807 \u20110 \u29702 \u24819 \u21270 \u12290 ",\
                family: "\uc0\u19982 \u23478 \u20154 \u22810 \u20132 \u27969 \u65292 \u20849 \u21516 \u25215 \u25285 \u36131 \u20219 \u65292 \u24314 \u31435 \u21644 \u35856 \u27675 \u22260 \u12290 ",\
                career: "\uc0\u36866 \u21512 \u20174 \u20107 \u25945 \u32946 \u12289 \u35774 \u35745 \u12289 \u21019 \u24847 \u31561 \u39046 \u22495 \u65292 \u21457 \u25381 \u20320 \u30340 \u21019 \u36896 \u21147 \u12290 ",\
                wealth: "\uc0\u29702 \u36130 \u38656 \u35880 \u24910 \u65292 \u36991 \u20813 \u20914 \u21160 \u28040 \u36153 \u65292 \u21487 \u32771 \u34385 \u38271 \u26399 \u25237 \u36164 \u12290 ",\
                health: "\uc0\u27880 \u24847 \u32925 \u33039 \u20581 \u24247 \u65292 \u22810 \u21507 \u32511 \u33394 \u34092 \u33756 \u65292 \u20445 \u25345 \u24773 \u32490 \u31283 \u23450 \u12290 "\
            \}\
        \};\
\
        // \uc0\u26174 \u31034 \u31616 \u29256 \u25253 \u21578 \
        mainElementAnalysis.textContent = dummyResult.mainElementDescription;\
        loveAdviceSpan.textContent = dummyResult.advice.love;\
        familyAdviceSpan.textContent = dummyResult.advice.family;\
        careerAdviceSpan.textContent = dummyResult.advice.career;\
        wealthAdviceSpan.textContent = dummyResult.wealth;\
        healthAdviceSpan.textContent = dummyResult.health;\
\
\
        // \uc0\u26356 \u26032 \u39292 \u29366 \u22270 \
        if (elementChart) \{\
            elementChart.destroy(); // Destroy previous chart instance if exists\
        \}\
        elementChart = new Chart(elementDistributionChartCtx, \{\
            type: 'pie',\
            data: \{\
                labels: Object.keys(dummyResult.elementRatios),\
                datasets: [\{\
                    data: Object.values(dummyResult.elementRatios),\
                    backgroundColor: [\
                        '#4CAF50', // \uc0\u26408  (Green)\
                        '#FF6384', // \uc0\u28779  (Red-Pink)\
                        '#FFCD56', // \uc0\u22303  (Yellow)\
                        '#36A2EB', // \uc0\u37329  (Blue)\
                        '#A020F0'  // \uc0\u27700  (Purple)\
                    ],\
                    hoverOffset: 4\
                \}]\
            \},\
            options: \{\
                responsive: true,\
                plugins: \{\
                    legend: \{\
                        position: 'top',\
                    \},\
                    tooltip: \{\
                        callbacks: \{\
                            label: function(context) \{\
                                let label = context.label || '';\
                                if (label) \{\
                                    label += ': ';\
                                \}\
                                if (context.parsed !== null) \{\
                                    label += context.parsed + '%';\
                                \}\
                                return label;\
                            \}\
                        \}\
                    \}\
                \}\
            \}\
        \});\
\
        reportSummary.style.display = 'block';\
        // \uc0\u28378 \u21160 \u21040 \u25253 \u21578 \u37096 \u20998 \
        reportSummary.scrollIntoView(\{ behavior: 'smooth' \});\
\
        // \uc0\u23558 \u29992 \u25143 \u36755 \u20837 \u23384 \u20648 \u22312  sessionStorage \u20013 \u65292 \u20197 \u20415 \u21518 \u32493 \u39029 \u38754 \u20351 \u29992 \
        sessionStorage.setItem('userName', name);\
        sessionStorage.setItem('birthDate', birthDate);\
        sessionStorage.setItem('birthTime', birthTime);\
        // sessionStorage.setItem('analysisResult', JSON.stringify(dummyResult)); // \uc0\u21487 \u20197 \u23384 \u20648 \u26356 \u22810 \u35745 \u31639 \u32467 \u26524 \
    \});\
\});\
\
/**\
 * TODO: \uc0\u23454 \u29616 \u20116 \u34892 \u35745 \u31639 \u36923 \u36753 \
 * \uc0\u36825 \u37096 \u20998 \u38656 \u35201 \u24744 \u33258 \u24049 \u23436 \u25104 \u65292 \u26681 \u25454 \u36755 \u20837 \u30340 \u20986 \u29983 \u26085 \u26399 \u21644 \u26102 \u38388 \u65292 \u35745 \u31639 \u20986 \u65306 \
 * - \uc0\u26085 \u20027 \u20116 \u34892  (\u20363 \u22914 : \u26408 \u12289 \u28779 \u12289 \u22303 \u12289 \u37329 \u12289 \u27700 )\
 * - \uc0\u20116 \u34892 \u27604 \u20363  (\u37329 \u12289 \u26408 \u12289 \u27700 \u12289 \u28779 \u12289 \u22303  \u22312 \u21629 \u30424 \u20013 \u30340 \u24378 \u24230 \u27604 \u20363 )\
 * - \uc0\u22522 \u20110 \u20116 \u34892 \u35745 \u31639 \u30340 \u31616 \u29256 \u20116 \u22823 \u32500 \u24230 \u24314 \u35758  (\u24863 \u24773 \u12289 \u23478 \u24237 \u12289 \u20107 \u19994 \u12289 \u36130 \u23500 \u12289 \u20581 \u24247 )\
 *\
 * \uc0\u24314 \u35758 \u21442 \u32771 \u25104 \u29087 \u30340 \u21629 \u29702 \u25110 \u26131 \u23398 \u24211 \u65292 \u25110 \u32773 \u33258 \u34892 \u23454 \u29616 \u20843 \u23383 \u25490 \u30424 \u19982 \u20116 \u34892 \u20998 \u26512 \u36923 \u36753 \u12290 \
 * \uc0\u30001 \u20110 \u28041 \u21450 \u22823 \u37327 \u35745 \u31639 \u21644 \u20256 \u32479 \u25991 \u21270 \u30693 \u35782 \u65292 \u36825 \u37096 \u20998 \u19981 \u26159 \u31616 \u21333 \u30340 JS\u20195 \u30721 \u33021 \u30452 \u25509 \u29983 \u25104 \u30340 \u12290 \
 */\
function calculateFiveElements(birthDateStr, birthTimeStr) \{\
    // \uc0\u31034 \u20363 \u65306 \u27492 \u22788 \u24212 \u20026 \u22797 \u26434 \u30340 \u20116 \u34892 \u35745 \u31639 \u36923 \u36753 \
    // \uc0\u36820 \u22238 \u19968 \u20010 \u21253 \u21547 \u20027 \u20116 \u34892 \u12289 \u20116 \u34892 \u27604 \u20363 \u21644 \u31616 \u29256 \u24314 \u35758 \u30340 \u23545 \u35937 \
    // \uc0\u20363 \u22914 \u65306 \
    // return \{\
    //     mainElement: "\uc0\u26408 ",\
    //     mainElementDescription: "\uc0\u20320 \u23646 \u20110 \u26408 \u22411 \u20154 \u26684 ...",\
    //     elementRatios: \{ \uc0\u37329 : 20, \u26408 : 30, \u27700 : 10, \u28779 : 25, \u22303 : 15 \},\
    //     advice: \{\
    //         love: "\uc0\u31616 \u29256 \u24863 \u24773 \u24314 \u35758 ",\
    //         family: "\uc0\u31616 \u29256 \u23478 \u24237 \u24314 \u35758 ",\
    //         career: "\uc0\u31616 \u29256 \u20107 \u19994 \u24314 \u35758 ",\
    //         wealth: "\uc0\u31616 \u29256 \u36130 \u23500 \u24314 \u35758 ",\
    //         health: "\uc0\u31616 \u29256 \u20581 \u24247 \u24314 \u35758 "\
    //     \}\
    // \};\
\}}