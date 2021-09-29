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
        Review.all.push(this)
    }
    
    render() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="name">${this.name}</h3>
        <p class="description">${this.description}</p>
        </div>
        `
        return this.element
    }

    reviewToDom() {
        Review.container.appendChild(this.render())
    }
}