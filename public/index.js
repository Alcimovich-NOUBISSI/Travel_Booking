
document
  .querySelector("#nav i")
  .addEventListener(
    "click",
    () => {
        document
        .querySelector("#nav .nav_sideDrawer")
        .classList.toggle(".active")
    }
  );

  document
   .querySelector("#hero .hero_options p")
   .addEventListener(
     "click",
     () => {
      document
      .querySelector("#hero .hero_options p")
      .classList.add(".active")
     }
   )