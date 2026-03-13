import React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosVideocam } from 'react-icons/io';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdApps } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import { useSidebar } from '../../context/sidebar-context';

const Header = () => {
  const { toogleSidebar } = useSidebar();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search_query');

  const handleSubmit = (e) => {
    // sayfaya yenilenmesini engelle
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target.query.value;
    console.log(text);

    // arama sonuçları sayfasına yönlendir
    navigate(`/results?search_query=${encodeURIComponent(text)}`);
  };

  return (
    <header className="flex justify-between  md:gap-6 gap-4 px-4 h-14">
      {/* Sol logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={toogleSidebar}
          className="p-2 rounded-full hover:bg-zinc-400 transition duration-300"
        >
          <GiHamburgerMenu />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <img src="pic.webp" alt="youtube" className="w-8"></img>
          <span className="text-xl font-bold tracking-tight max-sm:hidden">
            Youtube
          </span>
        </Link>
      </div>
      {/* Orta: Form */}
      <div className="flex-1 max-w-[728px] flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[640px] items-center"
        >
          <div className="flex flex-1">
            <input
              type="text"
              name="query"
              defaultValue={query}
              placeholder="Ara"
              className="w-full bg-[#121212] border border-grey h-10 px-4 text-white placeholder:text-zinc-400 focus:border-blue-500 outline-none rounded-l-full"
            />
            <button className="w-16 h-10 bg-[#222222] border border-grey rounded-r-full flex justify-center items-center hover:bg-grey transition">
              <CiSearch className="text-xl text-white" />
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-grey transition rounded-full max-sm:hidden">
            <FaMicrophone />
          </button>
        </form>
      </div>

      {/* Sağ: Icons */}
      <div className="flex items-center gap-2">
        <button className="icon max-sm:hidden">
          <IoIosVideocam />
        </button>
        <button className="icon max-sm:hidden">
          <MdApps />
        </button>

        <button className="icon relative">
          <FaBell />
          <span className="absolute -top-1 -right-1  bg-red-600 size-5 font-bold rounded-full flex items-center justify-center text-xs">
            3
          </span>
        </button>

        <button className="icon text-2xl">
          <RiAccountCircleLine />
        </button>
      </div>
    </header>
  );
};

export default Header;
