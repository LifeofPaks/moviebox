import React from 'react'
import Logo from "../../images/tv.png";
import './MovieInfoSideBar.scss'
import { Link } from 'react-router-dom';

const MovieInfoSideBar = () => {
  return (
    <div className='sidebar'>
        <div className="wraps">
        <div className="logoWrapper">
          <img src={Logo} alt="logo"  className='logoImg'/>

          <h1>MovieBox</h1>
        </div>

        <Link to='/' className='link'>
            <li >
            <img width="20"  src="https://img.icons8.com/ios/100/000000/home--v1.png" alt="home--v1"/>
                
                <p>Home</p>
            </li>

            <li className='active'>
            <img width="20" src="https://img.icons8.com/ios/100/be123c/movie-projector.png" alt="movie-projector"/>
                
                <p>Movies</p>
            </li>

            <li>
            <img width="20" src="https://img.icons8.com/ios/100/000000/tv.png" alt="tv"/>
                
                <p>TV Series</p>
            </li>

            <li>
            <img width="20" src="https://img.icons8.com/external-goofy-line-kerismaker/96/000000/external-Desk-Calender-stationery-goofy-line-kerismaker.png" alt="external-Desk-Calender-stationery-goofy-line-kerismaker"/>
                
                <p>Upcoming</p>
            </li>
        </Link>
        </div>
      

        <div className="sdd">
            <h4>Play movie quizes and earn free tickets</h4>
            <p>50k people are playing now</p>
            <div className="sp">
                    <p>Start Playing</p>
            </div>

        </div>

        <div className="logout">
        <img width="25" src="https://img.icons8.com/ios/100/000000/exit--v1.png" alt="exit--v1"/>
         <p>Log Out</p>
        </div>
    </div>
  )
}

export default MovieInfoSideBar