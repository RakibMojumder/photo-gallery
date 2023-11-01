import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ image, handleCheckBox, selectedImages }) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: image.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="relative group"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <img src={image.src} alt="images" className="rounded-md" />
      <div
        className={`h-full w-full absolute top-0 left-0 ${
          selectedImages?.includes(image)
            ? "visible bg-white/50"
            : "bg-black/50 transition-all duration-300 invisible group-hover:visible"
        }`}
      >
        <input
          onChange={(e) => handleCheckBox(e, image)}
          type="checkbox"
          name="image checkbox"
          id={image.id}
          checked={selectedImages.includes(image)}
          className="h-5 w-5 mt-5 ml-5 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SortableItem;
