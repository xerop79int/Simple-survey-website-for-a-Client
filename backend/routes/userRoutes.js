const express = require('express');
const { getUserById, SignUp, getAllUsers, uploadInterview, getAllInterviews, getInterviewById, uploadComment, deleteUser, sendEmail, login, AdminSignUp } = require('../controllers/userController');
const upload = require('../middlewares/multer');
const router = express.Router(); 

router.get('/get', getAllUsers);
router.get('/get/:id', getUserById);
router.post('/signup', AdminSignUp);
router.post('/login', login);
router.post('/create', SignUp);
router.get('/interviews/get', getAllInterviews);
router.get('/interviews/get/:id', getInterviewById);
router.post('/interviews/post', upload.single('file'), uploadInterview);
router.delete('/delete/:id', deleteUser);

router.post('/comment/post/:id', uploadComment);
router.post('/send/email/:id', sendEmail);

module.exports = router;