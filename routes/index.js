var express = require('express');
const { post } = require('jquery');
var router = express.Router();

//require server-side custom js
const lib = require('../lib');

/* GET a page */
router.get('*', (req, res, next) => {
  try {
    initPage();
  } catch(err) {
    console.log(err);
    res.status(404).render('four-oh-four');
  }

  function initPage() {
      res.render( 'index');
  }
  
});

/* POST submit form*/
router.post('/form_submit', (req, res, next) => {
    const data = req.body;
    lib.func.submitForm({
      url: data.url, title: data.title
    }, 
    {
      name: data.name,
      email: data.email,
      linkedin: data.linkedin,
      message: data.message,
    })
    .then(() => {
      res.status(200).send("Form sent successfully");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
