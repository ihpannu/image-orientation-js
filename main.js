import resetOrientation from './js/reset-img-orientation.js';
import getOrientation from './js/get-orientation.js';
import getBase64 from './js/get-base64.js';
import base64ToFile from './js/base64-to-file.js';

export default function getNewFile(file) {
  // Images formats allowed
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  // Change file name back to original file name
  const filename = file.name;
  // Create a promise and resolve it once it done

  return new Promise((resolve, reject) => {
    /*
        Check if current image includes allowed file types
        If not send back error
        else continue 
    */
    if (!allowedTypes.includes(file.type)) {
      reject('Please upload valid image');
    }

    // Get cuurent image orientation
    getOrientation(file, async function(orientation) {
      // Convert the file to base64 format and save the result top result constant
      const result = await getBase64(file);
      // Once file is converted change the orientation to 0,0 image
      resetOrientation(result, orientation, async function(resetBase64Image) {
        // Once image rotation is finished change the imaga format back to file type
        const newFile = base64ToFile(resetBase64Image, filename);
        // Resolve the promise and send back the file to the user
        resolve(newFile);
      });
    });
  });
}
