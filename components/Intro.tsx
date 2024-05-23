import Image from 'next/image';
import image from '../public/Zhy8h3T5_400x400.jpeg'

export default function Intro(){
    return (
      <div className="h-3/4 flex-row">
        <div className="p-24 flex flex-col lg:flex-row justify-center">
        <div className="text-slate-200 text-xl m-3 my-6 sm:m-10 md:m-20">
          Hi! I am Shashwat
          <div className="">
            I am a developer, problem solver and keen learner
          </div>
        </div>
        <div className="m-3 sm:m-10 md:m-20 flex justify-center">
          <Image 
            src={image}
            width={300}
            height={300}
            alt="my pfp"
          />
        </div>
      </div>
      </div>
    )
} 