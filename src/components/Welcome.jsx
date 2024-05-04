import React, { useEffect, useState } from 'react'
import './css/Welcome.css'
import yy1 from './assets/img/yy1.jpg'
import yy2 from './assets/img/yy2.jpg'
import yy3 from './assets/img/yy3.png'
import yy4 from './assets/img/yy4.jpg'
import FlightAff from './FlightAff'
import LogeAff from './LogeAff'
import TouristAff from './TouristAff'
import image1 from './assets/img/image1.jpg'
import image2 from './assets/img/image2.jpg'
import image3 from './assets/img/image3.jpg'
import image4 from './assets/img/image4.jpg'





const Welcome = () => {
  const [visible,setvisible] = useState(0);
  const [currentImage,setcurrentImage] = useState(0);

  const totalImage = 4;
  const images = [
    image1,image2,image3,image4
  ];

  const show = (id) => {
    setvisible(id);
  };

  useEffect(() =>{
    const interval = setInterval(() =>{
      setcurrentImage((prev) => (prev +1) % images.length );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //  flag

    const [countryData, setCountryData] = useState(null);
    useEffect(() => {
    fetch('https://ipinfo.io/json?token=0af0084385fb80')
    .then(response => response.json())
    .then(data => {
    setCountryData(data);_
    })
    .catch(error => {
    console.error('Error fetching countrydata:', error);
    });
    }, []);
    

  return (
    <div className='welcome'>


      <div>
{countryData ? (
<div>
<img src={`https://www.countryflags.io/${countryData.country}/shiny/64.png`} alt="Country Flag" />
<p>{countryData.country}</p>
</div>
) : (
<p>Loading...</p>
)}
</div>


      <div className='welcome1'>
        <h1 >
        <span>
          <span>B</span>
          <span>B</span>
          <span>B</span>
          <span>B</span>
          <span>B</span>
          <span>B</span>
          <span>B</span>
        </span>
        </h1>
        </div>
      <div>
        <img id='pic1'className='pic1' src={yy1}/>
           <div>
        <button onClick={() => (show(1))} className='button' id='flight'>BOOk YOUR FLIGHT</button>
           </div>
        </div>

        <div className='box'>
    
        </div>

        <div id='pic2'>
          <img className='pic2' src={yy2}/>
             <div>
         <button onClick={() => (show(2))} className='button' id='loge'>Loge</button>
             </div>
         </div>
         <div>
          <img className='pic3' src={yy3}/>
      </div>
      <div>
        <img className='pic4' src={yy4}/>
        <div>
        <button onClick={() => (show(3))} className='button' id='tourist'>Tourist</button>
        </div>
     
      </div>
      <div className='texts'>
       Welcome to infinite services<br/>
       &nbsp;&nbsp;&nbsp;get your tickets,<br/>
               &nbsp;&nbsp;your loge side and your<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;tourist side

                  <img src={images[currentImage]} className='bounce' alt={`image ${currentImage} `}/>
      
      </div>
      {visible===3 &&  <TouristAff/>}
      {visible===1 && <FlightAff/>}
      {visible===2 && <LogeAff/>}
     
    
    </div>
  )
}

export default Welcome
