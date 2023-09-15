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
  const [isVisibleMatch, setIsVisibleMatch] = useState(false);
  const [isVisibleDontMatch, setIsVisibleDontMatch] = useState(false);
  const [matchOptions, setMatchOptions] = useState([]);
  const [pairMatchOptions, setPairMatchOptions] = useState([]);
  const [matchValue1, setMatchValue1] = useState('');
  const [matchValue2, setMatchValue2] = useState('');
  const [dontMatchValue1, setDontMatchValue1] = useState('');
  const [dontMatchValue2, setDontMatchValue2] = useState('');

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
      groupSize={bges} numberOfWinner={numberOfWinner} matchValue1={matchValue1}
      matchValue2={matchValue2} dontMatchValue1={dontMatchValue1} dontMatchValue2={dontMatchValue2} />;
    setDrawResult(result);
  };

  useEffect(() => {
    setDrawResult("");
  }, [typeValue])

  useEffect(() => {
    setMatchOptions(inputValue.split("\n").filter(item => item !== null && item !== undefined && item !== ""))
    setPairMatchOptions(inputValue2.split("\n").filter(item => item !== null && item !== undefined && item !== ""))
  }, [inputValue, inputValue2])

  useEffect(() => {
    if (typeValue === 'classic') {
      setIsVisibleWinner(true);
      setIsVisibleBges(false);
      setIsVisibleInput(false);
      setIsVisibleMatch(false);
      setIsVisibleDontMatch(false);
    } else if (typeValue === 'grouping') {
      setIsVisibleWinner(false);
      setIsVisibleBges(true);
      setIsVisibleInput(false);
      setIsVisibleMatch(true);
      setIsVisibleDontMatch(true);
    }
    else if (typeValue === 'pairing') {
      setIsVisibleWinner(false);
      setIsVisibleBges(false);
      setIsVisibleInput(true);
      setIsVisibleMatch(true);
      setIsVisibleDontMatch(true);
    }
    else {
      setIsVisibleWinner(false);
      setIsVisibleBges(false);
      setIsVisibleInput(false);
      setIsVisibleMatch(true);
      setIsVisibleDontMatch(true);
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
          <div className='option' style={{ display: isVisibleMatch ? 'flex' : 'none' }}>
            <h4 className='match'>Match :</h4>
            <select value={matchValue1} onChange={(event) => setMatchValue1(event.target.value)}>
              <option value="">Choose</option>
              {matchOptions.map((option, index) => (
                <option value={option} key={index}>{option}</option>
              ))}
            </select> &
            <select value={matchValue2} onChange={(event) => setMatchValue2(event.target.value)}>
              <option value="">Choose</option>
              {typeValue === 'pairing' ? (
                pairMatchOptions.map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))
              ) : (
                matchOptions.map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))
              )}
            </select>
          </div>
          <div className='option' style={{ display: isVisibleDontMatch ? 'flex' : 'none' }}>
            <h4>Don't Match :</h4>
            <select value={dontMatchValue1} onChange={(event) => setDontMatchValue1(event.target.value)}>
              <option value="">Choose</option>
              {matchOptions.map((option, index) => (
                <option value={option} key={index}>{option}</option>
              ))}
            </select> &
            <select value={dontMatchValue2} onChange={(event) => setDontMatchValue2(event.target.value)}>
              <option value="">Choose</option>
              {typeValue === 'pairing' ? (
                pairMatchOptions.map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))
              ) : (
                matchOptions.map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))
              )}
            </select>
          </div>
        </div>
        <div className='drawButton'><button onClick={drawClick}>Draw</button></div>
        <div className='result'>
          <h2>Result</h2>
          {drawResult}
        </div>
      </div>
    </div>
  )
}



export default App;



