const Client = require("../models/Client");

exports.createClientinDb = async (details) => {
    const result = await Client.create(details);
    return result;
};

// exports.getAllClientinDb = async (page, limit) => {
//     const result = await Client.find()
//         .sort({ name: "asc" })
//         .limit(parseInt(limit))
//         .skip((parseInt(page) - 1) * parseInt(limit));
//     const total = await Client.countDocuments();
//     return { result, total };
// };


exports.getAllClientinDb = async (page, limit, search = "") => {

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

    const result = await Client.find(query)
        .sort({ name: "asc" })
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Client.countDocuments(query);

    return { result, total };
};



exports.deleteClientinDb = async (id) => {
    const result = await Client.deleteOne({ _id: id });
    return result;
};

exports.updateClientinDb = async (id, data) => {
    const result = await Client.updateOne({ _id: id }, { $set: data });
    return result;
};
