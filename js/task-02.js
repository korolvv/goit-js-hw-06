const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const listArray = [];

ingredients.forEach((item) => {
	let listElement = document.createElement("li");
  listElement.textContent = item;
  listElement.classList.add('item');
	listArray.push(listElement);
});

listIngredients.append(...listArray);


