const list = [];

function addItem(event) {
  event.preventDefault();
  document.querySelector("ul").remove();
  console.log("added item");
  const inputItem = document.getElementById("inputItem").value;
  document.getElementById("inputItem").value = "";
  list.push(inputItem);
  list.sort();

  createList();
};

function deleteItem(event) {
  event.preventDefault();
  console.log("removed item");
  document.querySelector("ul").remove();
  const deleteItem = document.getElementById("deleteItem").value;
  document.getElementById("deleteItem").value = "";
  const index = list.indexOf(deleteItem);
  if (index >= 0) {
    list.splice(index, 1);
  }
  else {
    window.alert("Item not in the list");
  }
  list.sort();
  
  createList();
};

function createList() {
  const ul = document.createElement("ul");
  list.forEach(function (item) {
    const li = document.createElement("li");
    li.append(item);
    ul.append(li);
  })
  document.querySelector("h3").after(ul);
}



window.addEventListener("load", function () {
  this.document.getElementById("add-to").addEventListener("submit", addItem);
  this.document.getElementById("remove-from").addEventListener("submit", deleteItem);
});