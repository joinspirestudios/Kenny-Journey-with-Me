# Media Layout (matches your folder structure)

| Your folder name                          | Site folder       | Chapter on the site                    |
|-------------------------------------------|-------------------|----------------------------------------|
| Homepage                                  | hero/             | Intro hero (3 portrait videos)         |
| How We Found Each Other + All Our Firsts  | origin/ + firsts/ | Chapter 1 + Chapter 2                  |
| Her Beautyyyy                             | her-beauty/       | Chapter 3: Her Beauty                  |
| Chapter Four The Shape Of Us              | us/               | Chapter 4: The Shape of Us             |
| Chapter Five The Places We Went           | adventures/       | Chapter 5: The Places We Went          |
| hard                                      | hard/             | Chapter 6: The Hard Ones               |
| Chapter Eight Friends                     | friends/          | Chapter 8: Friends                     |
| quiet                                     | quiet/            | Long-message orbital photos            |

## How chapter 1 vs chapter 2 was split

You sent one combined folder for "How We Found Each Other + All Our Firsts" — but those are two separate chapters on the site. I split them by year:

- **Origin (Chapter 1)** — gets all 2022 + 2024 era photos: discovery moments, image spam, mirror picture, photoshoot, video calls, special calls, first meet-up, her first apartment, her first message to you. The "before we were dating" content.

- **Firsts (Chapter 2)** — gets all 2025+ relationship-event content: first kiss video, first marathon together, first family meet-ups, first sleepover, first owambe, first church date, first night date, first official date.

If you want a different split, edit `src/data/content.js` — find the `chapters` array, swap entries between the `origin` and `firsts` chapters' `media` lists.

## Verifying which version is deployed

Once you push to GitHub and Vercel rebuilds, visit:
`<your-vercel-url>/VERSION.txt`

If it loads and shows "v3.0 — portrait video hero" — the new version is live.
If you get 404 or old content — Vercel hasn't rebuilt yet, or your browser is caching.

To force a fresh load:
- iPhone Safari: pull-down hard 3 times, or Settings → Safari → Clear History
- Desktop: Cmd/Ctrl + Shift + R
- Or open in incognito
