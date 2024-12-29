// Create web server
// Run web server
// Create a route
// Create a route handler
// Send back some JSON
// Test your work!

// 1. Load in express
// 2. Create a new express app
// 3. Create a route for GET /comments
// 4. Create a route for POST /comments
// 5. Create a route for GET /comments/:id
// 6. Create a route for PATCH /comments/:id
// 7. Create a route for DELETE /comments/:id
// 8. Create a route for GET /comments/:id/replies
// 9. Create a route for POST /comments/:id/replies
// 10. Create a route for GET /comments/:id/replies/:replyId
// 11. Create a route for PATCH /comments/:id/replies/:replyId
// 12. Create a route for DELETE /comments/:id/replies/:replyId
// 13. Test your work!

const express = require('express');
const app = express();
const comments = require('./comments.js');

app.use(express.json());

// 3. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// 4. Create a route for POST /comments
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.status(201).json(req.body);
});

// 5. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(comment);
});

// 6. Create a route for PATCH /comments/:id
app.patch('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    comment.text = req.body.text;
    res.json(comment);
});

// 7. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
        const index = comments.findIndex(comment => comment.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        comments.splice(index, 1);
        res.status(204).end();
    });
    
    // Start the server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });