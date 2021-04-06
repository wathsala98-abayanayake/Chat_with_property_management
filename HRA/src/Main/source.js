import {gql} from 'apollo-boost';
import {getClient} from "../StuGraphQl";
import _get from "lodash/get";

let authSource = {
    login: function (variables) {
        return getClient(login)
            .query({query: login, variables})
            .then(response => _get(response, 'data.login') || {})
            .catch(err => {
                throw err.message || 'Error in login';
            });
    },
    signUp:function (variables) {
        console.log(variables, 'variablessignip');

        return getClient(CreateUser)
            .mutate({
         mutation: CreateUser,variables

            })
            .then(response => _get(response, 'data.user') || {})
            .catch(err => {
                throw err.message || 'Error while login';
            });
    }
};
export {authSource};

const login = gql`

    query Login(
    $email: String!,
    $password: String!
    )
    {
        login(email:$email, password: $password) {
            userId
            token
            tokenExpiration
        }


    }
`;

const CreateUser = gql`

    mutation CreateUser($name: String!, $email: String!,$age: String!, $permission: String!, $password:String!) {
        createUser(user:{name: $name, email: $email, age:$age, permission:$permission, password:$password}) {
            _id
            name
            email
            age
            permission
            password
        }


    }
`;


export {login,CreateUser}
