const historyList = document.getElementById("history-list");

// Завантаження історії з localStorage
const history = JSON.parse(localStorage.getItem("timerHistory")) || [];

// Відображення історії
history.forEach((session, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Сеанс ${index + 1}: Початок: ${session.startTime}, Закінчення: ${session.endTime}`;
    historyList.appendChild(listItem);
});
