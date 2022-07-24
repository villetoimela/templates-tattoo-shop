//@ts-ignore
import { Link } from "react-scroll";

/* eslint-disable-next-line */
export interface InfoSectionBottomProps {
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;
}

export function InfoSectionBottom({
  imgSrc1,
  imgSrc2,
  imgSrc3,
}: InfoSectionBottomProps) {
  return (
    <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 uppercase font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
              Meiltä kuvat ammattilaisten tekemänä ja aina toiveidesi mukaisena!
            </h2>
            <p className="text-base text-gray-300 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>

          <div>
            <Link
              activeClass="active"
              to="ota-yhteytta"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <a
                aria-label=""
                className="inline-flex cursor-pointer items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-orange-500">
                Ota yhteyttä
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center  ">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover hover:scale-110 duration-150 mb-6 rounded shadow-lg h-36 sm:h-56 xl:h-56 w-36 sm:w-56 xl:w-56"
              src={imgSrc1}
              alt=""
            />
            <img
              className="object-cover hover:scale-110 duration-150 w-28 h-28 rounded shadow-lg sm:h-44 xl:h-40 sm:w-44 xl:w-40"
              src={imgSrc2}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover hover:scale-110 duration-150 w-52 h-52 rounded shadow-lg sm:h-72 xl:h-80 sm:w-72 xl:w-80"
              src={imgSrc3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSectionBottom;
