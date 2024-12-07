import Image from "next/image";
// icons
import { FaCamera } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
export default function Page() {
  return <div className="w-full h-full p-1.5 pt-0">
    <div className="flex items-center justify-center mt-12">
      <div>
        {/* image */}
        <div className="w-[120px] aspect-square rounded-full overflow-hidden">
          <Image src={"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"} width={120} height={120} alt="profile picture"/>
        </div>
        {/* picker */}
        <div className="flex items-center justify-center gap-x-3 mt-3">
          <button>
            <FiArrowRightCircle className="text-2xl text-green-500 rotate-180"/>
          </button>
          <input type="file" id="image-picker" accept="image/*" hidden/>
          <label htmlFor="image-picker">
            <FaCamera className="text-2xl text-green-500 cursor-pointer" />
          </label>
          <button>
            <FiArrowRightCircle className="text-2xl text-green-500"/>
          </button>
        </div>
      </div>
    </div>
  </div>;
}
