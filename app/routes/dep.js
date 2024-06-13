const {createDep, getDeps, getDep, updateDep, deleteDep} = require('../controllers/dep');

const router = require('express').Router();

const auth = require('../middlewares/auth');

router.post('/create', auth, createDep);
router.get('/all', auth, getDeps);
router.get('/:depName', auth, getDep);
router.put('/update/:depName', auth, updateDep);
router.delete('/delete/:depName', auth, deleteDep);

module.exports = router;