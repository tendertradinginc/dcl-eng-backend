const {
  createCategoriesDb,
  getAllCategoriesFromdb,
  getSingleCategoryFromdb,
  UpdateCategoryFromdb,
  DeleteCategoryFromdb,
  changeCategoryStatus,
  getAllCategoriesDashboardEdition,
} = require("../services/category.service");

exports.createCategories = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await createCategoriesDb(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully Create categories",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  create categories",
      error: error.message,
    });
  }
};

exports.getAllCategories = async (req, res, next) => {
  try {
    const result = await getAllCategoriesFromdb();

    res.status(200).json({
      status: "success",
      message: "Successfully Create categories",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  create categories",
      error: error.message,
    });
  }
};

exports.getAllCategoriesDashboard = async (req, res) => {
  try {
    const result = await getAllCategoriesDashboardEdition();

    res.status(200).json({
      status: "success",
      message: "Successfully Create categories",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  create categories",
      error: error.message,
    });
  }
};

exports.getSingleCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getSingleCategoryFromdb(id);

    res.status(200).json({
      status: "success",
      message: "Successfully gate categories",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  gate categories",
      error: error.message,
    });
  }
};

exports.UpdateSingleCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await UpdateCategoryFromdb(id, req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully update categories",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  update categories",
      error: error.message,
    });
  }
};

exports.DeleteSingleCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await DeleteCategoryFromdb(id);

    res.status(200).json({
      status: "success",
      message: "Successfully update categories",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  update categories",
      error: error.message,
    });
  }
};

//* Toggle category status
exports.toggleCategoryStatus = async (req, res) => {
  const { id } = req.query;

  try {
    const result = await changeCategoryStatus({ id });
    res.status(200).json({
      status: "success",
      message: "Successfully changed category status.",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};
