# OTT Advisory — Landing page khóa học bán hàng & AI Marketing

Tên truyền thông đề xuất cho bản nháp tiếng Việt: **“Tư vấn thuyết phục, chốt đơn tự tin”**. Tên gốc: 一開口就收錢. Đây là bản biên tập tên cho thị trường Việt Nam, chưa phải xác nhận đổi tên chính thức từ đơn vị tổ chức. Đơn vị: Beyond Peak Taiwan, OTT Advisory và DINH HY Agency.

## Bản biên tập ngày 20/10/2026

Đã chỉnh trực tiếp `index.html`: mở đầu từ tình huống khách còn do dự; làm rõ lợi ích, nhóm học viên phù hợp, nội dung 2 buổi, CTA; bổ sung 6 câu hỏi thường gặp. Giữ tên khóa học, lịch học và tài nguyên hình ảnh/video.

Tối ưu nội dung tìm kiếm: title, meta description, Open Graph, canonical và tiêu đề H1–H2. Từ khóa biên tập: khóa học kỹ năng bán hàng, khóa học bán hàng online, xử lý từ chối, AI Marketing. Chưa thực hiện nghiên cứu lượng tìm kiếm hoặc đánh giá thứ hạng.

Đã bỏ các lời hứa về chuyển đổi gấp 3, thu nhập gấp 10, video triệu view miễn phí, phiên dịch không có độ trễ và bộ đếm 47 vé không kết nối dữ liệu. Thay đoạn trích dẫn biên tập bằng thông điệp không đặt trong ngoặc kép.

## Cần xác nhận trước khi công bố

- Mức học phí miễn phí hiện được giữ theo bản website gốc; tài liệu bàn giao ngày 15/10 ghi học phí còn chờ xác nhận. Đã bỏ mức giá gạch ngang 2.680.000 VNĐ.
- Tên, chức danh, giải thưởng, số liệu kinh nghiệm và thành tích giảng viên giữ theo mã nguồn cung cấp, chưa được xác minh độc lập. Cần đối chiếu hồ sơ giảng viên và tư liệu gốc.
- Quyền lợi chứng nhận, mã chứng nhận, bản ghi và điều kiện cấp chưa được xác nhận. Đã thay lời hứa cấp chứng nhận bằng thông tin học trực tuyến và câu hỏi thường gặp.
- Cần xác nhận kênh phiên dịch Zoom và hướng dẫn tham gia trước khi gửi học viên.

## Biểu mẫu đăng ký

Form hiện chỉ lưu dữ liệu trong `localStorage` của trình duyệt, chưa có API hoặc dịch vụ tiếp nhận đăng ký. Đã sửa thông báo để không báo giữ chỗ thành công khi ban tổ chức chưa nhận dữ liệu. Cần kết nối hệ thống nhận lead trước khi chạy quảng cáo. Tên người nhập được hiển thị bằng `textContent`.

## Kiểm tra

Đã kiểm tra cấu trúc HTML, H1 duy nhất, ID không trùng, các liên kết trong trang và đường dẫn ảnh/video cục bộ. Chưa kiểm tra hiển thị và tương tác trên trình duyệt do phiên kiểm tra chặn mở URL file cục bộ.

Bản website gốc: https://dinhhy-marketingconsultant.github.io/ott-advisory-landingpage/
Chưa đẩy thay đổi lên GitHub hoặc cập nhật website công khai.

## Lượt biên tập theo phản hồi về bản dịch

Viết lại tên truyền thông, mở đầu, mạch vấn đề–nội dung học, thẻ đối tượng, giới thiệu giảng viên và lời mời đăng ký. Thống nhất cách gọi thầy Lin/cô Gina, bỏ cách gọi Grand Master/Master, “lưu lượng AI”, “hệ thống sao chép”, “chẩn đoán hiệu suất”. Thay lộ trình tour trang trí bằng lịch học, viết phần hình ảnh theo hướng chú thích hoạt động. Tên tiếng Trung được giữ làm tham chiếu gốc. Chưa thay chữ nằm sẵn trong hình ảnh/video.

## Cập nhật ngày 21/10/2026

