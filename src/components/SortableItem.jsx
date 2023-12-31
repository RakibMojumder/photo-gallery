import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "./Image";

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
      <Image src={image.src} alt="images" className="rounded-md" />

      {/* IMAGE OVERLAY START */}
      <div
        className={`h-full w-full absolute top-0 left-0 rounded-md ${
          selectedImages?.includes(image)
            ? "bg-white/60"
            : "bg-black/50 hidden group-hover:block"
        }`}
      >
        <input
          onChange={(e) => handleCheckBox(e, image)}
          type="checkbox"
          name="image checkbox"
          id={image.id}
          checked={selectedImages.includes(image)}
          className="h-4 md:h-5 w-4 md:w-5 mt-3 md:mt-5 ml-3 md:ml-5 cursor-pointer"
        />
      </div>
      {/* IMAGE OVERLAY END */}
    </div>
  );
}

export default SortableItem;
