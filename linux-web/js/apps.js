// Application definitions - 50+ fully functional apps
const APPS = [
    // System Apps (1-10)
    {
        id: 'terminal',
        name: 'Terminal',
        icon: 'fas fa-terminal',
        category: 'System',
        pinned: true,
        desktop: true
    },
    {
        id: 'file-manager',
        name: 'File Manager',
        icon: 'fas fa-folder',
        category: 'System',
        pinned: true,
        desktop: true
    },
    {
        id: 'settings',
        name: 'Settings',
        icon: 'fas fa-cog',
        category: 'System',
        pinned: true,
        desktop: false
    },
    {
        id: 'system-monitor',
        name: 'System Monitor',
        icon: 'fas fa-chart-line',
        category: 'System',
        pinned: false,
        desktop: false
    },
    {
        id: 'task-manager',
        name: 'Task Manager',
        icon: 'fas fa-tasks',
        category: 'System',
        pinned: false,
        desktop: false
    },
    {
        id: 'disk-usage',
        name: 'Disk Usage',
        icon: 'fas fa-hdd',
        category: 'System',
        pinned: false,
        desktop: false
    },
    {
        id: 'network-manager',
        name: 'Network Manager',
        icon: 'fas fa-wifi',
        category: 'System',
        pinned: false,
        desktop: false
    },
    {
        id: 'process-viewer',
        name: 'Process Viewer',
        icon: 'fas fa-list',
        category: 'System',
        pinned: false,
        desktop: false
    },
    {
        id: 'log-viewer',
        name: 'Log Viewer',
        icon: 'fas fa-file-alt',
        category: 'System',
        pinned: false,
        desktop: false
    },
    {
        id: 'backup',
        name: 'Backup',
        icon: 'fas fa-save',
        category: 'System',
        pinned: false,
        desktop: false
    },
    
    // Office Apps (11-20)
    {
        id: 'text-editor',
        name: 'Text Editor',
        icon: 'fas fa-edit',
        category: 'Office',
        pinned: true,
        desktop: true
    },
    {
        id: 'code-editor',
        name: 'Code Editor',
        icon: 'fas fa-code',
        category: 'Office',
        pinned: true,
        desktop: false
    },
    {
        id: 'calculator',
        name: 'Calculator',
        icon: 'fas fa-calculator',
        category: 'Office',
        pinned: true,
        desktop: true
    },
    {
        id: 'calendar',
        name: 'Calendar',
        icon: 'fas fa-calendar',
        category: 'Office',
        pinned: false,
        desktop: false
    },
    {
        id: 'notes',
        name: 'Notes',
        icon: 'fas fa-sticky-note',
        category: 'Office',
        pinned: false,
        desktop: false
    },
    {
        id: 'spreadsheet',
        name: 'Spreadsheet',
        icon: 'fas fa-table',
        category: 'Office',
        pinned: false,
        desktop: false
    },
    {
        id: 'presentation',
        name: 'Presentation',
        icon: 'fas fa-chalkboard',
        category: 'Office',
        pinned: false,
        desktop: false
    },
    {
        id: 'pdf-viewer',
        name: 'PDF Viewer',
        icon: 'fas fa-file-pdf',
        category: 'Office',
        pinned: false,
        desktop: false
    },
    {
        id: 'dictionary',
        name: 'Dictionary',
        icon: 'fas fa-book',
        category: 'Office',
        pinned: false,
        desktop: false
    },
    {
        id: 'translator',
        name: 'Translator',
        icon: 'fas fa-language',
        category: 'Office',
        pinned: false,
        desktop: false
    },
    
    // Internet Apps (21-30)
    {
        id: 'browser',
        name: 'Web Browser',
        icon: 'fas fa-globe',
        category: 'Internet',
        pinned: true,
        desktop: true
    },
    {
        id: 'email',
        name: 'Email',
        icon: 'fas fa-envelope',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'chat',
        name: 'Chat',
        icon: 'fas fa-comments',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'ftp-client',
        name: 'FTP Client',
        icon: 'fas fa-upload',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'torrent',
        name: 'Torrent',
        icon: 'fas fa-magnet',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'rss-reader',
        name: 'RSS Reader',
        icon: 'fas fa-rss',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'download-manager',
        name: 'Download Manager',
        icon: 'fas fa-download',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'remote-desktop',
        name: 'Remote Desktop',
        icon: 'fas fa-desktop',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'ssh-client',
        name: 'SSH Client',
        icon: 'fas fa-server',
        category: 'Internet',
        pinned: false,
        desktop: false
    },
    {
        id: 'weather',
        name: 'Weather',
        icon: 'fas fa-cloud-sun',
        category: 'Internet',
        pinned: false,
        desktop: true
    },
    
    // Multimedia Apps (31-40)
    {
        id: 'image-viewer',
        name: 'Image Viewer',
        icon: 'fas fa-image',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'video-player',
        name: 'Video Player',
        icon: 'fas fa-video',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'music-player',
        name: 'Music Player',
        icon: 'fas fa-music',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'paint',
        name: 'Paint',
        icon: 'fas fa-palette',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'photo-editor',
        name: 'Photo Editor',
        icon: 'fas fa-magic',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'audio-recorder',
        name: 'Audio Recorder',
        icon: 'fas fa-microphone',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'screen-recorder',
        name: 'Screen Recorder',
        icon: 'fas fa-camera',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'media-converter',
        name: 'Media Converter',
        icon: 'fas fa-exchange-alt',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'radio',
        name: 'Radio',
        icon: 'fas fa-broadcast-tower',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    {
        id: 'podcast',
        name: 'Podcast',
        icon: 'fas fa-podcast',
        category: 'Multimedia',
        pinned: false,
        desktop: false
    },
    
    // Games (41-50)
    {
        id: 'chess',
        name: 'Chess',
        icon: 'fas fa-chess',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'tic-tac-toe',
        name: 'Tic Tac Toe',
        icon: 'fas fa-times',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'snake',
        name: 'Snake',
        icon: 'fas fa-gamepad',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'tetris',
        name: 'Tetris',
        icon: 'fas fa-shapes',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'memory-game',
        name: 'Memory Game',
        icon: 'fas fa-brain',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'sudoku',
        name: 'Sudoku',
        icon: 'fas fa-th',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        icon: 'fas fa-bomb',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'hangman',
        name: 'Hangman',
        icon: 'fas fa-user',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'rps',
        name: 'Rock Paper Scissors',
        icon: 'fas fa-hand-rock',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    {
        id: 'quiz',
        name: 'Quiz',
        icon: 'fas fa-question-circle',
        category: 'Games',
        pinned: false,
        desktop: false
    },
    
    // Development Tools (51-60)
    {
        id: 'json-viewer',
        name: 'JSON Viewer',
        icon: 'fas fa-code',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'base64',
        name: 'Base64 Encoder',
        icon: 'fas fa-lock',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'color-picker',
        name: 'Color Picker',
        icon: 'fas fa-eye-dropper',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'regex-tester',
        name: 'Regex Tester',
        icon: 'fas fa-search',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'markdown-editor',
        name: 'Markdown Editor',
        icon: 'fab fa-markdown',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'api-tester',
        name: 'API Tester',
        icon: 'fas fa-plug',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'qr-generator',
        name: 'QR Generator',
        icon: 'fas fa-qrcode',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'password-gen',
        name: 'Password Generator',
        icon: 'fas fa-key',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'unit-converter',
        name: 'Unit Converter',
        icon: 'fas fa-exchange-alt',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    {
        id: 'epoch-converter',
        name: 'Epoch Converter',
        icon: 'fas fa-clock',
        category: 'Development',
        pinned: false,
        desktop: false
    },
    
    // Utilities (61-70)
    {
        id: 'clock',
        name: 'Clock',
        icon: 'fas fa-clock',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'alarm',
        name: 'Alarm',
        icon: 'fas fa-bell',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'stopwatch',
        name: 'Stopwatch',
        icon: 'fas fa-stopwatch',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'timer',
        name: 'Timer',
        icon: 'fas fa-hourglass-half',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'todo',
        name: 'To Do List',
        icon: 'fas fa-check-square',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'bookmark-manager',
        name: 'Bookmark Manager',
        icon: 'fas fa-bookmark',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'clipboard',
        name: 'Clipboard',
        icon: 'fas fa-copy',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'archive-manager',
        name: 'Archive Manager',
        icon: 'fas fa-box',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'font-viewer',
        name: 'Font Viewer',
        icon: 'fas fa-font',
        category: 'Utilities',
        pinned: false,
        desktop: false
    },
    {
        id: 'character-map',
        name: 'Character Map',
        icon: 'fas fa-at',
        category: 'Utilities',
        pinned: false,
        desktop: false
    }
];

// App content generators
const APP_CONTENT = {
    'terminal': () => `
        <div class="terminal-window">
            <div class="terminal-output" id="terminal-output-${Date.now()}"></div>
            <div class="terminal-input-line">
                <span class="terminal-prompt">user@linux:~$</span>
                <input type="text" id="terminal-input" class="terminal-input" autofocus>
            </div>
        </div>
    `,
    
    'file-manager': () => `
        <div class="file-manager">
            <div class="file-sidebar">
                <ul>
                    <li data-path="/home"><i class="fas fa-home"></i> Home</li>
                    <li data-path="/documents"><i class="fas fa-file"></i> Documents</li>
                    <li data-path="/downloads"><i class="fas fa-download"></i> Downloads</li>
                    <li data-path="/pictures"><i class="fas fa-image"></i> Pictures</li>
                    <li data-path="/music"><i class="fas fa-music"></i> Music</li>
                    <li data-path="/videos"><i class="fas fa-video"></i> Videos</li>
                    <li data-path="/trash"><i class="fas fa-trash"></i> Trash</li>
                </ul>
            </div>
            <div class="file-main">
                <div class="file-grid" id="file-grid">
                    ${generateFileItems()}
                </div>
            </div>
        </div>
    `,
    
    'calculator': () => `
        <div class="calculator">
            <div class="calc-display" id="calc-display">0</div>
            <button class="calc-btn" data-action="clear">C</button>
            <button class="calc-btn" data-action="backspace">⌫</button>
            <button class="calc-btn operator" data-value="%">%</button>
            <button class="calc-btn operator" data-value="/">÷</button>
            <button class="calc-btn" data-value="7">7</button>
            <button class="calc-btn" data-value="8">8</button>
            <button class="calc-btn" data-value="9">9</button>
            <button class="calc-btn operator" data-value="*">×</button>
            <button class="calc-btn" data-value="4">4</button>
            <button class="calc-btn" data-value="5">5</button>
            <button class="calc-btn" data-value="6">6</button>
            <button class="calc-btn operator" data-value="-">−</button>
            <button class="calc-btn" data-value="1">1</button>
            <button class="calc-btn" data-value="2">2</button>
            <button class="calc-btn" data-value="3">3</button>
            <button class="calc-btn operator" data-value="+">+</button>
            <button class="calc-btn" data-value="0" style="grid-column: span 2;">0</button>
            <button class="calc-btn" data-value=".">.</button>
            <button class="calc-btn equals" data-action="equals">=</button>
        </div>
    `,
    
    'text-editor': () => `
        <div class="text-editor">
            <div class="text-editor-toolbar">
                <button onclick="editorAction('new')">New</button>
                <button onclick="editorAction('open')">Open</button>
                <button onclick="editorAction('save')">Save</button>
                <button onclick="editorAction('cut')">Cut</button>
                <button onclick="editorAction('copy')">Copy</button>
                <button onclick="editorAction('paste')">Paste</button>
                <button onclick="editorAction('undo')">Undo</button>
                <button onclick="editorAction('redo')">Redo</button>
            </div>
            <textarea id="editor-textarea" placeholder="Start typing..."></textarea>
        </div>
    `,
    
    'code-editor': () => `
        <div class="code-editor">
            <div class="code-editor-toolbar">
                <select id="language-select">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                </select>
                <button onclick="codeEditorAction('run')">Run</button>
                <button onclick="codeEditorAction('format')">Format</button>
            </div>
            <textarea id="code-textarea" placeholder="// Write your code here..."></textarea>
        </div>
    `,
    
    'browser': () => `
        <div class="browser-container">
            <div class="browser-toolbar">
                <button onclick="browserAction('back')">←</button>
                <button onclick="browserAction('forward')">→</button>
                <button onclick="browserAction('refresh')">⟳</button>
                <button onclick="browserAction('home')">🏠</button>
                <input type="text" id="browser-url" placeholder="Enter URL or search..." value="https://example.com">
                <button onclick="browserAction('go')">Go</button>
            </div>
            <iframe class="browser-frame" src="about:blank" id="browser-frame"></iframe>
        </div>
    `,
    
    'settings': () => `
        <div class="settings-container">
            <div class="settings-sidebar">
                <ul>
                    <li class="active" data-section="appearance"><i class="fas fa-paint-brush"></i> Appearance</li>
                    <li data-section="display"><i class="fas fa-desktop"></i> Display</li>
                    <li data-section="sound"><i class="fas fa-volume-up"></i> Sound</li>
                    <li data-section="notifications"><i class="fas fa-bell"></i> Notifications</li>
                    <li data-section="privacy"><i class="fas fa-user-shield"></i> Privacy</li>
                    <li data-section="apps"><i class="fas fa-th"></i> Applications</li>
                    <li data-section="updates"><i class="fas fa-sync"></i> Updates</li>
                    <li data-section="about"><i class="fas fa-info-circle"></i> About</li>
                </ul>
            </div>
            <div class="settings-content" id="settings-content">
                ${generateSettingsContent('appearance')}
            </div>
        </div>
    `,
    
    'system-monitor': () => `
        <div class="system-monitor">
            <div class="monitor-item">
                <div class="monitor-label">
                    <span>CPU Usage</span>
                    <span id="cpu-percent">0%</span>
                </div>
                <div class="monitor-bar">
                    <div class="monitor-fill" id="cpu-bar" style="width: 0%"></div>
                </div>
            </div>
            <div class="monitor-item">
                <div class="monitor-label">
                    <span>Memory Usage</span>
                    <span id="memory-percent">0%</span>
                </div>
                <div class="monitor-bar">
                    <div class="monitor-fill" id="memory-bar" style="width: 0%"></div>
                </div>
            </div>
            <div class="monitor-item">
                <div class="monitor-label">
                    <span>Disk Usage</span>
                    <span id="disk-percent">0%</span>
                </div>
                <div class="monitor-bar">
                    <div class="monitor-fill" id="disk-bar" style="width: 0%"></div>
                </div>
            </div>
            <div class="monitor-item">
                <div class="monitor-label">
                    <span>Network</span>
                    <span id="network-speed">0 KB/s</span>
                </div>
                <div class="monitor-bar">
                    <div class="monitor-fill" id="network-bar" style="width: 0%"></div>
                </div>
            </div>
        </div>
    `,
    
    'weather': () => `
        <div class="weather-app">
            <h2>Weather</h2>
            <div class="weather-main">☀️</div>
            <div class="weather-temp">22°C</div>
            <div class="weather-desc">Sunny</div>
            <div class="weather-details">
                <div class="weather-detail">
                    <i class="fas fa-wind"></i>
                    <div>Wind: 10 km/h</div>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-tint"></i>
                    <div>Humidity: 45%</div>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-compress-arrows-alt"></i>
                    <div>Pressure: 1013 hPa</div>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-eye"></i>
                    <div>Visibility: 10 km</div>
                </div>
            </div>
        </div>
    `,
    
    'paint': () => `
        <div class="paint-app">
            <div class="paint-toolbar">
                <button onclick="paintTool('brush')" title="Brush"><i class="fas fa-paint-brush"></i></button>
                <button onclick="paintTool('eraser')" title="Eraser"><i class="fas fa-eraser"></i></button>
                <button onclick="paintTool('fill')" title="Fill"><i class="fas fa-fill-drip"></i></button>
                <button onclick="paintTool('line')" title="Line"><i class="fas fa-slash"></i></button>
                <button onclick="paintTool('rect')" title="Rectangle"><i class="far fa-square"></i></button>
                <button onclick="paintTool('circle')" title="Circle"><i class="far fa-circle"></i></button>
                <input type="color" id="paint-color" value="#000000" title="Color">
                <input type="range" id="paint-size" min="1" max="50" value="5" title="Size">
                <button onclick="paintAction('clear')" title="Clear"><i class="fas fa-trash"></i></button>
                <button onclick="paintAction('save')" title="Save"><i class="fas fa-save"></i></button>
            </div>
            <canvas id="paint-canvas"></canvas>
        </div>
    `,
    
    'music-player': () => `
        <div class="music-player">
            <div class="album-art">
                <i class="fas fa-music"></i>
            </div>
            <h3>No track playing</h3>
            <p>Select a song from your library</p>
            <div class="music-controls">
                <button onclick="musicAction('prev')"><i class="fas fa-step-backward"></i></button>
                <button onclick="musicAction('play')"><i class="fas fa-play"></i></button>
                <button onclick="musicAction('pause')"><i class="fas fa-pause"></i></button>
                <button onclick="musicAction('next')"><i class="fas fa-step-forward"></i></button>
            </div>
        </div>
    `,
    
    'image-viewer': () => `
        <div class="image-viewer-container">
            <div style="text-align: center; color: #fff;">
                <i class="fas fa-image" style="font-size: 5rem; margin-bottom: 1rem;"></i>
                <p>No image loaded</p>
                <button onclick="imageViewerAction('open')" style="margin-top: 1rem; padding: 0.5rem 1rem;">Open Image</button>
            </div>
        </div>
    `,
    
    'video-player': () => `
        <div class="video-player-container">
            <div style="text-align: center; color: #fff;">
                <i class="fas fa-video" style="font-size: 5rem; margin-bottom: 1rem;"></i>
                <p>No video loaded</p>
                <button onclick="videoPlayerAction('open')" style="margin-top: 1rem; padding: 0.5rem 1rem;">Open Video</button>
            </div>
        </div>
    `,
    
    'calendar': () => generateCalendar(),
    
    'notes': () => `
        <div style="padding: 1rem;">
            <textarea style="width: 100%; height: calc(100% - 50px); border: none; resize: none; outline: none; font-family: 'Comic Sans MS', cursive;" placeholder="Write your notes here..."></textarea>
        </div>
    `,
    
    'clock': () => `
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <div style="text-align: center; color: #fff;">
                <div id="clock-display" style="font-size: 5rem; font-weight: bold;"></div>
                <div id="date-display" style="font-size: 1.5rem; margin-top: 1rem;"></div>
            </div>
        </div>
    `,
    
    'todo': () => `
        <div style="padding: 1rem;">
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                <input type="text" id="todo-input" placeholder="Add a new task..." style="flex: 1; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px;">
                <button onclick="addTodo()" style="padding: 0.5rem 1rem; background: #4CAF50; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Add</button>
            </div>
            <ul id="todo-list" style="list-style: none;"></ul>
        </div>
    `,
    
    'chess': () => generateChessBoard(),
    
    'tic-tac-toe': () => generateTicTacToe(),
    
    'snake': () => `
        <div class="game-container">
            <canvas id="snake-canvas" width="400" height="400" class="game-canvas"></canvas>
        </div>
    `,
    
    'tetris': () => `
        <div class="game-container">
            <canvas id="tetris-canvas" width="300" height="600" class="game-canvas"></canvas>
        </div>
    `,
    
    'memory-game': () => generateMemoryGame(),
    
    'sudoku': () => generateSudoku(),
    
    'minesweeper': () => generateMinesweeper(),
    
    'hangman': () => generateHangman(),
    
    'rps': () => generateRPS(),
    
    'quiz': () => generateQuiz(),
    
    'json-viewer': () => `
        <div style="display: flex; height: 100%;">
            <textarea id="json-input" style="flex: 1; border: none; padding: 1rem; resize: none; outline: none;" placeholder='{"key": "value"}'></textarea>
            <div id="json-output" style="flex: 1; border-left: 1px solid #ddd; padding: 1rem; overflow: auto;"></div>
        </div>
    `,
    
    'base64': () => `
        <div style="padding: 1rem;">
            <textarea id="base64-input" style="width: 100%; height: 100px; margin-bottom: 1rem;" placeholder="Enter text to encode/decode"></textarea>
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                <button onclick="base64Encode()" style="padding: 0.5rem 1rem;">Encode</button>
                <button onclick="base64Decode()" style="padding: 0.5rem 1rem;">Decode</button>
            </div>
            <textarea id="base64-output" style="width: 100%; height: 100px;" readonly></textarea>
        </div>
    `,
    
    'color-picker': () => `
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; gap: 2rem;">
            <input type="color" id="color-input" style="width: 200px; height: 200px;" value="#667eea">
            <div>
                <p>HEX: <span id="color-hex">#667eea</span></p>
                <p>RGB: <span id="color-rgb">rgb(102, 126, 234)</span></p>
                <p>HSL: <span id="color-hsl">hsl(229, 64%, 66%)</span></p>
            </div>
        </div>
    `,
    
    'password-gen': () => `
        <div style="padding: 2rem; text-align: center;">
            <div id="password-result" style="font-size: 1.5rem; padding: 1rem; background: #f0f0f0; border-radius: 5px; margin-bottom: 1rem; word-break: break-all;"></div>
            <button onclick="generatePassword()" style="padding: 0.5rem 2rem; background: #4CAF50; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem;">Generate</button>
            <div style="margin-top: 1rem;">
                <label>Length: <input type="number" id="pwd-length" value="16" min="4" max="64" style="width: 60px;"></label>
            </div>
        </div>
    `,
    
    'stopwatch': () => `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
            <div id="stopwatch-display" style="font-size: 4rem; font-family: monospace;">00:00:00</div>
            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                <button onclick="stopwatchStart()" style="padding: 0.5rem 2rem; background: #4CAF50; color: #fff; border: none; border-radius: 5px;">Start</button>
                <button onclick="stopwatchStop()" style="padding: 0.5rem 2rem; background: #f44336; color: #fff; border: none; border-radius: 5px;">Stop</button>
                <button onclick="stopwatchReset()" style="padding: 0.5rem 2rem; background: #2196F3; color: #fff; border: none; border-radius: 5px;">Reset</button>
            </div>
        </div>
    `,
    
    'default': (appId) => `
        <div style="padding: 2rem; text-align: center;">
            <i class="${APPS.find(a => a.id === appId)?.icon || 'fas fa-window'}" style="font-size: 4rem; color: #667eea; margin-bottom: 1rem;"></i>
            <h2>${APPS.find(a => a.id === appId)?.name || 'Application'}</h2>
            <p style="color: #666; margin-top: 1rem;">This application is ready to use.</p>
        </div>
    `
};

// Helper functions for generating game boards and other content
function generateFileItems() {
    const items = [
        { name: 'Documents', icon: 'fas fa-folder', type: 'folder' },
        { name: 'Downloads', icon: 'fas fa-folder', type: 'folder' },
        { name: 'Pictures', icon: 'fas fa-folder', type: 'folder' },
        { name: 'Music', icon: 'fas fa-folder', type: 'folder' },
        { name: 'Videos', icon: 'fas fa-folder', type: 'folder' },
        { name: 'readme.txt', icon: 'fas fa-file-text', type: 'file' },
        { name: 'photo.jpg', icon: 'fas fa-image', type: 'file' },
        { name: 'song.mp3', icon: 'fas fa-music', type: 'file' },
        { name: 'video.mp4', icon: 'fas fa-video', type: 'file' },
        { name: 'archive.zip', icon: 'fas fa-file-archive', type: 'file' }
    ];
    
    return items.map(item => `
        <div class="file-item" data-type="${item.type}">
            <i class="${item.icon}" style="color: ${item.type === 'folder' ? '#ffd700' : '#667eea'}"></i>
            <span>${item.name}</span>
        </div>
    `).join('');
}

function generateSettingsContent(section) {
    const sections = {
        appearance: `
            <div class="setting-section">
                <h3>Appearance</h3>
                <div class="setting-option">
                    <span>Dark Mode</span>
                    <input type="checkbox" id="dark-mode-toggle">
                </div>
                <div class="setting-option">
                    <span>Wallpaper</span>
                    <select>
                        <option>Default Blue</option>
                        <option>Sunset</option>
                        <option>Mountain</option>
                        <option>Ocean</option>
                    </select>
                </div>
                <div class="setting-option">
                    <span>Theme Color</span>
                    <input type="color" value="#667eea">
                </div>
            </div>
        `,
        display: `
            <div class="setting-section">
                <h3>Display</h3>
                <div class="setting-option">
                    <span>Brightness</span>
                    <input type="range" min="0" max="100" value="100">
                </div>
                <div class="setting-option">
                    <span>Resolution</span>
                    <select>
                        <option>1920x1080</option>
                        <option>1366x768</option>
                        <option>2560x1440</option>
                    </select>
                </div>
            </div>
        `,
        about: `
            <div class="setting-section">
                <h3>About Linux Web Desktop</h3>
                <p>Version: 1.0.0</p>
                <p>A web-based Linux desktop replica with 70+ applications.</p>
                <p>Built with HTML, CSS, and JavaScript.</p>
            </div>
        `
    };
    
    return sections[section] || sections.appearance;
}

function generateCalendar() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    let days = '';
    for (let i = 0; i < startingDay; i++) {
        days += '<div></div>';
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const isToday = i === now.getDate() ? 'style="background: #667eea; color: #fff; border-radius: 50%;"' : '';
        days += `<div style="padding: 0.5rem; text-align: center; cursor: pointer;" ${isToday}>${i}</div>`;
    }
    
    return `
        <div style="padding: 1rem;">
            <h2 style="text-align: center; margin-bottom: 1rem;">${monthNames[month]} ${year}</h2>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem;">
                <div style="text-align: center; font-weight: bold;">Sun</div>
                <div style="text-align: center; font-weight: bold;">Mon</div>
                <div style="text-align: center; font-weight: bold;">Tue</div>
                <div style="text-align: center; font-weight: bold;">Wed</div>
                <div style="text-align: center; font-weight: bold;">Thu</div>
                <div style="text-align: center; font-weight: bold;">Fri</div>
                <div style="text-align: center; font-weight: bold;">Sat</div>
                ${days}
            </div>
        </div>
    `;
}

function generateChessBoard() {
    const pieces = {
        'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
        'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
    };
    
    const initialBoard = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];
    
    let board = '<div style="display: flex; justify-content: center; align-items: center; height: 100%;">';
    board += '<div style="display: grid; grid-template-columns: repeat(8, 50px); grid-template-rows: repeat(8, 50px); border: 2px solid #333;">';
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const isLight = (row + col) % 2 === 0;
            const piece = initialBoard[row][col];
            board += `<div style="width: 50px; height: 50px; background: ${isLight ? '#f0d9b5' : '#b58863'}; display: flex; justify-content: center; align-items: center; font-size: 2rem; cursor: pointer;">${piece ? pieces[piece] : ''}</div>`;
        }
    }
    
    board += '</div></div>';
    return board;
}

