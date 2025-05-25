import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

interface LoaderProps {
  isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
  if (!isVisible) return null;

  return (
    <div className={css.loadbox}>
      <ClipLoader color="darkblue" size={80} />
    </div>
  );
}
