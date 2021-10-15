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
            if(data.error) {
                alert(data.error)
            } else {
                const r = new Review(data);
            r.reviewToDom();
            alert("Thank you for your review.")
            }
        
        })
    }

    updateReviewInfo(review) {
        const {name, description, id} = review
        const newReviewInfo = {
            name,
            description
        }

       const configObject = {
           method:'PATCH',
           headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newReviewInfo)
       }

       fetch(this.port + `/reviews/${id}`, configObject)
       .then(response => response.json())
       .then(data => {
           review.render()
       })
    }

    deleteReview(e) {
        const id = e.target.dataset.id
        e.target.parentElement.remove()
            fetch(this.port + `/reviews/${id}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(json => {
                for(let i = 0; i < Review.all.length; i++) {
                    if(Review.all[i].id === parseInt(id))
                    Review.all.splice(i, 1)
                }
                alert(json.message)
            })
    }
}