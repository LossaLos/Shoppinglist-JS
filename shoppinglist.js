const itemInput = document.getElementById("item");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

addButton.addEventListener("click", function() {
  const item = itemInput.value;

  if (!item) return;
    const li = document.createElement("li");
    const removeButton = document.createElement("button");
        removeButton.innerHTML = "Delete";
        removeButton.addEventListener("click", function() {
            li.remove();
  });
  li.innerHTML = item;
  li.appendChild(removeButton);
  list.appendChild(li);
  itemInput.value = "";
});