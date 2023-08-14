// get habits
const getHabits = (req, res, next) => {
  try {
    res.status(200).json({
      message: "working habits",
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};

const createHabit = (req, res, next) => {
  try {
    res.status(201).json({
      message: "create habit",
    });
  } catch (err) {
    next(err);
  }
};

const updateHabit = (req, res, next) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      message: "update habit",
    });
  } catch (err) {
    res.status(err.status).json;
  }
};

const deleteHabit = (req, res, next) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      message: `Delete habit ${id} `,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
};
