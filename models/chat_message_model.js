const {
    Schema,
    model
} = require('mongoose');

const imageSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    sent_by: {
        type: String,
        required: true
    },
    is_image: {
        type: Boolean,
        default: false
    }
});




const chatMessageSchema = new Schema({
    worker: {
        type: String,
        ref: 'Worker',
        required: true
    },
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    from: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    is_read: {
        type: Boolean,
        default: false
    },
    media: {
        type: [imageSchema],
        default: []
    }
});

module.exports.chatModel = model('ChatMessage', chatMessageSchema);
module.exports.chatMessageSchema = chatMessageSchema;