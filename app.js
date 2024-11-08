/*image slider*/
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 7000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 9000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};

/* Disable Right Click*/
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
/*Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U)*/
document.addEventListener('keydown', function(e) {
    // Disable F12 (Inspect)
    if (e.keyCode === 123) {
      e.preventDefault();
    }
    // Disable Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
    }
  });
  function goBack() {
    window.history.back(); /* Navigates back to the previous page */
}

// Function to open modal with the clicked image
function openModal(element) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  
  modal.style.display = "flex";
  modalImg.src = element.src;
}
// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// JavaScript for opening and closing the popup
function openPopup() {
  document.getElementById("popupOverlay").style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable scroll when popup is open
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scroll when popup is closed
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzBBCbPSUxF2dPkkcFkrsLlr0KH3r7VNhP6zXrOhP3QrcHxQ5JRxcpG4hS8Mim-h5--/exec'; // Replace 'Your URL will be here' with the URL of your Google Apps Script
const form = document.forms['submit-to-google-sheet'];
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
function submitAndReset(event) {
event.preventDefault(); // Prevents default submission for custom handling

// Simulate form submission (e.g., sending data to a server).
setTimeout(() => {
document.getElementById("myForm").reset(); // Resets the form after submission
alert("Form submitted and reset!"); // Optional confirmation message
}, 1000); // Delay for example purposes, remove or replace with actual submission logic
}
function submitAndReset(event) {
event.preventDefault(); // Prevents default submission for custom handling

// Simulate form submission (e.g., sending data to a server).
setTimeout(() => {
document.getElementById("myForm").reset(); // Resets the form after submission
document.getElementById("customAlert").style.display = "block"; // Show the custom alert
}, 1000); // Delay for example purposes
}

function closeAlert() {
document.getElementById("customAlert").style.display = "none"; // Hide the custom alert
}
// Disable right-click and inspect functionality
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (event.key === "F12" || (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || (event.ctrlKey && event.key === "U")) {
    event.preventDefault();
  }
});

