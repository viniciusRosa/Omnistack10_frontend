import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlfor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlfor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>


          <div className="input-group">
            <div className="input-block">
              <label htmlfor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlfor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/7891544?s=460&v=4" alt="vinicius Rosa"/>
              <div className="user-info">
                <strong>Vinicius Rosa</strong>
                <span>NodeJs, React</span>
              </div>
            </header>
            <p>
              Biografia
            </p>
            <a href="https://github.com/viniciusRosa">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/7891544?s=460&v=4" alt="vinicius Rosa"/>
              <div className="user-info">
                <strong>Vinicius Rosa</strong>
                <span>NodeJs, React</span>
              </div>
            </header>
            <p>
              Biografia
            </p>
            <a href="https://github.com/viniciusRosa">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
