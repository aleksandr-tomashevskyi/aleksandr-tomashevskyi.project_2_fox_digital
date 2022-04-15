"use strict"
// how to read: comments on top, actions below

console.log('hello world!')
//slider code start

// getting block with radio buttons
const radioSwitcherBlock = document.querySelector(".section-column_middle");
// getting collection of objects of radio buttons
const radioSwitcherCollection = radioSwitcherBlock.children;
console.log(radioSwitcherCollection, typeof(radioSwitcherCollection));
// getting values of each radio button (accessing)
const radioKeys = Object.values(radioSwitcherCollection);
// getting colection of objects of images stored in right block
const imagesCollection = document.querySelector(".our-projects .section-column_right .slider-block").children;
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
      imagesCollectionValues[0].classList.remove("active-bottom");
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
// initializing function for toggling appropriate classes to img after user choses another button
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

//    Automatic slide change code block start
//initializing function to select next radio button
function autoSlideChange(){
   if(currentSelection < (imagesCollectionValues.length - 1)){
   radioKeys[(currentSelection + 1)].checked = true;
   sliderChange();
   } else {
      radioKeys[0].checked = true;
      sliderChange();
   }
}
//making time interval for automatic slide change
setInterval(autoSlideChange, 4000);

//    Automatic slide change code block end
//slider code end

//audit popup form code start

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

//audit popup form code end

//header links decoration code start
const menuItemCollection = document.querySelectorAll(".nav-list__item[data-goto]");
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

// scroll to ancor function

function ancorScrollFunc(navItemClickedVar, event){
   console.log("here is the event: ", event)
   event.preventDefault();
   const ancorElement = document.querySelector(`${navItemClickedVar}`);
   console.log('Here is the ancor element: ', ancorElement);
   ancorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
};

document.querySelector(".nav-list").addEventListener('click', (event) => {
   if(event.target.closest('.nav-list__item')){
      navItemClickedVar = event.target.getAttribute('data-goto');
      console.log("Just checking the dataset function: ",event.target.dataset.goto)
      if(navItemClickedVar && document.querySelector(`${navItemClickedVar}`)){ //checking if the attribute has any value
         ancorScrollFunc(navItemClickedVar, event); //transfering target and event into a function
         console.log("retrieved ancor name: ", navItemClickedVar);
      }
   }
})
// document.querySelector(".nav-list").addEventListener('click', ancorScrollFunc);
// function ancorScrollFunc(e){
//    console.log(e.target);
//    e.preventDefault();
// }

// showing an arrow on links when mouse is over
document.querySelector(".nav-list").addEventListener('mouseover', showArrow);
function showArrow(event){
   if(event.target.closest('.nav-list__item')){
      console.log(event.target.firstElementChild);
      event.target.firstElementChild.classList.toggle("_active");
   }
}
// showing an arrow on links when mouse is out
document.querySelector(".nav-list").addEventListener('mouseout', hideArrow);
function hideArrow(event){
   if(event.target.closest('.nav-list__item')){
      console.log(event.target.firstElementChild);
      event.target.firstElementChild.classList.toggle("_active");
   }
}

