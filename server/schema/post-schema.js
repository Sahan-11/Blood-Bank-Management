import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
   
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false   
    },
    createdDate: {
        type: Date
    },
    NAME: {
        type: String,
        required: true
    },
    AGE: {
        type: String,
        required: true
    },
    Imageurl: {
        type: String,
        required: false
    },
    PHONE: {
        type: String,
        required: true
    },
    DISEASE: {
        type: String,
        required: false
    },
    LOCATION: {
        type: String,
        required: true
    },
    BLOODGROUP: {
        type: String,
        required: true
    },
    EmailId: {
        type: String,
        required: true
    }
});


const post = mongoose.model('post', PostSchema);

export default post;