

let input=document.querySelector('.input');
let todo=document.querySelector('.todo');
let btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    if(input.value==''){
        console.log('hii');
    }
    else{
        if (input.value==input.value) {
        let elem=document.createElement('ul');
        elem.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        todo.appendChild(elem);
        input.value='';

        let element=elem.querySelector('i')
        element.addEventListener("click",()=>{
            elem.remove();
        })
          }
        
    }
})

