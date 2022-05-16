const Hero = require("../models/hero");

exports.newHero = async (req, res, next) => {
  const hero = await Hero.create(req.body);

  res.status(201).json({
    success: true,
    hero,
  });
};

exports.getHeroes = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This route will show all comments in the database",
  });
};
