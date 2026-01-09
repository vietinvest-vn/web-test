import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function registerUser(email, password, role) {
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", user.user.uid), {
    role,
    createdAt: Date.now(),
  });

  if (role === "driver") {
    await setDoc(doc(db, "drivers", user.user.uid), {
      approved: false,
      online: false,
    });
  }

  alert("Đăng ký thành công");
  location.href = "login.html";
}

export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const uid = userCredential.user.uid;

  const snap = await getDoc(doc(db, "users", uid));
  const role = snap.data().role;

  if (role === "customer") location.href = "index.html";
  if (role === "driver") location.href = "driver.html";
  if (role === "admin") location.href = "admin.html";
}
