export default function getBase64(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      let base64 = reader.result;
      resolve(base64);
    };
    reader.onerror = function(error) {
      reject(error);
    };
  });
}
