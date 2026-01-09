const foods = [
  { id: 1, name: "Bún bò", price: 30000 },
  { id: 2, name: "Cơm rang", price: 25000 },
  { id: 3, name: "Phở gà", price: 35000 },
  { id: 4, name: "Trà sữa", price: 20000 },
];

function renderFoods() {
  const box = document.getElementById("foods");
  box.innerHTML = "";
  foods.forEach((f) => {
    box.innerHTML += `
    <div class="food">
      <h4>${f.name}</h4>
      <p>${f.price.toLocaleString()}đ</p>
      <button onclick='addToCart(${JSON.stringify(f)})'>Thêm</button>
    </div>`;
  });
}
