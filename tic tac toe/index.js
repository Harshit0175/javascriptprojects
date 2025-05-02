
let boxes=1;
function mydata(data){
    if(boxes<=9){
        if(boxes%2==0){
            document.getElementById(data.id).innerHTML='o';
        }else{
            document.getElementById(data.id).innerHTML='x';
        }
        boxes++;
        if(win()){
            alert('winner :');
            reset()

        }
        
    }
    else{
        alert("match drawn")
        reset()
    }
    function win(){
        if(check('one','two','three')||check('one','three','seven')||check('one','five','nine')||check('two','five','eight')||check('three','six','nine')||check('four','five','six')||check('three','five','seven')||check('seven','eight','nine')){
            return true;

        }

    }
   
}
function check(one,two,three){
if(document.getElementById(one).innerHTML!=''&& document.getElementById(two).innerHTML!=''&& document.getElementById(three).innerHTML!=''&& document.getElementById(one).innerHTML==document.getElementById(two).innerHTML&& document.getElementById(two).innerHTML==document.getElementById(three).innerHTML){
    return true;
}

}

function reset(){
    location.reload()
}
