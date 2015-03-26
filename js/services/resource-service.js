angular.module('app.services', ['ngResource'])
    .factory('Schedule', ['$resource', Schedule]);

function Schedule($resource) {
    return $resource('http://localhost:9999/api/v1/schedules/:scheduleId', {}, {});
}
