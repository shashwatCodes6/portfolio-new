import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="m-5 flex justify-around">
        <div className="my-10 mx-5 align-center text-xl">
          Hi! I am Shashwat
          <div>
            I am a developer, problem solver and keen learner
          </div>
        </div>
        <div className="m-10 hidden md:block">
          pic goes here
        </div>
      </div>
    </div>
  );
}
