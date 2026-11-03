
// Выбор автомобиля
function selectCar(carName) {
    const carSelect = document.getElementById("car");

    if (carSelect) {
        carSelect.value = carName;
    }

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Отправка заявки в WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const car = document.getElementById("car").value;

    const message = `Здравствуйте! Меня зовут ${name}.
Телефон: ${phone}
Интересует автомобиль: ${car}`;

    // Замени номер на WhatsApp номер своего автосалона
    const whatsappNumber = "998901234567";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});

// Анимация появления элементов при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".car-card, .advantage, .about-content").forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(element);
});

// CSS класс для появления
const style = document.createElement("style");

style.textContent = `
    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);
.hidden {
    opacity: 0;
    transform: translateY(30px);
}

.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s ease;
}