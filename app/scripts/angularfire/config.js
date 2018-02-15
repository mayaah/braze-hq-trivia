angular.module('firebase.config', [])
  .constant('FBURL', 'https://braze-hq-trivia.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['anonymous'])

  .constant('loginRedirectPath', '/login');
