/* TODO: Import { Schema, model } = require('mongoose'); 
const reaction = require('./reaction');

new Schema2(
    {
        thoughtText:
    },
    {
        createdAt:
    },
    {
        username:
    },
    reactions: [reaction]
);

Schema2.virtual('reaction').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', Schema2);

module.exports = Thoughts;
*/