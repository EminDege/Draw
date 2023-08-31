import React, { useEffect, useState } from 'react';
import './App.css';
import DrawApp from './drawApp';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [turValue, setTurValue] = useState('klasik');
  const [drawResult, setDrawResult] = useState(null);
  const [kazananSayisi, setKazananSayisi] = useState(1);
  const [bges, setBges] = useState(2);
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleTurChange = (event) => {
    setTurValue(event.target.value)
  };
  const handleKazananSayisi = (event) => {
    setKazananSayisi(event.target.value)
  };
  const handleBges = (event) => {
    setBges(event.target.value)
  };
  const drawClick = () => {
    const result = <DrawApp tur={turValue} uye={inputValue} />;
    setDrawResult(result);
  };

  const handleChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    handleChangeVisibility()
  }, [turValue])

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
      <div className="">
        <h2>Çekiliş Türü</h2>

        <select name='tur' onChange={handleTurChange}>
          <option value={"klasik"}>Klasik Çekiliş</option>
          <option value={"yilbasi"}>Yılbaşı Çekilişi</option>
          <option value={"gruplama"}>Gruplama Çekilişi</option>
        </select>

      </div>
      <div className=''>
        <h2>Seçenekler</h2>
        <div id='kazananblok'><h4>Kazanan Sayısı</h4>
          <input type='number' value={kazananSayisi} onChange={handleKazananSayisi}></input></div>
        <div id='bgesblok'><h4>Bir gruptaki eleman sayısı</h4>
          <input type='number' value={bges} onChange={handleBges}></input></div>
      </div>

      <div className='Sonuc'>
        <button onClick={drawClick}>Çekilişi Yap</button>
        <h1>Sonuç</h1>
        {drawResult}
      </div>

    </div>
  )
}



export default App;
