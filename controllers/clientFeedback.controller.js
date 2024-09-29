const {
  createClientFeedbackinDb,
  getAllClientFeedbackinDb,
  deleteClientFeedbackinDb,
  updateClientFeedbackinDb,
} = require("../services/clientFeedback.secvice");

//create Client Feedback
exports.createClientFeedback = async (req, res) => {
  try {
    const result = await createClientFeedbackinDb(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//get Client Feedback
exports.getAllClientFeedback = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const result = await getAllClientFeedbackinDb(page, limit);
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

//delete Client Feedback
exports.deleteClientFeedback = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteClientFeedbackinDb(id);

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

//update Client Feedback
exports.updateClientFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateClientFeedbackinDb(id, req.body);
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
