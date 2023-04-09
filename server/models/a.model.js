const mongoose = require('mongoose');
const ASchema = new mongoose.Schema(
    {
        //pjesa e kushtezimeve: required eshte si warning
        //minLength: sa eshte minimalja e caktuar
        aName: {
            type: String,
            required: [true, "--"],
            minLength: [3, "--"],
        },
        aType: {
            type: String,
            required: [true, "--"],
            minLength: [3, "--"],
        },
        aDescription: {
            type: String,
            required: [true, "--"],
            minLength: [3, "--",]
        },
        aItemOne: {
            type: String,
            required: [true, "--"],
        },
        aItemTwo: {
            type: String,
        }
    }, { timestamps: true }
);

const A = mongoose.model('A', ASchema);

module.exports = A;