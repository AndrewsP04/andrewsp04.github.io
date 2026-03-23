function generateJSON() {
    // 1. Wrapping keys in quotes stops the linter from enforcing camelCase
    const data = {
        "first_name": document.getElementById('first_name').value,
        "last_name": document.getElementById('last_name').value,
        "mascot_adjective": document.getElementById('mascot_adj').value,
        "mascot_animal": document.getElementById('mascot_animal').value,
        "image_caption": document.getElementById('image_caption').value,
        "personal_background": document.getElementById('background').value,
        "courses": []
    };

    // 2. Added parentheses around (entry) to satisfy the arrow function rule
    document.querySelectorAll('.course-entry').forEach((entry) => {
        const inputs = entry.querySelectorAll('input');
        data.courses.push({
            "department": inputs[0].value,
            "number": inputs[1].value,
            "name": inputs[2].value,
            "reason": inputs[3].value
        });
    });

    // Format as JSON with 2-space indentation
    const jsonString = JSON.stringify(data, null, 2);

    // Change H2 and display JSON
    document.querySelector('h2').innerText = "Introduction HTML"; 
    document.getElementById('intro-form').style.display = 'none';
    
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<section><pre><code>${jsonString}</code></pre></section><br><a href="intro_form.html">Reset Progress</a>`;
    resultContainer.style.display = 'block';
}