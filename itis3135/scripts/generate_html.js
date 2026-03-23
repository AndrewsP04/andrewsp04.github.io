function generateHTML() {
    const fname = document.getElementById('first_name').value;
    const mascotAdj = document.getElementById('mascot_adj').value;
    const mascotAnimal = document.getElementById('mascot_animal').value;
    
    // Build the raw HTML literal string
    const rawHTML = `
<h3>${fname} ★ ${mascotAdj} ${mascotAnimal}</h3>
<figure>
    <img src="images/headshot.jpeg" alt="Headshot" />
    <figcaption>User uploaded image</figcaption>
</figure>
<ul>
    <li><strong>Personal Background:</strong> ${document.getElementById('background').value}</li>
</ul>
    `.trim();

    // Escape characters so the browser displays code instead of rendering it
    const escapedHTML = rawHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Change H2 and display code
    document.querySelector('h2').innerText = "Introduction HTML";
    document.getElementById('intro-form').style.display = 'none';
    
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<section><pre><code>${escapedHTML}</code></pre></section><br><a href="intro_form.html">Reset Progress</a>`;
    resultContainer.style.display = 'block';
}