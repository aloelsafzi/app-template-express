const path = require('path')
const {moveFile} = require('../utils/fileSystem')
const { user: User } = require('../models');

const baseDir = path.join(__dirname, "../")
const uploadsDir = baseDir + "/public/uploads/";




const viewUser = async (req, res) => {
    try {
        const allUser = await User.findAll()
        res.render('pages/user', { title: 'Users', users: allUser })       
    } catch (error) {
        console.log(error)
    }
}

const createUser = (req, res) => {

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const photo = req.files.photo;
    const uploadPath = uploadsDir + photo.name;

    const filePhoto = req.files ? moveFile(photo, uploadPath) : Promise.resolve('Tidak ada File');

    filePhoto.then(() => {
        res.send('File uploaded!');
    }).catch((err) => {
        res.status(500).json(err);
    })

    // Everything went fine.
    // const userBody = req.body; 
    // const result = await User.create(userBody);
    // res.redirect('/users')
    
};

const getAlluser = async (req, res) => {
    const allUser = await User.findAll()
    res.render('pages/')
}

const getUserById = async (req, res) => {
    const user = await User.findByPk(id);
    res.render('pages/')
};

const updateUserById = async (req, res) => {
    const { userId } = req.params
    const user = await getUserById(userId);
    if (!user) {

    }

    Object.assign(user, updateBody);
    const userUpdate = await user.save();
    res.render('pages/')
};

const deleteUserById = async (req, res) => {
    const { userId } = req.params
    const user = await getUserById(userId);
    if (!user) {

    }
    const userDel = await user.destroy();
    res.render('pages/')
};

module.exports = {
    viewUser,
    createUser,
    getAlluser,
    getUserById,
    updateUserById,
    deleteUserById,
};
