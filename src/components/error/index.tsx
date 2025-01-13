type Props = {
  info: string;
};

const Error = ({ info }: Props) => {
  return (
    <div className="my-20 text-center">
      <p>Üzgünüz bir sorun oluştu!</p>
      <p className="text-red-600 font-semibold">{info}</p>
    </div>
  );
};

export default Error;
