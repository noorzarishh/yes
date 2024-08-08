 let inputBox = document.getElementById("input-box");
 let buttons = document.querySelectorAll("button");

 let result = "";

 let arr = Array.from(buttons);

 
  arr.forEach(button =>{

        button.addEventListener("click",(e)=>{
            if(e.target.innerHTML == "="){
               result = eval(result);
               inputBox.value = result;
            }else if(e.target.innerHTML == "AC"){
                 result = "";
                  inputBox.value = result;
            }else if (e.target.innerHTML == "DEL"){
                       result = result.substring(0,result.length-1);
                           inputBox.value = result;
            } else{ result += e.target.innerHTML;
               inputBox.value = result;

            }

        })


  }  )


