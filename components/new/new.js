angular.module('app.new', [])
  .controller('NewController', ['$location', 'Schedule', NewController]);

function NewController($location, Schedule) {
    this.create = function(schedule) {
        Schedule.save(JSON.stringify(schedule), function(scdl){
            $location.path('/detail/' + scdl.scheduleId);
        });
    };
}
