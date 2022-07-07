const User = require('../models/userModel');
const cloudinary = require('../middlewares/cloudinary');
const nodemailer = require('nodemailer');
const config = require('../config/keys');
const fs = require('fs');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    const findUsers = await User.find().sort({ createdAt: -1 });
    if (findUsers) {
        res.status(200).json(findUsers);
    } else {
        res.status(404).json({ errorMessage: 'No Users Found' });
    }
}

exports.getUserById = async (req, res) => {
    const findUser = await User.findOne({ _id: req.params.id });
    if (findUser) {
        res.status(200).json(findUser);
    } else {
        res.status(404).json({ errorMessage: 'No Users Found' });
    }
}



exports.login = async (req, res) => {
    console.log(req.body)
    const findUser = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.email }]
    });

    if (findUser) {
        const checkPassword = bcrypt.compareSync(req.body.password, findUser.password);
        if (checkPassword) {
            const payload = {
                user: {
                    _id: findUser._id,
                    role: findUser.role
                }
            }
            jwt.sign(payload, config.jwtSecret, (err, token) => {
                if (err) res.status(400).json({ errorMessage: 'Jwt Error' })

                const { _id, fullName, role, username, email } = findUser;
                res.status(200).json({
                    _id,
                    role,
                    fullName,
                    username,
                    email,
                    token,
                    successMessage: 'Logged In Successfully',

                });
            });
        } else {
            res.status(201).json({ errorMessage: 'Incorrect username or password.' })
        }

    } else {
        res.status(201).json({ errorMessage: 'Incorrect username or password.' })
    }
}

exports.AdminSignUp = async (req, res) => {
    const ifEmailAlreadyPresent = await User.findOne({ email: req.body.email });
    const ifUsernameAlreadyPresent = await User.findOne({ username: req.body.username });
    if (ifEmailAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Email already exists. Please try another one.' });
    }
    else if (ifUsernameAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Username already exists. Please try another one.' });
    }
    else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            username: req.body.username,
            password: hash
        });

        const saveUser = await user.save();
        if (saveUser) {
            res.status(200).json({ successMessage: 'Account created successfuly!. Please Sign in.' });
        } else {
            res.status(400).json({ errorMessage: 'Account not created. Please try again' });
        }
    }
}

exports.SignUp = async (req, res) => {
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
        res.status(200).json({ user: findUser, successMessage: 'Your info is already saved!' });
    }
    else {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone
        });

        const saveUser = await user.save();
        if (saveUser) {
            res.status(200).json({ saveUser, successMessage: 'Your info saved successfuly!' });
        } else {
            res.status(400).json({ errorMessage: 'Info not saved. Please try again' });
        }
    }
}


exports.getAllInterviews = async (req, res) => {
    const interviews = await User.find().exec();
    if (interviews) {
        res.status(200).send(interviews);
    } else {
        res.status(404).json({ errorMessage: 'No interviews found!' });
    }
}

exports.getInterviewById = async (req, res) => {
    const findInterview = await User.findOne({ user: req.params.id }).exec();
    if (findInterview) {
        res.status(200).send(findInterview);
    }
}

exports.uploadInterview = async (req, res) => {
    const uploader = async (path) => await cloudinary.uploads(path, 'John/interviews')
    const { path } = req.file;
    const newPath = await uploader(path)
    fs.unlinkSync(path);

    const interview = {
        question: req.body.question,
        questionTitle: req.body.questionTitle,
        answer: newPath,
        user: req.body.user,
    };

    User.findOneAndUpdate(
        { _id: req.body.user },
        { $push: { interviews: interview } },
        function (error, success) {
            if (error) {
                res.status(400).json({ errorMessage: 'Failed to save Interview. Please try again', error })
            }
            else {
                res.status(200).send({ successMessage: 'Interview answer saved successfully', success });
            }
        });
}


exports.sendEmail = async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    if (user) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 587,
            auth: {
                user: config.EMAIL,
                pass: config.PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        transporter.sendMail({
            from: config.EMAIL, //put your gmail account here!!!
            to: config.EMAIL,
            subject: "New User!",
            html: `
            <div>
               A new user posted answers of all interview questions
               <h2>Name: ${user.firstName} ${user.lastName}</h2>
               <h2>Email: ${user.email}</h2>
               <h2>Phone: ${user.phone}</h2>
               <h2>Address: ${user.address}</h2>
            </div>
            `
        }).then(data => {
            res.status(200).json({ successMessage: 'Email sent successfully!', data });
            console.log(data)
        });
    }
}

exports.deleteUser = async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    if (user) {
        user.remove();
        res.status(200).json({ successMessage: 'User Deleted Successfully' });
    }
}



exports.uploadComment = async (req, res) => {
    const findUser = await User.findOne({ _id: req.params.id });
    if (findUser) {
        findUser.comment = req.body.comment;
        findUser.rating = req.body.rating;

        const saveUser = await findUser.save();
        if (saveUser) {
            res.status(200).json({ saveUser, successMessage: 'Rating and Comment saved successfuly!' });
        } else {
            res.status(400).json({ errorMessage: 'Rating and Comment not saved. Please try again' });
        }
    } else {
        res.status(400).json({ errorMessage: 'User not found!' });
    }
}