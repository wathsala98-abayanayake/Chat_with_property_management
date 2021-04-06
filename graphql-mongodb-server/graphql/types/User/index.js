export default `
  type User {
    _id: String!
    name: String!
    email: String!
    age: String!
    permission: String!
    password:String!
    posts: [Post!]!
    comments: [Comment!]!
  }
  type AuthData{
  userId:ID!
  token:String!
  tokenExpiration:Int!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
    login(email:String!,password:String!):AuthData!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: String!, user: UpdateUserInput!): User!
    deleteUser(_id: String!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: String!
    permission: String!
    password:String
  }
  
  input UpdateUserInput {
    name: String
    email: String
    age: String
    permission: String
    password:String

  } 
`;
