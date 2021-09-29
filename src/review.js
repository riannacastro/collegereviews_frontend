class Review {
    static all = []
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
    

}