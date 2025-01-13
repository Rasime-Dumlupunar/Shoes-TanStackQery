import { useState } from "react";
import { numbers } from "../../utils/constants";
import { DetailProps } from "./Head";

const Size = ({ data }: DetailProps) => {
  const [selected, setSelected] = useState<string>("");

  // üzerine tıklanan seçeneği işaretle
  const toggle = (id: string) => {
    // zaten seçili olana mı tıklandı?
    const same = selected === id;
    // farklı renge tıklandıysa state'i değiştir
    if (!same) {
      setSelected(id);
      // aynı renge tıklandıysa seçimi kaldır
    } else {
      setSelected("");
    }
  };
  //mevcut numaralar
  const stockSize = data.size.split(",");

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4 font-semibold">SIZE</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {
          // numara seçili mi?
          const found = selected === num;
          // stokta var mı?
          const inStock = stockSize.includes(num);
          return (
            <button
              disabled={!inStock}
              onClick={() => toggle(num)}
              className={`py-2 px-3 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 hover:text-white-default m-1 items-center justify-center disabled:bg-[#E1E3E3] disabled:text-[#8f8c91] ${
                found
                  ? "bg-black text-white-default"
                  : "bg-white-default text-black"
              }`}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
