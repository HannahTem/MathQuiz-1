
function addUser() {
  player1_name = document.getElementById().value;
  player2_name = document.getElementById().value;

  
    localStorage.setItem("player1_name", player1_name);
	  localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}

