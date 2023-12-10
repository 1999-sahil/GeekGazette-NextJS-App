"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
}

const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
    
    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 10000));
        setRandomViews(String((Math.floor(Math.random() * 10000) / 10000).toFixed(1) + 'k'));
    }, []);

    return (
        <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
            {/** Title of Project */}
            <div className="w-full flex items-center justify-between bg-white/75">
                <span className="text-white text-xs font-semibold rounded-lg bg-green-500 inline-block mt-2 ml-4 py-1 px-3">Title</span>
                <div className="font-ubuntu font-medium text-gray-100">
                    <p className="w-full">{title}</p>
                </div>
            </div>

            {/** Image of Project */}
            <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
                <Image 
                    src={image}
                    width={10}
                    height={10}
                    alt="Project Image"
                    className="w-3/4 h-3/4 rounded-2xl object-fit"
                />
                <div className="hidden group-hover:flex profile_card-title text-md font-rubik">
                    <p className="w-full">{title}</p>
                </div>
            </Link>

            {/** Project user details */}
            <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm font-rubik">
                <Link href={`/profile/${userId}`}>
                    <div className="flexCenter gap-2">
                        <Image
                        src={avatarUrl}
                        width={24}
                        height={24}
                        className="rounded-full"
                        alt="Profile Image" 
                        />
                        <p className="font-rubik">{name}</p>
                    </div>
                </Link>

                <div className="flexCenter gap-3">
                    <div className="flexCenter gap-2">
                        <Image
                            src='/o-heart.svg'
                            width={13}
                            height={13}
                            alt="heart-likes"
                        />
                        <p className="flexCenter gap-2">{randomLikes}</p>
                    </div>
                    <div className="flexCenter gap-2">
                        <Image
                            src='/o-eye.svg'
                            width={13}
                            height={13}
                            alt="eye-views" 
                        />
                        <p className="flexCenter gap-2">{randomViews}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

/*
<div className="flexCenter flex-col rounded-2xl drop-shadow-card">
            <Link href={`/projects/${id}`} className="flexCenter group relative w-full h-full">
                <Image
                    src={image}
                    width={10}
                    height={10}
                    className="w-full h-full object-cover rounded-2xl"
                    alt="Project Image" 
                />
                <div className="hidden group-hover:flex profile_card-title font-rubik">
                    <p className="w-full">{title}</p>
                </div>
            </Link>

            <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm font-rubik">
                <Link href={`/profile/${userId}`}>
                    <div className="flexCenter gap-2">
                        <Image
                        src={avatarUrl}
                        width={24}
                        height={24}
                        className="rounded-full"
                        alt="Profile Image" 
                        />
                        <p className="font-rubik">{name}</p>
                    </div>
                </Link>

                <div className="flexCenter gap-3">
                    <div className="flexCenter gap-2">
                        <Image
                            src='/heart.svg'
                            width={13}
                            height={13}
                            alt="heart-likes" 
                        />
                        <p className="flexCenter gap-2">{randomLikes}</p>
                    </div>
                    <div className="flexCenter gap-2">
                        <Image
                            src='/eye.svg'
                            width={13}
                            height={13}
                            alt="eye-views" 
                        />
                        <p className="flexCenter gap-2">{randomViews}</p>
                    </div>
                </div>
            </div>
        </div>
 */