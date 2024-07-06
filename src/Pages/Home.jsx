import React from 'react';
import BlueText from '../Components/core/Home/BlueHighlight';
import GreenText from '../Components/core/Home/GreenHighlight';
import backgroundImage from '../assets/IllustrationBG.png'; 
import sideImg1 from '../assets/Rectangle 1.png'
import Button from '../Components/core/Home/Button';
import downImg1 from '../assets/Image.png'
import Setter from '../Components/core/Home/Setter';
import setterimage1 from '../assets/majesticons_dollar-circle.png'
import setterimage2 from '../assets/majesticons_dollar-circle (1).png'
import setterimage3 from '../assets/majesticons_dollar-circle (2).png'
import setterimage4 from '../assets/majesticons_dollar-circle (3).png'
import Ellipse3 from '../assets/Ellipse 3.png'
import middle1 from '../assets/Image (3).png'
import middle2 from '../assets/Image (4).png'
import middle3 from '../assets/Image (5).png'
import sec5img from '../assets/Image (2).png'
import textimg from '../assets/Get ready to Maximize you Sponsorship opportunities with Sponsogram.png'
import sec4bg from '../assets/Vector2.png'
import sec4bg2 from '../assets/Div.png'
import sec4head from '../assets/Connecting Sponsors with Opportunities.png'
import frame1 from '../assets/Frame 1000011407.png'
import frame2 from '../assets/Frame 1000011408.png'
import frame3 from '../assets/Frame 1000011409.png'
import Ellipse4 from'../assets/Ellipse4.png'
import Ellipse42 from '../assets/Ellipse 42.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Home = () => {

    const setterData = [
        { image: setterimage1, heading: "Discovery", para: "We meet with you to learn about your business,", para2: " your goals, and your target audience." },
        { image: setterimage2, heading: "Strategy", para: "We develop a customized marketing strategy that is ", para2: "based on your unique needs and goals." },
        { image: setterimage3, heading: "Execution", para: "We execute our strategy using the latest digital", para2: "marketing tools and techniques." },
        { image: setterimage4, heading: "Measurement", para: "We track the results of our campaigns so that we can ", para2: "make adjustments as needed." },
      ];
      const swiperData = [
        { image: middle1, title: "Data Analytics", description: "Here you can handle projects together with team virtually" },
        { image: middle2, title: "Security and Privacy", description: "No need to worry about storage because we provide storage up to 2 TB" },
        { image: middle3, title: "Personal Assistance", description: "We always provide useful information to make it easier for you every day" },
      ];
      const foregroundImages = [
        { src: frame1, alt: "Frame 1" },
        { src: frame2, alt: "Frame 2" },
        { src: frame3, alt: "Frame 3" },
      ];
  return (
    <div>

       {/* section 1 */}
      
       <div className="relative overflow-hidden bg-gradient-to-br from-white to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-200 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-200 rounded-full opacity-50 translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-teal-200 rounded-full opacity-30"></div>

      <div className="relative mx-auto flex flex-col lg:flex-row w-full lg:w-11/12 justify-between items-center max-w-7xl">
        <div className="flex flex-col mt-12 lg:mt-24 gap-3 justify-start max-w-2xl">
          <div className="flex flex-col lg:flex-row gap-3 text-center lg:text-left">
            <BlueText text={"Lets"} />
            <GreenText text={"Connect"} />
          </div>
          <div className="flex flex-col text-center lg:text-left gap-3 mb-3">
            <GreenText text="Collaborate Sponsor" />
            <BlueText text={"with Sponsogram!"} />
          </div>
          <p className="text-black text-lg text-center lg:text-left mb-6">
            Sponsogram connect provides an effective and powerful way to connect sponsors with diverse sponsorship opportunities.
          </p>
          <div className='mx-auto lg:mx-0'>
            <Button text="Get Started" />
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-8">
          <img src={sideImg1} alt="Sponsorship illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </div>

    
        
        {/* section 2 */}

        <div className="relative mx-auto flex flex-col md:flex-row w-full md:w-11/12 justify-around text-white max-w-maxContent mt-5 md:mt-52 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4 mb-8 md:mb-0">
          <div className="text-left"><BlueText text={"How It Works?"} /></div>
          <div className='justify-start text-black text-base md:text-lg text-left font-bold'>
            <p>We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
          </div>
          <img src={downImg1} alt="downimg" className="max-w-full h-auto" />
        </div>
        
        <div className="relative h-auto md:h-[500px] w-full md:w-[700px] mt-10">
          {/* Background Image - hidden on mobile */}
          <div className="hidden md:block rounded-full absolute inset-0 bg-cover bg-center w-[100px] h-[100px] ml-auto mr-28 mt-36"
               style={{backgroundImage: `url(${Ellipse4})`}}>
          </div>
          
          {/* Desktop View */}
          <div className="hidden md:flex flex-col gap-5 max-w-full">
            {setterData.map((data, index) => (
              <Setter
                key={index}
                image={data.image}
                heading={data.heading}
                para={data.para}
                para2={data.para2}
                headingStyle={{ textAlign: 'left' }}
                paraStyle={{ whiteSpace: 'pre-wrap' }}
              />
            ))}
          </div>
          
          {/* Mobile View with Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {setterData.map((data, index) => (
                <SwiperSlide key={index}>
                  <Setter
                    image={data.image}
                    heading={data.heading}
                    para={data.para}
                    para2={data.para2}
                    headingStyle={{ textAlign: 'center' }}
                    paraStyle={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>

        {/* section 3 */}
        
        <div className="mx-auto w-full md:w-11/12 px-4 md:px-10 mt-10 md:mt-28 max-w-maxContent">
      <div className="flex flex-col gap-8">
        {/* Upper Section */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-20'>
          <div className="text-center md:text-left">
            <BlueText text={"what do you"} />
            <BlueText text={"get?"} />
          </div>
          <div className="text-black font-semibold text-lg md:text-2xl text-center md:text-left">
            <p>We offer a variety of interesting features that you can help increase your productivity at work and manage your project easily.</p>
          </div>
          <div className="w-full md:w-max flex justify-center md:justify-start">
            <Button className="w-full md:w-auto" text={"Get Started"} />
          </div>
        </div>

        {/* Middle Section - Desktop */}
        <div className="hidden md:flex flex-row justify-between items-center relative">
          <div className="rounded-full absolute bg-cover bg-center w-[300px] h-[300px] left-1/4 -z-10"
               style={{backgroundImage: `url(${Ellipse4})`}}>
          </div>
          {swiperData.map((item, index) => (
            <img key={index} src={item.image} alt={item.title} className="w-1/3" />
          ))}
        </div>

        {/* Middle and Lower Section - Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {swiperData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <img src={item.image} alt={item.title} className="w-full mb-4" />
                  <h2 className="text-2xl font-bold text-black mb-2">{item.title}</h2>
                  <p className="text-black text-center">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Lower Section - Desktop */}
        <div className='hidden md:flex flex-row text-black gap-10 md:gap-40'>
          {swiperData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h1 className="text-2xl md:text-4xl mb-4">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
        </div>

        {/* section 4 */}

        <div className="flex flex-col justify-center items-center mt-12 md:mt-24 px-4 md:px-0">
      <div>
        <img src={sec4head} alt="heading" className="max-w-full h-auto" />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative w-full max-w-6xl h-[600px] mt-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: `url(${sec4bg})`}}
        ></div>
        <img
          src={sec4bg2}
          alt="Foreground"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-contain z-10"
        />
        <img
          src={frame1}
          alt="Frame 1"
          className="absolute top-[10%] left-[5%] w-[200px] h-[200px] object-contain z-20"
        />
        <img
          src={frame2}
          alt="Frame 2"
          className="absolute top-[10%] right-[5%] w-[200px] h-[200px] object-contain z-20"
        />
        <img
          src={frame3}
          alt="Frame 3"
          className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] object-contain z-20"
        />
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full mt-6">
        <div className="relative w-full h-[300px] mb-4">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: `url(${sec4bg})`}}
          ></div>
          <img
            src={sec4bg2}
            alt="Foreground"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain z-10"
          />
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {foregroundImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[200px]">
                <img src={img.src} alt={img.alt} className="max-w-full max-h-full object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

        {/* section 5 */}
        <div className="relative mx-auto w-full md:w-11/12 max-w-maxContent mt-12 md:mt-52 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center">
        <div className="w-full md:w-1/2">
          <img src={sec5img} alt="Section 5 Image" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <img src={textimg} alt="Text Image" className="w-full h-auto mb-6 md:mb-0" />
          <div className="mt-6 md:mt-4 md:ml-44 w-full md:w-auto">
            <Button text={"Get Started"} className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </div>
    </div>

        
   
    
  );
};

export default Home;