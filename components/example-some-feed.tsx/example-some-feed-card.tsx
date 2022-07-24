/* eslint-disable-next-line */
export interface ExampleSomeFeedCardProps {
    imgSrc: string;
    text: string;
    className?: string;
  }
  
  export function ExampleSomeFeedCard({
    imgSrc,
    text,
    className,
  }: ExampleSomeFeedCardProps) {
    return (
      <div className="relative xxs:col-span-12 col-span-10 duration-150 ease-out transform shadow-xl hover:shadow-2xl rounded-2xl cursor-pointer md:col-span-6 lg:col-span-4 hover:scale-105">
        <a href="#_" className="block h-96 overflow-hidden rounded-t">
          <img src={imgSrc} className="object-cover w-full h-full" />
        </a>
        <div
          className={`${className} p-5 bg-[url('https://images.unsplash.com/photo-1579492450119-80542d516179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-orange-400 rounded-b h-40`}>
          <p className="text-black font-medium ">
            <span>{text}</span>
          </p>
        </div>
      </div>
    );
  }
  
  export default ExampleSomeFeedCard;
  