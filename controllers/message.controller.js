const {
  createContactUsMsgsDb,
  getAllContactUsMsgsDb,
  deleteSingleContactUsMsgsDb,
  updateMsgStatusinDb,
} = require("../services/message.service");

exports.postContactUsMsg = async (req, res, next) => {
  try {
    const contactUsmsg = await createContactUsMsgsDb(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully Create Contact Us Message",
      data: contactUsmsg,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't  Contact Us Message",
      error: error.message,
    });
  }
};
exports.getAllContactUsMsg = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    const contactUsmsg = await getAllContactUsMsgsDb(page, limit);
    res.status(200).json({
      status: "success",
      data: contactUsmsg,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't get all  Contact Us Message",
      error: error.message,
    });
  }
};
exports.deleteContactUsMsg = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contactUsmsg = await deleteSingleContactUsMsgsDb(id);
    res.status(200).json({
      status: "success",
      message: "Successfully Deleted  Contact Us Message",
      data: contactUsmsg,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't deleted",
      error: error.message,
    });
  }
};
exports.updateMsgStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contactUsmsg = await updateMsgStatusinDb(id);
    res.status(200).json({
      status: "success",
      message: "Successfully Deleted  Contact Us Message",
      data: contactUsmsg,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't deleted",
      error: error.message,
    });
  }
};
