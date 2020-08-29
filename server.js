const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const database = { 
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cook123',
            entries: 0,
            joined: new Date()
        }, 
        {
            id: '1234',
            name: 'Sam',
            email: 'Sam@gmail.com',
            password: 'bandana',
            entries: 0,
            joined: new Date() 
        }
    ]
}

// create a basic route. 
app.get('/', (req, res) => {
    res.send(database.users);
})

//remember to parse the json using body-parsr.

app.post('/signin', (req , res) => {
    // res.send('signing -hello')
    // res.json('signing')
    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {
        res.json('success');
    } else {
        res.status(400).json('error logging in');
    }
})

app.post('/register', (req, res) => {
    const {email,name,password} = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()      
    })
    res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const{id} = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
           return  res.json(user);
        }
    })
    if(!found) {
        res.status(404).json('not found');
    }
    
})

app.post('/image', (req,res) => {
    const{id} = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++
           return  res.json(user.entries);
        }
        if(!found) {
            res.status(404).json('not found');
        }
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

/* Our projects endpoint layout .. routes. 
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
We will test them with postman to make sure they are working. 
*/

//Bcrypt allows us to create a very secure login 
// npm i bcrypt-nodejs 