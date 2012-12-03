jugglingDB = require 'jugglingdb'

Schema = jugglingDB.Schema
dbSettings =
    url: http://localhost
    port: 7474
schema = new Schema neo4j, dbSettings

