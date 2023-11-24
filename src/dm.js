import { useEffect, useState } from 'react';

const keyBoard = [
    { key: 'Q',
    label: 'Brk_Rnr',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'},
    { key: 'W',
    label: 'Dry_Ohh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
    { key: 'E',
    label: 'punchy_kick_1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
    { key: 'A',
    label: 'side_stick_1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
    { key: 'S',
    label: 'Heater-6',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { key: 'D',
    label: 'Dsc_Oh',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { key: 'Z',
    label: 'Chord_1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
    { key: 'X',
    label: 'Chord_2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
    { key: 'C',
    label: 'Chord_3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' }                                
]

function DrumMachine() {
const [genre, setGenre] = useState('Click on a KEY!')
const  drum = (e, element) => { 
  setGenre( element.label);
  const b = document.getElementById(element.key);
  b.currentTime = 0;
  b.play().catch(console.error);};
  
const  greet = (e) => {
  setGenre( <><i className="bi bi-suit-heart-fill text-danger"> </i>
              <i className="bi bi-suit-heart-fill text-danger"> </i>
              <i className="bi bi-suit-heart-fill text-danger"> </i></>);
  const b = document.getElementById("greet");
  b.currentTime = 1;
  b.play().catch(console.error);};

useEffect( () => {
keyBoard.forEach( element => 
  { document.addEventListener( 'keydown', (e) => e.key.toUpperCase() === element.key ? drum(e,element) : null );
    document.getElementById(element.key).load();
    // console.log(element.key)
  });
  return () => document.removeEventListener('keydown', (e) => drum(e) );
  }, []);

return (
<div id="outer-box">
  <div id="drum-machine">  
    <div id="keyboard">
      { keyBoard.map( (element, number) => 
        <button onClick={(e) => drum(e, element)} className="drum-pad" key={number} id={number}>{element.key}
          <audio className="clip" id={element.key} src={element.url}>
          </audio> 
        </button>)}
    </div>
    <div id="display">
      <div>Drum machine</div>
      <div>{genre}</div>
      <button onClick={(e) => greet(e)}>Dedicated to my grandson<br/>Lajcsi <i className="bi bi-suit-heart-fill text-danger"></i>
          <audio id="greet" src={"https://mluighy.github.io/Product-Landing-Page/lajcsi.mp3"}>
          </audio>
      </button>
    </div>
  </div>
</div>
);
}

export default DrumMachine;