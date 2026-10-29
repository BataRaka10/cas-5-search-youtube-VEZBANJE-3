import { useParams } from "react-router-dom";

import VIDEOS from "./../videos.json"

// * useParams() = izvlaci parametre iz adresa // broj 22 je parametar
// * const { id } = hook
const Video = () => {

    // kako da dodjemo do tog podatka
    // const { id } = useParams()
    // console.log(id)


    // domaci:  video/1 -> koji ce prikazati taj prvi klip ili drugi klip /video/2 // ako odemo na video/44 -> this video does not exist
    // * videoFound - video koji smo mi uspesno nasli

    // zasto videoFound = null -> zato sto ako ne uspemo da nadjemo u petlji taj video 

    // let videoFound = null;


    // * hocemo da proverimo da li id u nasem slucaju /video/2 iz url -> postoji u videos.json u



        // * if (video.id == id) ako je id od nekog videa iz video.json isti kao id koji smo prosledili ovde /video/1 -> onda u tu varijablu videoFound ttreba da UBACI taj odredjeni video -> *** U PREVODU AKO on uspe da nadje video sa id: 1, ON CE UZETI CEO PODATAK (id, title, url, cover) I STAVITI GA videoFound varijablu


            // postavljamo vrednost da nam bude ista kao video = videoFound = video;

    // console.log(videoFound)

    // * ako on ne nadje video -> vrednost ce mu biti null
    // nece se promeniti sa null
    // nismo nasli taj video !
    // if (videoFound === null) {
    //     return <h1>This video does not exist</h1>
    // }


    return (
        <>
            {/* <h3>{ videoFound.title }</h3>
            <p>{ videoFound.url }</p>
            <iframe src={ videoFound.url } ></iframe> */}
            {/* <h1>Test</h1> */}
        </>
    )
}

export default Video;