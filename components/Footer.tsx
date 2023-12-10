import { footerLinks } from '@/constant';
import Image from 'next/image'
import Link from 'next/link'
import { 
    BiLogoGmail, 
    BiLogoLinkedinSquare, 
    BiLogoGithub, 
    BiLogoFacebookSquare, 
    BiLogoInstagramAlt,
    BiCurrentLocation 
} from 'react-icons/bi'
import { MdMarkEmailRead } from 'react-icons/md'

/** Type of 'title' and 'links' for footer links */
type ColumnProps = {
    title: string;
    links: Array<string>;
};

/** Footer Links which are mapped from the constant(index.ts) */
const FooterColumn = ({ title, links}: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-bold text-md font-ubuntu">{title}</h4>
        <ul className="flex flex-col gap-2 font-rubik font-normal">
            {
                links.map((link) => (
                    <Link href='/' key={link} className="hover:text-orange-500">{link}</Link>
                ))
            }
        </ul>
    </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
            <div className="flexCenter flex-col">
                {/** Logo and Intro in Footer Section */}
                <div className="flexCenter">
                    <Image src='/logo.svg' alt='footer-logo' height={50} width={50} />
                    <h1 className="font-bold text-2xl font-mukta text-orange-600">Geek<span className="text-black font-mukta">Gazette</span></h1>
                </div>
                <p className="text-start text-sm font-rubik mt-5 max-w-xs">
                    GeekGazette is a platform to learn and share the knowledge. It serves as a hub for tech enthusiast to learn and share their work in the emerging tech world.
                </p>
                <div className="mt-4 text-sm font-medium font-rubik">
                    <div className="gap-2 flex">
                        <BiCurrentLocation className="text-orange-600" />
                        <span>A-40, Delhi, New Delhi, Delhi - 110091, India</span>
                    </div>
                    <div className="gap-2 flex mt-2">
                        <MdMarkEmailRead className="text-orange-600" />
                        <span>xyzGeekGazette@geekgazette.org</span>
                    </div>
                </div>
                {/** Footer Social Icons */}
                <div className="flexCenter gap-6 text-xl mt-6 text-orange-600">
                    <Link href='/' className="border-2 border-orange-300 p-1.5 mx-1 rounded-full hover:bg-orange-200">
                        <BiLogoGmail />
                    </Link>
                    <Link href='/' className="border-2 border-orange-300 p-1.5 mx-1 rounded-full hover:bg-orange-200">
                        <BiLogoGithub />
                    </Link>
                    <Link href='/' className="border-2 border-orange-300 p-1.5 mx-1 rounded-full hover:bg-orange-200">
                        <BiLogoFacebookSquare />
                    </Link>
                    <Link href='/' className="border-2 border-orange-300 p-1.5 mx-1 rounded-full hover:bg-orange-200">
                        <BiLogoInstagramAlt />
                    </Link>
                    <Link href='/' className="border-2 border-orange-300 p-1.5 mx-1 rounded-full hover:bg-orange-200">
                        <BiLogoLinkedinSquare />
                    </Link>
                </div>
            </div>
            <div className="border-b border-orange-700"></div>
            {/** Footer Column Links */}
            <div className="flex flex-wrap gap-12">
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
                <div className="flex-1 flex flex-col gap-4">
                    <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                    <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                </div>
                <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
                <div className="flex-1 flex flex-col gap-4">
                    <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                    <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                </div>
                <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
            </div>
        </div>
        {/** Bottom footer div */}
        <div className="flexBetween footer_copyright">
            <p>@ 2023 GeekGazette. All Rights</p>
            <div className="flexCenter">
                <Image src='/logo.svg' alt='footer_bottom' height={30} width={30} />
                <p className="text-gray">
                    <span className="text-black font-semibold font-ubuntu">10,214</span> projects submitted.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer