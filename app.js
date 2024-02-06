const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//---> express app
const app = express();

//---> Connect to mongoDB
const dbURI = 'mongodb+srv://sanjai0403:virat18mrf@nodetuts.4gfadzf.mongodb.net/';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


//---> Custom middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


//---> register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blogs route
app.use('/blogs', blogRoutes);

//---> 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
