class ReviewService {
    constructor(port){
        this.port = port
    }
    getReviews(){
        fetch(this.port + `/reviews`)
        .then(response => response.json())
        .then(data => {
            for(const review of data) {
                let r = new Review(review)
                r.reviewToDom()
            }
        })
        
    }

    createReviews() {
        const newReviewInfo = {
            review: {
                name: nameValue.value,
                description: descriptionValue.value,
                college_id: collegeValue.value
            }
        }
         //debugger
        fetch(this.port + `/reviews`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
}