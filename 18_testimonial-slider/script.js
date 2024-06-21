import testimonials from "./data.js";

const photoUrlEl = document.getElementById("photoUrl");
const descriptionEl = document.getElementById("description");
const nameEl = document.getElementById("name");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let currentIndex = 0;

function updataTestimonial(i) {
  const testimonial = testimonials[i];
  photoUrlEl.src = testimonial.photoUrl;
  descriptionEl.textContent = testimonial.description;
  nameEl.textContent = testimonial.name;
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updataTestimonial(currentIndex);
}

updataTestimonial(currentIndex);
setInterval(nextTestimonial, 2000);

leftBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updataTestimonial(currentIndex);
});

rightBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updataTestimonial(currentIndex);
});
