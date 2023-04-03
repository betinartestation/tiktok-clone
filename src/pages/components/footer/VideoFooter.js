/* rcfe: cria a estruturacao de todo o app */
import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote'; /* Importar icon library MUI do React (precisa instalar primeiro)  */

function VideoFooter({username, description, music}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@{ username }</h3>
            <p> { description } </p>
            <div className='videoFooter__music'>
                <MusicNoteIcon className='videoFooter__icon'/>
                <div className='videoFooterMusic__text'> {/* Titulo tem que estar separado: pq? */}
                    <p> { music } </p>
                </div>
            </div>
            
        </div>
        <img 
            className='videoFooter__record'
            alt='vinil girando'
            src='https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/vinil.png?alt=media&token=8ab56d00-5de7-4332-a680-c6c22134c365'

        /> {/* Vinil vai estar separado do resto dos textos, por isso criamos uma div separada */}
    </div>
  )
}

export default VideoFooter