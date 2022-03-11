// 1. create a product class
// 2. add properties of the mac and cheese
//  a. name
//  b. description
//  c. price
//  d. quantity
//  e. category
//  f. images


const displayItemDetails = (item) => {
  document.querySelector("#itemName").innerText = item.name;
  document.querySelector("#itemImage").src = item.imageUrl;
  document.querySelector("#itemDescription").innerText = item.description;
  document.querySelector("#itemPrice").innerText = item.price;
};

class Product {

  constructor() {}
  addProduct(name, description, price, quantity, imageUrl, imageObject) {
    const productController = this;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('category', 'beef');
    formData.append('imageURL', imageUrl);
    formData.append('imagefile',imageObject);

    fetch('http://localhost:8080/item/add', {
         method: 'POST',
         body: formData
         })
         .then(function(response) {
             console.log(response.status); // Will show you the status
             if (response.ok) {
                 alert("Successfully Added Product!")
             }
         })
         .catch((error) => {
             console.error('Error:', error);
             alert("Error adding item to Product")
         });

  } //end of addProduct method

  filterCat(option){
    this.category=option;
    this.displayProduct();
  }

  displayProduct(){
    let productController = this;
    productController._items = [];

    fetch('http://127.0.0.1:8080/item/all')
        .then((response)=>response.json())
        .then((data)=>{
            console.log("2. receive data");
            console.log(data);
            data.forEach((item, index)=>{
                const itemObj = {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    quantity: item.quantity,
                    category: item.category,
                    imageUrl: item.imageUrl
                };
                productController._items.push(itemObj);
            });

            productController.renderProductPage();

        })
        .catch((error)=>{
            console.log(error);
        });
  }

  renderProductPage() {
    let productDetails = "";
    let index = 0;
    let moreBtnId = "";

    this._items.forEach((item) => {
      if((item.category).includes(this.category) || this.category == undefined || this.category == "all"){
        moreBtnId = "item" + index;
        productDetails += `
        <div class="col-6 col-md-4 my-4">
          <div class="card mh-100">
              <img src="${item.imageUrl}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.price}</p>
              <a id="${moreBtnId}" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">More</a>
              </div>
          </div>
        </div>      
        `; //to add html codes from products.html
        index += 1;
      }
    }); // end of forEach loop
    document.querySelector("#row").innerHTML = productDetails; //to add id="row" to product page

    //Display information dynamically for each card when click on "More button"
    index = 0;
    this._items.forEach((item) => {
      if((item.category).includes(this.category) || this.category == undefined || this.category == "all"){
        moreBtnId = "item" + index;
        document
          .querySelector(`#${moreBtnId}`)
          .addEventListener("click", function () {
            displayItemDetails(item);
          });
        index += 1;
      }
    }); // end of forEach loop
  } //end of displayProduct method
} //end of class
