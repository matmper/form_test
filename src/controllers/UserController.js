const puppy = require('../models/Puppy')

const UserController = {

  login: (req, res) => {
    res.render('index')
  },

  store: (req, res) => {
    const { name, gender, color, size, age } = req.body;
    puppy.create({ name, gender, color, size, age })
      .then(puppy => {
        res.status(201).json({
          message: 'Mascote cadastrado com sucesso!',
          puppy,
        });
      })
      .catch(err => {
        console.error("Erro ao criar Puppy:", err.message);
        res.status(500).json({error: 'Erro ao salvar os dados. Tente novamente.'});
      });
  }

}

module.exports = UserController
