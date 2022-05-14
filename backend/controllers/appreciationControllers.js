const Appreciation = require("../models/appreciation");

//create new appreciation
exports.newAppreciation = async (req, res, next) => {
  //get all the data from the body to create the new appreciation
  const appreciation = await Appreciation.create(req.body);

  res.status(201).json({
    success: true,
    appreciation,
  });
};

exports.getAppreciations = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This route will show all comments in the database",
  });
};
