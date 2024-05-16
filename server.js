var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    song: String
  }
`)

// The rootValue provides a resolver function for each API endpoint
var root = {
  song() {
    return "That's life";
  }
}

var app = express()

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root
  })
)

//Server the graphql IDE.

app.get("/", (req, res) => {
  res.type("html")
  res.send(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/")