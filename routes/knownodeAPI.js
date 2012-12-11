/*
 * Serve JSON to the AngularJS client by sending a request
 */
// GET
var ExpRes = require('express-resource'),
    DB = require('../DB/knownodeDB');

var callBack = function(err, result){
    if (0 < result.length) {
        res.json({
            "knownode": result
        });
    } else {
        res.json(err);
    }
};

exports.index = function (req, res) {
    var nodes = [];
    var source = new DB.Source;

    DB.Source.all({ limit: 10 }, function(err, result){
        result.forEach(function (node, index) {
            nodes.push({
                id: i,
                nodeId: node.__ID__,
                title: node.title,
                url: node.url,
                text: node.bodyText.substr(0, 50) + '...'
            });
        });

        res.json({
            nodes: nodes
        });
    });
};

exports.show = function (req, res) {
    var id, edge;
    id = req.params.knownode;

    DB.Edge.all({where:{__ID__:id}}, callBack);
};

// POST
exports.create = function (req, res) {
    DB.User.find(10, function(err, user){
        var source = user.knownodeSources.build(req.body, callBack);
        source.save(console.log);
    })
        //create(req.body, callBack);
};

// PUT
exports.update = function (req, res) {
    var id = req.params.knownode;
    DB.Source.all({where: {__ID__: id}}, callBack);
};

// DELETE
exports.destroy = function (req, res) {
    var id = req.params.knownode;
    DB.Source.all({where: {__ID__: id}}, callBack);
};