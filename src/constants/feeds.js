import avatar from '../assets/images/avatar.jpg';
import img01 from '../assets/images/feeds/img01.jpg';
import img02 from '../assets/images/feeds/img02.jpg';
import cr7_01 from '../assets/images/feeds/cr7_01.jpg';
import cr7_02 from '../assets/images/feeds/cr7_02.jpg';
import cr7_03 from '../assets/images/feeds/cr7_03.jpg';

const FEED_LIST = [
  {
    user: {
      avatar,
      username: 'manchesterunited',
      info: "St Jame's Park",
      location: 'st-jame-park',
      isVerify: true,
    },
    time: '2d',
    content: [img01, img01],
  },
  {
    user: {
      avatar,
      username: 'cristiano',
      info: '',
      location: '',
      isVerify: true,
    },
    time: '1h',
    content: [cr7_01, cr7_02, cr7_03],
  },
  {
    user: {
      avatar,
      username: 'yoona__lim',
      info: '',
      location: '',
      isVerify: true,
    },
    time: '5d',
    content: [img02],
  },
];

const FEED_ACTION_MODAL = [
  {
    text: 'Report',
    isWarning: true,
    isLink: false,
    action: 'handleReport',
  },
  {
    text: 'Unfollow',
    isWarning: true,
    isLink: false,
    action: 'handleUnfollow',
  },
  {
    text: 'Add to favorites',
    isWarning: false,
    isLink: false,
    action: 'handleFavorite',
  },
  {
    text: 'Go to post',
    isWarning: false,
    isLink: true,
    url: '/p/link-to-post',
  },
  {
    text: 'Share to...',
    isWarning: false,
    isLink: false,
    action: 'handleShare',
  },
  {
    text: 'Copy link',
    isWarning: false,
    isLink: false,
    action: 'handleCopy',
  },
  {
    text: 'Embed',
    isWarning: false,
    isLink: false,
    action: 'handleEmbed',
  },
  {
    text: 'About this account',
    isWarning: false,
    isLink: false,
    action: 'handleAboutAccount',
  },
  {
    text: 'Cancel',
    isWarning: false,
    isLink: false,
    action: 'handleCancel',
  },
];

export { FEED_LIST, FEED_ACTION_MODAL };
