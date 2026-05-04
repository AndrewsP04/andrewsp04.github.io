document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.id = "app-container";
    
    let votes = { "Thistle Stout": 12, "Acorn Ale": 8, "Pine Pilsner": 15 };
    
    // FIX: Parentheses added around (v) on the line below!
    container.innerHTML = `
        <div class="ui-box" style="text-align:center;">
            <div id="vote-display" style="margin-bottom:20px; font-size: 1.2rem;"></div>
            <div style="display:flex; gap:10px; justify-content:center; flex-wrap: wrap;">
                ${Object.keys(votes).map((v) => `<button onclick="castVote('${v}')">Vote: ${v}</button>`).join('')}
            </div>
        </div>
    `;
    main.appendChild(container);

    const updateDisplay = () => {
        // Parentheses are already safely wrapped around ([k, v]) here
        document.getElementById('vote-display').innerHTML = Object.entries(votes)
            .map(([k, v]) => `<p style="margin:5px 0;">${k}: <strong style="color:#FFD700;">${v} kegs</strong></p>`).join('');
    };

    window.castVote = (brew) => {
        votes[brew]++;
        updateDisplay();
    };
    
    updateDisplay();
});