// Curated cyberpunk stock photography from Pexels (free license).
// Direct image URLs — referenced, not downloaded.
//
// The gallery portraits evoke the spirit of the Edgerunners cast without
// using copyrighted anime artwork — each is a free Pexels stock photo.

const px = (id: number, slug: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}/${slug}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  heroBg: px(30315845, 'urban-street-scene-at-night-with-neon-lights', 1920),

  // About-section feature cards
  aboutPortrait: 'https://ik.imagekit.io/zznoau6lx/1330457.jpeg',
  aboutRobotic: 'https://ik.imagekit.io/zznoau6lx/1370787.jpeg',

  // Gallery — 6 portraits evoking the Edgerunners crew
  gallery: [
    'https://ik.imagekit.io/zznoau6lx/1392207.png',
    'https://ik.imagekit.io/zznoau6lx/wp14146142-cyberpunk-edgerunners-desktop-wallpapers.jpg',
    'https://ik.imagekit.io/zznoau6lx/1307009.jpg',
    'https://ik.imagekit.io/zznoau6lx/1278649.jpg',
    'https://ik.imagekit.io/zznoau6lx/1274062.jpg',
    'https://ik.imagekit.io/zznoau6lx/1299586.jpg',
  ],

  // Quote portraits
  quotes: [
    px(8108382, 'man-in-black-jacket', 400),
    px(8107899, 'woman-wearing-sunglasses', 400),
    px(2825033, 'model-holding-neon-lights', 400),
  ],

  roadmapBg: px(10591995, 'street-in-city-at-night-after-rain', 1600),
  buyBg: px(31966784, 'futuristic-portrait-with-neon-lighting', 1200),
  footerBg: px(31987988, 'free-photo-of-futuristic-fashion-portrait-with-neon-glow', 1600),
};
