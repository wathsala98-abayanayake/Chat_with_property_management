import mongoose from "mongoose";
// import { ObjectID } from "mongodb";
// import { ObjectID } from "bson";

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

ObjectId.prototype.valueOf = function() {
  return this.toString();
};
const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
    star:{
    type:String,
    },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  }
});

export default mongoose.model("Comment", CommentSchema);
