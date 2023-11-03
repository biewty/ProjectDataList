const { Motorcycle } = require("../models"); // เปลี่ยนจาก "../models" เป็นตำแหน่งที่อยู่ของ Model Motorcycle

module.exports = {
  // get all motorcycles // เปลี่ยนจาก get all tree เป็น get all motorcycles
  async index(req, res) {
    try {
      const motorcycles = await Motorcycle.findAll(); // เปลี่ยนจาก Tree เป็น Motorcycle
      res.send(motorcycles);
    } catch (err) {
      res.status(500).send({
        error: "The Motorcycle information was incorrect", // เปลี่ยนจาก "The Tree information was incorrect" เป็น "The Motorcycle information was incorrect"
      });
    }
  },
  // create motorcycle // เปลี่ยนจาก create tree เป็น create motorcycle
  async create(req, res) {
    try {
      const motorcycle = await Motorcycle.create(req.body); 
      res.send(motorcycle.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "Create Motorcycle incorrect", 
      });
    }
  },
  
  async put(req, res) {
    try {
      await Motorcycle.update(req.body, {
        where: {
          id: req.params.motorcycleId, 
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Update Motorcycle incorrect", 
      });
    }
  },
  
  async remove(req, res) {
    try {
      const motorcycle = await Motorcycle.findOne({
        where: {
          id: req.params.motorcycleId, 
        },
      });

      if (!motorcycle) {
        return res.status(403).send({
          error: "The Motorcycle information was incorrect",
        });
      }

      await motorcycle.destroy();
      res.send(motorcycle);
    } catch (err) {
      res.status(500).send({
        error: "The Motorcycle information was incorrect", 
      });
    }
  },

  
  async show(req, res) {
    try {
      const motorcycle = await Motorcycle.findByPk(req.params.motorcycleId); 
      res.send(motorcycle);
    } catch (err) {
      res.status(500).send({
        error: "The Motorcycle information was incorrect",
      });
    }
  },
};
