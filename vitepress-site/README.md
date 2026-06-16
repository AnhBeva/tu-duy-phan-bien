# Tư duy phản biện cho Lumi R&D

VitePress site cho giáo trình tiếng Việt “Tư duy phản biện cho Lumi R&D”. Site dùng nội dung Markdown native, local search, dark mode, clean URLs và cấu hình GitHub Pages dưới base path `/tu-duy-phan-bien/`.

## Chạy local

```bash
npm install
npm run dev
```

Khi dùng base path hiện tại, mở:

```text
http://127.0.0.1:5173/tu-duy-phan-bien/vi/
```

## Build và preview

```bash
npm run build
npm run preview
```

Output tĩnh nằm trong:

```text
docs/.vitepress/dist
```

## Cấu trúc nội dung

```text
docs/
  vi/
    index.md
    giao-trinh/
      index.md
      bai-1-tu-duy-phan-bien-trong-rd/
      bai-2-lam-ro-van-de-va-gia-dinh/
      bai-3-bang-chung-lap-luan-va-phan-bien/
      bai-4-ra-quyet-dinh-lien-team/
      bai-5-kiem-chung-rui-ro-va-hoc-tu-loi/
    thuc-hanh/
      case-thuc-hanh-lumi-rd/
      workbook-ca-nhan/
    tai-nguyen/
      checklist-job-aids/
      rubric-tu-danh-gia-va-ke-hoach-ap-dung/
    profile/
      lumi-rd-profile/
```

## Cập nhật điều hướng

Khi thêm trang mới:

1. Tạo route dạng `folder/index.md` trong `docs/vi/...`.
2. Giữ một H1 duy nhất trong trang.
3. Thêm link vào `docs/.vitepress/config.mts`.
4. Chạy `npm run build` để kiểm tra dead link và route.

## Đổi base path khi deploy

Base path hiện tại:

```ts
const docsBase = "/tu-duy-phan-bien/";
```

Nếu repo GitHub Pages đổi tên, cập nhật `docsBase` trong `docs/.vitepress/config.mts` và các link homepage đang trỏ tới `/tu-duy-phan-bien/...`.

## Attribution

Theme scaffold dùng starter từ skill `build-vitepress-docs`, dựa trên source công khai MIT của `walkinglabs/learn-harness-engineering`. Nội dung giáo trình thuộc bộ tài liệu Lumi R&D trong workspace này.
