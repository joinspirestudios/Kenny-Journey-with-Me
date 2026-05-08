// All copy, dates, and media references live here. Edit freely.

export const introCopy = {
  preName: 'For',
  name: 'Kenny',
  line: 'A year, written down. Headphones on, please.',
  cta: 'Begin'
}

// Hero portrait videos — play muted, looped, behind the "Kenny" title.
// 3 portrait videos arranged as a triptych.
export const heroVideos = [
  '/media/hero/img-5253.mp4',
  '/media/hero/img-5252.mp4',
  '/media/hero/img-5250.mp4'
]

// Helper to build a media item — { src, type, label }
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
      "There's a version of every love story where you can pinpoint the exact moment everything changed. Ours has more than one.",
      "Before the first date, before the first kiss, there was something quieter — a feeling that the room got smaller when you walked into it."
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
      "I told you I loved you on June 3rd. I didn't kiss you until June 18th. Fifteen days of meaning it before I could prove it.",
      "First date — March 15th. First trip. First time you met my people. First time I met yours. A whole calendar of new things, all of them with you in them."
    ],
    closingLine: "You laughed for ten minutes straight that night. I think that's when I knew.",
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
    title: 'The places we <em>went</em>',
    body: [
      "House hunting like we already knew. First staycation. The selfies in lobbies you said we didn't need. We needed them.",
      "Every trip a small experiment in being a us. Every trip we passed."
    ],
    closingLine: "You make Sundays feel like something.",
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
      "There were nights it didn't go well. The first big fight. The first time we didn't know if we were going to make it. The version of us in 2023 that didn't.",
      "And here we are anyway. Bruised, honest, still choosing this. The fights aren't the story. The coming back is."
    ],
    closingLine: "Love isn't the absence of hard nights. It's what happens the morning after.",
    date: 'The ones we don\'t talk about — and the one tonight',
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
// Click any thumb to swap it into a big panel; click a big panel to open fullscreen.
export const splitChapters = [
  {
    id: 'her-beauty',
    number: 'III',
    eyebrow: 'Chapter Three',
    title: 'Her <em>beauty</em>',
    body: [
      "This chapter is just for you. The way you tilt your head when you're thinking. The pineapple. The glasses. The way you look at me when you forget I'm looking back."
    ],
    closingLine: "The most beautiful thing in any room you walk into is you.",
    date: 'Every single day',
    // The full pool — the two big panels start with the first two; clicking
    // a thumb swaps that thumb into the active panel slot.
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
    clueLabel: 'the pineapple'
  },
  {
    id: 'us',
    number: 'IV',
    eyebrow: 'Chapter Four',
    title: 'The shape of <em>us</em>',
    body: [
      "There's a version of me that exists only when you're in the room. Softer. Slower. More honest. I like him better than the one I bring everywhere else.",
      "We made a small private language out of a year — pineapple, fish, the handshake nobody else knows. It's the smallest thing and the biggest one."
    ],
    closingLine: "Whatever this is, it's mine to protect. Ours.",
    date: 'Year one and counting',
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
    clueLabel: 'a song that\'s ours'
  }
]

// Timeline of Kenny's life — auto-scrolls horizontally, hover pauses, click opens detail.
// Each event uses one of Joseph's uploaded year-tagged photos as the card image.
// Edit captions (`title`, `body`) freely as Kenny adds context.
export const timelineEvents = [
  { year: 2003, image: '/media/timeline/2003.jpg', title: 'A girl arrives in Lagos', body: 'You start.', color: 'oxblood' },
  { year: 2012, image: '/media/timeline/2012.jpg', title: 'Nine years old', body: 'Already with that look.', color: 'sand' },
  { year: 2015, image: '/media/timeline/2015.jpg', title: 'Twelve', body: 'On the cusp of something.', color: 'cream' },
  { year: 2016, image: '/media/timeline/2016.jpg', title: 'Thirteen', body: 'The year the world started to make sense.', color: 'oxblood' },
  { year: 2017, image: '/media/timeline/2017.jpg', title: 'Fourteen', body: 'Becoming.', color: 'sand' },
  { year: 2018, image: '/media/timeline/2018.jpg', title: 'Fifteen', body: 'Already her.', color: 'cream' },
  { year: 2019, image: '/media/timeline/2019.jpg', title: 'Sixteen', body: 'A version I never met.', color: 'oxblood' },
  { year: 2020, image: '/media/timeline/2020.jpg', title: 'Seventeen', body: 'The year everything stopped.', color: 'sand' },
  { year: 2021, image: '/media/timeline/2021_2.jpg', title: 'Eighteen', body: 'When the world reopened.', color: 'cream' },
  { year: 2022, image: '/media/timeline/2022_4.jpg', title: 'Nineteen', body: 'When our paths first crossed.', color: 'oxblood' },
  { year: 2023, image: '/media/timeline/2023.jpg', title: 'Twenty', body: 'First time we tried. First time we ended.', color: 'oxblood' },
  { year: 2024, image: '/media/timeline/2024.jpg', title: 'Twenty-one', body: 'Finding your way back.', color: 'sand' },
  { year: 2025, image: '/media/timeline/2025.jpg', title: 'Twenty-two', body: 'March 15. The day everything restarted.', color: 'gold' },
  { year: 2026, image: '/media/timeline/2026.jpg', title: 'Twenty-three', body: 'Year one. Where we are now.', color: 'gold' },
  { year: '...', title: 'Everything next', body: 'Every win, every line, every "I told you so" — written here, in time.', color: 'cream' }
]

export const friends = [
  { name: 'Bolu', src: '/media/friends/bolu.mp4', role: 'Friend' },
  { name: 'Ope', src: '/media/friends/ope-2-2.mp4', role: 'Friend' }
]

export const herLetters = [
  { id: 1, excerpt: 'placeholder — drop a scan or paste an excerpt', date: '2025', color: 'sand', tilt: -4 },
  { id: 2, excerpt: 'her words, in her hand', date: '2025', color: 'cream', tilt: 3 },
  { id: 3, excerpt: 'kept on your nightstand', date: '2025', color: 'oxblood', tilt: -2 },
  { id: 4, excerpt: 'add as many as you have', date: '2025', color: 'sand', tilt: 5 }
]

export const longMessage = {
  eyebrow: 'For Kenny — read slowly',
  title: 'Everything I should have said <em>out loud</em>',
  paragraphs: [
    "I'm not good at saying things in the moment. You've noticed. Half the things I feel about you only ever make it to a notes app at 2 a.m., and even then I delete the soft parts before morning.",
    "So this is me saying them properly, in the place I'm best — written down, taking my time, knowing you'll read it more than once.",
    "You changed the texture of my year. I notice things now I didn't notice before. I make decisions differently. There's a small voice in the back of my head that asks what you'd think, and I'm grateful for it — it makes me a person I like better.",
    "Tonight didn't go the way either of us wanted. And I sat down after, and I kept building. Because none of it changes what I came here to say, and none of it changes that I'd choose this — choose you — again.",
    "A year in, knowing what I know now, all of it: yes."
  ],
  signoff: '— Always, J.',
  // Pulled from /quiet/ folder — Joseph's intimate captioned shots
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
  timeline: 'a year that wasn\'t mine to keep',
  friends: 'something a friend said',
  letters: 'a line you wrote me',
  message: 'the part that made you cry'
}

export const puzzleImage = '/media/adventures/selfieeee.jpg'
export const proposalImage = '/media/proposal/joseph-rose.jpg'
