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

    addClickListener() {
        this.element.addClickListener('click', this.filterCollege)
    }

    filterCollege = (e) => {
        let filteredCollege;
        College.all.forEach(c => {
            if(c.element === this.element && !this.active) {
                filteredCollege = c
            } else {

            }
            Review.filteredCollege(filteredCollege);
        })
    }
    // add event listener function for colleges

    addToDropDown() {
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.append(option);
    }

    // chooseCollegeDropdown() {
    //     const option = document.createElement('option');
    //     option.value = this.id
    //     option.innerText = this.name
    //     return option
    // }
}