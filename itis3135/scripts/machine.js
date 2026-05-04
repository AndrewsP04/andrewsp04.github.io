document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.id = "app-container";
    
    // Pairing your pub themes with actual reliable sound URLs from FCC's servers
    const soundData = [
        { name: 'Pour', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { name: 'Clink', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { name: 'Gulp', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { name: 'Stomp', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { name: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { name: 'Whistle', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { name: 'Bell', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { name: 'Quill', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        { name: 'Cheers', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
    ];

    // Inject the audio URL into a 'data-url' attribute on each button
    let buttonsHTML = soundData.map((s) => 
        `<button class="drum-pad" data-url="${s.url}" style="width:80px; height:80px; margin:5px;">${s.name}</button>`
    ).join('');
    
    container.innerHTML = `
        <div class="ui-box" style="text-align:center;">
            <div id="display" style="font-size:1.5rem; color:#FFD700; margin-bottom:15px; min-height: 30px;">Select a Sound</div>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); justify-items: center;">${buttonsHTML}</div>
        </div>
    `;
    main.appendChild(container);

    const display = document.getElementById('display');
    
    // Attach the click event to play the sound
    container.querySelectorAll('.drum-pad').forEach((btn) => {
        btn.onclick = () => { 
            // 1. Update the visual text
            display.innerText = `Now Playing: ${btn.innerText}`; 
            
            // 2. Fetch the URL from the button and play it out loud!
            const audioLink = btn.getAttribute('data-url');
            const audio = new Audio(audioLink);
            audio.play();
        };
    });
});