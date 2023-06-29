const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

exports.uploadImage = function (filePath) {
    return cloudinary.uploader.upload(filePath, {
        folder: 'portafolio'
    });
};

exports.deleteImage = function (publicId) {
    return cloudinary.uploader.destroy(publicId);
};