# Học viện Tư duy Lumi R&D

VitePress site cho cổng giáo trình tiếng Việt của Lumi R&D, gồm “Tư duy phản biện”, “Tư duy hệ thống” và “Kĩ năng giải quyết vấn đề”. Site dùng nội dung Markdown native, local search, dark mode, clean URLs và deploy ở root base `/`.

## Chạy local

```bash
npm install
npm run dev
```

Mở:

```text
http://127.0.0.1:5173/
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
    ...redirect routes tương thích URL cũ...
  tu-duy-phan-bien/
    index.md
    bai-1-tu-duy-phan-bien-trong-rd/
    bai-2-lam-ro-van-de-va-gia-dinh/
    bai-3-bang-chung-lap-luan-va-phan-bien/
    bai-4-ra-quyet-dinh-lien-team/
    bai-5-kiem-chung-rui-ro-va-hoc-tu-loi/
    case-thuc-hanh-lumi-rd/
    workbook-ca-nhan/
    checklist-job-aids/
    rubric-tu-danh-gia-va-ke-hoach-ap-dung/
  tu-duy-he-thong/
    index.md
    bai-1-ban-chat-tu-duy-he-thong/
    bai-2-nhin-thay-cau-truc-an/
    bai-3-vong-lap-phan-hoi-va-hanh-vi-he-thong/
    bai-4-bay-he-thong-va-co-hoi-can-thiep/
    bai-5-diem-bay-leverage-points/
    case-thuc-hanh-lumi-rd/
    workbook-ca-nhan/
    checklist-job-aids/
    rubric-tu-danh-gia-va-ke-hoach-ap-dung/
  ky-nang-giai-quyet-van-de/
    index.md
    bai-1-ban-chat-giai-quyet-van-de-trong-rd/
    bai-2-lam-ro-van-de-va-nguyen-nhan-goc/
    bai-3-tao-phuong-an-va-ra-quyet-dinh/
    bai-4-thuc-thi-thu-nghiem-va-phoi-hop-lien-team/
    bai-5-hoc-tu-ket-qua-va-chuan-hoa-giai-phap/
    case-thuc-hanh-lumi-rd/
    workbook-ca-nhan/
    checklist-job-aids/
    rubric-tu-danh-gia-va-ke-hoach-ap-dung/
    mindmap-level-4/
  profile/
    lumi-rd-profile/
```

## Cập nhật điều hướng

Khi thêm trang mới:

1. Tạo route dạng `folder/index.md` trong `docs/<track>/...`.
2. Giữ một H1 duy nhất trong trang.
3. Thêm link vào `docs/.vitepress/config.mts`.
4. Chạy `npm run build` để kiểm tra dead link và route.

## Base path khi deploy

Base path hiện tại:

```ts
const docsBase = "/";
```

Nếu deploy dưới subpath, cập nhật `docsBase` trong `docs/.vitepress/config.mts` và rà lại các redirect tuyệt đối trong `docs/vi/...`.

## Attribution

Theme scaffold dùng starter từ skill `build-vitepress-docs`, dựa trên source công khai MIT của `walkinglabs/learn-harness-engineering`. Nội dung giáo trình thuộc bộ tài liệu Lumi R&D trong workspace này.
