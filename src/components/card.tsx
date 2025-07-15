interface Position {
   x: number;
   y: number;
}

interface CardProps extends React.PropsWithChildren {
   icon?:  string;
   header?: string;
   body?: string;
   alt?: string;
   className?: string;
   index: number;
}



const Card: React.FC<CardProps> = ({
   icon: Icon,
   header,
   body,
   alt,
   className,
   index,
   // children,
}) => {

   return (
      <div
         key={index}
         className={`px-7 py-20 w-64 h-[28rem] font-[Lexend] flex items-center ${
            index % 2 === 0
               ? "bg-pyellow"
               : "bg-pblack border-[0.01px] border-pyellow border"
         }  `}
         >
            <div className="flex flex-col justify-between gap-[25px] h-[305px] w-[250px]">
               <img
                  src={Icon}
                  alt={alt}
                  className="mb-8 w-7 h-7"
               />
               <div className="space-y-5">
                  <h1 className="text-white font-bold text-xl">
                     {header}
                  </h1>
                  <p className="text-gray-200 text-[15px] font-[300] w-full">
                     {body}
                  </p>
               </div>
               <div className="text-white">
                  <button
                     className="border-b-2">
                     Learn More
                  </button>
               </div>
            </div>
            
         </div>
   )
}

export default Card;