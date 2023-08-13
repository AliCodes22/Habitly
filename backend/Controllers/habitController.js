// get habits
const getHabits = (req, res) => {
  try {
    res.status(200).json({
      message: "get habits",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const createHabit = (req, res) => {
  try {
    res.status(201).json({
      message: "create habit",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const updateHabit = (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      message: "update habit",
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteHabit = (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      message: `Delete habit ${id} `,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
};
