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
      imgUrl: '/BurnWound.png',
      client: '@Offscreenstudio'
    },
    {
      id: 2,
      title: 'Zombie',
      artist: '@DuffMakeupNJ',
      model: '@Blancobravado',
      photoCredit: '@jahphotos1968',
      imgUrl: '/Zombie.png',
      client: '@Offscreenstudio'
    },
    {
      id: 3,
      title: 'Assault',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/Assault.jpg',
      client: ''
    },
    {
      id: 4,
      title: 'Vampire',
      artist: '@DuffMakeupNJ',
      model: '@Blancobravado',
      photoCredit: '@jahphotos1968',
      imgUrl: '/Vampire.png',
      client: '@Offscreenstudio'
    },
    {
      id: 5,
      title: 'Zombie Clown',
      artist: '@DuffMakeupNJ',
      model: '@Shortnotsweet',
      photoCredit: '@atlantic_light_images',
      imgUrl: '/ZombieClown.jpg',
      client: '@Offscreenstudio'
    },
    {
      id: 6,
      title: 'Horror Clown',
      artist: '@DuffMakeupNJ',
      model: '@Shortnotsweet',
      photoCredit: '@atlantic_light_images',
      imgUrl: '/HorrorClown.jpg',
      client: '@Offscreenstudio'
    },
    {
      id: 6,
      title: 'Age Makeup',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/AgeMakeup.jpg',
      client: ''
    },
    {
      id: 7,
      title: 'Flesh Wound',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/FleshWound.jpg',
      client: ''
    },
    {
      id: 8,
      title: 'Face Paint',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/FacePaint.jpg',
      client: ''
    },
    {
      id: 9,
      title: 'Rainbow Tears',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/RainbowTears.jpg',
      client: ''
    },
    {
      id: 10,
      title: 'Prosthetics 3',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/prosthetics-3.jpg',
      client: ''
    },
    {
      id: 11,
      title: 'Zombie 2',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/zombie-2.png',
      client: ''
    },
    {
      id: 12,
      title: 'Prosthetics',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/prosthetics.png',
      client: ''
    },
    {
      id: 13,
      title: 'Prosthetics 2',
      artist: '@DuffMakeupNJ',
      model: '',
      photoCredit: '',
      imgUrl: '/prosthetics-2.png',
      client: ''
    },
  ],

  activeSFX: null
})
