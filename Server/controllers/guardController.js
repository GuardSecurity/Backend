const Guard = require('../models/guardModel');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
const jwt = require('jsonwebtoken');
module.exports = {
    getUserById: async (req, res) => {
        const userId = req.params.user_id;
        try {
          const user = await Guard.getUserById(userId);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.json(user);
        } catch (error) {
          console.error('Error retrieving user', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      },
    changeUserInfo: async (req, res) => {
      const userId = req.params.user_id; // Lấy guard_id từ URL parameter
      const newInfor = req.body; // Lấy thông tin mới từ body request

    try {
      const result = await Guard.changeInfo(userId, newInfor);
      return res.status(200).json({ message: result });
    } catch (err) {
      console.error('Error:', err);
      return res.status(500).json({ message: 'An error occurred' });
    }
    },
    getInfoCustomerbyID: async (req, res) => {
      const userId = req.params.user_id;
      try {
        const user = await Customer.getInfoCustomerbyID(userId);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        console.error('Error retrieving user', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },
};