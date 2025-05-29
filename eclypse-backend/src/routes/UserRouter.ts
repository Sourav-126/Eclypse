import express from "express";

export const UserRouter = express();

UserRouter.post("/signup", (req, res) => {
  const body = req.body;
});
