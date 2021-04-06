export default `
  type Order {
    _id: ID!
    inDate: String!
    outDate: String!
    guest: String!
    author: User!
    post: Post!
  }

  type Query {
    order(_id: ID!): [Order!]!
    orders: [Order!]!
  }

  type Mutation {
    createOrder(order: CreateOrderInput!): Order!
    updateOrder(_id: ID!, order: UpdateOrderInput): Order!
    deleteOrder(_id: ID!): Order!
  }

  type Subscription {
    order(postId: ID!): OrderSubscriptionPayload!
  }

  type OrderSubscriptionPayload {
    mutation: MutationType!
    order: Order!
  }

  input CreateOrderInput {
    inDate: String!
    outDate: String!
    guest: String!
    post: String!
    author: String!
  }
  
  input UpdateOrderInput {
    inDate: String
    outDate: String
    guest: String
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
