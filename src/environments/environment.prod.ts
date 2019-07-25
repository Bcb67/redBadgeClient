export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'cnj-cryptonomics.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://cnj-cryptonomics.herokuapp.com'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:3000';
}