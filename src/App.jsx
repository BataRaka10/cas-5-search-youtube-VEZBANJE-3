import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllVideos from "./Components/AllVideos";
import Home from "./Pages/Home";
import Video from "./Components/Video";
import SearchBar from "./Components/SearchBar";

// * path = htps://http://localhost:5174 = path po default
// path "/" => htps://http://localhost:5174/
// path "about" = htps://http://localhost:5174/about

// * :wild card -> da kao korisnici mozemo da unesemo bilo sta
// * /Video/:id (wild card) => UMESTO :id *** u brosweru cemo kucati 1, 5, 7, ... *** , 1, 5, 7... (wild card)
// /video/12, /video/12,  /video/1

// * <BrowserRouter> = rutiranje u braseru(browser)
// * <Routes> -> lista putanja sa naseg sajta
// * <Route path="/" element={<AllVideos />}/> -> svaki Route jeste jedna putanja

// * <Route path="/" element={<AllVideos />}/> = kada se dodeje na glavnu
// * stranicuon treba da ocita <AllVideos />
// key={video.id}

const VIDEOS = [
    {
        id: 1,
        title: "How to learn React",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
        cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-",
    },
    {
        id: 2,
        title: "How to learn css",
        url: "https://www.youtube.com/watch?v=tfzGsCxutWk",
        cover: "https://i.ytimg.com/vi/tfzGsCxutWk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCnsXU4B5l-aDNE9GBNxyTuDbQVEA",
    },
]

// domaci: ispisati sve elemente na stranici: VIDEOS.map( video => {})
const App = () => {
    return (
        <>
            
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/video/:id" element={ <Video /> } />
                </Routes>
            </BrowserRouter> */}
            {/* <AllVideos /> */}
        </>
    );
};

export default App;
