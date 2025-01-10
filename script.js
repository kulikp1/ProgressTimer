const timeDisplay = document.getElementById("time-display");
const startStopButton = document.getElementById("start-stop-button");

// Змінні для таймера
let totalTime = 0; // У секундах
let timerInterval = null;
let isRunning = false;

// Завантаження часу з localStorage
const savedTime = localStorage.getItem("projectTimer");
if (savedTime) {
    totalTime = parseInt(savedTime, 10);
    updateDisplay();
}

// Форматування часу
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Оновлення дисплея
function updateDisplay() {
    timeDisplay.textContent = formatTime(totalTime);
}

// Запуск таймера
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startStopButton.textContent = "Зупинити";
        timerInterval = setInterval(() => {
            totalTime++;
            updateDisplay();
        }, 1000);
    }
}

// Зупинка таймера
function stopTimer() {
    if (isRunning) {
        isRunning = false;
        startStopButton.textContent = "Розпочати";
        clearInterval(timerInterval);
        saveSession();
        localStorage.setItem("projectTimer", totalTime);
    }
}

// Збереження сеансу
function saveSession() {
    const now = new Date();
    const session = {
        startTime: formatTime(totalTime),
        endTime: now.toLocaleString(),
    };
    const history = JSON.parse(localStorage.getItem("timerHistory")) || [];
    history.push(session);
    localStorage.setItem("timerHistory", JSON.stringify(history));
}

// Обробка кнопки
startStopButton.addEventListener("click", () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

// Оновлення дисплея під час завантаження
updateDisplay();
