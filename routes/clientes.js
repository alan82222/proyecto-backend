const {Router} = require ('express')
const{addcliente, updateCliente, deleteCliente, listcliente, listncbyid}=require('../controllers/clientes');


const router =Router();

//http://localhost:3001/api/v1/cliente/
//http://localhost:3001/api/v1/cliente/1
//http://localhost:3001/api/v1/cliente/3

router.get('/', listcliente);
router.get('/:nc', listncbyid);
//router.post('/', signIn);
router.put('/', addcliente);
router.patch('/:nc', updateCliente);
router.delete('/:nc', deleteCliente);
module.exports =router;