# Tư duy phản biện cho Lumi R&D

Repository này chứa giáo trình Markdown và website VitePress cho bộ học liệu “Tư duy phản biện cho Lumi R&D”.

## Nội dung chính

- Các file `.md` ở thư mục gốc là bản thảo nguồn của giáo trình.
- `vitepress-site/` là project VitePress dùng để xuất bản website.
- GitHub Pages được cấu hình với base path `/tu-duy-phan-bien/`.

## Chạy website local

```bash
cd vitepress-site
npm install
npm run dev
```

Mở:

```text
http://127.0.0.1:5173/tu-duy-phan-bien/vi/
```

## Build

```bash
cd vitepress-site
npm ci
npm run build
```

Output nằm tại:

```text
vitepress-site/docs/.vitepress/dist
```

