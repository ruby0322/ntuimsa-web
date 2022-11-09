import mongoose from 'mongoose';

const InterviewSchema = new mongoose.Schema({
    year: {
        type: String
    },
    markdown: {
        type: String
    }
});

export default mongoose.model('Interview', InterviewSchema);