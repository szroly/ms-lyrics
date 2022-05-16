const Csardas = require("../models/Csardas");

exports.getCsardas = async (req, res) => {
  try {
    const csardas = await Csardas.find({});
    res.status(200).json({ csardas });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.postCsardas = async (req, res) => {
  
  try {
    const csardas = await Csardas.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.status(201).json(csardas);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.showCsardas = async (req, res) => {
  try {
    const { id: csardasID } = req.params;
    const csardas = await Csardas.findOne({ _id: csardasID });
    if (!csardas) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${csardasID} azonositóval` });
    }
    res.status(200).json({ csardas });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.deleteCsardas = async (req, res) => {
  try {
    const { id: csardasID } = req.params;
    const csardas = await Csardas.findOneAndDelete({ _id: csardasID });
    if (!csardas) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${csardasID} azonositóval` });
    }
    return res.status(200).json({ csardas });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
