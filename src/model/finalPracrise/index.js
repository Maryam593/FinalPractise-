//calling a model 

import {DataTypes}  from 'sequelize';
import sequelize from '../../db/config.js';


const FinalAuthenticationModel = sequelize.define(
  'FinalAuthenticaltion',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true //validation and constraints****
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNo: {
        type: DataTypes.STRING,
        //Setting Range of phone number *******
        validate: {
            len : [10,12]
        }
    }
  },
  {
    // Other model options go here
    timestamps : false
  },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

export default FinalAuthenticationModel

