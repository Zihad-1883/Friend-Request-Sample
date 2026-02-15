const msg = document.getElementById('msg').innerText;

accept.addEventListener("click",function accept(){
  document.getElementById('msg').innerText = 'You are now friends'
})

reject.addEventListener("click", function reject(){
    document.getElementById('msg').innerText = 'The request has been rejected'
    const deletElement = document.getElementsByClassName('btn');
    const parentElemnet = deletElement.parentNode;
    if(parentElemnet){
      parentElemnet.removeChild(deletElement)
    }
})
  



// Select the element you want to delete
// const elementToRemove = document.getElementById('myElement');

// Get the parent element
// const parentElement = elementToRemove.parentNode;

// Check if the parent element exists before trying to remove the child
// if (parentElement) {
//     parentElement.removeChild(elementToRemove); // Delete the element
// }
