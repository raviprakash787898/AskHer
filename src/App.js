import FirstStage from './FirstStage';
import SecondStage from './SecondStage';
import ThirdStage from './ThirdStage';
import FourthStage from './FourthStage';
import MaanGaiStage from './MaanGaiStage';
import './App.css';
import { useState } from 'react';

function App() {
    const [stage, setStage] = useState("1");

    function handleCallback(childData){
        setStage(childData);
    };

    return (
        <>
            <div className="container">
                { stage === "1" &&  <FirstStage   parentCallback={handleCallback} /> }
                { stage === "2" &&  <SecondStage  parentCallback={handleCallback} /> }
                { stage === "3" &&  <ThirdStage   parentCallback={handleCallback} /> }
                { stage === "4" &&  <FourthStage  parentCallback={handleCallback}/> }
                { stage === "5" &&  <MaanGaiStage /> }
                
                <iframe className="mt-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.0287517740426!2d76.80135162731209!3d30.70533755624915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fece98c02452b%3A0xf3c99c507c9226eb!2sElante%20Mall%2C%20178-178A%2C%20Purv%20Marg%2C%20Industrial%20Area%20Phase%20I%2C%20Chandigarh%2C%20160002!5e0!3m2!1sen!2sin!4v1711630790418!5m2!1sen!2sin"
                    width="350" height="300" style={{border:0}} allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}

export default App;
