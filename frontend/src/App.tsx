import { useState } from 'react';
import { Greet } from '../wailsjs/go/main/App';
function App() {
  const [resultText, setResultText] = useState(
    'Please enter your name below 👇'
  );
  const [name, setName] = useState('');
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then((name) => {
      console.log(name);
    });
    Greet(name).then(updateResultText);
  }

  return (
    <div className='bg-slate-900 flex h-screen text-white flex-col '>
      <div id='result' className='result'>
        {resultText}
      </div>

      <div></div>
      <div id='input' className='input-box text-black'>
        <input
          id='name'
          className='input'
          onChange={updateName}
          autoComplete='off'
          name='input'
          type='text'
        />
        <button className='btn' onClick={greet}>
          Greet
        </button>
      </div>
    </div>
  );
}

export default App;
