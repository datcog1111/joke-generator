// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

import 'bootstrap'; // import bootstrap elements and j
import '../styles/main.scss';
import getJoke from '../api/jokes';

const renderToDom = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

const init = () => {
  const buttonString = `
    <h1>JOKE GENERATOR!</h1>
    <div id="joke-container"></div>
    <div id="jokes">
    <button class="btn btn-dark" id="get-joke-btn">GET A JOKE</button><br />
    </div>
  `;
  renderToDom('#app', buttonString);

  const buttonSetup = (btnText, btnId) => {
    const domString = `<button class="btn btn-danger" id="${btnId}">${btnText}</button>`;
    renderToDom('#jokes', domString);
  };

  let joke = {};

  const jokeSetup = (obj) => {
    joke = {
      setup: obj.setup,
      punchline: obj.delivery
    };
    return joke;
  };

  document.querySelector('#jokes').addEventListener('click', (e) => {
    if (e.target.id === 'get-joke-btn') {
      getJoke().then((response) => {
        jokeSetup(response);

        document.querySelector('#joke-container').innerHTML = `<p>${joke.setup}</p>`;
        buttonSetup('Get Punchline!', 'get-punchline');
      });
    }

    if (e.target.id === 'get-punchline') {
      document.querySelector('#joke-container').innerHTML = `<p>${joke.setup}</p>`;
      document.querySelector('#joke-container').innerHTML += `<p>${joke.punchline}</p>`;
      buttonSetup('GET ANOTHER JOKE!', 'get-joke-btn');
    }
  });
  // USE WITH FIREBASE AUTH
  ViewDirectorBasedOnUserAuthStatus();
};

init();
