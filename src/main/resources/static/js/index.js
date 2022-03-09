//initialize DOM elements

const chkbox_beef = document.querySelector("#chkbox_beef");
const chkbox_seafood = document.querySelector("#chkbox_seafood");
const chkbox_chicken = document.querySelector("#chkbox_chicken");
const chkbox_all = document.querySelector("#chkbox_all");
const pdtNameField = document.querySelector("#productName");
const pdtDesc = document.querySelector("#productDesc");
const pdtPrice = document.querySelector("#price");
const pdtQuantity = document.querySelector("#quantity");
const pdtImg = document.querySelector("#image");
const clearBtn = document.querySelector("#clearBtn");
const preview = document.querySelector("#image-container-preview");

// Initialize global variables
let checkBoxes;
let checkboxChecked = [];
let isCheckBoxChecked = false;

// 1. Checkbox restriction
//    a. create DOM variables for all checkboxes
//    b. create event handler
//    c. add event listener to call the event handler

//event handler
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

//event listener
chkbox_all.addEventListener("change", disableChkbox);

//2. Clear form function
const clearForm = () => {
  chkbox_beef.checked = false;
  chkbox_seafood.checked = false;
  chkbox_chicken.checked = false;
  chkbox_all.checked = false;
  pdtNameField.value = "";
  pdtDesc.value = "";
  pdtPrice.value = "";
  pdtQuantity.value = "";
  pdtImg.value = "";
};

//3. submit form function to validate and store values
const submitForm = () => {
  //form validation
  if (!isCheckBoxChecked){
    chkbox_beef.setCustomValidity("Please select at least one category.");
    chkbox_beef.reportValidity();
  } else {
    //initialize storing form values variables
    let productName = pdtNameField.value;
    let productDesc = pdtDesc.value;
    let price = pdtPrice.value;
    let quantity = pdtQuantity.value;
    let createAt = new Date();
    macNcheese.addProduct(
      productName,
      productDesc,
      price,
      quantity,
      checkboxChecked,
      image,
      createAt
    ); //category and image to work on it
    clearForm();
    alert("Product has been added successfully.");
  }
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

//5. image preview display
//initialize img file types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon"
];
//create img file type validation function
const validFileType = (file) => {
  return fileTypes.includes(file.type);
};

//create file size calculator function
const returnFileSize = (number) => {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
};

const updateImageDisplay = () => {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  };
  const curFiles = pdtImg.files;
  if (curFiles.length == 0) {
    const para = document.createElement("p");
    para.textContent = "";
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    preview.appendChild(list);
    list.setAttribute("class", "imgList");
    for(const file of curFiles) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if(validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }
      list.appendChild(listItem);
    }
  }
}

pdtImg.addEventListener("change", updateImageDisplay);
