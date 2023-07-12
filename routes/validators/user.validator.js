const Joi = require("joi");
const { JoiValidator } = require("../../joi.validator");

const updateImageValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    profile_picture: Joi.string().optional().label("Profile Picture"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const updateAddressValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    address: Joi.string().optional().label("Address"),
    latlng: Joi.array().optional().label("Latlng"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const updateGenderValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    gender: Joi.string().optional().label("Gender"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const updateTokenValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    token: Joi.string().optional().label("Token"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const updatePhoneValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    phone: Joi.string().optional().label("Phone"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const updateGhcValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    ghc: Joi.array().optional().label("Phone"),
    ghc_n: Joi.string().optional().label("Ghc number"),
    ghc_exp: Joi.string().optional().label("Ghc exp"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const updateUserValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    gender: Joi.string().optional().label("gender"),
    dob: Joi.string().optional().label("dob"),
    phone: Joi.string().optional().label("Phone"),
    address: Joi.string().optional().label("Address"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const sendCodeValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    phone: Joi.string().optional().label("Phone"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const verifyCodeValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    phone: Joi.string().optional().label("Phone"),
    code: Joi.string().optional().label("Code"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const createUserValidator = (params) => {
  const schema = Joi.object({
    user_id: Joi.string().optional().label("UserId"),
    email: Joi.string().optional().label("Email"),
    profile_name: Joi.string().optional().label("Profile Name"),
    last_login: Joi.string().optional().label("Last Login"),
    token: Joi.string().optional().label("Token"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

const updateUserNotificationValidator = (params) => {
  const schema = Joi.object({
    id: Joi.string().optional().label("Id"),
  }).strict();

  const joiValidationResult = JoiValidator.validate(schema, params);

  if (joiValidationResult) {
    return { status: 400, msg: joiValidationResult };
  }

  return { status: 200, msg: "success" };
};

module.exports = {
  updateImageValidator,
  updateAddressValidator,
  updateGenderValidator,
  updateTokenValidator,
  updatePhoneValidator,
  updateGhcValidator,
  updateUserValidator,
  sendCodeValidator,
  verifyCodeValidator,
  createUserValidator,
  updateUserNotificationValidator,
};
