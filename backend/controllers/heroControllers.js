const Hero = require("../models/hero");
const Appreciation = require("../models/appreciation");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

//Create a new Hero
exports.newHero = catchAsyncErrors(async (req, res, next) => {
  const result = await cloudinary.v2.uploader.upload(req.body.profilePicture, {
    folder: "social-coin/hero_avatars",
    width: 240,
    crop: "scale",
  });

  req.body.profilePicture = result;
  req.body.user = req.user.id;

  const hero = await Hero.create(req.body);

  res.status(201).json({
    success: true,
    hero,
  });
});

//Get All Heroes
exports.getHeroes = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 8;
  const heroesCount = await Hero.countDocuments();

  //const apiFeatures = new APIFeatures(Hero.find(), req.query).search();

  apiFeatures = new APIFeatures(
    Hero.find().populate("appreciations"),
    req.query
  ).search();

  const heroes = await apiFeatures.query;

  res.status(200).json({
    success: true,
    heroesCount,
    resPerPage,
    heroes,
  });
});

//Get All Heroes => /api/v1/admin/heroes
exports.getAdminHeroes = catchAsyncErrors(async (req, res, next) => {
  const heroes = await Hero.find().populate("appreciations");
  //const heroes = await Hero.find();

  res.status(200).json({
    success: true,
    heroes,
  });
});

//Get a Single Hero
exports.getSingleHero = catchAsyncErrors(async (req, res, next) => {
  const hero = await Hero.findById(req.params.id).populate("appreciations");
  //const hero = await Hero.findById(req.params.id);

  //if not successful
  if (!hero) {
    return next(new ErrorHandler("Hero not found", 404));
  }

  res.status(200).json({
    success: true,
    hero,
  });
});

//Associate Hero with Appreciation
exports.associateHeroAppreciations = catchAsyncErrors(
  async (req, res, next) => {
    req.body.user = req.user.id;

    const hero = await Hero.findById(req.params.heroid);
    const appreciation = await Appreciation.findById(req.params.appreciationid);

    hero.appreciations.push(appreciation);
    hero.save();

    appreciation.hero = hero;
    appreciation.save();

    res.status(201).json({
      success: true,
      hero,
      appreciation,
    });
  }
);

//Update a single Hero
exports.updateHero = catchAsyncErrors(async (req, res, next) => {
  let hero = await Hero.findById(req.params.id);

  if (!hero) {
    return next(new ErrorHandler("Unable to Update Hero", 404));
  }

  hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    hero,
  });
});

//Delete Hero
exports.deleteHero = catchAsyncErrors(async (req, res, next) => {
  const hero = await Hero.findById(req.params.id);

  if (!hero) {
    return next(new ErrorHandler("Hero not found", 404));
  }

  await hero.deleteOne();
  res.status(200).json({
    success: true,
    message: "Hero successfully deleted",
  });
});
