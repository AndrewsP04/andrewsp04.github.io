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
    const display = document.getElementById('calc-result-main');
    if (display) {
        let currentInput = '0';
        let previousInput = '';
        let operation = null;
        let displayValue = '0';

        const addToHistory = (entry) => {
            const historyLog = document.getElementById('history-log');
            const emptyMsg = historyLog.querySelector('.empty-msg');
            if (emptyMsg) emptyMsg.remove();
            const li = document.createElement('li');
            li.textContent = entry;
            historyLog.appendChild(li);
        };

        // Clear History button
        const clearHistoryBtn = document.getElementById('clear-history');
        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener('click', () => {
                const historyLog = document.getElementById('history-log');
                historyLog.innerHTML = '<li class="empty-msg">No calculations yet</li>';
            });
        }

        // Number buttons
        document.querySelectorAll('.btn-num').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const num = e.target.innerText;
                if (currentInput === '0' && num !== '.') currentInput = num;
                else currentInput += num;
                if (displayValue === '0' && num !== '.') displayValue = num;
                else displayValue += num;
                display.innerText = displayValue;
            });
        });

        // Math Operator buttons (+, -, *, /)
        document.querySelectorAll('.btn-op').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const op = e.target.getAttribute('data-op');
                const opSymbols = { 'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/' };
                const opSymbol = opSymbols[op];
                if (previousInput !== '') {
                    // Calculate intermediate result
                    const prev = parseFloat(previousInput);
                    const curr = parseFloat(currentInput);
                    let res = 0;
                    if (operation === 'add') res = prev + curr;
                    else if (operation === 'subtract') res = prev - curr;
                    else if (operation === 'multiply') res = prev * curr;
                    else if (operation === 'divide') res = prev / curr;
                    displayValue = res.toString() + ' ' + opSymbol + ' ';
                    previousInput = res.toString();
                } else {
                    displayValue += ' ' + opSymbol + ' ';
                    previousInput = currentInput;
                }
                currentInput = '0';
                operation = op;
                display.innerText = displayValue;
            });
        });

        // Clear button (AC)
        document.querySelectorAll('.btn-tool').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const op = e.target.getAttribute('data-op');
                if (op === 'clear') {
                    currentInput = '0';
                    previousInput = '';
                    operation = null;
                    displayValue = '0';
                    display.innerText = displayValue;
                } else if (op === 'sqrt') {
                    const num = parseFloat(currentInput);
                    if (!isNaN(num) && num >= 0) {
                        const result = Math.sqrt(num);
                        displayValue = '√' + currentInput + ' = ' + result;
                        currentInput = result.toString();
                        display.innerText = displayValue;
                        addToHistory('√' + currentInput + ' = ' + result);
                    }
                } else if (op === 'percent') {
                    const num = parseFloat(currentInput);
                    if (!isNaN(num)) {
                        const result = num / 100;
                        displayValue = currentInput + '% = ' + result;
                        currentInput = result.toString();
                        display.innerText = displayValue;
                        addToHistory(currentInput + '% = ' + result);
                    }
                }
            });
        });

        // Equals button (=)
        const executeBtn = document.getElementById('calc-execute');
        if (executeBtn) {
            executeBtn.addEventListener('click', () => {
                let result = 0;
                const prev = parseFloat(previousInput);
                const current = parseFloat(currentInput);
                if (isNaN(prev) || isNaN(current)) return;

                if (operation === 'add') result = prev + current;
                else if (operation === 'subtract') result = prev - current;
                else if (operation === 'multiply') result = prev * current;
                else if (operation === 'divide') result = prev / current;

                addToHistory(displayValue + ' = ' + result);
                displayValue = result.toString();
                currentInput = result.toString();
                display.innerText = displayValue;
                previousInput = '';
                operation = null;
            });
        }
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

    // Load Components dynamically
    fetch('components/header.html')
        .then((response) => response.text())
        .then((data) => {
            document.querySelector('div[data-include="components/header.html"]').innerHTML = data;
            // Set active navigation link based on current page
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        });

    fetch('components/footer.html')
        .then((response) => response.text())
        .then((data) => {
            document.querySelector('div[data-include="components/footer.html"]').innerHTML = data;
        });
});