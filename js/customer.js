import { db } from "./firebase.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function createRide(customerId, pickup, destination, price) {
  await addDoc(collection(db, "rides"), {
    customerId,
    pickup,
    destination,
    price,
    status: "waiting",
    createdAt: Date.now(),
  });

  alert("Đã gửi yêu cầu đặt xe");
}
