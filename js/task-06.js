const input = document.querySelector("#validation-input");

function toggleClass(elem, a, b) {
	elem.classList.add(a);
	elem.classList.remove(b);
}

input.addEventListener("blur", () => {
	if (input.value.length === Number(input.dataset.length)) {
		toggleClass(input, "valid", "invalid");
	} else {
		toggleClass(input, "invalid", "valid");
	}
});
