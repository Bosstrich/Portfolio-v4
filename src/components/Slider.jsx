// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectSlide from './ProjectSlide';


const Slider = ({categories}) => {
    return (
        <Swiper

          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          clickable={false}
          setWrapperSize={true}
          spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1
             },
             768: {

              slidesPerView: 2
            },
            1024: {
        
              slidesPerView: 3
            },
              
          }}
          navigation
          pagination={{ clickable: true }}

        >
          {categories.map((category) => (
          
            <SwiperSlide key={category.name}>
              <ProjectSlide projectIMG={category.image} 
                            title={category.name} 
                            techs={category.tags}
                            description={category.description}
                            links={category.links}
              />
            </SwiperSlide>

          ))}

          
        </Swiper>
      );
}
 
export default Slider;