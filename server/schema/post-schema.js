import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({

        name: { type: String, required: true  },
        email: { type: String, required: true },
        // password: { type: String, required: true },
        createdDate: { type: Date},
        age: { type: Number, required: true},
        Imageurl: { type: String,required: false},
        phone: { type: Number,required: true},
        disease: {type: String,required: false},
        location: { type: String,required: true},
        bloodgroup: {type: String, required: true},
        donate_units: { type: Number, required: true},
        request_units: { type: Number, required: true},
        status: { type: Number, default: 0}
    
});


const post = mongoose.model('post', PostSchema);

export default post;