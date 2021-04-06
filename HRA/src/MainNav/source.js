import {gql} from 'apollo-boost';
import {getClient} from '../StuGraphQl';
import _get from 'lodash/get';

let postSource = {
    fetchPost: function () {
        return getClient(queryPost)
            .query({query: queryPost})
            .then(response => _get(response, 'data.posts') || {})
            .catch(err => {
                throw err.message || 'Error querying users';
            });
    },
    fetchOrder: function () {
        return getClient(queryOrder)
            .query({query: queryOrder})
            .then(response => _get(response, 'data.orders') || {})
            .catch(err => {
                throw err.message || 'Error querying users';
            });
    },

    createPost: function (variables) {
        return getClient(CreatePost)
            .mutate({mutation: CreatePost, variables})
            .then(response => _get(response, 'data.createPost') || {})
            .catch(err => {
                throw err.message || 'Error while mutate';
            });


    },

    createOrder: function (variables) {
        return getClient(CreateOrder)
            .mutate({mutation: CreateOrder, variables})
            .then(response => _get(response, 'data.createOrder') || {})
            .catch(err => {
                throw err.message || 'Error while mutate';
            });


    },

    updatePost: function(variables){
        console.log(variables, 'variables');

        return getClient(UpdatePost)
            .mutate({ mutation: UpdatePost, variables})
            .then(response => _get(response, 'data.updatePost._id') || {})
            .catch(err => {
                throw err.message || 'Error while mutate'
            });
    },

    createComment: function (variables) {
        return getClient(CreateComment)
            .mutate({mutation: CreateComment, variables})
            .then(response => _get(response, 'data.createComment') || {})
            .catch(err => {
                throw err.message || 'Error while mutate';
            });


    },
    deletePost: function (variables) {
        console.log("id from source", variables);
        return getClient(DeletePost)
            .mutate({mutation: DeletePost, variables})
            .then(response => _get(response, 'data.deletePost._id') || {})
            .catch(err => {
                throw err.message || 'Error while mutate';
            });


    }
};
export default postSource;

const queryOrder = gql`
    query{
        orders{
            _id
            inDate
            outDate
            guest
            author{
                _id
                name
                }
            post{
                _id
                author{
                    _id
                    name
                    }
                }
               }
            }`;

const queryPost = gql`
    query{
        posts{
            _id
            title
            description
            published
            status
            address
            guest
            bedrooms
            beds
            bathrooms
            #        image
            author{
                _id
                name
            }
            comments{
                _id
                text
                star
                post{
                    _id
                }
            }
        }
    }`;

const CreatePost = gql`

    mutation CreatePost(
    $title:String,
    $description:String,
    $address:String,
    $status:String,
    $guest:String,
    $bedrooms:String,
    $beds:String,
    $bathrooms:String,
    $published:Boolean,
    $author:String
    #    $image:Files!

    )
    {
        createPost(
            post: {
                title: $title,
                description: $description,
                address: $address,
                status: $status,
                guest: $guest,
                bedrooms: $bedrooms,
                beds: $beds,
                bathrooms: $bathrooms,
                published: $published,
                author: $author
                #          image: $Files
            }) {
            _id
            title
            description
            address
            status
            guest
            bedrooms
            beds
            bathrooms
            published
            author{
                _id
                name
            }

        }


    }
`;

const CreateOrder = gql`

mutation CreateOrder(
    $inDate:String!,
    $outDate:String!,
    $guest:String!,
    $post:String!,
    $author:String!,
)
{
  createOrder(order:{
    inDate: $inDate,
    outDate: $outDate,
    guest:$guest,
    post:$post,
    author: $author
  })
  {
    _id
    inDate
    outDate
    guest
    author{
      _id
    }
    post{
      _id
    }
  }
}`;


const CreateComment = gql`

    mutation CreateComment(
    $text:String!,
    $star:Int!,
    $post:String!,
    $author:String!

    )
    {
        createComment(
            comment: {
                text: $text,
                star: $star,
                post:$post,
                author: $author
                #          image: $Files
            }) {
            _id
            text
            star

        }


    }
`;

const DeletePost = gql`

    mutation
    deletePost(
    $id: ID!,

    )
    {
        deletePost(_id:$id){
            _id

        }
    }
`;

const UpdatePost =gql`
mutation UpdatePost($_id:ID!, $title:String, $description:String, $status:String $published: Boolean, $address:String, $guest:String, $bedrooms:String, $beds:String, $bathrooms:String){
  updatePost(_id:$_id,post:{
    title:$title,
    description:$description,
    status:$status,
    published:$published,
    address:$address,
    guest:$guest,
    bedrooms:$bedrooms,
    beds:$beds,
    bathrooms:$bathrooms
    
  }){
    _id
    description
    address
    published
    status
    guest
    bedrooms
    beds
    bathrooms
    author{
      _id
      name
    }
  }
}
`


export {queryPost, CreatePost, CreateComment, DeletePost, UpdatePost}