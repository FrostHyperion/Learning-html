function playclap(url) {
    new Audio(url).play();
  }
  document.addEventListener("keyup", (event) => {
    console.log(event.key);
    var keyPresed = event.key.toUpperCase()
    document.getElementById(keyPresed).click();
    document.getElementById(keyPresed).classList.add("button-press");
    setTimeout(() => document.getElementById(keyPresed).classList.remove("button-press"),300)
  })

/*
                      or use this code
  function playclap(url) {
    new Audio(url).play();
  }
  document.addEventListener("keyup", (event) => {
    console.log(event.key);
 if(event.key=='A'||event.key=='a'){
      document.getElementById("A").click();
    }
    if(event.key=='s'||event.key=='S'){
      document.getElementById("S").click();
    }
    if(event.key=='D'||event.key=='d'){
      document.getElementById("D").click();
    }
    if(event.key=='F'||event.key=='f'){
      document.getElementById("F").click();
    }
    if(event.key=='G'||event.key=='g'){
      document.getElementById("G").click();
    }
    if(event.key=='H'||event.key=='h'){
      document.getElementById("H").click();
    }
    if(event.key=='J'||event.key=='j'){
      document.getElementById("J").click();
    }
    if(event.key=='K'||event.key=='k'){
      document.getElementById("K").click();
    }
    if(event.key=='L'||event.key=='l'){
      document.getElementById("L").click();
    }
  }
  */