"use strict"
// how to read: comments on top, actions below

console.log('hello world!');

//       Slider code start

// getting block with radio buttons
const radioSwitcherBlock = document.querySelector(".slider__radio-buttons-block");
// getting collection of objects of radio buttons
const radioSwitcherCollection = radioSwitcherBlock.children;
console.log(radioSwitcherCollection, typeof(radioSwitcherCollection));
// getting values of each radio button (accessing)
const radioKeys = Object.values(radioSwitcherCollection);
// getting colection of objects of images stored in right block
const imagesCollectionBlock = document.querySelector(".slider-block");
console.log("This is the imagesCollectionBlock: ", imagesCollectionBlock);
const imagesCollection = imagesCollectionBlock.children;
console.log('getting imagesCollection - succesfull');
// accesing each image in the object and storing it in a collections
const imagesCollectionValues = Object.values(imagesCollection);
console.log(imagesCollectionValues);
console.log("This is radioKeys: ",radioKeys)
// setting variable to store number of current checked button
let currentSelection;
// getting information about which button is checked after loading the page
radioKeys.forEach(function(item, i){
   if (item.checked){
      currentSelection = i;
      // toggling appropriate images according to checked button
      if(i == 0){
         imagesCollectionValues[imagesCollectionValues.length-2].classList.add("inactive-top");//for 'infinite' effect
         imagesCollectionValues[imagesCollectionValues.length-1].classList.add("active-top"); //for 'infinite' effect
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         imagesCollectionValues[i+2].classList.add("inactive-bottom");
      } else if(i == (imagesCollectionValues.length-1)){ //remember! Length starts from 1, not 0
         imagesCollectionValues[i-2].classList.add("inactive-top");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[0].classList.add("active-bottom");//for 'infinite' effect
         imagesCollectionValues[1].classList.add("inactive-bottom");//for 'infinite' effect

      } else if(i == 1){
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         imagesCollectionValues[i+2].classList.add("inactive-bottom");
      } else if(i == (imagesCollectionValues.length-2)){
         console.log('check')
         imagesCollectionValues[i-2].classList.add("inactive-top");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i+1].classList.add("active-bottom");
      } else{
         imagesCollectionValues[i-2].classList.add("inactive-top");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         imagesCollectionValues[i+2].classList.add("inactive-bottom");
      }
   }
})
console.log('setting current selection after loading - succesful', 'current selection is:', currentSelection);
console.log('length of collection: ', imagesCollectionValues.length)
//function for removing classes
function removeCurrentClasses(){
   if(currentSelection == 0){
      imagesCollectionValues[imagesCollectionValues.length-2].classList.remove("inactive-top");//for 'infinite' effect
      imagesCollectionValues[imagesCollectionValues.length-1].classList.remove("active-top");//for 'infinite' effect
      imagesCollectionValues[currentSelection].classList.remove("active");
      imagesCollectionValues[currentSelection+1].classList.remove("active-bottom");
      imagesCollectionValues[currentSelection+2].classList.remove("inactive-bottom");
   } else if(currentSelection == (imagesCollectionValues.length-1)){
      imagesCollectionValues[currentSelection-2].classList.remove("inactive-top");
      imagesCollectionValues[currentSelection-1].classList.remove("active-top");
      imagesCollectionValues[currentSelection].classList.remove("active");
      imagesCollectionValues[0].classList.remove("active-bottom");//for 'infinite' effect
      imagesCollectionValues[1].classList.remove("inactive-bottom");//for 'infinite' effect
   } else if(currentSelection == 1){
      imagesCollectionValues[currentSelection-1].classList.remove("active-top");
      imagesCollectionValues[currentSelection].classList.remove("active");
      imagesCollectionValues[currentSelection+1].classList.remove("active-bottom");
      imagesCollectionValues[currentSelection+2].classList.remove("inactive-bottom");
   } else if(currentSelection == (imagesCollectionValues.length-2)){
      imagesCollectionValues[currentSelection-2].classList.remove("inactive-top");
      imagesCollectionValues[currentSelection-1].classList.remove("active-top");
      imagesCollectionValues[currentSelection].classList.remove("active");
      imagesCollectionValues[currentSelection+1].classList.remove("active-bottom");
   } else{
      imagesCollectionValues[currentSelection-2].classList.remove("inactive-top");
      imagesCollectionValues[currentSelection-1].classList.remove("active-top");
      imagesCollectionValues[currentSelection].classList.remove("active");
      imagesCollectionValues[currentSelection+1].classList.remove("active-bottom");
      imagesCollectionValues[currentSelection+2].classList.remove("inactive-bottom");
   }
}
// initializing function for toggling appropriate classes to img after user (or time interval function) choses another button
function sliderChange(){
   radioKeys.forEach(function(item, i){ //cycle for checking which particular button was checked
      if (item.checked){
         if (i == 0){
            // getting rid of classes in previous state
            removeCurrentClasses();
            // setting up new state
            imagesCollectionValues[imagesCollectionValues.length-2].classList.add("inactive-top");//for 'infinite' effect
            imagesCollectionValues[imagesCollectionValues.length-1].classList.add("active-top");//for 'infinite' effect
            imagesCollectionValues[i].classList.add("active");
            imagesCollectionValues[i+1].classList.add("active-bottom");
            imagesCollectionValues[i+2].classList.add("inactive-bottom");
            console.log("code for 'zero' section initialized");
            // remembering new selection
            currentSelection = i;
      } else if(i == (imagesCollectionValues.length-1)){
         // getting rid of classes in previous state
         removeCurrentClasses();
         imagesCollectionValues[i-2].classList.add("inactive-top");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[0].classList.add("active-bottom");//for 'infinite' effect
         imagesCollectionValues[1].classList.add("inactive-bottom");//for 'infinite' effect
         console.log("code for 'end' section initialized");
         console.log("new selection is: ", i);
         currentSelection = i;
      } else if(i == 1){
         removeCurrentClasses();
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         imagesCollectionValues[i+2].classList.add("inactive-bottom");
         console.log("new selection is: ", i);
         currentSelection = i;
      } else if(i == (imagesCollectionValues.length-2)){
         removeCurrentClasses();
         imagesCollectionValues[i-2].classList.add("inactive-top");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         console.log("new selection is: ", i);
         currentSelection = i;
      }
      else {
         removeCurrentClasses();
         imagesCollectionValues[i-2].classList.add("inactive-top");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         imagesCollectionValues[i+2].classList.add("inactive-bottom");
         console.log("code for 'middle' section initialized");
         console.log("new selection is: ", i);
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

//Code block for clickable top and bottom slide start
// setting event listener for click on slide
document.querySelector(".slider-block").addEventListener("click", function(event){
   if(event.target.closest(".active-top")){
      if(currentSelection == 0){
         radioKeys[(imagesCollectionValues.length - 1)].checked = true;
         sliderChange();
      }
       else{
      radioKeys[(currentSelection - 1)].checked = true;
      sliderChange();
         }
      } else if(event.target.closest(".active-bottom")){
         if(currentSelection == (imagesCollectionValues.length - 1)){
            radioKeys[0].checked = true;
            sliderChange();
         } else{
      radioKeys[(currentSelection + 1)].checked = true;
      sliderChange();
      }
   }
});
//Code block for clickable top and bottom slide end

//Automatic slide change code block start

//initializing function to select next radio button
function autoSlideChange(){
   if(currentSelection < (imagesCollectionValues.length - 1)){ //checking whether we reached the end of collection
   radioKeys[(currentSelection + 1)].checked = true; //checking next button
   sliderChange();
   } else {
      radioKeys[0].checked = true;
      sliderChange();
   }
}
//making time interval for automatic slide change
setInterval(autoSlideChange, 8000);

//Automatic slide change code block end
//          Slider code end

//       Audit popup form code start

const footerAuditForm = document.querySelector(".section-row-audit-form");
const footerSection = document.querySelector(".footer-section");

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
footerSection.addEventListener('mouseenter', () => {
   showForm();
});
footerSection.addEventListener('mouseleave', () => {
   hideForm();
});

//      Audit popup form code end

//      Header links decoration code start
const menuItemCollection = document.querySelectorAll(".navigation__link[data-goto]");
const sectionItemCollection = document.querySelectorAll("section");
let navItemClickedVar;
// function getNavItemClicked(){
   
// }
// sectionItemCollection.forEach(function(item, i){
//    if(item.matches(`[class=${varAchievement}]`)){
//       console.log('match-found! It is: ', item, "with number:", i);
//    }
// });
// console.log(sectionItemCollection);

//Scroll to ancor function

function ancorScrollFunc(navItemClickedVar, event){
   console.log("here is the event: ", event)
   event.preventDefault();
   const ancorElement = document.querySelector(`${navItemClickedVar}`);
   console.log("Element distance: ", ancorElement.offsetTop)
   console.log('Here is the ancor element: ', ancorElement);
   window.scrollTo({top: (`${ancorElement.offsetTop}` - 80), behavior: 'smooth'});
   document.querySelector(".navigation__body").classList.remove("navigation__body_active");
   console.log("ScrollFunctionCheck - successfull");
};

document.querySelector(".navigation__list-block").addEventListener('click', (event) => {
   if(event.target.closest('.navigation__list-item')){
      navItemClickedVar = event.target.getAttribute('data-goto');
      console.log("Just checking the dataset function: ",event.target.dataset.goto)
      if(navItemClickedVar && document.querySelector(`${navItemClickedVar}`)){ //checking if the attribute has any value
         ancorScrollFunc(navItemClickedVar, event); //transfering target and event into a function
         console.log("retrieved ancor name: ", navItemClickedVar);
      }
   }
})

// showing an arrow on links when mouse is over
document.querySelector(".navigation__list-block").addEventListener('mouseover', showArrow);
function showArrow(event){
   if(event.target.closest('.navigation__list-item')){
      event.target.firstElementChild.classList.toggle("_active");
      console.log('showArrow');
   }
}
// showing an arrow on links when mouse is out
document.querySelector(".navigation__list-block").addEventListener('mouseout', hideArrow);
function hideArrow(event){
   if(event.target.closest('.navigation__list-item')){
      event.target.firstElementChild.classList.toggle("_active");
   }
}

//       Header background color change after being scrolled
const headerBlockItem = document.querySelector(".header");
let lastKnownScrollPosition = window.pageYOffset;
//function below needed to check scroll position after reload
if(lastKnownScrollPosition == 0){ // checking if scroll position shifted from 0
   headerBlockItem.classList.remove("header_active");
}
else{
   headerBlockItem.classList.add("header_active");
};
console.log("Header BlockItem: ", headerBlockItem);
console.log("Scroll: ", lastKnownScrollPosition);
window.addEventListener("scroll", function(event){
   lastKnownScrollPosition = window.pageYOffset;
   if(lastKnownScrollPosition == 0){ // checking if scroll position shifted from 0
      headerBlockItem.classList.remove("header_active");
   }
   else{
      headerBlockItem.classList.add("header_active");
   }
})

//    Navigation menu show\hide

const menuIconBlock = document.querySelector(".navigation__icon");
menuIconBlock.addEventListener("click", function(event){
   document.querySelector(".navigation__body").classList.toggle("navigation__body_active");
})


