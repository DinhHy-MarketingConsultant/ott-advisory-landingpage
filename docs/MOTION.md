# Hệ thống chuyển động hiện tại

## Chữ và khối khi cuộn

Điểm vào: inline script trong head thêm `reveal-ready` trước khi body được vẽ. CSS đặt opacity 0 cho các nhóm mục tiêu khi lớp này bật. JavaScript chuẩn bị nội dung, observer, rồi đánh dấu `data-reveal-initialized`. Nếu tệp reveal không tải được, head tự gỡ lớp chờ sau tối đa 4 giây. Không bật lớp khi thiếu API hoặc bật giảm chuyển động.

`assets/scroll-reveal.js` dùng IntersectionObserver: `threshold: 0`, `rootMargin: 0px 0px -10% 0px`.

| Nhóm | Chuyển động | Thời gian / trễ |
|---|---|---|
| H2 phần giới thiệu, FAQ, CTA | Từng từ: opacity 0 → 1, y .35em → 0; không blur | 800ms; so le 32ms/từ, trễ tối đa 300ms |
| Mô tả các phần | Opacity 0 → 1, y 12px → 0 | 850ms, trễ 100ms |
| Thẻ/khối | Opacity 0 → 1, y 20px → 0, giữ transform nền nếu có | 850ms; trễ so le 70ms, tối đa 180ms |

Easing: `cubic-bezier(.16,1,.3,1)`. `fill: backwards` giữ trạng thái ban đầu trong thời gian trễ. Sau khi kết thúc trở về CSS nền, tránh ghi đè transform tương tác. Mỗi mục chỉ hiện một lần bằng lớp `reveal-entered` và unobserve; quay lại không chạy lại.

Các nhóm: tiêu đề/mô tả phần, nhãn vấn đề, thẻ đối tượng, module, hàng quy trình, thông điệp, giảng viên, ảnh sự kiện, thẻ thực hành, checklist, ảnh sách, form và FAQ. Khi thêm loại khối mới, phải cập nhật cả CSS chờ ẩn và selector JavaScript.

## Video phối cảnh

`assets/ott-reference.js` tính tiến độ theo vị trí `.showcase-space`. Scale .8 → 1; rotateX 10° desktop ≥1280px hoặc 15° ở kích thước nhỏ → 0°. Desktop dùng offset y −80px → 0 để khớp khoảng cách hero hiện tại. CSS dùng perspective 220px desktop, 450px tablet, 300px mobile.

Trạng thái ban đầu được đo sau tải font và resize. Khung được mở phẳng theo tiến độ cuộn, không chạy theo timer. Tránh đọc geometry của chính khung đang transform để không tạo vòng lặp vị trí.

## Các chuyển động khác

- Vòng nút phát: quay đều 3 giây/vòng; hover tăng đĩa nút lên 1.15.
- Canvas hero: 140 hạt nhỏ; CTA cuối 70 hạt. Giới hạn DPR 1.5 và xấp xỉ 30fps; chỉ vẽ khi canvas trong màn hình/tab đang hiển thị.
- Header: sau khoảng 200px, cuộn xuống thì ẩn, cuộn lên thì hiện; giữ hiện nếu có menu mở hoặc focus bên trong. Transition transform 700ms.
- FAQ mở nội dung bằng details/summary; phần trả lời fade/dịch nhẹ 250ms. Dấu + đổi thành −.

## Giảm chuyển động và khả năng truy cập

Khi `prefers-reduced-motion: reduce`: không ẩn nội dung để reveal, hủy animation đang chạy khi đổi cài đặt, video không tự preview, canvas/vòng quay/phối cảnh dừng. Các khối có focus bàn phím được mở ngay để không cản sử dụng.

Không dùng JavaScript: toàn bộ nội dung vẫn nhìn thấy; FAQ native vẫn mở/đóng. Form chưa có backend, nên bản không JavaScript không thể xử lý đăng ký thật.

## Kiểm tra chống nháy

Ở đầu trang, một tiêu đề ngoài màn hình phải có opacity 0 trước khi cuộn. Khi cuộn đến, opacity tăng liên tục đến 1; không giảm lại. Cuộn đi rồi quay lại phải vẫn là 1. Kiểm tra thêm mạng chậm/tệp reveal không tải được, giảm chuyển động và focus bàn phím.
