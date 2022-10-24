const list = [];

function addItem() {
  document.querySelector("ul").remove();
  console.log("added item");
  const inputItem = document.getElementById("inputItem").value;
  list.push(inputItem);

  createList();
};

function deleteItem() {
  console.log("removed item");
  document.querySelector("ul").remove();
  const deleteItem = document.getElementById("deleteItem").value;

  const index = list.indexOf(deleteItem);
  if (index >= 0) {
    list.splice(index, 1);
  }
  else {
    window.alert("Itme not in the list");
  }

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
  this.document.getElementById("add").addEventListener("click", addItem);
  this.document.getElementById("delete").addEventListener("click", deleteItem);
});