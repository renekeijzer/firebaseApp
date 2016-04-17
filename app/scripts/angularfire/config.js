angular.module('firebase.config', [])
  .constant('FBURL', 'https://dazzling-torch-6668.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
