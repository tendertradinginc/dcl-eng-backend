const SuccessStory = require("../models/SuccessStory");

exports.createSuccessStoryinDb = async (details) => {
    const result = await SuccessStory.create(details);
    return result;
};

// exports.getAllSuccessStoryinDb = async (page, limit) => {
//     const result = await SuccessStory.find()
//         .sort({ name: "asc" })
//         .limit(parseInt(limit))
//         .skip((parseInt(page) - 1) * parseInt(limit));
//     const total = await SuccessStory.countDocuments();
//     return { result, total };
// };



exports.getAllSuccessStoryinDb = async (page, limit, search = "") => {

    const searchTerm = typeof search === "undefined" || search === null ? "" : search;
    const regexSearch = new RegExp(searchTerm, "i");

    let query = {};
    if (searchTerm) {
        query.$or = [
            { name: { $regex: regexSearch } },
            { shortDescription: { $regex: regexSearch } },
            { fullDescription: { $regex: regexSearch } }
        ];
    }

    const result = await SuccessStory.find(query)
        .sort({ name: "asc" })
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await SuccessStory.countDocuments(query);

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
