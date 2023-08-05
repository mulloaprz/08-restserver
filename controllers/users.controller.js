const { response } = require("express");


const getUser = (req, res =  response) => 
{
    const {name = "no name", page=0, limit=10} = req.query;

    res.status(403).json({
        msg:"get API",
        name,
        page,
        limit
    });
};

const postUser = (req, res =  response) => 
{
    const {name, age } = req.body;

    res.status(403).json({
        msg:"post API",
        body: `name: ${name}`
    });
};

const putUser = (req, res =  response) => {
    const id = req.params.id;
    
    res.status(403).json({
        msg:`put API ${id}`
    });
};

const deleteUser = (req, res =  response) => {
    const id = req.params.id;
    
    res.status(403).json({
        msg:`delete API ${id}`
    });
};



module.exports = { getUser, postUser, putUser, deleteUser }