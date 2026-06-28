// ПОИСК ПО КАМНЯМ
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌞";
    } else {
        themeBtn.textContent = "🌙";
    }
});


// КНОПКИ "Подробнее"
const moreButtons = document.querySelectorAll(".more");

moreButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.parentElement;
        const name = card.querySelector("h3").innerText;

        alert("Ты выбрал камень: " + name + "\n\nЗдесь можно сделать отдельную страницу или модальное окно.");
    });
});
