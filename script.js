const delay = ms => new Promise(res => setTimeout(res, ms));

document.addEventListener("DOMContentLoaded", async function(event) {
  var loader = document.getElementById("loading-animation");
  var body = document.getElementById("bodyid");
  var discord = document.getElementById("discord");
  var itch = document.getElementById("itch");
  var archive = document.getElementById("archive");

    loader.style.animation = "rotate 1s infinite";
    body.style.backgroundColor = "black";
    body.style.backgroundImage = "none";
    discord.style.display = "none";
    itch.style.display = "none";
    archive.style.display = "none";
    setTimeout(function() {
      body.style.opacity = 1;
      loader.style.animation = "none";
      body.style.backgroundImage = "url('/assets/background.png')";
      discord.style.display = "inline-block";
      itch.style.display = "inline-block";
      archive.style.display = "inline-block";
      textstart();
    }, 2500);

});

async function textstart() {
  var g = 0;
  var txtw = 'Voices of The Void';
  var speedy = 50;

  var i = 0;
  var txt = '(unofficial website)';
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // call load function when typewriter animation is complete;
    }
  }


  function loadtexto() {
    if (g < txtw.length) {
      document.getElementById("datitle").innerHTML += txtw.charAt(g);
      g++;
      setTimeout(loadtexto, speedy);
    }
  }

  loadtexto();
  await delay(1100);
  typeWriter();
}
