const AUTH0_DOMAIN = 'demonstration.auth0.com';
const AUTH0_CLIENT_ID = 'zalZ1MTxYGmq72QYJ3fhsMl13Z5xfZga';
const AUTH0_CONNECTION = 'Username-Password-Authentication';

if (!AUTH0_DOMAIN || !AUTH0_CLIENT_ID) {
  alert('Make sure to set the AUTH0_DOMAIN and AUTH0_CLIENT_ID variables in auth0-variables.js.');
}

const auth0js = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: 'http://localhost:3000/callback.html',
  responseType: 'token',
  audience: `https://${AUTH0_DOMAIN}/userinfo`,
  scope: 'openid profile email'
});

const auth0Instance = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: 'http://localhost:3000',
  responseType: 'token',
  audience: `https://${AUTH0_DOMAIN}/userinfo`,
  scope: 'openid profile email'
});
