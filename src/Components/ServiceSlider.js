import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxCrop, RxPencil2, RxReader, RxRocket, RxArrowTopRight, RxCamera, RxCode } from "react-icons/rx";
import { Pagination, Loop, FreeMode, AutoPlay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// data
export const serviceData = [
  {
    icon: <RxCode/>,
    title: 'Development',
    description: 'I love creating websites that are interactive, and are user-friendly',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Have any ideas to help sparkle your day, I can design your dream into reality',
  },
  {
    icon: <RxCamera />,
    title: 'Videography',
    description: 'I shoot and edit short films videos shoots and a bit of cinematography that exceeds client expectations',
  },
  {
    icon: <RxCrop />,
    title: 'Digital Marketing',
    description: 'With Google Digital Garage to back my story, I am well articulated in this digital space',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'I prize myself as a well-versed individual across the spaces of English literature and writing skills',
  },
  {
    icon: <RxRocket />,
    title: 'Digital journalism',
    description: 'As a certified journalist, I bring the news right on the palm of your hands',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      freeMode={true}
      loop={true}
      autoplay={{
   delay: 1000,
 }}
      pagination={{
        el:'swiper-pagination',
        type:'bullets',
        clickable: true,
      }}
      modules={{ FreeMode, Pagination, Loop, AutoPlay }}
      className='h-[240px]'
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-full rounded-xl px-6 py-8 flex xl:text-ellipsis xl:flex-col md:flex-col sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4 dark:text-primaryDark'>{item.icon}</div>
            {/* title and description */}
            <div className='mb-8 dark:text-light'>
              <div className='mb-2 text-lg xl:text-base'>{item.title}</div>
              <p className='max-w-[350px] leading-normal xl:text-sm'>
                {item.description}
              </p>
            </div>
            {/* arrow */}
            <div className='text-3xl dark:text-light xl:hidden lg:hidden'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
