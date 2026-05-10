// System functionality and window management
let windows = [];
let activeWindow = null;
let windowIdCounter = 0;
let zIndexCounter = 100;

// Initialize the desktop environment
function initDesktop() {
    // Show boot screen, then login, then desktop
    setTimeout(() => {
        document.getElementById('boot-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
    }, 3000);
    
    // Setup login
    document.getElementById('login-btn').addEventListener('click', login);
    document.getElementById('password-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') login();
    });
    
    // Update clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Setup context menu
    setupContextMenu();
    
    // Setup app launcher
    setupAppLauncher();
    
    // Setup dock
    setupDock();
    
    // Setup desktop icons
    setupDesktopIcons();
}

function login() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('desktop').classList.remove('hidden');
    
    // Show welcome notification
    showNotification('Welcome to Linux Web Desktop', '70+ applications ready to use!');
    
    // Render all UI elements
    renderAppLauncher();
    renderDock();
    renderDesktopIcons();
}

function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    document.getElementById('clock').textContent = `${dateStr} ${timeStr}`;
}

function setupContextMenu() {
    const desktop = document.getElementById('desktop-area');
    const contextMenu = document.getElementById('context-menu');
    
    desktop.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        contextMenu.classList.remove('hidden');
        contextMenu.style.left = `${e.clientX}px`;
        contextMenu.style.top = `${e.clientY}px`;
    });
    
    document.addEventListener('click', () => {
        contextMenu.classList.add('hidden');
    });
    
    contextMenu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            handleContextMenuAction(action);
        });
    });
}

function handleContextMenuAction(action) {
    switch(action) {
        case 'new-folder':
            showNotification('New Folder', 'Folder creation feature coming soon!');
            break;
        case 'new-file':
            showNotification('New File', 'File creation feature coming soon!');
            break;
        case 'terminal':
            openApp('terminal');
            break;
        case 'change-bg':
            changeBackground();
            break;
        case 'settings':
            openApp('settings');
            break;
    }
}

