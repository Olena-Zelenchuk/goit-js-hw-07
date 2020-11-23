const itemRef = document.querySelectorAll(".item");
console.log(`В списке ${itemRef.length} категории`);

itemRef.forEach((item) => {
  console.log(item.firstElementChild.textContent);
  console.log(item.lastElementChild.children.length);
});
