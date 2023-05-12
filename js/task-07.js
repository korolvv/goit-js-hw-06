const rangeInput = document.querySelector("input#font-size-control");

const spanText = document.querySelector("span#text");

rangeInput.addEventListener("input", () => {
	spanText.style.fontSize = `${rangeInput.value}px`;
});
