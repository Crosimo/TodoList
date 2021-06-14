export { laFonc, mySecret, compteur, myRat}
import {  myDiv3, myInput  } from "./createElements.js";
let mySecret;
let compteur = 1;
let laFonc = () => {
    mySecret = myDiv3.appendChild(document.createElement("div"));
    mySecret.setAttribute('draggable', true);
    mySecret.style = "background-color: white; color: grey ; display: flex; justify-content: space-between; width: 100%; align-items: center; margin: 0.2rem"
    let myH2 = mySecret.appendChild(document.createElement('input'));
    myH2.style = "margin: 0; background-color: transparent;  margin-left: 0.4rem; border: none;"
    if (myInput.value == "") {
        myH2.setAttribute('placeholder', `tache ${compteur}`)
        compteur++
    } else {
        myH2.value = myInput.value;
    }
        
        myH2.setAttribute('disabled', true)
 
    let miniDiv2 = mySecret.appendChild
        (document.createElement('div'));
        miniDiv2.style = "display:flex; align-items: center; "
    for (let i = 0; i < 3; i++){
       let mySButtons = miniDiv2.appendChild(document.createElement('button'));
        mySButtons.style = "width: 2rem; height: 1.5rem; border-radius: 0.2rem; margin: 0.1rem; padding: 0.1rem; color: grey"
    }
    
    miniDiv2.children[0].innerHTML = '<i class="fas fa-check"></i>'
    miniDiv2.children[1].innerHTML ='<i class="far fa-edit"></i>'
        // miniDiv2.children[2].innerHTML = '<i class="fa fa-solid fa-check"></i>'
    miniDiv2.children[2].innerHTML = '<i class="fa fa-solid fa-trash"></i>'
        
    
    miniDiv2.children[2].firstChild.style = "font-size : 1rem; width : 1rem; height: 1rem; ";
        
       
        
    miniDiv2.children[0].addEventListener('click', (e) => {
            console.log(e.target);
        if (e.target.classList.contains('fas')) {
            e.target.parentElement.parentElement.parentElement.classList.toggle('changer')
            e.target.parentElement.parentElement.previousSibling.classList.toggle("friendo")
            e.target.parentElement.parentElement.previousSibling.classList.toggle("white")  
        } else {
            e.target.parentElement.parentElement.classList.toggle('changer')
            console.log(e.target.parentElement.pa);
            console.log(e.target.parentElement.parentElement.firstChild);
            e.target.parentElement.parentElement.firstChild.classList.toggle("friendo")
            e.target.parentElement.parentElement.firstChild.classList.toggle("white") 
            }
           
    })
        
    miniDiv2.children[1].addEventListener('click', (e) => {
        if (e.target.classList.contains('far')) {
          
        e.target.parentElement.parentElement.parentElement.querySelector("input").toggleAttribute("disabled");
        e.target.parentElement.parentElement.parentElement.querySelector("input").focus()
        e.target.parentElement.parentElement.parentElement.querySelector("input").setAttribute('placeholder', "modifications")
        }
        
        
        else {
        e.target.parentElement.parentElement.querySelector("input").toggleAttribute("disabled");
        e.target.parentElement.parentElement.querySelector("input").focus()
        e.target.parentElement.parentElement.querySelector("input").setAttribute('placeholder', "modifications")
        }
        
    })
        
    console.log(myH2);
        mySecret.addEventListener('dblclick', (e) => {
            if (e.target == myH2) {
                myH2.toggleAttribute("disabled")
                myH2.focus()
                myH2.setAttribute('placeholder', "modifications")
            }
            
            // e.target.parentElement.parentElement.querySelector("input").toggleAttribute("disabled");
            // e.target.parentElement.parentElement.querySelector("input").focus()
     })
    
        
        
        
    miniDiv2.children[2].addEventListener('click', (e) => {
        if (e.target.classList.contains('fa')) {
            e.target.parentElement.parentElement.parentElement.remove(); 
        } else {
            e.target.parentElement.parentElement.remove(); 
        }
        
        e.target.parentElement.parentElement.remove();
        compteur--;
        
    })



    mySecret.addEventListener('dragstart', dragStart);
    mySecret.addEventListener('dragend', dragEnd)
    let style;
    let content;
    var elementY;
    function dragStart(e) {
     
        setTimeout(() => { this.style.visibility = "hidden"; elementY = this }, 0);
       
        
    }
    function dragEnd() {
        this.style.visibility =""
    }
   
    for (let i in Array.from(myDiv3.children)) {
        console.log(myDiv3.children[i]);
        myDiv3.children[i].addEventListener('drag', (e) => {
            elementY = e.target;
        })
        myDiv3.children[i].addEventListener('dragover', dragOver);
        elementY = myDiv3.children[i]
        myDiv3.children[i].addEventListener('dragenter', dragEnter);
        myDiv3.children[i].addEventListener('dragleave', (e) => {
            
            elementY.parentElement.insertBefore(elementY, e.target)
           
        });
        myDiv3.children[i].addEventListener('drop', () => {
        
            // e.target.parentElement.insertBefore(elementY, e.target)
        //     e.target.parentElement.insertAfter(elementY, e.target)
        //    console.log("heyo")
        });
    }

    function dragOver(e) {
        e.preventDefault() 
    }
    function dragEnter(e) {
       
        e.preventDefault()
    }

}


let myRat = () => {
    compteur--;
}