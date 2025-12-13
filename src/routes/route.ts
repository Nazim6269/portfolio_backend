import { Request, Response } from "express";
const { projectModel } = require("../models/project.model");
const { skillModel } = require("../models/skill.model");

const dbRouter = require("express").Router();

dbRouter.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello" });
});
//skills data fetcher api
dbRouter.get("/skills_data", async (req: Request, res: Response) => {
  const data = await skillModel.find();
  return res.send(data);
});

//project data fetcher api
dbRouter.get("/projects_data", async (req: Request, res: Response) => {
  const data = await projectModel.find();

  return res.send(data);
});
module.exports = { dbRouter };
