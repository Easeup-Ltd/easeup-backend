const { redisClient } = require("./user_cache");


module.exports.getWorkerProfileCache = async function getWorkerProfileCache(req, res, next) {
    // use user id to get user cache
    const worker = await redisClient.get(`worker-profile/${req.params.worker}`);

    console.log('cached worker profile', worker);

    if (worker !== null && worker !== undefined) {
        return res.status(200).json({
            msg: 'worker Found', status: 200, success: true,
            worker: JSON.parse(worker),
            avgRating: JSON.parse(worker).rating,
            totalReviews: JSON.parse(worker).jobs
        })
    }
    console.log('Worker not found in cache');
    next();
}

module.exports.getWorkerPortfolioCache = async function getWorkerPortfolioCache(req, res, next) {
    // use user id to get user cache
    const worker = await redisClient.get(`portfolio/${req.params.worker}`);
    console.log('cached worker portfolio ', worker);

    if (worker !== null && worker !== undefined) {
        return res.status(200).json({
            msg: 'worker portfolio Found', status: 200, success: true, worker: JSON.parse(worker),
        })
    }
    console.log('Worker portfolio not found in cache');
    next();
}