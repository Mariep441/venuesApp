const CLIENT_ID = process.env.CLIENT_ID || '0oaq9fm28iiKb6J1v4x6';
const ISSUER = process.env.ISSUER || 'https://dev-624335.okta.com/oauth2/default'


export default {
  clientId: CLIENT_ID,
  issuer: ISSUER,
  redirectUri: 'http://localhost:3000/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: false,
};