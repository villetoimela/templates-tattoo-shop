//@ts-ignore
import { Link } from "react-scroll";

/* eslint-disable-next-line */
export interface TietoaInfoSectionProps {}

export function TietoaInfoSection(props: TietoaInfoSectionProps) {
  return (
    <div className="w-full py-40 px-4 lg:px-8 -translate-y-2 bg-black bg-opacity-80 xl:px-0">
      <div className="flex flex-col max-w-6xl mx-auto">
        <h3 className="text-4xl text-white font-bold text-center uppercase leading-none sm:text-6xl lg:leading-7">
          Me olemme Hiisi tattoo
        </h3>
        <hr className="w-full my-6 border-orange-400" />
        <div className="grid grid-cols-6 gap-5 mt-8 md:grid-cols-12 md:gap-10 lg:mt-12">
          <p className="col-span-6 text-lg font-normal text-white lg:leading-8 xl:leading-9">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, a
            est, dolorum beatae quis aliquid, in odio vitae veniam eligendi
            debitis dignissimos. Eum, recusandae? Harum, dicta? Nam suscipit
            placeat nesciunt?
          </p>

          <p className="col-span-6 text-lg font-normal text-white lg:leading-8 xl:leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            repudiandae quidem perferendis atque asperiores ducimus. Incidunt
            adipisci dolores hic consequuntur doloribus, consequatur aut
            expedita repellendus.
          </p>
        </div>
        <div className="md:text-center pt-20">
          <Link
            activeClass="active"
            to="ota-yhteytta"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <a className="inline-flex cursor-pointer items-center uppercase justify-center h-12 px-20 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-orange-400 hover:bg-orange-500 focus:shadow-outline focus:outline-none">
              ota yhteyttä {">"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TietoaInfoSection;
