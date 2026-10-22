# Kiểm tra, trạng thái và việc còn lại

## Đã kiểm tra cho bản 2e7a2ce

- Chrome: 1440, 768, 390 và 320px; không tràn ngang.
- H1 duy nhất, không trùng ID, không liên kết mỏ neo hỏng hoặc đường dẫn tài nguyên cục bộ bị thiếu.
- Menu mobile mở/đóng, click liên kết đóng menu; header ẩn xuống/hiện lên theo hướng cuộn.
- Video: scale .8 → 1, mở phẳng khi cuộn; bấm phát bật âm thanh và controls.
- Sáu câu hỏi FAQ mở/đóng; form kiểm tra trường nhập, lưu local, hiện dialog và đóng được.
- Font 400/500/600/700 đều tải từ dự án. Kiểm tra platform fonts của các tiêu đề và đoạn tiếng Việt dùng Be Vietnam Pro, không có font thay thế lẫn vào các đoạn đã lấy mẫu.
- Scroll reveal: đo opacity trước cuộn = 0, tăng liên tục đến 1, quay lại vẫn = 1; desktop/mobile không có lỗi JavaScript.
- Giảm chuyển động và không JavaScript: nội dung hiển thị; chặn tệp reveal: nội dung tự hiển thị sau 4 giây.
- GitHub Pages triển khai thành công. Đã so sánh SHA-256 của index, CSS, JS và bốn font trên link công khai với tệp local.

Không suy rộng kết quả Chrome thành đã kiểm tra Safari/iPhone thực hoặc mọi trình duyệt. Chưa kiểm thử đường truyền di động thật, tải đồng thời lớn hoặc hệ thống gửi đăng ký vì chưa có backend.

## Việc cần hoàn thiện trước khi nhận đăng ký tập trung

1. Chốt hệ thống nhận lead; nối form và kiểm tra gửi thành công/lỗi/thử lại. Hiện người quản lý không thể xem danh sách đăng ký từ máy khác.
2. Xác nhận học phí, hồ sơ/thành tích giảng viên, quyền lợi bản ghi/tài liệu/chứng nhận.
3. Hoàn thiện cách nhận link Zoom, lịch nhắc học và hướng dẫn phiên dịch.
4. Kiểm tra Safari/iOS, Android thực và mạng chậm, nhất là video.
5. Nếu cần đo chuyển đổi, thống nhất công cụ và sự kiện sau khi form nhận lead thật; chưa cài tracking chuyển đổi mới trong bản này.

## Checklist sau mỗi lượt sửa

- [ ] Tên Lâm Vỹ Phong/Hoa Tĩnh và lịch học nhất quán trong nội dung, metadata và alt/aria-label.
- [ ] Không lỗi dấu tiếng Việt hoặc xuống dòng làm khó đọc.
- [ ] Xem 1440/768/390/320px; không tràn, nút không chồng lấn.
- [ ] Cuộn từ đầu trang, không nháy chữ; quay lại không chạy lại.
- [ ] Menu, mỏ neo, video, FAQ, form, dialog, bàn phím và giảm chuyển động hoạt động.
- [ ] Console và Network không có lỗi liên quan ứng dụng/tài nguyên bị thiếu.
- [ ] Nếu vẫn chưa có backend, không báo “đăng ký thành công/giữ chỗ thành công”.
- [ ] Tăng phiên bản URL CSS/JS đã đổi; kiểm tra trang công khai sau Pages deployment.

## Các chủ đích thiết kế đã rà soát

Glow cam, viền ellipse, vòng play và các khung được giữ theo mẫu người dùng chọn. Cảnh báo tự động về padding trên wrapper đã được đối chiếu với summary/answer có đệm thực tế; không phát hiện trường hợp có chữ trực tiếp trong khối viền với đệm ngang dưới 8px trong lượt kiểm tra. Không tự gỡ các chi tiết này chỉ vì detector tổng quát; đánh giá theo hình thực tế và yêu cầu tham chiếu.
