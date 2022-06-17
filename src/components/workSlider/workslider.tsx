import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { IWorks, IWorksData } from "../../interfaces/IWorks";
import Link from "next/link";
import Image from "next/image";

const WorkSlider = ({ worksData }: IWorksData) => {
  //create newArray
  let splitedArray = [];
  //create new array of array -> 12 element per array
  const chunkSize = 9;

  for (let i = 0; i < worksData.length; i += chunkSize) {
    const chunk = worksData.slice(i, i + chunkSize);
    splitedArray.push(chunk);
  }
  //   console.log(splitedArray);

  return (
    <WorkSliderStyle>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {splitedArray.map((array, i) => {
          return (
            <SwiperSlide key={i}>
              {array.map((work) => {
                return (
                  <div className="work" key={work.id}>
                    <Link href={`/works/${work.slug}`}>
                      <a>
                        {work.acf.logo.url ? (
                          <div className="imgBox">
                            <Image
                              src={work.acf.logo.url}
                              layout="fill"
                              objectFit="contain"
                              alt="logo de l'entreprise"
                            />
                          </div>
                        ) : (
                          <p>{work.title.rendered}</p>
                        )}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </WorkSliderStyle>
  );
};
export default WorkSlider;

const WorkSliderStyle = styled.div`
  margin: 0 auto;
  width: 80% ;
  /* height: 80vh ; */
  @media screen and (max-width:1280px){
    width: 90% ;
  }
  .swiper-slide{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width:23.333333vw;
    height:calc(23.333333vw * 16 / 7);
    @media screen and (max-width:1024px){
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      height:calc(23.333333vw * 16 / 3);
    }
    @media screen and (max-width:760px){
      grid-column-gap: 10px;
      grid-row-gap: 10px;

    }
    @media screen and (max-width:680px){
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(auto, 1fr);
      height:calc(23.333333vw * 16 / 1.4);

    }
  
    .work{
          background-color: var(--White);
          transform: scale(0.95) ;
          transition: all ease-in 0.2s;
          
          &:hover{
            transform: scale(1) ;
            transition: all ease-in 0.2s;
            .imgBox{
                filter: grayscale(0);
              transition:all ease-in 0.2s}
              
            }
            a {
              display: flex;
              align-content: center;
              align-items: center;
              text-align:center;
              justify-content:center;
              width: 100%;
              height: 100%;
              .imgBox{
                transition:all ease-in 0.2s;
                filter: grayscale(1);
                position: relative ;
                height: 70%;
                width: 70%;
              }
            }
             }
        }
  }
 
`;
