import React, { useState } from 'react';
import "./drawApp.css";

const DrawApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [participants, setParticipants] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddParticipant = () => {
        if (inputValue.trim() !== '') {
            setParticipants((prevParticipants) => [...prevParticipants, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="draw-app">
            <div className="input-container">
                <textarea
                    rows="10"
                    placeholder="Katılımcıları boşluklarla ayırarak girin"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className='listAddButton' onClick={handleAddParticipant}>Katılımcı Ekle</button>
            </div>

            <div className="detaylar">
                <h3>Katılımcılar: {participants}</h3>
                <select>
                    <option value={"klasik"}>Klasik Çekiliş</option>
                    <option value={"ylbası"}>Yılbaşı Çekilişi</option>
                    <option value={"eslestirme"}>Eşleştirme Çekilişi</option>
                    <option value={"gruplama"}>Gruplama Çekilişi</option>
                </select> <br />

            </div>
            <div className=''>
                <button>Çekilişi Yap</button>
            </div>
            <div className='Sonuc'>
                <h2>SONUÇ</h2>


            </div>
        </div>
    );
};

export default DrawApp;


