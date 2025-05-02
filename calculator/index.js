
let input = document.querySelector('#display');
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(button);
       let btn=e.target.innerText;
       console.log(btn);
       
        if (btn=='AC') {
            input.value='';
        }
        else if(btn=='DEL'){
            input.value=input.value.slice(0,-1);

        }
        else if (btn === "=") {
            if (input.value) { 
                input.value = eval(input.value);
            }
        } else {
            input.value = input.value + btn;
         
        }

    })

});
