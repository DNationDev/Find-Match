

const boxes = document.querySelectorAll('.box-container')
const results = document.getElementById('result');
let hint = document.querySelector('.hint')

let newBoxes = [];
let losingClick = [];
let winningClick = [];
let count = 6;

window.addEventListener('DOMContentLoaded', e =>{
    
    results.innerHTML = count;
    addBoxes();
    revealBox();
     
})

const addBoxes = () =>{
    boxes.forEach(box =>{
        newBoxes.push(box)
        let id = newBoxes.length
        box.setAttribute('data-id', id);
        
    })
}

const randomBox = () =>{
    let ranID = 0;
    let ranBox = []
    boxes.forEach(box =>{
        ranBox.push(box);
        ranID = Math.floor((Math.random() * ranBox.length + 1));
        
    }) 
    return ranID;
    
}

function counter(){
    
    if(losingClick.length <= 6){
        count--;
        results.innerHTML = count;
        if (losingClick.length === 6){
            results.innerHTML = 'You Lose';
            setTimeout(autoReset, 3000);
            
        }
    }
    if(winningClick.length === 3){
        results.innerHTML = 'You Win';
        setTimeout(autoReset, 3000);
        
    }
    if(losingClick.length > 3){
        hint.innerHTML = `<p >Hint: Check dev tools </p>`
        
    }
}

const revealBox = () =>{
    let randomID1 = randomBox();
    let randomID2 = randomBox();
    let randomID3 = randomBox();
    boxes.forEach(box => {
        let goodBox = document.createElement('img')
        goodBox.setAttribute('src', 'pika.png');
        goodBox.classList.add('img-box');
        let badBox = document.createElement('img');
        badBox.setAttribute('src', 'redX.jpg')
        badBox.classList.add('img-box');

        box.addEventListener('click', e =>{
            let id = e.currentTarget.dataset.id;
            let currentBox = e.currentTarget
            

            console.log(id);
            console.log(randomID1, randomID2, randomID3);
            if(id == randomID1) {
                
                currentBox.append(goodBox);
                
                winningClick.push(randomID1);
                
            }else if(id == randomID2) {
                
                currentBox.append(goodBox);
                
                winningClick.push(randomID2);
                
            }else if(id == randomID3) {
                
                currentBox.append(goodBox);
                winningClick.push(randomID3);
                counter();
            }else  {
                
                currentBox.append(badBox);
                
                losingClick.push(id);
                counter();
            }
            
        })
    })
}

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
    location.reload(); //reloads page
}


