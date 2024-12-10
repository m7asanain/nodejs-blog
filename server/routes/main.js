const express = require('express');
const router = express.Router();

// routes
router.get('', (req, res) => {
    const locals = {
        title: "NodeJS Blog",
        description: "Simple Blog created with NodeJs, Express and MongoDB."
    }

    // res.send("Hello World");
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    const locals = {
        title: "About",
        description: "About Page description."
    }

    // res.send("Hello World");
    res.render('about', { locals });
});

router.get('/contact', (req, res) => {
    const locals = {
        title: "Contact",
        description: "Contact Page description."
    }

    // res.send("Hello World");
    res.render('contact', { locals });
});

module.exports = router;