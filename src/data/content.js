// All copy, dates, and media references live here. Edit freely.

export const introCopy = {
  preName: 'For',
  name: 'Kenny',
  line: "Hi Fish, It's already a year of getting to know each other again, Let Visit Year One Wrapped. Headphones on, please.",
  cta: 'Begin'
}

// Hero portrait videos — play muted, looped, behind the "Kenny" title.
export const heroVideos = [
  '/media/hero/img-5253.mp4',
  '/media/hero/img-5252.mp4',
  '/media/hero/img-5250.mp4'
]

const img = (src, label = '') => ({ src, type: 'image', label })
const vid = (src, label = '') => ({ src, type: 'video', label })

// Video 5 layout — text top, two horizontal scrolling rows of media below, click to preview.
export const chapters = [
  {
    id: 'origin',
    number: 'I',
    eyebrow: 'Chapter One',
    title: 'How we found <em>each other</em>',
    body: [
      "There's always a version of every love story where you can always pinpoint the exact moment everything started or changed. Our love had multiple points that brought us together.",
      "Before our first date, before even our first kiss, there was something more quiet: the peace I found in you as a best friend"
    ],
    closingLine: "I knew. I think I always knew.",
    date: '2022 — early 2024',
    media: [
      img('/media/origin/her-first-message-to-me-2022.jpg', 'Her first message to me, 2022'),
      img('/media/origin/first-image-spam-2022.jpg', 'First image spam, 2022'),
      img('/media/origin/first-picture-together-2022.jpg', 'First picture together, 2022'),
      img('/media/origin/first-mirror-picture-2022.jpg', 'First mirror picture, 2022'),
      img('/media/origin/first-photoshot-2022.jpg', 'First photoshoot, 2022'),
      img('/media/origin/my-first-favourite-wallpaper.jpg', 'My first favourite wallpaper'),
      img('/media/origin/first-video-call-2024.jpg', 'First video call, 2024'),
      img('/media/origin/first-sleeping-video-call.jpg', 'First sleeping video call'),
      img('/media/origin/special-video-call-1.jpg', 'A special video call'),
      img('/media/origin/special-video-call-2.jpg', 'Another'),
      img('/media/origin/special-video-call-3.jpg', 'And another'),
      img('/media/origin/first-friends-video-call.jpg', 'First friends video call'),
      img('/media/origin/first-meet-up-2024.jpg', 'First meet-up, 2024'),
      img('/media/origin/first-date-2024.jpg', 'First date, 2024'),
      img('/media/origin/first-friends-meetup-2024.jpg', 'First friends meetup, 2024'),
      img('/media/origin/first-picture-2024.jpg', 'First picture, 2024'),
      vid('/media/origin/her-first-apartment.mp4', 'Her first apartment')
    ],
    clueLabel: 'a screenshot you sent me'
  },
  {
    id: 'firsts',
    number: 'II',
    eyebrow: 'Chapter Two',
    title: 'Our <em>firsts</em>',
    body: [
      "I told you I loved you on June 3rd. Do you remember? I not only meant it, but I've always wanted to prove it to you.",
      "This is a Collection of our First date — March 15th. First trip. First time you met my people. First time I met yours. A whole calendar of new things, all of them with you in them."
    ],
    closingLine: "Hey Baby, Your beautiful smile is the Reason why everyone in this Collection is Smiling",
    date: '15 March 2025 — onwards',
    media: [
      img('/media/firsts/first-picture-2025.jpg', 'First picture, 2025'),
      img('/media/firsts/first-official-date.jpg', 'First official date'),
      img('/media/firsts/first-toilet-selfie-on-our-date.jpg', 'First toilet selfie on our date'),
      img('/media/firsts/first-night-date.jpg', 'First night date'),
      vid('/media/firsts/first-day-we-kissed.mp4', 'The day we kissed'),
      img('/media/firsts/first-church-date-2025.jpg', 'First church date, 2025'),
      img('/media/firsts/first-family-meetup-her.jpg', 'First family meetup — her side'),
      img('/media/firsts/first-family-meetup-me.jpg', 'First family meetup — my side'),
      img('/media/firsts/first-sleepover.jpg', 'First sleepover'),
      img('/media/firsts/first-owambe-together.jpg', 'First owambe together'),
      img('/media/firsts/our-first-run-together.jpg', 'Our first run together'),
      img('/media/firsts/first-marathon-together.jpg', 'First marathon together'),
      img('/media/firsts/first-end-of-marathon-picture.jpg', 'End of the marathon'),
      vid('/media/firsts/first-video-2025.mp4', 'First video, 2025'),
      img('/media/firsts/i-just-love-this-picture.jpg', 'I just love this picture')
    ],
    clueLabel: 'a polaroid from the first night'
  },
  {
    id: 'adventures',
    number: 'V',
    eyebrow: 'Chapter Five',
    title: 'This Collection is filled with places we <em>went</em>',
    body: [
      "House Parties, Dates, Trips, Karaoke. First staycation. The selfies in lobbies you said we didn't need. We needed them.",
      "We have barely experienced the world together, I Promise This year we would go on more Trips together."
    ],
    closingLine: "We Have to Experience Multiple Modes of Transport Together (Eg: Travelling on A Yacht).",
    date: 'A year of small expeditions',
    media: [
      img('/media/adventures/our-first-staycation.jpg', 'Our first staycation'),
      img('/media/adventures/selfieeee.jpg', 'Selfie'),
      img('/media/adventures/my-ride-for-life.jpg', 'My ride for life'),
      img('/media/adventures/photo-2025-09-27-09-57-24.jpg', 'September 27th'),
      img('/media/adventures/pxl-20251101-125729243-mp.jpg', 'November'),
      img('/media/adventures/pxl-20251101-154452325.jpg', 'November afternoon'),
      img('/media/adventures/pxl-20251101-154458892.jpg', 'Same day'),
      vid('/media/adventures/pxl-20251101-124036353-ls.mp4', 'House hunting'),
      vid('/media/adventures/pxl-20251101-135050573-ls.mp4', 'A little tour'),
      vid('/media/adventures/pxl-20251227-210025993-ls.mp4', 'December moment'),
      vid('/media/adventures/pxl-20260203-222846626-ls.mp4', 'February drive'),
      vid('/media/adventures/img-2677.mp4', 'Somewhere quiet'),
      vid('/media/adventures/img-2679.mp4', 'Somewhere quieter'),
      vid('/media/adventures/video-2026-05-08-04-36-45.mp4', 'A small clip'),
      vid('/media/adventures/video-2026-05-08-04-36-56.mp4', 'Another'),
      vid('/media/adventures/video-2026-05-08-04-37-00.mp4', 'And another'),
      vid('/media/adventures/video-2026-05-08-04-37-08.mp4', 'And another'),
      vid('/media/adventures/video-2026-05-08-04-37-12.mp4', 'And another')
    ],
    clueLabel: 'a ticket stub'
  },
  {
    id: 'hard',
    number: 'VI',
    eyebrow: 'Chapter Six',
    title: 'The <em>hard</em> ones',
    body: [
      "There were days I wasn't sure we would make it through the next week. This collection is filled with our first fight. The first time we didn't know if we were going to make it. The version of us in 2023 that didn't.",
      "And here we are anyway. Not Perfect Yet, but honestly, still choosing this. The fights aren't the story. The Constant improving to get to the future we want Is Our Story."
    ],
    closingLine: "Our Love isn't the absence of hard nights. It's the courage to keep building ourselves to where we want that counts.",
    date: "The ones we don't talk about and the saddest one week of our lives",
    media: [
      img('/media/hard/last-date-2023-1-before-we-broke-up-the-first-time.jpg', 'Last date, 2023 — before we broke up the first time'),
      img('/media/hard/last-date-2023-2-before-we-broke-up-the-first-time.jpg', ''),
      img('/media/hard/last-date-2023-3-before-we-broke-up-the-first-time.jpg', ''),
      img('/media/hard/first-relationship-fight.jpg', 'First relationship fight'),
      img('/media/hard/first-near-breakup-experience.jpg', 'First near-breakup'),
      img('/media/hard/img-5014.jpg', ''),
      img('/media/hard/img-5020.jpg', ''),
      img('/media/hard/img-5064.jpg', ''),
      vid('/media/hard/first-relationship-fight-2.mp4', 'The fight, again')
    ],
    clueLabel: 'the morning after'
  }
]

