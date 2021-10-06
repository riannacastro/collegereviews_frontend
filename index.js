const port = `http://localhost:3000`;
const reviewService = new ReviewService(port);
const collegeService = new CollegeService(port);
const form = document.getElementById("review-form");
// debugger
const dropDown = document.getElementById("college-dropdown");
const nameValue = document.getElementById("review-name");
const descriptionValue = document.getElementById("review-description");
const collegeValue = document.getElementById("college-dropdown");


reviewService.getReviews()
collegeService.getColleges()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault(); // prevents page from refreshing
    reviewService.createReviews();
    // debugger
    const reviewForm = document.getElementById("review-form");
    reviewForm.reset(); //  Cannot read property 'reset' of undefined
    
}