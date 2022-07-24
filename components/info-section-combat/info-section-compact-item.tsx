/* eslint-disable-next-line */
export interface InfoSectionCompactItemProps {
    title: string;
    text: string;
    className?: string;
  }
  
  export function InfoSectionCompactItem({
    title,
    text,
    className,
  }: InfoSectionCompactItemProps) {
    return (
      <div>
        <h2
          className={`${className} tracking-wider mt-10 mb-4 sm:text-5xl text-4xl font-extrabold text-orange-400`}>
          {title}
          <span className="text-white">.</span>
        </h2>
        <p className="col-span-6 text-base font-normal text-gray-200 lg:leading-8 xl:leading-8 md:text-xl">
          {text}
        </p>
      </div>
    );
  }
  
  export default InfoSectionCompactItem;
  