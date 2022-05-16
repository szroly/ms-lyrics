const Tango = require("../models/Tango")

exports.getTango = async (req, res) => {
  try {
    const tango = await Tango.find({});
    res.status(200).json({ tango });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.postTango = async (req, res) => {
  try {
    const tango = await Tango.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.status(201).json(tango);
  } catch (error) {
    res.status(500).json({ msg: error })
};

}

exports.showTango = async (req, res) => {
  
  try {
    const { id: tangoID } = req.params;
    const tango = await Tango.findOne({ _id: tangoID });
    if (!tango) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${tangoID} azonositóval` });
    }
    res.status(200).json({tango });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  
  
  
};


exports.deleteTango = async (req, res) => {
  
  try {
    const { id: tangoID } = req.params;
    const tango = await Tango.findOneAndDelete({ _id: tangoID });
    if (!tango) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${tangoID} azonositóval` });
    }
    return res.status(200).json({ tango });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

}

