import './App.css';
import { CharactersList } from './components/CharactersList/CharactersList';
import { Header } from './components/Header/Header';
import { DataCharacters } from './DataCharacters';



function App() {
  return (
    <DataCharacters>
      <Header/>
    <div className="App">
 <CharactersList/>
    </div>
    </DataCharacters>
  );
}

export default App;

