class Review {
    static all = [];
    static container = document.getElementById("reviews-cont")
    constructor({name, description, id, college_id, college}) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.college_id = college_id;
        this.college = college;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `review-${id}`;
        this.element.addEventListener('click', this.handleClick);
        Review.all.push(this);
    }
    
    render() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="name">${this.name}</h3>
        <p class="description">${this.description}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Review</button>
        <button class="delete" data-id=${this.id}>Delete Review</button>
        `
        return this.element
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Review") {
            e.target.innerText = "Update Review"
            this.editForm();
        } else if(e.target.innerText === "Delete Review"){
            reviewService.deleteReview(e);
        } else if(e.target.innerText === "Update Review") {
            e.target.innerText === "Edit Review"
            this.updateReview();
        }
    }

    editForm() {
        const div = this.element.querySelector('div');
        for(const element of div.children) {
            let inputValue = element.innerText;
            let name = element.classList[0]
            element.outerHTML  = `<input type="text" class="edit-${name}" value="${inputValue}"/>`
        }
    
    }

    updateReview() {
        this.name = this.element.querySelector(".edit-name").value;
        this.description = this.element.querySelector(".edit-description").value;
        reviewService.updateReviewInfo(this)
    }

    reviewToDom() {
        Review.container.appendChild(this.render())
    }
}