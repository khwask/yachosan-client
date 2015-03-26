angular.module('app.detail', [])
  .controller('DetailController', ['$routeParams', 'Schedule', DetailController]);

function DetailController($routeParams, Schedule) {
    this.schedule = Schedule.get({scheduleId: $routeParams.id});
}
