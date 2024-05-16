/*
In this example we will see how to define custom types in GraphQL.
Also I don't use a client to make the request, I use curl to make the request.
ref: https://graphql.org/graphql-js/graphql-clients/
*/

var express = require('express');
var { createHandler } = require('graphql-http/lib/use/express');
var { buildSchema } = require('graphql');

//schema

var schema = buildSchema(`
    type Query {
        artist: String
        songs: [String]
    }
`)

//root resolver function 
var root = {
    artist: () => 'Eminem',
    songs: () => ['Lose Yourself', 'Stan', 'The Real Slim Shady'],
}

var app = express()
app.all('/graphql', createHandler({schema:schema, rootValue: root}))
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")

