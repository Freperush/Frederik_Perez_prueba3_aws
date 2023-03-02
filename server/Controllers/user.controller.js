const User = require('../models/user.model');

module.exports.createUser = (request, response) => {
    const {jobName, earn,languages} = request.body;
    User.create({
        jobName, earn,languages
    })
    .then(user => response.json(user))
    .catch(err => response.status(400).json(err));
}

/**Recupera todos los usarios de la base de datos */
module.exports.getAllUsers = (_, response) => {
    User.find({})
    .then(users => response.json(users))
    .catch(err => response.json(err))
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
    .then(user => response.json(user))
    .catch(err => response.json(err))
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedUser => response.json(updatedUser))
    .catch(err => response.json(err))
}


module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
    .then(userDeleted => response.json(userDeleted))
    .catch(err => response.json(err))
}