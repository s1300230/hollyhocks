import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img
          src="https://www.trans.co.jp/column/knowledge/ai_image_generator/img/ai_image_generator_01.jpg"
          className="App-logo"
          alt="logo"
        />
        <p className="text-wed-dark">
          ようこそ <code>WED</code> コミュニティ.
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;
