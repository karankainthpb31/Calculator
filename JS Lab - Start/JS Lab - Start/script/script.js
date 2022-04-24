



function addValue(){
    var value1= document.getElementById('input_a').value;
    var value2= document.getElementById('input_b').value;
    if(value1=="" || value2==""){
        alert("Please fill all the operands");
    }
    else
    {
          if(isNaN(value1) || isNaN(value2))
         {
         alert("Please enter a valid number")           
         }
         else
         {
             value1Int=parseInt(value1);
             value2Int=parseInt(value2);

            var finalValue= value1Int + value2Int;

            document.getElementById('displayResult').innerHTML = value1 +" + "+ value2+" = "+finalValue;

         }
     }
   
}


function mulValue(){

    var value1= document.getElementById('input_a').value;
    var value2= document.getElementById('input_b').value;
    if(value1=="" || value2==""){
        alert("Please fill all the operands");
    }
    else
    {
          if(isNaN(value1) || isNaN(value2))
         {
         alert("Please enter a valid number")           
         }
         else
         {
             value1Int=parseInt(value1);
             value2Int=parseInt(value2);

            var finalValue= value1Int * value2Int;

            document.getElementById('displayResult').innerHTML = value1 +" * "+ value2+" = "+finalValue;

         }
     }
   
}

function divValue(){
    var value1= document.getElementById('input_a').value;
    var value2= document.getElementById('input_b').value;
    if(value1=="" || value2==""){
        alert("Please fill all the operands");
    }
    else
    {
          if(isNaN(value1) || isNaN(value2))
         {
         alert("Please enter a valid number")           
         }
         else
         {
             value1Int=parseInt(value1);
             value2Int=parseInt(value2);

            var finalValue= value1Int / value2Int;

            document.getElementById('displayResult').innerHTML = value1 +" / "+ value2+" = "+finalValue;

         }
     }
   
}

function subValue(){
    var value1= document.getElementById('input_a').value;
    var value2= document.getElementById('input_b').value;
    if(value1=="" || value2==""){
        alert("Please fill all the operands");
    }
    else
    {
          if(isNaN(value1) || isNaN(value2))
         {
         alert("Please enter a valid number")           
         }
         else
         {
             value1Int=parseInt(value1);
             value2Int=parseInt(value2);

            var finalValue= value1Int - value2Int;

            document.getElementById('displayResult').innerHTML = value1 +" - "+ value2+" = "+finalValue;

         }
     }
   
}

function Clear(){
    document.getElementById('displayResult').innerHTML=" ";

}
