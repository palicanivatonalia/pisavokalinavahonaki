/*
  STYLE SHEET FOR UPDATE COMMUNITY WEBSITE
  Author: AI Assistant
  Version: 2.2 - Admin Panel Removed
  Last Updated: [Current Date]
*/

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* ==============================================
   1. ROOT VARIABLES & THEME SETUP
   ============================================== */
:root {
    --color-primary: #e63946; /* Vibrant Red */
    --color-primary-dark: #c02d3a;
    --color-dark: #121212;
    --color-dark-accent: #1e1e1e;
    --color-light: #f4f1de;
    --color-light-accent: #ffffff;
    --color-text-dark: #e0e0e0;
    --color-text-light: #121212;
    --color-grey: #99aab5;
    
    --bg-color: var(--color-light);
    --text-color: var(--color-text-light);
    --card-bg: var(--color-light-accent);
    --header-bg: rgba(255, 255, 255, 0.8);
    --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    
    /* Scrollbar Colors */
    --scrollbar-bg: #f1f1f1;
    --scrollbar-thumb: #c1c1c1;
    --scrollbar-thumb-hover: #a8a8a8;
}

body.dark-mode {
    --bg-color: var(--color-dark);
    --text-color: var(--color-text-dark);
    --card-bg: var(--color-dark-accent);
    --header-bg: rgba(30, 30, 30, 0.8);
    --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    
    /* Scrollbar Colors for Dark Mode */
    --scrollbar-bg: var(--color-dark-accent);
    --scrollbar-thumb: #555;
    --scrollbar-thumb-hover: #777;
}

/* ==============================================
   2. BASE & RESET
   ============================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: var(--scrollbar-bg);
}
::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-hover);
}

/* Accessibility: Focus outline for keyboard navigation */
:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}
*:focus:not(:focus-visible) {
    outline: none;
}

/* ==============================================
   3. REUSABLE COMPONENTS & UTILITIES
   ============================================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: var(--color-primary);
    color: #fff;
    box-shadow: 0 5px 15px rgba(230, 57, 70, 0.2);
}

.btn-primary:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(230, 57, 70, 0.3);
}

.section {
    padding: 80px 0;
}

.section-title {
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    color: var(--text-color);
}
.section-subtitle {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 60px auto;
    color: var(--color-grey);
}

.highlight {
    color: var(--color-primary);
}

.card {
    background-color: var(--card-bg);
    padding: 40px;
    border-radius: 12px;
    box-shadow: var(--box-shadow);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.card-icon {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 20px;
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

/* --- Page Note Style --- */
.page-note {
    max-width: 900px;
    margin: 0 auto 40px auto;
    padding: 20px 25px;
    background-color: var(--card-bg);
    border-left: 4px solid var(--color-primary);
    border-radius: 0 8px 8px 0;
    box-shadow: var(--box-shadow);
    color: var(--color-grey);
    font-size: 0.95rem;
    line-height: 1.7;
    text-align: left;
}
.page-note i {
    color: var(--color-primary);
    margin-right: 12px;
    font-size: 1.2rem;
    vertical-align: middle;
}
.page-note strong {
    color: var(--text-color);
    font-weight: 600;
}

/* ==============================================
   4. HEADER / NAVIGATION
   ============================================== */
.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background: var(--header-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 15px 0;
    transition: background 0.3s ease, box-shadow 0.3s ease;
}

.header.scrolled {
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}
body.dark-mode .header.scrolled {
    box-shadow: 0 2px 15px rgba(0,0,0,0.3);
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-color);
    text-decoration: none;
}
.logo img { height: 40px; }

.nav-links {
    display: flex;
    gap: 30px;
}
.nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 600;
    position: relative;
    padding: 5px 0;
    border-radius: 4px; /* For focus */
}
.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}
.nav-links a:hover::after, .nav-links a.active::after {
    width: 100%;
}

.actions { display: flex; align-items: center; gap: 15px; }

#theme-toggle {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
    border-radius: 50%; /* For focus */
    padding: 5px;
}
#theme-toggle:hover { transform: scale(1.1) rotate(15deg); }

.hamburger { display: none; }

