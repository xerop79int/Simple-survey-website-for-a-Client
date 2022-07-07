module.exports = {
    mongoURI: process.env.MONGO_URI,
    cloudinary_cloud_name: process.env.CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_SECRET_KEY,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE
}
