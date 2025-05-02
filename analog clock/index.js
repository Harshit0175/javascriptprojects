// let clock=document.querySelector('.clock');
let hour=document.querySelector('#hour');
let minute=document.querySelector('#minute');
let second=document.querySelector('#second');

function clock() {
    let date=new Date();
    console.log(date);
    
    let h=date.getHours()%12;
    let m=date.getMinutes();
    let s=date.getSeconds();
    
    let hrotation=30*h +(1/2) * m; // 360 / 12 = 30 degrees/hour, + 0.5 per minute
    console.log(hrotation);
    
    let mrotation=6*m + (6/60) * s;// 360 / 60 = 6 degrees/minute, + 0.1 per second
    console.log(mrotation); 
    let srotation=6*s;              // 360 / 60 = 6 degrees/second
    console.log(srotation);
    
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

    
}

setInterval(clock,1000);

