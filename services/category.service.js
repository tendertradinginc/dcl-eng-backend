const Categories = require("../models/Category");

// create single category
exports.createCategoriesDb = async (details) => {
  console.log('createCategoriesDb called with details:', details);
  try {
    const result = await Categories.create(details);
    console.log('Category created successfully:', result);
    return result;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

// get all categories
exports.getAllCategoriesFromdb = async () => {
  const result = await Categories.find({}).sort({ name: "asc" });
  return result;
};

// get all categories dashboard
exports.getAllCategoriesDashboardEdition = async () => {
  const result = await Categories.find({ status: true }).sort({ name: "asc" });
  return result;
};

exports.getSingleCategoryFromdb = async (id) => {
  const result = await Categories.findOne({ _id: id });
  return result;
};

// get update categories
exports.UpdateCategoryFromdb = async (id, data) => {
  const result = await Categories.updateOne({ _id: id }, { $set: data });
  return result;
};

// get delete categories
exports.DeleteCategoryFromdb = async (id) => {
  const result = await Categories.deleteOne({ _id: id });
  return result;
};

exports.changeCategoryStatus = async ({ id }) => {
  if (!id) {
    throw new Error("Id required to change status");
  }
  try {
    const category = await Categories.findById(id);

    if (!category) {
      throw new Error("Category not found");
    }

    // Toggle the status
    category.status = !category.status;

    // Save the updated category
    await category.save();

    return category;
  } catch (error) {
    throw new Error(error?.message);
  }
};
