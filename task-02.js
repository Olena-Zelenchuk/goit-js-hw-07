const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const makeItem = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
};

const items = ingredients.map((ingredient) => makeItem(ingredient));
console.log(items);

const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...items);

console.log(ingredientsRef);
