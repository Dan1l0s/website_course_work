if (document.documentElement.clientWidth > 800) {
  const blurOther = (e) => {
    document.querySelectorAll(".card").forEach((el) => {
      if (e != el) {
        el.style.filter = "blur(5px)";
      }
    });
  };
  const unBlurAll = () => {
    document.querySelectorAll(".card").forEach((el) => {
      el.style.filter = "";
    });
  };
  document.querySelectorAll(".card").forEach((e) => {
    e.onmouseover = () => {
      e.lastElementChild.style.opacity = 1;
      blurOther(e);
    };
    e.onmouseleave = () => {
      unBlurAll();
      e.lastElementChild.style.opacity = 0;
    };
  });
} else {
  document.querySelectorAll(".card").forEach((e) => {
    e.lastElementChild.style.opacity = 1;
  });
}
