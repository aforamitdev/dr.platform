import { useEffect, useState } from 'react';
import { GetPlatform } from '../wailsjs/go/main/App';
import Header from './components/Header';
function App() {
  const [resultText, setResultText] = useState(
    'Please enter your name below 👇'
  );
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState<any>({});
  const updateName = (e: any) => setName(e.target.value);

  const getPlatform = async () => {
    GetPlatform('As').then((res) => {
      console.log(res);
      setPlatform(JSON.parse(res));
    });
  };

  useEffect(() => {
    getPlatform();
  }, []);

  return (
    <div className='flex h-screen text-white flex-col '>
      <div className='bg-slate-900  h-12 flex px-10 justify-between items-center'>
        <div className='uppercase'>{platform.platform}</div>
        <div>as</div>
        <Header />
      </div>
      {/* <div className='h-full flex-1 bg-gray-200 text-gray-800'>asa</div> */}
    </div>
  );
}

export default App;
