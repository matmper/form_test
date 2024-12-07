

const UsuarioController = {

login: (req,res) => {
  res.render('index')
},

save: (req, res) => {
  try {
      // Desestruturando os dados do req.body
      const { name, gender, color, size, age } = req.body;
       Puppy.create({ name, gender, color, size, age });
      res.redirect('/');
  } catch (error) {
      console.error("Erro ao criar Puppy:", error.message);
      res.status(500).send('Erro ao salvar os dados. Tente novamente.');
  }
}

}

module.exports = UsuarioController
