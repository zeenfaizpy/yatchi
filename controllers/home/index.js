const exprss = require('express')
const router = exprss.Router()

router.get("/", (req, res, next) => {
    res.render('home', {'items': ['item 1', 'item 2', 'item 3']})
})

module.exports = router