const {
  createServiceDb,
  getAllServicesFromDb,
  getSingleServiceFromDb,
  updateServiceFromDb,
  deleteServiceFromDb,
  changeServiceFeaturedStatus,
  getAllServicesDashboardEdition,
  getAllServicesCategoryWiseFromDb,
} = require("../services/service.service");

exports.createService = async (req, res) => {
  try {
    const result = await createServiceDb(req.body);
    res.status(201).json({
      status: "success",
      message: "Successfully created service",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create service",
      error: error.message,
    });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const { result, metadata } = await getAllServicesFromDb(
      page,
      limit,
      search
    );
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved services",
      data: result,
      metadata,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't retrieve services",
      error: error.message,
    });
  }
};

exports.getAllServicesDashboard = async (req, res) => {
  try {
    const result = await getAllServicesDashboardEdition();
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved dashboard services",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't retrieve dashboard services",
      error: error.message,
    });
  }
};

exports.getSingleService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleServiceFromDb(id);
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved service",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't retrieve service",
      error: error.message,
    });
  }
};

exports.updateSingleService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateServiceFromDb(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully updated service",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't update service",
      error: error.message,
    });
  }
};

exports.deleteSingleService = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteServiceFromDb(id);
    res.status(200).json({
      status: "success",
      message: "Successfully deleted service",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't delete service",
      error: error.message,
    });
  }
};

exports.toggleServiceFeatured = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await changeServiceFeaturedStatus({ id });
    res.status(200).json({
      status: "success",
      message: "Successfully changed service featured status",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't change service featured status",
      error: error.message,
    });
  }
};

exports.getAllServicesCategoryWise = async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;

    const { result, metadata } = await getAllServicesCategoryWiseFromDb(
      category,
      page,
      limit
    );
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved services",
      data: result,
      metadata,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't retrieve services",
      error: error.message,
    });
  }
};
