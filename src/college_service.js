class CollegeService {
    constructor(port) {
        this.port = port;
    }

    getColleges() {
        fetch(`${this.port}/colleges`)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const c = new College(element)
                c.collegeToDom();
                c.addToDropDown();
            });
        })
    }
}