const port = `http://localhost:3000`;
const reviewService = new ReviewService(port);
const collegeService = new CollegeService(port);
const form = document.getElementById("review-form");
// debugger
const dropDown = document.getElementById("college-dropdown");
const nameValue = document.getElementById("review-name");
const descriptionValue = document.getElementById("review-description");
const collegeValue = document.getElementById("college-dropdown");
const reviewFormBtn = document.querySelector("#new-review-btn")

reviewService.getReviews()
collegeService.getColleges()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    reviewService.createReviews();
    e.target.reset();
}