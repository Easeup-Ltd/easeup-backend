const { servicesModel } = require('../../models/services_model');
const { verifyJWT } = require('../../passport/common');

const router = require('express').Router();


router.get('/', verifyJWT, async (req, res) => {
    try {
        const services = await servicesModel.find()
        if (!services) return res.status(400).json({ message: 'No services found', success: false })
        return res.status(200).json({ services, success: true })
    } catch (error) {
        return res.status(401).json({ message: error, success: false })
    }
})

module.exports.servicesRoute = router;