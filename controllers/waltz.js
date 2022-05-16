
const Waltz = require("../models/Waltz")

exports.getWaltz = async (req, res) => {
  try {
    const waltz = await Waltz.find({});
    res.status(200).json({ waltz });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.postWaltz = async (req, res) => {
  try {
    const waltz = await Waltz.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.status(201).json(waltz);
  } catch (error) {
    res.status(500).json({ msg: error })
};

}

exports.showWaltz = async (req, res) => {
  
  try {
    const { id: waltzID } = req.params;
    const waltz = await Waltz.findOne({ _id: waltzID });
    if (!waltz) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${waltzID} azonositóval` });
    }
    res.status(200).json({ waltz });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  
  
  
};


exports.deleteWaltz = async (req, res) => {
  
  try {
    const { id: waltzID } = req.params;
    const waltz = await Waltz.findOneAndDelete({ _id: waltzID });
    if (!waltz) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${waltzID} azonositóval` });
    }
    return res.status(200).json({ waltz });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

}

