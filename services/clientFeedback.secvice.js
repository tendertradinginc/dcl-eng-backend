const ClientFeedback = require("../models/ClientFeedback");

exports.createClientFeedbackinDb = async (details) => {
    const result = await ClientFeedback.create(details);
    return result;
};

// exports.getAllClientFeedbackinDb = async (page, limit) => {
//     const result = await ClientFeedback.find()
//         .sort({ name: "asc" })
//         .limit(parseInt(limit))
//         .skip((parseInt(page) - 1) * parseInt(limit));
//     const total = await ClientFeedback.countDocuments();
//     return { result, total };
// };


exports.getAllClientFeedbackinDb = async (page, limit, search = "") => {
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

    const result = await ClientFeedback.find(query)
        .sort({ name: "asc" })
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await ClientFeedback.countDocuments(query);

    return { result, total };
};





exports.deleteClientFeedbackinDb = async (id) => {
    const result = await ClientFeedback.deleteOne({ _id: id });
    return result;
};

exports.updateClientFeedbackinDb = async (id, data) => {
    const result = await ClientFeedback.updateOne({ _id: id }, { $set: data });
    return result;
};
