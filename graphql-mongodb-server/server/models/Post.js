import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
    description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  guest: {
    type: String,
    required: true
  },
  bedrooms: {
    type: String,
    required: true
  },
  beds: {
    type: String,
    required: true
  },
  bathrooms: {
    type: String,
    required: true
  },
  author: {
      type: String,
      required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

export default mongoose.model("Post", PostSchema);
