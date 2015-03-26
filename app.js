angular.module('app', [
    'ngNewRouter',
    'app.new',
    'app.detail',
    'app.services'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {
  $router.config([
    { path: '/',            redirectTo: '/new'   },
    { path: '/new',         component:  'new'    },
    { path: '/detail/:id',  component:  'detail' }
  ]);
}
