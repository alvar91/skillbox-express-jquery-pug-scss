import catchAsync from "./../utils/catchAsync";
import Email from "./../utils/email";

// @desc      Send order to mail
// @route     POST /
// @access    Public
export const contactForm = catchAsync(async (req, res, next) => {
  const newOrder = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };

  await new Email(newOrder).sendWelcome();

  res.json({
    message: `Email has been sent to email`,
  });
});
