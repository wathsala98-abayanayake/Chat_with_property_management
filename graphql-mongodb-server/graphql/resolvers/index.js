import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Post from "./Post/";
import Comment from "./Comment/";
import Order from "./Order/";

const resolvers = [User, Post, Comment, Order];

export default mergeResolvers(resolvers);
