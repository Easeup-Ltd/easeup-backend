const WorkerService = require("../services/worker.service");

class WorkerController {
  getWorker = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.findWorker(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  deleteWorker = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.removeWorker(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  getWorkerToken = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.getWorkerToken(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  createWorker = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.createWorker(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  loginWorker = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.workerLogin(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  saveLocation = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.saveWorkerLocation(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  updateToken = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.updateWorkerToken(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  updateGhanaCard = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.updateGhanaCard(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  getNotifications = async (req, res, next) => {
    const { status, ...responseData } =
      await WorkerService.getWorkerNotifications(req, res);
    res.status(status).send(responseData);
  };

  updateNotification = async (req, res, next) => {
    const { status, ...responseData } = await WorkerService.updateNotifications(
      req,
      res
    );
    res.status(status).send(responseData);
  };
  resetPassword = async (req, res, next) => {
    // Password reset when user is logged in
    const { status, ...responseData } = await WorkerService.resetPassword(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  sendResetPasswordCode = async (req, res, next) => {
    // Password reset when user is logged in
    const { status, ...responseData } = await WorkerService.sendResetCode(
      req,
      res
    );
    res.status(status).send(responseData);
  };
  resetPasswordOutside = async (req, res, next) => {
    // Password reset when user is logged in
    const { status, ...responseData } = await WorkerService.resetPasswordOutside(
      req,
      res
    );
    res.status(status).send(responseData);
  };

  sendResetPasswordCodeOutside = async (req, res, next) => {
    // Password reset when user is logged in
    const { status, ...responseData } = await WorkerService.sendResetCodeOutside(
      req,
      res
    );
    res.status(status).send(responseData);
  };
}

module.exports = new WorkerController();
