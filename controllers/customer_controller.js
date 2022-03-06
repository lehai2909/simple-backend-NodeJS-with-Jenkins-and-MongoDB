
var Customer = require('../models/customer')
var async = require('async')

exports.customer_create_get = function(req, res, next) {
    res.render('customer', { title: 'Add new customer' });
  }

exports.customer_create_post = function(req, res, next){
  var customer = new Customer(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }
  )

  customer.save(function(err){
    if (err) { return next(err);}
    res.redirect('/')
  })
}