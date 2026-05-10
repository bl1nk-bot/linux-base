// Main entry point - additional functionality and event handlers

// Terminal commands
const terminalCommands = {
    'help': () => `Available commands: help, clear, echo, date, whoami, ls, pwd, uname, neofetch, cat`,
    'clear': () => '',
    'echo': (args) => args.join(' '),
    'date': () => new Date().toString(),
    'whoami': () => 'user',
    'ls': () => 'Documents  Downloads  Pictures  Music  Videos  readme.txt',
    'pwd': () => '/home/user',
    'uname': () => 'Linux web-desktop 5.15.0-generic x86_64',
    'neofetch': () => `
        ██████████████████  user@linux-web
        ██████████████████  ──────────────
        ████████▒▒████████  OS: Linux Web Desktop
        ████████▒▒████████  Kernel: 5.15.0-web
        ████████▒▒████████  Uptime: ${Math.floor(Math.random() * 24)} hours
        ████████▒▒████████  Packages: 70+ apps
        ████████▒▒████████  Shell: Web Shell
        ████████▒▒████████  Resolution: ${window.innerWidth}x${window.innerHeight}
                            DE: Web Desktop
                            WM: Window Manager
                            Theme: Web Theme
                            Icons: FontAwesome
                            CPU: Virtual CPU
                            Memory: Virtual RAM
    `,
    'cat': (args) => {
        if (args[0] === 'readme.txt') {
            return 'Welcome to Linux Web Desktop!\n\nThis is a web-based Linux desktop replica with 70+ applications.\nBuilt with HTML, CSS, and JavaScript.\n\nEnjoy exploring!';
        }
        return `cat: ${args[0] || ''}: No such file or directory`;
    },
    'exit': () => 'Use the window close button to close the terminal'
};

// Initialize terminal when opened
function initTerminalFunctionality(windowEl) {
    const input = windowEl.querySelector('#terminal-input');
    const output = windowEl.querySelector('.terminal-output');
    
    if (!input || !output) return;
    
    let commandHistory = [];
    let historyIndex = -1;
    
    // Welcome message
    output.innerHTML = `<div>Welcome to Linux Web Desktop Terminal</div><div>Type 'help' for available commands</div><br>`;
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            
            // Add to history
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
            }
            
            // Display command
            output.innerHTML += `<div><span style="color: #0f0;">user@linux:~$</span> ${command}</div>`;
            
            // Process command
            if (command) {
                const parts = command.split(' ');
                const cmd = parts[0].toLowerCase();
                const args = parts.slice(1);
                
                if (terminalCommands[cmd]) {
                    const result = terminalCommands[cmd](args);
                    if (result) {
                        output.innerHTML += `<div>${result}</div>`;
                    }
                    if (cmd === 'clear') {
                        output.innerHTML = '';
                    }
                } else {
                    output.innerHTML += `<div style="color: #f44336;">Command not found: ${cmd}</div>`;
                }
            }
            
            input.value = '';
            output.scrollTop = output.scrollHeight;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        }
    });
    
    // Focus input when clicking on terminal
    windowEl.querySelector('.window-content').addEventListener('click', () => {
        input.focus();
    });
}

// Override the initializeAppFunctionality to include terminal
const originalInit = window.initializeAppFunctionality || (() => {});
window.initializeAppFunctionality = function(appId, windowEl) {
    if (appId === 'terminal') {
        initTerminalFunctionality(windowEl);
    }
    // Call other initializations if they exist
    if (typeof originalInit === 'function' && originalInit !== window.initializeAppFunctionality) {
        originalInit(appId, windowEl);
    }
};

// Tic Tac Toe game logic
let tttBoard = ['', '', '', '', '', '', '', '', ''];
let tttCurrentPlayer = 'X';
let tttGameActive = true;

