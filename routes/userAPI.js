/*
 * Serve JSON to the AngularJS client by sending a request
 */
// GET
var DB = require('../DB/knownodeDB');

var callBack = function(res) {
    return function(err, result){
        if (0 < result.length) {
            res.json({
                "user": result
            });
        } else {
            res.json(err);
        }
    };
};

exports.index = function (req, res) {
    var userList = [],
        user = new DB.User;

    var test = DB.User.all({limit: 10}, function(err, result){
        if(err)
        {
            res.json(err);
            return;
        }

        result.forEach(function (currentUser, currentUserIndex) {
            /*userList.push({
                id:currentUser.id,
                userId: currentUser.__ID__,
                email: currentUser.email,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                DOB: currentUser.DOB
            });*/
            userList.push(currentUser);
        });

        res.json({
            users: userList
        });

    });
};

exports.show = function (req, res) {
    var userEmail = req.params.email;

    DB.User.all({where:{email: userEmail}}, callBack(res));
};

// POST
exports.create = function (req, res) {
    DB.User.create(req.body, callBack(res));
    //res.json(req.body);
};

exports.edit = function (req, res) {
    var userEmail = req.params.email;

    DB.User.all({where:{email: userEmail}}, callBack(res));
}

exports.update = function (req, res) {
    var userEmail = req.params.email;

    DB.User.all({where:{email: userEmail}}, callBack(res));
}