const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.html', {
        title: "Passo-a-passo",
        version: "0.0.0"
    });
});


router.get('/contato', (req, res, next) => {
    res.render('contato.html', {
        title: "Entre em contato "
    });
});

router.get('/spring', (req, res, next) => {
    res.render('spring.html', {
        title: "Primeiros passos com Spring "
    });
});


module.exports = router;