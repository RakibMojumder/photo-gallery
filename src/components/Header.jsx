const Header = ({ selectedImages, setSelectedImages, images, setImages }) => {
  const handleDeleteImages = () => {};

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
              className="h-5 w-5 cursor-pointer"
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
