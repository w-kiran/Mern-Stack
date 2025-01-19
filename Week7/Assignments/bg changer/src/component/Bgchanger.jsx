import React, { useCallback, useEffect, useMemo, useState} from 'react';
import $ from 'jquery';
import './Bgchanger.css';

const Bgchanger = () => {
  const [bg, setBg] = useState('white');

  // Update the background color whenever `bg` changes
  useEffect(() => {
    $(":root").css("background-color", bg);
  }, [bg]);

  console.log("rerender");
  
  return (
    <div className='bg-changer'>
      <button className='Red' onClick={() => setBg('red')}>Red</button>
      <button className='Yellow' onClick={() => setBg('yellow')}>Yellow</button>
      <button className='Black' onClick={() => setBg('black')}>Black</button>
      <button className='Purple' onClick={() => setBg('purple')}>Purple</button>
      <button className='Green' onClick={() => setBg('green')}>Green</button>
      <button className='Blue' onClick={() => setBg('blue')}>Blue</button>
      <button className='Default' onClick={() => setBg('white')}>Default</button>
    </div>
  );
};

export default Bgchanger;
