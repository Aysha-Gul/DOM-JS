var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener("click", removeItem);
//Filter event
filter.addEventListener("keyup", filterItems);
//Add Item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;

  //Create new li element
  var li = document.createElement("li");
  //Add class
  li.className = "list-group-item";
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del button element
  var deleteBtn = document.createElement("button");
  //Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get list
  var items = itemList.getElementsByTagName("li");
  //Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}






//GetElementById()
// const title = document.getElementById("main-heading");
// console.log(title);

//GetElementByClassName()
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

//GetElementByTagName
// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

//querySelector
// const container = document.querySelector("div");
// console.log(container);

//If you have multiple items with same class name, id or tag It selects the first item that matches the selector that comes across

//querySelectorAll
// const container = document.querySelectorAll("div");
// console.log(container); //for 2 div containers in index.html

//Styling an Element
//const title = document.querySelector("#main-heading");
//title.style.color = "red"; //Inline styling works on one element
//console.log(title);

//Styling a list of Elements
// const listItems = document.querySelectorAll(".list-items");

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "2rem";
// }
// console.log(listItems);
