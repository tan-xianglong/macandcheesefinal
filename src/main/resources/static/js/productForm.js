const productsControl = new Product();
var storeImage = ""
const newItemForm = document.querySelector("#newItemForm");
const newItemNameInput = document.querySelector('#productName');
const newItemDescription = document.querySelector('#productDesc');
const newItemImageUrl = document.querySelector('#image');
const newItemQuantity = document.querySelector('#quantity');
const newItemPrice = document.querySelector('#price');
const clearBtn = document.querySelector("#clearBtn");
const preview = document.querySelector("#image-container-preview");
const chkbox_beef = document.querySelector("#chkbox_beef");
const chkbox_seafood = document.querySelector("#chkbox_seafood");
const chkbox_chicken = document.querySelector("#chkbox_chicken");
const chkbox_all = document.querySelector("#chkbox_all");

let checkBoxes;
let checkboxChecked = [];
let isCheckBoxChecked = false;

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs


    //Do the Validation code here

    // Get the values of the inputs - variable names to be same as MySQL columns
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value.replace("C:\\fakepath\\", "");
    const quantity = newItemQuantity.value;
    const price = newItemPrice.value;
    const category='';
    if (chkbox_beef.checked) {
        category += 'beef ';
    }
    if (chkbox_seafood.checked) {
        category += 'seafood ';
    }
    if (chkbox_chicken.checked) {
        category += 'chicken ';
    }

// Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemImageUrl.value = '';
    newItemQuantity.value = '';
    newItemPrice.value = '';
    chkbox_beef.checked = false;
    chkbox_seafood.checked = false;
    chkbox_chicken.checked = false;
    chkbox_all.checked = false;
    preview.removeChild(preview.firstChild);

    // Add the task to the task manager
    productsControl.addProduct(name, description, price, quantity, category, imageUrl, storeImage);
});

// select file input
const input = document.querySelector('#image');

// add event listener
input.addEventListener('change', () => {
    storeImage = input.files[0];
});


//checkbox validation
const disableChkbox = () => {
  if (chkbox_all.checked == true) {
    chkbox_beef.checked = true;
    chkbox_chicken.checked = true;
    chkbox_seafood.checked = true;
    chkbox_beef.disabled = true;
    chkbox_chicken.disabled = true;
    chkbox_seafood.disabled = true;
  } else {
    chkbox_beef.disabled = false;
    chkbox_chicken.disabled = false;
    chkbox_seafood.disabled = false;
    chkbox_beef.checked = false;
    chkbox_chicken.checked = false;
    chkbox_seafood.checked = false;
  }
};

chkbox_all.addEventListener("change", disableChkbox);

//Clear form function
const clearForm = () => {
  chkbox_beef.checked = false;
  chkbox_seafood.checked = false;
  chkbox_chicken.checked = false;
  chkbox_all.checked = false;
  chkbox_beef.disabled = false;
  chkbox_chicken.disabled = false;
  chkbox_seafood.disabled = false;
  newItemNameInput.value = '';
  newItemDescription.value = '';
  newItemImageUrl.value = '';
  newItemQuantity.value = '';
  newItemPrice.value = '';
};

//4. detecting and storing category result
const storeCheckBoxValue = () => {
  checkBoxes = document.querySelectorAll("input[type=checkbox]");
  checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', function(){
      checkboxChecked = Array.from(checkBoxes).filter(i => i.checked).map(j => j.value).filter(k => k != 'all');
      console.log(checkboxChecked);
      if(checkboxChecked.length == 0){
        isCheckBoxChecked = false;
      } else {
        isCheckBoxChecked = true;
        chkbox_beef.setCustomValidity("");
        chkbox_beef.reportValidity();
      }
    });
  });
  console.log(checkBoxes)
};

storeCheckBoxValue();