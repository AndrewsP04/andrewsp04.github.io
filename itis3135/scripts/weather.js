document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.id = "app-container";
    
    container.innerHTML = `
        <div class="ui-box" style="text-align:center;">
            <p style="margin-bottom: 15px;">Check foraging conditions before leaving the pub.</p>
            <input type="text" id="city" placeholder="e.g. Pine Ridge, Briar Patch" style="width:80%; max-width:300px; margin-bottom:15px; background:#1A2F23; color:#F1F8E9;">
            <br>
            <button onclick="getForecast()">Consult Sky-Glass</button>
            <div id="weather-report" style="margin-top:25px; font-style:italic; font-size:1.2rem; color:#FFD700; min-height: 30px;"></div>
        </div>
    `;
    main.appendChild(container);

    window.getForecast = () => {
        const city = document.getElementById('city').value;
        const reports = [
            "Perfect for foraging.", 
            "Heavy sap-fall likely. Take an umbrella.", 
            "Clear skies. Excellent visibility for quills.", 
            "Brisk winds in the canopy. Stay grounded.",
            "Muddy trails. Wear your heaviest armor."
        ];
        const randomReport = reports[Math.floor(Math.random() * reports.length)];
        
        const display = document.getElementById('weather-report');
        
        // FIX: Added a space between 'if' and '(' on the line below!
        if (city.trim() === '') {
            display.innerText = "Please specify a forest region.";
            display.style.color = "#d63031";
        } else {
            display.innerText = `Forecast for ${city}: ${randomReport}`;
            display.style.color = "#FFD700";
        }
    };
});