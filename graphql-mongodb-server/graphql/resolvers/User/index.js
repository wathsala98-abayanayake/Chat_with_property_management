import User from "../../../server/models/User";
import Post from "../../../server/models/Post";
import Comment from "../../../server/models/Comment";

const jwt = require('jsonwebtoken');
export default {
  Query: {
    user: async (parent, { _id }, context, info) => {
      return await User.findOne({ _id }).exec();
    },
    users: async (parent, args, context, info) => {
      const users = await User.find({})
        .populate()
        .exec();

      return users.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        email: u.email,
        age: u.age,
          permission: u.permission,
        password:u.password,
        posts: u.posts,
        comments: u.comments
      }));
    },
    login: async(parent,{email, password}) => {
      const user = await User.findOne({email:email});
      if(!user){
        throw new Error('User Does not Exist')
      }
      const isEqual = await User.findOne({password:password});
      if(!isEqual){
        throw new Error('Password is incorrect')

      }
      const token = jwt.sign({userId: user._id, email: user.email},'AccessTokenKey',{
        expiresIn:'1h'
      });

      return { userId:user._id, token:token, tokenExpiration:1}
    },
  },
  Mutation: {
    createUser: async (parent, { user }, context, info) => {
      const newUser = await new User({
        name: user.name,
        email: user.email,
        age: user.age,
          permission: user.permission,
        password:user.password
      });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateUser: async (parent, { _id, user }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(_id, { $set: { ...user } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  User: {
    posts: async ({ _id }, args, context, info) => {
      return await Post.find({ author: _id });
    },
    comments: async ({ _id }, args, context, info) => {
      return await Comment.find({ author: _id });
    }
  }
};
