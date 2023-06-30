import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context'
import Facebook from "./public/images/ico-facebook.png"
import Instagram from "./public/images/ico-instagram.png"
import Tiktok from "./public/images/ico-tiktok.png"
import Whatsapp from "./public/images/ico-whatsapp.png"


const Footer = () => {

  const { currentContext } = useContext(ContextGlobal)
  const { theme } = currentContext

  return (
    <footer className={theme}>
        <div className='powered'>
          <p>Powered by</p>
          <img src="/images/DH.png" alt='DH-logo' />
        </div>
        <div className='redes'>
          <img src={Tiktok} className="logo" alt='Tiktok' />
          <img src={Instagram} className="logo" alt='Instagram' />
          <img src={Facebook} className="logo"alt="Facebook" />
          <img src={Whatsapp} className="logo"alt="Whatsapp" />
        </div>
    </footer>
  )
}

export default Footer