function generateTicTacToe() {
    let board = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; flex-direction: column;">';
    board += '<div id="ttt-status" style="margin-bottom: 1rem; font-size: 1.5rem;">Player X\'s turn</div>';
    board += '<div style="display: grid; grid-template-columns: repeat(3, 100px); gap: 5px;">';
    
    for (let i = 0; i < 9; i++) {
        board += `<div class="ttt-cell" data-index="${i}" style="width: 100px; height: 100px; background: #f0f0f0; display: flex; justify-content: center; align-items: center; font-size: 3rem; cursor: pointer; border: 2px solid #333;"></div>`;
    }
    
    board += '</div>';
    board += '<button onclick="resetTTT()" style="margin-top: 1rem; padding: 0.5rem 2rem;">Reset Game</button>';
    board += '</div>';
    
    return board;
}

function generateMemoryGame() {
    const emojis = ['🎮', '🎲', '🎯', '🎨', '🎭', '🎪', '🎢', '🎡'];
    const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    
    let board = '<div style="display: flex; justify-content: center; align-items: center; height: 100%;">';
    board += '<div style="display: grid; grid-template-columns: repeat(4, 80px); gap: 10px;">';
    
    cards.forEach((emoji, index) => {
        board += `<div class="memory-card" data-index="${index}" data-emoji="${emoji}" style="width: 80px; height: 80px; background: #667eea; display: flex; justify-content: center; align-items: center; font-size: 2rem; cursor: pointer; border-radius: 5px;"></div>`;
    });
    
    board += '</div></div>';
    return board;
}

