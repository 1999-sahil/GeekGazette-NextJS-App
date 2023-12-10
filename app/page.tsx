import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import CourseCard from "@/components/CourseCard";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";
import Image from "next/image";

type ProjectSearch = {
  projectSearch: {
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
    edges: { node: ProjectInterface }[];
  };
};

type SearchParams = {
  category?: string | null;
  endCursor?: string;
};

type Props = {
  searchParams: SearchParams;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({ searchParams: { category, endCursor } }: Props) => {
  const data = (await fetchAllProjects(category, endCursor)) as ProjectSearch;

  const projectsToDisplay = data?.projectSearch?.edges || [];

  const pagination = data.projectSearch?.pageInfo;

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings font-rubik">
        <Categories />

        <p className="no-result-text text-center font-mukta">
          No Projects found, go create some first.
        </p>
      </section>
    );
  }

  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />

      {/** Project Cards */}
      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
          />
        ))}
      </section>

      {/** Pagination */}
      <LoadMore
        startCursor={pagination.startCursor}
        endCursor={pagination.endCursor}
        hasPreviousPage={pagination.hasPreviousPage}
        hasNextPage={pagination.hasNextPage}
      />

      {/** Card */}
      <section className="responsive_one mt-20 flexBetween bg-blue-950 pl-8 pr-8 pt-5 pb-5 rounded-xl">
        <div className="flex flex-col text-xl m-4">
          <span className="font-mukta font-medium text-white">
            World has enough Technologies which make you a better Developer.
          </span>
          <span className="font-mukta font-medium mt-3 text-white">
            Learn different technologies with us. Be good at fundamentals.
          </span>
          <span className="text-orange-500 font-rubik font-semibold mt-3">
            Be a Good Developer
          </span>
          <span className="mt-8 rounded-md border-2 border-orange-500 bg-orange-500 text-white font-rubik text-base px-4 py-3">
            Explore our Programs
          </span>
        </div>
        <div className="bg-white rounded-full">
          <Image
            src="/home.svg"
            width={500}
            height={500}
            alt="home page image"
          />
        </div>
      </section>

      <span className="font-ubuntu font-medium text-xl flexCenter mt-20">
        Prepare for big tech companies at your pace
      </span>

      {/** Companies Section */}
      <section className="company-grid">
        <Image src="/google.svg" width={150} height={150} alt="google" />
        <Image src="/microsoft.svg" width={150} height={150} alt="microsoft" />
        <Image src="/adobe.svg" width={150} height={150} alt="adobe" />
        <Image src="/amazon.svg" width={150} height={150} alt="amazon" />
        <Image src="/expedia.svg" width={150} height={150} alt="expedia" />
        <Image src="/oyo.svg" width={150} height={150} alt="oyo" />
        <Image src="/flipkart.svg" width={150} height={150} alt="flipkart" />
        <Image src="/morganstanley.svg" width={150} height={150} alt="morganstanley" />
        <Image src="/walmart.svg" width={150} height={150} alt="walmart" />
        <Image src="/facebook.svg" width={150} height={150} alt="facebook" />
      </section>

      {/** Programs Cards */}
      <section className="mt-20">
        <span className="font-ubuntu font-medium text-xl flexstart">
          Checkout our Programs
        </span>
        <CourseCard />
      </section>

      {/** Contact Form */}
      <section className="bg-white text-gray px-8 py-12">
        <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#f3f0eb] text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-mukta">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8 font-ubuntu">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
              <div className="flex mt-6 gap-3">
                <Image src="/phone.svg" width={50} height={50} alt="phone" />
                <div className="flex flex-col">
                  <span className="font-rubik font-medium text-lg">
                    Call us on our toll free number
                  </span>
                  <span className="mt-1 font-rubik font-bold text-3xl lg:text-4xl text-orange-500">
                    9999-999-9999
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Image
                src="/contact.svg"
                alt="contact image"
                width={300}
                height={300}
                className=""
              />
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold font-mukta">
                Full Name
              </span>
              <input
                className="w-full bg-white text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold font-mukta">
                Contact Number
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold font-mukta">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold font-mukta">
                Message
              </span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-orange-500 text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;