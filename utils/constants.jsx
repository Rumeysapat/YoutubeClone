import { AiFillHome } from 'react-icons/ai';
import { BsLightningCharge } from 'react-icons/bs';
import { BiSolidVideos } from 'react-icons/bi';
import { FaRegCircleUser } from 'react-icons/fa6';
import {
  MdHistory,
  MdWatchLater,
  MdOutlineWhatshot,
  MdOutlineSportsEsports,
  MdOutlineSettings,
  MdOutlineFlag,
  MdHelpOutline,
  MdOutlineFeedback,
} from 'react-icons/md';
import { RiPlayListLine } from 'react-icons/ri';
import { FaThumbsUp, FaMusic, FaTrophy } from 'react-icons/fa';
import { PiRadioButtonBold } from 'react-icons/pi';

export const collapseNavItems = [
  {
    icon: <AiFillHome />,
    name: 'Anasayfa',
    path: '/',
  },

  {
    icon: <BsLightningCharge />,
    name: 'Shorts',
    path: '/',
  },

  {
    icon: <BiSolidVideos />,
    name: 'Abonelikler',
    path: '/',
  },

  { icon: <FaRegCircleUser />, name: 'Siz', path: '/' },
];

export const navItems = [
  {
    title: null,

    items: [
      { icon: <AiFillHome />, name: 'Ana Sayfa', path: '/' },
      {
        icon: <BsLightningCharge />,
        name: 'Shorts',
        path: '/',
      },
    ],
  },

  {
    title: 'Siz',
    items: [
      { icon: <MdHistory />, name: 'Geçmiş', path: '/' },
      { icon: <RiPlayListLine />, name: 'Oynatma listeleri', path: '/' },
      { icon: <MdWatchLater />, name: 'Daha sonra izle', path: '/' },
      { icon: <FaThumbsUp />, name: 'Beğendiğim videolar', path: '/' },
    ],
  },
  {
    title: 'Keşfet',
    items: [
      {
        icon: <MdOutlineWhatshot />,
        name: 'Trendler',
        path: '/?category=trendler',
      },
      { icon: <FaMusic />, name: 'Müzik', path: '/?category=müzik' },
      { icon: <PiRadioButtonBold />, name: 'Canlı', path: '/?category=canlı' },
      {
        icon: <MdOutlineSportsEsports />,
        name: 'Oyun',
        path: '/?category=oyun',
      },
      { icon: <FaTrophy />, name: 'Spor', path: '/?category=spor' },
    ],
  },
  {
    title: "YouTube'dan daha fazla",
    items: [
      {
        icon: <BiSolidVideos className="text-red-500" />,
        name: 'YouTube Premium',
        path: '/',
      },
      {
        icon: <FaMusic className="text-red-500" />,
        name: 'YouTube Music',
        path: '/',
      },
      {
        icon: <BiSolidVideos className="text-red-500" />,
        name: 'YouTube Kids',
        path: '/',
      },
    ],
  },
  {
    title: null,
    items: [
      { icon: <MdOutlineSettings />, name: 'Ayarlar', path: '/' },
      { icon: <MdOutlineFlag />, name: 'İçerik bildirme geç...', path: '/' },
      { icon: <MdHelpOutline />, name: 'Yardım', path: '/' },
      { icon: <MdOutlineFeedback />, name: 'Geri bildirim gönder', path: '/' },
    ],
  },
];
