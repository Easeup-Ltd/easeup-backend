const router = require("express").Router();
const userController = require("../../controllers/user.controller");
const { verifyJWT } = require("../../passport/common");


router.delete(
  "/:user",
  verifyJWT,
  userController.deleteUser
);

router.get(
  "/profile/:user_id",
  verifyJWT,
  userController.getUserProfile
);

router.post(
  "/update/image",
  verifyJWT,
  userController.updateImage
);

router.post(
  "/update/address",
  verifyJWT,
  userController.updateAddress
);

router.post(
  "/update/gender",
  verifyJWT,
  userController.updateGender
);

router.post(
  "/update/token",
  verifyJWT,
  userController.updateToken
);

router.post(
  "/update/phone",
  verifyJWT,
  userController.updatePhone
);

router.post(
  "/update/ghc",
  verifyJWT,
  userController.updateGhanaCard
);

router.post(
  "/update",
  verifyJWT,
  userController.updateInfo
);

router.post(
  "/phone/send-code",
  verifyJWT,
  userController.updatePhoneSendCode
);

router.post(
  "/phone/verify-code",
  verifyJWT,
  userController.updatePhoneVerifyCode
);

router.post(
  "/create",
  userController.createUser
);
router.post(
  "/login",
  userController.loginUser
);

router.get(
  "/nofications/:user_id",
  verifyJWT,
  userController.getUserNotifications
);

router.post(
  "/nofications/update/:user_id",
  verifyJWT,
  userController.updateUserNotifications
);

router.get(
  "/bookmarks",
  verifyJWT,
  userController.getBookmarks
);

router.delete(
  "/bookmarks/delete",
  verifyJWT,
  userController.deleteBookmarks
);

// password reset routes
router.post(
  "/request-password-reset",
  verifyJWT,
  userController.sendResetPasswordCode
);

router.post(
  "/verify-password-reset",
  verifyJWT,
  userController.resetPassword
);
// password reset routes outside app
router.post(
  "/request-password-reset-outside",
  userController.sendResetPasswordCodeOutside
);

router.post(
  "/verify-password-reset-outside",
  userController.resetPasswordOutside
);
module.exports.userRoute = router;
