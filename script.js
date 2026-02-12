// DorkNEXUS v3.0 - Main Script
// Modern Security Platform

let currentPlatform = 'google';
let selectedCount = 0;

// Platform URL templates
const PLATFORM_URLS = {
    google: 'https://www.google.com/search?q=',
    github: 'https://github.com/search?type=code&q=',
    shodan: 'https://www.shodan.io/search?query=',
    fofa: 'https://fofa.info/result?qbase64=',
    censys: 'https://search.censys.io/search?resource=hosts&q='
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c◆ DorkNEXUS v3.0 Initialized', 'color: #ffffff; font-size: 18px; font-weight: bold;');
    console.log('%cModern Security Platform', 'color: #a3a3a3; font-size: 14px;');
    
    // Initialize opening page
    initializeOpeningPage();
});

// Initialize opening page animation
function initializeOpeningPage() {
    const openingPage = document.getElementById('openingPage');
    const mainApp = document.getElementById('mainApp');
    const getStartedBtn = document.getElementById('getStartedBtn');
    
    // Get Started button click handler
    getStartedBtn.addEventListener('click', function() {
        // Fade out opening page
        openingPage.classList.add('fade-out');
        
        // Wait for animation then show main app
        setTimeout(() => {
            openingPage.style.display = 'none';
            mainApp.classList.add('show');
            
            // Initialize main application
            initializeMainApp();
        }, 800);
    });
}

// Initialize main application
function initializeMainApp() {
    initializePlatformButtons();
    loadDorks(currentPlatform);
    initializeLaunchButton();
    initializePlaceholderAnimation();
    updateSelectedCounter();
}

// Platform button initialization
function initializePlatformButtons() {
    const platformButtons = document.querySelectorAll('.platform-btn[data-platform]');
    
    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            switchPlatform(platform);
        });
    });
}

