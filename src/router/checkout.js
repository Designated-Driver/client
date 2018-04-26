var express = require('express');
var braintree = require('braintree');
var router = express.Router(); 
var gateway = require('../lib/gateway');

// router.get('/card', function (req, res) {
//     gateway.clientToken.generate({}, function (err, response) {
//       res.render('/card', {clientToken: response.clientToken, messages: req.flash('error')});
//     });
//   });

router.post('/checkout', function (req, res) {
    var nonce = req.body.paymentPayload;
  
    gateway.transaction.sale({
      amount: '147.00',
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true
      }
    }, function (err, result) {
      if (result.success || result.transaction) {
        console.log('Successful transaction')
      } else {
        res.status(500).send(error);
      }
    });
  });
  
  module.exports = router;