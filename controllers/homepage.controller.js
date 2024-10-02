exports.getAllSummary = async (req, res) => {
  try {
    const {} = req.query;
    const result = await getAllSummaryfromDb();
    res.status(200).json({
      status: "success",
      message: "Successfully get all",
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
