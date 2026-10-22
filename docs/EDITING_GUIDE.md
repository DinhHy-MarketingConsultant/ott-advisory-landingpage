# Hướng dẫn chạy và chỉnh sửa

## Bắt đầu

1. Tải ZIP từ README hoặc clone kho.
2. Giải nén, giữ nguyên `index.html` và thư mục `assets` cạnh nhau.
3. Chạy `python3 -m http.server 8765` tại thư mục gốc (Windows: `py -m http.server 8765`).
4. Mở http://localhost:8765/; không cần cài package.

Nên chạy qua HTTP local thay vì mở `file://` để môi trường gần GitHub Pages và việc kiểm tra đường dẫn rõ ràng hơn.

## Sửa nội dung

`docs/CONTENT.md` là bản trích xuất để đọc/biên tập; nội dung chạy thật vẫn ở `index.html`. Sửa Markdown không tự cập nhật website. Khi nội dung được duyệt, thay câu tương ứng trong HTML và kiểm tra lại xuống dòng ở desktop/mobile.

Các mốc điều hướng: `#main`, `#why`, `#persona`, `#curriculum`, `#mentor`, `#proof`, `#books`, `#dang-ky`, `#faq`, `#video-demo`. Nếu đổi ID, sửa mọi `href` và selector JavaScript có liên quan.

Lịch và tên xuất hiện nhiều nơi: meta description, hero, rail lịch, nội dung module, form, FAQ, CTA, footer, alt/aria-label. Tìm toàn bộ để sửa đồng nhất. Tên được chốt: Lâm Vỹ Phong và Hoa Tĩnh. Lưu file UTF-8 và giữ Unicode NFC.

## Sửa giao diện

Mở `assets/ott-reference.css`. Các biến chính ở `:root` gồm `--body`, `--surface`, `--text`, `--muted`, `--accent`, `--light`, `--gradient`, `--font`, `--heading`. Biến `--gradient` có khai báo cập nhật ở cuối file; tìm toàn bộ khai báo trước khi sửa. Khi dọn CSS, giữ nguyên kết quả cascade và kiểm tra ảnh trước/sau.

Các breakpoint: 1200, 1024, 767 và 1280px. Tối thiểu phải xem ở 1440, 768, 390 và 320px. Giữ vùng bấm chính tối thiểu khoảng 44px, trạng thái focus và tương phản chữ.

Không sửa các tệp `redesign.css`, `motion.css`, `motion.js` hoặc các CSS cũ nếu danh mục đánh dấu không dùng; chúng không điều khiển bản hiện tại.

## Font

Font cục bộ được khai báo tại `assets/fonts.css`, bốn TTF 400/500/600/700. Khi thay font phải chọn bộ có tiếng Việt và cung cấp đủ độ đậm. Kiểm tra các chữ ă, â, ê, ô, ơ, ư, đ và dấu tổ hợp, đặc biệt “Lâm Vỹ Phong”, “Hoa Tĩnh”, “những”, “thuyết phục”. Giữ file giấy phép font.

## Ảnh và video

- `src` dùng đường dẫn tương đối `assets/...`, không đổi thành `/assets/...` vì website chạy dưới đường dẫn `/ott-advisory-landingpage/`.
- Khi thay ảnh giữ alt mô tả và tỷ lệ nội dung; ảnh sự kiện đang dùng `object-fit: contain` để không cắt nội dung.
- Video: `assets/master_lin_sales_teaser.mp4`; poster: `assets/lin_studio_0.jpg`.
- Preview video chạy muted/loop khi ở trong màn hình nếu không bật giảm chuyển động. Chỉ bật tiếng và controls sau khi người dùng bấm nút phát.
- Tránh thay media rất nặng nếu chưa kiểm tra tải trên mạng di động.

## Cache và hiệu ứng

Khi thay CSS/JS, tăng `?v=` trong HTML để người xem nhận đúng tệp mới. Tham số `?v=` trên URL trang chỉ giúp phân biệt lần mở; không tự thay phiên bản URL CSS/JS.

Lớp `reveal-ready` trong head và selector chờ ẩn trong CSS phải đồng bộ với selector của `scroll-reveal.js`. Không xóa khối khởi động rồi vẫn giữ logic reveal, vì sẽ gây hiện trước/ẩn lại. Xem `docs/MOTION.md`.

## Đăng lại

```sh
git clone https://github.com/DinhHy-MarketingConsultant/ott-advisory-landingpage.git
cd ott-advisory-landingpage
# sửa và kiểm tra tại đây
git status
git diff --check
git diff
# chỉ add các tệp thực sự cần xuất bản
git add index.html assets/ott-reference.css assets/ott-reference.js assets/scroll-reveal.js
git commit -m "Update OTT landing page"
git push origin main
```

Ví dụ `git add` trên cần điều chỉnh nếu bạn có thay ảnh, font hoặc tài liệu. Không force push; nếu bị từ chối do có commit mới, lấy thay đổi mới và xử lý xung đột trước. Không bỏ `.nojekyll`. Mở Actions kiểm tra build/deployment rồi kiểm tra link công khai. Nhánh `main` hiện là nhánh xuất bản.
