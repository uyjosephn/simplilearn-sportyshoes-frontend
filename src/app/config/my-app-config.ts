export default {
    oidc: {
        clientId: 'XXX',
        issuer: 'https://dev-XXX.okta.com/oauth2/default',
        redirectUri: window.location.origin + '/login/callback',
        scopes: ['opendid', 'profile', 'email']
    }
}
