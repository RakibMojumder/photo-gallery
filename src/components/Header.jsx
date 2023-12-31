const Header = ({ selectedImages, setSelectedImages, images, setImages }) => {
  const handleDeleteImages = () => {
    // get filtered images that does not include in the selectedImages
    const filteredImages = images.filter(
      (image) => !selectedImages.find((item) => item.id === image.id)
    );

    setImages(filteredImages);
    setSelectedImages([]);
  };

  return (
    <div className="px-5 py-2.5 border-b">
      {selectedImages.length > 0 ? (
        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg flex gap-3 items-center">
            <input
              onChange={() => setSelectedImages([])}
              type="checkbox"
              name="image checkbox"
              checked={selectedImages.length > 0}
              className="h-4 md:h-5 w-4 md:w-5 cursor-pointer"
            />
            <h3>{selectedImages.length} File Selected</h3>
          </div>
          <button
            onClick={handleDeleteImages}
            className="text-rose-500 hover:underline font-semibold"
          >
            Delete File
          </button>
        </div>
      ) : (
        <h3
          onClick={() => console.log("object")}
          className="text-xl font-semibold"
        >
          Gallery
        </h3>
      )}
    </div>
  );
};

export default Header;
