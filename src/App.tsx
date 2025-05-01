import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/App.scss';
import Counter from './components/Counter';

function App() {
  return (
    <div className="app">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="app__logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="app__logo" alt="React logo" />
        </a>
      </div>
      <h1 className="mb-2">TypeScript + ESLint + Prettier + Jest + SCSS with Vite</h1>
      <div className="card mb-2">
        <Counter initialValue={5} />
        <p className="mt-1">
          Edit <code>src/components/Counter.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        A complete starter template with TypeScript, ESLint, Prettier, and Jest
      </p>
      <div className="mt-3">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary mt-1">Secondary Button</button>
      </div>
    </div>
  );
}

export default App;
