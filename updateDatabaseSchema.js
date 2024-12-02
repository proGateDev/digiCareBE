const mongoose = require('mongoose');
const userModel = require('./user/models/profile'); 
const memberModel = require('./member/models/profile'); 
require("dotenv").config();

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

async function addFieldToUsers() {
  try {
    // Update all users to have isSubscribed field set to false if not already present
    await userModel.updateMany({ isSubscribed: { $exists: false } }, { $set: { isSubscribed: false } });
    console.log('Field isSubscribed added to all existing users.');
  } catch (error) {
    console.error('Error updating users:', error);
  } finally {
    mongoose.connection.close();
  }
}

async function addFieldToMembers() {
  try {
    // Update all users to have isSubscribed field set to false if not already present
    await memberModel.updateMany({ isOnline: { $exists: false } }, { $set: { isOnline: false } });
    console.log('Field isSubscribed added to all existing users.');
  } catch (error) {
    console.error('Error updating users:', error);
  } finally {
    mongoose.connection.close();
  }
}

addFieldToMembers();