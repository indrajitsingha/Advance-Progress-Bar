import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [Timer, setTimer] = useState(10);

  const inc = () => {
    if (count < 100) {
      setCount((val) => val + 1);
    }
  };

  useEffect(() => {
    let Intervelid;
    if (count > 70 && count < 80) {
      setTimer(100);
    } else {
      setTimer(10);
    }
    Intervelid = setInterval(inc, Timer);
    return () => {
      clearInterval(Intervelid);
    };
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="progress">
        <div className="inner" style={{ width: `${count}%` }}>
          {count}%
        </div>
      </div>
      <button
        onClick={() => setCount(0)}
        style={{ background: 'crimson', margin: '20px' }}
      >
        Restart
      </button>
    </>
  );
}

export default App;
