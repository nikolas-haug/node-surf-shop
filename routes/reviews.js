const express = require('express');
const router = express.Router();

/* GET reviews index /reviews */
router.get('/', (req, res, next) => {
    res.send('INDEX /reviews');
});

/* GET reviews new /reviews/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /reviews/new');
});

/* POST reviews create /reviews */
router.review('/', (req, res, next) => {
    res.send('CREATE /reviews');
});

/* GET reviews show /reviews/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /reviews/:id');
});

/* GET reviews edit /reviews/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /reviews/:id/edit');
});

/* PUT reviews update /reviews/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /reviews/:id');
});

/* DELETE reviews destroy /reviews/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /reviews/:id');
});

module.exports = router;

