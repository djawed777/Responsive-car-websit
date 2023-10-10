// var cards = document.querySelectorAll(".opt");
// var extbtn = document.getElementById("ext");
// var display = 1;

// function opencard() {
//   cards.forEach(function (card) {
//     if (display === 1) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });

//   display = 1 - display; // Toggle display between 0 and 1
// }

// extbtn.addEventListener("click", function () {
//   cards.forEach(function (card) {
//     card.style.display = "none";
//   });
//   display = 0; // Set display to 0 to ensure the card is hidden
// });

var optionButtons = document.querySelectorAll(".btn-options");
var cards = document.querySelectorAll(".opt");
var extbtns = document.querySelectorAll("#ext");

// Function open card options

optionButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    toggleCard(index);
  });
});

function toggleCard(index) {
  cards.forEach(function (card, cardIndex) {
    if (cardIndex === index) {
      card.style.display = card.style.display === "none" ? "block" : "none";
    } else {
      card.style.display = "none";
    }
  });
}
//------------------------------------------------

// function close the card options
extbtns.forEach(function (extbtn) {
  extbtn.addEventListener("click", function () {
    closeCard();
  });
});

function closeCard() {
  cards.forEach(function (card) {
    card.style.display = "none";
  });
}

// -------------------------------------

let section = document.querySelector(".our-data");
let nums = document.querySelectorAll(".num");
let started = false;

window.addEventListener("scroll", function () {
  if (isInViewport(section) && !started) {
    nums.forEach((num) => startCount(num));
    started = true;
  }
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCount(el) {
  let goal = el.dataset.goal;

  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

// Form sent data function with using API

var form = document.getElementById("sent");
var msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sent")),
  }).then((response) => {
    msg.innerHTML = "Sent Is Successful";

    setTimeout(function () {
      msg.innerHTML = "";
    }, 2000);
    form.reset();
  });
});
// ------------------------------
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(form.action, {
//       method : "POST",
//       body: new FormData(document.getElementById("sheetdb-form")),
//   }).then(
//       response => {
//         msg.innerHTML = "Thank You ! , Your Data Has Sent Successflly";
//         setTimeout(function () {
//           msg.innerHTML = ""
//         }, 4000)
//         form.reset();
//       }
//   )
// });