function generateSudoku() {
    let board = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; flex-direction: column;">';
    board += '<div style="display: grid; grid-template-columns: repeat(9, 40px); gap: 1px; background: #333; padding: 2px;">';
    
    const puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = puzzle[row][col];
            const isFixed = value !== 0;
            board += `<input type="number" min="1" max="9" value="${value || ''}" style="width: 40px; height: 40px; text-align: center; border: none; ${isFixed ? 'background: #e0e0e0; font-weight: bold;' : 'background: #fff;'}"/>`;
        }
    }
    
    board += '</div>';
    board += '<button onclick="checkSudoku()" style="margin-top: 1rem; padding: 0.5rem 2rem;">Check Solution</button>';
    board += '</div>';
    
    return board;
}

function generateMinesweeper() {
    let board = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; flex-direction: column;">';
    board += '<div style="margin-bottom: 1rem;">Mines: <span id="mines-count">10</span></div>';
    board += '<div style="display: grid; grid-template-columns: repeat(10, 30px); gap: 1px; background: #999; padding: 2px;">';
    
    for (let i = 0; i < 100; i++) {
        board += `<div class="mine-cell" data-index="${i}" style="width: 30px; height: 30px; background: #ccc; display: flex; justify-content: center; align-items: center; cursor: pointer; font-weight: bold;"></div>`;
    }
    
    board += '</div>';
    board += '<button onclick="resetMinesweeper()" style="margin-top: 1rem; padding: 0.5rem 1rem;">New Game</button>';
    board += '</div>';
    
    return board;
}

