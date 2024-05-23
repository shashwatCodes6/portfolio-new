import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Acheivements(){
    const achievements = [
      {symbol: "", title : "CodeForces", des: "Max rating of 1680 (top 5% in India)."},
      {symbol: "", title : "LeetCode", des: "Max rating of 2041 (top 2.3% globally)."},
      {symbol: "", title : "CodeChef", des: "Max rating of 1850 (Rated 4 stars)."},
    ];

    return (
        <div id="achievements" className="">
        <div className="flex flex-col col-1 justify-center">
          <div className="underline text text-3xl font-bold m-10 flex justify-center">
            Achievements
          </div>
        <div className="flex justify-center m-10">
        <div className="flex-col grid grid-cols-1 sm:grid-cols-3">
          {
            achievements.map((key, _) => {
              return (
                <Card className="col-span-1 m-5 bg-slate-500">
                  <CardHeader>
                    <CardTitle className="underline">{key.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {key.des}
                  </CardContent>
                </Card>
              )
            })
          }
          </div>
        </div>
        </div>
      </div>
    )
}