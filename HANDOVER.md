# Bàn giao landing page OTT Advisory

Ngày bàn giao: **22/10/2026**. Bản ứng dụng gốc của bộ bàn giao: **2e7a2ce**. Các commit sau bổ sung tài liệu không đồng nghĩa đã thay đổi giao diện.

## 1. Phạm vi nhận bàn giao

Kho này chứa mã nguồn chạy được, ảnh/video hiện có, font và giấy phép, toàn bộ nội dung dạng Markdown, hướng dẫn sửa và triển khai, thông số chuyển động, danh mục tài nguyên và kết quả kiểm tra. Tải ZIP ở README sẽ nhận cùng cấu trúc thư mục đang có trong kho; không có thư mục `.git` hoặc thông tin đăng nhập.

Thiết kế dùng ngôn ngữ bố cục của Automark, đổi tím sang cam gradient và đưa nội dung OTT vào: hero căn giữa, video phối cảnh, nhãn vấn đề 3×2, bốn thẻ đối tượng, lưới sáu module, quy trình năm bước, thông điệp trong khung, hai giảng viên, hình ảnh sự kiện, khối ba bước thực hành hình ellipse, form/FAQ hai cột và CTA cuối.

Đây là bản dựng HTML/CSS/JavaScript tĩnh. Không phải dự án Astro của template gốc; không cần cài lại bộ phụ thuộc của template để sửa trang này.

## 2. Các quyết định đã thống nhất

- Tên: **Lâm Vỹ Phong** (đúng chữ “Vỹ”) và **Hoa Tĩnh**. Không dùng Lin/Gina làm tên hiển thị.
- Font: **Be Vietnam Pro**, các độ đậm 400/500/600/700 ở `assets/fonts/`; không phụ thuộc tải font Google khi mở trang.
- Hệ màu: nền tối, cam gradient; tham số ở đầu `assets/ott-reference.css`.
- Nội dung và tư liệu giảng viên của OTT; không đưa số liệu, logo khách hàng, giá thuê bao hoặc lời chứng thực SaaS trong mẫu Automark vào trang.
- Chữ và khối chờ ẩn trước khi vào vùng nhìn, chỉ hiện một lần khi cuộn tới; không hiện trước rồi nháy lại. Cuộn trở lại không phát lại.
- Hỗ trợ thiết bị 320px trở lên và tùy chọn giảm chuyển động.
- Lịch: 18 & 25/11/2026, 20:00–22:00 giờ Việt Nam, Zoom có phiên dịch tiếng Việt.

## 3. Đường dẫn và nơi sửa

| Tệp | Trách nhiệm |
|---|---|
| `index.html` | Toàn bộ nội dung, cấu trúc, nhãn truy cập, SEO và lớp khởi động hiệu ứng trước khi vẽ trang |
| `assets/ott-reference.css` | Màu, font, bố cục, breakpoint, trạng thái menu, form, FAQ và hiệu ứng CSS |
| `assets/ott-reference.js` | Menu, header theo cuộn, phối cảnh/video, canvas, form local và dialog |
| `assets/scroll-reveal.js` | Chuẩn bị chữ, observer và hiệu ứng xuất hiện một lần |
| `assets/fonts.css` | Khai báo bốn tệp font cục bộ |
| `assets/fonts/` | Font Be Vietnam Pro và OFL |
| `assets/` | Ảnh/video cùng một số tài nguyên từ phiên bản trước; xem danh mục để biết đang dùng hay lưu lại |
| `.nojekyll` | Giữ GitHub Pages phục vụ site tĩnh |
| `docs/` | Tài liệu cho người tiếp quản |

## 4. Vận hành và triển khai

Website: https://dinhhy-marketingconsultant.github.io/ott-advisory-landingpage/

Kho: https://github.com/DinhHy-MarketingConsultant/ott-advisory-landingpage

GitHub Pages hiện build từ nhánh `main` ở thư mục gốc. Sau khi người có quyền ghi commit/push lên `main`, kiểm tra workflow **pages build and deployment** trong Actions. Chỉ coi là đã lên website khi workflow thành công và đã mở link công khai để kiểm tra bản mới.

Quyền đăng nhập GitHub không nằm trong bộ bàn giao. Người tiếp quản cần tài khoản được chủ kho cấp quyền phù hợp. Không đưa token, mật khẩu, tệp môi trường hoặc dữ liệu người đăng ký vào commit.

## 5. Form đăng ký — chưa có backend

Form có `fullname`, `phone`, `email`, `role`; JavaScript lưu mảng vào khóa `ott_leads` của localStorage cùng thời gian ISO. Dữ liệu chỉ ở từng trình duyệt; không đồng bộ giữa thiết bị và không gửi request đăng ký ra ngoài.

Dialog hiện tại nói rõ chưa có xác nhận từ ban tổ chức. Khi nối hệ thống nhận lead thật, thay handler ở `assets/ott-reference.js`, chỉ báo gửi thành công sau khi hệ thống đích xác nhận, có trạng thái gửi/lỗi/thử lại và rà lại thông tin xử lý dữ liệu. Không đặt khóa bí mật trong JavaScript công khai. Tên nhập được chèn bằng `textContent`.

## 6. Các điểm cần ban tổ chức xác nhận

- Học phí miễn phí đang giữ theo thông tin website cung cấp.
- Tiểu sử, chức danh, giải thưởng và số liệu kinh nghiệm giảng viên chưa được xác minh độc lập.
- Bản ghi, tài liệu sau học và chứng nhận chưa có điều kiện chính thức; FAQ hiện nói cần xác nhận.
- Cách nhận link Zoom, kênh phiên dịch và thông báo tham gia cần hoàn thiện cùng hệ thống đăng ký.
- Ảnh/video có chữ sẵn trong ảnh hoặc âm thanh gốc chưa được biên tập lại theo toàn bộ câu chữ trên trang.

## 7. Hoàn tất một lượt sửa

Đọc `docs/EDITING_GUIDE.md`, sửa bản local, kiểm tra checklist trong `docs/QA_AND_TODO.md`, xem diff chỉ gồm thay đổi dự kiến, rồi commit/push bằng tài khoản có quyền. Kiểm tra lại GitHub Pages sau triển khai. Dùng Git history để khôi phục phiên bản cũ thay vì chỉnh trực tiếp tài nguyên không biết nguồn.
