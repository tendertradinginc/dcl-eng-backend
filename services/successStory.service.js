const SuccessStory = require("../models/SuccessStory");

exports.createSuccessStoryinDb = async (details) => {
    const result = await SuccessStory.create(details);
    return result;
};

exports.getAllSuccessStoryinDb = async (page, limit) => {
    const result = await SuccessStory.find()
        .sort({ name: "asc" })
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));
    const total = await SuccessStory.countDocuments();
    return { result, total };
};

exports.deleteSuccessStoryinDb = async (id) => {
    const result = await SuccessStory.deleteOne({ _id: id });
    return result;
};

exports.updateSuccessStoryinDb = async (id, data) => {
    const result = await SuccessStory.updateOne({ _id: id }, { $set: data });
    return result;
};
