import { Link } from "react-router-dom";
import { Shoe } from "../../types";
import Badge from "./Badge";
import Price from "./Price";

type Props = {
  item: Shoe;
};

const Card = ({ item }: Props) => {
  return (
    <div className="flex flex-col justify-between ">
      <div>
        <div className="bg-white-default rounded-[16px] lg:rounded-[28px] p-2 relative bg-contain">
          <Badge discount={item.discount} />
          <img src={item.picture[0]} />
        </div>
        <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px] xl:text-[24px]">
          {item.name}
        </h2>
      </div>
      <Link
        className="bg-gray-dark text-white-default font-medium px-4 py-2 rounded-[8px] transition hover:bg-black text-center flex items-center justify-center gap-1"
        to={`/detail/${item.id}`}
      >
        View Product - <Price item={item} />
      </Link>
    </div>
  );
};

export default Card;
