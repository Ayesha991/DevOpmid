import Password from '../models/Password.js';

export const getAllPasswords = async (req, res) => {
  try {
    const passwords = await Password.getAll();
    res.status(200).json({
      success: true,
      data: passwords,
      count: passwords.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const password = await Password.getById(id);
    
    if (!password) {
      return res.status(404).json({
        success: false,
        message: 'Password not found'
      });
    }

    res.status(200).json({
      success: true,
      data: password
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const createPassword = async (req, res) => {
  try {
    const { site, username, password, id } = req.body;

    // Validate input
    if (!site || !username || !password || !id) {
      return res.status(400).json({
        success: false,
        message: 'All fields (site, username, password, id) are required'
      });
    }

    const newPassword = await Password.create({
      site: site.trim(),
      username: username.trim(),
      password,
      id
    });

    res.status(201).json({
      success: true,
      message: 'Password saved successfully',
      data: newPassword
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { site, username, password } = req.body;

    // Validate input
    if (!site && !username && !password) {
      return res.status(400).json({
        success: false,
        message: 'At least one field (site, username, password) is required'
      });
    }

    const updateData = {};
    if (site) updateData.site = site.trim();
    if (username) updateData.username = username.trim();
    if (password) updateData.password = password;

    const updatedPassword = await Password.update(id, updateData);

    res.status(200).json({
      success: true,
      message: 'Password updated successfully',
      data: updatedPassword
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deletePassword = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'ID is required'
      });
    }

    await Password.delete(id);

    res.status(200).json({
      success: true,
      message: 'Password deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteAlPasswords = async (req, res) => {
  try {
    await Password.deleteAll();

    res.status(200).json({
      success: true,
      message: 'All passwords deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
