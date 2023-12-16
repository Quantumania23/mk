// next image
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[200px] absolute right-8 -bottom-80 inline-block
    mix-blend-multiply dark:mix-blend-color-dodge animate-bounce duration-75 z-10">
      <Image 
      src={'/circles.png'}
      width={260}
      height={200}
      className='w-full h-full'
      alt='Circles.png'
      />
    </div>
  );
};

export default Circles;
