# Website CV cá nhân – Bích Trâm

Website CV tĩnh (HTML/CSS/JS) giao diện hiện đại, tối giản, tối ưu hiển thị Desktop/Tablet/Mobile. Phù hợp deploy GitHub Pages (không cần build).

## Cấu trúc

- `index.html`: Nội dung trang (Home / About / Education / Skills / Experience / Contact)
- `assets/style.css`: Giao diện, màu chủ đạo:
  - Teal: `#14B8A6`
  - White: `#FFFFFF`
  - Light gray: `#F5F7FA`
- `assets/main.js`: Menu mobile, highlight menu theo section, cập nhật năm ở footer
- `assets/avatar.jpg`: Ảnh đại diện (bạn tự thay)
- `cv.html`: Trang CV dạng in/print (có nút In / Lưu PDF)
- `assets/BichTram-CV.pdf`: (tuỳ chọn) File CV PDF (nếu bạn muốn dùng PDF riêng)

## Tuỳ biến nhanh

- **Đổi ảnh đại diện**: thay file `assets/avatar.jpg` bằng ảnh của bạn (giữ đúng tên).
- **Thêm CV PDF**:
  - Cách nhanh nhất: mở `cv.html` → bấm **In / Lưu PDF**
  - Nếu bạn đã có PDF sẵn, copy vào `assets/` và đặt tên `BichTram-CV.pdf` (tuỳ chọn).

> Nếu chưa có ảnh/PDF, trang vẫn chạy bình thường (ảnh sẽ hiện “BT” dạng fallback).

## Deploy GitHub Pages

1. Tạo repo mới trên GitHub (ví dụ: `cv-bich-tram`).
2. Push toàn bộ code trong thư mục này lên nhánh `main`.
3. Vào **Settings → Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `(root)`
4. Đợi GitHub build xong, bạn sẽ nhận link website.

## Gợi ý (khuyến nghị)

- Tạo file `assets/BichTram-CV.pdf` để nút **View CV** hoạt động đúng.
- Cập nhật favicon/SEO nếu cần.

