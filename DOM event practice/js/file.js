var addButton = document.getElementById("btn1");
var clearButton = document.getElementById("btn2");
var name = document.getElementById("name");
var calories = document.getElementById("quantity");
var ul = document.getElementById("ul");
var ul2 = document.getElementById("ul2");


//function addLi2() {
    //var calories = document.getElementById("quantity")
   // var li2 = document.createElement("li2");
   // li2.appendChild(document.createTextNode(quantity.value));
   // ul2.appendChild(li2);
   // name.value = "";
//}

//function addLi() {
   // var name = document.getElementById("name");
   // var li = document.createElement("li");
       // li.appendChild(document.createTextNode(name.value));
  //  ul.appendChild(li);
   // name.value = "";
//}

addButton.addEventListener("click", function (e)  {
    e.preventDefault()
    var name = document.getElementById("name");
    var calories = document.getElementById("quantity")



    if (name.value.length > 0 && quantity.value > 0) {
        //var name = document.getElementById("name");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(name.value));
        ul.appendChild(li);
        name.value = ""


        var li2 = document.createElement("li");
        li2.appendChild(document.createTextNode(calories.value));
        ul2.appendChild(li2);
        calories.value = "";
        }

});


clearButton.addEventListener("click", function (e) {
   e.preventDefault()

    var name = document.getElementById("name");
    var ul = document.getElementById("ul");
    var name = document.getElementById("quantity");
    var ul2 = document.getElementById("ul2");



    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
    while (ul2.lastElementChild) {
        ul2.removeChild(ul2.lastElementChild);
    }

    name.value = "";
    quantity.value = "";
});

