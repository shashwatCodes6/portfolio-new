
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Projects(){
  const projects : {
    title: string;
    desc: string;
  }[] = [
    {title: "Blogger", desc: "This is a blogging application where users can take down notes and share their thought anonymously."},
    {title: "Chess Game", desc: "A chess game using socket.io where users can play chess by making rooms and inviting friends over!"}
  ]
    return (
    <div className="bg-slate-400 flex flex-col col-span-1" id = "projects">
        <div className="m-10 text text-3xl font-bold underline flex justify-center">
          Projects
        </div>
      <div className="flex justify-center m-10">

        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {
              projects.map((key, ind) => {
                return <CarouselItem key={ind}>
                <div className="p-1">
                  <Card className="bg-slate-800">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <div className="text-3xl font-bold m-2">
                        {key.title}
                      </div>
                      <div className="m-2">
                        {key.desc}
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              }) 
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      </div>
    )
}

