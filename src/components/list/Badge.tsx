type Props = {
  discount?: number;
};

const Badge = ({ discount }: Props) => {
  return (
    <span
      className={`absolute text-white-default bg-yellow rounded-tl-[18px] rounded-br-[18px] lg:rounded-tl-[28px] lg:rounded-br-[28px] px-2 py-1 lg:px-4 lg:py-3 ${
        discount ? "bg-yellow" : "bg-bluee"
      }`}
    >
      {discount ? `%${discount} indirim` : "New"}
    </span>
  );
};

export default Badge;