// Video 6 layout — split-screen with two big panels + center thumb strip
export const splitChapters = [
  {
    id: 'her-beauty',
    number: 'III',
    eyebrow: 'Chapter Three',
    title: 'Her <em>beauty</em>',
    body: [
      "This chapter is a Mirror for you My Badiraaa. The beautiful smile on your face. Your Aura. and Your Lips. This Collection is to remind you that You are beautiful, You Are Awesome, You Are Sweet, and You Should Love Yourself More."
    ],
    closingLine: "The most beautiful thing in any room you walk into is you.",
    date: 'Every single day',
    panels: [
      img('/media/her-beauty/she-glows-in-the-dark.jpg', 'she glows in the dark'),
      img('/media/her-beauty/img-8076-copy.jpg', 'soft light'),
      img('/media/her-beauty/pxl-20250821-194459419-portrait.jpg', 'august'),
      img('/media/her-beauty/pxl-20250821-205116304-portrait.jpg', 'evening'),
      img('/media/her-beauty/pxl-20250821-205134790-portrait.jpg', 'still evening'),
      img('/media/her-beauty/pxl-20250905-213344697-portrait.jpg', 'september'),
      img('/media/her-beauty/pxl-20250905-220558414-portrait-original.jpg', 'september ii'),
      img('/media/her-beauty/pxl-20250905-234456886-portrait.jpg', 'september iii'),
      img('/media/her-beauty/pxl-20251101-134232822.jpg', 'november'),
      img('/media/her-beauty/pxl-20251227-194853123.jpg', 'december'),
      img('/media/her-beauty/photo-2025-11-01-22-04-18.jpg', 'november ii'),
      img('/media/her-beauty/photo-2025-11-01-22-04-19.jpg', 'november iii'),
      img('/media/her-beauty/img-2799.jpg', 'her'),
      img('/media/her-beauty/img-4925.jpg', 'her again'),
      img('/media/her-beauty/img-8741.jpg', 'and again'),
      img('/media/her-beauty/0ad4aedf-99d2-4098-8381-8658eea2b783.jpg', 'unnamed'),
      img('/media/her-beauty/41116ce3-d70a-446d-b411-cfb66bf659fd.jpg', 'unnamed ii'),
      vid('/media/her-beauty/in-the-wind.mp4', 'in the wind')
    ],
    clueLabel: 'I want To show you off to the world My Loveeeeee'
  },
  {
    id: 'us',
    number: 'IV',
    eyebrow: 'Chapter Four',
    title: 'The shape of <em>us</em>',
    body: [
      "Baby, You've made me see a lot of possibilities, You have made me to want more, You have built me to aspire to be better than I thought I could, Baby you're a very important piece of Me.",
      "This Collection has some of our language used in a year: pineapple, fish, our custom handshake. It's the smallest thing and the biggest one."
    ],
    closingLine: "Whatever this is, it's mine to protect and I'll fight to grow, nurture and protect Us.",
    date: 'Year one and counting My Lovee',
    panels: [
      img('/media/us/our-first-christmas.jpg', 'our first christmas'),
      img('/media/us/first-marathon-together.jpg', 'first marathon together'),
      vid('/media/us/our-custom-handshake.mp4', 'our custom handshake'),
      img('/media/us/photo-2025-07-23-23-46-30.jpg', 'a quiet night'),
      img('/media/us/img-20250725-195130-100.jpg', 'late july'),
      img('/media/us/photo-2025-08-22-08-50-05.jpg', 'late august'),
      img('/media/us/pxl-20250831-121613032-portrait.jpg', 'last day of august'),
      img('/media/us/pxl-20250831-121747821-portrait.jpg', 'still'),
      img('/media/us/pxl-20250905-205406656-portrait.jpg', 'september'),
      img('/media/us/pxl-20250926-224019752-portrait.jpg', 'late september'),
      img('/media/us/photo-2025-09-27-09-57-23.jpg', 'sept 27'),
      img('/media/us/pxl-20251101-135228419.jpg', 'november'),
      img('/media/us/pxl-20251101-141042251.jpg', 'november again'),
      img('/media/us/photo-2025-11-01-22-14-02.jpg', 'november iii'),
      img('/media/us/pxl-20250512-160442899.jpg', 'may'),
      img('/media/us/pxl-20250512-160454348.jpg', 'may ii'),
      img('/media/us/pxl-20250524-213447395.jpg', 'late may'),
      img('/media/us/img-7958.jpg', 'unnamed'),
      img('/media/us/img-9030.jpg', 'unnamed ii'),
      vid('/media/us/video-2026-05-08-04-37-00.mp4', 'a clip'),
      vid('/media/us/video-2026-05-08-04-37-31.mp4', 'another')
    ],
    clueLabel: "a song that's ours"
  }
]

