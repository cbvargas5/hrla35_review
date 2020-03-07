const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      helper.students.getStudent()
        .then((results) => res.json(results))
        .catch((err) => res.status(400).send('not good', err))
    },
    post: (req, res) => {
      var name = req.body.name;
      var imgurl = req.body.imgurl;
//in the above line we are  taking in data from the req

//the line below is an abstraction saying key = value
      helper.students.postName({name, imgurl})
        .then(() => res.status(200).send('posted'))
          .catch((err) => res.status(400).send(err))

    },
    update: (req, res) => {
      var name = req.body.name;
      var _id = red.params.id;

      helper.students.updateName({_id}, {name})
        .then(() => res.status(200).send('posted'))
        .catch((err) => res.status(400).send(err))

    }
  }
};

module.exports = controller