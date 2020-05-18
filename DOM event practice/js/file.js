let button1 = document.getElementById("btn1");
let exerciseInput = document.getElementById("name");
let caloriesInput = document.getElementById("quantity");
let button2 = document.getElementById('btn2');
let ul = document.getElementById('ul');
let exerciseName =  exerciseInput.value;
let caloriesQuantitiy = caloriesInput.value;

button1.addEventListner("click", function (exerciseName, caloriesQuantity)  {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(exerciseName + caloriesQuantity));
    ul.appendChild(li);
    caloriesInput.value && exerciseInput.value = "";


})
