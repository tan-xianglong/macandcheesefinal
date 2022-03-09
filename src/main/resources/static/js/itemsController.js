// 1. create a product class
// 2. add properties of the mac and cheese
//  a. name
//  b. description
//  c. price
//  d. quantity
//  e. category
//  f. images

class Product {
  productItems = [];
  constructor() {}
  addProduct(name, description, price, quantity, category, image, createAt) {
    const item = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      category: category,
      image: image,
      createAt: createAt,
    };
    this.productItems.push(item);
  }//end of addProduct method

  displayProduct() {
    let productDetails = "";
    let index = 0;
    let moreBtnId = "";

    this.productItems.forEach(item => {
      moreBtnId = "item" + index;
      productDetails += `
      <div class="col-6 col-md-4 my-4">
        <div class="card h-100">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
            <a id="${moreBtnId}" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">More</a>
            </div>
        </div>
      </div>      
      `; //to add html codes from products.html
      index += 1;
    }); // end of forEach loop
    document.querySelector("#row").innerHTML = productDetails; //to add id="row" to product page

    index = 0;
    this.productItems.forEach(item => {
      moreBtnId = "item" + index;
      document.querySelector(`#${moreBtnId}`).addEventListener("click", function(){displayItemDetails(item)});
      index += 1;
    });// end of forEach loop
  } //end of displayProduct method
} //end of class

