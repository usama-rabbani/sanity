'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import FetchData from "../../../sanity/lib/FetchData";
import { urlForImage } from "../../../sanity/lib/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function ProductSlider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await FetchData();
      setData(products);
    }
    fetchData();
  }, []);

  return (
    <div className='bg-black mt-0'>
    <main className='lg:w-[1000px] items-center mx-auto max-w-screen-xl px-6 md:px-6'>
      <h1 className='font-bold text-[50px] text-center pt-5 cursor-pointer bg-gradient-to-r from-yellow-300 via-teal-600 to-red-700 text-transparent bg-clip-text bg-500% animate-gradient'>Home Page / Slidder</h1>
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    slidesPerView={3}
    centeredSlides={true}
    loop={true}
    spaceBetween={30}
    coverflowEffect={
      {
        rotate:0,
        depth:100,
        stretch:0,
        modifier:2.5
      }
    }
 
    pagination={{
      clickable: true,
    }}
    modules={[Pagination, EffectCoverflow]}
    className="m-auto  cursor-pointer  "
  >
      {data.map((product: any, index: number) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="grid lg:grid-cols-1 lg:gap-10 lg:max-w-6xl m-auto mb-10  ">
              <div className="lg:w-[350px] lg:h-[450px]  border-x-teal-300 border-[2px] border-y-yellow-300  mt-10 border p-2 bg-gradient-to-l from-teal-950 via-red-700  bg-gradient-to-r from-teal-600 via-red-700 to-green-950 rounded-[30px]">
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={urlForImage(product.image).url()}
                    alt=""
                    className="w-[200px]  "
                  />
                </motion.div>
                <div className="cont text-center text-white pt-5">
                  <h1 className="text-3xl font-bold mt-2 ">{product.title}</h1>
                  <h1 className="text-lg font-semibold">Category: {product.category}</h1>
                  <h1 className="text-xl font-semibold">Rs {product.price}</h1>
                  <p className="">{product.description}</p>
                  <Link href={`/product/${product.slug.current}`}>
                    <ul>
                    <li className="cursor-pointer text-yellow-400 font-bold list-none">
                      Read More
                    </li></ul>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
    </main>
    </div>
  );
}

