const Client = require("../models/Client");

exports.createClientinDb = async (details) => {
    const result = await Client.create(details);
    return result;
};

exports.getAllClientinDb = async (page, limit) => {
    const result = await Client.find()
        .sort({ name: "asc" })
        .limit(parseInt(limit))
        .skip((parseInt(page) - 1) * parseInt(limit));
    const total = await Client.countDocuments();
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
