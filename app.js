const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(
  cors({
    origin: ["http://localhost:3000"],

    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// api link
const usersRoute = require("./routes/v1/users.route");
const blogRoute = require("./routes/v1/blogs.route");
const projectsRoute = require("./routes/v1/projects.route");
const clientRoute = require("./routes/v1/client.route");
const clientFeedbackRoute = require("./routes/v1/clientFeedback.route");
const categoryRoute = require("./routes/v1/category.route");

const messageRoute = require("./routes/v1/message.route");

const successStoryRoute = require("./routes/v1/successStory.route");
const serviceRoute = require("./routes/v1/service.route");

// routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/blogs", blogRoute);
app.use("/api/v1/projects", projectsRoute);
app.use("/api/v1/client", clientRoute);
app.use("/api/v1/clientFeedback", clientFeedbackRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/message", messageRoute);
app.use("/api/v1/service", serviceRoute);

app.use("/api/v1/successStory", successStoryRoute);

module.exports = app;
