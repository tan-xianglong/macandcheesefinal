// Initialize macNcheese product
const macNcheese = new Product();

//dummy data for productItem array
macNcheese.addProduct(
  "Original Mac N Cheese",
  "Our best seller, nothing beats the original",
  "20.00",
  "10",
  "['beef']",
  "./images/lobster.jpg",
  "today"
);

macNcheese.addProduct(
  "Chicken Mac N Cheese",
  "Season with paprika and mixed herbs, this chicken will steal your heart",
  "17.00",
  "10",
  `["chicken"]`,
  "./images/lobster.jpg",
  "today"
);

macNcheese.addProduct(
  "Supreme Mac N Cheese",
  "It is supreme enough said. <br>Ingredients: Chicken and Seafood.",
  "25.00",
  "10",
  "['chicken', 'seafood']",
  "./images/lobster.jpg",
  "today"
);

    
const displayItemDetails = (item) => {
  document.querySelector("#itemName").innerText = item.name;
  document.querySelector("#itemImage").innerText = item.image;
  document.querySelector("#itemDescription").innerText = item.description;
  document.querySelector("#itemPrice").innerText = item.price;
};

macNcheese.displayProduct();