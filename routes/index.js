const express = require('express');
const userSchema = require('../schemas/users');

const router = express.Router();
const Ajv = require('ajv');

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.post('/', (req, res, next) => {
  console.log(req.body.name);
  const validate = ajv.compile(userSchema);
  const valid = validate({

    name: req.body.name,
    username: req.body.username,
    pwd: req.body.pwd,
    profile: req.body.profile,
  });
  if (!valid) {
    const { errors } = validate;
    const result = {
      status: 'invalid data',
      payload: { errors },
    };
    console.log(result.payload.errors);
    res.json(result);
  }
  console.log(valid);
});

module.exports = router;
