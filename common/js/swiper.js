let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true, // ループの指定
  effect: "fade", //フェードの指定
  autoplay: {
  delay: 4000, //４秒後に次のスライドへ
  disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
  },
  speed: 1000, //1秒かけてフェードで切り替わる
//   pagination: { // 丸のページネーションを使うなら書く
//     el: '.swiper-pagination',
//     // 丸のページネーションクリックできます
//     clickable: true,
// },
  navigation: { // 左右のページ送を使うなら書く
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
  }
  });