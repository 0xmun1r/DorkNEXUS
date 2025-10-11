document.addEventListener('DOMContentLoaded', () => {
    // Get references to all the important HTML elements
    const targetInput = document.getElementById('targetDomain');
    const dorksContainer = document.getElementById('dorks-container');
    const googleBtn = document.getElementById('googleBtn');
    const githubBtn = document.getElementById('githubBtn');
    const runBtn = document.getElementById('runBtn');
    const ALL_DORKS = { google: GOOGLE_DORKS, github: GITHUB_DORKS };

    // This function builds the HTML for the dork tables
    function renderDorks(platform) {
        dorksContainer.innerHTML = ''; // Clear the container
        const platformDorks = ALL_DORKS[platform];
        
        for (const category in platformDorks) {
            const dorks = platformDorks[category];
            
            // Create the <details> element for the collapsible section
            const details = document.createElement('details');
            
            // Build the inner HTML for the section
            let innerHTML = `
                <summary>
                    ${category} (${dorks.length})
                </summary>
                <table>`;
            
            dorks.forEach(dork => {
                innerHTML += `
                    <tr>
                        <td style="width:5%;"><input type="checkbox" class="dork-checkbox" data-platform="${platform}" data-dork="${dork.dork.replace(/"/g, '&quot;')}"></td>
                        <td><code>${dork.dork}</code></td>
                        <td>${dork.desc}</td>
                    </tr>
                `;
            });

            innerHTML += `</table>`;
            details.innerHTML = innerHTML;
            dorksContainer.appendChild(details);
        }
    }

    // --- Event Listeners ---

    // Handle clicks on the Google/GitHub tab buttons
    [googleBtn, githubBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            googleBtn.classList.remove('active');
            githubBtn.classList.remove('active');
            btn.classList.add('active');
            renderDorks(btn.dataset.platform);
        });
    });

    // Handle the main "LAUNCH SCAN" button click
    runBtn.addEventListener('click', () => {
        const target = targetInput.value;
        if (!target) {
            alert('>>> ERROR: Target required.');
            return;
        }

        const selectedDorks = document.querySelectorAll('.dork-checkbox:checked');
        if (selectedDorks.length === 0) {
            alert('>>> ERROR: No dorks selected.');
            return;
        }

        selectedDorks.forEach((dork, i) => {
            setTimeout(() => {
                const platform = dork.dataset.platform;
                const dorkString = dork.dataset.dork;
                let query = '', url = '';

                if (platform === 'google') {
                    query = `site:${target} ${dorkString}`;
                    url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                } else if (platform === 'github') {
                    query = `org:${target} ${dorkString}`;
                    url = `https://github.com/search?q=${encodeURIComponent(query)}&type=code`;
                }
                
                if (url) {
                    window.open(url, '_blank');
                }
            }, i * 200); // Small delay between opening tabs
        });
    });

    // Initially render the Google dorks when the page loads
    renderDorks('google');
});
