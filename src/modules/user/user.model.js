const path = require('path');
const bcrypt = require('bcryptjs');
const sequelize = require(path.join(process.cwd(), 'src/config/lib/sequelize'));
const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'users',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(100),
      validate: {
        isEmail: true,
      },
      set(value) {
        this.setDataValue('email', value.toLowerCase());
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('password', bcrypt.hashSync(value, 8));
      },
    },
    confirmPassword: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        isConfirmed(value) {
          if (value !== this.password) {
            throw new Error('Password confirmation does not match!');
          }
        },
      },
    },
  },
  {
    tableName: 'users',
    timestamps: true,
  }
);

User.prototype.isPasswordValid = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
