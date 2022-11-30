const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /video games')
})

module.exports = router