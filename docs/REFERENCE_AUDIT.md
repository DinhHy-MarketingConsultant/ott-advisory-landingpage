# Đối chiếu preview Automark — 22/10/2026

Nguồn trực tiếp: https://preview.themewagon.com/automark/
Nguồn mã người dùng cung cấp: automark-v1.0.0.zip (MIT).
Đã mở preview thực tế, cuộn liên tục từ hero đến footer, thử FAQ, kiểm tra hero và menu ở 390×844. Desktop quan sát ở 1440×687. Chưa chỉnh sửa website trong lượt đối chiếu này.

## Những gì mẫu thực sự thể hiện

1. Header trong suốt nằm trên cùng một nền glow với hero. Logo bên trái, nhóm menu nằm trong một capsule mờ, nút gradient bên phải. Không có announcement ribbon hoặc thanh lịch riêng.
2. Hero chỉ có H1 lớn 2 dòng, phần từ khóa tô màu, một đoạn mô tả ngắn và hai CTA. Khoảng trống rộng, glow tím sáng từ đỉnh trung tâm với các tia xiên bên trái. Không có nhiều badge hoặc hook phụ chồng lên nhau.
3. Video ngang bo tròn, có lớp overlay tối và nút play trắng ở giữa. Nút có hai đoạn vòng cung quay. Video khởi đầu nhỏ và nghiêng sâu trong phối cảnh, sau đó lớn dần và mở phẳng khi cuộn. Video có thuộc tính autoplay/muted/loop; trạng thái phát có thể bị trình duyệt tạm dừng ngoài màn hình.
4. Phần vấn đề là 6 nhãn capsule xếp 3×2, có dấu × màu đỏ và đường mảnh nối ngang. Không phải ba thẻ dài kiểu trước/sau.
5. Phần giá trị là 4 thẻ một hàng, icon trắng lớn, tiêu đề và ba dòng nội dung với dấu sao. Glow lan phía sau cả cụm thay vì viền sáng quanh từng thẻ.
6. Khối tính năng là một section nền nhỉnh hơn, bo góc rất lớn (~80px desktop). Bên trong là lưới 3×3 có đường kẻ mảnh, dấu sao ở giao điểm và ánh sáng tập trung phía đáy.
7. Năm hàng quy trình nằm trong phối cảnh: hàng trên rộng, các hàng dưới thu hẹp, có cụm icon, số outline lớn và mô tả. Cảm giác chiều sâu đến từ hình học bố cục; không suy diễn đây là toàn bộ chuyển động theo cuộn.
8. Bảng so sánh gồm 10 hàng, tên công cụ bên trái, icon giữa và giá bên phải; đường nối nét đứt và glow trung tâm.
9. Thông điệp/quote lớn đóng trong khung đường mảnh với bốn chấm vuông ở góc. Dải logo phía dưới thay đổi theo chu kỳ, có blur và dịch chuyển lên/xuống.
10. Khối chứng thực gồm ba ellipse chồng dọc bên trái, một thẻ quote bên phải; nền glow và hạt sáng phía đáy.
11. Quy trình 3 bước nằm trong một vùng ellipse cực lớn, đường viền gradient ở mép trên. Ba thẻ có icon, tiêu đề, đường ngăn và đoạn mô tả, CTA ở dưới.
12. Thư CEO có tiêu đề căn giữa, chân dung tròn, nội dung dài trong khung góc vuông với bốn chấm góc và gradient phía sau, các capsule quy trình xếp dọc.
13. Dải tích hợp gồm 8 vòng tròn đè nhẹ lên nhau, logo nằm ở giữa, glow phía dưới. Không phải các thẻ chữ rời nhau.
14. Phần tài nguyên có tiêu đề căn giữa, hai cột: mô tả/checklist bên trái và ảnh sách cùng form bên phải.
15. Bảng giá: toggle tháng/năm, ba thẻ, thẻ giữa được nhấn bằng glow và nhãn. Giá thay đổi với blur + trượt, lệch nhịp giữa từng thẻ.
16. Chứng thực ba cột: thumbnail video bên trên, quote và tên phía dưới; có nút play dạng vòng cung tương tự hero. Không kết luận đây là carousel chạy ngang: tại trạng thái đã quan sát, ba thẻ được bố trí tĩnh.
17. FAQ hai cột: tiêu đề/mô tả/CTA bên trái, các accordion nền riêng bên phải. Bấm câu hỏi mở nội dung và đổi dấu + thành −; đã thử hai mục.
18. CTA cuối nằm trong thẻ rộng bo tròn ~36px, gradient tập trung phía bên phải và hạt sáng. Footer nhiều cột có glow trung tâm và đường chia mảnh phía đáy.

