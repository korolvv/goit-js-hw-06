const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
    if (input.value.length === Number(input.dataset.length)) {
        // ! Щоб при втраті фокусу кожен раз не додавався клас, зроблено перевірку   
		if (!input.classList.contains("valid")) {
			input.classList.add("valid");
			input.classList.remove("invalid");
		}
	} else {
		if (!input.classList.contains("invalid")) {
			input.classList.remove("valid");
			input.classList.add("invalid");
		}
	}
});
