# Mac and Cheese

This is the final project assignment for the SG United Mid-Career Pathways Program - Company Training (SGUP-CT) which is collaboratively developed by 4 team members.

Visit [Mac & Cheese Store](https://macncheese.herokuapp.com/) to see the full site.

## Table of Contents
* [General Information](#general-information)
* [Built With](#built-with)
* [Pages and Components](#pages-and-components)
  * [Navigation Bar](#navigation-bar)
  * [Homepage](#homepage)
  * [About Us](#about-us)
  * [Products](#products)
  * [Add Product Form](#add-product-form)


## General Information
This objective of this project is to develop an E-commerce site using Agile methodology.

The MVP of this project consist of the Home, About Us, Products and Form pages, all of which are responsive.

Implement a fully working web application with the following layers:
Persistence: MySQL Database.
Backend: REST API with Java and Spring Boot.
Frontend: JavaScript + CSS + HTML.


## Built With
 * HTML/CSS
    * Bootstrap
 * Javascript
 * MySQL
 * Java
    * Spring Boot 


## Pages and Components
### Navigation Bar
A text only horizontal navigation bar helps users in selecting topics or links of their interest.

#### Features
Navbar with the menu options for each page:
 *	Home
 *	About Us
 * Shop
 * Add product(after authenticated with 'Admin' role)
 * Log in/out
 
* Thymeleaf template engine to create a separate navbar.html and footer.html to be inserted in all main html files & redirects the expected html pages

* Responsive behaviour:

  *   Navbar-collapse:  automatically collapses at the lg (large) 992px breakpoint 
  *   Navbar-toggler: use with collapse plugin to trigger hidden content elsewhere on the page and other navigation toggling behaviours
 
* Styling: 

  *  Font: -	Google Fonts API 
  *  Logo - @keyframes – CSS animation 



***Mobile view***

![navbar phone](https://user-images.githubusercontent.com/97433106/155013440-931b67bb-ffb6-4d27-a081-4a048ccb8a13.JPG)
![navbar phone expand](https://user-images.githubusercontent.com/97433106/155013476-3555e449-445b-4e85-b8ea-b6a780111ff6.JPG)


***Desktop view***

![navbar laptop ](https://user-images.githubusercontent.com/97433106/155011894-e913deb1-e9a8-4696-8afe-07d1f79faf50.jpg)



---

### Homepage
Static page that display the shop front and guides users to other parts of the web app
#### Features
(To input special features of your page)

---

### About Us
Static page that contains the following parts:
* A short project description
* Team profiles (short bio, photo and role in the project)

#### Features
* Design application’s wireframes on ow the application will work and look by using Moqups
* Bootstrap - card componet was selected as according to our wireframes structure which created
* Responsive display:
   * Bootstrap's Grid system - 2 columns for desktop, 1 column for mobile view, breakpoint : lg (large)992px
* Styling:
   * Styling: icon - Iconify API 

***Desktop view***

![aboutus laptop](https://user-images.githubusercontent.com/97433106/160568196-7b1dad87-5c92-47bd-8333-b68df01ea3bf.png)




***Mobile view***

![aboutus mobile](https://user-images.githubusercontent.com/97433106/160570222-041cd61e-7b51-4c62-81e2-ab4f3851a999.png)




---

### Products
Consumes API (POST and GET) and display information from database on the page.
#### Features
A page for customers to view our range of products, get more information and add orders to their cart:
* The core layout of the Product cards area is built utilising Bootstrap's grid system 
    * Responsive display: 3 columns for desktop, 2 columns for mobile view
* Product cards and information (Item image, Item name, Item price) are dynamically added to the page using JavaScript
    * Using a forEach method to loop through Object instances, modifying properties via template literals and interpolation 
    * Concatenating them to the page via HTML DOM manipulation
* Product modals
    * A forEach loop dynamically assigns unique IDs to each "More" button
    * An event listener is appended to each "More" button
    * When triggered, information is displayed dynamically on the modal via DOM manipulation 
* Dynamic Filter
    * narrows search results or listings on a product category page
    * User can filter using category. Four filter buttons: “All”, “Chicken”, “Beef” & “Seafood”, one button for each category.
    * onclick event executed when the user clicked on any of the filter button, the option will be pass in as parameter on method filterCat(). 
    * Products are filtered and displayed dynamically
    * Styling: icon - Iconify API


 
***Desktop view***

![product_desktop_top](https://user-images.githubusercontent.com/29788431/154963574-24767ac5-37ec-47ec-9920-3b651f6e2520.png)
![product_desktop_modal](https://user-images.githubusercontent.com/29788431/154963585-f786c7ac-a587-4274-9b88-0ba8995cd5e9.png)

***Mobile view***

![product_mobile_card](https://user-images.githubusercontent.com/29788431/154963654-9bcdc510-7e89-4e0d-8db1-71928a4ac52d.png)
![product_mobile_modal](https://user-images.githubusercontent.com/29788431/154963725-1117bf6e-a377-42ac-9c42-e708adc946cc.png)

---

### Add Product Form
Allows user to add products/post.
#### Features
(To input special features of your page)


