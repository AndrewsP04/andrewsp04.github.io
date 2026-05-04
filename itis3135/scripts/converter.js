document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.id = "app-container";
    
    container.innerHTML = `
        <div class="ui-box">
            <textarea id="markdown-input" placeholder="Type woodland runes (# for H1, ** for Bold)..." style="width:100%; height:150px; background:#1A2F23; color:#F1F8E9;"></textarea>
            <div id="html-preview" style="margin-top:15px; padding:10px; background:#F1F8E9; color:#1A2F23; border-radius:4px; min-height:50px;"></div>
        </div>
    `;
    main.appendChild(container);

    const input = document.getElementById('markdown-input');
    const preview = document.getElementById('html-preview');

    input.addEventListener('input', (e) => {
        let text = e.target.value;
        text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>')
                   .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                   .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                   .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                   .replace(/\*(.*)\*/gim, '<em>$1</em>')
                   .replace(/\n/gim, '<br>');
        preview.innerHTML = text || "Translation will appear here...";
    });
});