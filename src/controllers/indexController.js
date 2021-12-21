const { getPlatos } = require("../data/dataBase");

module.exports = {
  index: (req, res) => {
    res.render("index", {
      platos: getPlatos
    });
  },
  menuDetail: (req, res) => {
    let platosID = getPlatos.find(platosID => {
      return platosID.id === +req.params.id
    });

    res.render("detalleMenu", {
      platos: platosID
    });
  },

};