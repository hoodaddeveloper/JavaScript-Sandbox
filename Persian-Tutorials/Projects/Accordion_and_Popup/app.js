///// Starting with the DOM /////

// The DOM is the structure of the web page.
// The DOM is the tree of elements that make up the web page.
// Document Object Model (DOM) is a programming interface for HTML and XML documents.

///// First way to access the Elements /////

/* let header = document.getElementById("header"); // Get the header element.
header.style.color = "lightblue"; // Change the color of the header.

let content = document.getElementsByClassName("content"); // Get all the content elements.
content[0].style.color = "green"; // Change the color of the first content element.
content[1].style.color = "purple"; // Change the color of the second content element.
content[0].style.fontSize = "20px"; // Change the font size of the first content element.
content[1].style.fontSize = "14px"; // Change the font size of the second content element.

let paragraph = document.getElementsByTagName("p"); // Get all the paragraph elements.
paragraph[0].style.fontStyle = "italic"; // Change the font style of the first paragraph element.
paragraph[2].style.fontStyle = "italic"; // Change the font style of the third paragraph element.

paragraph[0].innerText = "Edited: This Paragraph edited by JS!"; // Change the text of the second paragraph element.

///// Second way to access the Elements by QuerySelector & QuerySelectorAll /////

header = document.querySelector("#header"); // Get the header element.
header.style.color = "purple"; // Change the color of the header.

content = document.querySelectorAll(".content"); // Get the first content element.
content.forEach(content => content.style.color = "green"); // Change the color of the content elements.

paragraph = document.querySelectorAll("p"); // Get the first paragraph element.
paragraph.forEach((paragraph) => (paragraph.style.color = "blue")); // Change the color of the paragraph elements.

let query1 = document.querySelector("body > div > div > div > ul > li:nth-child(2)"); // Get the third list item.
query1.style.color = "red"; // Change the color of the third list item.

let query2 = document.querySelector("body > div > div > div > ul > li:nth-child(3)"); // Get the fourth list item.
query2.style.color = "purple"; // Change the color of the fourth list item. */

///// Edit Elements /////

/* let lists = document.querySelectorAll("li");
lists.forEach(lists => lists.innerHTML += ` <span class="badge badge-warning">New</span>`
  lists.innerText += " You"
  lists.textContent += " The"
); */

///// Create Elements /////

let people = [
  { name: "Hoodad", new: false },
  { name: "Hessam", new: true },
  { name: "Hossein", new: false },
  { name: "Hasan", new: true },
];

function createNavbar() {
  let ul = document.querySelector("ul");
  people.forEach((people) => {
    if (people.new) {
      ul.innerHTML += `<li>${people.name} <span class="badge badge-warning">new</span></li>`;
    } else {
      ul.innerHTML += `<li>${people.name}</li>`;
    }
  });
}

/* createNavbar(); // Create the navbar.
ul.innerHTML = ""; // Clear the navbar. */

people.push({ name: "Hamed", new: false }, { name: "Hashem", new: true }); // Add new people to the navbar.
createNavbar(); // Create the navbar again.

let header = document.querySelector("#header"); // Get the header element.

// console.log(header.getAttribute("id")); // Get the id of the header element.
header.setAttribute("title", "My Header"); // Set the title of the header element.

let links = document.querySelectorAll("a");

links.forEach((links) => {
  // let href = links.getAttribute("href"); // Get the href of the links.
  // links.setAttribute("href", href.replace("http://", "https://")); // Replace the http:// with https://.
  // Or:
  let href = links.href; // Get the href of the links.
  links.href = href.replace("http://", "https://"); // Replace the http:// with https://.
  ///// GetAttributes or Dataset /////
  links.setAttribute(
    "style",
    "color: orange; font-size: 20px; font-style: italic;"
  ); // Set the style of the links.
  // Or:
  let ul = document.querySelector("ul"); // Get the ul element.
  ul.style.color = "green"; // Set the color of the ul element.
  ul.style.fontSize = "18px"; // Set the font size of the ul element.
  ul.style.fontStyle = "italic"; // Set the font style of the ul element.
});

header.classList.add("m-3"); // Add the m-3 class to the header element.
// header.classList.remove("btn-success"); // Remove the btn-success class from the header element.

let lists = document.querySelectorAll("li");
lists.forEach((lists) => {
  if (lists.textContent.includes("Primary")) {
    lists.classList.add("text-primary");
  }

  if (lists.textContent.includes("Danger")) {
    lists.classList.add("text-danger");
  }

  if (lists.textContent.includes("Warning")) {
    lists.classList.add("text-warning");
  }
});

let paragraph = document.getElementsByTagName("p"); // Get all the paragraph elements.
paragraph[0].style.fontSize = "20px"; // Change the font style of the first paragraph element.

ul = document.querySelector("ul");

/* Array.from(ul.children).forEach((li, index) => { // Get the children of the ul element.
  if (index % 2 == 0) { // If the index is even.
    li.style.color = "red"; // Change the color of the li element.
  } else {
    li.style.color = "green"; // Change the color of the li element.
  }
}); */

