function getUsers(){
  return JSON.parse(localStorage.getItem("users")) || [];
}
function saveUsers(users){
  localStorage.setItem("users", JSON.stringify(users));
}

// ĐĂNG KÝ
function register(){
  let u = username.value.trim();
  let p = password.value.trim();

  if(!u || !p) return alert("Nhập đầy đủ");

  let users = getUsers();
  if(users.find(x=>x.username===u))
    return alert("Tài khoản đã tồn tại");

  users.push({username:u,password:p});
  saveUsers(users);
  alert("Đăng ký thành công");
  location.href="login.html";
}

// ĐĂNG NHẬP
function login(){
  let u = username.value.trim();
  let p = password.value.trim();
  let users = getUsers();

  let user = users.find(x=>x.username===u && x.password===p);
  if(!user) return alert("Sai tài khoản hoặc mật khẩu");

  localStorage.setItem("currentUser", u);
  location.href="index.html";
}

// ĐĂNG XUẤT
function logout(){
  localStorage.removeItem("currentUser");
  location.href="login.html";
}
