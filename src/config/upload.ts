import multer, { memoryStorage } from "multer";

export default {
    storage: multer.memoryStorage()
}