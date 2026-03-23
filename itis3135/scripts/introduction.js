document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById("intro-form");
    
    if(formElement) {
        formElement.addEventListener("submit", processForm);
    }

    const clearButton = document.getElementById("clearBtn");
    if(clearButton) {
        clearButton.addEventListener("click", function () {
            const inputs = Array.from(document.querySelectorAll("form input, form textarea"));
            inputs.forEach((input) => (input.value = ""));
        });
    }
});

function addCourse() {
    const container = document.getElementById('course-container');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-entry';
    courseDiv.innerHTML = `
        <input type="text" name="dept" placeholder="Dept (e.g., ITIS)" required>
        <input type="text" name="course_num" placeholder="Number (e.g., 3135)" required>
        <input type="text" name="course_name" placeholder="Course Name" required>
        <input type="text" name="reason" placeholder="Reason" required>
        <button type="button" onclick="this.parentElement.remove()">Delete</button>
    `;
    container.appendChild(courseDiv);
}

function processForm(e) {
    e.preventDefault(); 
    
    // Gather text data
    const caption = document.getElementById('image_caption').value;
    const personalStatement = document.getElementById('personal_statement').value;
    const personalBg = document.getElementById('personal_bg').value;
    const professionalBg = document.getElementById('professional_bg').value;
    const academicBg = document.getElementById('academic_bg').value;
    const subjectBg = document.getElementById('subject_bg').value;
    const primaryComp = document.getElementById('primary_computer').value;
    const backupComp = document.getElementById('backup_computer').value;
    const shareThing = document.getElementById('share_thing').value;
    const quote = document.getElementById('quote').value;
    const quoteAuthor = document.getElementById('quote_author').value;

    // Handle image upload or default to truck.jpg
    const imageInput = document.getElementById('user_image');
    let imageSrc = "truck.jpg"; 
    if (imageInput.files && imageInput.files[0]) {
        imageSrc = URL.createObjectURL(imageInput.files[0]);
    }

    // Build the output HTML to EXACTLY match your original layout
    let outputHTML = `
        <figure>
            <img src="${imageSrc}" alt="User uploaded image" width="500">
            <figcaption>${caption}</figcaption>
        </figure>

        <p>${personalStatement}</p>

        <ul>
            <li><strong>Personal Background:</strong> ${personalBg}</li>
            <li><strong>Professional Background:</strong> ${professionalBg}</li>
            <li><strong>Academic Background:</strong> ${academicBg}</li>
            <li><strong>Background in this Subject:</strong> ${subjectBg}</li>
            <li><strong>Primary Work Computer:</strong> ${primaryComp}</li>
            <li><strong>Backup Work Computer & Location Plan:</strong> ${backupComp}</li>
            <li><strong>Courses I'm Taking & Why:</strong>
                <ul>
    `;

    // Process dynamic courses
    document.querySelectorAll('.course-entry').forEach(entry => {
        const inputs = entry.querySelectorAll('input');
        outputHTML += `<li>${inputs[0].value}${inputs[1].value} - ${inputs[2].value}: ${inputs[3].value}</li>`;
    });

    outputHTML += `
                </ul>
            </li>
            <li><strong>I’d also like to share:</strong> ${shareThing}</li>
        </ul>

        <blockquote>
            "${quote}"
            <cite>— ${quoteAuthor}</cite>
        </blockquote>
    `;

    // Replace form content and update H2
    document.querySelector('h2').innerText = "Introduction Form";
    document.getElementById('intro-form').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = outputHTML;
    resultContainer.style.display = 'block';
}