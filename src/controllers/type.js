const TypeModel = require('../models/type');

const newType = (req, res) => {

  TypeModel.findOne({name:req.body.name}, (data) => {

      if ( data === null ) {
        const newType = new TypeModel({
          name:req.body.name,
          description: req.body.description,
        })

        newType.save((err, data)=>{
          if (err) return res.json({Error: err});
          return res.json(data);
        })

      } else {
        return res.json({message:"Type already exists"});
      }
  })
};

/* async function newType(req, res) {
  try {
    const query = { name: req.body.name }
    const data = await TypeModel.findOne(query);
    if (data == null) {
      const newType = new TypeModel({
        name: req.body.name,
        description: req.body.description,
      });

      // save to database
      newType.save((err, data) => {
        if (err) return res.json("Something is wrong. Please check.");
        return res.json(data);
      });
    } else {
      return res.json(`${req.body.name} Type already exists.`);
    }
  } finally {
  }
}; */

//export controller functions
module.exports = {
  newType,
};
