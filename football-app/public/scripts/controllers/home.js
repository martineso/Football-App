function HomeCtrl ($scope, $http) {

    $scope.formatDate = function (date) {
        var dt = new Date(date);
        return dt.toLocaleDateString() + ' at ' + dt.toLocaleTimeString();
    }

    // $scope.loading = true;
    // $http.get('/fixtures')
    //     .then(function(response) {
    //         console.log(response)
    //         var fixtures = response.data.fixtures;

    //         $scope.fixturesInPlay   = fixtures.filter(fixture => fixture.status === 'IN_PLAY');
    //         $scope.fixturesFinished = fixtures.filter(fixture => fixture.status === 'FINISHED');
    //         $scope.fixturesUpcoming = fixtures.filter(fixture => fixture.status === 'TIMED');

    //     }, function(err) {
    //         console.log(err);
    //     }).finally(function() {
    //         $scope.loading = false;
    //     });
    //         $scope.loading = false;
    var response = {"timeFrameStart":"2018-05-20","timeFrameEnd":"2018-05-26","count":15,"fixtures":[{"date":"2018-05-20T10:00:00Z","status":"FINISHED","matchday":38,"homeTeamName":"Valencia CF","awayTeamName":"RC Deportivo La Coruna","result":{"goalsHomeTeam":2,"goalsAwayTeam":1,"halfTime":{"goalsHomeTeam":1,"goalsAwayTeam":0}},"odds":null,"homeTeamId":"95","awayTeamId":"560","competitionId":"455","fixtureId":"162852"},{"date":"2018-05-20T13:00:00Z","status":"IN_PLAY","matchday":38,"homeTeamName":"Genoa CFC","awayTeamName":"Torino FC","result":{"goalsHomeTeam":0,"goalsAwayTeam":1},"odds":null,"homeTeamId":"107","awayTeamId":"586","competitionId":"456","fixtureId":"163532"},{"date":"2018-05-20T14:15:00Z","status":"TIMED","matchday":38,"homeTeamName":"Athletic Club","awayTeamName":"RCD Espanyol","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"77","awayTeamId":"80","competitionId":"455","fixtureId":"162844"},{"date":"2018-05-20T16:00:00Z","status":"TIMED","matchday":38,"homeTeamName":"AC Chievo Verona","awayTeamName":"Benevento Calcio","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"106","awayTeamId":"1106","competitionId":"456","fixtureId":"163531"},{"date":"2018-05-20T16:00:00Z","status":"FINISHED","matchday":38,"homeTeamName":"Juventus Turin","awayTeamName":"Hellas Verona FC","result":{"goalsHomeTeam":2,"goalsAwayTeam":1,"halfTime":{"goalsHomeTeam":0,"goalsAwayTeam":0}},"odds":null,"homeTeamId":"109","awayTeamId":"450","competitionId":"456","fixtureId":"163533"},{"date":"2018-05-20T16:00:00Z","status":"TIMED","matchday":38,"homeTeamName":"Cagliari Calcio","awayTeamName":"Atalanta BC","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"104","awayTeamId":"102","competitionId":"456","fixtureId":"163530"},{"date":"2018-05-20T16:00:00Z","status":"TIMED","matchday":38,"homeTeamName":"SSC Napoli","awayTeamName":"FC Crotone","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"113","awayTeamId":"472","competitionId":"456","fixtureId":"163536"},{"date":"2018-05-20T16:00:00Z","status":"TIMED","matchday":38,"homeTeamName":"AC Milan","awayTeamName":"ACF Fiorentina","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"98","awayTeamId":"99","competitionId":"456","fixtureId":"163535"},{"date":"2018-05-20T16:00:00Z","status":"TIMED","matchday":38,"homeTeamName":"SPAL Ferrara","awayTeamName":"UC Sampdoria","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"1107","awayTeamId":"584","competitionId":"456","fixtureId":"163538"},{"date":"2018-05-20T16:00:00Z","status":"TIMED","matchday":38,"homeTeamName":"Udinese Calcio","awayTeamName":"Bologna FC","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"115","awayTeamId":"103","competitionId":"456","fixtureId":"163539"},{"date":"2018-05-20T16:30:00Z","status":"TIMED","matchday":38,"homeTeamName":"Club Atlético de Madrid","awayTeamName":"SD Eibar","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"78","awayTeamId":"278","competitionId":"455","fixtureId":"162845"},{"date":"2018-05-20T18:45:00Z","status":"TIMED","matchday":38,"homeTeamName":"FC Barcelona","awayTeamName":"Real Sociedad de Fútbol","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"81","awayTeamId":"92","competitionId":"455","fixtureId":"162846"},{"date":"2018-05-20T18:45:00Z","status":"TIMED","matchday":38,"homeTeamName":"SS Lazio","awayTeamName":"FC Internazionale Milano","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"110","awayTeamId":"108","competitionId":"456","fixtureId":"163534"},{"date":"2018-05-20T18:45:00Z","status":"TIMED","matchday":38,"homeTeamName":"US Sassuolo Calcio","awayTeamName":"AS Roma","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"471","awayTeamId":"100","competitionId":"456","fixtureId":"163537"},{"date":"2018-05-26T18:45:00Z","status":"TIMED","matchday":10,"homeTeamName":"Real Madrid CF","awayTeamName":"Liverpool FC","result":{"goalsHomeTeam":null,"goalsAwayTeam":null},"odds":null,"homeTeamId":"86","awayTeamId":"64","competitionId":"464","fixtureId":"166842"}]};
    var fixtures = response.fixtures;
    $scope.fixturesInPlay   = fixtures.filter(fixture => fixture.status === 'IN_PLAY');
    $scope.fixturesFinished = fixtures.filter(fixture => fixture.status === 'FINISHED');
    $scope.fixturesUpcoming = fixtures.filter(fixture => fixture.status === 'TIMED');
}

angular.module('FootballApp')
  .controller('HomeCtrl', HomeCtrl);
