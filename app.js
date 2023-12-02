const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/user');
const Comment = require('./models/comment');

const sequelize = require('./util/database');

var cors = require('cors');

const app = express();

app.use(cors());

const userRoutes = require('./routes/user');


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log('hi');
    Post.findByPk(req.body.postid)
        //Post.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err, 'nasim'));

});

// app.use('/add-comment', (req, res, next) => {
//     console.log('hi');
// });

app.use('/user', userRoutes);

Comment.belongsTo(Post, { constraints: true, onDelete: 'CASCADE' });
Post.hasMany(Comment);

sequelize
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

