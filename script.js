document.addEventListener("DOMContentLoaded", () => {
    const car = document.querySelector(".car");
    const screenWidth = window.innerWidth;
    const finalPosition = screenWidth - 250; // 200px ширина + 50px отступ

    car.style.left = "0";
    car.style.animation = `drive 5s linear forwards`;
});
