class College {
    constructor({name, mascot, location, id, reviews}) {
        this.name = name;
        this.mascot = mascot;
        this.location = location;
        this.id = id;
        this.reviews = reviews;
    }

    addToDropDown() {
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.append(option);
    }
}