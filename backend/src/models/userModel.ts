import { Schema, model } from "mongoose";

// Interface representing a doc in MongoDB
export interface IUser {
  name: string;
}

// Create a new mongoose Schema
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, unique: true },
  },
  { collection: "Users" }
);

// Create a Model
const UserModel = model<IUser>("Users", userSchema);

export default UserModel;

// // Create a change stream. The 'change' event gets emitted when there's a
// // change in the database
// User.watch().
//   on('change', data => console.log(new Date(), data));

// // Insert a doc, will trigger the change stream handler above
// console.log(new Date(), 'Inserting doc');
// User.create({ name: 'Axl Rose' });
