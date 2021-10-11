const port = `http://localhost:3000`;
const reviewService = new ReviewService(port);
const collegeService = new CollegeService(port);
const form = document.getElementById("review-form");
const dropDown = document.getElementById("college-dropdown");
const nameValue = document.getElementById("review-name");
const descriptionValue = document.getElementById("review-description");
const collegeValue = document.getElementById("college-dropdown");

reviewService.getReviews()
collegeService.getColleges()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    reviewService.createReviews();
    e.target.reset();
}

function toggle() {
    let x = form
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }