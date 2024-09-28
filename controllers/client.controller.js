const {
    createClientinDb,
    getAllClientinDb,
    deleteClientinDb,
    updateClientinDb,
} = require("../services/client.service");

//create client
exports.createClient = async (req, res) => {
    try {
        const result = await createClientinDb(req.body);
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getAllClient = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const result = await getAllClientinDb(page, limit);
        res.status(200).json({
            status: "success",
            message: "Successfully get ",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't  find ",
            error: error.message,
        });
    }
};

exports.deleteClient = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteClientinDb(id);

        res.status(200).json({
            status: "success",
            message: "Successfully deleted ",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't  find",
            error: error.message,
        });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateClientinDb(id, req.body);
        res.status(200).json({
            status: "success",
            message: "Successfully Updated ",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't find",
            error: error.message,
        });
    }
};
