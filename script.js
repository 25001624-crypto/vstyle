const products = {'ao1': {'image': 'images/ao1.jpg', 'name': 'Áo Polo Basic', 'price': '299.000đ', 'description': 'Áo Polo Basic với thiết kế đơn giản, trẻ trung và dễ phối đồ. Phù hợp để mặc đi học, đi chơi hoặc sử dụng hàng ngày.'}, 'ao2': {'image': 'images/ao2.jpg', 'name': 'Áo Sơ Mi Basic', 'price': '349.000đ', 'description': 'Áo sơ mi basic với kiểu dáng thanh lịch, trẻ trung, dễ phối cùng quần jean hoặc quần kaki.'}, 'ao3': {'image': 'images/ao3.jpg', 'name': 'Áo Thun Oversize', 'price': '249.000đ', 'description': 'Áo thun oversize mang phong cách năng động, thoải mái, phù hợp với phong cách thời trang trẻ.'}, 'ao4': {'image': 'images/ao4.jpg', 'name': 'Áo Thun Basic', 'price': '279.000đ', 'description': 'Áo thun basic tối giản, dễ mặc và phù hợp cho nhiều hoàn cảnh.'}, 'quan1': {'image': 'images/quan1.jpg', 'name': 'Quần Kaki Basic', 'price': '399.000đ', 'description': 'Quần kaki basic có kiểu dáng hiện đại, dễ phối cùng áo thun hoặc áo sơ mi.'}, 'quan2': {'image': 'images/quan2.jpg', 'name': 'Quần Jean Basic', 'price': '449.000đ', 'description': 'Quần jean basic trẻ trung, dễ phối đồ và phù hợp sử dụng hàng ngày.'}, 'hoodie': {'image': 'images/hoodie.jpg', 'name': 'Hoodie Basic', 'price': '399.000đ', 'description': 'Hoodie basic trẻ trung, phù hợp cho thời tiết se lạnh và phong cách năng động.'}, 'jean': {'image': 'images/jean.jpg', 'name': 'Quần Jean Classic', 'price': '450.000đ', 'description': 'Quần Jean Classic với thiết kế đơn giản, dễ phối và phù hợp nhiều phong cách.'}, 'jacket': {'image': 'images/jacket.jpg', 'name': 'Áo Jacket Basic', 'price': '550.000đ', 'description': 'Áo jacket basic hiện đại, phù hợp phối đồ đi học, đi chơi.'}, 'nu1': {'image': 'images/nu1.jpg', 'name': 'Áo Nữ Basic', 'price': '299.000đ', 'description': 'Áo nữ basic trẻ trung, dễ phối với chân váy hoặc quần jean.'}, 'nu2': {'image': 'images/nu2.jpg', 'name': 'Áo Sơ Mi Nữ', 'price': '349.000đ', 'description': 'Áo sơ mi nữ thanh lịch, phù hợp đi học, đi làm và đi chơi.'}, 'nu3': {'image': 'images/nu3.jpg', 'name': 'Váy Thời Trang', 'price': '399.000đ', 'description': 'Váy thời trang nữ với thiết kế trẻ trung, nữ tính và hiện đại.'}, 'nu4': {'image': 'images/nu4.jpg', 'name': 'Quần Nữ Basic', 'price': '379.000đ', 'description': 'Quần nữ basic dễ phối đồ, mang lại cảm giác thoải mái khi sử dụng.'}, 'nu5': {'image': 'images/nu5.jpg', 'name': 'Áo Kiểu Nữ', 'price': '329.000đ', 'description': 'Áo kiểu nữ trẻ trung, tạo điểm nhấn cho phong cách thời trang hàng ngày.'}, 'nu6': {'image': 'images/nu6.jpg', 'name': 'Chân Váy Basic', 'price': '299.000đ', 'description': 'Chân váy basic dễ phối cùng nhiều kiểu áo và phụ kiện.'}, 'sale1': {'image': 'images/sale1.jpg', 'name': 'Áo Polo Basic - Sale', 'price': '239.000đ', 'description': 'Áo Polo Basic đang được ưu đãi, thiết kế trẻ trung và dễ phối đồ.'}, 'sale2': {'image': 'images/sale2.jpg', 'name': 'Áo Sơ Mi Basic - Sale', 'price': '244.000đ', 'description': 'Áo Sơ Mi Basic đang được ưu đãi với thiết kế thanh lịch, dễ mặc.'}, 'sale3': {'image': 'images/sale3.jpg', 'name': 'Áo Thun Oversize - Sale', 'price': '239.000đ', 'description': 'Áo Thun Oversize đang được ưu đãi, phong cách năng động và thoải mái.'}, 'sale4': {'image': 'images/sale4.jpg', 'name': 'Quần Kaki Basic - Sale', 'price': '299.000đ', 'description': 'Quần Kaki Basic đang được ưu đãi, dễ phối đồ và sử dụng hàng ngày.'}, 'sale5': {'image': 'images/sale5.jpg', 'name': 'Váy Thời Trang - Sale', 'price': '279.000đ', 'description': 'Váy thời trang nữ đang được ưu đãi, trẻ trung và nữ tính.'}, 'sale6': {'image': 'images/sale6.jpg', 'name': 'Áo Nữ Basic - Sale', 'price': '239.000đ', 'description': 'Áo nữ basic đang được ưu đãi, trẻ trung và dễ phối đồ.'}};

