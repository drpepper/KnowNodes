exports.getDBURL = function(){
    var DBDetails = {
        protocol: 'http',
        url: 'localhost',
        port: 7474,
        user: '43633a2e0',
        password: '38da8dd0f'
    };

    return {
        url: DBDetails.protocol + '://' + DBDetails.user + ':' + DBDetails.password + '@' + DBDetails.url + ':' + DBDetails.port,
        port: DBDetails.port
    };
};
