/**
 * Maps the fixtures array and filters them based on their current status.
 * Statuses:
 * - IN_PLAY
 * - FINISHED
 * - TIMED
 * @param {Array} fixtures 
 * @returns {Object} 
 */
function mapFixtures (fixtures) {
    let mapped = {};
    mapped.fixturesInPlay   = fixtures.filter(fixture => fixture.status === 'IN_PLAY');
    mapped.fixturesFinished = fixtures.filter(fixture => fixture.status === 'FINISHED');
    mapped.fixturesUpcoming = fixtures.filter(fixture => fixture.status === 'TIMED');
    return mapped; 
}

/**
 * Returns a fixture date formatted based on the user's locale
 * and the type of the fixture.
 * @param {Date} date 
 * @param {String} type 
 */
function formatDate (date, type) {
    var dt = new Date(date);

    if (type === 'finished' || type === 'dateOnly') {
        return dt.toLocaleDateString();
    } else if (type === 'playing'){
        return dt.toLocaleTimeString();
    }
    else {
        return dt.toLocaleDateString() + ' at ' + dt.toLocaleTimeString();
    }
}