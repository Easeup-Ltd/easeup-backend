const WorkerProfileVerificationService = require("../services/workerProfileVerify.service");

class WorkerProfileVerifyController {
  getWorkerProfileVerification = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.findWorkerProfileVerification(
        req,
        res
      );
    res.status(status).send(responseData);
  };
  updateWorkerSelfie = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerSelfie(req, res);
    res.status(status).send(responseData);
  };

  updateWorkerGhc = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerGhanaCard(req, res);
    res.status(status).send(responseData);
  };

  workerAgeVerify = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerAge(req, res);
    res.status(status).send(responseData);
  };

  updateWorkerPos = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerProofOfSkill(req, res);
    res.status(status).send(responseData);
  };

  updateWorkerInsurance = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerInsurance(req, res);
    res.status(status).send(responseData);
  };

  updateWorkerAddress = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerAddress(req, res);
    res.status(status).send(responseData);
  };

  updateworkerGender = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerGender(req, res);
    res.status(status).send(responseData);
  };

  updateWorkerPhone = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerPhone(req, res);
    res.status(status).send(responseData);
  };

  updateWorkerPhoneVerifyCode = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerProfileVerificationService.updateWorkerPhoneVerifyCode(
        req,
        res
      );
    res.status(status).send(responseData);
  };
}

module.exports = new WorkerProfileVerifyController();