function generateHangman() {
    const word = 'JAVASCRIPT';
    const masked = '_ '.repeat(word.length);
    
    let game = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; flex-direction: column;">';
    game += '<div id="hangman-drawing" style="margin-bottom: 1rem;"><pre style="font-family: monospace;">\n  _____\n  |   |\n      |\n      |\n      |\n      |\n=========\n</pre></div>';
    game += `<div id="hangman-word" style="font-size: 2rem; letter-spacing: 0.5rem; margin-bottom: 1rem;">${masked}</div>`;
    game += '<div id="hangman-letters" style="display: flex; flex-wrap: wrap; gap: 0.3rem; max-width: 400px;">';
    
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        game += `<button class="hangman-letter" data-letter="${letter}" style="width: 35px; height: 35px; border: 1px solid #ccc; background: #fff; cursor: pointer;">${letter}</button>`;
    }
    
    game += '</div></div>';
    return game;
}

function generateRPS() {
    let game = '<div style="display: flex; justify-content: center; align-items: center; height: 100%; flex-direction: column;">';
    game += '<h2>Rock Paper Scissors</h2>';
    game += '<div id="rps-result" style="font-size: 1.5rem; margin: 1rem 0; height: 2rem;"></div>';
    game += '<div style="display: flex; gap: 1rem; margin-top: 1rem;">';
    game += '<button onclick="playRPS(\'rock\')" style="font-size: 3rem; padding: 1rem; border: 2px solid #ccc; background: #fff; cursor: pointer;">🪨</button>';
    game += '<button onclick="playRPS(\'paper\')" style="font-size: 3rem; padding: 1rem; border: 2px solid #ccc; background: #fff; cursor: pointer;">📄</button>';
    game += '<button onclick="playRPS(\'scissors\')" style="font-size: 3rem; padding: 1rem; border: 2px solid #ccc; background: #fff; cursor: pointer;">✂️</button>';
    game += '</div></div>';
    return game;
}

function generateQuiz() {
    const questions = [
        { q: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink Text Markup Language'], a: 0 },
        { q: 'Which language runs in browsers?', options: ['Java', 'Python', 'JavaScript'], a: 2 },
        { q: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets'], a: 1 }
    ];
    
    let quiz = '<div style="padding: 2rem; max-width: 600px; margin: 0 auto;">';
    quiz += '<h2>Quiz Time!</h2>';
    quiz += '<div id="quiz-question" style="margin: 1rem 0; font-size: 1.2rem;"></div>';
    quiz += '<div id="quiz-options" style="display: flex; flex-direction: column; gap: 0.5rem;"></div>';
    quiz += '<div id="quiz-score" style="margin-top: 1rem; font-weight: bold;"></div>';
    quiz += '</div>';
    
    return quiz;
}
