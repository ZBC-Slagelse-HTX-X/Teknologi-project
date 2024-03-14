import Link from "next/link";
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

export default async function navbar_server() {
    return (
        <>
            <li className="flex flex-col"><Link href="/"><CalendarDaysIcon className="w-8 h-8"/> Homepage</Link></li>
            <li><Link href="/">Schedule</Link></li>
            <li><Link href="/">Homework</Link></li>
            <li><Link href="/">Assignments</Link></li>
            <li><Link href="/">Messages</Link></li>
        </>
    );
}