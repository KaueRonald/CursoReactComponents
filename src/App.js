import './App.css';
import FirstComponent from './components/FirstComponente';
import AnotherComponente from './components/AnotherComponent';
import ImagesComponent from './components/ImagesComponent';
import HooksComponent from './components/HooksComponent';
import ListComponent from './components/ListComponent';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponente />
      <ImagesComponent />
      <HooksComponent />
      <ListComponent />
      <RenderCond x={10} />
      <Fragment />
      <Container>
        <h1>container criado hoho</h1>
      </Container>
    </div>
  );

}

export default App;
