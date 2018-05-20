var utils = require('./utils');

function formatFixturesResponse (response) {
    let fixtures = response.fixtures.map((fixture) => {
        let links = fixture._links;
        
        let formatted = Object.assign({}, fixture, {
            homeTeamId: utils.getIdFromUrl(links.homeTeam.href),
            awayTeamId: utils.getIdFromUrl(links.awayTeam.href),
            competitionId: utils.getIdFromUrl(links.competition.href),
            fixtureId: utils.getIdFromUrl(links.self.href),
            // date: new Date(fixture.date).toLocaleDateString(),
        });

        delete formatted._links;
        return formatted;
    });

    return Object.assign({}, response, { fixtures });
}

module.exports = {
    formatFixturesResponse: formatFixturesResponse,
};