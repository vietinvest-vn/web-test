const users = JSON.parse(localStorage.getItem("users")) || [];
const u = localStorage.getItem("currentUser");
const user = users.find((x) => x.username === u);
if (!user || user.role !== "admin") {
  alert("Không có quyền!");
  location.href = "index.html";
}
let foods = JSON.parse(localStorage.getItem("foods")) || [];

function addFood() {
  foods.push({
    id: Date.now(),
    name: name.value,
    price: Number(price.value),
  });
  localStorage.setItem("foods", JSON.stringify(foods));
  render();
}

function del(id) {
  foods = foods.filter((f) => f.id !== id);
  localStorage.setItem("foods", JSON.stringify(foods));
  render();
}

function render() {
  list.innerHTML = "";
  foods.forEach((f) => {
    list.innerHTML += `
    <p>${f.name} - ${f.price}đ
    <button onclick="del(${f.id})">X</button></p>`;
  });
}
render();
