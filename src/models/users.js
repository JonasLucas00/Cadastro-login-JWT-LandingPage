const bcrypt = require('bcrypt');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async passValidate(input_password) {
      return await bcrypt.compare(input_password, this.password);
    }

  }
  Users.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email já cadastrado'
      },
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email invalido'
        }
      },
      set(value) {
        this.setDataValue('email', value.toLowerCase());
      }
    },
    password: {
      type: DataTypes.STRING
    },
    input_password: {
      type: DataTypes.VIRTUAL
    }
  }, {
    sequelize,
    modelName: 'Users',
  });

  Users.addHook('beforeSave', async (user) => {
    if (user.input_password) {
      user.password = await bcrypt.hash(user.input_password, 8)
    }
  })



  return Users;
};