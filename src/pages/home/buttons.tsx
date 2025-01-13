type Props = {
  open: () => void;
};

const Buttons = ({ open }: Props) => {
  return (
    <div className="my-8 flex gap-5 lg:hidden ">
      <button
        onClick={open}
        className="flex-1 bg-white-default rounded-md p-2 px-4 flex gap-4 items-center justify-between"
      >
        Filters
        <img src="filters.png" />
      </button>
      <button className="flex-1 bg-white-default rounded-md p-2 px-4 flex gap-4 items-center justify-between">
        Sort
        <img src="sort.png" />
      </button>
    </div>
  );
};

export default Buttons;
