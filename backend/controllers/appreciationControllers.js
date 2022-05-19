const Appreciation = require("../models/appreciation");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

//create new appreciation => /api/v1/appreciation/new
exports.newAppreciation = catchAsyncErrors(async (req, res, next) => {
  //get all the data from the body to create the new appreciation
  const appreciation = await Appreciation.create(req.body);

  //201 means succesfully created
  res.status(201).json({
    success: true,
    appreciation,
  });
});

//Get all appreciations => /api/v1/appreciations
exports.getAppreciations = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const appreciationCount = await Appreciation.countDocuments();

  const apiFeatures = new APIFeatures(Appreciation.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  const appreciations = await apiFeatures.query;

  res.status(200).json({
    success: true,
    count: appreciations.length,
    appreciationCount,
    appreciations,
  });
});

//get a single product detail => /api/v1/appreciation/:id
exports.getSingleAppreciation = catchAsyncErrors(async (req, res, next) => {
  const appreciation = await Appreciation.findById(req.params.id);

  //if not successful in find appreciation by Id
  if (!appreciation) {
    return next(new ErrorHandler("Appreciation not found", 404));
  }

  res.status(200).json({
    success: true,
    appreciation,
  });
});

//Update Appreciation => /api/v1/appreciation/:d
exports.updateAppreciation = catchAsyncErrors(async (req, res, next) => {
  //appreciation is referenced with LET meaning it's value will change after finding it
  //first we get the single appreciation
  let appreciation = await Appreciation.findById(req.params.id);

  //if not successful in find appreciation by Id
  if (!appreciation) {
    return next(new ErrorHandler("Appreciation not found", 404));
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
});

//Delete Appreciation => /api/v1/admin/appreciation/:id
exports.deleteAppreciation = catchAsyncErrors(async (req, res, next) => {
  const appreciation = await Appreciation.findById(req.params.id);

  if (!appreciation) {
    return next(new ErrorHandler("Appreciation not found", 404));
  }

  await appreciation.deleteOne();
  res.status(200).json({
    success: true,
    message: "Appreciation has been succesfully deleted",
  });
});
