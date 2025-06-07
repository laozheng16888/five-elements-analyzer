{\rtf1\ansi\ansicpg936\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', async () => \{\
    const reportDetails = document.getElementById('report-details');\
    const fullMainElementAnalysis = document.getElementById('full-main-element-analysis');\
    const luckyColorSpan = document.getElementById('lucky-color');\
    const elementRadarChartCtx = document.getElementById('element-radar-chart').getContext('2d');\
    const remedyAdviceSpan = document.getElementById('remedy-advice');\
    const emailSendForm = document.getElementById('send-report-form');\
    const emailSendStatus = document.getElementById('email-send-status');\
\
    // \uc0\u33719 \u21462 \u20043 \u21069 \u23384 \u20648 \u30340 \u29992 \u25143 \u36755 \u20837 \u21644 \u35745 \u31639 \u32467 \u26524 \u65288 \u22914 \u26524 \u23384 \u22312 \u65289 \
    const userName = sessionStorage.getItem('userName') || '\uc0\u29992 \u25143 ';\
    const birthDate = sessionStorage.getItem('birthDate');\
    const birthTime = sessionStorage.getItem('birthTime');\
    const userEmailFromPay = sessionStorage.getItem('userEmailForReport');\
\
    // \uc0\u22914 \u26524  pay.html \u39029 \u38754 \u20256 \u36882 \u20102 \u37038 \u31665 \u65292 \u21017 \u39044 \u22635 \u20805 \
    if (userEmailFromPay) \{\
        document.getElementById('report-email').value = userEmailFromPay;\
    \}\
\
    // --- \uc0\u23436 \u25972 \u25253 \u21578 \u29983 \u25104 \u26680 \u24515 \u36923 \u36753  (\u38656 \u35201 \u24744 \u23454 \u29616 ) ---\
    // 1. \uc0\u26681 \u25454  birthDate, birthTime (\u25110 \u20174  sessionStorage \u33719 \u21462 \u30340 \u20998 \u26512 \u32467 \u26524 ) \u29983 \u25104 \u23436 \u25972 \u25253 \u21578 \
    //    \uc0\u36825 \u21253 \u25324 \u65306 \
    //    - \uc0\u26356 \u35814 \u32454 \u30340 \u26085 \u20027 \u20116 \u34892 \u20998 \u26512 \
    //    - \uc0\u24184 \u36816 \u33394 \
    //    - \uc0\u20116 \u34892 \u38647 \u36798 \u22270 \u25968 \u25454 \
    //    - 50 \uc0\u21477 \u20010 \u24615 \u21270 \u24314 \u35758  (\u27599 \u20010 \u32500 \u24230 )\
    //    - \uc0\u34917 \u25937 \u24314 \u35758 \
\
    // \uc0\u31034 \u20363 \u25968 \u25454  (\u35831 \u26367 \u25442 \u20026 \u23454 \u38469 \u35745 \u31639 \u32467 \u26524 \u21644 \u29983 \u25104 \u20869 \u23481 )\
    const fullReportData = \{\
        mainElementDescription: `$\{userName\}\uc0\u65292 \u24744 \u26159 \u20856 \u22411 \u30340 \u26408 \u22411 \u33021 \u37327 \u65292 \u36825 \u36171 \u20104 \u24744 \u31215 \u26497 \u21521 \u19978 \u12289 \u20161 \u24904 \u23485 \u21402 \u30340 \u24615 \u26684 \u65292 \u20294 \u26377 \u26102 \u20063 \u20276 \u38543 \u30528 \u22266 \u25191 \u21644 \u32570 \u20047 \u21464 \u36890 \u12290 `,\
        luckyColor: "\uc0\u32511 \u33394 \u12289 \u38738 \u33394 ",\
        elementStrengths: \{\
            \uc0\u26408 : 7,\
            \uc0\u28779 : 5,\
            \uc0\u22303 : 4,\
            \uc0\u37329 : 6,\
            \uc0\u27700 : 3\
        \}, // \uc0\u29992 \u20110 \u38647 \u36798 \u22270 \
        remedyAdvice: "\uc0\u24314 \u35758 \u24744 \u22810 \u25509 \u35302 \u22823 \u33258 \u28982 \u65292 \u36890 \u36807 \u20901 \u24819 \u25110 \u29788 \u20285 \u26469 \u24179 \u34913 \u24773 \u32490 \u12290 \u22312 \u20154 \u38469 \u20132 \u24448 \u20013 \u65292 \u23581 \u35797 \u26356 \u24320 \u25918 \u22320 \u25509 \u21463 \u19981 \u21516 \u24847 \u35265 \u65292 \u24182 \u23398 \u20250 \u36866 \u24403 \u30340 \u22949 \u21327 \u65292 \u20197 \u26580 \u20811 \u21018 \u12290 ",\
        advice: \{\
            love: [\
                "\uc0\u22312 \u24863 \u24773 \u20013 \u65292 \u24744 \u20542 \u21521 \u20110 \u20184 \u20986 \u21644 \u22857 \u29486 \u65292 \u20294 \u35201 \u36991 \u20813 \u29306 \u29298 \u33258 \u25105 \u12290 ",\
                "\uc0\u24744 \u30340 \u21892 \u33391 \u21644 \u20307 \u36148 \u26159 \u21560 \u24341 \u20182 \u20154 \u30340 \u20851 \u38190 \u65292 \u20294 \u21035 \u24536 \u20102 \u34920 \u36798 \u33258 \u24049 \u30340 \u38656 \u27714 \u12290 ",\
                "\uc0\u24863 \u24773 \u20043 \u36335 \u21487 \u33021 \u20598 \u26377 \u27874 \u25240 \u65292 \u20445 \u25345 \u32784 \u24515 \u21644 \u29702 \u35299 \u33267 \u20851 \u37325 \u35201 \u12290 ",\
                // ... 47 more sentences\
            ],\
            family: [\
                "\uc0\u23478 \u24237 \u26159 \u24744 \u30340 \u28207 \u28286 \u65292 \u24744 \u20048 \u20110 \u20026 \u23478 \u20154 \u20184 \u20986 \u65292 \u33829 \u36896 \u28201 \u39336 \u27675 \u22260 \u12290 ",\
                "\uc0\u19982 \u38271 \u36744 \u30340 \u27807 \u36890 \u38656 \u35201 \u26356 \u22810 \u32784 \u24515 \u65292 \u23562 \u37325 \u20256 \u32479 \u35266 \u24565 \u12290 ",\
                "\uc0\u22312 \u23478 \u24237 \u20013 \u65292 \u24744 \u26159 \u37325 \u35201 \u30340 \u25903 \u26609 \u65292 \u20294 \u20063 \u21035 \u24536 \u20102 \u32473 \u33258 \u24049 \u30041 \u30333 \u12290 ",\
                // ... 47 more sentences\
            ],\
            career: [\
                "\uc0\u24744 \u36866 \u21512 \u20174 \u20107 \u25945 \u32946 \u12289 \u29615 \u20445 \u12289 \u33402 \u26415 \u25110 \u21307 \u30103 \u31561 \u38656 \u35201 \u32784 \u24515 \u21644 \u29233 \u24515 \u30340 \u34892 \u19994 \u12290 ",\
                "\uc0\u22312 \u20107 \u19994 \u19978 \u65292 \u24744 \u26377 \u29420 \u29305 \u30340 \u35265 \u35299 \u21644 \u21019 \u26032 \u33021 \u21147 \u65292 \u25954 \u20110 \u31361 \u30772 \u24120 \u35268 \u12290 ",\
                "\uc0\u32844 \u22330 \u20013 \u35201 \u35686 \u24789 \u23567 \u20154 \u65292 \u20445 \u25345 \u27491 \u30452 \u65292 \u20999 \u21247 \u25237 \u26426 \u21462 \u24039 \u12290 ",\
                // ... 47 more sentences\
            ],\
            wealth: [\
                "\uc0\u24744 \u30340 \u36130 \u36816 \u24179 \u31283 \u65292 \u19981 \u36866 \u21512 \u20882 \u38505 \u25237 \u36164 \u65292 \u31283 \u20581 \u29702 \u36130 \u26159 \u29579 \u36947 \u12290 ",\
                "\uc0\u20559 \u36130 \u36816 \u19981 \u20339 \u65292 \u20999 \u21247 \u27785 \u36855 \u36172 \u21338 \u25110 \u25237 \u26426 \u12290 ",\
                "\uc0\u36890 \u36807 \u36763 \u21220 \u24037 \u20316 \u21644 \u31215 \u32047 \u32463 \u39564 \u65292 \u24744 \u30340 \u36130 \u23500 \u23558 \u31283 \u27493 \u22686 \u38271 \u12290 ",\
                // ... 47 more sentences\
            ],\
            health: [\
                "\uc0\u27880 \u24847 \u32925 \u33039 \u21644 \u32966 \u22218 \u30340 \u20581 \u24247 \u65292 \u36991 \u20813 \u36807 \u24230 \u21171 \u32047 \u21644 \u24773 \u32490 \u37057 \u32467 \u12290 ",\
                "\uc0\u22810 \u36827 \u34892 \u25143 \u22806 \u36816 \u21160 \u65292 \u22914 \u25955 \u27493 \u12289 \u24930 \u36305 \u65292 \u26377 \u21161 \u20110 \u37322 \u25918 \u21387 \u21147 \u12290 ",\
                "\uc0\u39278 \u39135 \u23452 \u28165 \u28129 \u65292 \u22810 \u39135 \u32511 \u33394 \u34092 \u33756 \u21644 \u27700 \u26524 \u65292 \u23569 \u27833 \u33147 \u12290 ",\
                // ... 47 more sentences\
            ]\
        \}\
    \};\
\
    // \uc0\u22635 \u20805 \u25253 \u21578 \u20869 \u23481 \
    fullMainElementAnalysis.textContent = fullReportData.mainElementDescription;\
    luckyColorSpan.textContent = fullReportData.luckyColor;\
    remedyAdviceSpan.textContent = fullReportData.remedyAdvice;\
\
    // \uc0\u22635 \u20805 \u20116 \u22823 \u32500 \u24230 \u24314 \u35758 \
    function populateAdvice(elementId, adviceArray) \{\
        const ulElement = document.getElementById(elementId);\
        ulElement.innerHTML = ''; // Clear previous content\
        adviceArray.forEach(advice => \{\
            const li = document.createElement('li');\
            li.textContent = advice;\
            ulElement.appendChild(li);\
        \});\
    \}\
\
    populateAdvice('love-advice-full', fullReportData.advice.love);\
    populateAdvice('family-advice-full', fullReportData.advice.family);\
    populateAdvice('career-advice-full', fullReportData.advice.career);\
    populateAdvice('wealth-advice-full', fullReportData.advice.wealth);\
    populateAdvice('health-advice-full', fullReportData.advice.health);\
\
\
    // \uc0\u32472 \u21046 \u20116 \u34892 \u38647 \u36798 \u22270 \
    new Chart(elementRadarChartCtx, \{\
        type: 'radar',\
        data: \{\
            labels: Object.keys(fullReportData.elementStrengths),\
            datasets: [\{\
                label: '\uc0\u20116 \u34892 \u24378 \u24230 ',\
                data: Object.values(fullReportData.elementStrengths),\
                backgroundColor: 'rgba(123, 67, 151, 0.2)', // \uc0\u32043 \u33394 \u36879 \u26126 \
                borderColor: '#7b4397', // \uc0\u32043 \u33394 \
                borderWidth: 2,\
                pointBackgroundColor: '#7b4397',\
                pointBorderColor: '#fff',\
                pointHoverBackgroundColor: '#fff',\
                pointHoverBorderColor: '#7b4397'\
            \}]\
        \},\
        options: \{\
            responsive: true,\
            scales: \{\
                r: \{\
                    angleLines: \{\
                        display: false\
                    \},\
                    suggestedMin: 0,\
                    suggestedMax: 10, // \uc0\u26681 \u25454 \u20116 \u34892 \u24378 \u24230 \u33539 \u22260 \u35843 \u25972 \
                    grid: \{\
                        color: '#ddd'\
                    \},\
                    pointLabels: \{\
                        font: \{\
                            size: 14\
                        \}\
                    \}\
                \}\
            \},\
            plugins: \{\
                legend: \{\
                    display: false\
                \}\
            \}\
        \}\
    \});\
