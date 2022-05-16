const Other = require("../models/Other")

exports.getOther = async (req, res) => {
  try {
    const other = await Other.find({});
    res.status(200).json({ other });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.postOther = async (req, res) => {
  try {
    const other = await Other.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.status(201).json(other);
  } catch (error) {
    res.status(500).json({ msg: error });
  }

};

exports.showOther = async (req, res) => {
  
  try {
    const { id: otherID } = req.params;
    const other = await Other.findOne({ _id: otherID });
    if (!other) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${otherID} azonositóval` });
    }
    res.status(200).json({ other });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  
  
  
};


exports.deleteOther = async (req, res) => {
  
  try {
    const { id: otherID } = req.params;
    const other = await Other.findOneAndDelete({ _id: otherID });
    if (!other) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${otherID} azonositóval` });
    }
    return res.status(200).json({ other });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

}
