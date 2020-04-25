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
        title: "Contato"
    });
});

router.get('/livros', (req, res, next) => {
    res.render('livros.html', {
        title: "Livros"
    });
});

router.get('/qa', (req, res, next) => {
    res.render('livrosjava/capitulo1.html', {
        title: "Livro - Java como programa"
    });
});


router.get('/qaa', (req, res, next) => {
    res.render('livrosjava/capitulo2.html', {
        title: "Livro - Java como programa"
    });
});

router.get('/re', (req, res, next) => {
    res.render('livrosjava/resumo1.html', {
        title: "Livro - Java como programa"
    });
});

router.get('/ree', (req, res, next) => {
    res.render('livrosjava/resumo2.html', {
        title: "Livro - Java como programa"
    });
});


router.get('/spring', (req, res, next) => {
    res.render('spring.html', {
        title: "Spring Boot "
    });
});

router.get('/node', (req, res, next) => {
    res.render('node.html', {
        title: "Node js"
    });
});

router.get('/instnodejs', (req, res, next) => {
    res.render('nodejs/instnodejs.html', {
        title: "Node js - Install"
    });
});


router.get('/deploy', (req, res, next) => {
    res.render('nodejs/deploy.html', {
        title: "Node js - Install"
    });
});




module.exports = router;