export const timelineEvents = [
  { year: 2003, image: '/media/timeline/2003.jpg', title: 'A queen was born', body: 'Queen Awe.', color: 'oxblood' },
  { year: 2012, image: '/media/timeline/2012.jpg', title: 'Nine years old', body: 'Already with that look.', color: 'sand' },
  { year: 2015, image: '/media/timeline/2015.jpg', title: 'Twelve', body: '', color: 'cream' },
  { year: 2016, image: '/media/timeline/2016.jpg', title: 'Thirteen', body: '', color: 'oxblood' },
  { year: 2017, image: '/media/timeline/2017.jpg', title: 'Fourteen', body: '', color: 'sand' },
  { year: 2018, image: '/media/timeline/2018.jpg', title: 'Fifteen', body: '', color: 'cream' },
  { year: 2019, image: '/media/timeline/2019.jpg', title: 'Sixteen', body: 'A version I never met.', color: 'oxblood' },
  { year: 2020, image: '/media/timeline/2020.jpg', title: 'Seventeen', body: 'The year your mind grew.', color: 'sand' },
  { year: 2021, image: '/media/timeline/2021_2.jpg', title: 'Eighteen', body: '', color: 'cream' },
  { year: 2022, image: '/media/timeline/2022_4.jpg', title: 'Nineteen', body: 'When our paths first crossed.', color: 'oxblood' },
  { year: 2023, image: '/media/timeline/2023.jpg', title: 'Twenty', body: 'First time we tried. First time we ended.', color: 'oxblood' },
  { year: 2024, image: '/media/timeline/2024.jpg', title: 'Twenty-one', body: 'The year you found Joy.', color: 'sand' },
  { year: 2025, image: '/media/timeline/2025.jpg', title: 'Twenty-two', body: 'March 15. The day everything restarted.', color: 'gold' },
  { year: 2026, image: '/media/timeline/2026.jpg', title: 'Twenty-three', body: 'Year one. Where we are now.', color: 'gold' },
  { year: '...', title: 'Everything next', body: 'You would Win, You Would Be Great, and This record would update itself yearly with your achievements.', color: 'cream' }
]

