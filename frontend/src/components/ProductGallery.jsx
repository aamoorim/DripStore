import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full flex flex-col">
      
  
      <div 
        className="relative h-[380px] lg:h-[570px] w-full rounded flex items-center justify-center mb-6 overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: selectedImage.color }} 
      >
         <button className="absolute left-4 p-2 rounded-full hover:bg-white/20 transition cursor-pointer">
            <ChevronLeft className="w-8 h-8 text-gray-700" />
         </button>
         <button className="absolute right-4 p-2 rounded-full hover:bg-white/20 transition cursor-pointer">
            <ChevronRight className="w-8 h-8 text-gray-700" />
         </button>

         <img 
           src={selectedImage.src} 
           alt="Produto Principal" 
           className="w-[80%] object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500"
         />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-between">
         {images.map((img) => (
           <div 
             key={img.id}
             onClick={() => setSelectedImage(img)}
             className={`
                w-24 h-24 rounded flex items-center justify-center cursor-pointer shrink-0 transition-all duration-200
                ${selectedImage.id === img.id ? 'border-2 border-[#C92071]' : 'bg-white border border-transparent'}
             `}
             style={{ backgroundColor: img.color }}
           >
              <img src={img.src} alt={`Thumb ${img.id}`} className="w-[80%] object-contain mix-blend-multiply" />
           </div>
         ))}
      </div>
    </div>
  );
};