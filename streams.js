const streams = [
  {
    date: [2021, 5, 5],
    title: "GIRL MONTH!!! Series 1:Episode 1",
    vod: "https://www.youtube.com/watch?v=SUVDuZ3IGtU",
  },
  {
    date: [2021, 5, 6],
    title: "Hot Sauce Tier List",
    vod: "https://www.youtube.com/watch?v=JTiqFobsp6Y",
  },
  {
    date: [2021, 5, 9],
    title: "Makeup Speedrun Mk.1",
    vod: "https://www.youtube.com/watch?v=g_lyo6hOhks",
  },
  {
    date: [2021, 5, 11],
    title: "Donations to Egirls are Tax Deductable",
    vod: "https://www.youtube.com/watch?v=MJdf5ZaC-vw",
  },
  {
    date: [2021, 5, 12],
    title: "WOKE UP HOT AGAIN WOOPS",
    vod: "https://www.youtube.com/watch?v=dEV5CvDtYSo",
  },
  {
    date: [2021, 5, 15],
    title: "Makeup Speedrun WR | Any %",
    vod: "https://www.youtube.com/watch?v=mP3ZMbMNd2Y",
  },
  {
    date: [2021, 5, 17],
    title: "HOT GIRL SUMMER! PEGCHAMP",
    vod: "https://www.youtube.com/watch?v=xMgrr_dnSSc",
  },
  {
    date: [2021, 5, 18],
    title: "💄 DRESS UP F1NN! 💅 MEDIASHARE!",
    vod: "https://www.youtube.com/watch?v=qiH7QxMvpok",
  },
  {
    date: [2021, 5, 26],
    title: "VELMA COSPLAY but like... hot?",
    vod: "https://www.youtube.com/watch?v=TYDgbhZqtPA",
  },
  {
    date: [2021, 5, 28],
    title: "NEW HAIR ✔️ NAILS ✔️ EYELASHES ✔️ SHAME ❌",
    vod: "https://www.youtube.com/watch?v=5MtFeqixTnY",
  },
  {
    date: [2021, 5, 29],
    title: "GOOD MORNING GAMER BOYS",
    vod: "https://www.youtube.com/watch?v=9z_0mqoLJcg",
  },
  {
    date: [2021, 5, 31],
    title: "💦 \"HOT\" \"TUB\" 💦 STREAM!!!",
    vod: "https://www.youtube.com/watch?v=w31wvdo8Ko8",
  },
  {
    date: [2021, 6, 3],
    title: "💄 GOOD MORNING GAMER BOYS 💅 + BEDROOM PLANS (i got the paint)",
    vod: "https://www.youtube.com/watch?v=1PsKrwRM6MA",
  },
  {
    date: [2021, 6, 4],
    title: "PAINTING BEDROOM! 🎨 (i look bad dont make fun of me)",
    vod: "https://www.youtube.com/watch?v=GrW91CubA-k",
  },
  {
    date: [2021, 6, 8],
    title: "💄 FIX MY SLEEP SCHEDULE",
    vod: "https://www.youtube.com/watch?v=GrQSWoCecsQ",
  },
  {
    date: [2021, 6, 18],
    title: "YOUR FEMBOY/TOMBOY GF IS HERE!",
    vod: "https://www.youtube.com/watch?v=jhDh4oSuDHE",
  },
  {
    date: [2021, 6, 19],
    title: "Minecraft BUT HOT!!! | MCU",
    vod: "https://www.youtube.com/watch?v=pPHuFVfgrkc",
  },
  {
    date: [2021, 6, 22],
    title: "American FOOD/SNACKS TASTING!",
    vod: "https://www.youtube.com/watch?v=PuZ1IHP9cmE",
  },
  {
    date: [2021, 6, 23],
    title: "WAY TOO EXPENSIVE UNBOXING!",
    vod: "https://www.youtube.com/watch?v=XF4mwnvizw4",
  },
  {
    date: [2021, 6, 27],
    title: "Tricking People Into Thinking I'm Good Looking Ep. #175",
    vod: "https://www.youtube.com/watch?v=7B8jXGDoF4c",
  },
  {
    date: [2021, 6, 30],
    title: "Building A Gamer Desk",
    vod: "https://www.youtube.com/watch?v=QflunKcECLA",
  },
  {
    date: [2021, 7, 1],
    title: "💄 MAKEUP 'N GAMER DESK BUILDING 🔨",
    vod: "https://www.youtube.com/watch?v=TuajPgN9mvQ",
  },
  {
    date: [2021, 7, 15],
    title: "Got some bad news",
    vod: "https://www.youtube.com/watch?v=1bmDVXmxIck",
  },
  {
    date: [2021, 7, 18],
    title: "CANT KILL ME THAT EASY",
    vod: "https://www.youtube.com/watch?v=oYoMCy--WH8",
  },
  {
    date: [2021, 7, 21],
    title: "PAINTING NAILS IN DA SUMMER",
    vod: "https://www.youtube.com/watch?v=bwg2xqt_mY0",
  },
  {
    date: [2021, 7, 26],
    title: "Reading Fan Fics to Stay Awake",
    vod: "https://www.youtube.com/watch?v=WZ6chFTlVJ0",
  },
  {
    date: [2021, 7, 30],
    title: "if i laugh the stream ends",
    vod: "https://www.youtube.com/watch?v=RLYAE2zpTZk",
  },
  {
    date: [2021, 8, 9],
    title: "GIRL MONTH DAY UNO!!",
    vod: "https://www.youtube.com/watch?v=FOzz1b2Um5M",
  },
  {
    date: [2021, 8, 10],
    title: "PO BOX TIME GAMERS!!!",
    vod: "https://www.youtube.com/watch?v=GxDgtClUn-U",
  },
  {
    date: [2021, 8, 11],
    title: "i look hot so im streaming",
    vod: "https://www.youtube.com/watch?v=MrKr7I6YoU0",
  },
  {
    date: [2021, 8, 17],
    title: "PROM DRESS TRY ON! (if it fits - 12 hour stream)",
    vod: "https://www.youtube.com/watch?v=KfLc_NPwI6c",
  },
  {
    date: [2021, 8, 28],
    title: "WORLDS BEST MCC PLAYER (me) with Dream/BBH/Seepeekay",
    vod: "https://www.youtube.com/watch?v=tXrgxlQ-qpc",
  },
  {
    date: [2021, 8, 31],
    title: "It's MAKEUP HOURS BOYS!!",
    vod: "https://www.youtube.com/watch?v=NLTXr7aAjYE",
  },
  {
    date: [2021, 9, 3],
    title: "IM ALIVE (barely)",
    vod: "https://www.youtube.com/watch?v=SFGrWDtYa7c",
  },
  {
    date: [2021, 9, 9],
    title: "NEW DRESS + Voice Lesson #1 COMPLETE",
    vod: "https://www.twitch.tv/videos/1143797121",
  },
  {
    date: [2021, 9, 29],
    title: "BACK and Hotter than ever",
    vod: "https://www.twitch.tv/videos/1162774078",
  },
  {
    date: [2021, 10, 1],
    title: "SURPRISE! ITS ME AGAIN",
    vod: "https://www.twitch.tv/videos/1164672550",
  },
  {
    date: [2021, 10, 7],
    title: "I'M IN SPAIN!",
    vod: "https://www.twitch.tv/videos/1170052127",
  },
  {
    date: [2021, 10, 12],
    title: "THIS IS PEAK MALE PERFORMANCE",
    vod: "https://www.twitch.tv/videos/1174881796",
  },
  {
    date: [2021, 10, 14],
    title: "PAINTING NAILS & Not Being a Ho",
    vod: "https://www.twitch.tv/videos/1176595477",
  },
  {
    date: [2021, 10, 15],
    title: "ITS DRESS UP HOURS",
    vod: "https://www.twitch.tv/videos/1177663373",
  },
  {
    date: [2021, 10, 16],
    title: "HOLESO- WHOLESOME DAY!",
    vod: "https://www.twitch.tv/videos/1178614524",
  },
  {
    date: [2021, 10, 26],
    title: "I AM THE PINICLE OF MASCULINITY",
    vod: "https://www.twitch.tv/videos/1187807249",
  },
  {
    date: [2021, 10, 27],
    title: "man",
    vod: "https://www.twitch.tv/videos/1188622017",
  },
  {
    date: [2021, 10, 29],
    title: "P.O BOX OPEN TIME!",
    vod: "https://www.twitch.tv/videos/1190435175",
  },
  {
    date: [2021, 11, 3],
    title: "Tax Evasion Is My Passion",
    vod: "https://www.twitch.tv/videos/1195114945",
  },
  {
    date: [2021, 11, 6],
    title: "GOOD MORNING (quick stream) +<br>Squid Game In Minecraft +<br>died in Squid Game",
    vod: [
      "https://www.twitch.tv/videos/1197785574",
      "https://www.twitch.tv/videos/1198219170",
      "https://www.twitch.tv/videos/1198335585",
    ],
  }
]
