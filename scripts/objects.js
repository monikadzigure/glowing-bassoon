var myArray = [];

// Only change code below this line.
for (let i = 1; i <= 5; i++) {
    console.log("Workin on", i);
    myArray.push(i);
}
console.log(myArray);

const myCollection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

function updateRecords(collection, id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
        return collection;
    }
    if (prop === "tracks") {
        // collection[id][prop] = collection[id][prop] || [];
        if (!collection[id].hasOwnProperty(prop)) collection[id][prop] = [];
        collection[id][prop].push(value);
        return collection;
    }
    //we will be here only for non track properties with some non empty value
    collection[id][prop] = value;
    return collection;
}

function main() {
    console.log("Starting main!");
    console.log("myCollection", myCollection[2548]);

    updateRecords(myCollection, 2548, "tracks", "Living on a prayer");
    console.log("myCollection", myCollection[2548]);
    updateRecords(myCollection, 2548, "style", "Rock");
    console.log("myCollection", myCollection[2548]);
    updateRecords(myCollection, 2548, "style", "Rock");
    console.log("myCollection", myCollection[2548]);
    updateRecords(myCollection, 2548, "artist", "");
    console.log("myCollection", myCollection[2548]);
}

main();
