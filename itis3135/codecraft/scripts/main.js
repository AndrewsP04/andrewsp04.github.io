// codecraft/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------------------
    // FEATURE 1: Real-Time CSS Toggles (css_lesson.html)
    // ---------------------------------------------------------
    const demoBox = document.getElementById('demo-box');
    const btnRadius = document.getElementById('btn-radius');
    const btnColor = document.getElementById('btn-color');
    const btnPadding = document.getElementById('btn-padding');

    // Only run this if we are actually on the CSS page
    if (demoBox) {
        let isRounded = false;
        btnRadius.addEventListener('click', () => {
            isRounded = !isRounded;
            demoBox.style.borderRadius = isRounded ? '50%' : '0px';
        });

        let isRed = false;
        btnColor.addEventListener('click', () => {
            isRed = !isRed;
            // Toggles between the default primary color and a visible red
            demoBox.style.backgroundColor = isRed ? '#e74c3c' : 'var(--primary-color)'; 
        });

        let isPadded = false;
        btnPadding.addEventListener('click', () => {
            isPadded = !isPadded;
            demoBox.style.padding = isPadded ? '40px' : '0px';
        });
    }

    // ---------------------------------------------------------
    // FEATURE 2: Instant Quiz Grader (quiz.html)
    // ---------------------------------------------------------
    const quizBtn = document.getElementById('submit-quiz');
    const resultsDiv = document.getElementById('quiz-results');

    // Only run this if we are actually on the Quiz page
    if (quizBtn) {
        quizBtn.addEventListener('click', () => {
            let score = 0;
            const totalQuestions = 2;

            // Grab the selected radio buttons
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');

            // Validation: Make sure they answered everything
            if (!q1 || !q2) {
                resultsDiv.innerHTML = "⚠️ Please answer all questions before submitting.";
                resultsDiv.style.color = "red";
                return;
            }

            // Calculate Score
            if (q1.value === 'correct') score++;
            if (q2.value === 'correct') score++;

            // Output Results Dynamically
            resultsDiv.innerHTML = `You scored ${score} out of ${totalQuestions} Correct!`;
            resultsDiv.style.color = score === totalQuestions ? "green" : "var(--primary-color)";
        });
    }

    // ---------------------------------------------------------
    // EXTRA: Interactive Calculator (js_lesson.html)
    // ---------------------------------------------------------
    const calcBtn = document.getElementById('calc-btn');
    
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            // Read the inputs, convert them to numbers (or 0 if empty)
            const num1 = parseFloat(document.getElementById('num1').value) || 0;
            const num2 = parseFloat(document.getElementById('num2').value) || 0;
            
            // Inject the result into the span
            document.getElementById('calc-result').innerText = num1 + num2;
        });
    }
});