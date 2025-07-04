document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Animate on Scroll
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

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
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
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

    // --- Mock Discord Login System ---
    const discordLoginDiv = document.getElementById('discord-login');
    if (discordLoginDiv) {
        const handleMockLogin = () => {
            const isLoggedIn = sessionStorage.getItem('discord_loggedIn') === 'true';
            if (isLoggedIn) {
                const username = sessionStorage.getItem('discord_username');
                const avatar = sessionStorage.getItem('discord_avatar');
                discordLoginDiv.innerHTML = `
                    <div class="discord-user-profile">
                        <img src="${avatar}" alt="User Avatar">
                        <span>${username}</span>
                    </div>
                `;
            } else {
                const loginButton = discordLoginDiv.querySelector('button');
                if (loginButton) {
                    loginButton.addEventListener('click', () => {
                        alert('Simulating Discord Login...\n(This is a demonstration. No real authentication is happening.)');
                        const mockUser = { username: 'DemoUser#1234', avatar: 'assets/images/avatar.png' };
                        sessionStorage.setItem('discord_loggedIn', 'true');
                        sessionStorage.setItem('discord_username', mockUser.username);
                        sessionStorage.setItem('discord_avatar', mockUser.avatar);
                        handleMockLogin();
                    });
                }
            }
        };
        handleMockLogin();
    }

    // --- Roles Page Tab System ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.role-tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);

                // Update button active state
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Update content active state
                tabContents.forEach(content => content.classList.remove('active'));
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});