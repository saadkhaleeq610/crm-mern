import mongoose from 'mongoose';

const OpportunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  associatedLead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lead',
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  stage: {
    type: String,
    enum: ['Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'],
    default: 'Qualification'
  },
  expectedCloseDate: {
    type: Date,
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Opportunity = mongoose.model('Opportunity', OpportunitySchema);

export default Opportunity;