const data = [{
    id: 1,
    name: "Custom 24 SE",
    manufacturer: "PRS",
    year: 2014,
    neck: "Mahogany",
    fingerboard: "Rosewood",
    frets: 24
},{
    id: 2,
    name: "Stratocaster",
    manufacturer: "Fender",
    year: 2012,
    neck: "Maple",
    fingerboard: "Rosewood",
    frets: 22
},{
    id: 3,
    name: "Talman",
    manufacturer: "Ibanez",
    year: 1996,
    neck: "Maple",
    fingerboard: "Rosewood",
    frets: 22
},{
    id: 4,
    name: "Les Paul Studio",
    manufacturer: "Gibson",
    year: 2012,
    neck: "Mahogany",
    fingerboard: "Rosewood",
    frets: 22
}];

module.exports = {
    all() {
        return data;
    },
    getById(id) {
        if (id < 0 || id > data.length) {
            return null;
        }

        return data[id - 1];
    }
}