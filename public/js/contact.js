import { db, collection, addDoc } from "./firebase.js";

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("submitterName").value.trim();
    const email = document.getElementById("submitterEmail").value.trim();
    const message = document.getElementById("submitterMessage").value.trim();

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;

    if (name === "") {
      document.getElementById("nameError").classList.remove("hidden");
      valid = false;
    } else {
      document.getElementById("nameError").classList.add("hidden");
    }

    if (!emailRegex.test(email)) {
      document.getElementById("emailError").classList.remove("hidden");
      valid = false;
    } else {
      document.getElementById("emailError").classList.add("hidden");
    }

    if (message === "") {
      document.getElementById("messageError").classList.remove("hidden");
      valid = false;
    } else {
      document.getElementById("messageError").classList.add("hidden");
    }

    if (valid) {
      try {
        let userMessage = await addDoc(collection(db, "userMessages"), {
          userName: name,
          userEmail: email,
          userMessage: message,
        });

        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "Thanks for reaching out.",
          confirmButtonColor: "#4F46E5",
        });

        document.getElementById("contactForm").reset();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again later.",
          confirmButtonColor: "#DC2626",
        });
      }
    }
  });
