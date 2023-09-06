import React, { useEffect, useState } from 'react';
import './App.css';
import DrawApp from './drawApp';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [typeValue, setTypeValue] = useState('classic');
  const [drawResult, setDrawResult] = useState(null);
  const [numberOfWinner, setNumberOfWinner] = useState(1);
  const [bges, setBges] = useState(2);
  const [isVisibleWinner, setIsVisibleWinner] = useState(true);
  const [isVisibleBges, setIsVisibleBges] = useState(false);
  const [isVisibleInput, setIsVisibleInput] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handletypeChange = (event) => {
    setTypeValue(event.target.value)
  };
  const handleNumberOfWinner = (event) => {
    setNumberOfWinner(event.target.value)
  };
  const handleBges = (event) => {
    setBges(event.target.value)
  };
  const drawClick = () => {
    const result = <DrawApp type={typeValue} member={inputValue} member2={inputValue2}
      groupSize={bges} numberOfWinner={numberOfWinner} />;
    setDrawResult(result);
  };

  useEffect(() => {
    setDrawResult("");
  }, [typeValue])


  useEffect(() => {
    if (typeValue === 'classic') {
      setIsVisibleWinner(true);
      setIsVisibleBges(false);
      setIsVisibleInput(false);
    } else if (typeValue === 'grouping') {
      setIsVisibleWinner(false);
      setIsVisibleBges(true);
      setIsVisibleInput(false);
    }
    else if (typeValue === 'pairing') {
      setIsVisibleWinner(false);
      setIsVisibleBges(false);
      setIsVisibleInput(true);
    }
    else {
      setIsVisibleWinner(false);
      setIsVisibleBges(false);
      setIsVisibleInput(false);
    }
  }, [typeValue]);

  return (
    <div className="drawApp">
      <h1>DRAW</h1>
      <div className="drawType">
        <h4>Type of Draw :</h4>
        <select name='type' onChange={handletypeChange}>
          <option value={"classic"}>Classic Draw</option>
          <option value={"christmas"}>Christmas Draw</option>
          <option value={"grouping"}>Grouping Draw</option>
          <option value={"pairing"}>Pairing Draw</option>
        </select>
      </div>
      <div className="inputContainer">
        <textarea
          rows="10"
          placeholder="Enter participants by skipping lines"
          value={inputValue}
          onChange={handleInputChange}
        />
        <textarea style={{ display: isVisibleInput ? 'block' : 'none' }}
          rows="10"
          placeholder="Enter the ones to be matched by skipping a line"
          value={inputValue2}
          onChange={handleInputChange2}
        />
      </div>
      <div className='optionPlusButton'>
        <div className='options'>
          <h3>Options</h3>
          <div className='option' style={{ display: isVisibleWinner ? 'flex' : 'none' }}><h4>Number Of Winner :</h4>
            <input type='number' value={numberOfWinner} onChange={handleNumberOfWinner}></input></div>
          <div className='option' style={{ display: isVisibleBges ? 'flex' : 'none' }}><h4>Group Size :</h4>
            <input type='number' value={bges} onChange={handleBges}></input></div>
        </div>
        <div className='drawButton'><button onClick={drawClick}>Draw</button></div>
      </div>
      <div className='result'>
        <h2>Result</h2>
        {drawResult}
      </div>

    </div>
  )
}



export default App;
