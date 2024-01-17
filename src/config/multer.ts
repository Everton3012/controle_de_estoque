import crypto from "crypto";
import multer from "multer";
import {extname, resolve} from "path";

export default {
    updload(folder: string) {
        return{
            storage:multer.diskStorage({
                destination: resolve(__dirname, "..","..", folder),
                filename: (request, file, callback) => {
                    const filehash = crypto.randomBytes(16).toString("hex");
                    const filename = `${filehash}-${file.originalname}`;

                    return callback(null, filename);
                }
            })
        }
    
    } 
}
