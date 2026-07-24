// Curated cyberpunk stock photography from Pexels (free license).
// Direct image URLs — referenced, not downloaded.

const px = (id: number, slug: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}/${slug}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  heroBg: px(30315845, 'urban-street-scene-at-night-with-neon-lights', 1920),
  aboutPortrait: px(31840612, 'futuristic-cyberpunk-portrait-with-neon-lights', 900),
  aboutRobotic: px(31840611, 'futuristic-cyberpunk-woman-with-robotic-arm', 900),
  gallery: [
    px(28122495, 'cyberpunk-2077-neon-lights', 800),
    px(31987991, 'futuristic-portrait-with-vibrant-neon-lighting', 800),
    px(8108570, 'men-in-a-neon-tunnel', 800),
    px(31971471, 'vibrant-cyberpunk-cosplay-in-neon-lights', 800),
    px(31840613, 'futuristic-cyberpunk-portrait-with-neon-lights', 800),
    px(10586614, 'city-street-on-a-rainy-night', 800),
  ],
  quotes: [
    px(8108382, 'man-in-black-jacket', 400),
    px(8107899, 'woman-wearing-sunglasses', 400),
    px(2825033, 'model-holding-neon-lights', 400),
  ],
  roadmapBg: px(10591995, 'street-in-city-at-night-after-rain', 1600),
  buyBg: px(31966784, 'futuristic-portrait-with-neon-lighting', 1200),
  footerBg: px(31987988, 'free-photo-of-futuristic-fashion-portrait-with-neon-glow', 1600),
};
