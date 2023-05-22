const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,racist,sexist';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
export default getJoke;
