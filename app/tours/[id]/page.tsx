import React from "react";

// import mapsImg from "@/images/maps.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <div>
        <Image
          src={url}
          alt="tour"
          width={192}
          height={192}
          priority
          className="w-48 h-48 object-cover rounded"
        />
        <h2>remote image</h2>
      </div>
    </div>
  );
}

export default page;