window.initTTT = function(windowEl) {
    const cells = windowEl.querySelectorAll('.ttt-cell');
    const status = windowEl.querySelector('#ttt-status');
    
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.index;
            
            if (tttBoard[index] !== '' || !tttGameActive) return;
            
            tttBoard[index] = tttCurrentPlayer;
            cell.textContent = tttCurrentPlayer;
            cell.style.color = tttCurrentPlayer === 'X' ? '#667eea' : '#f44336';
            
            if (checkTTTWin()) {
                status.textContent = `Player ${tttCurrentPlayer} wins!`;
                tttGameActive = false;
                return;
            }
            
            if (tttBoard.every(cell => cell !== '')) {
                status.textContent = "It's a draw!";
                tttGameActive = false;
                return;
            }
            
            tttCurrentPlayer = tttCurrentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${tttCurrentPlayer}'s turn`;
        });
    });
};

function checkTTTWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return tttBoard[index] === tttCurrentPlayer;
        });
    });
}

window.resetTTT = function() {
    tttBoard = ['', '', '', '', '', '', '', '', ''];
    tttCurrentPlayer = 'X';
    tttGameActive = true;
    
    document.querySelectorAll('.ttt-cell').forEach(cell => {
        cell.textContent = '';
        cell.style.color = '';
    });
    
    document.querySelectorAll('#ttt-status').forEach(status => {
        status.textContent = "Player X's turn";
    });
};

// Memory Game logic
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;

window.initMemoryGame = function(windowEl) {
    const cards = windowEl.querySelectorAll('.memory-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const index = card.dataset.index;
            const emoji = card.dataset.emoji;
            
            if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;
            
            card.classList.add('flipped');
            card.textContent = emoji;
            card.style.background = '#fff';
            
            flippedCards.push({ index, emoji, element: card });
            
            if (flippedCards.length === 2) {
                setTimeout(() => checkMemoryMatch(), 1000);
            }
        });
    });
};

function checkMemoryMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.emoji === card2.emoji) {
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        matchedPairs++;
        
        if (matchedPairs === 8) {
            showNotification('Memory Game', 'Congratulations! You won!');
        }
    } else {
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');
        card1.element.textContent = '';
        card2.element.textContent = '';
        card1.element.style.background = '#667eea';
        card2.element.style.background = '#667eea';
    }
    
    flippedCards = [];
}

// Hangman game logic
let hangmanWord = 'JAVASCRIPT';
let hangmanGuessed = [];
let hangmanWrongGuesses = 0;
const maxWrongGuesses = 6;

window.initHangman = function(windowEl) {
    const letters = windowEl.querySelectorAll('.hangman-letter');
    
    letters.forEach(btn => {
        btn.addEventListener('click', () => {
            const letter = btn.dataset.letter;
            
            if (hangmanGuessed.includes(letter) || btn.disabled) return;
            
            btn.disabled = true;
            hangmanGuessed.push(letter);
            
            if (hangmanWord.includes(letter)) {
                updateHangmanWord(windowEl);
                
                if (checkHangmanWin()) {
                    showNotification('Hangman', 'You won! The word was ' + hangmanWord);
                }
            } else {
                hangmanWrongGuesses++;
                updateHangmanDrawing(windowEl);
                
                if (hangmanWrongGuesses >= maxWrongGuesses) {
                    showNotification('Hangman', 'Game Over! The word was ' + hangmanWord);
                }
            }
        });
    });
};

function updateHangmanWord(windowEl) {
    const wordEl = windowEl.querySelector('#hangman-word');
    if (!wordEl) return;
    
    const display = hangmanWord.split('').map(letter => {
        return hangmanGuessed.includes(letter) ? letter : '_';
    }).join(' ');
    
    wordEl.textContent = display;
}

function updateHangmanDrawing(windowEl) {
    const drawingEl = windowEl.querySelector('#hangman-drawing');
    if (!drawingEl) return;
    
    const drawings = [
        `\n  _____\n  |   |\n      |\n      |\n      |\n      |\n=========`,
        `\n  _____\n  |   |\n  O   |\n      |\n      |\n      |\n=========`,
        `\n  _____\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========`,
        `\n  _____\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========`,
        `\n  _____\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========`,
        `\n  _____\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========`,
        `\n  _____\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========`
    ];
    
    drawingEl.innerHTML = `<pre style="font-family: monospace;">${drawings[hangmanWrongGuesses]}</pre>`;
}

function checkHangmanWin() {
    return hangmanWord.split('').every(letter => hangmanGuessed.includes(letter));
}

