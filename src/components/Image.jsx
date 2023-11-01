import useImage from "../hooks/useImage";
import Spinner from "./Spinner";

const Image = ({ src, className, alt }) => {
  const { source, loaded } = useImage(src);
  if (!loaded)
    return (
      <div className="flex justify-center items-center h-40 md:h-48">
        <Spinner />
      </div>
    );
  if (loaded)
    return (
      <img src={source} alt={alt ? alt : "images"} className={className} />
    );
};

export default Image;
