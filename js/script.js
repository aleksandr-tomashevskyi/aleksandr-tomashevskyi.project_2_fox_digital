"use strict"
console.log('hello world!')
const radioSwitcherBlock = document.querySelector(".page-block-column_middle");
const radioSwitcherCollection = radioSwitcherBlock.children;
console.log(radioSwitcherCollection, typeof(radioSwitcherCollection));
const radioKeys = Object.values(radioSwitcherCollection);
const imagesCollection = document.querySelector(".our-projects .page-block-column_right").children;
console.log(imagesCollection);
const imagesCollectionValues = Object.values(imagesCollection);
console.log(imagesCollectionValues);
let currentSelection;
radioKeys.forEach(function(item, i){
   if (item.checked){
      currentSelection = i;
   }
})
console.log(currentSelection)
function showConsole(){
   radioKeys.forEach(function(item, i){
      if (item.checked){
         imagesCollectionValues[currentSelection].classList.toggle("inactive");
         imagesCollectionValues[i].classList.toggle("inactive");
         console.log("This button is checked", i);
         currentSelection = i;
      };
   });
};
radioSwitcherBlock.addEventListener("click", function(event){
   if(event.target.closest('input')){
      showConsole()
   }
});
