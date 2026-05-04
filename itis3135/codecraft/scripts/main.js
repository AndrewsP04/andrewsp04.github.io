// codecraft/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------------------
    // REQUIREMENT 1: Custom JS (CSS Toggles, Quiz, & Calc)
    // ---------------------------------------------------------
    
    // CSS Visualizer Toggles (css_lesson.html)
    const demoBox = document.getElementById('demo-box');
    if (demoBox) {
        const btnRadius = document.getElementById('btn-radius');
        const btnColor = document.getElementById('btn-color');
        const btnPadding = document.getElementById('btn-padding');

        let isRounded = false;
        btnRadius.addEventListener('click', () => {
            isRounded = !isRounded;
            demoBox.style.borderRadius = isRounded ? '50%' : '0px';
        });

        let isRed = false;
        btnColor.addEventListener('click', () => {
            isRed = !isRed;
            demoBox.style.backgroundColor = isRed ? '#e74c3c' : 'var(--primary-color)'; 
        });

        let isPadded = false;
        btnPadding.addEventListener('click', () => {
            isPadded = !isPadded;
            demoBox.style.padding = isPadded ? '40px' : '0px';
        });
    }

    // Instant Quiz Grader (quiz.html)
    const quizBtn = document.getElementById('submit-quiz');
    if (quizBtn) {
        const resultsDiv = document.getElementById('quiz-results');
        quizBtn.addEventListener('click', () => {
            let score = 0;
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');

            if (!q1 || !q2) {
                resultsDiv.innerHTML = "⚠️ Please answer all questions before submitting.";
                resultsDiv.style.color = "red";
                return;
            }

            if (q1.value === 'correct') score++;
            if (q2.value === 'correct') score++;

            resultsDiv.innerHTML = `You scored ${score} out of 2 Correct!`;
            resultsDiv.style.color = score === 2 ? "green" : "var(--primary-color)";
        });
    }

    // Interactive Calculator (js_lesson.html)
    const calcBtn = document.getElementById('calc-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('num1').value) || 0;
            const num2 = parseFloat(document.getElementById('num2').value) || 0;
            document.getElementById('calc-result').innerText = num1 + num2;
        });
    }

    // ---------------------------------------------------------
    // REQUIREMENT 2: jQuery UI Widget (Accordion)
    // ---------------------------------------------------------
    // We use jQuery here to initialize the widget for the glossary
    if (typeof jQuery !== 'undefined' && $("#glossary-accordion").length) {
        $("#glossary-accordion").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    }

    // ---------------------------------------------------------
    // REQUIREMENT 3: jQuery Plugin (Slick Carousel)
    // ---------------------------------------------------------
    // We use jQuery here to initialize the plugin for student reviews
    if (typeof jQuery !== 'undefined' && $('.reviews-slider').length) {
        $('.reviews-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        });
    }
});