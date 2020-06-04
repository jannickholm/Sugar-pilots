document.addEventListener("scroll", () => 
{
  const scrollY = window.pageYOffset;
  const navigation = document.querySelector(".main-navigation")
  scrollY >= 200 ? navigation.classList.add("navigation-bg-white") : navigation.classList.remove("navigation-bg-white");
});