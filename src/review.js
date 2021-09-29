class Review {
    static all = [];
    constructor({name, description, id, college_id, college}) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.college_id = college_id;
        this.college = college;
        this.element = document.createElement('li');
        this.dataset['id'] = id;
        this.element.id = `review-${id}`;
        Comment.all.push(this)
    }
    
    render() {
        this.element.innerHTML = `
        <div> data-id="${this.id}">
        <h3 class="Name">${this.name}</h3>
        <p class="Description:>${this.description}</p>
        </div>
        `
        return this.element.innerHTML
    }

    
}