const router = require('express').Router();
const path = require('path');

router.get('/apiFirstPage', (req, res) => {
    console.log('api-routes reached!')
    res.json([
        {
            "title":"test first api call",
            "text":"You have reached the api",
        }
    ]
    )
});


module.exports = router;