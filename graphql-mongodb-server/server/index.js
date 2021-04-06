require("dotenv").config();
import { GraphQLServer, PubSub } from "graphql-yoga";
import mongoose from "mongoose";

import schema from "../graphql/";
import { models } from "./config/db/";

// const { mongoURI: db } = process.env;
let path = require('path');
let express = require('express');
const pubsub = new PubSub();
let app = express();

const options = {
  port: process.env.PORT || "4000",
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../STN/public/index.html'));
});
const context = {
  models,
  pubsub
};

// Connect to MongoDB with Mongoose.

mongoose
  .connect(
      // "mongodb://localhost:27017/studentnetwork",
      "mongodb+srv://mario:@mario1995@cluster0.bks3p.mongodb.net/foodfinder?retryWrites=true&w=majority",
      //"mongodb+srv://madhavee:madhavee123@cluster0.5122t.mongodb.net/boardmein?retryWrites=true&w=majority",



    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const server = new GraphQLServer({
  schema,
  context
});

server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
