import express from "express";

const routes = express.Router();

routes.get("/form", (req, res) => {
  res.render("review");
});

routes.get("/submitted", (req, res) => {
  const name = req.query.name;
  const comment = req.query.comment;
  const score = req.query.score;
  res.render("review-results", { name, comment, score });
});

export default routes;
