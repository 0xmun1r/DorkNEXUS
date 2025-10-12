document.addEventListener('DOMContentLoaded', () => {
    // Get references to all the important HTML elements
    const targetInput = document.getElementById('targetDomain');
    const dorksContainer = document.getElementById('dorks-container');
    const runBtn = document.getElementById('runBtn');
    
    const ALL_DORKS = { google: GOOGLE_DORKS, github: GITHUB_DORKS, shodan: SHODAN_DORKS, fofa: FOFA_DORKS, censys: CENSYS_DORKS };
    const tabButtons = document.querySelectorAll('.tab-btn');

    function renderDorks(platform) {
        dorksContainer.innerHTML = '';
        const platformDorks = ALL_DORKS[platform];
        
        for (const category in platformDorks) {
            const dorks = platformDorks[category];
            const details = document.createElement('details');
            let innerHTML = `<summary>${category} (${dorks.length})</summary><table>`;
            
            dorks.forEach(dork => {
                innerHTML += `
                    <tr>
                        <td style="width:5%;"><input type="radio" class="dork-radio" name="dork-selection" data-platform="${platform}" data-dork="${dork.dork.replace(/"/g, '&quot;')}"></td>
                        <td><code>${dork.dork}</code></td>
                        <td>${dork.desc || ''}</td>
                    </tr>
                `;
            });

            innerHTML += `</table>`;
            details.innerHTML = innerHTML;
            dorksContainer.appendChild(details);
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderDorks(btn.dataset.platform);
        });
    });

    runBtn.addEventListener('click', () => {
        const target = targetInput.value.trim();
        if (!target) {
            alert('>>> ERROR: Target required.');
            return;
        }

        const selectedDork = document.querySelector('.dork-radio:checked');
        if (!selectedDork) {
            alert('>>> ERROR: No dork selected.');
            return;
        }

        const platform = selectedDork.dataset.platform;
        let dorkString = selectedDork.dataset.dork;
        let query = '', url = '';
        
        // This logic replaces a placeholder like {TARGET} with the user's input
        // This is especially useful for Censys dorks
        if (dorkString.includes('{TARGET}')) {
            dorkString = dorkString.replace(/{TARGET}/g, target);
            query = dorkString;
        }

        if (platform === 'google') {
            query = `site:${target} ${dorkString}`;
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        } else if (platform === 'github') {
            query = `org:${target} ${dorkString}`;
            url = `https://github.com/search?q=${encodeURIComponent(query)}&type=code`;
        } else if (platform === 'shodan') {
            query = `hostname:${target} ${dorkString}`;
            url = `https://www.shodan.io/search?query=${encodeURIComponent(query)}`;
        } else if (platform === 'fofa') {
            query = `domain="${target}" && ${dorkString}`;
            url = `https://en.fofa.info/result?qbase64=${btoa(query)}`;
        } else if (platform === 'censys') {
            // Use the pre-formatted query if {TARGET} was used, otherwise combine
            if (!query) {
                 query = `services.http.response.body_str: "${target}" AND (${dorkString})`;
            }
            url = `https://search.censys.io/search?resource=hosts&q=${encodeURIComponent(query)}`;
        }
        
        if (url) {
            window.open(url, '_blank');
        }
    });

    renderDorks('google');
});
