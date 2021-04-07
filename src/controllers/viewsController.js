import catchAsync from "../utils/catchAsync";

// @desc      Get main-page
// @route     GET /
// @access    Public
export const getMainPage = catchAsync(async (req, res, next) => {
  res.status(200).render("main-page");
});
