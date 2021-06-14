import { myAddButton, myDiv3, myClearButton, miniDiv, vertCler, vertFonce, mySection, myDiv1, myDiv2} from "./createElements.js";

import {laFonc, compteur, myRat} from "./fonction.js"





myAddButton.addEventListener('click', (e) => {
    laFonc()
})

console.log(compteur);

myClearButton.addEventListener('click', (e) => {
    let ye = confirm('Voulez-vous tout supprimez?')
    for (let i = myDiv3.children.length - 1; i >= 0; i--) {
        if (ye == true) {
            e.target.parentElement.children[2].children[i].remove();
            myRat()
        }  
    }
   
})



miniDiv.addEventListener('click', (e) => {
    if (e.target == this) {
        
    } else if (e.target == miniDiv) {
        
    } else if (e.target == miniDiv.children[0]) {
        for (let i = 0; i < myDiv3.children.length; i++){
            if (myDiv3.children[i].classList.contains('changer')) {
                myDiv3.children[i].classList.remove('hidden')
            } else {
                myDiv3.children[i].classList.add("hidden");
            }
        }
    } else if (e.target == miniDiv.children[1]) {
        for (let i = 0; i < myDiv3.children.length; i++) {
            if (!myDiv3.children[i].classList.contains('changer')) {
                myDiv3.children[i].classList.remove('hidden')
            } else {
                myDiv3.children[i].classList.add('hidden')
            }
        }
    } else if (e.target == miniDiv.children[2]) {
        for (let i = 0; i < myDiv3.children.length; i++) {
                myDiv3.children[i].classList.remove('hidden')
           
        }
    }
})




// Enter Key

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        document.activeElement.blur();
        laFonc()
    }
})


vertCler.addEventListener('click', (e) => {
    mySection.style.backgroundColor = "var(--green)";
    mySection.style.color = "var(--verr)";

    for (let i in Array.from(myDiv1.children)) {
        console.log(myDiv1.children);
    myDiv1.children[i].style.backgroundColor = "var(--green)";
     myDiv1.children[i].style.color = "var(--verr)";

    myDiv1.children[i].style.border = "var(--verr) 1px solid";
        

    }
    for (let i in Array.from(myDiv2.children[1].children)){
        myDiv2.children[1].children[i].style.backgroundColor = "var(--green)";
        myDiv2.children[1].children[i].style.color = "var(--verr)";
        myDiv2.children[1].children[i].style.border = "var(--verr) 1px solid"
    } 
    
})







vertFonce.addEventListener('click', (e) => {
    mySection.style.backgroundColor = "var(--fonce)";
    mySection.style.color = "var(--che)";

    for (let i in Array.from(myDiv1.children)) {
        console.log(myDiv1.children);
    myDiv1.children[i].style.backgroundColor="var(--fonce)";
     myDiv1.children[i].style.color = "var(--che)";

    myDiv1.children[i].style.border = "var(--che) 1px solid";
        

    }
    for (let i in Array.from(myDiv2.children[1].children)){
        myDiv2.children[1].children[i].style.backgroundColor="var(--fonce)";
        myDiv2.children[1].children[i].style.color = "var(--che)";
        myDiv2.children[1].children[i].style.border = "var(--che) 1px solid"
    } 
    
})