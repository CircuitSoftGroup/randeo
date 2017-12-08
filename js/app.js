function app() {
  // Initialize the playlist of videos
  var videos = [
    // MLG door tutorial
    {
      videoURL: "pCNUfOnqrkk"
    },
    // How to make thin hamster
    {
      videoURL: "h-0HRs0FY2U"
    },
    // Yet another horrible asian music video
    {
      videoURL: "V4frlMI3EjM"
    },
    // la zoubida
    {
      videoURL: "54YE868-LLw"
    },
    // windmill exe
    {
      videoURL: "Pq9ncVyOuaM"
    },
    // lime exe
    {
      videoURL: "Vos7Dw9ZY9s"
    },
    // warm it up exe Thats a 10!
    {
      videoURL: "JbepN4dKLbU"
    },
    // Spodermen joins illuminati
    {
      videoURL: "CzwGcARRVok"
    },
    // Have you ever had a dream like this
    {
      videoURL: "G7RgN9ijwE4"
    },
    // 20th century fox French Horn
    {
      videoURL: "Kn92KkOxD7I"
    },
    // Apple gets rekt
    {
      videoURL: "D0vzOwHVRI8"
    },
    // ( ͡° ͜ʖ ͡°)
    {
      videoURL: "PFpJNx_p9tU"
    },
    // Das Beer Boot
    {
      videoURL: "zuDtACzKGRs"
    },
    // How to pronounce ( ͡° ͜ʖ ͡°)
    {
      videoURL: "wGlBwW7f5HA"
    },
    // Swiggity Swooty
    {
      videoURL: "BKBLf-crl0Y"
    },
    // Fresh ( ͡° ͜ʖ ͡°) of /b/el Air
    {
      videoURL: "5gDz_VwOHR0"
    },
    // Swiggity Swag
    {
      videoURL: "DMpYQCd9z3Q"
    },
    // what Da (bleep) happend
    {
      videoURL: "vZcDjcaSHvc"
    },
    // Nigga Nigga Nigga (Uncensored)
    {
      videoURL: "X2-qB-HvjHE"
    },
    // 25 years of Simpsons couch gags
    {
      videoURL: "isFooVmbjcg"
    },
    // MLG binshot
    {
      videoURL: "ZZAzodqwZ9k"
    },
    // Heyeeyeyeeayaeayeayaeayeayeyeayayeyaey full version
    {
      videoURL: "nrAgK0S9hx4"
    },
    // Donald Duck der Nazi
    {
      videoURL: "kzH1iaKVsBM"
    },
    // El perro chacharron y sus amigos
    {
      videoURL: "9TPA-1rUgV0"
    },
    // Navy Seal Copypasta Musical
    {
      videoURL: "NsZMbs5PC64"
    },
    // im a star.
    {
      videoURL: "iWKWGpghrBo"
    },
    // Tails' new device 9
    {
      videoURL: "KV_wq-aoRwc"
    },
    // Tony Abott thinks the earth is flat
    {
      videoURL: "-bonjn5_ieI"
    },
    // Windows 9 concept
    {
      videoURL: "h4mn6fkHDBM"
    },
    // Lakupiippu
    {
      videoURL: "_5fQZhv0poU"
    },
    // Bush 2004 state of the union remix
    {
      videoURL: "Z02ibHJRvzY"
    },
    // Soccer- america's path to socialism
    {
      videoURL: "yBkbj_S3etY"
    },
    // Adweedture time with Snoop and Dogg
    {
      videoURL: "sifVwz5Nguc"
    },
    // Nichijoint- my ordinary weed
    {
      videoURL: "o2TO5atI4rU"
    },
    // Chicken nugger
    {
      videoURL: "eb1vcaqAivY"
    },
    // Rappin' for Jesus
    {
      videoURL: "Kppx4bzfAaE"
    },
    // Chad Warden the Science Guy
    {
      videoURL: "_SMZDkQuf1Y"
    },
    // Weirdest video you will EVER see
    {
      videoURL: "FbuluDBHpfQ"
    },
    // Auditions
    {
      videoURL: "4vSEzy7JzSA"
    },
    // If TF2 ran on Windows 98
    {
      videoURL: "4V2QSZtIgCI"
    },
    // Hitting mug with toothbrush 5208 times
    {
      videoURL: "kp6JwRd7_2c"
    },
    // Waffle falling over
    {
      videoURL: "sDj72zqZakE"
    },
    // Rainbow Stalin
    {
      videoURL: "Q7fc2cXRkVg"
    },
    // When I'm (͡° ͜ʖ ͡°)
    {
      videoURL: "oC1xcadNj78"
    },
    // Dora theme song backwards
    {
      videoURL: "mIIlLX1rF3E"
    },
    // Honeybadger
    {
      videoURL: "4r7wHMg5Yjg"
    },
    // True facts about the duck
    {
      videoURL: "6k01DIVDJlY"
    },
    // Pumkin, thy deliverer
    {
      videoURL: "fdHsagpYyYo"
    },
    // John Oliver Brazil Candidates
    {
      videoURL: "-n6hvPP06Rs"
    },
    // Pumkin goes to E3 2012
    {
      videoURL: "hPWXuMQomQU"
    },
    // Club penguin micspam
    {
      videoURL: "MbNs5TWmGDY"
    },
    // 6 04 2
    {
      videoURL: "85w0L_qANAI"
    },
    // Nintendo LEAKED
    {
      videoURL: "BGL156fgSdU"
    },
    // Never illegally download
    {
      videoURL: "LZgeIReY04c"
    },
    // Engineer's interesting day
    {
      videoURL: "EHuNghO1Mok"
    },
    // For when someone posts a compressed image/uses Windows XP to save a jpeg...
    {
      videoURL: "QEzhxP-pdos"
    },
    // WHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT
    {
      videoURL: "4wbPEdVLhcQ"
    },
    // Fortin' with Will
    {
      videoURL: "m-m7mBSw-5k"
    },
    // mcnuggies
    {
      videoURL: "R3TV3U-9uvc"
    },
    // Germinating evil
    {
      videoURL: "6ITD1tqXDII"
    },
    // One direction recorder cover
    {
      videoURL: "j60p8DSMQr0"
    },
    // State of the union only clapping
    {
      videoURL: "PP9zGRIx7-0"
    },
    // Muslim dancing on hardstyle
    {
      videoURL: "Y5jBqo7yttk"
    },
    // DEDOTATED WAM
    {
      videoURL: "a4Gdj3L8fcs"
    },
    // Tunak Tunak Tun Daler Mehndi
    {
      videoURL: "vTIIMJ9tUc8"
    },
    // Probably the worst music video
    {
      videoURL: "vs1CA5hFdd4"
    },
    // Ned Flander reads harry potter
    {
      videoURL: "IFTR2JJcKUg"
    },
    // FF2 Gaben Theme
    {
      videoURL: "ZvmwOT8cbB4"
    },
    // Russian Sailors Dance igor
    {
      videoURL: "DcQVv4j6p1o"
    },
    // Derp Song 10 hours
    {
      videoURL: "nQB4nAjZIdE"
    },
    // Extreme PB-J
    {
      videoURL: "S4YbC6OLAlo"
    },
    // Bill Gates Pie
    {
      videoURL: "nEeLKIw2kw4"
    },
    // Kim Jong Un Impersonator
    {
      videoURL: "TS7g1Mpl12o"
    },
    // You could stop at 5 or 6 stores
    {
      videoURL: "YCeQLeQiRP4"
    },
    // What da heck come after 6
    {
      videoURL: "r_Ua8iOR0g8"
    },
    // Bill gates funniest moments
    {
      videoURL: "ABMVtWYRKVU"
    },
    // DIDNT READ LOL
    {
      videoURL: "5GgflscOmW8"
    },
    // Colin Mochrie buys a pair of pants
    {
      videoURL: "PZd9GGWhx2c"
    },
    // Toyota Simulator
    {
      videoURL: "1bkAxFIuie8"
    },
    // Binary animation
    {
      videoURL: "HIJ21xXz_t4"
    },
    // Heinz Automato 2
    {
      videoURL: "JcniyQYFU6M"
    },
    // No homo scout
    {
      videoURL: "M4A7H5-SBoM"
    },
    // 1x1 rubrix cube
    {
      videoURL: "RrTjfH0x4cQ"
    },
    // Putting toothbrush in lamp
    {
      videoURL: "8VkDi3zgKlE"
    },
    // How to pirate sony vegas
    {
      videoURL: "mgU4k7fBznQ"
    },
    // Home economics with morgan freeman
    {
      videoURL: "nkypXnA7c-g"
    },
    // Hippo explosive diahoeria
    {
      videoURL: "P1Flr7JhPow"
    },
    // Spanish inquisition
    {
      videoURL: "5ZegQYgygdw"
    },
    // Ultimate nooooooooooo compilation
    {
      videoURL: "Eal4fep7pK4"
    },
    // How to win an oscar
    {
      videoURL: "bQWfonVpnCI"
    },
    // Ghetto dora the explorer vine
    {
      videoURL: "42--wRPFIU4"
    },
    // Birdemic
    {
      videoURL: "LrxZblVUkMU"
    },
    // White people dancing to daft punk
    {
      videoURL: "uHCDwMBbQyU"
    },
    // Potato flew around my room before you came
    {
      videoURL: "NY5-U7DHgyA"
    },
    // Ultimate Z Server
    {
      videoURL: "A22cLHhnhoI"
    },
    // Shingeki no gaben
    {
      videoURL: "H32SIISkc-Y"
    },
    // Tuvan throat singing
    {
      videoURL: "DY1pcEtHI_w"
    },
    // A Neutron family christmas
    {
      videoURL: "XPlSP6V8x5g"
    },
    // Skyrim theme misheard lyrics
    {
      videoURL: "7eqWyY2SKg4"
    },
    // onion
    {
      videoURL: "1Py_uDy3e18"
    },
    // Pizza time!
    {
      videoURL: "GtgysDzZkBM"
    },
    // Microsoft heisenberg
    {
      videoURL: "MzXdb2QX5rg"
    },
    // I am the antipope zlad
    {
      videoURL: "GGBHfXPqbgI"
    },
    // Elektronik Supersonik
    {
      videoURL: "lp_PIjc2ga4"
    },
    // Sconses
    {
      videoURL: "IjmmypgQ7JQ"
    },
    // Cheesy 80s opening
    {
      videoURL: "LQ4RA2_tnk8"
    },
    // Jimmy Neutron Experience
    {
      videoURL: "dNascU3bp7M"
    },
    // Jimmy Neutron Happy Family Happy Hour
    {
      videoURL: "LB871SVYMhI"
    },
    // Marxist Lenonist
    {
      videoURL: "I1qwKP7nY6Q"
    },
    // Banana Nose
    {
      videoURL: "veiTQdl2bkU"
    },
    // Pumkin World 2
    {
      videoURL: "-D0hqGuwiDY"
    },
    // Pizza Kids
    {
      videoURL: "CXerF6crDRs"
    },
    // Snospis Eht
    {
      videoURL: "X_65yuIx1-s"
    },
    // Tunnel snakes rule
    {
      videoURL: "S0ximxe4XtU"
    },
    // Elmo takes cookie monster
    {
      videoURL: "yohKEthwqgE"
    },
    // Dramatic hampster
    {
      videoURL: "qj8BKFqNhvE"
    },
    // Funny horsie
    {
      videoURL: "hiJZ8Bt_zqw"
    },
    // Hair swallowing
    {
      videoURL: "NX_vcjZmQ9w"
    },
    // eye of the spider
    {
      videoURL: "lBICLteuQs8"
    },
    // Po pi po
    {
      videoURL: "T0-2lzA7_Cg"
    },
    // Squidward suicide
    {
      videoURL: "m_TXgsFsh8g"
    },
    // Potato knishes
    {
      videoURL: "IFfLCuHSZ-U"
    },
    // Late for meeting
    {
      videoURL: "wBqM2ytqHY4"
    },
    // Johny Johny Yes papa
    {
      videoURL: "wR4XU7VFllWE"
    },
    // storytime
    {
      videoURL: "13HtcK59CfE"
    },
    // screaming fit
    {
      videoURL: "9FUSIib5Krg"
    },
    // where is the bathroom
    {
      videoURL: "67jyA59UGN0"
    },
    // trans vaginal
    {
      videoURL: "Jp7tWpK95Jc"
    },
    // pizza face
    {
      videoURL: "FosLYAZ3pn0"
    },
    // pizza sex
    {
      videoURL: "kCn3eL99G4o"
    },
    // kiss papa's mustache
    {
      videoURL: "5yhj3kFiRE0"
    },
    // i me love you god
    {
      videoURL: "5n2BOnagofBc"
    },
    // saving paul
    {
      videoURL: "O-oQ5CueyLY"
    },
    // chips
    {
      videoURL: "rUZ2933vAkc"
    },
    // skrillex
    {
      videoURL: "XMrzDxMdcAM"
    },
    // communist nazis from mars
    {
      videoURL: "GMv5Mz8qK-c"
    },
    // sweetie
    {
      videoURL: "-pCgfJOnszs"
    },
    // mitt romney with a tiny face
    {
      videoURL: "WEymNcIHpvc"
    },
    // KIGN OFF DA HIL
    {
      videoURL: "xkDl-piO3Qc"
    },
    // animeweeblord420
    {
      videoURL: "MwmJFfruFpg"
    },
    // first kiss
    {
      videoURL: "yKmjrGC_ugQ"
    },
    // my girlfriend sucked 37 dicks
    {
      videoURL: "UfpVY_ZHGDg"
    },
    // one minute puberty
    {
      videoURL: "fpVY_ZHGDg"
    },
    // guy catches laptop with his butt
    {
      videoURL: "oiNaadVOQEM"
    },
    // hank twerk
    {
      videoURL: "51delDxcPKY"
    },
    // congratulations! 15 minutes
    {
      videoURL: "k7WyJ8CQl9I"
    },
    // clurds
    {
      videoURL: "lXDF_0bVpP4"
    },
    // a normal anime for normal people
    {
      videoURL: "s7PNkApZrFM"
    },
    // toothbrush innuendo
    {
      videoURL: "B1jY7BLQVMc"
    },
    // breaking news
    {
      videoURL: "a4Oe2aY4G6A"
    },
    // tight sliz
    {
      videoURL: "M6_VJjBo7B8"
    },
    // varigrip
    {
      videoURL: "kyuNuxaKBD8"
    },
    // adult toys
    {
      videoURL: "E2_g306CH8Y"
    },
    // caillou edits wikipedia
    {
      videoURL: "E-2NTI7Vbiro"
    },
    // let me hear your war cry
    {
      videoURL: "fgOaT4xzdvo"
    },
    // lady gaga ft. jim carrey
    {
      videoURL: "XYYo3T6nCw8"
    },
    // THERE IS BEAR CUM
    {
      videoURL: "OYa3V7GIizI"
    },
    // rock hard cock
    {
      videoURL: "RsM2ZbQtulM"
    },
    // obey the walrus
    {
      videoURL: "8vBWmV5sjMA"
    },
    // gameboy camera man dancing
    {
      videoURL: "62PYpu5tFwU"
    },
    // shower in jail
    {
      videoURL: "ZO7-QJGVdM4"
    },
    // tutoring with barney
    {
      videoURL: "8Y1t6StGxns"
    },
    // pedobear song
    {
      videoURL: "GAHfZNPoLW0"
    },
    // wrecking ball in g major
    {
      videoURL: "45lB-fyB87Y"
    },
    // little baby's ice cream
    {
      videoURL: "erh2ngRZxs0"
    },
    // mouse fan club
    {
      videoURL: "YVEY24ieq08"
    },
    // bounce by the ounce
    {
      videoURL: "KZXSM_6m7hU"
    },
    // gimme pizza slow
    {
      videoURL: "wusGIl3v044"
    },
    // shrek is love, shrek is life
    {
      videoURL: "wqBmANITOhg"
    },
    // my anus is bleeding
    {
      videoURL: "6M17aG_Po2Y"
    },
    // too many cooks
    {
      videoURL: "QrGrOK8oZG8"
    },
    // sheep rapping about god
    {
      videoURL: "Vri6CPDJfKo"
    },
    // mexican music video
    {
      videoURL: "x47NYUbtYb0"
    },
    // coco magic school bus
    {
      videoURL: "_8kCaz74M7A"
    },
    // anus writes a letter
    {
      videoURL: "VYz1yVg9L_I"
    },
    // Gaben remixed
    {
      videoURL: "mSr2FgbvUkE"
    },
    // 7th dimension
    {
      videoURL: "O_JrCU8F-vs"
    },
    // All Star the Office
    {
      videoURL: "jWZz3UetNPA"
    },
    // Johnny Dee singing
    {
      videoURL: "VMkHFC_c2xs"
    }
  ];

  // Add Randeo defaults to playlist
  videos.forEach(element => {
    element.autoPlay = true;
    element.showControls = false;
    element.stopMovieOnBlur = false;
    element.loop = false;
    element.mute = false;
    element.startAt = 0;
    element.opacity = 1;
    element.quality = "large";
    element.showYTLogo = false;
    element.vol = 100;
    element.anchor = 'top,center';
  });

  // YouTube API
  $.mbYTPlayer.apiKey = "AIzaSyBL2WJlIZNDJFcDUdoAqS24YPizdKkKNUM";

  // Initialize player
  var video = $("#player").YTPlaylist(videos, true, function(ignored) {});

  document.getElementById("prev").addEventListener('click', function() {
    video.YTPPlayPrev();
  });

  document.getElementById("next").addEventListener('click', function() {
    video.YTPPlayNext();
  });

  // Update card for video
  video.on("YTPData", function(e) {
    $('.card-img-top').attr("src", e.prop.thumb_medium);
    $('.card-title').html(e.prop.title);
    $('.card-link').html("https://youtu.be/" + e.prop.id);
    $('.card-link').attr("href", "https://youtu.be/" + e.prop.id);
    // Make next video visible
    document.getElementById('iframe_player').style.opacity = 1;
  });

  // Pause button
  function pause(alreadyPaused) {
    if (alreadyPaused) {
      var button = document.getElementById('pause');
      button.removeEventListener("click", function() {
        pause(false);
      });
      button.innerHTML = '<span class="oi oi-media-play" aria-hidden="true"></span> Play';
      button.addEventListener("click", function() {
        play(false);
      });
    } else {
      video.YTPPause();
    }
  }
  video.on("YTPPause", function() {
    pause(true);
  });

  // Player button
  function play(alreadyPlaying) {
    if (alreadyPlaying) {
      var button = document.getElementById('pause');
      button.removeEventListener("click", function() {
        play(false);
      });
      button.innerHTML = '<span class="oi oi-media-pause" aria-hidden="true"></span> Pause';
      button.addEventListener("click", function() {
        pause(false);
      });
    } else {
      video.YTPPlay();
    }
  }
  video.on("YTPPlay", function() {
    play(true);
  });

  // Mute button
  function mute(alreadyMute) {
    if (alreadyMute) {
      var button = document.getElementById('mute');
      button.removeEventListener("click", function() {
        mute(false);
      });
      button.innerHTML = '<span class="oi oi-volume-high" aria-hidden="true"></span> Unmute';
      button.addEventListener("click", function() {
        unmute(false);
      });
    } else {
      video.YTPMute();
    }
  }
  video.on("YTPMuted", function() {
    mute(true);
  });

  // Unmute button
  function unmute(alreadyUnmute) {
    if (alreadyUnmute) {
      var button = document.getElementById('mute');
      button.removeEventListener("click", function() {
        unmute(false);
      });
      button.innerHTML = '<span class="oi oi-volume-off" aria-hidden="true"></span> Mute';
      button.addEventListener("click", function() {
        mute(false);
      });
    } else {
      video.YTPUnmute();
    }
  }
  video.on("YTPUnmuted", function() {
    unmute(true);
  });

  document.getElementById('mute').addEventListener("click", function() {
    mute(false);
  });

  // Enter fullscreen button
  function enterFullscreen(alreadyFull) {
    if (alreadyFull) {
      var button = document.getElementById('fullscreen');
      button.removeEventListener("click", function() {
        enterFullscreen(false);
      });
      button.innerHTML = '<span class="oi oi-fullscreen-exit" aria-hidden="true"></span> Exit Fullscreen';
      button.addEventListener("click", function() {
        exitFullscreen(false);
      });
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  // Exit fullscreen button
  function exitFullscreen(alreadyBack) {
    if (alreadyBack) {
      var button = document.getElementById('fullscreen');
      button.removeEventListener("click", function() {
        exitFullscreen(false);
      });
      button.innerHTML = '<span class="oi oi-fullscreen-enter" aria-hidden="true"></span> Fullscreen';
      button.addEventListener("click", function() {
        enterFullscreen(false);
      });
    } else {
      document.exitFullscreen();
    }
  }
  document.addEventListener("fullscreenchange", function( event ) {
    if (document.fullscreen) {
      enterFullscreen(true);
    } else {
      exitFullscreen(true);
    }
  });

  document.getElementById('fullscreen').addEventListener("click", function() {
    enterFullscreen(false);
  });
}

// Load the app when page has loaded
window.onload = function() {
  app();
};
