import React from "react";

// NextJs
import Image from "next/image";
import Link from "next/link";
//Components
import Pricing from "../../priceStyling/Pricing";
import BuyBtn from "../../base/BuyBtn";
// Translator

export default function Product({ article, item, commonName, sectionName }) {
  const price = item.price.toFixed(2).split(".");
  const itemTypes = item.types.toString().split("\n");
  return (
    <section className="flex items-center mb-5 border border-gray">
      <div className="md:grid grid-cols-[80%20%] w-full h-full">
        <div className="items-center h-full py-3 sm:flex">
          <Link href={`/products/${sectionName}/prodykta`}>
            <div className="relative flex w-full h-48 cursor-pointer sm:w-52 sm:h-32">
              <Image
                src="/images/testCarousel.jpg"
                layout="fill"
                alt="This is test image"
              />
            </div>
          </Link>

          <div className="pl-4">
            <Link href={`/products/${sectionName}/prodykta`}>
              <h2 className="text-lg cursor-pointer">
                {commonName} {article.articleName}
              </h2>
            </Link>
            <ul className="pt-2 text-sm text-gray-darker">
              {itemTypes.map((type) => {
                return <li key={type}>{type}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="bg-grayBg">
          <div className="container flex flex-col justify-center h-full itesm-center">
            <div className="flex justify-center">
              <Pricing price={price[0]} priceDec={price[1]} size="2xl" />
            </div>
            {/* Create grayer color for future*/}
            <BuyBtn border={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
