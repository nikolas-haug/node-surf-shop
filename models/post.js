const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');

const PostSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [ { url: String, public_id: String } ],
    location: String,
    coordinates: Array,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

// Pre hook/middleware to delete ref reviews in other model
// Must be a 'function' not an '=>' because of 'this' keyword access
PostSchema.pre('remove', async function() {
    await Review.remove({
        _id: {
            $in: this.reviews
        }
    });
});

module.exports = mongoose.model('Post', PostSchema);