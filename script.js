var swiper1 = new Swiper('.swiper-container-slide', {
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // },
});
var swiper2 = new Swiper('.swiper-container-benefit', {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper3 = new Swiper('.swiper-container-feedback', {
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

//Events click list icon service
var last_image_Clicked;
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.service-slide');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const selectedCategory = this.dataset.category;

            // Hide all contents
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the selected content
            document.getElementById(selectedCategory).classList.add('active');

            // Handle tab activation
            changeTab(this, `./feather-icon/service-tab/active/service-${selectedCategory}-active.png`);
        });
    });

    function changeTab(selectedTab, activeImagePath) {
        // Remove "active" class from all tabs
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add "active" class to the selected tab
        selectedTab.classList.add('active');

        // Change image for the selected tab
        changeImage(selectedTab, activeImagePath);
    }

    function changeImage(tab, imagePath) {
        // Change the image source for the selected tab
        const imageElement = tab.querySelector('.img-service');
        imageElement.src = imagePath;
    }
});
window.onload = function () {
    var defaultTab = document.querySelector('.tab');
    var defaultImage = defaultTab.querySelector('img');
    defaultImage.setAttribute('data-original-src', defaultImage.src);
    defaultImage.src = './feather-icon/service-1-active.png'; // Thay đổi thành ảnh mặc định
    defaultTab.click();
};
function changeImage(element, newSrc) {
    // Kiểm tra xem đã click vào thẻ nào chưa
    if (last_image_Clicked) {
        // Nếu đã click vào một thẻ trước đó, đặt lại ảnh của nó
        var lastImage = last_image_Clicked.querySelector('img');
        lastImage.src = lastImage.getAttribute('data-original-src');
    }

    // Lưu thẻ hiện tại đã được click và nguồn ảnh ban đầu
    last_image_Clicked = element;
    var imageElement = element.querySelector('img');
    if (!imageElement.getAttribute('data-original-src')) {
        imageElement.setAttribute('data-original-src', imageElement.src);
    }

    // Thay đổi nguồn ảnh của thẻ hiện tại
    imageElement.src = newSrc;
}