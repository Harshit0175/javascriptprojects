document.querySelector('.btn').addEventListener('click',()=>{
    
    let randomcolor=Math.floor(Math.random()*16777215);
    let randomcode='#'+randomcolor.toString(16)
    document.body.style.background=randomcode;
    document.querySelector('.code').innerText=randomcode
    console.log(randomcolor,randomcode);


    
})