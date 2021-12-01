const streams = [
  {
    date: [2021, 1, 8],
    title: "Addressing the allegations...",
    vod: "https://www.youtube.com/watch?v=SFPaDUEQuNU",
  },
  {
    date: [2021, 1, 13],
    title: "THIS GAME SHOULD BE AN ESPORT",
    vod: "https://www.youtube.com/watch?v=dpk_6jpwgwk",
  },
  {
    date: [2021, 1, 16],
    title: "The Start of an Empire | EPIC SMP!",
    vod: "https://www.youtube.com/watch?v=lnVhDcLjQP8&t=1s",
  },
  {
    date: [2021, 1, 17],
    title: "At Dawn We Farm. | EPIC SMP!",
    vod: "https://www.youtube.com/watch?v=ac8Z-ceOvjk",
  },
  {
    date: [2021, 1, 18],
    title: "I'm Taking OVER | EPIC SMP!",
    vod: "https://www.youtube.com/watch?v=vC4LxJXPRsE",
  },
  {
    date: [2021, 1, 20],
    title: "So i did some mining Off Camera... | EPIC SMP!",
    vod: "https://www.youtube.com/watch?v=HBVSY-C9Vkc",
  },
  {
    date: [2021, 1, 22],
    title: "Morning Gamers | EPIC SMP!",
    vod: "https://www.youtube.com/watch?v=KtysDmrWlQM",
  },
  {
    date: [2021, 1, 26],
    title: "BIG PO BOX OPENING TIME!!!",
    vod: "https://www.youtube.com/watch?v=3kw9DQcFrGo",
  },
  {
    date: [2021, 1, 27],
    title: "Automation and Domination | EPIC SMP!",
    vod: "https://www.youtube.com/watch?v=Y1zwARDuHjY",
  },
  {
    date: [2021, 1, 29],
    title: "Cosy Minecraf | EPIC SMP!",
    vod: "https://www.youtube.com/watch?v=_F7Fk83jfNo",
  },
  {
    date: [2021, 2, 12],
    title: "GIRL MONTH DAY 1! | Eyelash Time fam",
    vod: "https://www.youtube.com/watch?v=dJnxLPaacEM",
  },
  {
    date: [2021, 2, 15],
    title: "You Laugh You WOMAN + PO Boxes :)",
    vod: "https://www.youtube.com/watch?v=1zH18MiaQ8g",
  },
  {
    date: [2021, 2, 17],
    title: "\"Woman\" Opens PO boxes :)",
    vod: "https://www.youtube.com/watch?v=BPCKZxspTrE",
  },
  {
    date: [2021, 2, 22],
    title: "\"Woman\" reviews ur gamer boxes",
    vod: "https://www.youtube.com/watch?v=cUk_LH_ccJc",
  },
  {
    date: [2021, 3, 4],
    title: "Im here to be wamen and play minecraft, and im all out of minecraft",
    vod: "https://www.youtube.com/watch?v=EUTOmtjVsK4",
  },
  {
    date: [2021, 3, 11],
    title: "i own a crossbow",
    vod: "https://www.youtube.com/watch?v=gpJfUH65jwk",
  },
  {
    date: [2021, 3, 12],
    title: "dress up the f1nn",
    vod: "https://www.youtube.com/watch?v=OURMe782uFw",
  },
  {
    date: [2021, 3, 13],
    title: "Dream Girl opens PO packages",
    vod: "https://www.youtube.com/watch?v=B22tWmtDWUI",
  },
  {
    date: [2021, 3, 14],
    title: "Doing Nails and INTERVIEWING",
    vod: "https://www.youtube.com/watch?v=KF3OUahPKUM",
  },
  {
    date: [2021, 3, 15],
    title: "Internet brokey",
    vod: [
      "https://www.youtube.com/watch?v=hkuK6i1aJhI",
      "https://www.youtube.com/watch?v=MinWopfdtCU",
    ],
  },
  {
    date: [2021, 3, 16],
    title: "mom said its my turn with the AK47",
    vod: "https://www.youtube.com/watch?v=kYEsKo1DFwg",
  },
  {
    date: [2021, 3, 20],
    title: "I am very manly now",
    vod: "https://www.youtube.com/watch?v=Faqk_5StkyA",
  },
  {
    date: [2021, 3, 21],
    title: "my thighs have become a meme",
    vod: "https://www.youtube.com/watch?v=GhTj9-LR9xo",
  },
  {
    date: [2021, 3, 22],
    title: "Dress Up Time",
    vod: "https://www.youtube.com/watch?v=ohCRVT2pkTw",
  },
  {
    date: [2021, 3, 26],
    title: "New Dresses. Me Stream",
    vod: "https://www.youtube.com/watch?v=EkQ1m4fnCI4",
  },
  {
    date: [2021, 3, 27],
    title: "Dress up time Mk2 AND P.O BOXES",
    vod: "https://www.youtube.com/watch?v=u3vgYsofDjk",
  },
  {
    date: [2021, 3, 30],
    title: "Lets have a sleepover",
    vod: "https://www.youtube.com/watch?v=xoMOF6ZACOw",
  },
  {
    date: [2021, 4, 4],
    title: "Bunny Girl Easter :)",
    vod: "https://www.youtube.com/watch?v=DLzFnBiReVg",
  },
  {
    date: [2021, 4, 5],
    title: "My MOM does You Laugh You Lose!!",
    vod: "https://www.youtube.com/watch?v=hA_QcG5a008",
  },
  {
    date: [2021, 4, 7],
    title: "My Last Day Of Being a Manly Man",
    vod: "https://www.youtube.com/watch?v=xfm__L1tEBA",
  },
  {
    date: [2021, 4, 8],
    title: "Trying On The Wedding Dress",
    vod: "https://www.youtube.com/watch?v=tNbUz94XjfQ",
  },
  {
    date: [2021, 4, 11],
    title: "INTERVIEWING THE Felix Meme Guy!!!!",
    vod: "https://www.youtube.com/watch?v=OZ9RVPp6Vy8",
  },
  {
    date: [2021, 4, 12],
    title: "Finally Playing a \"Horror\" Game IN VR!",
    vod: "https://www.youtube.com/watch?v=EIo0ZvqzX50",
  },
  {
    date: [2021, 4, 14],
    title: "Dress Up F1nn!! (I Got New Wigs)",
    vod: "https://www.youtube.com/watch?v=Sq3bZrL-Re0",
  },
  {
    date: [2021, 4, 20],
    title: "Doing Nails, Shopping and Looking Hot",
    vod: "https://www.youtube.com/watch?v=qKDpGgLd76w",
  },
  {
    date: [2021, 4, 27],
    title: "GIRL MONTH(s) Plans + ooga booga leg hair bad me delete it",
    vod: "https://www.youtube.com/watch?v=RO54L8QQrv0",
  },
  {
    date: [2021, 4, 28],
    title: "WENT TO GET ACRYLIC NAILS!! tpying ths is hardd",
    vod: "https://www.youtube.com/watch?v=dII4_TAZcGQ",
  },
  {
    date: [2021, 4, 30],
    title: "Rose Birthday!! PO BOXES AND COOL DRESS",
    vod: "https://www.youtube.com/watch?v=NV07Pt0NmE0",
  },
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
    vod: "https://www.youtube.com/watch?v=V4uUdktlC3Y",
  },
  {
    date: [2021, 9, 29],
    title: "BACK and Hotter than ever",
    vod: "https://www.youtube.com/watch?v=glJg5jsMYyQ",
  },
  {
    date: [2021, 10, 1],
    title: "SURPRISE! ITS ME AGAIN",
    vod: "https://www.youtube.com/watch?v=UHYFWfTm-C0",
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
  },
  {
    date: [2021, 11, 13],
    title: "WINNING MCC TWICE IN A ROW!",
    vod: "https://www.twitch.tv/videos/1204622822",
  },
  {
    date: [2021, 11, 20],
    title: "Professional Makeup Wearer",
    vod: "https://www.twitch.tv/videos/1211088663",
  },
  {
    date: [2021, 11, 21],
    title: "VR WITH MODS STREAMY",
    vod: "https://www.twitch.tv/videos/1212195481",
  },
  {
    date: [2021, 11, 25],
    title: "CURSED CONTENT AHEAD",
    vod: "https://www.twitch.tv/videos/1215768389",
  },
  {
    date: [2021, 11, 27],
    title: "I AM IN GERMANY!!!! (drinking)",
    vod: "https://www.twitch.tv/videos/1217576553",
  },
  {
    date: [2021, 11, 30],
    title: "Pick My Outfit!! (be nice)",
    vod: "https://www.twitch.tv/videos/1220338211",
  },
]
