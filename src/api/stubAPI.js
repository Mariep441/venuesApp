class StubAPI {
    
    constructor() {this.search = [];}

    add(category) {
        this.search.push(category);
    }

    getCategory() {
        return this.category;
    }
}

export default new StubAPI();