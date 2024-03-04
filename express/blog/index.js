const express = require('express');
const dbConnection = require('./config/db');
const Post = require('./models/Post');
const app = express();
const PORT = 3000;

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


dbConnection().then(() => {
    console.log('DB connected Successfully');
}).catch((error) => {
    console.log(error)
})


//Testing API
app.get('/api/', (req, res) => {
    res.status(200).json({ message: 'API is working fine' });
});


//fetching all the posts
app.get('/api/posts', (req, res) => {
    Post.find({}).then((data) => {
        res.status(200).json({ data });

    }).catch((error) => {
        res.status(500).json({ message: `Error: ${error}` })
    });
})


//get a specific post
app.get('/api/posts/:id', (req, res) => {

    let postID = req.params.id;
    Post.find({ _id: postID }).then((data) => {
        res.status(200).json({ data });

    }).catch((error) => {
        res.status(500).json({ message: `Error: ${error}` })
    });
})


//create a new post
app.post('/api/posts', (req, res) => {
    let newPost = new Post({
        title: req.body.title,
        description: req.body.description
    })

    newPost.save().then((data) => {
        res.status(200).json({ message: 'Post created successfully' });

    }).catch((error) => {
        res.status(500).json({ message: `Error: ${error}` })
    });

})


//updating any specific post
app.put('/api/posts/:id', (req, res) => {
    let postID = req.params.id;
    const updatedData = {
        title: req.body.title,
        description: req.body.description
    }

    Post.findByIdAndUpdate(postID, updatedData).then((data) => {
        res.status(200).json({ message: 'Post updated successfully' });

    }).catch((error) => {
        res.status(500).json({ message: `Error: ${error}` })
    });

})



//deleting any specific post
app.delete('/api/posts/:id', (req, res) => {
    let postID = req.params.id;

    Post.findByIdAndDelete({ _id: postID }).then((data) => {
        res.status(200).json({ message: 'Post deleted successfully' });

    }).catch((error) => {
        res.status(500).json({ message: `Error: ${error}` })
    });

})








app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Your Server is running on port ${PORT}`);
    } else {
        console.error(`Error starting server: ${error.message}`);
    }
});
