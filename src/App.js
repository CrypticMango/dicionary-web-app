import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center"> Coded by me 😀 open-source code on <a href="https://github.com/CrypticMango/dicionary-web-app" target="_blank" rel="noreferrer">GitHub</a> hosted on <a href="https://vigilant-poitras-24cb00.netlify.app/" target="_blank" rel="noreferrer">Netlify</a> </footer>
      </div>
    </div>
  );
}

export default App;
