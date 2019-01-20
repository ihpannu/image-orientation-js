# Image Orientation Js

```sh
npm install image-orientation-js
```

```sh
yarn add image-orientation-js
```

## Examples

```javascript
 import getNewFile from 'image-orientation-js'
 
 async function fixOrientation() {
      const uploads = document.querySelector("input").files
      
      for (const file of uploads) {
          const converted = await getNewFile(file)
          const url = URL.createObjectURL(converted)
          document.querySelector("img").src = url
        }
      }

```

