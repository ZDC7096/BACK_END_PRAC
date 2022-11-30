const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /religon')
})

module.exports = router