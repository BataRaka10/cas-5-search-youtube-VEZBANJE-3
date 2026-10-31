
// lista svih video klipova
import VIDEOS from "./../videos.json" 

// import VIDEOS from "./../videos.json" -> lista svih video klipova

// * (e) => SearchVideo(e) = event koji prosledjujemo u SearchVideo / SearchVideo(e)
// * zbog statea = {videos} pod {zagradama}
//                 videos iz SearchBar -> 
// * prosledili {videos, onSearchVideo}
// * -> onSearchVideo -> je funkcija !
// * dobijamo SVE VIDEO KLIPVE  ({videos}) iz GLAVNE komponente
// * moramo da vratimo nazad neki rezultat -> vratimo se u Home.jsx
//   ({videos}) -> prosledjujemo ceo jedan state -> prihvatamo videos
const SearchBar = ({videos, onSearchVideo}) => {
    // console.log(videos)
    // console.log(videos, onSearchVideo)

    return (
        <>
        <form action="">
            <label htmlFor="">
                Search:
                <input type="text" name="search" onInput={ (e) => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo)} />
            </label>
        </form>
        </>
    )
}

/**
 * vezba: kako kucamo tekst da on vec nalapi video
 * How to learn react ->
 * How to learn css -> how to learn react
 * 
 * da how to -> da li postoji u how to learn react
 *  How to learn / na how to on vec -> odradi tu kvazi prepreku
 */

// (e) -> event
// * funkcija ODGOVORNA za pretragu - > filtriranje video kliopva
// (e) da se promeni u (name) -> da prihvata name
// SearchVideoByName -> treba da se prosledi (name) / SearchVideoByName -> funkcija
// * ---- onSearchVideo -> menja vrednost naseg filteredVideos(state)
// * kroz SearchBar komponentu -> mi uspesno modifikjuemo filteredVideos
const SearchVideoByName = (name, videos, onSearchVideo) => {
    // console.log(name, videos, onSearchVideo)
    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // * foundVideos -> array u koji pushujemo te objekte koje nalazimo
    let foundVideos = [];


    // * lista svih VIDEOS(video klipova) / domaci: lowerCase(pretraga da radi sa malim i velikim slovima) //  po titlu / VIDEOS bio 
    videos.forEach( video => {

        name = name.toLowerCase()
        video.title = video.title.toLowerCase()

        // e.currentTarget.value -> ono sto smo mi ukucali === (isto obe strane sting) isto kao taj  video.title

        // * kako mi da promenimo sta se nama nalazi u filteredVideos -> mozemo koristeci onSearchVideo -> ** onSearchVideo u sustini MENJA VREDNOST naseg filteredVideos state-a
        if (video.title.includes(name)) {
            // console.log(video.title)

             // * pretrazujemno json sa video klipovima => NASLI SMO GA onSearchVideo(video) njemu PROSLEDJUJE

            // * uspesno modifikujemo filteredVideos state / kroz SearchBar
            // on svaki put dodaje jedan klip (ne zelimo jedan klip - mi zelimo vise klipova)
            // ako nadje dva klipa -> on prosledi jedan
            // * ovde vracamo samo objekat / mi mu ne vracmo array sa objedktima

            // onSearchVideo([video]) // ne vracamo array sa objektima nago -> ovde vraca objekat

            foundVideos.push(video)
        }

        // if (name === video.title) {
            // console.log(video.title)
        //     console.log("Nasli smo video ")
        // }

    })

    onSearchVideo(foundVideos)
}

    // console.log(name, videos, onSearchVideo)
    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // * foundVideos -> array u koji pushujemo te objekte koje nalazimo
    // let foundVideos = [];

    // * lista svih VIDEOS(video klipova) / domaci: lowerCase(pretraga da radi sa malim i velikim slovima) //  po titlu / VIDEOS bio 

    // console.log(video.title); // console.log(video.title) ispisuje sve video klipove i video title
        


        // let recenica = "Kako si"
        // let pretraga = "kako si"

        // video.title -> naslov naseg klipa

        // * kako mi da promenimo sta se nama nalazi u filteredVideos -> mozemo koristeci onSearchVideo -> ** onSearchVideo u sustini MENJA VREDNOST naseg filteredVideos state-a

            // console.log("radi")
            // console.log(video.title)

            // * pretrazujemno json sa video klipovima => NASLI SMO GA onSearchVideo(video) njemu PROSLEDJUJE

            // on svaki put dodaje jedan klip (ne zelimo jedan klip - mi zelimo vise klipova)
            // ako nadje dva klipa -> on prosledi jedan

            // how to lern -> mi nalazimo dva klipa - on prvo ubaci react i onda umesto da doda na na to css - on obrise react i doda css
            // * on u AllVideos ocekuje array sa objektima -> ocekuje json
            // onSearchVideo([video]); // ne vracamo array sa objektima nago -> ovde vraca objekat

            // kada mi uspesno nadjemo video -> mi cemo ga pushovati u foundVideos
        

        // e.currentTarget.value -> ono sto smo mi ukucali === (isto obe strane sting) isto kao taj  video.title

        // if (name === video.title) {
        //     console.log("Nasli smo video ")
        // }
        
    

    // napravili smo jedan array sa video klipovima koje smo nasli -> i svaki put kada nadjemo video klip -> mi pushujemo array


    // onSearchVideo(foundVideos)


