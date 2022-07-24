import Link from "next/link";

/* eslint-disable-next-line */
export interface TeamCardProps {
  imgSrc: string;
  name: string;
  instagramUrl: string;
}

export function TeamCard({ imgSrc, name, instagramUrl }: TeamCardProps) {
  return (
    <div>
      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-top object-cover w-full h-full rounded"
          src={imgSrc}
          alt="Person"
        />
      </div>
      <div className="flex flex-col sm:text-center">
        <p className="text-xl mb-2 text-white ">{name}</p>
        <div className="flex items-center sm:justify-center">
          <Link href={instagramUrl}>
            <a>
              <img
                src="instagram-white.svg"
                alt="avatar"
                className="object-cover w-8 h-8 hover:scale-105 duration-150"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
