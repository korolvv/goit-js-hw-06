function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");

const changeColorBtn = document.querySelector(".change-color");

const spanColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
	let color = getRandomHexColor();
	bodyEl.style.backgroundColor = color;
	spanColor.textContent = color;
});
