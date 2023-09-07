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

// Initialize Swiper modules


export default function ProductSlider() {
  const [data, setData] = useState([]);

  // Fetch data asynchronously
  useEffect(() => {
    async function fetchData() {
      const products = await FetchData();
      setData(products);
    }
    fetchData();
  }, []);
 
  return (
    <main className='bg-black mt-0'>
      <h1 className='text-white font-bold text-[50px] text-center pt-5 cursor-pointer'>Home Page / Slidder</h1>
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
    className="m-auto w-[1000px] cursor-pointer  "
  >
      {data.map((product: any, index: number) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="grid grid-cols-1 gap-10 max-w-6xl m-auto mb-10 ">
              <div className="w-[350px] h-[450px]  border-x-teal-300 border-[2px] border-y-yellow-300  mt-10 border p-2 bg-gradient-to-l from-teal-950 via-red-700  bg-gradient-to-r from-teal-600 via-red-700 to-green-950 rounded-[30px]">
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
                    <li className="cursor-pointer text-yellow-400 font-bold list-none">
                      Read More
                    </li>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
    </main>
  );
}

