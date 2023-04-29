import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Carousel from '../components/Carousel'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Navbar from '../components/Navbar'

export default function Home() {
  const [active, setActive] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [mute, setMute] = React.useState(0);
  const [tv, setTv] = React.useState(false);
  setTimeout(() => {
    setIsLoaded(false)
  }, 5000);

  const slides = !tv ? [
    {
      id: 0,
      name: "Venom",
      date: "2018",
      rating: 5,
      duration: "1h 52m",
      description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
      url: "https://images3.alphacoders.com/948/948864.jpg",
      trailer: 'u9Mv98Gr5pY'
    },
    {
      id: 1,
      name: "Mortal Kombat",
      date: "2018",
      rating: 5,
      duration: "1h 52m",
      description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
      url: "https://assets1.ignimgs.com/2021/02/17/mortal-kombat-movie-poster-thumb-1613594784791_160w.jpg?width=1280",
      trailer: 'NYH2sLid0Zc'
    },
    {
      id: 2,
      name: "Infinite",
      date: "2018",
      rating: 5,
      duration: "1h 52m",
      description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
      url: "https://images.hdqwalls.com/wallpapers/infinite-sa.jpg",
      trailer: '_WWEOCQGxSw'
    },
    {
      id: 3,
      name: "6 Underground",
      date: "2018",
      rating: 5,
      duration: "1h 52m",
      description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
      url: "https://images.hdqwalls.com/wallpapers/6-underground-4k-movie-jz.jpg",
      trailer: 'YLE85olJjp8'
    },
    {
      id: 4,
      name: "Joker",
      date: "2019",
      rating: 5,
      duration: "2h 2m",
      description: "In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward spiral of social revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      url: "https://images.hdqwalls.com/wallpapers/joker-2019-movie-4k-g0.jpg",
      trailer: "zAGVQLHvwOY"
    },
    {
      id: 5,
      name: "Avengers: Endgame",
      date: "2019",
      rating: 5,
      duration: "3h 2m",
      description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
      url: "https://wallpapers.com/images/featured/mghdp4gaqzu4q4us.jpg",
      trailer: "TcMBFSGVi1c"
    },
    {
      id: 6,
      name: "The Irishman",
      date: "2019",
      rating: 5,
      duration: "3h 29m",
      description: "A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.",
      url: "https://www.criticalblast.com/sites/default/files/field/image/irishman.jpg",
      trailer: "RS3aHkkfuEI"
    },
    {
      id: 7,
      name: "Parasite",
      date: "2019",
      rating: 5,
      duration: "2h 12m",
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      url: "https://w0.peakpx.com/wallpaper/288/777/HD-wallpaper-movie-parasite.jpg",
      trailer: "5xH0HfJHsaY"
    },
    {
      id: 8,
      name: "Black Panther",
      date: "2018",
      rating: 5,
      duration: "2h 15m",
      description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
      url: "https://images.hdqwalls.com/wallpapers/black-panther-movie-4k-artwork-m4.jpg",
      trailer: "xjDjIWPwcPU"
      },
      {
      id: 9,
      name: "The Shape of Water",
      date: "2017",
      rating: 5,
      duration: "2h 3m",
      description: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
      url: "https://images.hdqwalls.com/wallpapers/the-shape-of-water-movie-4k-o8.jpg",
      trailer: "XFYWazblaUA"
      },
      {
      id: 10,
      name: "Once Upon a Time in Hollywood",
      date: "2019",
      rating: 5,
      duration: "2h 41m",
      description: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      url: "https://images.hdqwalls.com/wallpapers/once-upon-a-time-in-hollywood-brad-pitt-leonardo-dicaprio-2019-movie-4k-6r.jpg",
      trailer: "ELeMaP8EPAA"
      },
      {
      id: 11,
      name: "Ford v Ferrari",
      date: "2019",
      rating: 5,
      duration: "2h 32m",
      description: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
      url: "https://images.hdqwalls.com/wallpapers/ford-v-ferrari-movie-poster-2019-07.jpg",
      trailer: "I3h9Z89U9ZA"
      },
      {
      id: 12,
      name: "1917",
      date: "2019",
      rating: 5,
      duration: "1h 59m",
      description: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
      url: "https://images.hdqwalls.com/wallpapers/1917-movie-4k-j4.jpg",
      trailer: "YqNYrYUiMfg"
      }
  ] :
    [
      {
        "id": 0,
        "name": "Stranger Things",
        "date": "2016-present",
        "rating": 4.8,
        "duration": "4 Seasons",
        "description": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
        "url": "https://www.pixel4k.com/wp-content/uploads/2021/03/stranger-things-2020-4k_1615198806.jpg",
        "trailer": "b9EkMc79ZSU"
      },
      {
        "id": 1,
        "name": "The Mandalorian",
        "date": "2019-present",
        "rating": 4.9,
        "duration": "3 Seasons",
        "description": "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        "url": "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/03/01164456/THEMANDALORIAN_S3_Mandalorian-Grogu_poster-700x380-1.jpg",
        "trailer": "Znsa4Deavgg"
      },
      {
        "id": 2,
        "name": "The Witcher",
        "date": "2019-present",
        "rating": 4.6,
        "duration": "2 Seasons",
        "description": "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        "url": "https://images7.alphacoders.com/105/1053138.jpg",
        "trailer": "ndl1W4ltcmg"
      },
      {
        "id": 3,
        "name": "Breaking Bad",
        "date": "2008-2013",
        "rating": 5,
        "duration": "5 Seasons",
        "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        "url": "https://wallpapercave.com/wp/wp6794247.jpg",
        "trailer": "XZ8daibM3AE"
      },
      {
        "id": 4,
        "name": "Ozark",
        "date": "2017-2022",
        "rating": 4.5,
        "duration": "4 Seasons",
        "description": "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
        "url": "https://e1.pxfuel.com/desktop-wallpaper/845/74/desktop-wallpaper-ozark-season-3-poster-1-ozark-season-3-thumbnail.jpg",
        "trailer": "5hAXVqrljbs"
      },
      {
        "id": 5,
        "name": "Peaky Blinders",
        "date": "2013-2019",
        "rating": 4.5,
        "duration": "5 Seasons",
        "description": "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
        "url": "https://wallpaperaccess.com/full/6520910.jpg",
        "trailer": "oVzVdvGIC7U"
      },
      {
        "id": 6,
        "name": "Game of Thrones",
        "date": "2011-2019",
        "rating": 4.9,
        "duration": "8 Seasons",
        "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        "url": "https://wallpaperaccess.com/full/888128.jpg",
        "trailer": "bjqEWgDVPe0"
      },
      {
        "id": 7,
        "name": "The Crown",
        "date": "2016-present",
        "rating": 4.7,
        "duration": "5 Seasons",
        "description": "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        "url": "https://images2.alphacoders.com/877/877251.jpg",
        "trailer": "JWtnJjn6ng0"
      },
      {
        "id": 8,
        "name": "Narcos",
        "date": "2015-2017",
        "rating": 4.6,
        "duration": "3 Seasons",
        "description": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
        "url": "https://upload.wikimedia.org/wikipedia/en/b/b9/Narcos_season_1.png",
        "trailer": "RNWAKZzgbp4"
      },
      {
        "id": 9,
        "name": "Black Mirror",
        "date": "2011-present",
        "rating": 4.5,
        "duration": "5 Seasons",
        "description": "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide.",
        "url": "https://i1.wp.com/www.oxfordstudent.com/wp-content/uploads/2016/11/black-mirror-season-3-poster.png?fit=1080%2C1080&ssl=1",
        "trailer": "jDiYGjp5iFg"
      },
      {
        "id": 10,
        "name": "The Handmaid's Tale",
        "date": "2017-present",
        "rating": 4.7,
        "duration": "4 Seasons",
        "description": "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",
        "url": "https://www.themoviedb.org/t/p/w1280/1ryCwZaZFAlG0c1w8XiMHeAxxYy.jpg",
        "trailer": "81PyH5TH-NQ"
      },
      {
        "id": 11,
        "name": "Mindhunter",
        "date": "2017-2019",
        "rating": 4.6,
        "duration": "2 Seasons",
        "description": "Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.",
        "url": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fbKE87mojpIETWepSbD5Qt741fp.jpg",
        "trailer": "evdxH50J3rs"
      }    
    ]

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="h-[100vh] w-[100vw]">
        {<iframe
          className={`absolute object-cover h-[100vh] w-[80vw] max-sm:ml-[0vw] max-sm:w-[100vw] max-sm:h-[30vh] max-sm:top-[7vh] ${tv ? 'ml-[0vw]' : 'ml-[20vw]'}`}
          src={`https://www.youtube.com/embed/${slides.filter((slide) => slide.id === active).map((slide) => slide.trailer)}?&controls=0&mute=0&rel=0&autoplay=1`}
          frameBorder={0}
          allow='autoplay'
        ></iframe>}
        {isLoaded && (
          <img
            alt='hero-image'
            className={`absolute object-cover h-[100vh] w-[80vw] max-sm:ml-[0vw] max-sm:w-[100vw] ${tv ? 'ml-[0vw]' : 'ml-[20vw]'}`}
            src={`${slides.filter((slide) => slide.id === active).map((slide) => slide.url)}`}></img>
        )}
        <div
          style={{
            background: `linear-gradient(${tv ? '-90deg' : '90deg'}, rgba(2,0,36,1) 0%, rgba(0,4,45,1) 31%, rgba(0,212,255,0) 100%)`
          }}
          className='absolute max-sm:hidden h-[100vh] w-[100vw] max-sm:h-[107vh] max-sm:bg-gradient-to-t max-sm:from-[#00042d]'>
        </div>
        <div
          style={{
            background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,4,45,1) 69%, rgba(0,212,255,0) 100%)'
          }}
          className='absolute hidden max-sm:block h-[100vh] w-[100vw] max-sm:h-[107vh] max-sm:bg-gradient-to-t max-sm:from-[#00042d]'>
        </div>
        <Navbar setTv={setTv} tv={tv} />
        <div className='h-[53vh] relative max-md:h-[50vh] max-sm:mt-[15vh] max-sm:h-[58vh]'>
          <div className={`w-[45vw] h-[50vh] absolute bottom-0 px-16 py-5 text-white max-md:w-[50vw] max-sm:w-[100vw] max-sm:px-10 ${tv ? `right-[0vw] pr-5` : ""}`}>
            <h1 className='lg:text-5xl max-md:text-3xl max-sm:text-xl'>
              {slides.filter((slide) => slide.id === active).map((slide) => slide.name)}
            </h1>
            <div className='lg:py-3 max-md:py-1'>
              <span className='lg:text-2xl max-md:text-lg sm:text-sm text-red-900 px-1 max-md:px-0.5'>{slides.filter((slide) => slide.id === active).map((slide) => slide.date)}
              </span>
              <span className='lg:text-2xl max-md:text-lg sm:text-sm px-1 max-md:px-0.5'>|</span>
              <span className='lg:text-2xl max-md:text-lg sm:text-sm px-1 max-md:px-0.5'>
                {slides.filter((slide) => slide.id === active).map((slide) => slide.duration)}
              </span>
            </div>
            <div className='pt-1 flex text-yellow-500'>
              {Array(5).fill(0).map((_, i) => {
                return (
                  <span key={i}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:w-6 lg:h-6 max-md:w-4 max-md:h-4 h-2 w-2">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                  </span>
                )
              })}
            </div>
            <p className='lg:text-xl max-md:text-lg sm:text-sm py-5 max-md:py-2 max-sm:py-3 max-sm:text-xs'>
              {slides.filter((slide) => slide.id === active).map((slide) => slide.description)}
            </p>
            <div className='flex mt-2 max-md:mt-1 max-sm:mt-3 max-xl:mt-0'>
              <div className='mr-5'>
                <PrimaryButton text={"Play Now"} />
              </div>
              <SecondaryButton text={"Trailer"} />
            </div>
          </div>
        </div>
        <div
          style={{
            background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,4,45,1) 69%, rgba(0,212,255,0) 100%)'
          }}
          className='w-full absolute h-[9vh] bottom-0'>
        </div>
        <div className='w-[92vw] mx-auto max-md:w-[95vw] max-md:mt-5 max-sm:mt-0 border max-sm:h-[5vh]'>
          <Carousel setActive={setActive} slides={slides} setIsLoaded={setIsLoaded} />
        </div>
      </main>
    </React.Fragment>
  )
}
