
        //Quiz Logic

          const questions = [
            {
                id: 1,
                text: "What is the correct way to declare a variable in JavaScript?",
                options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
                marks: 2
            },
            {
                id: 2,
                text: "Which of the following is NOT a JavaScript data type?",
                options: ["String", "Boolean", "Float", "Undefined"],
                marks: 2
            },
            {
                id: 3,
                text: "What does '===' operator do in JavaScript?",
                options: ["Assigns value", "Compares value only", "Compares value and type", "Logical AND"],
                marks: 2
            },
            {
                id: 4,
                text: "How do you create a function in JavaScript?",
                options: ["function myFunction() {}", "create myFunction() {}", "def myFunction() {}", "function = myFunction() {}"],
                marks: 2
            },
            {
                id: 5,
                text: "What is the output of typeof null in JavaScript?",
                options: ["null", "undefined", "object", "boolean"],
                marks: 2
            },
            {
                id: 6,
                text: "Which method is used to add an element to the end of an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                marks: 2
            },
            {
                id: 7,
                text: "What is closure in JavaScript?",
                options: ["A loop structure", "A function with access to outer scope", "A data type", "An error type"],
                marks: 2
            },
            {
                id: 8,
                text: "How do you comment a single line in JavaScript?",
                options: ["<!-- comment -->", "/* comment */", "// comment", "# comment"],
                marks: 2
            },
            {
                id: 9,
                text: "What is the difference between let and var?",
                options: ["No difference", "let has block scope", "var has block scope", "let is deprecated"],
                marks: 2
            },
            {
                id: 10,
                text: "Which event occurs when the user clicks on an HTML element?",
                options: ["onchange", "onclick", "onmouseclick", "onselect"],
                marks: 2
            },
            {
                id: 11,
                text: "What is the correct way to write a JavaScript array?",
                options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = (1:'red', 2:'green', 3:'blue')"],
                marks: 2
            },
            {
                id: 12,
                text: "How do you round the number 7.25 to the nearest integer?",
                options: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
                marks: 2
            },
            {
                id: 13,
                text: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
                options: ["w2 = window.new('http://www.w3schools.com');", "w2 = window.open('http://www.w3schools.com');", "w2 = window.popup('http://www.w3schools.com');", "w2 = new window('http://www.w3schools.com');"],
                marks: 2
            },
            {
                id: 14,
                text: "JavaScript is the same as Java.",
                options: ["True", "False"],
                marks: 2
            },
            {
                id: 15,
                text: "How can you detect the client's browser name?",
                options: ["navigator.appName", "browser.name", "client.navName", "window.browser"],
                marks: 2
            }
        ];

        // Test state
        let currentQuestionIndex = 0;
        let answers = {};
        let markedForReview = new Set();
        let timeLeft = 30 * 60; // 30 minutes in seconds
        let timerInterval;

        // Initialize the test
        function initializeTest() {
            generateQuestionGrid();
            loadQuestion(0);
            startTimer();
            updateStats();
        }

        // Generate question grid in sidebar
        function generateQuestionGrid() {
            const grid = document.getElementById('question-grid');
            grid.innerHTML = '';
            
            questions.forEach((question, index) => {
                const button = document.createElement('button');
                button.className = 'w-8 h-8 rounded text-sm font-medium transition-colors';
                button.textContent = index + 1;
                button.onclick = () => goToQuestion(index);
                updateQuestionButtonStyle(button, index);
                grid.appendChild(button);
            });
        }

        // Update question button style based on status
        function updateQuestionButtonStyle(button, index) {
            button.className = 'w-8 h-8 rounded text-sm font-medium transition-colors ';
            
            if (index === currentQuestionIndex) {
                button.className += 'bg-yellow-500 text-white';
            } else if (answers[index] !== undefined) {
                button.className += 'bg-green-500 text-white';
            } else {
                button.className += 'bg-gray-300 text-gray-700 hover:bg-gray-400';
            }
        }

        // Load a specific question
        function loadQuestion(index) {
            currentQuestionIndex = index;
            const question = questions[index];
            
            document.getElementById('current-question-num').textContent = index + 1;
            document.getElementById('total-questions').textContent = questions.length;
            document.getElementById('question-text').textContent = question.text;
            document.getElementById('question-marks').textContent = question.marks;
            
            // Load options
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, optionIndex) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer';
                
                const isSelected = answers[index] === optionIndex;
                if (isSelected) {
                    optionDiv.className += ' bg-blue-50 border-blue-300';
                }
                
                optionDiv.innerHTML = `
                    <input type="radio" name="question-${index}" value="${optionIndex}" 
                           class="mr-3 h-4 w-4 text-blue-600" ${isSelected ? 'checked' : ''}>
                    <label class="flex-1 cursor-pointer">${String.fromCharCode(65 + optionIndex)}. ${option}</label>
                `;
                
                optionDiv.onclick = () => selectOption(index, optionIndex);
                optionsContainer.appendChild(optionDiv);
            });
            
            // Update navigation buttons
            document.getElementById('prev-btn').disabled = index === 0;
            document.getElementById('next-btn').textContent = index === questions.length - 1 ? 'Finish' : 'Next';
            
            // Update question grid
            updateQuestionGrid();
        }

        // Select an option
        function selectOption(questionIndex, optionIndex) {
            answers[questionIndex] = optionIndex;
            loadQuestion(questionIndex);
            updateStats();
        }

        // Go to specific question
        function goToQuestion(index) {
            loadQuestion(index);
        }

        // Navigate to next question
        function nextQuestion() {
            if (currentQuestionIndex < questions.length - 1) {
                loadQuestion(currentQuestionIndex + 1);
            } else {
                // Last question, show submit modal
                showSubmitModal();
            }
        }

        // Navigate to previous question
        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                loadQuestion(currentQuestionIndex - 1);
            }
        }

        // Clear current answer
        function clearAnswer() {
            delete answers[currentQuestionIndex];
            loadQuestion(currentQuestionIndex);
            updateStats();
        }

        // Mark for review
        function markForReview() {
            if (markedForReview.has(currentQuestionIndex)) {
                markedForReview.delete(currentQuestionIndex);
            } else {
                markedForReview.add(currentQuestionIndex);
            }
            updateQuestionGrid();
        }

        // Update question grid styles
        function updateQuestionGrid() {
            const buttons = document.querySelectorAll('#question-grid button');
            buttons.forEach((button, index) => {
                updateQuestionButtonStyle(button, index);
            });
        }

        // Update statistics
        function updateStats() {
            const attempted = Object.keys(answers).length;
            const left = questions.length - attempted;
            const progress = (attempted / questions.length) * 100;
            
            document.getElementById('attempted-count').textContent = attempted;
            document.getElementById('left-count').textContent = left;
            document.getElementById('progress-bar').style.width = progress + '%';
        }

        // Timer functions
        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    autoSubmitTest();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('time-display').textContent = display;
            
            // Change color when time is running low
            const timerElement = document.getElementById('timer');
            if (timeLeft <= 300) { // 5 minutes
                timerElement.className = timerElement.className.replace('bg-red-50 text-red-700', 'bg-red-100 text-red-800');
            }
            if (timeLeft <= 60) { // 1 minute
                timerElement.className = timerElement.className.replace('bg-red-100 text-red-800', 'bg-red-200 text-red-900');
            }
        }

        // Submit functions
        function showSubmitModal() {
            const attempted = Object.keys(answers).length;
            const remaining = questions.length - attempted;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const timeDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            document.getElementById('modal-attempted').textContent = attempted;
            document.getElementById('modal-remaining').textContent = remaining;
            document.getElementById('modal-time').textContent = timeDisplay;
            document.getElementById('submit-modal').classList.remove('hidden');
            document.getElementById('submit-modal').classList.add('flex');
        }

        function hideSubmitModal() {
            document.getElementById('submit-modal').classList.add('hidden');
            document.getElementById('submit-modal').classList.remove('flex');
        }

        function submitTest() {
            clearInterval(timerInterval);
            alert('Test submitted successfully!');
            // Here you would typically send the answers to a server
            console.log('Answers:', answers);
            console.log('Marked for review:', Array.from(markedForReview));
        }

        function autoSubmitTest() {
            alert('Time is up! Test submitted automatically.');
            submitTest();
        }

        // Event listeners
        document.getElementById('next-btn').addEventListener('click', nextQuestion);
        document.getElementById('prev-btn').addEventListener('click', prevQuestion);
        document.getElementById('clear-btn').addEventListener('click', clearAnswer);
        document.getElementById('mark-review-btn').addEventListener('click', markForReview);
        document.getElementById('submit-test-btn').addEventListener('click', showSubmitModal);
        document.getElementById('confirm-submit').addEventListener('click', submitTest);
        document.getElementById('cancel-submit').addEventListener('click', hideSubmitModal);

        // Instructions toggle
        document.getElementById('instructions-toggle').addEventListener('click', () => {
            const content = document.getElementById('instructions-content');
            const icon = document.getElementById('instructions-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        });

        // Initialize the test when page loads
        document.addEventListener('DOMContentLoaded', initializeTest);