const port = `http://localhost:3000`;
const reviewService = new ReviewService(port);
const form = document.getElementById("review-form");
const dropDown = document.getElementById("college-dropdown");

reviewService.getReviews()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    reviewService.createReviews()
}