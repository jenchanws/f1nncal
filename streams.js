const streams = [
  {
    date: [2019, 7, 25],
    title: "ruining other peoples days",
    vod: null,
  },
  {
    date: [2019, 9, 10],
    title: "hypixel minecraft skyblock",
    vod: null,
  },
  {
    date: [2019, 10, 6],
    title: "🔴 i made a minecraft server pls look 🔴",
    vod: "https://www.youtube.com/watch?v=D43L2Dd2LYE",
  },
  {
    date: [2019, 10, 31],
    title: "spooky scary Minecraft egirl with randoms",
    vod: "https://www.youtube.com/watch?v=uSQFF-fqqBw",
  },
  {
    date: [2019, 12, 20],
    title: "I Became an Egirl in Minecraft UHC (with A6D)",
    vod: "https://www.youtube.com/watch?v=C-cGOAPcunM",
  },
  {
    date: [2020, 1, 7],
    title: "minecraft smp to kill the trio",
    vod: null,
  },
  {
    date: [2020, 2, 14],
    title: "Minecraft but it's Valentines day and i'm a lonely EGirl",
    vod: "https://www.youtube.com/watch?v=V4tC6sNZOJo",
  },
  {
    date: [2020, 4, 12],
    title: "Minecraft Easter Egg hunt your favourite EGirl $$$",
    vod: "https://www.youtube.com/watch?v=Un5B6jEcapA",
  },
  {
    date: [2020, 4, 29],
    title: "minecraft smp beat the dragun",
    vod: null,
  },
  {
    date: [2020, 4, 30],
    title: "Csgo but this time im a girl",
    vod: null,
  },
  {
    date: [2020, 5, 1],
    title: "csgo but im a Twitch th*t in training",
    vod: null,
  },
  {
    date: [2020, 5, 2],
    title: "Far Crying on stream",
    vod: null,
  },
  {
    date: [2020, 5, 3],
    title: "Counter Strike : Girl Offensive",
    vod: null,
  },
  {
    date: [2020, 5, 4],
    title: "destroying my friends in Hypickle",
    vod: null,
  },
  {
    date: [2020, 5, 6],
    title: "destroying my friends in Hypickle",
    vod: "https://www.youtube.com/watch?v=ExFmJqNSsmg",
  },
  {
    date: [2020, 5, 8],
    title: "HI! Being globally offensive",
    vod: "https://www.youtube.com/watch?v=1-rkovyQe7I",
  },
  {
    date: [2020, 5, 9],
    title: "being terrified for content",
    vod: [
      "https://www.youtube.com/watch?v=hDpT9Ur7MUc",
      "https://www.youtube.com/watch?v=5XCGaTdUsk8",
      "https://www.youtube.com/watch?v=bScVGtdL9Es",
    ],
  },
  {
    date: [2020, 5, 12],
    title: "bathwater + Walkie talkie",
    vod: [
      "https://www.youtube.com/watch?v=Z7A6ZXgSpRM",
      "https://www.youtube.com/watch?v=NKWB588boks",
      "https://www.youtube.com/watch?v=ynP-c-L71ek",
    ],
  },
  {
    date: [2020, 5, 13],
    title: "how to be an egirl with f1nn (makeup stream)<br>+ Talkie walkie",
    vod: [
      "https://www.youtube.com/watch?v=KKMTlWDtvqg",
      "https://www.youtube.com/watch?v=vElUq1kaXjk",
      "https://www.youtube.com/watch?v=bHpi5oN57tU",
      "https://www.youtube.com/watch?v=3QeDUbdPpio",
      "https://www.youtube.com/watch?v=g_PYOUWi-QM",
    ],
  },
  {
    date: [2020, 5, 15],
    title:
      "fix my sleep schedule 24hr stream<br>+ chat with chat (just having a chat)",
    vod: [
      "https://www.youtube.com/watch?v=jlTQ0-HT_nM",
      "https://www.youtube.com/watch?v=g_LppmDS_-w",
      "https://www.youtube.com/watch?v=4HpljzYetmg",
      "https://www.youtube.com/watch?v=9jZNIpWbUF4",
      "https://www.youtube.com/watch?v=v0Q-qg7kmF4",
      "https://www.youtube.com/watch?v=ogTtJvwWwKU",
    ],
  },
  {
    date: [2020, 5, 19],
    title: "ya like anime?",
    vod: "https://www.youtube.com/watch?v=xbbAq00ZsXA",
  },
  {
    date: [2020, 5, 21],
    title: "i was *Maid* to stream",
    vod: "https://www.youtube.com/watch?v=Gy-Bc-Nps7U",
  },
  {
    date: [2020, 5, 23],
    title: "chill stream (i have cookies)",
    vod: "https://www.youtube.com/watch?v=5jKF-b_VIIY",
  },
  {
    date: [2020, 5, 25],
    title: "James Charles 2: electric boogaloo",
    vod: [
      "https://www.youtube.com/watch?v=lDi8TvLcFBE",
      "https://www.youtube.com/watch?v=k6QtGTWkvZ4",
      "https://www.youtube.com/watch?v=Lg013XBM5JU",
    ],
  },
  {
    date: [2020, 5, 27],
    title: "POV: Egirl yells to you about video games",
    vod: "https://www.youtube.com/watch?v=XuYlhKPmJak",
  },
  {
    date: [2020, 6, 2],
    title: "its summer and its time to hecking party",
    vod: "https://www.youtube.com/watch?v=DlaZLDnlxQ8",
  },
  {
    date: [2020, 6, 5],
    title: "bikini streami",
    vod: "https://www.youtube.com/watch?v=TrLd0M9Lzrc",
  },
  {
    date: [2020, 6, 6],
    title: "part 1): Chat picks my Makeup/outfit (a great plan)",
    vod: [
      "https://www.youtube.com/watch?v=aaPLpO1cPQg",
      "https://www.youtube.com/watch?v=ZTQ_fgdAH8I",
      "https://www.youtube.com/watch?v=o_MXsMoYmHQ",
      "https://www.youtube.com/watch?v=ZmgAyQTgd00",
      "https://www.youtube.com/watch?v=BwSXv_lRlvI",
    ],
  },
  {
    date: [2020, 6, 13],
    title: "egirl in training part 78 (I GOT PARTNER!)",
    vod: "https://www.youtube.com/watch?v=HW8hNbTt98E",
  },
  {
    date: [2020, 6, 16],
    title: "destroying a minecraft server",
    vod: "https://www.youtube.com/watch?v=FwJjzNGjPqE",
  },
  {
    date: [2020, 6, 19],
    title: "extending bodily hairs",
    vod: [
      "https://www.youtube.com/watch?v=BY_k6Qze_9o",
      "https://www.youtube.com/watch?v=MHMVXujyjp4",
    ],
  },
  {
    date: [2020, 6, 20],
    title:
      "im feelin *cheery* (cheerleader outfit)<br>+ now with 92% less lag (cheerleader strem)",
    vod: [
      "https://www.youtube.com/watch?v=jHDReiq063A",
      "https://www.youtube.com/watch?v=LCe9KDRHpJ4",
      "https://www.youtube.com/watch?v=P5_0seg6inM",
      "https://www.youtube.com/watch?v=45DSpCOn1XU",
      "https://www.youtube.com/watch?v=HJY4s9gXefQ",
    ],
  },
  {
    date: [2020, 6, 24],
    title: 'Walkie Talkie - Nighttime 2: " D a y t i m e "',
    vod: [
      "https://www.youtube.com/watch?v=V1E3S7BaZrA",
      "https://www.youtube.com/watch?v=8GZBEk0AuXY",
      "https://www.youtube.com/watch?v=EuZiHuxDyQg",
    ],
  },
  {
    date: [2020, 6, 29],
    title: "im not like other girls, im a man",
    vod: "https://www.youtube.com/watch?v=2fmJbqy426U",
  },
  {
    date: [2020, 7, 1],
    title: "oh no... drinking stream",
    vod: "https://www.youtube.com/watch?v=92IY2gkgNog",
  },
  {
    date: [2020, 7, 4],
    title: "iDot hours",
    vod: "https://www.youtube.com/watch?v=itwHa2Z0m98",
  },
  {
    date: [2020, 7, 4],
    title: "manly manly man stream",
    vod: "https://www.youtube.com/watch?v=fUzDyWlZbIQ",
  },
  {
    date: [2020, 7, 10],
    title: "plus ultra my guy (PO Box Stuff!)",
    vod: "https://www.youtube.com/watch?v=hzf6eRZV90k",
  },
  {
    date: [2020, 7, 16],
    title: "bunny egirl plays minecraft with subs",
    vod: "https://www.youtube.com/watch?v=sDh7Fg_N-1U",
  },
  {
    date: [2020, 7, 18],
    title: "skeppy event with the minecraft boys",
    vod: "https://www.youtube.com/watch?v=Lt8toPHo73Y",
  },
  {
    date: [2020, 7, 19],
    title: "donations to egirls are tax deductable",
    vod: "https://www.youtube.com/watch?v=n2eYrMz0hlE",
  },
  {
    date: [2020, 7, 21],
    title: "make me laugh or i ban you | Egirl time",
    vod: "https://www.youtube.com/watch?v=SJTaX9rtHzM",
  },
  {
    date: [2020, 7, 22],
    title: "Egirl Moves House (ish)",
    vod: [
      "https://www.youtube.com/watch?v=CeN3uw6uV-I",
      "https://www.youtube.com/watch?v=7aclXWuwZZ0",
    ],
  },
  {
    date: [2020, 7, 25],
    title: "MC Ultimate, vs 200 youtubers",
    vod: "https://www.youtube.com/watch?v=y9yMgRvQqE0",
  },
  {
    date: [2020, 7, 31],
    title: "egirl sleepover",
    vod: "https://www.youtube.com/watch?v=magkp7-TL6M",
  },
  {
    date: [2020, 8, 1],
    title: "if she dont play the craft... (IDOTS SMP - eboy stream)",
    vod: "https://www.youtube.com/watch?v=bQNIiI0mkdk",
  },
  {
    date: [2020, 8, 12],
    title: "Opening a mountain of PO boxes IN THE NEW HOUSE",
    vod: [
      "https://www.youtube.com/watch?v=PEAtEiLz2tg",
      "https://www.youtube.com/watch?v=I3vF8BgHa4g",
    ],
  },
  {
    date: [2020, 8, 15],
    title: "egirl builds egirl gaming chair",
    vod: "https://www.youtube.com/watch?v=uyjYjiOIblE",
  },
  {
    date: [2020, 8, 17],
    title: "gogo gadget hair extensions",
    vod: "https://www.youtube.com/watch?v=Ardsfs9i2mk",
  },
  {
    date: [2020, 8, 19],
    title: "LEG WAXING | Girl Week Day 3",
    vod: "https://www.youtube.com/watch?v=DmElvc4bRiQ",
  },
  {
    date: [2020, 8, 20],
    title: "im watching you from your window",
    vod: "https://www.youtube.com/watch?v=5EAHoNdaPEE",
  },
  {
    date: [2020, 8, 24],
    title: "your girls back in town",
    vod: "https://www.youtube.com/watch?v=ecLci-2mjBw",
  },
  {
    date: [2020, 8, 28],
    title: "lets have a sleepover",
    vod: "https://www.youtube.com/watch?v=JqlaWuRpJCw",
  },
  {
    date: [2020, 8, 30],
    title: "SHE MAKE THE B U R R I TO",
    vod: "https://www.youtube.com/watch?v=j5mQ8675x2M",
  },
  {
    date: [2020, 9, 6],
    title: "the last manly man stream DUN DUN DUN",
    vod: "https://www.youtube.com/watch?v=xPzpx21_I58",
  },
  {
    date: [2020, 9, 7],
    title: "first makeup in a WEEK dont yell at me",
    vod: "https://www.youtube.com/watch?v=gfF2AO7u_Fo",
  },
  {
    date: [2020, 9, 10],
    title: "BIG TID GOTH GF???",
    vod: "https://www.youtube.com/watch?v=Rz4vRYEAHH0",
  },
  {
    date: [2020, 9, 12],
    title: "fuck it. femboy.<br>+ MC CHAMPIONSHIP POG - Sun Tzu",
    vod: [
      "https://www.youtube.com/watch?v=SQ6kFG4T560",
      "https://www.youtube.com/watch?v=nYqZnDf6zW4",
    ],
  },
  {
    date: [2020, 9, 15],
    title: "Pinky Streamy AWOOGA",
    vod: "https://www.youtube.com/watch?v=LyfHntMjLFE",
  },
  {
    date: [2020, 9, 17],
    title: "Maid Cake Bake w/ @Meowriza",
    vod: "https://www.youtube.com/watch?v=POiZQhC0Hu8",
  },
  {
    date: [2020, 9, 22],
    title: "VR FOR THE FIRST TIME!!! (im hyped)",
    vod: "https://www.youtube.com/watch?v=g66RN7yeiys",
  },
  {
    date: [2020, 9, 26],
    title: "$700 PO Box MYSTERY OPENING (spooky)",
    vod: "https://www.youtube.com/watch?v=qCSXd8Rrmbk",
  },
  {
    date: [2020, 10, 4],
    title: "eyelid hair extending",
    vod: "https://www.youtube.com/watch?v=-DezHvByeRw",
  },
  {
    date: [2020, 10, 10],
    title: "OwOmg FUN P.O. BOX SO COOL",
    vod: "https://www.youtube.com/watch?v=dEoGj4YBqDA",
  },
  {
    date: [2020, 10, 11],
    title: "I WANNA PLAY VIDEO GAMES",
    vod: "https://www.youtube.com/watch?v=gUXouvXpx3A",
  },
  {
    date: [2020, 10, 17],
    title:
      "MC ULTIMATES BEST PLAYERS!!!! (me) +<br>redhead day with 20% less lag",
    vod: [
      "https://www.youtube.com/watch?v=-UPtohor4oA",
      "https://www.youtube.com/watch?v=QOfxIYOkkAU",
    ],
  },
  {
    date: [2020, 10, 21],
    title: "P.OwO Box Opening ^.^",
    vod: "https://www.youtube.com/watch?v=iSgGjPH0PeE",
  },
  {
    date: [2020, 10, 24],
    title: "MC CHAMPIONSIP PRO PLAYER (me)",
    vod: "https://www.youtube.com/watch?v=QzoNIUTGoAw",
  },
  {
    date: [2020, 10, 25],
    title: "LEARNING THE GIRL VOICE (#Episode 1)",
    vod: "https://www.youtube.com/watch?v=HCQNVCgay-E",
  },
  {
    date: [2020, 11, 4],
    title: "ULTIMATE E-Girl TUTORIAL",
    vod: "https://www.youtube.com/watch?v=gU1i1y8IEC4",
  },
  {
    date: [2020, 11, 8],
    title: "MAID CLEANING GAMER'S ROOM (ew)",
    vod: "https://www.youtube.com/watch?v=ow-CWlI2rHI",
  },
  {
    date: [2020, 11, 15],
    title: "GIRL MONTH DAY #1",
    vod: "https://www.youtube.com/watch?v=jpNGabux1vg",
  },
  {
    date: [2020, 11, 16],
    title: "COOKING WITH @F1NN5TER",
    vod: "https://www.youtube.com/watch?v=cvvQwMsBHhk",
  },
  {
    date: [2020, 11, 18],
    title: "OH NO OH NO ROSE IS STREAMING",
    vod: "https://www.youtube.com/watch?v=36rtrCTC5co",
  },
  {
    date: [2020, 11, 21],
    title: "24 HOURS Bikineestreamee +<br>24 HOURS WALKING PICNIC",
    vod: [
      "https://www.youtube.com/watch?v=iU-cUTAn4pE",
      "https://www.youtube.com/watch?v=CXYxFbw5EKw",
      "https://www.youtube.com/watch?v=K5N4crNQLio",
      "https://www.youtube.com/watch?v=NXbsG6RqP6Q",
      "https://www.youtube.com/watch?v=3KNktp7ey30",
      "https://www.youtube.com/watch?v=V2GH6kDhoyk",
      "https://www.youtube.com/watch?v=4_VFYLB16gs",
      "https://www.youtube.com/watch?v=I7VcyE7GmtU",
      "https://www.youtube.com/watch?v=Mfaf1hUbVTo",
    ],
  },
  {
    date: [2020, 11, 24],
    title: "LAST EVER - Get ready with Rose",
    vod: "https://www.youtube.com/watch?v=6L-1MD9rsuM",
  },
  {
    date: [2020, 11, 29],
    title: "EXteNDO EyELAsh GO | Girl Month Part 2!",
    vod: "https://www.youtube.com/watch?v=L8Uj7nWewck",
  },
  {
    date: [2020, 12, 2],
    title:
      "ARIANA GRANDE BUNNY STREEAAAM!!<br>+ The bunny can walk<br>+ did the bunny survive?",
    vod: [
      "https://www.youtube.com/watch?v=Y36y3hBj8jo",
      "https://www.youtube.com/watch?v=3yFV7iQVDzY",
      "https://www.youtube.com/watch?v=PrrW77r__b8",
    ],
  },
  {
    date: [2020, 12, 5],
    title:
      "SCUFFED COCKTAIL MAKING! (manly man drinks not girly drinks at all)",
    vod: "https://www.youtube.com/watch?v=ND7LoFp86bU",
  },
  {
    date: [2020, 12, 6],
    title: "MC Championship PRACTICE",
    vod: "https://www.youtube.com/watch?v=ipngNnfk_TY",
  },
  {
    date: [2020, 12, 9],
    title: "Drinking Games while @F1NN5TER talks about Taxes",
    vod: "https://www.youtube.com/watch?v=aBCY7inKgM8",
  },
  {
    date: [2020, 12, 10],
    title: "I BOUGHT HELIUM + an idiot (charlie)",
    vod: "https://www.youtube.com/watch?v=VZfo8X75mXY",
  },
  {
    date: [2020, 12, 12],
    title: "WINNERS OF MCC! (Tubbo, Tommyinnit, Seapeekay)",
    vod: "https://www.youtube.com/watch?v=OQjcx9ZZ4f4",
  },
  {
    date: [2020, 12, 18],
    title: "Girl Month Chapter 1: The Finale",
    vod: "https://www.youtube.com/watch?v=T5gangumVS0",
  },
  {
    date: [2020, 12, 19],
    title: "HO HO HO HO MERRY HUNGER GAMES",
    vod: "https://www.youtube.com/watch?v=rKr0DpjSoDI",
  },
  {
    date: [2020, 12, 23],
    title: "$1000+ P.O. BOX CHRISTMAS!! :))",
    vod: "https://www.youtube.com/watch?v=8rz2SeZjPJU",
  },
  {
    date: [2020, 12, 29],
    title: "Proving ONCE AND FOR ALL i am the MANLIEST MAN",
    vod: "https://www.youtube.com/watch?v=z6zE378pz-E",
  },
  {
    date: [2020, 12, 31],
    title: "RUIN my friends and family's new years party",
    vod: "https://www.youtube.com/watch?v=-j9e3UZuOG0",
  },
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
    title: '"Woman" Opens PO boxes :)',
    vod: "https://www.youtube.com/watch?v=BPCKZxspTrE",
  },
  {
    date: [2021, 2, 22],
    title: '"Woman" reviews ur gamer boxes',
    vod: "https://www.youtube.com/watch?v=cUk_LH_ccJc",
  },
  {
    date: [2021, 3, 4],
    title:
      "Im here to be wamen and play minecraft, and im all out of minecraft",
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
    title: 'Finally Playing a "Horror" Game IN VR!',
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
    date: [2021, 5, 30],
    title: "GOOD MORNING i have Bad Life Advice for you",
    vod: "https://www.youtube.com/watch?v=-CakZSg50U0",
  },
  {
    date: [2021, 5, 31],
    title: '💦 "HOT" "TUB" 💦 STREAM!!!',
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
    note:
      "F1NN announced that he tested positive for COVID on this stream. " +
      "For this reason, the break was extended indefinitely until he recovered.",
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
    vod: "https://www.youtube.com/watch?v=UaB2RNsv8Tw",
  },
  {
    date: [2021, 10, 12],
    title: "THIS IS PEAK MALE PERFORMANCE",
    vod: "https://www.youtube.com/watch?v=bin7gHd4uTM",
  },
  {
    date: [2021, 10, 14],
    title: "PAINTING NAILS & Not Being a Ho",
    vod: "https://www.youtube.com/watch?v=Fe35_XP8DB8",
  },
  {
    date: [2021, 10, 15],
    title: "ITS DRESS UP HOURS",
    vod: "https://www.youtube.com/watch?v=-GKINZro7DQ",
  },
  {
    date: [2021, 10, 16],
    title: "HOLESO- WHOLESOME DAY!",
    vod: "https://www.youtube.com/watch?v=eKR296hrHT4",
  },
  {
    date: [2021, 10, 26],
    title: "I AM THE PINICLE OF MASCULINITY",
    vod: "https://www.youtube.com/watch?v=TE1qy1eQC1U",
  },
  {
    date: [2021, 10, 27],
    title: "man",
    vod: "https://www.youtube.com/watch?v=s9U96RVt_Ac",
  },
  {
    date: [2021, 10, 29],
    title: "P.O BOX OPEN TIME!",
    vod: "https://www.youtube.com/watch?v=SxdAIsaznv8",
  },
  {
    date: [2021, 11, 3],
    title: "Tax Evasion Is My Passion",
    vod: "https://www.youtube.com/watch?v=Y6MQaFmZWNI",
  },
  {
    date: [2021, 11, 6],
    title:
      "GOOD MORNING (quick stream) +<br>Squid Game In Minecraft +<br>died in Squid Game",
    vod: [
      "https://www.youtube.com/watch?v=6YRlsZ4L6lw",
      "https://www.youtube.com/watch?v=echVA3C9JUs",
    ],
  },
  {
    date: [2021, 11, 13],
    title: "WINNING MCC TWICE IN A ROW!",
    vod: "https://www.youtube.com/watch?v=zs7fmUBxmFs",
  },
  {
    date: [2021, 11, 20],
    title: "Professional Makeup Wearer",
    vod: "https://www.youtube.com/watch?v=--ZjCY7Qm8M",
  },
  {
    date: [2021, 11, 21],
    title: "VR WITH MODS STREAMY",
    vod: "https://www.youtube.com/watch?v=9vUQYz8pS1Y",
  },
  {
    date: [2021, 11, 25],
    title: "CURSED CONTENT AHEAD",
    vod: "https://www.youtube.com/watch?v=pXod3mhKwg4",
  },
  {
    date: [2021, 11, 27],
    title: "I AM IN GERMANY!!!! (drinking)",
    vod: "https://www.youtube.com/watch?v=FG-XFVxPIgU",
  },
  {
    date: [2021, 11, 30],
    title: "Pick My Outfit!! (be nice)",
    vod: "https://www.youtube.com/watch?v=WzPnR8L0JjE",
  },
  {
    date: [2021, 12, 12],
    title: "BOYS NIGHT IN (men only)",
    vod: "https://www.youtube.com/watch?v=FbxBFgQHqwA",
  },
  {
    date: [2021, 12, 13],
    title: "TELLING THE TRUTH",
    vod: "https://www.youtube.com/watch?v=Qxyn3NHO9_Q",
  },
  {
    date: [2021, 12, 16],
    title: "I GOT MY EARS PIERCED",
    vod: "https://www.youtube.com/watch?v=WC8aezsTtII",
  },
  {
    date: [2021, 12, 17],
    title: "Letting you guys shop for me...",
    vod: "https://www.youtube.com/watch?v=tZs79bkkFyU",
  },
  {
    date: [2021, 12, 22],
    title: "CHRISTMAS BAKING STREAM!",
    vod: "https://www.youtube.com/watch?v=ukzCVvkVkpw",
  },
  {
    date: [2021, 12, 27],
    title: "CHRISTMAS PRESENTS OPENING!! (*P.O. Boxes*)",
    vod: "https://www.youtube.com/watch?v=atki3kIAp30",
  },
  {
    date: [2022, 1, 11],
    title: "OPENING UP WHAT YOU MADE ME BUY!",
    vod: "https://www.youtube.com/watch?v=pMi1U9o9xBs",
  },
  {
    date: [2022, 1, 23],
    title: "EPIC SMP BEGINNING! SURPRISE STREAM",
    vod: "https://www.youtube.com/watch?v=n_48n_EDbgs",
  },
  {
    date: [2022, 1, 25],
    title: "TESTOSTERONE FILLED STREAM! - EPIC SMP",
    vod: "https://www.youtube.com/watch?v=CIKv8TDLMg8",
  },
  {
    date: [2022, 2, 7],
    title: "2022 YEAR OF THE MANLY MAN",
    vod: "https://www.youtube.com/watch?v=-PbLi6TfTus",
  },
  {
    date: [2022, 2, 8],
    title: "SECRETARY HOURS",
    vod: "https://www.youtube.com/watch?v=8wT7tefEu8o",
  },
  {
    date: [2022, 2, 11],
    title: "INCREDIBLY CLASSY LADY",
    vod: "https://www.youtube.com/watch?v=uzK4UhjyHRY",
  },
  {
    date: [2022, 2, 14],
    title: "Be My Valentine for the Low Low Price of Just $4.99!!",
    vod: "https://www.youtube.com/watch?v=3pnOiQe2zS4",
  },
  {
    date: [2022, 2, 16],
    title: "CONFESS YOUR DEEPEST DARKEST SECRETS",
    vod: "https://www.youtube.com/watch?v=fwp19ecqABY",
  },
  {
    date: [2022, 2, 18],
    title: "PIKACHU BUT WITH BOOBA",
    vod: "https://www.youtube.com/watch?v=qyQjrnZedOk",
  },
  {
    date: [2022, 2, 28],
    title: "OPENING THE BOX",
    vod: "https://www.youtube.com/watch?v=EfBnKDeLqbY",
  },
  {
    date: [2022, 4, 6],
    title: "GIGA CHAD WOOD CHOPPER 💦 Shameless 💦",
    vod: "https://www.twitch.tv/videos/1448283980",
  },
  {
    date: [2022, 4, 11],
    title: "GIGA CHAD RETURNS",
    vod: "https://www.twitch.tv/videos/1453141356",
  },
  {
    date: [2022, 4, 14],
    title: "IT BEGINS AGAIN 💅 GIRLY GIRL MONTH 💄",
    vod: "https://www.youtube.com/watch?v=YWefV6Y31iM",
  },
  {
    date: [2022, 4, 17],
    title: "HAPPY EGG DAY! 🐰 🥚",
    vod: "https://www.youtube.com/watch?v=Q_jDfzHWeA4",
  },
  {
    date: [2022, 4, 18],
    title: "THE GRINDSET NEVER STOPS! | GGM Day 624",
    vod: "https://www.youtube.com/watch?v=mhzSLG687tE",
    note: '<a href="http://amoyamoyamoya.com/wp/wp-content/uploads/2022/04/20220418-Council_v_Evergreen-Redacted.pdf">Official Transcript of the on-stream court trial</a>',
  },
  {
    date: [2022, 4, 21],
    title: "IM FEELIN 22 (🎉its my birthday🥳)",
    vod: "https://www.youtube.com/watch?v=i71cc4tENc4",
  },
  {
    date: [2022, 4, 25],
    title: "MY WORST IDEA YET",
    vod: "https://www.youtube.com/watch?v=Ker9gax1goQ",
  },
  {
    date: [2022, 4, 27],
    title: "MY BEST IDEA YET !loot",
    vod: "https://www.twitch.tv/videos/1468687933",
  },
  {
    date: [2022, 5, 10],
    title: "GIGA GAMER GIRL MONTH UPDATES! *new nails too*",
    vod: "https://www.twitch.tv/videos/1480337833",
  },
  {
    date: [2022, 5, 12],
    title: "Large Bobs ✔️ Brains ❌",
    vod: "https://www.twitch.tv/videos/1482128486",
  },
  {
    date: [2022, 5, 14],
    title: "ITS TOO DARN 🔥HOT🔥",
    vod: "https://www.twitch.tv/videos/1483986891",
  },
  {
    date: [2022, 5, 19],
    title: "EGirl In Training - Part #5872",
    vod: "https://www.twitch.tv/videos/1488344367",
  },
  {
    date: [2022, 6, 8],
    title:
      "The Rumours Are True...<br>" +
      "+ Bunny Walkies <br>" +
      "+ Too Much Exercise for a Gamer",
    vod: [
      "https://www.twitch.tv/videos/1498327570",
      "https://www.twitch.tv/videos/1498390680",
      "https://www.twitch.tv/videos/1498394999",
      "https://www.twitch.tv/videos/1498395832",
      "https://www.twitch.tv/videos/1498424707",
    ],
    note:
      "Girl Month 2-6 originally started on this date, but reset due to " +
      "F1NN not streaming.",
  },
]
