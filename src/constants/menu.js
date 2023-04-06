import {
  explore,
  create,
  favorite,
  home,
  message,
  reel,
  search,
} from './icons';

const MENU_ITEMS = [
  {
    key: 'home',
    label: 'Home',
    icon: home,
    isModal: false,
    url: '/',
  },
  {
    key: 'search',
    label: 'Search',
    icon: search,
    isModal: true,
    url: '#',
  },
  {
    key: 'explore',
    label: 'Explore',
    icon: explore,
    isModal: false,
    url: '/explore',
  },
  {
    key: 'reels',
    label: 'Reels',
    icon: reel,
    isModal: false,
    url: '/reels',
  },
  {
    key: 'messages',
    label: 'Messages',
    icon: message,
    isModal: false,
    url: '/message',
  },
  {
    key: 'notifications',
    label: 'Notifications',
    icon: favorite,
    isModal: true,
    url: '/',
  },
  {
    key: 'create',
    label: 'Create',
    icon: create,
    isModal: true,
    url: '/',
  },
];

export { MENU_ITEMS };
