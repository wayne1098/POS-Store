const { policy_check } = require('../../middlewares');
const deliveryAddressController = require('./controller');
const router = require('express').Router();

router.get('/delivery-address', policy_check('view', 'DeliveryAddress'), deliveryAddressController.index);
router.post('/delivery-address', policy_check('create', 'DeliveryAddress'), deliveryAddressController.store);
router.put('/delivery-address/:id', deliveryAddressController.update);
router.delete('/delivery-address/:id', deliveryAddressController.destroy);


module.exports = router;