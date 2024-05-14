import Link from "next/link";

export default function Page() {
    return(
        <div className="flex justify-center w-screen items-center h-screen">
            <h1>Error 404 - <Link className="text-blue-600 underline" href={"/"}>Siden blev ikke fundet...</Link></h1>
        </div>
    );
}