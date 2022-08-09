import { Request, Response } from "express";
import User, { IUser } from "models/userModel";
import { toEditorSettings } from "typescript";

const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    let newUser = new User({ name: name });
    await newUser.save();
  } catch (err: any) {
    // console.log(err);
    return res.status(400).send(err);
  }
  return res.send(`Successfully created user ${name}`);
};

const getUser = async (req: Request, res: Response) => {};

const getAllUsers = async (req: Request, res: Response) => {
  let users: IUser[] = [];
  try {
    let docs = await User.find({}).exec();
    users = docs.slice();
  } catch (err: any) {
    // console.log(err);
    return res.status(400).send(err);
  }
  // console.log(users);
  return res.send(users);
};

const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name } = req.body;
  try {
    await User.updateOne({ name: userId }, { name: name });
  } catch (err: any) {
    return res.status(400).send(err);
  }
  return res.send(`Successfully update ${userId} -> ${name}`);
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    await User.deleteOne({ name: userId });
  } catch (err: any) {
    return res.status(400).send(err);
  }
  return res.send(`Sucessfully deleted ${userId}`);
};

export { createUser, getUser, getAllUsers, updateUser, deleteUser };
