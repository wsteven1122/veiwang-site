// script.js

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  // 輪播切換邏輯
  function updateCarousel(index) {
    // 移除所有 items 和 dots 的 active 類
    items.forEach((item) => item.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // 為當前 index 的 item 和 dot 增加 active 類
    items[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  // 初始化：確保第一張圖片是 active
  updateCarousel(0);

  // 監聽導航點點擊事件
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateCarousel(index);
    });
  });

  // * [可選] 如果要自動播放，取消註釋以下程式碼
  // setInterval(() => {
  //     let nextIndex = (currentIndex + 1) % items.length;
  //     updateCarousel(nextIndex);
  // }, 5000); // 每 5 秒切換
});
