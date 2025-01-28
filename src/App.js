import './App.css';
import { useState, useEffect } from 'react';
import music from "./media/music.png";
import social from "./media/social.png";
import recreational from "./media/recreation.png";
import busywork from "./media/busy.png";
import relaxation from "./media/relax.png";
import cooking from "./media/cook.png";
import education from "./media/education.png";
import charity from "./media/charity.png";
import diy from "./media/diy.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';



function App() {

  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState("1");
  const [pin, setPin] = useState(null)

  useEffect ( ()=> {
    getActivity();
  }, [])

  const getActivity = async (e)=> {
    if (e) e.preventDefault();
    const response = await fetch("https://bored.api.lewagon.com/api/activity/");
    const data = await response.json();
    console.log(data)

    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);

    switch (data.type) {
      case "music":
        setPin(music);
        break;
      case "social":
          setPin(social);
          break;
        case "recreational":
          setPin(recreational);
          break;
        case "busywork":
          setPin(busywork);
          break;
        case "relaxation":
          setPin(relaxation);
          break;
        case "cooking":
          setPin(cooking);
          break;
        case "education":
          setPin(education);
          break;
        case "charity":
          setPin(charity);
          break;
        default:
          setPin(diy);
      }

      window.scroll(0, 500);
    };

  return (
    <div className="App">
      <div className='App-circle'>
      <div className='headbox'>
        <h1><span className='hello'>Hi!</span> I'm Kevin, I can help you to choose activity for today.</h1>
      </div>
      </div>

      <form className="btnForm" onSubmit={getActivity}>
        <button className="btn" type="submit">
          Find activity
        </button>
      </form>

      <div className='activity-box'>
        <p className='activity-type'>Type of activity: 
          <br />
          <span className='two'>{type}</span></p>
        <img src={pin} alt='pin-img' height="80px" />
        <p className='activity-type'>
          {participants === 1
            ? "for " + participants + " person"
            : "for " + participants + " people"}
        </p>

        <div className='star-box'>
        <div className="star-box">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="star" />
          ))}
        </div>
        </div>

        <p className="three"> {activity} </p>

      </div>

      <div className='footer'>
        <a className='line' href='https://anastasiarzhavskaia.github.io/portfolio/#' target="_blank" rel="noreferrer" >
        <p className='footer-text'>
        Developed with <FontAwesomeIcon icon={faHeart} /> by Anastasia Rzhavskaia</p>
    </a>
    <a className='cons' href='https://www.freepik.com/' target="_blank" rel="noreferrer">
    Icons and image: freepik.com
  </a>
</div>
    </div>
  );
}

export default App;