Đưa bộ câu chữ được duyệt trong chat “Chỉnh sửa content website” vào trang: tiêu đề “Khách hỏi nhiều. Bạn chốt được bao nhiêu?”, phần mở đầu, ba tình huống mất khách, bốn nhóm học viên, tiêu đề nội dung hai buổi và lời mời đăng ký. Đồng bộ tiêu đề trình duyệt, Open Graph và thanh đăng ký cố định. Giữ bố cục và tài nguyên hiện tại. Tên trên là tiêu đề truyền thông của bản nháp.

Kiểm tra bằng Playwright qua Chrome cài sẵn (Browser plugin không có trong phiên). Website công khai chưa được cập nhật; biểu mẫu vẫn chưa có hệ thống nhận lead.

## Thiết kế giao diện ngày 21/10/2026

Áp dụng UI UX Designer: nền xanh đen #101719, điểm nhấn vàng nhạt #EDCE85 và khối thông điệp màu sage #DCE4DD. Dùng hệ chữ sans, giảm hiệu ứng ánh kim và viền trang trí, đơn giản hóa điều hướng, tăng khoảng cách giữa các phần. Cập nhật trình bày video, thẻ vấn đề, đối tượng, giảng viên, lịch học và biểu mẫu. Các quy tắc mới nằm trong assets/redesign.css. Giữ nội dung đã duyệt và các ảnh/video gốc.

Kiểm tra Chrome bằng Playwright ở độ rộng 1440, 768, 390 và 320 px: một H1, không tràn ngang, không có lỗi JavaScript hoặc tài nguyên cục bộ bị lỗi. Nút hero dẫn đến #dang-ky. Có trạng thái focus rõ, nút chính tối thiểu 44 px và hỗ trợ giảm chuyển động. Chưa triển khai website công khai hoặc kết nối hệ thống nhận lead.

## Điều chỉnh theo phản hồi màu sắc và điểm nhấn

Chuyển hero sang nền kem với tiêu đề cam đất, dùng xanh lime cho thông tin đầu trang và tím nhạt cho khối thông điệp/đăng ký. Phân biệt hai buổi học bằng nền xanh và tím; nhấn cụ thể 7 cách mở lời, 10 kỹ thuật chốt đơn và video với AI. Rút gọn đoạn mở đầu thành tình huống thực tế cùng ba trọng tâm dễ quét: hỏi trúng nhu cầu, gỡ từ chối, làm nội dung với AI. Nút chính dùng cam đất đậm với chữ trắng. Các phần nội dung khác vẫn được giữ.

## Chuyển động giao diện

Thêm assets/motion.js và assets/motion.css bằng JavaScript/CSS gốc, không thêm thư viện. Phần đầu xuất hiện theo thứ tự; các khối nội dung xuất hiện một lần khi cuộn đến. Thanh tiến độ ở đầu trang và điều hướng đánh dấu mục đang xem. Nút, thẻ nội dung học, ảnh giảng viên có phản hồi nhẹ khi tương tác. Thời gian 180–500ms, không tự phát video. Nội dung không bị ẩn trong CSS nên vẫn đọc được khi JavaScript tắt. Chế độ prefers-reduced-motion tắt chuyển động và hủy hiệu ứng đang chạy khi người dùng đổi tùy chọn.

## Trạng thái hiện tại — đã khôi phục thiết kế gốc

Theo yêu cầu người dùng, khôi phục index.html về bản trước lần làm mới giao diện: màu thương hiệu đen–vàng và bố cục gốc, giữ bộ nội dung đã duyệt. Trang không còn tải redesign.css, motion.css hoặc motion.js; các mô tả thiết kế mới bên trên chỉ là lịch sử chỉnh sửa, không phải giao diện đang áp dụng. Chưa thay đổi website công khai.

## Trạng thái mới nhất — giao diện gốc có chuyển động

Giữ thiết kế đen–vàng, bố cục và nội dung của bản khôi phục. Chỉ kích hoạt motion.js và motion.css: nội dung xuất hiện khi cuộn, tiêu đề xuất hiện theo nhịp, phản hồi nút/thẻ/ảnh giảng viên và điều hướng theo phần đang xem. Màu chuyển động sử dụng biến vàng của thương hiệu; không tải redesign.css. Hỗ trợ giảm chuyển động và nội dung vẫn hiển thị khi tắt JavaScript.
