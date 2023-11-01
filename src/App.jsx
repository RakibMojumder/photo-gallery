import { useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { data } from "./utils/data";
import SortableItem from "./components/SortableItem";
import Header from "./components/Header";
import { BsImageAlt } from "react-icons/bs";

function App() {
  const [images, setImages] = useState(data);
  const [selectedImages, setSelectedImages] = useState([]);
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 10 } })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldItems = images.find((i) => i.id === active.id);
      const newItems = images.find((i) => i.id === over.id);
      const oldIndex = images.indexOf(oldItems);
      const newIndex = images.indexOf(newItems);

      setImages(arrayMove(images, oldIndex, newIndex));
    }
  }

  const handleCheckBox = (e, image) => {
    const isExist = selectedImages.find((i) => i.id === image.id);
    if (isExist) {
      const filteredImages = selectedImages.filter((i) => i.id !== image.id);
      setSelectedImages(filteredImages);
    } else {
      setSelectedImages((prev) => [...prev, image]);
    }
  };

  return (
    <div className="p-4 sm:p-10 md:p-14 bg-gray-100">
      <div className="bg-white rounded-md">
        <Header
          images={images}
          setImages={setImages}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
        <div className="p-4 md:p-8">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={images} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`border rounded-md ${
                      index === 0 && "row-span-2 col-span-2"
                    }`}
                  >
                    <SortableItem
                      image={image}
                      selectedImages={selectedImages}
                      handleCheckBox={handleCheckBox}
                    />
                  </div>
                ))}
                <div className="h-full w-full border flex flex-col justify-center items-center gap-y-3 font-semibold rounded-md p-3 cursor-pointer">
                  <BsImageAlt size={20} />
                  <h1>Add Images</h1>
                </div>
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}

export default App;
