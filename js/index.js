var timer;

function loading() {
  timer = setTimeout(show_page, 3000);
}
setInterval(update_time, 1000);
//Get the week string each time visit
setTimeout(() => {
  var d = new Date;
  document.getElementById("Info_date").textContent = `${d.toLocaleString('en-us', {  weekday: 'long' })}\r\n${d.toLocaleDateString()}`
}, 3000);

function show_page() {
  document.getElementById("loading_text").style.display = "none";
  document.getElementById("StrScn").style.display = "none";
  document.getElementById("MAINBdy").style.display = "flex";

  setInterval(() => {
    function image_switch(x) {
      let luna_BG_color = "#393c41";
      let akari_BG_color = "#527574";
      let mito_BG_color = "#4b4b59";
      let tsugu_BG_color = "#8e8e8b";

      var luna_left = "30%";
      var akari_left = "62.5%";
      var mito_left = "52.5%";
      var tsugu_left = "55%";

      if (x.matches) { // If desktop mode
        luna_left = "79.6%";
        akari_left = "89.4%";
        mito_left = "85.5%";
        tsugu_left = "87%";
      }

      var rng = Math.round(Math.random() * 100 % 3);

      switch (rng) {
        case 0:
          document.body.style.backgroundColor = luna_BG_color;
          document.getElementById("MAIN_BG").src = "./img/Luna_BG1.png"
          document.getElementById("MAIN_BG").style.left = luna_left;
          break;
        case 1:
          document.body.style.backgroundColor = akari_BG_color;
          document.getElementById("MAIN_BG").src = "./img/Akari_BG.png"
          document.getElementById("MAIN_BG").style.left = akari_left;
          break;
        case 2:
          document.body.style.backgroundColor = mito_BG_color;
          document.getElementById("MAIN_BG").src = "./img/Mito_BG.png"
          document.getElementById("MAIN_BG").style.left = mito_left;
          break;
        case 3:
          document.body.style.backgroundColor = tsugu_BG_color;
          document.getElementById("MAIN_BG").src = "./img/Tsugu_BG.png"
          document.getElementById("MAIN_BG").style.left = tsugu_left;
          break;
      }
    }

    var media_query = window.matchMedia("(min-width: 1270px)");
    image_switch(media_query); // Call listener function at run time
    media_query.addListener(image_switch) // Attach listener function on state changes


  }, 15000);
}

function change_profile(page) {
  document.getElementById("bar").style.display = "none";
  document.getElementById("panel").style.display = "none";
  document.getElementById("panel_text").style.display = "none";

  document.getElementById("profile_frame").setAttribute("src", `./profile/${page}`);
  document.getElementById("profile_frame").style.display = "inherit";
}

function back_to_home() {
  document.getElementById("bar").style.display = "inherit";
  document.getElementById("panel").style.display = "inherit";
  document.getElementById("panel_text").style.display = "inline";
  document.getElementById("profile_frame").style.display = "none";
  document.getElementById("profile_frame").src = "";
}

function update_time() {
  var d = new Date();
  document.getElementById("Info_time").textContent = `${d.getHours() < 12 ? "morning" : d.getHours() < 18 ? "after noon" : "evening"}\r\n${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
}

function login() {
  var UID = document.forms["login_form"]["User_ID"].value;
  var PWD = document.forms["login_form"]["User_PW"].value;

  if (UID == "ADMIN" && PWD == "PASS") {
    window.location.replace("home.html");
  } else {
    alert("NOPE");
  }
}