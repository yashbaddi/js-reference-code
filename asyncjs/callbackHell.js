getImage(imageUrl, function (image) {
  compressImage(image, function (compressedImage) {
    applyFilter(compressedImage, "sepia", function (filteredImage) {
      uploadImage(filteredImage, function (uploadedImage) {
        console.log("Image uploaded:", uploadedImage);
      });
    });
  });
});

//Promise
getImage(imageUrl)
  .then(compressImage)
  .then(function (compressedImage) {
    return applyFilter(compressedImage, "sepia");
  })
  .then(uploadImage)
  .then(function (uploadedImage) {
    console.log("Image uploaded:", uploadedImage);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

//Async
async function processImage(imageUrl) {
  try {
    const image = await getImage(imageUrl);
    const compressedImage = await compressImage(image);
    const filteredImage = await applyFilter(compressedImage, "sepia");
    const uploadedImage = await uploadImage(filteredImage);
    console.log("Image uploaded:", uploadedImage);
  } catch (error) {
    console.error("Error:", error);
  }
}

processImage(imageUrl);

function getImage(url) {}
