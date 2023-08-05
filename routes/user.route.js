const { Router } = require('express');
const { getUser, postUser, putUser, deleteUser  } = require('../controllers/users.controller');

const router = Router();

router.get('/', getUser );
router.post('/', postUser );
router.put('/:id', putUser );
router.delete('/:id', deleteUser );

module.exports = router;