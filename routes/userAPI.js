/*
 * Serve JSON to the AngularJS client by sending a request
 */
// GET
var DB = require('../DB/knownodeDB');

exports.index = function (req, res) {
    var userList = [],
        user = new DB.User;

    var test = DB.User.all({limit: 10}, function(err, result){
        result.forEach(function (u, i) {
            userList.push({
                id:i,
                userId: user.__ID__,
                email: user.email,
                firstName: user.userFirstName,
                lastName: user.userLastName,
                DOB: user.DOB
            });
        });

        res.json({
            users: userList
        });

    });
};

exports.show = function (req, res) {
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
exports.create = function (req, res) {
    DB.User.create(req.body);
    res.json(req.body);
};
