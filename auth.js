// ĐĂNG KÝ
function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Vui lòng nhập đầy đủ!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find((u) => u.username === username)) {
    alert("Tài khoản đã tồn tại!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công!");
  window.location.href = "login.html";
}

// ĐĂNG NHẬP
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    alert("Sai tài khoản hoặc mật khẩu!");
    return;
  }

  localStorage.setItem("currentUser", user.username);
  localStorage.setItem("loginTime", new Date().toLocaleString());

  window.location.href = "index.html";
}
