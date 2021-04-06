export default `
  type Comment {
    _id: ID!
    text: String!
    star: Int!
    author: User!
    post: Post!
  }

  type Query {
    comment(_id: ID!): [Comment!]!
    comments: [Comment!]!
  }

  type Mutation {
    createComment(comment: CreateCommentInput!): Comment!
    updateComment(_id: ID!, comment: UpdateCommentInput): Comment!
    deleteComment(_id: ID!): Comment!
  }

  type Subscription {
    comment(postId: ID!): CommentSubscriptionPayload!
  }

  type CommentSubscriptionPayload {
    mutation: MutationType!
    comment: Comment!
  }

  input CreateCommentInput {
    text: String!
    star: Int!
    post: String!
    author: String!
  }
  
  input UpdateCommentInput {
    text: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
