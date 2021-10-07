class College {
    static all = [];
    static collegeCont = document.getElementById("college-cont")
    
    constructor({name, mascot, location, id, reviews}) {
        this.name = name;
        this.mascot = mascot;
        this.location = location;
        this.id = id;
        this.reviews = reviews;
        this.element = document.createElement('button');
        College.all.push(this);
    }

    render() {
        this.element.innerText = this.name
        this.element.id = `college-${this.id}`
        return this.element
    }

    collegeToDom() {
        College.collegeCont.append(this.render());
        this.addClickListener();
    }

    addToDropDown() {
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.append(option);
    }
}