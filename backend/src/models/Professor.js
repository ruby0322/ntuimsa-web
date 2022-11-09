import mongoose from 'mongoose';

const ProfessorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    imgUrl: {
        type: String
    },
    interviews: {
        type: Array
    },
    domains: {
        type: Array
    }
});

export default mongoose.model('Professor', ProfessorSchema);