'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


  var currentProduct = document.getElementById('current-product');
  var currentProductImage = document.getElementById('current-product-image');
  var otherProductsSection = document.getElementById('other-products');
  var otherProductsList = document.getElementById('other-products-list');
  var closeProductsButton = document.getElementById('close-products');

  // Function to create list item for other products
 
  // Function to display other products
  function displayOtherProducts() {
    otherProductsSection.style.display = 'block'; // Show other products section

  
    }
  

  // Function to change product when clicked
  function changeProduct(index) {
    currentProductImage.src = productImages[index];
    // You can set product name and description here if needed

    // Hide other products section
    otherProductsSection.style.display = 'none';
  }

  // Event listener for "Pesan sekarang" button
  var changeProductButton = document.getElementById('change-product');
  changeProductButton.addEventListener('click', displayOtherProducts);

  // Event listener for "Close Products" button
  closeProductsButton.addEventListener('click', function() {
    otherProductsSection.style.display = 'none';
  });


  var currentProduct = document.getElementById('current-product');
  var currentProductImage = document.getElementById('current-product-image');
  var otherProductsSection = document.getElementById('other-products');
  var otherProductsList = document.getElementById('other-products-list');
  var closeProductsButton = document.getElementById('close-products');

  // Function to create list item for other products
 
  // Function to display other products
  function displayOtherProducts() {
    otherProductsSection.style.display = 'block'; // Show other products section

  
    }
  

  // Function to change product when clicked
  function changeProduct(index) {
    currentProductImage.src = productImages[index];
    // You can set product name and description here if needed

    // Hide other products section
    otherProductsSection.style.display = 'none';
  }

  // Event listener for "Pesan sekarang" button
  var changeProductButton = document.getElementById('change-product');
  changeProductButton.addEventListener('click', displayOtherProducts);

  // Event listener for "Close Products" button
  closeProductsButton.addEventListener('click', function() {
    otherProductsSection.style.display = 'none';
  });




  

  




  

  
