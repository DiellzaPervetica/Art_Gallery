const A = require('../models/a.model');

module.exports = {

    getAllA: (request, response) => {
        A.find()
        .sort({aType: 1})
        .then((allA) => {
            console.log(allA);
            response.json(allA)
        })
        .catch((err) => {
            console.log("Something went wrong with getAllA");
            response.json({message: "Something went wrong with getAllA", error: err});
        })
    },

    getOneA: (request, response) => {
        A.findOne({ _id: request.params.id})
        .then((getOneA) => {
            console.log(oneA);
            response.json(oneA)
        })
        .catch((err) => {
            console.log("Something went wrong with getOneA");
            response.json({message: "Something went wrong with getOneA", error: err});
        })
    },

    createA: (request, response) => {
        A.create(request.body)
        .then((a) => {
            console.log(a);
            response.json(a)
        })
        .catch((err) => {
            console.log("Something went wrong with createA");
            response.status(400).json(err);
        })
    },

    updateA: (request, response) => {
        A.findOneAndUpdate(
            { _id: request.params.id}, request.body,
            {
                new: true,
                runValidators: true,
            }
        )
            .then((updateA) => {
                console.log(updateA);
                response.json(updateA)
            })
            .catch((err) => {
                console.log("Something went wrong with updateA");
                response.status(400).json(err);
            })
    },

    deleteA: (request, response) => {
        A.deleteOne({ _id: request.params.id})
        .then((deleteA) => {
            console.log(deleteA);
            response.json(deleteA);
        })
        .catch((err) => {
            console.log("Something went wrong with deleteA");
            response.json({message: "Something went wrong with deleteA", error: err});
        })
    }
}