 'use client'
 import React from "react";
import FetchData from '../../../../sanity/lib/FetchData'
import { urlForImage } from "../../../../sanity/lib/image";

export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

export default async function page({ params }: { params: any }) {
  const data = await FetchData();
  const filteredData = data.find(
    (item: any) => item.slug.current == params.product
  );

  return (
    <main className=" items-center mx-auto max-w-screen-xl px-6 md:px-6">
    <div className="bg-orange-100 pt-10 h-full ">
       <div className="items-center">
        <h1 className="text-center text-teal-700 font-bold text-[30px]">{ filteredData.title }</h1>
        <h1 className="text-center text-teal-700 font-bold">{ filteredData.description}</h1>
        </div>
        <div className="container m-auto mt-14">
        <img
            src={urlForImage(filteredData.image).url()}
            alt=""
            className="w-[300px] h-full object-cover object-top m-auto"
          />
          <h1 className="text-center text-black">{filteredData.content}</h1>
        </div>
    </div></main>
  );
}