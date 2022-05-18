const Hero = require("../models/hero");
const ErrorHandler = require("../utils/errorHandler");

//Create a new Hero
exports.newHero = async (req, res, next) => {
  const hero = await Hero.create(req.body);

  res.status(201).json({
    success: true,
    hero,
  });
};

//Get All Heroes
exports.getHeroes = async (req, res, next) => {
  const heroes = await Hero.find();
  res.status(200).json({
    success: true,
    count: heroes.length,
    heroes,
  });
};

//Get a Single Hero
exports.getSingleHero = async (req, res, next) => {
  const hero = await Hero.findById(req.params.id);
  //if not successful
  if (!hero) {
    return res.status(404).json({
      success: false,
      message: "This Hero does not exist",
    });
  }

  res.status(200).json({
    success: true,
    hero,
  });
};

//Update a single Hero
exports.updateHero = async (req, res, next) => {
  let hero = await Hero.findById(req.params.id);

  if (!hero) {
    return res.status(404).json({
      successs: false,
      message: "Unable to find your Hero",
    });
  }

  hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    hero,
  });
};

//Delete Hero
exports.deleteHero = async (req, res, next) => {
  const hero = await Hero.findById(req.params.id);
  if (!hero) {
    return res.status(404).json({
      successs: false,
      message: "Unable to find your Hero",
    });
  }

  await hero.deleteOne();
  res.status(200).json({
    success: true,
    message: "Hero successfully deleted",
  });
};
