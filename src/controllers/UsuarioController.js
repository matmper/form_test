const UsuarioController = {

login: (req,res) => {
  res.render('index')
},

save: (req,res) => {
  Puppy.create({
    name: req.body.name,
    sex: req.body.sex,
    age: req.body.age,
    gender: req.body.gender,
    size: req.body.size,
  })
 res.redirect('/')
}
}

module.exports = UsuarioController