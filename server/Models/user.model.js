const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    jobName: { 
        type: String,
        required: [ true, "JobName is required"]
        },
    earn: {
        type: Number,
        required: [
            true,
            "earn is required"
        ]
    },
    languages: {
        type: [String],
        required: [true, 'languages are required']
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;