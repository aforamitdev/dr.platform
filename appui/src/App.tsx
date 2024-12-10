import { useEffect } from 'react';

import './wasm_exec.js';

function App() {
  const loadWebAssembly = async () => {
    const response = await fetch('main.wasm');
    const buffer = await response.arrayBuffer();
    console.log(buffer);
  };
  useEffect(() => {
    loadWebAssembly();
  }, []);

  return <>AMIT RAI...</>;
}

export default App;
