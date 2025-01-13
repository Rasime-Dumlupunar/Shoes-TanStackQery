import xss from "xss";
import { DetailProps } from "./Head";

const Foot = ({ data }: DetailProps) => {
  console.log(data);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <div className=" flex p-2 gap-2">
          <button className="bg-black flex-1 text-white-default  p-4 rounded-md">
            ADD TO CART
          </button>
          <button className="bg-black text-white-default p-4  rounded-md">
            <img src="/heart.png" alt="like" className="font-bold" />
          </button>
        </div>
        <button className="bg-bluee p-4 rounded-md m-2 w-full text-white-fa">
          BUY IT NOW
        </button>
      </div>
      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] mx-2">
          ABOUT THE PRODUCT
        </h2>
        {/* API'dan gelen html içeriğini react'ta ekrana basmak 
        için dangerouslySetInnerHtml propunu kullanırız, XSS kütüphanesi ile html içindeki, zararlı olabilecek
        scriptleri bozarak bu yöntemi kullandığımızda bir tehlike olmaz*/}
        <p
          className="font-open text-[20px] text-gray-dark m-2"
          dangerouslySetInnerHTML={{ __html: xss(data.description) }}
        ></p>
      </div>
    </div>
  );
};

export default Foot;