## Chuyển động — đối chiếu mã nguồn sau khi quan sát preview

- Video: scale 0.8 → 1, rotateX 10° → 0° trên desktop ≥1280px; top −250px → 0. ScrollTrigger scrub, start "20% 95%", end "0% 30%". Trên màn hình nhỏ: rotateX 15° → 0°, không offset top, end "0% 40%". DOM preview ở đầu trang xác nhận rotateX(10deg) scale(0.8), top −250px.
- Cuộn mượt: Lenis. Header ẩn khi cuộn xuống sau 200px, hiện lại khi cuộn lên; chuyển động transform khoảng 700ms.
- Hạt nền: canvas 140 hạt, kích thước 0.2–1.6, tốc độ rất chậm (0–0.1). Hạt nhỏ màu sáng; không phải chấm cam to bay lên xuống rõ rệt.
- Logo chứng thực: opacity 0/blur 10px/y −30 → rõ/y 0 trong 0.9s, stagger 0.15s; chờ 3s rồi blur và y +20, thay logo và lặp.
- Vòng cung nút play quay liên tục 3s. Hover tăng kích thước nút và độ sáng CTA theo CSS nguồn.
- Toggle giá: đổi active/inactive, hiệu ứng blur/trượt 0.6s, lệch 150ms theo thẻ.
- Không thấy hệ thống reveal mọi section khi cuộn trong animations.js. Vì vậy việc thêm fade-up hàng loạt vào OTT không phải tái hiện đúng cơ chế chủ đạo của mẫu.

## Những chỗ OTT hiện lệch mẫu

| Phần | Hiện trạng OTT | Cần thay để sát mẫu |
|---|---|---|
| Header | Hai tầng thông tin, thanh đen riêng | Một header trong suốt trên glow hero; capsule menu; menu mobile thực |
| Hero | Badge + nhãn + H1 + hook + mô tả + lịch | Giảm tầng chữ, đưa lịch xuống rail dưới; H1 và mô tả ngắn theo đúng tỷ lệ mẫu |
| Nền | Nâu/cam phủ rộng, hạt to và beam di chuyển | Nền gần đen trung tính, glow cam sáng ở tâm trên; hạt nhỏ chậm |
| Video | Portrait trong hộp có header/caption; nghiêng 7° và scale 0.94 | Showcase ngang, overlay play giữa; scale 0.8 và phối cảnh đúng, tiến độ theo cuộn |
| Vấn đề | Ba thẻ dài | Nhãn capsule vấn đề 3×2 trước, phần giải pháp tách rõ |
| Giá trị | Thẻ người học mang cấu trúc cũ | Bốn thẻ icon/lợi ích theo nhịp mẫu; đối tượng là phần riêng |
| Nội dung học | Hai thẻ đặc giống nhau | Tận dụng lưới module trong khối bo lớn; giữ lịch hai buổi dễ nhận biết |
| Giảng viên | Hai thẻ chân dung dài | Bố cục nhân vật/thông điệp và khung góc mảnh theo mẫu, dùng dữ liệu thật OTT |
| FAQ | Một cột giữa | Bố cục hai cột; accordion có nền riêng, chiều cao chuyển tiếp |
| CTA/form | Một form giữa dài | Tách lời mời cuối và form hai cột theo kiểu tài nguyên của mẫu |
| Motion | Fade-up hàng loạt + ánh sáng bay | Tập trung phối cảnh video, vòng play, hạt canvas, header theo hướng cuộn |

## Nguyên tắc chuyển nội dung OTT

Dùng ngôn ngữ bố cục của template, không thay OTT thành sản phẩm SaaS. Không đem logo khách hàng, lời chứng thực, giá thuê bao, số liệu hoặc lời hứa trong mẫu sang OTT. Giữ nội dung và tư liệu giảng viên đã có, lịch hai buổi, phần giải thích form chưa gửi thông tin. Hệ màu chỉ thay từ tím sang cam; nền, cỡ chữ, mật độ, nhịp khoảng trắng và chuyển động bám theo bản mẫu thực tế.
