import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; /* Coracao borda icon */
import FavoriteIcon from '@mui/icons-material/Favorite'; /* Coracao fill icon */
import ChatIcon from '@mui/icons-material/Chat'; /* Comment icon */
import ShareIcon from '@mui/icons-material/Share'; /* Share icon */
import "./videoSideBar.css"

function VideoSideBar({ /* profile_pic,  profile_plus-icon, */ likes, comments, shares}) {

    const [liked, setLiked] = useState(false) /* Incializa como falso */

    function handdleLike() { /* Acompanhar estado do icone */
        setLiked(!liked) /* altera o estado pro oposto do valor que estiver ali dentro */
    }    

    return (
        <div className="videoSideBar">
           <div className='videoSideBar__options'>
                <img 
                    className='videoSideBar__profile'
                    alt='pic'
                    src='https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
                />
                <img
                    className='videoSideBar__plus-icon'
                    alt='icon'
                    src='https://www.svgrepo.com/download/68819/plus.svg'
                />
           </div>

            <div 
                className="videoSideBar__options"
                onClick={handdleLike}
            >
                { liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/>}
                <p> { liked ? likes + 1 : likes} </p> {/* alt + shift + seta: duplica o elemento pra direcao */}
            </div>

            <div className="videoSideBar__options">
                <ChatIcon fontSize="large" />
                <p> { comments } </p> {/* alt + shift + seta: duplica o elemento pra direcao */}
            </div>

            <div className="videoSideBar__options">
                <ShareIcon fontSize="large" />
                <p> { shares } </p> {/* alt + shift + seta: duplica o elemento pra direcao */}
            </div>
        </div>
    );
}

export default VideoSideBar