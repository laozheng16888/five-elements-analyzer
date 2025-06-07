{\rtf1\ansi\ansicpg936\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const iHavePaidButton = document.getElementById('i-have-paid-button');\
    const emailFormContainer = document.getElementById('email-form-container');\
    const emailReportForm = document.getElementById('email-report-form');\
    const yourWechatIdSpan = document.getElementById('your-wechat-id');\
\
    // TODO: \uc0\u26367 \u25442 \u20026 \u24744 \u30340 \u24494 \u20449 ID\
    yourWechatIdSpan.textContent = 'YOUR_WECHAT_ID_HERE';\
\
    iHavePaidButton.addEventListener('click', () => \{\
        // \uc0\u29992 \u25143 \u28857 \u20987 \'93\u25105 \u24050 \u20184 \u27454 \'94\u21518 \u65292 \u21487 \u20197 \u24341 \u23548 \u20182 \u20204 \u65306 \
        // 1. \uc0\u30452 \u25509 \u36339 \u36716 \u21040  full-report.html (\u20551 \u35774 \u20182 \u20204 \u24050 \u32463 \u20184 \u27454 \u65292 \u36825 \u26159 \u26368 \u31616 \u20415 \u30340 \u26041 \u26696 )\
        // 2. \uc0\u26174 \u31034 \u22635 \u20889 \u37038 \u31665 \u30340 \u21306 \u22495 \u65292 \u24341 \u23548 \u20182 \u20204 \u36890 \u36807 \u37038 \u31665 \u33719 \u21462 \u25253 \u21578 \
        // \uc0\u30446 \u21069 \u36873 \u25321 \u26041 \u26696 2\u65292 \u22914 \u26524 \u29992 \u25143 \u19981 \u24819 \u22635 \u20889 \u37038 \u31665 \u65292 \u21487 \u20197 \u32771 \u34385 \u30452 \u25509 \u36339 \u36716 \u12290 \
        emailFormContainer.style.display = 'block';\
        iHavePaidButton.style.display = 'none'; // \uc0\u38544 \u34255 \u25353 \u38062 \
\
        // \uc0\u22914 \u26524 \u24076 \u26395 \u30452 \u25509 \u36339 \u36716 \u65292 \u21487 \u20197 \u20351 \u29992 \u65306 \
        // window.location.href = 'full-report.html';\
    \});\
\
    emailReportForm.addEventListener('submit', (e) => \{\
        e.preventDefault();\
        const email = document.getElementById('email').value;\
\
        // \uc0\u23558 \u37038 \u31665 \u23384 \u20648 \u22312  sessionStorage \u20013 \u65292 \u20197 \u20415  full-report.html \u20351 \u29992 \
        sessionStorage.setItem('userEmailForReport', email);\
\
        // \uc0\u36339 \u36716 \u21040 \u23436 \u25972 \u25253 \u21578 \u39029 \u38754 \
        window.location.href = 'full-report.html';\
    \});\
\});}