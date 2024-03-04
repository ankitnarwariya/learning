const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs')

const port = 5000;

const isLoggedIn = (req, res, next) => {
    const loggedIn = true;
    if (loggedIn) {
        next();
    } else {
        res.send('User not logged in...')
    }
}



app.use(bodyParser.urlencoded({ extended: false }));
app.use(isLoggedIn); // By using this logge in functionality will work in all the pages 

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/register.html")
});

app.get('/not-found', (req, res) => {
    res.sendFile(__dirname + '/404.html')
})


// app.get('/register', isLoggedIn, (req, res) => {  //By adding isLoggedIn in between of route and req,res it will work in that page only 
//     res.sendFile(__dirname + "/register.html")
// });

app.post('/api/register', (req, res) => {
    console.log(req.body);
    res.send('Registration Successful')
});

const USERS = [{
    username: 'ankit',
    name: 'Ankit Singh',
    age: 25,
    isOnline: true,
    hobbies: ['Coding', 'Watching Movies', 'Travelling'],
},
{
    username: 'neeraj',
    name: 'Neeraj Singh',
    age: 23,
    isOnline: false,
    hobbies: ['Editing', 'Travelling'],
},
{
    username: 'vijendra',
    name: 'Vijendra Singh',
    age: 23,
    isOnline: true,
    hobbies: ['Editing', 'Photography'],
}]

// app.get('/user/:username', (req, res) => {
//     const { username } = req.params;
//     res.send({ username });
//     // res.render('user.ejs');
// })

app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    const user = USERS.find(user => user.username === username);

    if (user) {
        res.render('user.ejs', user);
    } else {
        res.redirect('/not-found')
    }
});



// app.get('/ankit', (req, res) => {
//     res.render('user.ejs', {
//         name: 'Ankit Singh',
//         age: 25,
//         isOnline: true,
//         hobbies: ['Coding', 'Watching Movies', 'Travelling'],
//     })
// })

// app.get('/neeraj', (req, res) => {
//     res.render('user.ejs', {
//         name: 'Neeraj Singh',
//         age: 23,
//         isOnline: false,
//         hobbies: ['Editing', 'Travelling'],
//     })
// })

app.listen(port, (err) => {
    if (!err) {
        console.log('Server Started on', port);
    } else {
        console.log(err);
    }
})