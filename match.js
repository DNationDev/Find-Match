
//grabing html elements for boxes, results, and hint classes
const boxes = document.querySelectorAll('.box-container')
const results = document.getElementById('result');
let hint = document.querySelector('.hint')

//empty array's 
let newBoxes = [];
let losingClick = [];
let winningClick = [];
let count = 6;

//load every function at window start up
window.addEventListener('DOMContentLoaded', e =>{
    
    results.innerHTML = count;
    addBoxes();
    revealBox();
     
})

//add id to boxes
const addBoxes = () =>{
    //loops through box elements
    boxes.forEach(box =>{
        newBoxes.push(box)
        let id = newBoxes.length;
        box.setAttribute('data-id', id);
        
    })
}


//gets random of a box
const randomBox = () =>{
    let ranID = 0;
    let ranBox = [];
    boxes.forEach(box =>{
        ranBox.push(box);
        //random id of a box
        ranID = Math.floor((Math.random() * ranBox.length + 1));
        
    }) 
    return ranID;
    
}

// give winning and losing conditions
function counter(){
    //condition if counter reaches 0
    if(losingClick.length <= 6){
        count--;
        results.innerHTML = count;
        if (losingClick.length === 6){
            results.innerHTML = 'You Lose';
            //runs 3 seconds after losing conditions are meet
            setTimeout(autoReset, 3000);
            
        }
    }

    //winning condition if user finds all characters
    if(winningClick.length === 3){
        results.innerHTML = 'You Win';
        setTimeout(autoReset, 3000);
        
    }
    //condition for hint element
    if(losingClick.length > 3){
        hint.innerHTML = `<p >Hint: Check dev tools </p>`
        
    }
}

//reveals images for winning or losing
const revealBox = () =>{

    //grab random id's for boxes
    let randomID1 = randomBox();
    let randomID2 = randomBox();
    let randomID3 = randomBox();
    boxes.forEach(box => {
        //creating images elements with attributes
        let goodBox = document.createElement('img')
        goodBox.setAttribute('src', 'pika.png');
        goodBox.classList.add('img-box');
        let badBox = document.createElement('img');
        badBox.setAttribute('src', 'redX.jpg')
        badBox.classList.add('img-box');

        //clicked element changes to good or bad box
        box.addEventListener('click', e =>{
            let id = e.currentTarget.dataset.id;
            let currentBox = e.currentTarget
            
            //developer tool hint
            console.log(id);
            console.log(randomID1, randomID2, randomID3);
            //if boxes are clicked and id's match append a goodbox
            if(id == randomID1) {
                
                currentBox.append(goodBox);
                
                winningClick.push(randomID1);
                counter();
            }else if(id == randomID2) {
                
                currentBox.append(goodBox);
                
                winningClick.push(randomID2);
                counter();
            }else if(id == randomID3) {
                
                currentBox.append(goodBox);
                winningClick.push(randomID3);
                counter();
            }else  {
                //add badbox when id's don't match
                currentBox.append(badBox);
                
                losingClick.push(id);
                counter();
            }
            
        })
    })
}

//comment here
/*const reset = () => {
    let resetBtn = document.querySelector('.reset');
    
    resetBtn.addEventListener('click', () =>{
        let boxImage = document.querySelectorAll('.img-box');
        boxImage.forEach(box =>{
            box.remove();
            
            count = 6;
            results.innerHTML = count;
            
            losingClick = [];
            winningClick = [];
        })
        
    })
}*/

const autoReset = () =>{
    /*let boxImage = document.querySelectorAll('.img-box');
    boxImage.forEach(box =>{
        box.remove();
        
        count = 6;
        results.innerHTML = count;
        
        losingClick = [];
        winningClick = [];
    })*/

    //Reloads the entired web page to restart the game.
    location.reload(); //reloads page
}


