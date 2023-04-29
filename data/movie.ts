const movies  = [
    {
        id: 0,
        name: "Venom",
        date: "2018",
        rating: 5,
        duration: "1h 52m",
        description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        url: "https://images3.alphacoders.com/948/948864.jpg",
        trailer: 'u9Mv98Gr5pY',
        imdbId: 'tt1270797'
      },
      {
        id: 1,
        name: "Mortal Kombat",
        date: "2018",
        rating: 5,
        duration: "1h 52m",
        description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        url: "https://assets1.ignimgs.com/2021/02/17/mortal-kombat-movie-poster-thumb-1613594784791_160w.jpg?width=1280",
        trailer: 'NYH2sLid0Zc',
        imdbId: 'tt0293429'
      },
      {
        id: 2,
        name: "Infinite",
        date: "2018",
        rating: 5,
        duration: "1h 52m",
        description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        url: "https://images.hdqwalls.com/wallpapers/infinite-sa.jpg",
        trailer: '_WWEOCQGxSw',
        imdbId: 'tt6654210'
      },
      {
        id: 3,
        name: "6 Underground",
        date: "2018",
        rating: 5,
        duration: "1h 52m",
        description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        url: "https://images.hdqwalls.com/wallpapers/6-underground-4k-movie-jz.jpg",
        trailer: 'YLE85olJjp8',
        imdbId: 'tt8106534'
      },
      {
        id: 4,
        name: "Joker",
        date: "2019",
        rating: 5,
        duration: "2h 2m",
        description: "In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward spiral of social revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        url: "https://images.hdqwalls.com/wallpapers/joker-2019-movie-4k-g0.jpg",
        trailer: "zAGVQLHvwOY",
        imdbId: 'tt7286456'
      },
      {
        id: 5,
        name: "Avengers: Endgame",
        date: "2019",
        rating: 5,
        duration: "3h 2m",
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
        url: "https://wallpapers.com/images/featured/mghdp4gaqzu4q4us.jpg",
        trailer: "TcMBFSGVi1c",
        imdbId: 'tt4154796'
      },
      {
        id: 6,
        name: "The Irishman",
        date: "2019",
        rating: 5,
        duration: "3h 29m",
        description: "A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.",
        url: "https://www.criticalblast.com/sites/default/files/field/image/irishman.jpg",
        trailer: "RS3aHkkfuEI",
        imdbId: 'tt1302006'
      },
      {
        id: 7,
        name: "Parasite",
        date: "2019",
        rating: 5,
        duration: "2h 12m",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        url: "https://w0.peakpx.com/wallpaper/288/777/HD-wallpaper-movie-parasite.jpg",
        trailer: "5xH0HfJHsaY",
        imdbId: 'tt6751668'
      },
      {
        id: 8,
        name: "Black Panther",
        date: "2018",
        rating: 5,
        duration: "2h 15m",
        description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
        url: "https://images.hdqwalls.com/wallpapers/black-panther-movie-4k-artwork-m4.jpg",
        trailer: "xjDjIWPwcPU",
        imdbId: 'tt1825683'
        },
        {
        id: 9,
        name: "The Shape of Water",
        date: "2017",
        rating: 5,
        duration: "2h 3m",
        description: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
        url: "https://images.hdqwalls.com/wallpapers/the-shape-of-water-movie-4k-o8.jpg",
        trailer: "XFYWazblaUA",
        imdbId: 'tt5580390'
        },
        {
        id: 10,
        name: "Once Upon a Time in Hollywood",
        date: "2019",
        rating: 5,
        duration: "2h 41m",
        description: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        url: "https://images.hdqwalls.com/wallpapers/once-upon-a-time-in-hollywood-brad-pitt-leonardo-dicaprio-2019-movie-4k-6r.jpg",
        trailer: "ELeMaP8EPAA",
        imdbId: 'tt7131622'
        },
        {
        id: 11,
        name: "Ford v Ferrari",
        date: "2019",
        rating: 5,
        duration: "2h 32m",
        description: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
        url: "https://images.hdqwalls.com/wallpapers/ford-v-ferrari-movie-poster-2019-07.jpg",
        trailer: "I3h9Z89U9ZA",
        imdbId: 'tt1950186'
        },
        {
        id: 12,
        name: "1917",
        date: "2019",
        rating: 5,
        duration: "1h 59m",
        description: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
        url: "https://images.hdqwalls.com/wallpapers/1917-movie-4k-j4.jpg",
        trailer: "YqNYrYUiMfg",
        imdbId: 'tt8579674'
        }
]

export default movies;
