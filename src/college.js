class College {
    static all = [];
    static collegeCont = document.getElementById('college-list')
    
    constructor({name, mascot, location, id, reviews}) {
        this.name = name;
        this.mascot = mascot;
        this.location = location;
        this.id = id;
        this.reviews = reviews;
        this.active = false
        this.element = document.createElement('button');
        College.all.push(this);
    }

    render() {
        this.element.innerText = this.name
        this.element.className = "college-btn"
        this.element.id = `college-${this.id}`
        return this.element
    }

    collegeToDom() {
        College.collegeCont.append(this.render());
        this.addClickListener();
    }

    addClickListener() {
        this.element.addEventListener('click', this.filterCollege)
    }

    filterCollege = (e) => {
        let filteredCollege;
        College.all.forEach(c => {
            if(c.element === this.element && !this.active) {
                c.element.classList.add('current')
                c.active = true
                filteredCollege = c
            } else {
                c.element.classList.remove('current')
                c.active = false
            }
            Review.filteredByCollege(filteredCollege);
        })
    }

    addToDropDown() {
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.append(option);
    }

}