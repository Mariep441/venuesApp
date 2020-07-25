class StubAPI {
    constructor() {
        this.favoriteVenues = [];
    }

    add(venue) {
        this.favoriteVenues.push(venue);
    }

    getAll() {
        return this.favoriteVenues;
    }
}

export default new StubAPI();