// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, AutoPlay, Loop } from 'swiper';
// import { FaQuoteLeft } from 'react-icons/fa';
// import Image from 'next/image';

// // testimonial data
// const testimonialData = [
//   {
//     pics: '/t-avt-1.png',
//     name: 'Carol Muinde',
//     position: 'Client',
//     message:
//       'Mike does his work with extreme precision and accuracy to go along with his attention to detail manifest, he is a magnifico developer',
//   },
//   {
//     pics: '/t-avt-2.png',
//     name: 'Carlos Lakaka',
//     position: 'Client',
//     message:
//       'Mike does his work with extreme precision and accuracy to go along with his attention to detail manifest, he is a magnifico developer',
//   },
//   {
//     pics: '/t-avt-3.png',
//     name: 'Byorn Ironside',
//     position: 'Client',
//     message:
//       'Mike does his work with extreme precision and accuracy to go along with his attention to detail manifest, he is a magnifico developer',
//   },
// ];

// const TestimonialSlider = () => {
//   return (
//     <Swiper
//       navigation={true}
//       pagination={{
//         clickable: true,
//       }}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//       className='h-[400px]'
//     >
//       {testimonialData.map((person, index) => (
//         <SwiperSlide key={index}>
//           <div className='flex flex-col items-center xl:flex-row md:flex-row gap-x-8 h-full px-16'>
//             {/* avatar, name, position */}
//             <div className='w-full max-w-[300px] flex flex-col 2xl:justify-center xl:justify-center items-center relative mx-auto xl:mx-0'>
//               <div className='flex flex-col justify-center text-center'>
//                 {/* avatar */}
//                 <div className='mb-2 mx-auto'>
//                   <Image src={person.pics} width={100} height={100} alt='' />
//                 </div>
//                 {/* name */}
//                 <div className='text-lg dark:text-light'>{person.name}</div>
//                 {/* position */}
//                 <div className='text-[12px] uppercase font-extralight tracking-widest dark:text-light'>
//                   {person.position}
//                 </div>
//               </div>
//             </div>
//             {/* quote & message */}
//             <div className='flex-1 flex flex-col justify-center before:w-[1px] 2xl:before:bg-black/75 xl:before:bg-black/75 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
//               {/* quote icon */}
//               <div className='mb-4'>
//                 <FaQuoteLeft className='text-4xl xl:text-6xl text-accent mx-auto md:mx-0 dark:text-primaryDark' />
//               </div>
//               {/* message */}
//               <div className='xl:text-lg text-center md:text-left dark:text-light'>{person.message}</div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default TestimonialSlider;
