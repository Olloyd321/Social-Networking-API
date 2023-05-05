const router = require('express').Router();
const path = require('path');

router.get('/apiFirstPage', (req, res) => {
    console.log('Thoughts-routes reached!')
    res.json([
        {
            "title":"test the first thoughts call",
            "text":"You have reached the toughts.js api!",
        }
    ]
    )
});


module.exports = router;