import { CourseFilters } from "@/constant";
import Image from "next/image";

const CourseCard = () => {
  return (
    <>
      {/** Courses Catgories/Filters */}
      <div className="flexBetween w-full gap-5 flex-wrap mt-10">
        <ul className="flex gap-2 overflow-auto">
          {CourseFilters.map((filter) => (
            <button
              type="button"
              key={filter}
              className="font-medium font-mukta px-3 py-2 rounded-full capitalize whitespace-nowrap mb-2 hover:text-orange-500 hover:bg-slate-200"
            >
              {filter}
            </button>
          ))}
        </ul>
      </div>

      {/** Courses Cards */}
      <div className="flex flex-wrap justify-center mt-10">
        {/** Card 1 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-white/70 p-8 flex-col border-t-4 border-b-4 border-orange-500 hover:bg-slate-100 cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-md font-medium font-mukta text-gray-100/100">Data Structures and Algorithms</h2>
            </div>
            <div className="flexBetween">
              <span className="font-ubuntu font-semibold">Basics of Java with Data Structures and Algorithms</span>
              <Image src="/java.svg" alt="java" width={50} height={50} />
            </div>
            <div className="flexBetween mt-8">
              <div className="flex items-center gap-2">
                <Image src="/time.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">100+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/project.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">6+ Projects</span>
              </div>
            </div>
            <div className="mt-4 flexBetween">
              <div className="flex gap-2">
                <span className="font-semibold text-base">4.5</span>
                <Image src="/rating.svg" alt="rating" width={75} height={75} />
              </div>
              <button className="border-2 border-orange-500 text-white font-mukta font-semibold bg-orange-500 px-3 py-1.5 rounded-lg">
                Check
              </button>
            </div>
          </div>
        </div>

        {/** Card 2 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-white/70 p-8 flex-col border-t-4 border-b-4 border-green-500 hover:bg-slate-100 cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-md font-medium font-mukta text-gray-100/100">Data Structures and Algorithms</h2>
            </div>
            <div className="flexBetween">
              <span className="font-ubuntu font-semibold">Basics of Javascript with Data Structures and Alogorithms</span>
              <Image src="/javascript.svg" alt="java" width={50} height={50} />
            </div>
            <div className="flexBetween mt-8">
              <div className="flex items-center gap-2">
                <Image src="/time.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">140+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/project.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">9+ Projects</span>
              </div>
            </div>
            <div className="mt-4 flexBetween">
              <div className="flex gap-2">
                <span className="font-semibold text-base">4.8</span>
                <Image src="/rating.svg" alt="rating" width={75} height={75} />
              </div>
              <button className="border-2 border-orange-500 text-white font-mukta font-semibold bg-orange-500 px-3 py-1.5 rounded-lg">
                Check
              </button>
            </div>
          </div>
        </div>

        {/** Card 3 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-white/70 p-8 flex-col border-t-4 border-b-4 border-blue-500 hover:bg-slate-100 cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-md font-medium font-mukta text-gray-100/100">Full Stack</h2>
            </div>
            <div className="flexBetween">
              <span className="font-ubuntu font-semibold">Frontend Development using ReactJS</span>
              <Image src="/reactjs.svg" alt="java" width={50} height={50} />
            </div>
            <div className="flexBetween mt-8">
              <div className="flex items-center gap-2">
                <Image src="/time.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">120+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/project.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">12+ Projects</span>
              </div>
            </div>
            <div className="mt-4 flexBetween">
              <div className="flex gap-2">
                <span className="font-semibold text-base">4.8</span>
                <Image src="/rating.svg" alt="rating" width={75} height={75} />
              </div>
              <button className="border-2 border-orange-500 text-white font-mukta font-semibold bg-orange-500 px-3 py-1.5 rounded-lg">
                Check
              </button>
            </div>
          </div>
        </div>

        {/** Card 4 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-white/70 p-8 flex-col border-t-4 border-b-4 border-slate-500 hover:bg-slate-100 cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-md font-medium font-mukta text-gray-100/100">Backend</h2>
            </div>
            <div className="flexBetween">
              <span className="font-ubuntu font-semibold">Database Management System using MySQL</span>
              <Image src="/sql.svg" alt="java" width={50} height={50} />
            </div>
            <div className="flexBetween mt-8">
              <div className="flex items-center gap-2">
                <Image src="/time.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">80+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/project.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">4+ Projects</span>
              </div>
            </div>
            <div className="mt-4 flexBetween">
              <div className="flex gap-2">
                <span className="font-semibold text-base">4.2</span>
                <Image src="/rating.svg" alt="rating" width={75} height={75} />
              </div>
              <button className="border-2 border-orange-500 text-white font-mukta font-semibold bg-orange-500 px-3 py-1.5 rounded-lg">
                Check
              </button>
            </div>
          </div>
        </div>

        {/** Card 5 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-white/70 p-8 flex-col border-t-4 border-b-4 border-purple-500 hover:bg-slate-100 cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-md font-medium font-mukta text-gray-100/100">Full Stack</h2>
            </div>
            <div className="flexBetween">
              <span className="font-ubuntu font-semibold">Full Stack Django using Python</span>
              <Image src="/python.svg" alt="java" width={50} height={50} />
            </div>
            <div className="flexBetween mt-8">
              <div className="flex items-center gap-2">
                <Image src="/time.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">100+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/project.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">7+ Projects</span>
              </div>
            </div>
            <div className="mt-4 flexBetween">
              <div className="flex gap-2">
                <span className="font-semibold text-base">4.4</span>
                <Image src="/rating.svg" alt="rating" width={75} height={75} />
              </div>
              <button className="border-2 border-orange-500 text-white font-mukta font-semibold bg-orange-500 px-3 py-1.5 rounded-lg">
                Check
              </button>
            </div>
          </div>
        </div>

        {/** Card 6 */}
        <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-white/70 p-8 flex-col border-t-4 border-b-4 border-red-500 hover:bg-slate-100 cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-md font-medium font-mukta text-gray-100/100">Backend</h2>
            </div>
            <div className="flexBetween">
              <span className="font-ubuntu font-semibold">Node JS Development with Javascript</span>
              <Image src="/nodejs.svg" alt="java" width={50} height={50} />
            </div>
            <div className="flexBetween mt-8">
              <div className="flex items-center gap-2">
                <Image src="/time.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">80+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/project.svg" alt="time" width={15} height={15} />
                <span className="font-rubik font-normal">9+ Projects</span>
              </div>
            </div>
            <div className="mt-4 flexBetween">
              <div className="flex gap-2">
                <span className="font-semibold text-base">4.5</span>
                <Image src="/rating.svg" alt="rating" width={75} height={75} />
              </div>
              <button className="border-2 border-orange-500 text-white font-mukta font-semibold bg-orange-500 px-3 py-1.5 rounded-lg">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;