export const friends = [
  { name: 'Bolu', src: '/media/friends/bolu.mp4', role: 'Friend' },
  { name: 'Ope', src: '/media/friends/ope-2-2.mp4', role: 'Friend' }
]

export const herLetters = [
  { id: 1, excerpt: 'Roses are red, Violets are blue. You deserve so much more, Because I LOVE YOU! -Your Baby.', date: '2025', color: 'sand', tilt: -4 },
  { id: 2, excerpt: 'not yet available', date: '2025', color: 'cream', tilt: 3 },
  { id: 3, excerpt: 'not yet available', date: '2025', color: 'oxblood', tilt: -2 },
  { id: 4, excerpt: 'not yet available', date: '2025', color: 'sand', tilt: 5 }
]

export const longMessage = {
  eyebrow: 'For Awesome Kenny read slowly',
  title: 'Everything I should have said <em>out loud</em>',
  paragraphs: [
    "Hey Baby, Hey Pineapple, Hi My Love.",
    "Happy 1 Year Anniversary to Us Baby. This year has been filled with a rollercoaster of emotions Joy, Laughter, Tears, Sadness, Happiness, Dreams, Ups, Downs, Efforts and Results and We were with each other through it all. We have supported and patted each other on the back and put each other together. Thank You Baby.",
    "I don't know if I've told you this before, but one interesting thing that stood out early on to me in our relationship is you actively introducing me to everyone you know. It showed me how much you were proud of me and us being together, and that has been my constant motivating reminder that I can't let you down, I can't let us down. And to say I'm proud of you is a freaking understatement I wanna shout you out on the biggest global stage. I'm so much more proud of all you are Baby, and to the ends of the earth, I want to support you to make sure that bigger than you imagine to achieve, you get it. PS: I told you on your birthday you are getting to 200k followers by the end of this year hi, I hope you're counting down.",
    "Baby you've been with me at my lowest, and I wanna take you together with Me to the Peak of Life. We Will Win. We Are Not Losers. We Have Not Come This Far To Lose, Neither Have We Come This Far To Settle. You Will Win. I Will Win. and We would be Great Together.",
    "Honestly, More than I can currently appreciate and reciprocate, Thank You so much Babe for all the support, love, emotional comfort and even entertaining all my ambitious ideas. I promise you that in this new phase of our life I shall execute more radically and we will win and get to our 500m/year faster. Thank You so much for being there for me, for us, for trusting Me, for riding with Me. Thank You for Committing to the first year, and Looking forward to the greatness we achieve in this new phase of our relationship.",
    "Hey Baby, oh Sorry, Hey Gym Partner, we are hitting the gym back and I promise to be the gym buddy you want in a partner. In This New Phase I'll work harder to make sure I can fully accommodate all your taste and even give you much better taste More Trips, More Vacations, and shaking Your ass on a Yacht. This is that Year for Us Baby.",
    "Hey Pineapple, Thank You So Much for sharing a Chapter of Life with Me. Looking forward to our new Phase Of Life together Baby."
  ],
  signoff: '— Always, Joseph, Your Badiraaa.',
  orbitPhotos: [
    '/media/quiet/l01f602-my-pineapple.jpg',
    '/media/quiet/my-baby.jpg',
    '/media/quiet/my-joy.jpg',
    '/media/quiet/my-lover.jpg',
    '/media/quiet/my-happiness.jpg',
    '/media/quiet/my-baddieee-1.jpg',
    '/media/quiet/i-found-peace-with-you.jpg',
    '/media/quiet/my-goofball.jpg'
  ]
}

