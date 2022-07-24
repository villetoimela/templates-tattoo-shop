

/* eslint-disable-next-line */
export interface InfoSectionTopProps {
  bgImgSrc: string;
}

export function InfoSectionTop({ bgImgSrc }: InfoSectionTopProps) {
  return (
    <div className="">
      <img
        src={bgImgSrc}
        className="fixed -z-50 inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="px-4 bg-black pt-10 pb-1 mx-auto w-full md:px-24 lg:px-8">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <div className="inline-block mb-5 rounded-full sm:mx-auto">
            <div className="flex items-center justify-center w-44 h-44">
              <img src="/rose-tattoo.svg" alt="" />
            </div>
          </div>
          <h2 className="mb-4 font-sans text-3xl font-bold uppercase tracking-tight text-gray-100 sm:text-5xl sm:leading-none">
            Tatuointistudio paikkakunnalla X
          </h2>
          <p className="text-base text-gray-300 md:text-lg sm:px-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fugiat voluptates a molestiae quisquam ea corrupti beatae, saepe
            ipsam sit delectus hic reprehenderit magnam? Enim deleniti unde quae
            asperiores sed numquam fugit optio distinctio, corporis sunt
            tempore. Adipisci!
            <p className="pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam
              sequi et veritatis perspiciatis laboriosam nulla repudiandae.
              TERVETULOA!
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSectionTop;
