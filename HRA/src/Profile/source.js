import { gql } from 'apollo-boost';
import { getClient } from '../StuGraphQl';
import _get from 'lodash/get';
let profileSource = {
    fetchUser:function () {
        return getClient(queryUser)
            .query({query: queryUser})
            .then(response => _get(response, 'data.users') || {})
            .catch(err => {
                throw err.message || 'Error querying users';
            });
    }
};
export default profileSource;
const queryUser = gql`
    query {
        users {
            _id
            name
            email
            age
            permission
        }
    }
`;



export { queryUser };