import { BiError } from 'react-icons/bi';

const Error = ({ message }) => {
  return (
    <div className="page grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <BiError className="text-5xl text-yellow-500" />

        <h1 className="text-xl text-zinc-300">Üzgünüz bir sorun oluştu!</h1>

        <h2 className="bg-red-500/40 text-white py-2 px-4 rounded-lg">
          {message}
        </h2>
      </div>
    </div>
  );
};

export default Error;
