const express = require('express')
const Category = require('../../models/categories')
const router = express.Router()

router.get("/", (req, res, next) => {
    res.render('home', {'items': ['item 1', 'item 2', 'item 3']})
});

router.get("/categories", (req, res, next) => {
    Category.getAll().then((categories) => {
        res.json(categories)
    })
});

module.exports = router