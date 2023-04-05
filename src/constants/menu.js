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
    hasChildren: false,
    url: '/',
  },
  {
    key: 'search',
    label: 'Search',
    icon: search,
    hasChildren: true,
    url: '/',
  },
  {
    key: 'explore',
    label: 'Explore',
    icon: explore,
    hasChildren: false,
    url: '/explore',
  },
  {
    key: 'reels',
    label: 'Reels',
    icon: reel,
    hasChildren: false,
    url: '/reels',
  },
  {
    key: 'messages',
    label: 'Messages',
    icon: message,
    hasChildren: false,
    url: '/message',
  },
  {
    key: 'notifications',
    label: 'Notifications',
    icon: favorite,
    hasChildren: true,
    url: '/',
  },
  {
    key: 'create',
    label: 'Create',
    icon: create,
    hasChildren: true,
    url: '/',
  },
];

export { MENU_ITEMS };
