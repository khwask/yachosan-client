angular.module('app', ['app.home', 'ngNewRouter'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {
  $router.config([
    { path: '/',       redirectTo: '/home' },
    { path: '/home',   component:  'home'  },
    { path: '/new',    component:  'new'   }
  ]);
}
