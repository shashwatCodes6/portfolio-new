import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function NavBar(){
    return( 
        <div className= " bg-slate-300">
        <div className="flex justify-between my-0 m-5 pd-2">
            <div className="text text-3xl font-bold m-5">
                Shashwat
            </div>
            <div className="m-4 hidden md:block">
                <Button size="lg" variant="ghost">
                    <Link href="/login">Projects</Link>
                </Button>
                <Button size="lg" variant="ghost">
                    <Link href="/login">Acheivements</Link>
                </Button>
            </div>
        </div>
        </div>
    )
}