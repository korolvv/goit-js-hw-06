const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const listIngredients = document.querySelector("#ingredients");

ingredients.forEach((item) => {
	let listElement = document.createElement("li");
  listElement.textContent = item;
  listElement.classList.add('item');
	listIngredients.append(listElement);
});


