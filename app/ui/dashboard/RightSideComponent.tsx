import Image from 'next/image'
// icons
import { FaPen } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
export default function RightSideComponent() {
  return <div className="min-w-80 p-1.5">
    {/* top */}
    <div className="bg-white shadow-sm rounded-md overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between p-1.5 bg-green-500 rounded-md overflow-hidden text-white">
        <h3 className="uppercase font-bold text-neutral-100">My Profile</h3>
        <div className="w-[28px] aspect-square rounded-md bg-white bg-opacity-15 flex items-center justify-center">
          <FaPen />
        </div>
      </div>
      {/* profile */}
      <div className="p-3 flex items-center gap-3">
        {/* picture */}
        <div className='w-[64px] aspect-square rounded-full overflow-hidden'>
          <Image 
            src={"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"}
            // fill={true}
            width={64}
            height={64}
            alt='profile image'
            objectPosition='center'
            objectFit='contain'
          />
        </div>
        {/* text */}
        <div className='my-3'>
          <h3 className='font-medium text-neutral-700'>Er. Addis Fenta</h3>
          <p className='text-sm text-neutral-400'>Software Engineer</p>
          <div className='flex items-center gap-x-1.5'>
            <MdLocationPin className='text-green-500'/> 
            <p className='text-sm text-neutral-500'>Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
    {/* bottom */}
    <div>bottom</div>
  </div>;
}