// Quiz game logic
let quizQuestions = [
    { q: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink Text Markup Language'], a: 0 },
    { q: 'Which language runs in browsers?', options: ['Java', 'Python', 'JavaScript'], a: 2 },
    { q: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets'], a: 1 },
    { q: 'What year was JavaScript created?', options: ['1995', '2000', '1990'], a: 0 },
    { q: 'Which symbol is used for comments in JavaScript?', options: ['//', '#', '--'], a: 0 }
];
let currentQuizQuestion = 0;
let quizScore = 0;

window.initQuiz = function(windowEl) {
    currentQuizQuestion = 0;
    quizScore = 0;
    showQuizQuestion(windowEl);
};

function showQuizQuestion(windowEl) {
    const questionEl = windowEl.querySelector('#quiz-question');
    const optionsEl = windowEl.querySelector('#quiz-options');
    const scoreEl = windowEl.querySelector('#quiz-score');
    
    if (!questionEl || !optionsEl) return;
    
    if (currentQuizQuestion >= quizQuestions.length) {
        questionEl.textContent = 'Quiz Complete!';
        optionsEl.innerHTML = '';
        scoreEl.textContent = `Your Score: ${quizScore}/${quizQuestions.length}`;
        return;
    }
    
    const q = quizQuestions[currentQuizQuestion];
    questionEl.textContent = q.q;
    optionsEl.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.style.padding = '0.8rem';
        btn.style.margin = '0.3rem 0';
        btn.style.border = '1px solid #ddd';
        btn.style.background = '#fff';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
        btn.onclick = () => selectQuizAnswer(index, windowEl);
        optionsEl.appendChild(btn);
    });
    
    scoreEl.textContent = `Score: ${quizScore}/${currentQuizQuestion}`;
}

function selectQuizAnswer(answer, windowEl) {
    if (answer === quizQuestions[currentQuizQuestion].a) {
        quizScore++;
        showNotification('Quiz', 'Correct!');
    } else {
        showNotification('Quiz', 'Wrong! The correct answer was: ' + quizQuestions[currentQuizQuestion].options[quizQuestions[currentQuizQuestion].a]);
    }
    
    currentQuizQuestion++;
    showQuizQuestion(windowEl);
}

// Base64 functions
window.base64Encode = function() {
    const input = document.querySelector('#base64-input');
    const output = document.querySelector('#base64-output');
    if (input && output) {
        output.value = btoa(input.value);
    }
};

window.base64Decode = function() {
    const input = document.querySelector('#base64-input');
    const output = document.querySelector('#base64-output');
    if (input && output) {
        try {
            output.value = atob(input.value);
        } catch (e) {
            output.value = 'Invalid Base64 string';
        }
    }
};

// JSON Viewer
window.initJSONViewer = function(windowEl) {
    const input = windowEl.querySelector('#json-input');
    const output = windowEl.querySelector('#json-output');
    
    if (input && output) {
        input.addEventListener('input', () => {
            try {
                const obj = JSON.parse(input.value);
                output.innerHTML = `<pre style="color: #4CAF50;">${JSON.stringify(obj, null, 2)}</pre>`;
            } catch (e) {
                output.innerHTML = `<pre style="color: #f44336;">Invalid JSON: ${e.message}</pre>`;
            }
        });
    }
};

// Initialize all special app functionalities
const appInitFunctions = {
    'tic-tac-toe': window.initTTT,
    'memory-game': window.initMemoryGame,
    'hangman': window.initHangman,
    'quiz': window.initQuiz,
    'json-viewer': window.initJSONViewer
};

// Override openApp to initialize game logic
const originalOpenApp = window.openApp;
window.openApp = function(appId) {
    if (originalOpenApp) {
        originalOpenApp(appId);
    }
    
    // Initialize app-specific logic after a short delay
    setTimeout(() => {
        const windowEl = document.querySelector('.window:last-child');
        if (windowEl && appInitFunctions[appId]) {
            appInitFunctions[appId](windowEl);
        }
    }, 100);
};

console.log('Linux Web Desktop loaded successfully!');
console.log('70+ applications ready to use.');
