function getIdFromUrl (urlString) {
    return urlString.split("/").pop();
}

module.exports = {
    getIdFromUrl: getIdFromUrl
}