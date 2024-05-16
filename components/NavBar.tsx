import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function NavBar(){
    return( 
        <div className="flex justify-between pd-2 m-4">
            <div className="text text-3xl font-bold m-2">
                Shashwat
            </div>
            <div className="m-1 hidden md:block">
                <Button size="lg" variant="ghost">
                    <Link href="/login">Projects</Link>
                </Button>
                <Button size="lg" variant="ghost">
                    <Link href="/login">Acheivements</Link>
                </Button>
            </div>
        </div>
    )
}