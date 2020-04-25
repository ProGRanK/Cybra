
// Chunk 1
require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const { log } = console;
const app = express();

const PORT = 8081;


// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());



// email, subject, text
app.post('/email', (req, res) => {
    const {  orgname,
        username,
        email,
        phone,
        subject,
        text } = req.body;
    log('Data: ', req.body);

    sendMail( orgname,
        username,
        email,
        phone,
        subject,
        text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});

// use adawat
// app.use('/css', express.static('css'));

// css links
// Render home page
app.get('/css/normalize.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'normalize.css'));
});
app.get('/css/bootstrap.min.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'bootstrap.min.css'));
});
app.get('/css/main.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'main.css'));
});
app.get('/css/animate.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'animate.css'));
});
app.get('/css/caroulsel.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'caroulsel.css'));
});
app.get('/css/about-us.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'about-us.css'));
});

app.get('/css/letstalk.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'letstalk.css'));
});
app.get('/css/bootstrap.min.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'bootstrap.min.css'));
});
app.get('/css/all.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'all.css'));
});
app.get('/css/style2.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style2.css'));
});
app.get('/css/theme.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'theme.css'));
});
app.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style.css'));
});
app.get('/css/website.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'website.css'));
});
app.get('/css/style-tr.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style-tr.css'));
});

// javascript link


app.get('/js/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','main.js'));
});
app.get('/js/caroulsel.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','caroulsel.js'));
});
app.get('/js/drop.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','drop.js'));
});
app.get('/js/error.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','error.js'));
});
app.get('/js/main2.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','main2.js'));
});
app.get('/js/slick.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','slick.js'));
});
app.get('/js/sticky.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','sticky.js'));
});
app.get('/js/website.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','website.js'));
});
app.get('/js/training.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','training.js'));
});
app.get('/js/sweetalert.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','sweetalert.js'));
});
app.get('/js/contact.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','contact.js'));
});
app.get('/js/particles.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','particles.js'));
});
app.get('/js/jquery-3.4.1.min.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'js','jquery-3.4.1.min.js'));
});
app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.js'));
});


// Render home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'index.html'));
});
app.get('/about-us.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'about-us.html'));
});
app.get('/camera.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'camera.html'));
});
app.get('/digital-transformation.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'digital-transformation.html'));
});
app.get('/it.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'it.html'));
});
app.get('/marketing.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'marketing.html'));
});
app.get('/training.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'training.html'));
});
app.get('/web.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'web.html'));
});
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'contact.html'));
});

// Error page
app.get('/404.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', '404.html'));
});

// Email sent page
app.get('/feedback.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'tr', 'feedback.html'));
});


// Start server
app.listen(PORT, () => log('Server is starting on PORT, ', 8081));