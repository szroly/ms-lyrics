const Szerb = require("../models/Szerb");

exports.getSzerb = async (req, res) => {
  try {
    const szerb = await Szerb.find({});
    res.status(200).json({ szerb });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.postSzerb = async (req, res) => {
  try {
    const szerb = await Szerb.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.status(201).json(szerb);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.showSzerb = async (req, res) => {
  try {
    const { id: szerbID } = req.params;
    const szerb = await Szerb.findOne({ _id: szerbID });
    if (!szerb) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${szerbID} azonositóval` });
    }
    res.status(200).json({ szerb });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.deleteSzerb = async (req, res) => {
  try {
    const { id: szerbID } = req.params;
    const szerb = await Szerb.findOneAndDelete({ _id: szerbID });
    if (!szerb) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${szerbID} azonositóval` });
    }
    return res.status(200).json({ szerb });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
