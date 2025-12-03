// DorkNEXUS v3.0 - Main Script
// Elite Penetration Testing Arsenal

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
    console.log('%c⚡ DorkNEXUS v3.0 Initialized ⚡', 'color: #00ffff; font-size: 18px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
    console.log('%cElite Penetration Testing Arsenal', 'color: #ff00ff; font-size: 14px; text-shadow: 0 0 10px #ff00ff;');
    
    initializePlatformButtons();
    loadDorks(currentPlatform);
    initializeLaunchButton();
    initializePlaceholderAnimation();
    updateSelectedCounter();
});

// Platform button initialization
function initializePlatformButtons() {
    const platformButtons = document.querySelectorAll('.cyber-btn[data-platform]');
    
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
    const allButtons = document.querySelectorAll('.cyber-btn[data-platform]');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.cyber-btn[data-platform="${platform}"]`);
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
            <div style="padding: 30px; text-align: center; color: var(--ghost-accent); border: 2px solid var(--ghost-accent); border-radius: 8px; background: var(--ghost-bg-darker);">
                <p style="font-size: 1.5rem; margin-bottom: 10px;">⚠ DORKS UNAVAILABLE</p>
                <p style="font-size: 1rem; opacity: 0.8;">Platform: ${platform.toUpperCase()}</p>
                <p style="font-size: 0.9rem; margin-top: 15px; opacity: 0.6;">Please ensure dorks.js is properly configured for this platform.</p>
            </div>
        `;
        return;
    }
    
    // Generate HTML for each category
    for (const [category, dorkList] of Object.entries(dorks)) {
        const categoryElement = createCategoryElement(category, dorkList, platform);
        container.appendChild(categoryElement);
    }
    
    // Add event listeners to checkboxes (SINGLE SELECTION MODE)
    setTimeout(() => {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
            cb.addEventListener('change', function() {
                // If this box is checked, uncheck all others
                if (this.checked) {
                    checkboxes.forEach(otherCb => {
                        if (otherCb !== this) {
                            otherCb.checked = false;
                        }
                    });
                }
                updateSelectedCounter();
            });
        });
    }, 100);
}

// Create category element
function createCategoryElement(category, dorkList, platform) {
    const details = document.createElement('details');
    
    const summary = document.createElement('summary');
    summary.textContent = `${category} [${dorkList.length} DORKS]`;
    details.appendChild(summary);
    
    const table = document.createElement('table');
    
    dorkList.forEach((dorkItem, index) => {
        const row = table.insertRow();
        
        // Checkbox cell
        const checkCell = row.insertCell();
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `dork-${platform}-${category.replace(/\s+/g, '-')}-${index}`;
        checkbox.setAttribute('data-dork', dorkItem.dork);
        checkbox.setAttribute('data-platform', platform);
        checkCell.appendChild(checkbox);
        
        // Description cell
        const descCell = row.insertCell();
        const label = document.createElement('label');
        label.setAttribute('for', checkbox.id);
        label.innerHTML = `<strong>${dorkItem.desc}</strong><br><code>${dorkItem.dork}</code>`;
        label.style.cursor = 'pointer';
        descCell.appendChild(label);
    });
    
    details.appendChild(table);
    
    return details;
}

// Update selected counter
function updateSelectedCounter() {
    const selectedDorks = document.querySelectorAll(`input[type="checkbox"][data-platform="${currentPlatform}"]:checked`);
    selectedCount = selectedDorks.length;
    
    const counterElement = document.getElementById('selectedCount');
    if (counterElement) {
        counterElement.textContent = `[${selectedCount} SELECTED]`;
    }
}

// Launch button initialization
function initializeLaunchButton() {
    const launchBtn = document.getElementById('runBtn');
    
    launchBtn.addEventListener('click', function() {
        const target = document.getElementById('targetDomain').value.trim();
        
        if (!target) {
            showNotification('⚠ TARGET REQUIRED', 'Please enter a target domain, IP, or ASN to begin reconnaissance', 'warning');
            return;
        }
        
        const selectedDorks = document.querySelectorAll(`input[type="checkbox"][data-platform="${currentPlatform}"]:checked`);
        
        if (selectedDorks.length === 0) {
            showNotification('⚠ NO DORK SELECTED', 'Please select a dork to execute', 'warning');
            return;
        }
        
        // Launch scans
        launchScans(target, selectedDorks);
    });
}

// Launch scans in new tabs
function launchScans(target, selectedDorks) {
    const baseURL = PLATFORM_URLS[currentPlatform];
    
    showNotification('✓ DORK PROTOCOL INITIATED', `Launching reconnaissance scan on ${target}`, 'success');
    
    selectedDorks.forEach((checkbox, index) => {
        const dork = checkbox.getAttribute('data-dork');
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
    const color = type === 'success' ? '#00ff88' : type === 'warning' ? '#ffff00' : '#00ffff';
    
    console.log(`%c${icon} ${title}%c\n${message}`, 
        `color: ${color}; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px ${color};`,
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
        'target.com',
        'example.org',
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

console.log('%c⚡ DorkNEXUS SYSTEMS ONLINE ⚡', 'color: #00ff88; font-size: 14px; font-weight: bold; text-shadow: 0 0 10px #00ff88;');
console.log('%cAll reconnaissance modules loaded successfully', 'color: #00ffff; font-size: 12px;');
