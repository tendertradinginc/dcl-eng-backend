const {
    createSuccessStoryinDb,
    getAllSuccessStoryinDb,
    deleteSuccessStoryinDb,
    updateSuccessStoryinDb,
} = require("../services/successStory.service");

//create Success Story
exports.createSuccessStory = async (req, res) => {
    try {
        const result = await createSuccessStoryinDb(req.body);
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//get Success Story
exports.getAllSuccessStory = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const result = await getAllSuccessStoryinDb(page, limit);
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

//delete Success Story
exports.deleteSuccessStory = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await deleteSuccessStoryinDb(id);

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

//update Success Story
exports.updateSuccessStory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateSuccessStoryinDb(id, req.body);
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
