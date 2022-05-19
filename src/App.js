import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vai tomar banho, Rafaela!
        </p>
        <p>
          Ninguém aguenta mais ficar do seu lado...
        </p>
        <p>
          As crianças estão chorando...
        </p>
        <a
          href="https://www.lorenzetti.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar chuveiro
        </a>
      </header>
    </div>
  );
}

export default App;
