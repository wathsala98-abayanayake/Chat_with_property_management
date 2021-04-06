import mongoose from "mongoose";
// import { ObjectID } from "mongodb";
// import { ObjectID } from "bson";

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

ObjectId.prototype.valueOf = function() {
    return this.toString();
};
const OrderSchema = new Schema({
    inDate: {
        type: String,
        required: true
    },
    outDate:{
        type: String,
        required: true
    },
    guest:{
        type: String,
        required: true
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

export default mongoose.model("Order", OrderSchema);
