import mongoose from 'mongoose';

const Connection = async () => {

    try {
        const URL = "mongodb+srv://sahan11:8431444313@cluster0.jxeqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch(error) {
        console.log('Error while connnectiing to MongoDB',error);
    }
    
}

export default Connection;
