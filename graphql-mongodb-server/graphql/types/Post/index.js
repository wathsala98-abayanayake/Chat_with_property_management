export default `
  type Post {
    _id: String!
    title: String!
    description: String!
    address: String!
    published: Boolean!
    status: String!
    guest: String!
    bedrooms: String!
    beds: String!
    bathrooms: String!
    author: User!
    comments: [Comment!]!
  }

  type Query {
    post(_id: ID!): Post!
    posts: [Post!]!
  }

  type Mutation {
    createPost(post: CreatePostInput): Post!
    updatePost(_id: ID!, post: UpdatePostInput): Post!
    deletePost(_id: ID!): Post!
  }

  type Subscription {
    post: PostSubscriptionPayload!
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    post: Post!
  }

  input CreatePostInput {
    title: String
    description: String
    published: Boolean
    status: String
    address: String
    guest: String
    bedrooms: String
    beds: String
    bathrooms: String
    author: String
  }
  
  input UpdatePostInput {
    title: String
    description: String
    published: Boolean
    status: String
    address: String
    guest: String
    bedrooms: String
    beds: String
    bathrooms: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