/* ==============================================
   5. PAGE-SPECIFIC SECTIONS
   ============================================== */

/* --- General Page Content Container --- */
.main-content { padding-top: 140px; }

/* --- Hero Section (Home Page) --- */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background: url('../assets/images/hero-bg.jpg') no-repeat center center/cover;
    padding-top: 80px; /* Header offset */
}
.hero-bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 1));
}
.hero .container { position: relative; z-index: 2; }
.hero-title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}
.hero-subtitle {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 40px auto;
    opacity: 0.9;
}

/* --- Rules Page --- */
.rules-container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.rule-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 25px;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease;
}
.rule-card:hover { transform: translateX(10px); }
.rule-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
    flex-shrink: 0;
}
.rule-content h3 { margin-bottom: 5px; }

/* --- Team Page --- */
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}
.team-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease;
}
.team-card:hover { transform: translateY(-10px); }
.team-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid var(--color-primary);
    margin-bottom: 20px;
    object-fit: cover;
}
.team-card h3 { font-size: 1.5rem; margin-bottom: 5px; }
.team-role {
    display: inline-block;
    padding: 3px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #fff;
}
.team-role.admin { background-color: #e63946; }
.team-role.moderator { background-color: #457b9d; }
.team-role.event-manager { background-color: #fca311; }

/* --- Roles Page --- */
.roles-nav-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 40px;
}
.roles-nav-tabs .tab-btn {
    background-color: transparent;
    color: var(--color-grey);
    border: 2px solid var(--color-dark-accent);
    padding: 10px 25px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}
body.light-mode .roles-nav-tabs .tab-btn { border: 2px solid #e0e0e0; }
.roles-nav-tabs .tab-btn:hover { color: var(--text-color); border-color: var(--color-primary); }
.roles-nav-tabs .tab-btn.active { background-color: var(--color-primary); color: #fff; border-color: var(--color-primary); }
.role-tab-content { display: none; }
.role-tab-content.active {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.roles-content-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    padding: 30px 40px;
    box-shadow: var(--box-shadow);
}
.roles-header { display: flex; align-items: center; gap: 15px; margin-bottom: 10px; }
.roles-header i { font-size: 1.8rem; color: var(--color-primary); }
.roles-header h1 { font-size: 1.8rem; font-weight: 700; color: var(--text-color); }
.roles-description { color: var(--color-grey); margin-bottom: 30px; }
.role-category {
    background: rgba(0,0,0,0.05);
    border: 1px solid var(--color-dark-accent);
    border-radius: 8px;
    padding: 25px;
    margin-top: 25px;
}
body.light-mode .role-category { background: rgba(0,0,0,0.03); border: 1px solid #e0e0e0; }
.role-category h3 { font-size: 1.4rem; font-weight: 600; margin-bottom: 5px; color: var(--text-color); }
.role-category p { color: var(--color-grey); margin-bottom: 20px; }
.role-tags-container { display: flex; flex-wrap: wrap; gap: 15px; }
.role-tag { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; border: 1px solid; border-radius: 6px; font-weight: 600; font-size: 0.95rem; transition: all 0.2s ease-in-out; }
.role-tag:hover { transform: translateY(-3px); box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
.role-tag .role-dot { width: 10px; height: 10px; border-radius: 50%; }
.role-tag.role-red { color: #f04747; border-color: #f04747; background-color: rgba(240, 71, 71, 0.1); }
.role-tag.role-red .role-dot { background-color: #f04747; }
.role-tag.role-blue { color: #5865F2; border-color: #5865F2; background-color: rgba(88, 101, 242, 0.1); }
.role-tag.role-blue .role-dot { background-color: #5865F2; }
.role-tag.role-green { color: #57F287; border-color: #57F287; background-color: rgba(87, 242, 135, 0.1); }
.role-tag.role-green .role-dot { background-color: #57F287; }
.role-tag.role-orange { color: #f9a62b; border-color: #f9a62b; background-color: rgba(249, 166, 43, 0.1); }
.role-tag.role-orange .role-dot { background-color: #f9a62b; }
.role-tag.role-purple { color: #a460f2; border-color: #a460f2; background-color: rgba(164, 96, 242, 0.1); }
.role-tag.role-purple .role-dot { background-color: #a460f2; }
.role-tag.role-cyan { color: #00c7ff; border-color: #00c7ff; background-color: rgba(0, 199, 255, 0.1); }
.role-tag.role-cyan .role-dot { background-color: #00c7ff; }
.role-tag.role-grey { color: #99aab5; border-color: #99aab5; background-color: rgba(153, 170, 181, 0.1); }
.role-tag.role-grey .role-dot { background-color: #99aab5; }
.role-tag.role-pink { color: #eb459e; border-color: #eb459e; background-color: rgba(235, 69, 158, 0.1); }
.role-tag.role-pink .role-dot { background-color: #eb459e; }
.role-tag.role-gold { color: #f1c40f; border-color: #f1c40f; background-color: rgba(241, 196, 15, 0.1); }
.role-tag.role-gold .role-dot { background-color: #f1c40f; }

/* ==============================================
   6. SPECIAL MEMBERS PAGE
   ============================================== */

.special-members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.special-member-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    border: 2px solid transparent;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    box-shadow: var(--box-shadow);
    cursor: pointer; /* Indicates the card is clickable */
}

.special-member-card:hover {
    transform: translateY(-10px);
    border-color: var(--color-primary);
    box-shadow: 0 10px 30px rgba(230, 57, 70, 0.3);
}

.member-avatar {
    width: 140px;
    height: 140px;
    border-radius: 12px; /* Stylish squircle shape */
    border: 5px solid var(--color-primary);
    margin: 0 auto 20px auto;
    object-fit: cover;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}
.special-member-card:hover .member-avatar {
    transform: scale(1.05);
}

.member-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
    margin: 0;
}

/* ==============================================
   6.5. MEMBER MODAL (POP-UP) STYLES
   ============================================== */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 16px;
    width: 100%;
    max-width: 450px;
    text-align: center;
    position: relative;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    border-top: 4px solid var(--color-primary);
    transform: scale(0.95) translateY(10px);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
}

.modal-overlay.active .modal-content {
    transform: scale(1) translateY(0);
}

.modal-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: var(--color-grey);
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.2s ease;
}
.modal-close-btn:hover {
    color: var(--color-primary);
    transform: rotate(90deg);
}

.modal-avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 6px solid var(--color-primary);
    object-fit: cover;
    margin-bottom: 25px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

.modal-name {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 10px;
}

.modal-bio {
    font-size: 1rem;
    color: var(--color-grey);
    line-height: 1.7;
    max-width: 90%;
    margin: 0 auto;
}

/* ==============================================
   7. FOOTER
   ============================================== */
.footer {
    background-color: var(--color-dark-accent);
    color: var(--color-grey);
    padding: 40px 0;
    text-align: center;
    margin-top: 80px;
}
.footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.social-links a {
    color: var(--color-grey);
    font-size: 1.5rem;
    margin: 0 10px;
    transition: color 0.3s ease, transform 0.3s ease;
}
.social-links a:hover { 
    color: var(--color-primary);
    transform: translateY(-3px);
}

/* ==============================================
   8. RESPONSIVE DESIGN (MOBILE)
   ============================================== */
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: var(--card-bg);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        transition: right 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    }
    .nav-links.active { right: 0; }
    .hamburger {
        display: block;
        background: none;
        border: none;
        color: var(--text-color);
        font-size: 1.8rem;
        cursor: pointer;
        z-index: 1001; /* Above nav links */
        border-radius: 4px; /* For focus */
    }
    .hero-title { font-size: 2.5rem; }
    .section-title { font-size: 2.2rem; }

    .roles-content-card { padding: 20px; }
    .roles-header h1 { font-size: 1.5rem; }
    
    .special-members-grid { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }
    .member-avatar { width: 100px; height: 100px; }
    .member-name { font-size: 1.2rem; }

    .modal-content { padding: 30px 20px; }
    .modal-avatar { width: 120px; height: 120px; }
    .modal-name { font-size: 1.8rem; }
}

/* ==============================================
   END OF FILE
   ============================================== */
