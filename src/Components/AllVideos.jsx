

import VIDEOS from "./../videos.json"



const GetAllVideos = ({videos}) => {

    return (
        <>
            { videos.map( video => {
                return (
                    <a href={ video.url } target="_blank">
                        <img src={ video.cover } alt="" />
                        <h1>{ video.title }</h1>
                    </a>
                )
            }) }
        </>
    )
}

export default GetAllVideos;

// const GetAllVideos = () => {

//     return (
//         <>
//             { VIDEOS.map( video => {
//                 return (
//                     <a href={ video.url } target="_blank">
//                         <img src={ video.cover} alt="" />
//                         <h2>{ video.title }</h2>
//                     </a>
//                 )
//             })}
//         </>
//     )
// }

// export default GetAllVideos;