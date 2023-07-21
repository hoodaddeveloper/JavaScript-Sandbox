///// JavaScript Code for checking and Confirming Password
const msg = document.querySelector("#message"); // Select Message Element
const pass = document.querySelector("#password"); // Select Password Element
const confirmPass = document.querySelector("#confirm-password"); //Select Confirm Password Element

const checkPass = (e) => {
  // Function to check if password is correct
  if (pass.value == confirmPass.value) {
    // If password and confirm password are equal
    msg.style.color = "green"; // Set message color to green
    msg.innerHTML = "<i>Matching!</i>"; // Show the message "Matching!" in italic
  } else {
    msg.style.color = "red"; // Change message color to red
    msg.innerHTML = "<i>Not Matching!</i>"; // Show the message "Not Matching!" in italic
  }
};

///// Practicing DOM with Form Elements

/* const form = document.querySelector("form");
form.firstElementChild.innerText = "New Title from DOM"; // Changing the title of the form (h1)
form.children[0].innerHTML = "<h5>New Title from DOM</h5>"; // Changing the tag of the first element in the form h1 to h5
form.lastElementChild.remove(); // Removing the last element of the form (reset button) */

/* const btn = document.querySelector("#button");
btn.forEach(btn => btn.style.background = "orange"); // Changing the background of all the buttons to red */