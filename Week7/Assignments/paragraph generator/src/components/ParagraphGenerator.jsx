import React, { useState } from 'react';
import './ParagraphGenerator.css';

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const ParagraphGenerator = () => {
  const [numWords, setNumWords] = useState(0);
  const [words, setWords] = useState([]);

  const generateWords = () => {
    const generatedWords = [];
    for (let i = 0; i < numWords; i++) {
      let wordLength = Math.floor(Math.random() * 8) + 3; // Words of length 3 to 10
      let word = '';
      for (let j = 0; j < wordLength; j++) {
        word += letters[Math.floor(Math.random() * letters.length)];
      }
      generatedWords.push(word);
    }
    setWords(generatedWords);
  };

  return (
    <div className='main-div'>
      <h1 className='header'>Paragraph Generator</h1>
      <div className='generator'>
        <input type="number" placeholder='Enter Number of Words' className='input' onChange={(e) => setNumWords(parseInt(e.target.value) || 0)} />
        <button onClick={generateWords}>Generate</button>
      </div>
      <div className='words'>
        {words.join(' ')}
      </div>
    </div>
  );
}

export default ParagraphGenerator;