function changeBackground() {
    const backgrounds = [
        'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.getElementById('desktop').style.background = randomBg;
    document.getElementById('desktop').style.backgroundSize = 'cover';
}

function setupAppLauncher() {
    const activitiesBtn = document.getElementById('activities-btn');
    const showAppsBtn = document.getElementById('show-apps-btn');
    const appLauncher = document.getElementById('app-launcher');
    const searchInput = document.getElementById('search-apps');
    
    activitiesBtn.addEventListener('click', toggleAppLauncher);
    showAppsBtn.addEventListener('click', toggleAppLauncher);
    
    searchInput.addEventListener('input', (e) => {
        filterApps(e.target.value);
    });
    
    // Close launcher when clicking outside
    document.addEventListener('click', (e) => {
        if (!appLauncher.contains(e.target) && 
            !activitiesBtn.contains(e.target) && 
            !showAppsBtn.contains(e.target)) {
            appLauncher.classList.add('hidden');
        }
    });
}

function toggleAppLauncher() {
    const appLauncher = document.getElementById('app-launcher');
    appLauncher.classList.toggle('hidden');
}

function renderAppLauncher() {
    const launcherGrid = document.getElementById('launcher-grid');
    launcherGrid.innerHTML = '';
    
    APPS.forEach(app => {
        const appItem = document.createElement('div');
        appItem.className = 'app-item';
        appItem.innerHTML = `
            <i class="${app.icon}"></i>
            <span>${app.name}</span>
        `;
        appItem.addEventListener('click', () => {
            openApp(app.id);
            document.getElementById('app-launcher').classList.add('hidden');
        });
        launcherGrid.appendChild(appItem);
    });
}

function filterApps(query) {
    const appItems = document.querySelectorAll('.app-item');
    query = query.toLowerCase();
    
    appItems.forEach(item => {
        const appName = item.querySelector('span').textContent.toLowerCase();
        if (appName.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function setupDock() {
    // Dock is rendered by renderDock()
}

function renderDock() {
    const dock = document.getElementById('dock');
    dock.innerHTML = '';
    
    const pinnedApps = APPS.filter(app => app.pinned);
    
    pinnedApps.forEach(app => {
        const dockBtn = document.createElement('button');
        dockBtn.className = 'dock-btn';
        dockBtn.innerHTML = `<i class="${app.icon}"></i>`;
        dockBtn.title = app.name;
        dockBtn.addEventListener('click', () => {
            openApp(app.id);
        });
        dock.appendChild(dockBtn);
    });
}

function setupDesktopIcons() {
    // Desktop icons are rendered by renderDesktopIcons()
}

function renderDesktopIcons() {
    const desktopArea = document.getElementById('desktop-area');
    desktopArea.innerHTML = '';
    
    const desktopApps = APPS.filter(app => app.desktop);
    
    desktopApps.forEach(app => {
        const desktopIcon = document.createElement('div');
        desktopIcon.className = 'desktop-icon';
        desktopIcon.innerHTML = `
            <i class="${app.icon}"></i>
            <span>${app.name}</span>
        `;
        desktopIcon.addEventListener('dblclick', () => {
            openApp(app.id);
        });
        desktopArea.appendChild(desktopIcon);
    });
}

// Window Management
function openApp(appId) {
    const app = APPS.find(a => a.id === appId);
    if (!app) return;
    
    // Check if app is already open
    const existingWindow = windows.find(w => w.appId === appId);
    if (existingWindow) {
        focusWindow(existingWindow.id);
        return;
    }
    
    const windowId = ++windowIdCounter;
    const windowEl = createWindowElement(windowId, app);
    document.getElementById('windows-container').appendChild(windowEl);
    
    const windowObj = {
        id: windowId,
        appId: appId,
        element: windowEl,
        minimized: false
    };
    
    windows.push(windowObj);
    focusWindow(windowId);
    addTaskbarItem(windowObj);
    
    // Initialize app-specific functionality
    initializeAppFunctionality(appId, windowEl);
}

function createWindowElement(windowId, app) {
    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.id = `window-${windowId}`;
    windowEl.style.left = `${100 + (windowId * 30)}px`;
    windowEl.style.top = `${50 + (windowId * 30)}px`;
    windowEl.style.zIndex = ++zIndexCounter;
    
    windowEl.innerHTML = `
        <div class="window-header">
            <span class="window-title">${app.name}</span>
            <div class="window-controls">
                <button class="window-control window-minimize" onclick="minimizeWindow(${windowId})"></button>
                <button class="window-control window-maximize" onclick="maximizeWindow(${windowId})"></button>
                <button class="window-control window-close" onclick="closeWindow(${windowId})"></button>
            </div>
        </div>
        <div class="window-content">
            ${APP_CONTENT[app.id] ? APP_CONTENT[app.id]() : APP_CONTENT['default'](app.id)}
        </div>
    `;
    
    // Make window draggable
    makeDraggable(windowEl);
    
    // Focus on click
    windowEl.addEventListener('mousedown', () => {
        focusWindow(windowId);
    });
    
    return windowEl;
}

function makeDraggable(windowEl) {
    const header = windowEl.querySelector('.window-header');
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;
    
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = windowEl.offsetLeft;
        initialTop = windowEl.offsetTop;
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        windowEl.style.left = `${initialLeft + dx}px`;
        windowEl.style.top = `${initialTop + dy}px`;
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function closeWindow(windowId) {
    const windowIndex = windows.findIndex(w => w.id === windowId);
    if (windowIndex === -1) return;
    
    const windowObj = windows[windowIndex];
    windowObj.element.remove();
    windows.splice(windowIndex, 1);
    
    // Remove from taskbar
    const taskbarItem = document.querySelector(`.taskbar-item[data-window-id="${windowId}"]`);
    if (taskbarItem) taskbarItem.remove();
}

function minimizeWindow(windowId) {
    const windowObj = windows.find(w => w.id === windowId);
    if (!windowObj) return;
    
    windowObj.minimized = true;
    windowObj.element.classList.add('hidden');
    
    const taskbarItem = document.querySelector(`.taskbar-item[data-window-id="${windowId}"]`);
    if (taskbarItem) {
        taskbarItem.classList.remove('active');
    }
}

function maximizeWindow(windowId) {
    const windowObj = windows.find(w => w.id === windowId);
    if (!windowObj) return;
    
    const windowEl = windowObj.element;
    
    if (windowEl.style.width === '100%') {
        // Restore
        windowEl.style.width = '';
        windowEl.style.height = '';
        windowEl.style.top = '50px';
        windowEl.style.left = '100px';
    } else {
        // Maximize
        windowEl.style.width = '100%';
        windowEl.style.height = 'calc(100% - 50px)';
        windowEl.style.top = '0';
        windowEl.style.left = '0';
    }
}

function focusWindow(windowId) {
    const windowObj = windows.find(w => w.id === windowId);
    if (!windowObj) return;
    
    // Update z-index
    windowObj.element.style.zIndex = ++zIndexCounter;
    activeWindow = windowObj;
    
    // Update taskbar
    document.querySelectorAll('.taskbar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const taskbarItem = document.querySelector(`.taskbar-item[data-window-id="${windowId}"]`);
    if (taskbarItem) {
        taskbarItem.classList.add('active');
    }
    
    // Restore if minimized
    if (windowObj.minimized) {
        windowObj.minimized = false;
        windowObj.element.classList.remove('hidden');
    }
}

function addTaskbarItem(windowObj) {
    const taskbar = document.getElementById('taskbar');
    const app = APPS.find(a => a.id === windowObj.appId);
    
    const taskbarItem = document.createElement('div');
    taskbarItem.className = 'taskbar-item active';
    taskbarItem.dataset.windowId = windowObj.id;
    taskbarItem.innerHTML = `
        <i class="${app.icon}"></i>
        <span>${app.name}</span>
    `;
    
    taskbarItem.addEventListener('click', () => {
        if (windowObj.minimized) {
            focusWindow(windowObj.id);
        } else if (activeWindow?.id === windowObj.id) {
            minimizeWindow(windowObj.id);
        } else {
            focusWindow(windowObj.id);
        }
    });
    
    // Remove active from others
    document.querySelectorAll('.taskbar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    taskbar.appendChild(taskbarItem);
}

// Notification System
function showNotification(title, message) {
    const notificationArea = document.getElementById('notification-area');
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-header">
            <span class="notification-title">${title}</span>
            <button class="notification-close">&times;</button>
        </div>
        <div class="notification-message">${message}</div>
    `;
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    notificationArea.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// App-specific initialization
function initializeAppFunctionality(appId, windowEl) {
    switch(appId) {
        case 'calculator':
            initCalculator(windowEl);
            break;
        case 'system-monitor':
            initSystemMonitor(windowEl);
            break;
        case 'paint':
            initPaint(windowEl);
            break;
        case 'snake':
            initSnake(windowEl);
            break;
        case 'clock':
            initClockApp(windowEl);
            break;
        case 'color-picker':
            initColorPicker(windowEl);
            break;
        case 'password-gen':
            initPasswordGen(windowEl);
            break;
        case 'stopwatch':
            initStopwatch(windowEl);
            break;
    }
}

// Calculator
function initCalculator(windowEl) {
    const display = windowEl.querySelector('#calc-display');
    let currentInput = '0';
    let previousInput = '';
    let operator = null;
    
    windowEl.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.value;
            const action = btn.dataset.action;
            
            if (action === 'clear') {
                currentInput = '0';
                previousInput = '';
                operator = null;
            } else if (action === 'backspace') {
                currentInput = currentInput.slice(0, -1) || '0';
            } else if (action === 'equals') {
                if (operator && previousInput) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    previousInput = '';
                    operator = null;
                }
            } else if (value) {
                if (['+', '-', '*', '/', '%'].includes(value)) {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = '0';
                } else {
                    if (currentInput === '0' && value !== '.') {
                        currentInput = value;
                    } else {
                        currentInput += value;
                    }
                }
            }
            
            display.textContent = currentInput;
        });
    });
}

function calculate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        case '%': return a % b;
        default: return b;
    }
}

// System Monitor
function initSystemMonitor(windowEl) {
    setInterval(() => {
        const cpuPercent = Math.floor(Math.random() * 40) + 10;
        const memoryPercent = Math.floor(Math.random() * 30) + 30;
        const diskPercent = 45;
        const networkSpeed = Math.floor(Math.random() * 500) + 100;
        
        const cpuBar = windowEl.querySelector('#cpu-bar');
        const cpuPercentEl = windowEl.querySelector('#cpu-percent');
        if (cpuBar) {
            cpuBar.style.width = `${cpuPercent}%`;
            cpuPercentEl.textContent = `${cpuPercent}%`;
        }
        
        const memoryBar = windowEl.querySelector('#memory-bar');
        const memoryPercentEl = windowEl.querySelector('#memory-percent');
        if (memoryBar) {
            memoryBar.style.width = `${memoryPercent}%`;
            memoryPercentEl.textContent = `${memoryPercent}%`;
        }
        
        const diskBar = windowEl.querySelector('#disk-bar');
        const diskPercentEl = windowEl.querySelector('#disk-percent');
        if (diskBar) {
            diskBar.style.width = `${diskPercent}%`;
            diskPercentEl.textContent = `${diskPercent}%`;
        }
        
        const networkBar = windowEl.querySelector('#network-bar');
        const networkSpeedEl = windowEl.querySelector('#network-speed');
        if (networkBar) {
            networkBar.style.width = `${Math.min(networkSpeed / 10, 100)}%`;
            networkSpeedEl.textContent = `${networkSpeed} KB/s`;
        }
    }, 2000);
}

// Paint
function initPaint(windowEl) {
    const canvas = windowEl.querySelector('#paint-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        
        ctx.strokeStyle = windowEl.querySelector('#paint-color').value;
        ctx.lineWidth = windowEl.querySelector('#paint-size').value;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}

// Snake Game
function initSnake(windowEl) {
    const canvas = windowEl.querySelector('#snake-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 20;
    let snake = [{x: 10, y: 10}];
    let food = {x: 15, y: 15};
    let direction = {x: 1, y: 0};
    let gameLoop;
    
    function draw() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        ctx.fillStyle = '#4CAF50';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
        });
        
        // Draw food
        ctx.fillStyle = '#f44336';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
    }
    
    function update() {
        const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
        
        // Wrap around
        if (head.x < 0) head.x = canvas.width / gridSize - 1;
        if (head.x >= canvas.width / gridSize) head.x = 0;
        if (head.y < 0) head.y = canvas.height / gridSize - 1;
        if (head.y >= canvas.height / gridSize) head.y = 0;
        
        snake.unshift(head);
        
        // Check food collision
        if (head.x === food.x && head.y === food.y) {
            food = {
                x: Math.floor(Math.random() * canvas.width / gridSize),
                y: Math.floor(Math.random() * canvas.height / gridSize)
            };
        } else {
            snake.pop();
        }
        
        draw();
    }
    
    gameLoop = setInterval(update, 100);
    
    // Store game loop for cleanup
    windowEl.gameLoop = gameLoop;
}

// Clock App
function initClockApp(windowEl) {
    function updateClockDisplay() {
        const clockDisplay = windowEl.querySelector('#clock-display');
        const dateDisplay = windowEl.querySelector('#date-display');
        
        if (clockDisplay && dateDisplay) {
            const now = new Date();
            clockDisplay.textContent = now.toLocaleTimeString('en-US', { hour12: false });
            dateDisplay.textContent = now.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }
    }
    
    updateClockDisplay();
    setInterval(updateClockDisplay, 1000);
}

// Color Picker
function initColorPicker(windowEl) {
    const colorInput = windowEl.querySelector('#color-input');
    
    colorInput?.addEventListener('input', (e) => {
        const hex = e.target.value;
        const rgb = hexToRgb(hex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        
        windowEl.querySelector('#color-hex').textContent = hex;
        windowEl.querySelector('#color-rgb').textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        windowEl.querySelector('#color-hsl').textContent = `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%)`;
    });
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    
    return { h, s, l };
}

// Password Generator
function initPasswordGen(windowEl) {
    generatePassword(windowEl);
}

function generatePassword(windowEl) {
    const length = windowEl?.querySelector('#pwd-length')?.value || 16;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    const resultEl = windowEl?.querySelector('#password-result');
    if (resultEl) {
        resultEl.textContent = password;
    }
}

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;

function initStopwatch(windowEl) {
    updateStopwatchDisplay(windowEl);
}

function updateStopwatchDisplay(windowEl) {
    const display = windowEl?.querySelector('#stopwatch-display');
    if (!display) return;
    
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function stopwatchStart() {
    if (stopwatchInterval) return;
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        // Update all stopwatch displays
        document.querySelectorAll('#stopwatch-display').forEach(display => {
            const hours = Math.floor(stopwatchTime / 3600);
            const minutes = Math.floor((stopwatchTime % 3600) / 60);
            const seconds = stopwatchTime % 60;
            display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        });
    }, 1000);
}

function stopwatchStop() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function stopwatchReset() {
    stopwatchStop();
    stopwatchTime = 0;
    document.querySelectorAll('#stopwatch-display').forEach(display => {
        display.textContent = '00:00:00';
    });
}

// Export functions for global access
window.openApp = openApp;
window.closeWindow = closeWindow;
window.minimizeWindow = minimizeWindow;
window.maximizeWindow = maximizeWindow;
window.editorAction = (action) => showNotification('Text Editor', `${action} action triggered`);
window.codeEditorAction = (action) => showNotification('Code Editor', `${action} action triggered`);
window.browserAction = (action) => showNotification('Browser', `${action} action triggered`);
window.paintTool = (tool) => showNotification('Paint', `Tool: ${tool}`);
window.paintAction = (action) => showNotification('Paint', `${action} action triggered`);
window.musicAction = (action) => showNotification('Music Player', `${action} action triggered`);
window.imageViewerAction = (action) => showNotification('Image Viewer', `${action} action triggered`);
window.videoPlayerAction = (action) => showNotification('Video Player', `${action} action triggered`);
window.addTodo = () => showNotification('To Do', 'Add task feature coming soon!');
window.base64Encode = () => showNotification('Base64', 'Encode feature ready');
window.base64Decode = () => showNotification('Base64', 'Decode feature ready');
window.checkSudoku = () => showNotification('Sudoku', 'Checking solution...');
window.resetTTT = () => showNotification('Tic Tac Toe', 'Game reset');
window.playRPS = (choice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computer = choices[Math.floor(Math.random() * 3)];
    let result;
    
    if (choice === computer) {
        result = "It's a tie!";
    } else if (
        (choice === 'rock' && computer === 'scissors') ||
        (choice === 'paper' && computer === 'rock') ||
        (choice === 'scissors' && computer === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }
    
    showNotification('Rock Paper Scissors', `You: ${choice}, Computer: ${computer}. ${result}`);
};
window.resetMinesweeper = () => showNotification('Minesweeper', 'New game started');
window.generatePassword = generatePassword;
window.stopwatchStart = stopwatchStart;
window.stopwatchStop = stopwatchStop;
window.stopwatchReset = stopwatchReset;

// Initialize on load
document.addEventListener('DOMContentLoaded', initDesktop);
