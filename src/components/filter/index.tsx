import { useState } from "react";
import Color from "./color";
import Gender from "./gender";
import Price from "./price";
import Size from "./size";
import { useSearchParams } from "react-router-dom";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const Filter = ({ isOpen, close }: Props) => {
  const [params, setParams] = useSearchParams();

  const [size, setSize] = useState<string[]>(
    params.get("size")?.split(",") || []
  );
  const [color, setColor] = useState<string[]>(
    params.get("color")?.split(",") || []
  );
  const [gender, setGender] = useState<string>(params.get("gender") || "");

  const [price, setPrice] = useState<string>(params.get("price") || "0");

  //sıfırla
  const handleReset = () => {
    //state'leri ilk haline döndür
    setSize([]);
    setColor([]);
    setGender("");
    setPrice("0");
    // url'deki parametreleri siliyoruz
    setParams({});
  };
  return (
    <div
      className={` ${
        isOpen
          ? "max-lg:fixed max-lg:inset-0 z-10 max-lg:bg-zinc-900 max-lg:bg-opacity-60 max-lg:grid max-lg:place-items-center"
          : "max-lg:hidden"
      }
    `}
    >
      <div className="max-lg:max-w-lg bg-zinc-100 max-lg:mx-auto max-lg:h-[80vh] max-lg:min-w-[350px]">
        <div className="max-lg:bg-gray-50 max-lg:flex max-lg:justify-between max-lg:px-4 rounded-t-md p-3">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button onClick={close} className="lg:hidden">
            X
          </button>
        </div>
        <form className="bg-gray-200 h-full flex flex-col px-5 pb-10 gap-5">
          <Size selected={size} setSelected={setSize} />
          <Color selected={color} setSelected={setColor} />
          <Gender selected={gender} setSelected={setGender} />
          <Price selected={price} setSelected={setPrice} />
          <button
            onClick={handleReset}
            type="reset"
            className="border border-gray-dark p-2 rounded-lg hover:bg-gray-dark hover:text-white-default transition"
          >
            Sıfırla
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
