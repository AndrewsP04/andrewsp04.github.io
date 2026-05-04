document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.id = "app-container";
    
    let balance = 100;
    
    container.innerHTML = `
        <div class="ui-box" style="text-align:center;">
            <p style="font-size:1.5rem; margin-bottom:20px;">Current Tab: <span id="balance" style="color:#FFD700; font-weight:bold;">${balance} Acorns</span></p>
            <input type="number" id="amount" placeholder="Enter Acorns" style="width:150px; text-align:center; margin-bottom:15px; background:#1A2F23; color:#F1F8E9;">
            <div style="display:flex; justify-content:center; gap:10px;">
                <button onclick="transact('deposit')">Pay Tab</button>
                <button onclick="transact('withdraw')" style="background:#d63031; color:white;">Add to Tab</button>
            </div>
        </div>
    `;
    main.appendChild(container);

    window.transact = (type) => {
        const val = parseInt(document.getElementById('amount').value) || 0;
        balance = (type === 'deposit') ? balance + val : balance - val;
        document.getElementById('balance').innerText = `${balance} Acorns`;
        document.getElementById('amount').value = '';
    };
});