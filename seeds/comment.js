const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "What's up?",
        user_id: 3,
        post_id: 2,
        
    },
    {
        comment_text: "Woah!",
        user_id: 5,
        post_id: 4,
        
    },
    {
        comment_text: "Am I wrong?",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "You can contact me here.",
        user_id: 3,
        post_id: 5,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;