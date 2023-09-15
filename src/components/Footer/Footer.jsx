import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socials">
        <img width="20" src="https://img.icons8.com/ios-glyphs/90/facebook.png" alt="facebook"/>
        <img width="20"  src="https://img.icons8.com/ios/100/instagram-new--v1.png" alt="instagram-new--v1"/>
        <img width="20" src="https://img.icons8.com/ios-glyphs/90/twitter--v1.png" alt="twitter--v1"/>
        <img width="20" src="https://img.icons8.com/ios-filled/100/youtube-play.png" alt="youtube-play"/>
        </div>

        <ul className="someInfo">
            <li>Condition of Use</li>
            <li>Privacy & Policy</li>
            <li>Press Room</li>

        </ul>

        <p className="coypright">
        © 2023 MovieBox by Paks
        </p>
    </div>
  )
}

export default Footer