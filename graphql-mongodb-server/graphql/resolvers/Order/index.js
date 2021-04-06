import User from "../../../server/models/User";
import Post from "../../../server/models/Post";
import Order from "../../../server/models/Order";

export default {
    Query: {
        order: async (parent, { _id }, context, info) => {
            return await Order.find({ _id });
        },
        orders: async (parent, args, context, info) => {
            const res = await Order.find({})
                .populate()
                .exec();

            return res.map(u => ({
                _id: u._id.toString(),
                inDate: u.inDate,
                outDate: u.outDate,
                guest: u.guest,
                author: u.author,
                post: u.post
            }));
        }
    },
    Mutation: {
        createOrder: async (parent, { order }, context, info) => {
            const newOrder = await new Order({
                inDate: order.inDate,
                outDate: order.outDate,
                guest: order.guest,
                author: order.author,
                post: order.post
            });

            return new Promise((resolve, reject) => {
                newOrder.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        updateOrder: async (parent, { _id, order }, context, info) => {
            return new Promise((resolve, reject) => {
                Order.findByIdAndUpdate(
                    _id,
                    { $set: { ...order } },
                    { new: true }
                ).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        deleteOrder: async (parent, { _id }, context, info) => {
            return new Promise((resolve, reject) => {
                Order.findByIdAndDelete(_id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Subscription: {
        order: {
            subscribe: (parent, args, { pubsub }) => {
                //return pubsub.asyncIterator(channel)
            }
        }
    },
    Order: {
        author: async ({ author }, args, context, info) => {
            return await User.findById({ _id: author });
        },
        post: async ({ post }, args, context, info) => {
            return await Post.findById({ _id: post });
        }
    }
};
