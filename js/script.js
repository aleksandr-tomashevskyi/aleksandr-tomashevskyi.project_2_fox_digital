"use strict"
// how to read: comments on top, actions below
console.log('hello world!')
// getting block with radio buttons
const radioSwitcherBlock = document.querySelector(".section-column_middle");
// getting collection of objects of radio buttons
const radioSwitcherCollection = radioSwitcherBlock.children;
console.log(radioSwitcherCollection, typeof(radioSwitcherCollection));
// getting values of each radio button (accessing)
const radioKeys = Object.values(radioSwitcherCollection);
// getting colection of objects of images stored in right block
const imagesCollection = document.querySelector(".our-projects .section-column_right").children;
console.log(imagesCollection);
// accesing each image in the object and storing it in a collections
const imagesCollectionValues = Object.values(imagesCollection);
console.log(imagesCollectionValues);
// setting variable to store number of current checked button
let currentSelection;
// getting information about which button is checked after loading the page
radioKeys.forEach(function(item, i){
   if (item.checked){
      currentSelection = i;
      // toggling appropriate images according to checked button
      if(i == 0){
         imagesCollectionValues[i].classList.add("active");
            // imagesCollectionValues[4].classList.add("active-top");
         imagesCollectionValues[i+1].classList.add("active-bottom");
      } else if(i == 4){
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
      } else {
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i+1].classList.add("active-bottom");
      }
   }
})
console.log(currentSelection);
console.log(imagesCollectionValues);
// initializing function for toggling appropriate classes to img after user choses another button
function sliderChange(){
   radioKeys.forEach(function(item, i){
      if (item.checked){
         if (i == 0){
            // getting rid of classes in previous state
            imagesCollectionValues.forEach(function(item){
               item.removeAttribute("class");
            })
            // setting up new state
            imagesCollectionValues[i].classList.add("active");
            imagesCollectionValues[i+1].classList.add("active-bottom");
            console.log("this code is running 1");
            // remembering new selection
            currentSelection = i;
      } else if(i == 4){
         // getting rid of classes in previous state
         imagesCollectionValues.forEach(function(item){
            item.removeAttribute("class");
         })
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
         // imagesCollectionValues[0].classList.add("active-top");
         console.log("this code is running 2");
         currentSelection = i;
      } else {
         // getting rid of classes in previous state
         imagesCollectionValues.forEach(function(item){
            item.removeAttribute("class");
         });
         // setting up new state
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         console.log("this code is running 3");
         // remembering new selection
         currentSelection = i;
      }
   };
});
};
// setting event listener to parent for buttons block
radioSwitcherBlock.addEventListener("click", function(event){
   // checking if the button was clicked or another area of the block
   if(event.target.closest('input')){
      sliderChange(); //calling main function for slider
   }
});

const footerAuditForm = document.querySelector(".section-row-audit-form");
const footerSection = document.querySelector(".footer-section");

console.log('this is the form: ', footerAuditForm)
function showForm(){
   footerAuditForm.style.display = "block";
   footerSection.scrollIntoView({block: 'start', behavior: 'smooth'});
   console.log('it works!');
}
function hideForm(){
   footerAuditForm.style.display = "none";
   footerSection.scrollIntoView({block: 'end', behavior: 'smooth'});
   console.log('it works again!');
}
footerSection.addEventListener('mouseenter', function(event){
   showForm();
});

footerSection.addEventListener('mouseleave', function(event){
   hideForm();
});
