const Service = require("../models/Service");

exports.createServiceDb = async (details) => {
  try {
    const result = await Service.create(details);
    return result;
  } catch (error) {
    throw new Error(`Failed to create service: ${error.message}`);
  }
};

exports.getAllServicesDashboardEdition = async () => {
  try {
    const result = await Service.find({ featuredStatus: true })
      .sort({ name: "asc" })
      .populate("category");
    return result;
  } catch (error) {
    throw new Error(`Failed to get dashboard services: ${error.message}`);
  }
};

exports.getSingleServiceFromDb = async (id) => {
  try {
    const result = await Service.findOne({ _id: id }).populate("category");
    return result;
  } catch (error) {
    throw new Error(`Failed to get single service: ${error.message}`);
  }
};

exports.updateServiceFromDb = async (id, data) => {
  try {
    const result = await Service.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).populate("category");
    return result;
  } catch (error) {
    throw new Error(`Failed to update service: ${error.message}`);
  }
};

exports.deleteServiceFromDb = async (id) => {
  try {
    const result = await Service.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw new Error(`Failed to delete service: ${error.message}`);
  }
};

exports.changeServiceFeaturedStatus = async ({ id }) => {
  try {
    if (!id) {
      throw new Error("Id required to change featured status");
    }

    const service = await Service.findById(id);

    if (!service) {
      throw new Error("Service not found");
    }

    service.featuredStatus = !service.featuredStatus;
    await service.save();

    return service;
  } catch (error) {
    throw new Error(
      `Failed to change service featured status: ${error.message}`
    );
  }
};

exports.getAllServicesCategoryWiseFromDb = async (category, page, limit) => {
  try {
    const skip = (page - 1) * limit;
    const totalCount = await Service.countDocuments({ category: category });
    const result = await Service.find({ category: category })
      .skip(skip)
      .limit(parseInt(limit));

    const metadata = {
      totalCount,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalCount / limit),
      limit: parseInt(limit),
    };

    return { result, metadata };
  } catch (error) {
    throw new Error(`Failed to get services category wise: ${error.message}`);
  }
};
