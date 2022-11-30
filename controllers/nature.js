const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /nature')
})

module.exports = router