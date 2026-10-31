
import VIDEOS from "../videos.json";
import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";

// domaci: - Napravimo state (u Home.jsx) koji se zove [videos, setVideos]
// * -> inicijalna vrednost -> VIDEOS from "./../videos.json"
// prosledjivanje VIDEOS SearchBaru = <SearchBar videos={ videos }/>
const Home = () => {
	// domaci: uraditi state
	let [videos, setVideos] = useState(VIDEOS) // TO JE PRIKAZ SVIH VIDEO KLIPVA default-na vrednost 

	// let [videos, setVideos] = useState(VIDEOS); // TO JE PRIKAZ SVIH VIDEO KLIPVA default-na vrednost
	
	let [filteredVideos, setFilteredVideos] = useState(VIDEOS)
	// let [filteredVideos, setFilteredVideos] = useState(VIDEOS); // Ovo je deo koji se menja 
	// * uloga filteredVideos - jeste da bude taj state koji cem omi menjati (VIDEOS) je set video klipova on ->  nam ostaje isti / ako korisnik ukuca how to learn react -> onda ce mo mi naci taj klip i staviti ga filteredVideos

	// * foundVideos je ono sto smo mi isfiltrirali tj. ako je korisnik uneo how to learn react --> onda ce mo mi naci taj klip i staviti ga filteredVideos -> sto ce korisnik na kraju i videti

	// let [filteredVideos, setFilteredVideos] = useState(VIDEOS); // Ovo je deo koji se menja *** AKO MI TRAZIMO IZ PRETRAGE HOW TO LEARN REACT -> mi menjamo FILTEREDVIDEOS  ALI videos ostaje isti *** // uloga filteredVideos - jeste da bude taj state koji cem omi menjati (VIDEOS) nam ostaje isti / ako korisnik ukuca how to learn react -> onda ce mo mi naci taj klip i staviti ga filteredVideos

	// console.log(videos)

	// uloga filteredVideos - jeste da bude taj state koji cem omi menjati (VIDEOS) nam ostaje isti / ako korisnik ukuca how to learn react -> onda ce mo mi naci taj klip i staviti ga filteredVideos
    
    // * callback funkcija -> prosledjujemo KOD kao funkciju a nazad dobijam odgovor
	const handleSearchVideo = (results) => {
		setFilteredVideos(results)
	}

    // most izmedju SearchBar i naseg state / ne mozemo direktno ne mozemo direktno da uticemo na state unutar SearchBar / ali moze preko callback funkcije koju prosledimo i onda preko nje uticemo
	
	// (results) -> video klipove koje cem omi vratiti
	// const handleSearchVideo = (results) => {
	// 	setFilteredVideos(results)
	// }

	// * logika = u SearchBaru cemo pozvati handleSearchVideo -> proslediti mu neki rezultat sa video klipovima i on ce promeniti nas video state
    // const handleSearchVideo = (results) => {
    //     setFilteredVideos(results)
    // } 

    // console.log(filteredVideos)

    // * prosledjivanje videos u SearchBar

	// <SearchBar videos={videos} onSearchVideo={handleSearchVideo}/>
	// <AllVideos videos={filteredVideos}/>
	// * AllVideos -> DOBIJSA SAMO isfiltrirale video klipove = videos={ filteredVideos }
    // KLJUC (videos) !!!
	return (
		<>
			{/* <SearchBar videos={videos} onSearchVideo={handleSearchVideo}/>
			<AllVideos videos={filteredVideos}/> */}
			{/* <AllVideos /> */}
			{/* <h1>Glavna stranica</h1> */}
		</>
	);
};

export default Home;
