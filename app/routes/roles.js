const {createRole, getRole, getRoles, updateRole, deleteRole} = require('../controllers/roles');

const router = require('express').Router();

const auth = require('../middleware/auth');

router.post('/create', auth, createRole);
router.get('/all', auth, getRoles);
router.get('/:roleName', auth, getRole);
router.put('/update/:roleName', auth, updateRole);
router.delete('/delete/:roleName', auth, deleteRole);

module.exports = router;