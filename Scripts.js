// 🌟 Carousel Setup
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;
const size = carouselImages[0].clientWidth;

// Function to update slide position
function updateCarousel() {
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Next button event
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) {
    counter = 0; // loop back to first
  } else {
    counter++;
  }
  updateCarousel();
});

// Prev button event
prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = carouselImages.length - 1; // loop to last
  } else {
    counter--;
  }
  updateCarousel();
});

// 🌟 Auto-Sliding (like a runway every 3 seconds)
setInterval(() => {
  counter++;
  if (counter >= carouselImages.length) {
    counter = 0;
  }
  updateCarousel();
}, 3000); // 3000 ms = 3 seconds

// 🌟 Counter Feature
let count = 0;
document.getElementById("increment").addEventListener("click", () => {
  count++;
  document.getElementById("counterValue").innerText = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  document.getElementById("counterValue").innerText = count;
});

// 🌟 Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// 🌟 Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from refreshing
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be 6+ characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  // Confirm Password
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  if (confirmPassword !== password) {
    document.getElementById("confirmError").innerText = "Passwords do not match.";
    valid = false;
  } else {
    document.getElementById("confirmError").innerText = "";
  }

  // Success feedback
  if (valid) {
    alert("Form submitted successfully! 🎉");
  }
});
