import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  displaying: 'Home',

  SFX: [
    {
      id: 1,
      title: 'Burn Wound',
      artist: '@DuffMakeupNJ',
      model: '@Blancobravado',
      photoCredit: '@jahphotos1968',
      imgUrl: 'https://static.wixstatic.com/media/733d03_3d2224603f7e4b2286deca5828dbbf49~mv2.png/v1/fit/w_1583,h_783,q_90/733d03_3d2224603f7e4b2286deca5828dbbf49~mv2.webp',
      client: '@Offscreenstudio'
    },
    {
      id: 2,
      title: 'Zombie',
      artist: '@DuffMakeupNJ',
      model: '@Blancobravado',
      photoCredit: '@jahphotos1968',
      imgUrl: 'https://static.wixstatic.com/media/733d03_9fffb6af900b44efb1daf64529d37ca1~mv2.png/v1/fit/w_1583,h_783,q_90/733d03_9fffb6af900b44efb1daf64529d37ca1~mv2.webp',
      client: '@Offscreenstudio'
    },
    {
      id: 3,
      title: 'Zombie',
      artist: '@DuffMakeupNJ',
      model: '@Blancobravado',
      photoCredit: '@jahphotos1968',
      imgUrl: 'https://static.wixstatic.com/media/733d03_ef91f1b90d494e57937b6bac447e7b6d~mv2.png/v1/fit/w_1583,h_783,q_90/733d03_ef91f1b90d494e57937b6bac447e7b6d~mv2.webp',
      client: '@Offscreenstudio'
    },
    {
      id: 4,
      title: 'Vampire',
      artist: '@DuffMakeupNJ',
      model: '@Blancobravado',
      photoCredit: '@jahphotos1968',
      imgUrl: 'https://static.wixstatic.com/media/733d03_9e0ae2ca6d9d46629d1ad6535c99a60d~mv2.png/v1/fit/w_1583,h_783,q_90/733d03_9e0ae2ca6d9d46629d1ad6535c99a60d~mv2.webp',
      client: '@Offscreenstudio'
    },
    {
      id: 5,
      title: 'Zombie Clown',
      artist: '@DuffMakeupNJ',
      model: '@Shortnotsweet',
      photoCredit: '@atlantic_light_images',
      imgUrl: 'https://static.wixstatic.com/media/733d03_0e5674c0277c41329bcbe05d6fda3291~mv2.jpg/v1/fit/w_720,h_783,q_90/733d03_0e5674c0277c41329bcbe05d6fda3291~mv2.webp',
      client: '@Offscreenstudio'
    },
    {
      id: 6,
      title: 'Horror Clown',
      artist: '@DuffMakeupNJ',
      model: '@Shortnotsweet',
      photoCredit: '@atlantic_light_images',
      imgUrl: 'https://static.wixstatic.com/media/733d03_62dde2b0041c4a22bc59cc4b88340976~mv2.jpg/v1/fit/w_720,h_783,q_90/733d03_62dde2b0041c4a22bc59cc4b88340976~mv2.webp',
      client: '@Offscreenstudio'
    },
    {
      id: 7,
      title: 'Flesh Wound',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: 'https://static.wixstatic.com/media/733d03_5cf84f74a6424fc7b6e7aa8a77455fb4~mv2.jpg/v1/fit/w_720,h_692,q_90/733d03_5cf84f74a6424fc7b6e7aa8a77455fb4~mv2.webp',
      client: ''
    },
    {
      id: 8,
      title: 'Face Paint',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: 'https://static.wixstatic.com/media/733d03_3d4da8ca81cb44c88b40c6818c87635b~mv2.png/v1/fit/w_1583,h_783,q_90/733d03_3d4da8ca81cb44c88b40c6818c87635b~mv2.webp',
      client: ''
    },
    {
      id: 9,
      title: 'Face Paint - Rainbow Tears',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: 'https://static.wixstatic.com/media/733d03_fe073e800a63449baa503b5c6b27ee9e~mv2.jpg/v1/fit/w_1080,h_783,q_90/733d03_fe073e800a63449baa503b5c6b27ee9e~mv2.webp',
      client: ''
    },
  ],

  activeSFX: null
})
