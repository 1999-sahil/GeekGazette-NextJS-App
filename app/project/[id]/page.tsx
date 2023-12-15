import { ProjectInterface } from "@/common.types";
import ProjectActions from "@/components/ProjectActions";
import RelatedProjects from "@/components/RelatedProjects";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session"
import Image from "next/image";
import Link from "next/link";


const Project = async ({ params: { id } }: { params : { id: string }}) => {

    const session = await getCurrentUser();
    const result = await getProjectDetails(id) as { project?: ProjectInterface };

    if(!result?.project) {
        <p className="no-result-text">Failed to fetch project information</p>
    }

    const projectDetails = result?.project;

    const renderLink = () => `/profile/${projectDetails?.createdBy?.id}`;

    return (
        <>
            {/** User Profile, Title at the top */}
            <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full pl-5 pr-5 mt-8">
                <div className="flex-1 flexCenter items-start gap-5 w-full max-xs:flex-col ml-4">
                    <Link href={renderLink()}>
                        <Image
                            src={projectDetails?.createdBy?.avatarUrl || 'default-avatar-url'}
                            width={50}
                            height={50}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                    <div className="flex-1 flexStart flex-col gap-1">
                        <p className="self-start text-lg font-semibold font-rubik">
                            {projectDetails?.title}
                        </p>
                        <div className="user-info">
                            <Link href={renderLink()} className="font-semibold font-mukta text-base text-gray-100/100">{projectDetails?.createdBy?.name}</Link>
                            <div className="border-l-2 text-gray/100"></div>
                            <Link
                                href={`/?category=${projectDetails.category}`}
                                className="text-orange-500 font-semibold"
                            >
                                <span className="text-gray-100/95 font-mukta">Category: </span>
                                {projectDetails?.category}
                            </Link>
                        </div>
                    </div>
                </div>

                {
                    session?.user?.email === projectDetails?.createdBy?.email && (
                        <div className="flex justify-end items-center gap-2">
                            <ProjectActions projectId={projectDetails?.id} />
                        </div>
                    )
                }
            </section>

            {/** Project Poster Image */}
            <section className="mt-20 ml-3 mr-3 flexCenter">
                <Image
                    src={`${projectDetails?.image}`}
                    className="object-cover rounded-2xl"
                    width={400}
                    height={400}
                    alt="poster"
                />
            </section>

            {/** Project description and Github/Live Url */}
            <section className="flexCenter flex-col mt-20 pl-5 pr-5">
                <p className="max-w-5xl text-xl font-normal font-mukta">
                    {projectDetails?.description}
                </p>

                <div className="flex flex-wrap mt-5 gap-5">
                    <Link
                        href={projectDetails?.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flexCenter gap-2 tex-sm font-medium text-orange-500"
                    >
                        🖥 <span className="underline">Github</span>
                    </Link>
                    <Image src="/dot.svg" width={4} height={4} alt="dot" />
                    <Link
                        href={projectDetails?.liveSiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flexCenter gap-2 tex-sm font-medium text-orange-500"
                    >
                        🚀 <span className="underline">Live Site</span>
                    </Link>
                </div>
            </section>

            {/** User Avatar Url */}
            <section className="flexCenter w-full gap-8 mt-28 pl-10 pr-10">
                <span className="w-full h-0.5 bg-light-white-200" />
                <Link href={renderLink()} className="min-w-[82px] h-[82px]">
                    <Image
                        src={projectDetails?.createdBy?.avatarUrl}
                        className="rounded-full"
                        width={82}
                        height={82}
                        alt="profile image"
                    />
                </Link>
                <span className="w-full h-0.5 bg-light-white-200" />
                
            </section>

            <RelatedProjects
                userId={projectDetails?.createdBy?.id}
                projectId={projectDetails?.id}
            />
        </>
    )
}

export default Project