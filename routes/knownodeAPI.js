/*
 * Serve JSON to the AngularJS client by sending a request
 */
// GET
var ExpRes = require('express-resource'),
    DB = require('../DB/knownodeDB');

exports.knownodes = function (req, res) {
    var nodes = [];
    var data = new DB.Source;

    DB.Source.all(function(err){
        data.forEach(function (node, i) {
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

exports.knownode = function (req, res) {
    var id, edge;
    id = req.params.id;

    edge = new DB.Edge;
    DB.Edge.all({where:{__ID__:id}}, function(err){
        if (id >= 0 && 0 < edge.length) {
            res.json({
                "edge": edge[id]
            });
        } else {
            res.json(err);
        }
    });
};

// POST
exports.addKnownode = function (req, res) {
    var edge = DB.schema.models.kn_Edge();

    data.posts.push(req.body);
    res.json(req.body);
};

// PUT
exports.editKnownode = function (req, res) {
    var id = req.params.id;
    var data = DB.schema.models.kn_Edge.all({where: {__ID__: id}});

    if (id >= 0 && id < data.kn_Edge.length) {
        data.kn_Edge[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE
exports.deleteKnownode = function (req, res) {
    var id = req.params.id;
    var data = DB.schema.models.kn_Edge.all({where: {__ID__: id}});

    if (id >= 0 && id < data.posts.length) {
        data.posts.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};