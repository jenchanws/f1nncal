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
    vod: "https://www.twitch.tv/videos/1087703278",
  },
  {
    date: [2021, 7, 18],
    title: "CANT KILL ME THAT EASY",
    vod: "https://www.twitch.tv/videos/1090744933",
  },
  {
    date: [2021, 7, 21],
    title: "PAINTING NAILS IN DA SUMMER",
    vod: "https://www.twitch.tv/videos/1093774656",
  },
  {
    date: [2021, 7, 26],
    title: "Reading Fan Fics to Stay Awake",
    vod: "https://www.twitch.tv/videos/1098858232",
  },
  {
    date: [2021, 7, 30],
    title: "if i laugh the stream ends",
    vod: "https://www.twitch.tv/videos/1103620522",
  },
  {
    date: [2021, 8, 9],
    title: "GIRL MONTH DAY UNO!!",
    vod: "https://www.twitch.tv/videos/1113235812",
  },
  {
    date: [2021, 8, 10],
    title: "PO BOX TIME GAMERS!!!",
    vod: "https://www.twitch.tv/videos/1114271566",
  },
  {
    date: [2021, 8, 11],
    title: "i look hot so im streaming",
    vod: [
      "https://www.twitch.tv/videos/1115365908",
      "https://www.twitch.tv/videos/1115373847",
      "https://www.twitch.tv/videos/1115375566",
    ],
  },
  {
    date: [2021, 8, 17],
    title: "PROM DRESS TRY ON! (if it fits - 12 hour stream)",
    vod: "https://www.twitch.tv/videos/1121260814",
  },
  {
    date: [2021, 8, 28],
    title: "WORLDS BEST MCC PLAYER (me) with Dream/BBH/Seepeekay",
    vod: "https://www.twitch.tv/videos/1132321558",
  },
  {
    date: [2021, 8, 31],
    title: "It's MAKEUP HOURS BOYS!!",
    vod: "https://www.twitch.tv/videos/1135197900",
  },
  {
    date: [2021, 9, 3],
    title: "IM ALIVE (barely)",
    vod: "https://www.twitch.tv/videos/1138025939",
  },
  {
    date: [2021, 9, 9],
    title: "NEW DRESS + Voice Lesson #1 COMPLETE",
    vod: "https://www.twitch.tv/videos/1143797121",
  },
]
