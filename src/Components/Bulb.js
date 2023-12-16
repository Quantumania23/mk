// next image
import Image from 'next/image';

const Bulb = () => {
  return (
    <div className='absloute right-8 bottom-8 inline-block rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
      <Image
      src={'/bulb.png'}
      width={260}
      height={200}
      className='w-full h-full'
      alt=''
      />
    </div>
  );
};

export default Bulb;

// absloute right-8 bottom-8 inline-block w-24 animate-pulse duration-75
// absolute -left-36 -bottom-12 rotate-12