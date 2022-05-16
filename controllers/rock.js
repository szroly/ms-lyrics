const Rock = require("../models/Rock")

exports.getRock = async (req, res) => {
  try {
    const rock = await Rock.find({});
    res.status(200).json({ rock });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.postRock = async (req, res) => {
  try {
    const rock = await Rock.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.status(201).json(rock);
  } catch (error) {
    res.status(500).json({ msg: error });
  }

};

exports.showRock = async (req, res) => {
  
  try {
    const { id: rockID } = req.params;
    const rock = await Rock.findOne({ _id: rockID });
    if (!rock) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${rockID} azonositóval` });
    }
    res.status(200).json({ rock });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  
  
  
};


exports.deleteRock = async (req, res) => {
  
  try {
    const { id: rockID } = req.params;
    const rock = await Rock.findOneAndDelete({ _id: rockID });
    if (!rock) {
      return res
        .status(404)
        .json({ msg: `Nincs találat a ${rockID} azonositóval` });
    }
    return res.status(200).json({ rock });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

}
