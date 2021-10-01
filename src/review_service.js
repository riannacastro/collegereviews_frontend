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
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newReviewInfo)
        }

         //debugger
        fetch(this.port + `/reviews`, configObject)
        .then(response => response.json())
        .then(data => {
            const r = new Review(data);
            r.reviewToDom();
        })
    }

    updateReviewInfo(review) {
        const {name, description, id} = review
        const reviewInfo = {
            name,
            description
        }

       const configObject = {
           method='PATCH',
           headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newReviewInfo)
       }

       fetch(this.port + `reviews${id}`, configObject)
       .then(response => response.json())
       .then(data => {
           
       })
    }
}