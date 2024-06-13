const {create,get,getAll, update, deleteUser,login, search} = require('../controllers/users');

const router = require('express').Router();

const auth = require('../middleware/auth');

router.post('/create', create);
router.get('/login', login);
router.get('/:id', auth, get);
router.get('/all', auth, getAll);
router.get('/search', auth, search);
router.put('/update/:id', auth, update);
router.delete('/delete/:id', auth, deleteUser);

module.exports = router;