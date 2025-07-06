import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
config();

// Add this debug logging
console.log("Cloudinary Config:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? "[SET]" : "[MISSING]",
    api_key: process.env.CLOUDINARY_API_KEY ? "[SET]" : "[MISSING]",
    api_secret: process.env.CLOUDINARY_API_SECRET ? "[SET]" : "[MISSING]"
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
export default cloudinary;