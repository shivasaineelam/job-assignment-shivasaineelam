import { Router, Request, Response } from 'express';
import passport from 'passport';
import User from './../models/user';

const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password: password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', passport.authenticate('local'), (req: Request, res: Response) => {
  res.status(200).json({ message: 'Logged in successfully' });
});

router.get('/logout', (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed', error: err });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

router.get('/me', (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

export default router;
