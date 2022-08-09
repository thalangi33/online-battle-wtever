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
    return res.status(400).send(err.message);
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
    return res.status(400).send(err.message);
  }
  // console.log(users);
  return res.send(users);
};

const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name } = req.body;
  try {
    if (!name) throw new Error("Name cannot be empty");
    let result: any = await User.updateOne({ name: userId }, { name: name });
    // console.log(result);
    if (result?.modifiedCount === 0) throw new Error("No matching user found");
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
  return res.send(`Successfully update ${userId} -> ${name}`);
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    let result: any = await User.deleteOne({ name: userId });
    // console.log(result);
    if (result?.deletedCount === 0) throw new Error("No matching user found");
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
  return res.send(`Sucessfully deleted ${userId}`);
};

export { createUser, getUser, getAllUsers, updateUser, deleteUser };
