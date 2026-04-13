const translations = {
    EN: {
        website_title: "Cheng-Yeh Tsai | Portfolio",
        nav_hero: "Cheng-Yeh Tsai",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",

        about_intro: "Hi, my name is",
        about_name: "Cheng-Yeh Tsai",
        about_me_1: "My technical foundation includes database design, data modeling, and Python-based workflows, with particular attention to ETL processes for transforming and managing data efficiently. I prioritize clarity, consistency, and data integrity when designing solutions.",
        about_me_2: "My approach to problem-solving is analytical and detail-driven. I work systematically to break down complex data problems, identify patterns, and implement structured solutions. This includes handling data validation, ensuring accuracy across pipelines, and maintaining clean and maintainable code.",
        about_me_3: "I am particularly interested in roles related to data engineering, where I can further develop scalable data pipelines and contribute to data-driven systems. My goal is to apply my technical skills in practical environments, continuously improving both system performance and data reliability while maintaining a disciplined and methodical development approach.",

        skill_front: "Frontend",
        skill_back: "Backend",
        skill_other: "Tools & Others",

        voyago_subtitle: "Voyago - Travel Planning Website",
        voyago_description: "This travel planning web application allows users to browse destinations, create personalized itineraries, and organize their travel plans in one centralized location.",
        event_subtitle: "Event Management Application",
        event_description: "A practice event management web application. The project focuses on learning server-side development, MVC patterns, and basic web CRUD operations.",
        employee_subtitle: "Employee Payroll Management System",
        employee_description: "This practice assignment is a application allows organizations to manage employees, calculate payroll, generate reports, and visualize financial data through an intuitive graphical interface.",
        gmail_subtitle: "Gmail Attachment To Notion",
        gmail_description: "A Python automation pipeline that retrieves financial transaction emails from Gmail, extracts trade data from PDF/ZIP attachments, and inserts structured records into a Notion database.",
        travel_subtitle: "Travel Expense Tracker",
        travel_description: "This ongoing mobile-friendly expense tracker allows users to track daily travel expenses, view totals, and manage different trips expenses easily.",

        footer: "Made by Cheng-Yeh Tsai · ©"
    },
    ZH: {
        website_title: "蔡承燁 | 個人作品集",
        nav_hero: "蔡承燁",
        nav_about: "關於我",
        nav_skills: "技能",
        nav_projects: "專案",

        about_intro: "嗨，我的名字是",
        about_name: "蔡承燁",
        about_me_1: "我的技術基礎包括資料庫設計、資料建模以及基於 Python 的工作流程，尤其專注於 ETL 流程，以高效地轉換和管理資料。在設計解決方案時，我重視清晰度、一致性與資料完整性。",
        about_me_2: "我的解題方式注重分析與細節。我系統性地拆解複雜的資料問題、識別模式，並實作結構化的解決方案，包括資料驗證、確保管線準確性，以及維護整潔且易於維護的程式碼。",
        about_me_3: "我對資料工程相關職位特別感興趣，希望能進一步開發可擴展的資料管線，並貢獻於資料驅動的系統。我的目標是在實際環境中應用技術能力，持續提升系統效能與資料可靠性，同時保持嚴謹且有條理的開發方式。",

        skill_front: "前端",
        skill_back: "後端",
        skill_other: "工具 & 其他",

        voyago_subtitle: "Voyago - 旅遊規劃網站",
        voyago_description: "這個旅遊規劃網頁應用程式讓使用者可以瀏覽目的地、建立個人化行程，並在一個集中的平台上管理旅遊計畫。",
        event_subtitle: "活動管理應用程式",
        event_description: "一個練習用的活動管理網頁應用程式，專注於學習伺服器端開發、MVC 架構模式以及基本的網頁 CRUD 操作。",
        employee_subtitle: "員工薪資管理系統",
        employee_description: "這個練習專案是一個應用程式，讓組織能夠管理員工資料、計算薪資、產生報表，並透過直覺化的圖形介面視覺化財務資料。",
        gmail_subtitle: "Gmail 附件轉 Notion",
        gmail_description: "一個 Python 自動化管線，從 Gmail 擷取財務交易郵件，從 PDF/ZIP 附件中提取交易資料，並將結構化記錄插入 Notion 資料庫。",
        travel_subtitle: "旅遊費用追蹤器",
        travel_description: "這個持續開發中的行動裝置友善費用追蹤器，讓使用者能夠記錄每日旅遊花費、查看總金額，並輕鬆管理不同旅程的費用。",

        footer: "由 蔡承燁 製作 · ©"
    }
};


function switchLanguage(lang) {
    // 1. Get all elements
    const elements = document.querySelectorAll('[data-i18n]');
    const t = translations[lang];

    // 2. itierate through
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // 3. Remember user's selection
    localStorage.setItem('currentLang', lang);
}

// 網頁載入時自動套用上次選的語言
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('currentLang')
    console.log(localStorage.getItem('currentLang'))

    if (currentLang == 'EN'){
        switchLanguage(currentLang);
        langToggle.textContent ='ZH';

    }else if(currentLang == 'ZH'){
        switchLanguage(currentLang);
        langToggle.textContent = 'EN';
        
    }else{
        switchLanguage('EN');
        langToggle.textContent = 'ZH';
    }
    

    if(localStorage.getItem('preferredTheme') == 'true'){
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = '☀️';
    }else{
        themeToggle.textContent = '🌙';
    }
});