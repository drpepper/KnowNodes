exports.getDBURL = function(){
    var DBDetails = {
        protocol: 'https',
        url: 'http://f852f78b3.hosted.neo4j.org/',
        port: 7486,
        user: '43633a2e0',
        password: '38da8dd0f'
    };

    return {
        url: DBDetails.protocol + '://' + DBDetails.user + ':' + DBDetails.password + '@' + DBDetails.url + ':' + DBDetails.port,
        port: DBDetails.port
    };
};
