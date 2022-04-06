function myFunction() {
    var myMusic = {
      001: {
         artist: "Billy Joel",
         title: "Piano Man",
         release_year: 1973,
         formats: {
             1: "CD",
             2: "8T",
             3: "LP"
        },
    gold: true
    },
    002: {
        // Add a record here
        artist: "Eurielle",
        title: "Arcadia",
        release_year: 2015,
        formats: {
            1: "CD",
            2: "MP3",
            3: "EP"
        }
    }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;