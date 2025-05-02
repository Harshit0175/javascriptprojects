
let input = document.querySelector('.input');
let container = document.querySelector('.container');



function add() { 
    if (input.value == "") {
        console.log("hii");
        // alert("enter text");

    }
    else {
        let ele = document.createElement("ul");
        ele.innerHTML = `${input.value} <i class="bi bi-trash-fill"></i>`;
        container.appendChild(ele);
        input.value = "";
        let trash=ele.querySelector("i");
        trash.addEventListener("click",function remove() {
            ele.remove()
            
        })
    }


}
