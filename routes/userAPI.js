/*
 * Serve JSON to the AngularJS client by sending a request
 */
// GET
var DB = require('../DB/knownodeDB');

exports.users = function (req, res) {
    var userList = [];
    var data = new DB.User;

    DB.User.all(function(err){
        data.forEach(function (user, i) {
            userList.push({
                id: i,
                userId: user.__ID__,
                email: user.email,
                firstName: user.userFirstName,
                lastName: user.userLastName,
                DOB: user.DOB
            });
        });

        res.json({
            nodes: userList
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
exports.addUser = function (req, res) {
    var user = new DB.User;

    user.save(req.body);

    //data.posts.push(req.body);
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