import React, { useState } from 'react';
import './App.css';
import DrawApp from './drawApp';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [turValue, setTurValue] = useState('klasik');
  const [drawResult, setDrawResult] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleTurChange = (event) => {
    setTurValue(event.target.value)
  };
  const drawClick = () => {
    const result = <DrawApp tur={turValue} uye={inputValue} />;
    setDrawResult(result);
  };

  return (
    <div className="draw-app">
      <div className="input-container">
        <textarea
          rows="10"
          placeholder="Katılımcıları satır atlayarak giriniz"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="detaylar">

        <select name='tur' onChange={handleTurChange}>
          <option value={"klasik"}>Klasik Çekiliş</option>
          <option value={"yilbasi"}>Yılbaşı Çekilişi</option>
          <option value={"gruplama"}>Gruplama Çekilişi</option>
        </select> <br />


      </div>
      <div className=''>
        <button onClick={drawClick}>Çekilişi Yap</button>
      </div>
      <div className='Sonuc'>

        <h2>Sonuç</h2>
        {drawResult}
      </div>

    </div>
  )
}



export default App;
