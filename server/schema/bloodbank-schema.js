import mongoose from 'mongoose';

const BloodBankSchema = new mongoose.Schema({

        name: { type: String, required: true },
        A_plus: { type: Number, required: true},
        B_plus: { type: Number, required: true},
        AB_plus: { type: Number, required: true},
        O_plus: { type: Number, required: true},
        A_minus: { type: Number, required: true},
        B_minus: { type: Number, required: true},
        AB_minus: { type: Number, required: true},
        O_minus: { type: Number, required: true},
    
});


const bloodbank = mongoose.model('bloodbank', BloodBankSchema);
// console.log("done")
export default bloodbank;