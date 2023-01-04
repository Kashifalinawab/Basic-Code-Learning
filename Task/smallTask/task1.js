
 function getNumber(){
    let num1=Number(document.querySelector("#num1").value);
    let num2=Number(document.querySelector("#num2").value);
    return [num1,num2]
 }
 
 
function add(){

    let numbers=getNumber();
     console.log(getNumber());
     alert(numbers[0]+numbers[1])
   
}


function sub(){
    let numbers=getNumber();
     console.log(getNumber());
     alert(numbers[0]-numbers[1])
   
}

function mul(){
    let numbers=getNumber();
     console.log(getNumber());
     alert(numbers[0]*numbers[1])
}


function div(){
  
    let numbers=getNumber();
     console.log(getNumber());
     alert(numbers[0]/numbers[1])
}


function pow(){
    let numbers=getNumber();
    let result=1
    for (let i=0;i<numbers[1];i++) {
        result*=numbers[0]
    }
    console.log(result);
    alert(result)
}

// function root(){
//     let numbers=getNumber();
//     let result=1
//     for (let i=0;i<numbers[1];i++) {
//         result/=numbers[0]
//     }
//      console.log(result);
//      alert(result)
// }
