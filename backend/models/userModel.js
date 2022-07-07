const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        default: '0'
    },
    firstName: {
        type: String
    },
    fullName: {
        type: String
    },
    password: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    },
    status: {
        type: Boolean
    },
    interviews: [{
        question: {
            type: String,
        },
        questionTitle: {
            type: String,
        },
        answer: {
            type: Object,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    }],
    address: {
        type: String,
    }
}, { timestamps: true }
);

const userModel = new mongoose.model('User', userSchema);
module.exports = userModel;
