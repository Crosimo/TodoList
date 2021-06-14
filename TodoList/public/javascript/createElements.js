let myBody = document.body;
myBody.style = "display:flex; justify-content: center;"
let mySection = myBody.appendChild(document.createElement("section"));
mySection.style = 'background-color: #D3D3D3; border-radius: 1rem; width: 80%; height: max(25rem, max-content); box-sizing: border-content; display: flex; flex-direction: column; align-items: center; justify-content: space-around'

// ! div1


let myDiv1 = document.createElement('div');
myDiv1.style = "display:flex; justify-content: center; align-items: center; height: 3.5rem; width : 100%";
 console.log(myDiv1);
let myInput = myDiv1.appendChild(document.createElement('input'));
myInput.setAttribute("placeholder", "Votre tâche?")
myInput.style = "height :1.5rem; width: 60%; font-size: 1rem; color: black; margin-right: 0.3rem";


let myAddButton = myDiv1.appendChild(document.createElement('button'));
myAddButton.style = " background-color: transparent; border: teal 1px solid; color: teal; ; width: 9.5rem; height :2rem; font-size: 1.5rem"

myAddButton.innerHTML =" <b>+<b/>  Add"




let myDiv2 = document.createElement('div')
myDiv2.style = "height :10rem; display: flex; flex-direction: column; justify-content: space-evenly; align-items : center; "
let myH1 = myDiv2.appendChild(document.createElement('h1'));
myH1.style = "color: white; font-weight: bold; font-size: 1.75rem; margin:0; margin-bottom: 0.5rem";
myH1.textContent = "Ma Todo List"
let miniDiv = myDiv2.appendChild(document.createElement('div'))
for (let i = 0; i < 3; i++){
    let myButtons = miniDiv.appendChild(document.createElement('button'))
    myButtons.style = "background-color: teal; width: max-content; padding: 0.5rem; color:white; font-size: 1rem; margin: 0.5rem"
};
miniDiv.children[0].textContent = "Terminé";
miniDiv.children[1].textContent = "A faire";
miniDiv.children[2].textContent = "Tout";



let myDiv3 = document.createElement('div');
myDiv3.style = "width: 80%; heigth: max-content"

// let mySecret = myDiv3.appendChild(document.createElement("div"));
// mySecret.style = "background-color: blue; color: white; display: flex; justify-content: space-between; width: 100%; align-items: center"
// let myH2 = mySecret.appendChild(document.createElement('h2'));
// myH2.style = "margin: 0"
// myH2.textContent = "tache 1"
// let miniDiv2 = mySecret.appendChild
//     (document.createElement('div'));
//     miniDiv2.style = "display:flex; align-items: center; "
// for (let i = 0; i < 3; i++){
//    let mySButtons = miniDiv2.appendChild(document.createElement('button'));
//     mySButtons.style = "width: 2rem; height: 1.5rem; border-radius: 0.2rem; margin: 0.1rem; padding: 0.1rem"
// }

// miniDiv2.children[0].textContent = "ok"
// miniDiv2.children[1].textContent = "register"
// miniDiv2.children[2].textContent = "delete"





let myClearButton = document.createElement('button');
myClearButton.style = "height :2rem; width: 60%; font-size: 1.2rem; color: white; background-color: orangered; margin-bottom: 1rem"
myClearButton.textContent = "Clear List";



let myDiv4 = document.createElement('div');
myDiv4.style == "width : 100%; text-align: center"
let vertCler = myDiv4.appendChild(document.createElement('button'));
let vertFonce = myDiv4.appendChild(document.createElement("button"));

vertCler.style = "width: 2rem; border-radius: 50%; height: 2rem; border-radius: 50%; padding: 0.5rem; margin: 0.5rem; border: 1px white solid "
vertCler.id = "vertClair"
vertFonce.style = "width: 2rem; border-radius: 50%; height: 2rem; border-radius: 50%; padding: 0.5rem;  margin: 0.5rem; border: 1px white solid"
vertFonce.id = "vertFonce"






mySection.append(myDiv1, myDiv2, myDiv3, myClearButton, myDiv4)

export { mySection, myAddButton, myDiv3, myClearButton, myDiv2, miniDiv, vertFonce, vertCler, myDiv1, myInput}






























































// mySecret = myDiv3.appendChild(document.createElement("div"));
// mySecret.style = "background-color: white; color: grey ; display: flex; justify-content: space-between; width: 100%; align-items: center; margin: 0.2rem"
// let myH2 = mySecret.appendChild(document.createElement('input'));
// myH2.style = "margin: 0; background-color: transparent;  margin-left: 0.4rem; border: none;"
//     myH2.setAttribute('placeholder', `tache ${compteur}`)
//     myH2.setAttribute('disabled', true)
// compteur++
// let miniDiv2 = mySecret.appendChild
//     (document.createElement('div'));
//     miniDiv2.style = "display:flex; align-items: center; "
// for (let i = 0; i < 3; i++){
//    let mySButtons = miniDiv2.appendChild(document.createElement('button'));
//     mySButtons.style = "width: 2rem; height: 1.5rem; border-radius: 0.2rem; margin: 0.1rem; padding: 0.1rem; color: grey"
// }

// miniDiv2.children[0].innerHTML = '<i class="fas fa-check"></i>'
// miniDiv2.children[1].innerHTML ='<i class="far fa-edit"></i>'
//     // miniDiv2.children[2].innerHTML = '<i class="fa fa-solid fa-check"></i>'
//     miniDiv2.children[2].innerHTML = '<i class="fa fa-solid fa-trash"></i>'
    

//     miniDiv2.children[2].firstChild.style = "font-size : 1rem; width : 1rem; height: 1rem; ";
    
   
    
//     miniDiv2.children[0].addEventListener('click', (e) => {
        
//         e.target.parentElement.parentElement.classList.toggle('changer')
//         e.target.parentElement.previousSibling.classList.toggle("friendo")
//         e.target.parentElement.previousSibling.classList.toggle("white")
// })
    
// miniDiv2.children[1].addEventListener('click', (e) => {
        
//     e.target.parentElement.parentElement.querySelector("input").toggleAttribute("disabled");
//     e.target.parentElement.parentElement.querySelector("input").focus()
//     e.target.parentElement.parentElement.querySelector("input").setAttribute('placeholder', "modifications")
// })
    
// console.log(myH2);
//     mySecret.addEventListener('dblclick', (e) => {
//         if (e.target == myH2) {
//             myH2.toggleAttribute("disabled")
//             myH2.focus()
//             myH2.setAttribute('placeholder', "modifications")
//         }
        
//         // e.target.parentElement.parentElement.querySelector("input").toggleAttribute("disabled");
//         // e.target.parentElement.parentElement.querySelector("input").focus()
//  })

    
    
    
// miniDiv2.children[2].addEventListener('click', (e) => {
    
//     e.target.parentElement.parentElement.remove();
//     // compteur--;
// })