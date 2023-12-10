"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Filters } from "@/constant";

const Categories = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get('category');

    const handleTags = (filter: string) => {
        router.push(`${pathname}?category=${filter}`);
    };

    return (
        <div className="flexBetween w-full gap-5 flex-wrap">
            <ul className="flex gap-2 overflow-auto">
                {Filters.map((filter) => (
                    <button
                        type="button"
                        key={filter}
                        onClick={() => handleTags(filter)}
                        className={`${
                            category === filter 
                            ? 'bg-orange-500 font-medium font-mukta text-white'
                            : 'font-mukta'} px-3 py-2 rounded-full capitalize whitespace-nowrap hover:bg-slate-200 hover:text-orange-500 mb-2`
                        } 
                    >
                        {filter}
                    </button>
                ))}
            </ul>
        </div>
    )
}

export default Categories