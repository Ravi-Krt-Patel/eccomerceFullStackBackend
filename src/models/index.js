
module.exports = (sequelize, Sequelize)=>{
    const allModels = {
        User: require('./userModel/user.model.creation')(sequelize, Sequelize)
    }
    return allModels
}