\
    reportDetails.style.display = 'block';\
\
\
    // EmailJS \uc0\u21457 \u36865 \u25253 \u21578 \u36923 \u36753 \
    emailSendForm.addEventListener('submit', async (e) => \{\
        e.preventDefault();\
        const reportEmail = document.getElementById('report-email').value;\
\
        emailSendStatus.style.display = 'block';\
        emailSendStatus.style.color = '#5cb85c';\
        emailSendStatus.textContent = '\uc0\u27491 \u22312 \u21457 \u36865 \u25253 \u21578 \u65292 \u35831 \u31245 \u20505 ...';\
        emailSendForm.querySelector('button').disabled = true;\
\
        try \{\
            // \uc0\u33719 \u21462  full-report.html \u30340 \u20869 \u23481 \u20316 \u20026 \u37038 \u20214 \u27491 \u25991 \
            // \uc0\u26356 \u22909 \u30340 \u26041 \u24335 \u26159 \u39044 \u20808 \u23450 \u20041 \u19968 \u20010  EmailJS \u27169 \u26495 \u65292 \u20854 \u20013 \u21253 \u21547 \u25152 \u26377 \u25253 \u21578 \u21464 \u37327 \
            // \uc0\u25110 \u32773 \u65292 \u22914 \u26524 \u25253 \u21578 \u26159  PDF\u65292 \u21487 \u20197 \u19978 \u20256  PDF \u21040 \u26576 \u20010 \u22320 \u26041 \u24182 \u21457 \u36865 \u38142 \u25509 \
            const reportContent = document.getElementById('report-details').outerHTML; // \uc0\u33719 \u21462 \u25253 \u21578 \u37096 \u20998 \u30340 HTML\
\
            const templateParams = \{\
                to_email: reportEmail,\
                user_name: userName,\
                report_html: reportContent, // \uc0\u25110 \u32773  report_link: 'http://yourdomain.com/full-report.pdf'\
                // \uc0\u22914 \u26524 \u38656 \u35201 PDF\u65292 \u21487 \u20197 \u32771 \u34385 \u20351 \u29992  jsPDF \u22312 \u21069 \u31471 \u29983 \u25104 PDF\u24182 \u19978 \u20256 \u65292 \u25110 \u32773 \u22312 \u26381 \u21153 \u22120 \u31471 \u29983 \u25104 \
                // \uc0\u25110 \u32773 \u22312  EmailJS \u27169 \u26495 \u20013 \u35774 \u35745 \u22909 \u25253 \u21578 \u26679 \u24335 \u65292 \u21482 \u20256 \u20837 \u25968 \u25454 \
            \};\
\
            // \uc0\u21457 \u36865 \u37038 \u20214 \
            const serviceID = 'YOUR_EMAILJS_SERVICE_ID'; // \uc0\u26367 \u25442 \u20026 \u20320 \u30340  EmailJS Service ID\
            const templateID = 'YOUR_EMAILJS_TEMPLATE_ID'; // \uc0\u26367 \u25442 \u20026 \u20320 \u30340  EmailJS Template ID\
\
            await emailjs.send(serviceID, templateID, templateParams);\
\
            emailSendStatus.textContent = '\uc0\u25253 \u21578 \u24050 \u25104 \u21151 \u21457 \u36865 \u21040 \u24744 \u30340 \u37038 \u31665 \u65281 ';\
            emailSendStatus.style.color = '#28a745';\
            window.location.href = 'success.html'; // \uc0\u36339 \u36716 \u21040 \u25104 \u21151 \u39029 \u38754 \
\
        \} catch (error) \{\
            console.error('\uc0\u21457 \u36865 \u37038 \u20214 \u22833 \u36133 :', error);\
            emailSendStatus.textContent = '\uc0\u25253 \u21578 \u21457 \u36865 \u22833 \u36133 \u65292 \u35831 \u31245 \u21518 \u20877 \u35797 \u12290 ';\
            emailSendStatus.style.color = '#d9534f';\
            emailSendForm.querySelector('button').disabled = false;\
        \}\
    \});\
