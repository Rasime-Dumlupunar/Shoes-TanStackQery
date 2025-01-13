import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../api";
import Loader from "../loader";
import Error from "../error";
import Card from "./Card";
import { Shoe } from "../../types";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../utils/formatparams";

const List = () => {
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const paramsStr = formatParams(paramsObj);

  console.log(paramsObj);
  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramsStr],
    queryFn: () => getShoes(paramsStr),
  });
  return (
    <div className="lg:col-span-3 col-span-4">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} />
      ) : (
        data && (
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-6 xl:gap-y-10 md:gap-y-8">
            {data.map((item, key) => (
              <Card key={key} item={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default List;
