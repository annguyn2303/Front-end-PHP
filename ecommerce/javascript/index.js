// SLIDER CAROUSEL

let items = document.querySelectorAll('.carousel .carousel-item');

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
});

// QUESTION COLLAPSE

var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}

// CHUYỂN ĐỔI HÌNH DẠNG NÚT + -> X

var collapsibleButtons = document.querySelectorAll('.collapsible');
collapsibleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Tìm phần tử icon trong phần tử nút được nhấn
        var icon = button.querySelector('.fa-solid');

        // Kiểm tra nếu biểu tượng hiện tại là fa-plus, chuyển sang fa-minus và ngược lại
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-plus');
        }
    });
});
