"use client";
import { useState } from "react";

export const Image2 = () => {
  const photos = [
    "/photos/1.jpg", "/photos/2.jpg", "/photos/3.jpg",
    "/photos/4.jpg", "/photos/5.jpg", "/photos/6.jpg",
    "/photos/7.jpg", "/photos/8.jpg", "/photos/9.jpg"
  ];

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const showModal = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo: string, index: number) => (
          <div
            key={index}
            className="flex justify-center items-center"
            onClick={() => showModal(photo)}
          >
            <img
              src={photo}
              alt={`Photo ${index}`}
              className="object-cover w-full h-32 hover:brightness-50 cursor-pointer"
            />
          </div>
        ))}
      

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <img
            src={selectedPhoto}
            alt="Selected"
            className="object-cover h-screen"
          />
          <button
            className="absolute top-4 right-4 text-white bg-red-500 px-4 py-2 rounded-md cursor-pointer"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};