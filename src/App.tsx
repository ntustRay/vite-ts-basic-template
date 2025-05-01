import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TypeScript + ESLint + Prettier + Jest + Tailwind with Vite</h1>
      <div className="card">
        <Counter initialValue={5} />
        <p>
          Edit <code>src/components/Counter.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        A complete starter template with TypeScript, ESLint, Prettier, and Jest
      </p>
    </>
  );
}

export default App;
