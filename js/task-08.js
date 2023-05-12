const form = document.querySelector(".login-form");

const btnSubmit = document.querySelector("button[type=submit]");

const inputEmail = document.querySelector('input[name="email"]');

const inputPassword = document.querySelector('input[name="password"]');

const user = {
	email: "",
	password: "",
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    
	if (email.value === "" || password.value === "") {
		alert("Будь ласка, заповніть поля форми!");
	} else {
		user.email = email.value;
		user.password = password.value;
		console.log(user);
		form.reset();
	}
});
