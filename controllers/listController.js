const itemModel = require('../models/Item')


class itemController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await itemModel.find()
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = itemController;