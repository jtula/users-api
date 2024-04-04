const pool = require("../db.js");

const renderUser = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json({ users: rows });
  } catch (error) {
    res.status(500).send({success:false, message: error.message});
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    if (user[0].length === 1) {
      res.json({ user: user[0][0] });
    } else {
      res.status(404).send({success:false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({success:false, message: error.message});
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    await pool.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
    res.json({ 
      message: "User created successfully",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    res.status(500).send({success:false, message: error.message});
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    await pool.query("UPDATE users set name = ?, email = ? WHERE id = ?", [name, email, id]);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).send({success:false, message: error.message});
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM users WHERE id = ?", [id]);
    if (result[0].affectedRows === 1) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).send({success:false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({success:false, message: error.message});
  }
};

exports.renderUser = renderUser;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;