// const SearchVideoByName = (name, videos, onSearchVideo) => {
    // console.log(name, videos, onSearchVideo)
    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)

    // * foundVideos -> array u koji pushujemo te objedkte koje nalazimo
    // let foundVideos = [];

    // * lista svih VIDEOS(video klipova) / domaci po titlu / VIDEOS bio 
    // videos.forEach( video => {

        // name = name.toLowerCase()
        // video.title = video.title.toLowerCase()

        // let recenica = "Kako si"
        // let pretraga = "kak"

        // * ako naslov naseg klipa(video.title) sadrzi(includes) koji mi trtazimo(name)

        // * "Kako si" - to je nama video.title 
        // e.currentTarget.value -> ono sto smo mi ukucali === (isto obe strane sting) isto kao taj  video.title
        // if (e.currentTarget.value === video.title)

        // * kako mi da promenimo sta se nama nalazi u filteredVideos -> mozemo koristeci onSearchVideo -> ** onSearchVideo u sustini MENJA VREDNOST naseg filteredVideos state-a
        // if (video.title.includes(name)) {
            // console.log("Nasli smo video " + video.title)

             // * pretrazujemno json sa video klipovima => NASLI SMO GA onSearchVideo(video) njemu PROSLEDJUJE

            // * uspesno modifikujemo filteredVideos state / kroz SearchBar
            // on svaki put dodaje jedan klip (ne zelimo jedan klip - mi zelimo vise klipova)
            // ako nadje dva klipa -> on prosledi jedan
            // * ovde vracamo samo objekat / mi mu ne vracmo array sa objedktima


             // * opet vraca jedan klip / ubaci react ii umesto da doda na to css , on obrise react i stavi css 
            // * napravili smo jedan array (foundVideos) sa video klipovima koje smo nasli i svaki put kada nadjemo video klip -> pusujemo taj array
            // onSearchVideo([video]); // prosledimo video koji sm omi nasli
            // prosledimo video koji sm omi nasli
            // foundVideos.push(video)
        // }

        // if (e.currentTarget.value === video.title) {
            // console.log(video.title)
            // console.log("Nasli smo video ")

        // }

    // })

    // onSearchVideo(foundVideos)
// }

export default SearchBar;

// const SearchVideoByName = (name) => {
    // console.log(e.currentTarget.value)
    // console.log(VIDEOS)


    // * lista svih VIDEOS(video klipova) / domaci po titlu / VIDEOS bio 
//     VIDEOS.forEach( video => {

        // (e.currentTarget.value - ono sto smo mmi ukucali === (isto) kao video.title
//         if (e.currentTarget.value === video.title) {
            // console.log(video.title)
//             console.log("Nasli smo video ")

//         }

//     })

// }