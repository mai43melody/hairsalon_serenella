/** 画面内に入ったどうかを監視しておきたい要素をここで取得　*/
const monitored = document.querySelectorAll('.monitored');

/**監視範囲の細かい設定。詳しい説明は https://ics.media/entry/190902/ がわかりやすいです */
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
};

/**IntersectionObserverを起動 */ 
const observer = new IntersectionObserver(slideStart);

// monitoredが画面内に入ったら発動。forEachを使っているので、複数のスライダーがあっても全部monitoredできる
monitored.forEach(monitor => {
    observer.observe(monitor);
});

/**  要素が表示されたら実行する動作 */
function slideStart(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            /** swiperのautoplayを開始させる */
            swiper.autoplay.start();
        }
    });
};

/** swiper制御のための記述。 */
const swiper = new Swiper('.swiper', {

    /**swiperのパラメーター */
    loop: true,
    speed: 1200,
    effect: 'fade',
    autoplay: {
        delay: 4000, 
    },
    
    // 今回は不要
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    
});

/** swiperの自動再生をオフにする記述。画面に表示されていないときはスライドが１枚目から進まなくなる */
swiper.autoplay.stop();