\
    /**\
     * TODO: \uc0\u23454 \u29616 \u23436 \u25972 \u25253 \u21578 \u29983 \u25104 \u36923 \u36753 \
     * \uc0\u36825 \u37096 \u20998 \u38656 \u35201 \u24744 \u33258 \u24049 \u23436 \u25104 \u65292 \u26681 \u25454 \u20043 \u21069 \u20445 \u23384 \u30340 \u29992 \u25143 \u36755 \u20837 \u21644 \u35745 \u31639 \u32467 \u26524 \u65292 \u29983 \u25104 \u26356 \u35814 \u32454 \u30340 \u25253 \u21578 \u20869 \u23481 \u12290 \
     * \uc0\u21253 \u25324 \u65306 \
     * - \uc0\u26356 \u35814 \u32454 \u30340 \u20027 \u20116 \u34892 \u20998 \u26512 \u25551 \u36848 \
     * - \uc0\u24184 \u36816 \u33394 \u35745 \u31639 \
     * - \uc0\u20116 \u34892 \u38647 \u36798 \u22270 \u25968 \u25454 \u65288 \u21453 \u26144 \u20116 \u34892 \u24378 \u24369 \u30340 \u25968 \u20540 \u65289 \
     * - \uc0\u27599 \u20010 \u32500 \u24230  (\u24863 \u24773 \u12289 \u23478 \u24237 \u12289 \u20107 \u19994 \u12289 \u36130 \u23500 \u12289 \u20581 \u24247 ) 50 \u21477 \u20010 \u24615 \u21270 \u24314 \u35758 \
     * \uc0\u24314 \u35758 \u23558 \u36825 \u20123 \u24314 \u35758 \u23384 \u20648 \u22312 \u19968 \u20010 JS\u23545 \u35937 \u25110 JSON\u25991 \u20214 \u20013 \u65292 \u26681 \u25454 \u29992 \u25143 \u30340 \u20116 \u34892 \u29305 \u28857 \u21160 \u24577 \u36873 \u25321 \u25110 \u32452 \u21512 \u12290 \
     * - \uc0\u34917 \u25937 \u24314 \u35758 \
     *\
     * \uc0\u21516 \u26679 \u65292 \u36825 \u37096 \u20998 \u38656 \u35201 \u32467 \u21512 \u19987 \u19994 \u30340 \u20116 \u34892 \u21629 \u29702 \u30693 \u35782 \u26469 \u32534 \u20889 \u12290 \
     */\
    function generateFullReport(birthDateStr, birthTimeStr) \{\
        // \uc0\u31034 \u20363 \u65306 \u27492 \u22788 \u24212 \u20026 \u22797 \u26434 \u30340 \u23436 \u25972 \u25253 \u21578 \u29983 \u25104 \u36923 \u36753 \
        // \uc0\u36820 \u22238 \u19968 \u20010 \u21253 \u21547 \u25152 \u26377 \u25253 \u21578 \u20869 \u23481 \u30340 \u23436 \u25972 \u23545 \u35937 \
        // \uc0\u20363 \u22914 \u65306 \
        // return \{\
        //     mainElementDescription: "\uc0\u35814 \u32454 \u30340 \u20027 \u20116 \u34892 \u20998 \u26512 ...",\
        //     luckyColor: "\uc0\u32418 \u33394 ",\
        //     elementStrengths: \{ \uc0\u26408 : 8, \u28779 : 6, \u22303 : 5, \u37329 : 7, \u27700 : 4 \},\
        //     remedyAdvice: "\uc0\u35814 \u32454 \u30340 \u34917 \u25937 \u24314 \u35758 ...",\
        //     advice: \{\
        //         love: ["\uc0\u21477 1", "\u21477 2", ...],\
        //         family: ["\uc0\u21477 1", "\u21477 2", ...],\
        //         // ...\
        //     \}\
        // \};\
    \}\
\});}