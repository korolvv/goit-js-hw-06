const form = document.querySelector(".login-form");

const user = {
	email: "",
	password: "",
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
	const { email, password } = event.target.elements;
	
	if (email.value.trim() === "" || password.value.trim() === "") {
		alert("Будь ласка, заповніть поля форми!");
	} else {
		user.email = email.value;
		user.password = password.value;
		console.log(user);
		event.target.reset();
	}
});
