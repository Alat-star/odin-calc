function add (a, b) {
    return +a + +b;
}

function subtract (a, b) {
    return +a - +b;
}

function divide (a, b) {
    return +a / +b;
}

function multiply (a, b) {
    let arr = [];
    arr.push(+a);
    arr.push(+b);
   return  arr.reduce( (obj, num) => {
        return obj *= num;
    });
}



function operate ( op, num1, num2) {
     add(num1, num2);
}
console.log(operate( 6, 7));
let holder = [];
let holderTwo = [];
const screen = document.querySelector('input');
const inputs = document.querySelectorAll('.num');
inputs.forEach( num => {
    num.addEventListener('click', () => {
        screen.value += num.textContent;
        holder.push(screen.value);
        console.log(holder);
        screen.value;  
       
    });
});

const clearAll = document.querySelector('.clear');

function clear () {
   screen.value = '';
   holder = [];
   holderTwo = [];
   anws = 0;
   return screen.value;
}

clearAll.addEventListener('click', clear);

const signOp = document.querySelectorAll('.op');


let opTemp = 'ab';
let holderOutput;
let holderOutputTwo;

signOp.forEach( sign => {
    sign.addEventListener('click', () => {
        opTemp = sign.textContent;
        console.log(opTemp);
        holderOutput = holder[holder.length-1];
        console.log(holderOutput);
        screen.value = '';
        holder = [];
        /*inputs.forEach( input => {
            input.addEventListener ('click', () => {
                
                holderTwo.push(screen.value);
                console.log(holderTwo);
                
                
            })
        })*/
        
    })
      
    
});

let anwStorage;
let anws;

const eval = document.querySelector('.eval-op');

eval.addEventListener('click', () => {
    holderOutputTwo = holder[holder.length - 1];
    //console.log(holderOutputTwo);
    
    switch (opTemp) {
        
        case '+' :
          if (anws) {
            screen.value = add(anws, holderOutputTwo);
            anws = add(anws, holderOutputTwo);
            break;
            
          }
          screen.value = add (holderOutput, holderOutputTwo);
          anws = add (holderOutput, holderOutputTwo);
          console.log(anw)
          break;

        case '-' :
            if (anws) {
                screen.value = subtract(anws, holderOutputTwo);
                anws = subtract (anws, holderOutputTwo);
                break;

            }
            screen.value = subtract(holderOutput, holderOutputTwo);
            anws = subtract(holderOutput, holderOutputTwo);
            break;

        case '*' :
            if (anws) {
              screen.value = multiply(anws, holderOutputTwo);
              anws = multiply (anws, holderOutputTwo);
              break;

            }
            screen.value = multiply(holderOutput, holderOutputTwo);
            anws = multiply(holderOutput, holderOutputTwo);
            break;

        case '/' :
            if (anws) {
                screen.value = divide(anws, holderOutputTwo);
                anws = divide (anws, holderOutputTwo);
                break;

            }
            screen.value = divide (holderOutput, holderOutputTwo);
            anws = divide (holderOutput, holderOutputTwo);
            break;

    }
})





