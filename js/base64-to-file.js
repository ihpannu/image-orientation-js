export default function base64ToFile(base64, fileName) {
  return new Promise((resolve, reject) => {
    fetch(base64)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], fileName, { type: 'image/jpeg' });

        resolve(file);
      })
      .catch(err => {
        reject(err);
      });
  });
}