function showMessage(element, message, type) {
    if (!element) return;
    element.textContent = message;
    element.className = 'form-message ' + type;
}

document.addEventListener('DOMContentLoaded', function () {
    // Chi tiết sản phẩm theo tham số product trên URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    const product = products[productId];
    const image = document.getElementById('detail-image');
    const name = document.getElementById('detail-name');
    const price = document.getElementById('detail-price');
    const description = document.getElementById('detail-description');
    if (product && image && name && price && description) {
        image.src = product.image;
        image.alt = product.name;
        name.textContent = product.name;
        price.textContent = product.price;
        description.textContent = product.description;
        document.title = product.name + ' - VSTYLE';
    }

    // Chọn màu / size / số lượng
    document.querySelectorAll('.detail-option').forEach(function(option) {
        const buttons = option.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                if (button.textContent.trim() === '-' || button.textContent.trim() === '+') return;
                buttons.forEach(b => b.classList.remove('selected'));
                button.classList.add('selected');
            });
        });
    });

    // Nút tăng giảm số lượng trên trang chi tiết
    const quantityButtons = document.querySelectorAll('.detail-option button');
    let quantity = 1;
    quantityButtons.forEach(function(button) {
        const text = button.textContent.trim();
        if (text === '+' || text === '-') {
            button.addEventListener('click', function() {
                quantity = text === '+' ? quantity + 1 : Math.max(1, quantity - 1);
                const numberButton = Array.from(quantityButtons).find(b => b.textContent.trim() === String(quantity));
                const allNumberButtons = Array.from(document.querySelectorAll('.detail-option button'));
                const quantityBox = button.parentElement;
                const number = Array.from(quantityBox.querySelectorAll('button')).find(b => /^\d+$/.test(b.textContent.trim()));
                if (number) number.textContent = quantity;
            });
        }
    });

    // Form liên hệ - JavaScript validation
    const submit = document.getElementById('contact-submit');
    if (submit) {
        submit.addEventListener('click', function () {
            const nameEl = document.getElementById('contact-name');
            const emailEl = document.getElementById('contact-email');
            const phoneEl = document.getElementById('contact-phone');
            const contentEl = document.getElementById('contact-content');
            const message = document.getElementById('form-message');
            const name = nameEl.value.trim();
            const email = emailEl.value.trim();
            const phone = phoneEl.value.trim();
            const content = contentEl.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
            if (!name) return showMessage(message, 'Vui lòng nhập họ và tên!', 'error');
            if (!emailRegex.test(email)) return showMessage(message, 'Email không hợp lệ!', 'error');
            if (!phoneRegex.test(phone.replace(/[ .-]/g, ''))) return showMessage(message, 'Số điện thoại không hợp lệ!', 'error');
            if (!content) return showMessage(message, 'Vui lòng nhập nội dung cần hỗ trợ!', 'error');
            showMessage(message, 'Gửi tin nhắn thành công! Cảm ơn bạn đã liên hệ VSTYLE.', 'success');
        });
    }
});
