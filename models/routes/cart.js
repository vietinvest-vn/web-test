function addToCart(food) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(food);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm!");
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  list.innerHTML = "";
  cart.forEach((f, i) => {
    total += f.price;
    list.innerHTML += `<p>${f.name} - ${f.price}đ</p>`;
  });
  sum.innerText = total.toLocaleString() + "đ";
}
function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const total = cart.reduce((s, f) => s + f.price, 0);

  orders.push({
    id: Date.now(),
    user: localStorage.getItem("currentUser"),
    items: cart,
    total: total,
    status: "pending",
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("orderTotal", total);
  location.href = "qr.html";
}
