const Appreciation = require("../models/appreciation");
const ErrorHandler = require("../utils/errorHandler");

//create new appreciation => /api/v1/appreciation/new
exports.newAppreciation = async (req, res, next) => {
  //get all the data from the body to create the new appreciation
  const appreciation = await Appreciation.create(req.body);

  //HTTP response code 201 indicates successfully created.
  //Generally 2XX means success
  //201 means created

  res.status(201).json({
    success: true,
    appreciation,
  });
};

//Get all appreciations => /api/v1/appreciations
exports.getAppreciations = async (req, res, next) => {
  const appreciations = await Appreciation.find();
  res.status(200).json({
    success: true,
    count: appreciations.length,
    appreciations,
  });
};

//get a single product detail => /api/v1/appreciation/:id
exports.getSingleAppreciation = async (req, res, next) => {
  const appreciation = await Appreciation.findById(req.params.id);

  //if not successful in find appreciation by Id
  if (!appreciation) {
    return res.status(404).json({
      success: false,
      message: "Appreciation not found for this Hero",
    });
  }

  res.status(200).json({
    success: true,
    appreciation,
  });
};

//Update Appreciation => /api/v1/appreciation/:d
exports.updateAppreciation = async (req, res, next) => {
  //appreciation is referenced with LET meaning it's value will change after finding it
  //first we get the single appreciation
  let appreciation = await Appreciation.findById(req.params.id);

  //if not successful in find appreciation by Id
  if (!appreciation) {
    return res.status(404).json({
      success: false,
      message: "Appreciation not found for this Hero",
    });
  }
  //if successful,
  //next we get it and update it's content
  appreciation = await Appreciation.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    appreciation,
  });
};

//Delete Appreciation => /api/v1/admin/appreciation/:id
exports.deleteAppreciation = async (req, res, next) => {
  const appreciation = await Appreciation.findById(req.params.id);

  if (!appreciation) {
    return res.status(404).json({
      success: true,
      message: "No appreciation to delete",
    });
  }

  await appreciation.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appreciation has been succesfully deleted",
  });
};
