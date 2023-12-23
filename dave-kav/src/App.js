import './App.css'
import { faBook, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconLink from './IconLink'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          David Kavanagh
        <hr style={{borderTop: "1px dashed #8c8b8b", width: "100%"}}/>

        </h2>
         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <h3>
          Senior Backend Engineer @ <a className="App-link" href="https://www.apata.com">Apata</a>
        </h3>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <IconLink url="mailto:dave.kavanagh@gmail.com" icon={faEnvelopeSquare} text="Email" className="App-link" />
          <IconLink url="./CV_2023.pdf" icon={faBook} text="Resumé" className="App-link" />
          <IconLink url="https://github.com/dave-kav" icon={faGithubSquare } text="GitHub" className="App-link" />
          <IconLink url="https://www.linkedin.com/in/dave-kavanagh/" icon={faLinkedin} text="LinkedIn" className="App-link" />

        </div>
      </header>
    </div>
  );
}

export default App;