// ul.parentElement.style.color = "blue"; // Change the color of the parent element of the ul element.
// ul.nextElementSibling.style.color = "darkgreen"; // Change the color of the next element sibling of the ul element.
// ul.previousElementSibling.style.color = "gray"; // Change the color of the previous element sibling of the ul element.

///// Events /////

let btn = document.querySelector("button"); // Get the button element.

btn.addEventListener("click", (e) => {
  // Add an event listener to the button element.
  e.target.textContent = "danger!"; // Change the text of the button element.
  e.target.classList.add("btn-danger"); // Add the btn-danger class to the button element.
});

let headerBtn = document.querySelector("h1"); // Get the h1 element.

headerBtn.addEventListener("click", (e) => {
  // Add an event listener to the h1 element.
  e.target.textContent = "YES?"; // Change the text of the h1 element.
  alert("You clicked the header!"); // Show an alert.
});

let el = document.createElement("div"); // Create a new div element.
document.querySelector(".content").prepend(el); // Add the div element to the content element.

/* let el = document.createElement("div"); // Create a new div element.
el.textContent = "Yeesss"; // Set the text of the div element.
document.querySelector(".content").append(el); // Add the div element to the content element. */

window.addEventListener("online", (event) => {
  // Add 'online' event listener to the window element.
  el.textContent = "You are now connected to the network.";
  el.className = "alert";
  el.classList.add("alert-success");
});

window.addEventListener("offline", (event) => {
  // Add 'offline' event listener to the window element.
  el.textContent = "The network connection has been lost.";
  el.className = "alert";
  el.classList.add("alert-danger");
});

///// Accordions /////

let accordions = document.querySelectorAll(".accordion"); // Get the accordion element.

accordions.forEach((accordion) => {
  Array.from(accordion.children).forEach((wrapper) => {
    if (wrapper.classList.contains("show")) {
      wrapper.querySelector("div").style.maxHeight =
        wrapper.querySelector("div").scrollHeight + 30 + "px";
    }

    wrapper.querySelector("span").addEventListener("click", (e) => {
      let span = e.target;
      let wrapper = span.parentElement;
      let div = span.nextElementSibling;
      wrapper.classList.toggle("show");

      if (wrapper.classList.contains("show")) {
        div.style.maxHeight = div.scrollHeight + 30 + "px";
      } else {
        div.style.maxHeight = null;
      }

      Array.from(accordion.children).forEach((w) => {
        if (w != wrapper) {
          w.classList.remove("show");
          w.querySelector("div").style.maxHeight = null;
        }
      });
    });
  });
});

///// Arrow Codes /////

let scroll = document.querySelector("button.scroll"); // Get the scroll element.
let scroll2 = document.querySelector("button.scroll2"); // Get scroll2 element.

///// Scroll 1 Codes /////

window.addEventListener("scroll", (e) => {
  if ((window.scrollY > 500) & (window.scrollY < 1000)) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
});

scroll.addEventListener("click", (e) => {
  if (scroll.classList.contains("show")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

///// Scroll 2 Codes /////

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 1000) {
    scroll2.classList.add("show");
  } else {
    scroll2.classList.remove("show");
  }
});

scroll2.addEventListener("click", (e) => {
  if (scroll2.classList.contains("show")) {
    document.querySelector("#art").scrollIntoView({ top: 0, behavior: "smooth" });
  }
});

/// Pop-up Box ///

// Opening Pop-Up
let popupBtn = document.querySelector(".popup-btn");
popupBtn.addEventListener("click", (e) => {
  document.querySelector(".popup").classList.add("show");
  document.querySelector(".popup-wrapper").classList.add("show");
});

// Creating new Element "Popup Wrapper"
if (popupBtn) {
  // If we click on this Button
  var popupWrapper = document.createElement("div");
  popupWrapper.className = "popup-wrapper";
  document.body.prepend(popupWrapper);
}

// Closing Pop-Up
let popupCloses = document.querySelectorAll(".popup-close");

popupCloses.forEach((popupCloses) => {
  popupCloses.addEventListener("click", (e) => {
    document.querySelector(".popup").classList.remove("show");
    popupWrapper.classList.remove("show");
  });

  popupWrapper.addEventListener("click", (e) => {
    document.querySelector(".popup").classList.remove("show");
    popupWrapper.classList.remove("show");
  });
});

// Codes for changing themes
let theme = document.querySelector(".theme");
let selection = document.querySelector("#selection");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let span4 = document.querySelector(".span4");
let span5 = document.querySelector(".span5");
let span6 = document.querySelector(".span6");
let span7 = document.querySelector(".span7");
let span8 = document.querySelector(".span8");
let span9 = document.querySelector(".span9");
let span10 = document.querySelector(".span10");

Array.from(theme.children).forEach((theme) => {
  theme.addEventListener("click", (e) => {
    let color = e.target.dataset.color;
    document.body.className = color;
    selection.textContent = color;
    span1.style.color = "black";
    span2.style.color = "black";
    span3.style.color = "black";
    span4.style.color = "black";
    span5.style.color = "black";
    span6.style.color = "black";
    span7.style.color = "black";
    span8.style.color = "black";
    span9.style.color = "black";
    span10.style.color = "black";
  });
});
