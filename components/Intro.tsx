import Image from 'next/image';
import image from '../public/Zhy8h3T5_400x400.jpeg'

export default function Intro(){
    return (
      <div className="h-screen flex-row">
        <div className="p-24 flex flex-col lg:flex-row justify-around">
        <div className="align-center text-xl m-20">
          Hi! I am Shashwat
          <div className=''>
            I am a developer, problem solver and keen learner
          </div>
        </div>
        <div className="my-5 m-20 flex justify-center">
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