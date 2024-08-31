import Opportunity from '../models/Opportunity.js';

export const createOpportunity = async (req, res) => {
  try {
    const opportunity = new Opportunity({
      ...req.body,
      createdBy: req.user._id
    });
    await opportunity.save();
    res.status(201).json(opportunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find({ createdBy: req.user._id })
      .populate('associatedLead', 'name')
      .populate('assignedTo', 'name');
    res.json(opportunities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.findOne({ _id: req.params.id, createdBy: req.user._id })
      .populate('associatedLead', 'name')
      .populate('assignedTo', 'name');
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.json(opportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true, runValidators: true }
    )
      .populate('associatedLead', 'name')
      .populate('assignedTo', 'name');
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.json(opportunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOpportunity = async (req, res) => {
  try {
    const opportunity = await Opportunity.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    res.json({ message: 'Opportunity removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};