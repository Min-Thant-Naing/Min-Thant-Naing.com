playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];
auTa = document.getElementsByClassName("audioTag")[0];
i = document.getElementsByClassName("currentAndTotleTime")[0];
l = document.getElementById("currentProgress");
plB = document.getElementsByClassName("playButton")[0];
paB = document.getElementsByClassName("pauseButton")[0];
prB = document.getElementsByClassName("previousButton")[0];
neB = document.getElementsByClassName("nextButton")[0];

tracks = [
  {trackId: "music/track1.mp3", title: "December Nya - Lin Nat"},
  {trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw"},
  {trackId: "music/track3.mp3", title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein"},
  {trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing"},
];

for (let i = 0; i < tracks.length; i++) {
  trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
    o = i;
    boolean = true;
    boss();
  });//track
  trackTag.classList.add("trackItem");
  title = (i + 1).toString() + ". " + tracks[i].title;
  trackTag.append(title);
  playlistContainerTag.append(trackTag);
};

let f = "00:00";
let a;
auTa.addEventListener("loadeddata", () => {
  a = Math.floor(auTa.duration);
  f = myFunction(a);
});//show

auTa.addEventListener("timeupdate", () => {
  d = Math.floor(auTa.currentTime);
  g = myFunction(d);
  h = g + " / " + f;
  i.textContent = h;
  j(d);
});//show

j = (d) => {
  k = (500/a)*d;
  l.style.width = k.toString()+"px";
};//bar

myFunction = (e) => {
  b = Math.floor(e/60); //min
  c = e % 60; //sec
  minutes = b<10 ? "0"+b.toString() : b;
  seconds = c<10 ? "0"+c.toString() : c;
  return minutes + ":" + seconds;
};

let o = 0;
let boolean = false;
plB.addEventListener("click", () => {
  d = Math.floor(auTa.currentTime);
  boolean = true;
  if (d === 0) {
    boss();
  } else {
    auTa.play();
    updateButton();
  }
});//button

paB.addEventListener("click", () => {
  boolean = false;
  auTa.pause();
  updateButton();
});//button

updateButton = () => {
  if (boolean) {
    plB.style.display = "none";
    paB.style.display = "inline";
  } else {
    plB.style.display = "inline";
    paB.style.display = "none";
  }
};

prB.addEventListener("click", () => {
  boolean = true;
  if (o === 0) {
    boss();
    return;
  } else {
    o -= 1;
    boss();
  }
});//button

neB.addEventListener("click", () => {
  boolean = true;
  if (o === tracks.length-1) {
    boss();
    return;
  } else {
    o += 1;
    boss();
  }
});//button

boss = () => {
  trackId = tracks[o].trackId;
  auTa.src = trackId;
  auTa.play();
  updateButton();
};