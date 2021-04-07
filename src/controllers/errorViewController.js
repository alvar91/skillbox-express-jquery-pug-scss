import catchAsync from "../utils/catchAsync";

// @desc      Get error-page
// @route     GET /
// @access    Public
export const getErrorPage = catchAsync(async (req, res, next) => {
  res.status(404).render("error-page");
});