export const audioTracks = {
  intro: { src: '/media/audio/intro.mp3', title: 'Davido ft CKay — La La' },
  origin: { src: '/media/audio/origin.mp3', title: 'Sienna Spiro — You Stole The Show' },
  firsts: { src: '/media/audio/firsts.mp3', title: 'Teni ft Olamide — Zion' },
  'her-beauty': { src: '/media/audio/her-beauty.mp3', title: 'Davido — 10 Kilo' },
  us: { src: '/media/audio/us.mp3', title: 'Sienna Spiro — Die On This Hill' },
  timeline: { src: '/media/audio/timeline.mp3', title: 'Know That You Are Loved' },
  adventures: { src: '/media/audio/adventures.mp3', title: 'Adekunle Gold — Before You Wake Up' },
  hard: { src: '/media/audio/hard.mp3', title: 'Sabrina Carpenter — We Almost Broke Up Again Last Night' },
  puzzle: { src: '/media/audio/puzzle.mp3', title: 'John Legend ft Faouzia — Minefields' },
  friends: { src: '/media/audio/friends.mp3', title: 'Thenigpen — Worth Living' },
  letters: { src: '/media/audio/letters.mp3', title: 'Bill Withers — Just the Two of Us' },
  message: { src: '/media/audio/message.mp3', title: 'Simi — Complete Me' },
  proposal: { src: '/media/audio/proposal.mp3', title: 'Davido — 1 Milli' }
}

export const pageOrder = [
  { key: 'intro', kind: 'intro' },
  { key: 'origin', kind: 'chapter', index: 0 },
  { key: 'firsts', kind: 'chapter', index: 1 },
  { key: 'her-beauty', kind: 'split', index: 0 },
  { key: 'us', kind: 'split', index: 1 },
  { key: 'timeline', kind: 'timeline' },
  { key: 'adventures', kind: 'chapter', index: 2 },
  { key: 'hard', kind: 'chapter', index: 3 },
  { key: 'puzzle', kind: 'puzzle' },
  { key: 'friends', kind: 'friends' },
  { key: 'letters', kind: 'letters' },
  { key: 'message', kind: 'message' },
  { key: 'proposal', kind: 'proposal' }
]

export const cluePages = ['origin', 'firsts', 'her-beauty', 'us', 'timeline', 'adventures', 'hard', 'friends', 'letters', 'message']

export const extraClues = {
  timeline: "a year that wasn't mine to keep",
  friends: 'something a friend said',
  letters: 'a line you wrote me',
  message: 'the part that made you cry'
}

export const puzzleImage = '/media/adventures/selfieeee.jpg'
export const proposalImage = '/media/proposal/joseph-rose.jpg'