// Switch between platforms
function switchPlatform(platform) {
    currentPlatform = platform;
    
    // Update button states
    const allButtons = document.querySelectorAll('.platform-btn[data-platform]');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.platform-btn[data-platform="${platform}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Load dorks for the selected platform
    loadDorks(platform);
    
    // Reset selected count
    selectedCount = 0;
    updateSelectedCounter();
}

// Load dorks based on platform
function loadDorks(platform) {
    const container = document.getElementById('dorks-container');
    
    let dorks;
    
    // Select the appropriate dork collection
    switch(platform) {
        case 'google':
            dorks = window.GOOGLE_DORKS || {};
            break;
        case 'github':
            dorks = window.GITHUB_DORKS || {};
            break;
        case 'shodan':
            dorks = window.SHODAN_DORKS || {};
            break;
        case 'fofa':
            dorks = window.FOFA_DORKS || {};
            break;
        case 'censys':
            dorks = window.CENSYS_DORKS || {};
            break;
        default:
            dorks = {};
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Check if dorks exist for this platform
    if (Object.keys(dorks).length === 0) {
        container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: var(--gray-400); background: rgba(255, 255, 255, 0.03); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.1);">
                <p style="font-size: 1.5rem; margin-bottom: 10px; color: var(--white);">⚠ Dorks Unavailable</p>
                <p style="font-size: 1rem; opacity: 0.8;">Platform: ${platform.toUpperCase()}</p>
                <p style="font-size: 0.9rem; margin-top: 15px; opacity: 0.6;">Please ensure dorks.js is properly configured for this platform.</p>
            </div>
        `;
        return;
    }
    
    // Generate cards for each dork
    for (const [category, dorkList] of Object.entries(dorks)) {
        dorkList.forEach((dorkItem, index) => {
            const card = createDorkCard(category, dorkItem, index, platform);
            container.appendChild(card);
        });
    }
    
    // Add click listeners to cards
    setTimeout(() => {
        const cards = container.querySelectorAll('.dork-card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const checkbox = this.querySelector('.dork-checkbox');
                const wasSelected = this.classList.contains('selected');
                
                // Unselect all cards
                cards.forEach(c => {
                    c.classList.remove('selected');
                    c.querySelector('.dork-checkbox').classList.remove('checked');
                });
                
                // Select this card if it wasn't selected
                if (!wasSelected) {
                    this.classList.add('selected');
                    checkbox.classList.add('checked');
                }
                
                updateSelectedCounter();
            });
        });
    }, 100);
}

// Create dork card element
function createDorkCard(category, dorkItem, index, platform) {
    const card = document.createElement('div');
    card.className = 'dork-card';
    card.setAttribute('data-dork', dorkItem.dork);
    card.setAttribute('data-platform', platform);
    
    card.innerHTML = `
        <div class="dork-header">
            <div class="dork-category">${category}</div>
            <div class="dork-checkbox"></div>
        </div>
        <div class="dork-name">${dorkItem.desc}</div>
        <div class="dork-description"><code>${dorkItem.dork}</code></div>
    `;
    
    return card;
}

// Update selected counter
function updateSelectedCounter() {
    const selectedCards = document.querySelectorAll(`.dork-card.selected[data-platform="${currentPlatform}"]`);
    selectedCount = selectedCards.length;
    
    const counterElement = document.getElementById('selectedCount');
    if (counterElement) {
        counterElement.textContent = `${selectedCount} Selected`;
    }
}

// Launch button initialization
function initializeLaunchButton() {
    const launchBtn = document.getElementById('runBtn');
    
    launchBtn.addEventListener('click', function() {
        const target = document.getElementById('targetDomain').value.trim();
        
        if (!target) {
            showNotification('⚠ Target Required', 'Please enter a target domain, IP, or ASN to begin reconnaissance', 'warning');
            return;
        }
        
        const selectedCards = document.querySelectorAll(`.dork-card.selected[data-platform="${currentPlatform}"]`);
        
        if (selectedCards.length === 0) {
            showNotification('⚠ No Dork Selected', 'Please select a dork to execute', 'warning');
            return;
        }
        
        // Launch scans
        launchScans(target, selectedCards);
    });
}

// Launch scans in new tabs
function launchScans(target, selectedCards) {
    const baseURL = PLATFORM_URLS[currentPlatform];
    
    showNotification('✓ Protocol Initiated', `Launching reconnaissance scan on ${target}`, 'success');
    
    selectedCards.forEach((card, index) => {
        const dork = card.getAttribute('data-dork');
        let query;
        
        // Build query based on platform
        if (currentPlatform === 'fofa') {
            // FOFA requires base64 encoding
            query = dork.replace(/\{target\}/g, target);
            query = baseURL + btoa(query);
        } else {
            // Other platforms use standard URL encoding
            query = dork.replace(/\{target\}/g, target);
            query = baseURL + encodeURIComponent(query);
        }
        
        // Open in new tab
        window.open(query, '_blank');
    });
    
    // Add visual feedback
    animateLaunchButton();
}

// Animate launch button on scan
function animateLaunchButton() {
    const launchBtn = document.getElementById('runBtn');
    launchBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        launchBtn.style.transform = '';
    }, 200);
}

// Show notification
function showNotification(title, message, type) {
    const icon = type === 'success' ? '✓' : type === 'warning' ? '⚠' : 'ℹ';
    const color = type === 'success' ? '#ffffff' : type === 'warning' ? '#a3a3a3' : '#ffffff';
    
    console.log(`%c${icon} ${title}%c\n${message}`, 
        `color: ${color}; font-size: 14px; font-weight: bold;`,
        `color: ${color}; font-size: 12px;`
    );
}

// Placeholder animation
function initializePlaceholderAnimation() {
    const targetInput = document.getElementById('targetDomain');
    
    // Add enter key support
    targetInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('runBtn').click();
        }
    });
    
    // Animated placeholders
    const placeholders = [
        'example.com',
        'target.org',
        '192.168.1.1',
        'AS12345',
        'company.net',
        'subdomain.target.com'
    ];
    
    let placeholderIndex = 0;
    setInterval(() => {
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        targetInput.setAttribute('placeholder', placeholders[placeholderIndex]);
    }, 3000);
}

console.log('%c◆ DorkNEXUS Systems Online', 'color: #ffffff; font-size: 14px; font-weight: bold;');
console.log('%cAll reconnaissance modules loaded successfully', 'color: #a3a3a3; font-size: 12px;');
