import { Router, Request, Response } from "express";
import Robot from "./../models/robotState";
const router = Router();

router.use((req: Request, res: Response, next: Function) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized user" });
});

router.get("/", async (req: Request, res: Response) => {
  const username = req.user;
  try {
    const data = await Robot.find();
    res.send(data);
  } catch {
    res.send("error occured");
  }
});
router.post("/", async (req: Request, res: Response) => {
  try {
    // const createdBy = req.user?.username;
    console.log(req.user, "fskfka");
    const {
      name,
      description,
      status,
      createdBy,
      createdAt = Date.now(),
      updatedAt = Date.now(),
    } = req.body;

    const newState = new Robot({
      name,
      description,
      status,
      createdAt,
      updatedAt,
      createdBy,
    });
    await newState.save();
    res.send("new robot added");
  } catch (error) {
    res.send(error);
  }
});
export default router;
