import React from "react";

export default function Card({
    // 1) Course name
    // 2) Instructor's name
    // 0) Description
    // 4) Enrollment status (e.g., 'Open', 'Closed', 'In Progress')
    // 5) Course duration
    // 6) Schedule
    // 7) Location
    // 8) Pre-requisites
    // 9) Syllabus as an expandable item
    subname,coursename,insname,Description,enrollment,
    courseduration,Schedule
}) {
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://dummyimage.com/1202x502"
        />
      </div>
      <h2 className="title-font text-200 font-medium text-gray-900 mt-1 mb-0">
        Subject Name :{subname}
      </h2>
      <h2 className="title-font text-200  font-medium text-gray-900 mt-6 mb-0">
        Instructor Name :{insname}
      </h2>
      <h2 className="title-font text-200 font-medium text-gray-900 mt-6 mb-0">
        Course  Duration :{courseduration}
      </h2>
      <h2 className="title-font text-200 font-medium text-gray-900 mt-6 mb-0">
        Enrollment status :{enrollment}
      </h2>
     
      
      <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
        Button
      </button>
    </div>
  );
}
