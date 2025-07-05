/*
 * SCRIPT FOR UPDATE COMMUNITY WEBSITE
 * Author: AI Assistant & Community Owner
 * Version: 2.4 - Premium Form Integration
 */

// ==============================================
// 1. GLOBAL INITIALIZATION
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Animate on Scroll (AOS) Library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Run all component initializers
    initComponents();

    // Run all page-specific logic
    initPageSpecificLogic();

});


// ==============================================
// 2. UI COMPONENT INITIALIZERS
// ==============================================
function initComponents() {
    
    // --- Header Shadow on Scroll ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // --- Theme (Dark/Light Mode) Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const body = document.body;
        const themeIcon = themeToggle.querySelector('i');

        const setTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            }
        };
        
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(savedTheme);

        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }

    // --- Dynamic Active Navigation Link ---
    const navLinksList = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinksList.forEach(link => {
        // Handle trailing slashes: make sure "/team/" matches "/team/"
        const linkPath = link.pathname.endsWith('/') ? link.pathname : link.pathname + '/';
        const pagePath = currentPath.endsWith('/') ? currentPath : currentPath + '/';
        // Handle the root page case
        if (pagePath === '/' && link.pathname === '/') {
             link.classList.add('active');
        } else if (link.pathname !== '/' && pagePath === linkPath) {
            link.classList.add('active');
        }
    });
}


// ==============================================
// 3. PAGE-SPECIFIC LOGIC
// ==============================================
function initPageSpecificLogic() {

    // --- Roles Page: Tab System ---
    const tabButtons = document.querySelectorAll('.roles-nav-tabs .tab-btn');
    const tabContents = document.querySelectorAll('.role-tab-content');
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);

                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                tabContents.forEach(content => content.classList.remove('active'));
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // --- Premium Request Page: Webhook Form ---
    const premiumForm = document.getElementById('premium-request-form');
    if (premiumForm) {
        
        // !!! IMPORTANT: PASTE YOUR WEBHOOK URL HERE !!!
        const webhookUrl = "https://discord.com/api/webhooks/1391061698353434684/SvHGMk15Bl7ZfmxCrrqzB9QYg3pXgvH0Z0vqC-Ik7JOTX6Sh8cg0-moT0ZdXY3rTOarl";

        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');

        premiumForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            const formData = new FormData(premiumForm);
            const discordId = formData.get('discordId');
            const twoFactor = formData.get('2fa');
            const acceptRules = formData.get('acceptRules') ? "Yes" : "No";

            const payload = {
                username: "Premium Requests",
                avatar_url: "https://cdn.discordapp.com/attachments/1280058158429241368/1390139715788738601/file_00000000e3286243bc64939d4275a49a.png?ex=686a77bf&is=6869263f&hm=b88efc0a19308ec5fa3cbd1a906f9ba0c9d8ccbfe2fd7fdf167b2581ef9e4544&",
                embeds: [{
                    title: "New Premium Pack Request",
                    color: 15082774, //rgb(252, 1, 1)
                    timestamp: new Date().toISOString(),
                    fields: [
                        { name: "Discord User ID", value: "```" + discordId + "```", inline: false },
                        { name: "2FA Enabled?", value: twoFactor, inline: true },
                        { name: "Accepted Rules & TOS?", value: acceptRules, inline: true }
                    ],
                    footer: { text: `Request from ${window.location.hostname}` }
                }]
            };

            try {
                // Do not proceed if the webhook URL is the default placeholder
                if (webhookUrl === "YOUR_WEBHOOK_URL_HERE") {
                    throw new Error("Webhook URL is not configured.");
                }

                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    formStatus.classList.add('success');
                    formStatus.textContent = "Your request has been sent successfully! We will review it shortly.";
                    premiumForm.reset();
                } else {
                    throw new Error(`Server responded with ${response.status}`);
                }
            } catch (error) {
                console.error("Webhook Error:", error);
                formStatus.classList.add('error');
                formStatus.textContent = "An error occurred. Please try again later or contact a staff member.";
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Request';
            }
        });
    }
}
