/// <reference types="node" />
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsBase = "/tu-duy-phan-bien/";
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23B8533D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5h16" /><path d="M4 12h16" /><path d="M4 18.5h10" /><circle cx="17" cy="18.5" r="2.2" /><path d="M15.4 16.9 13.7 15.2" /><path d="M18.6 16.9 20.3 15.2" /></svg>';

const guideItems = [
  { text: "Tổng quan learning pack", link: "/vi/giao-trinh/" },
  { text: "Bài 1: Tư duy phản biện trong R&D", link: "/vi/giao-trinh/bai-1-tu-duy-phan-bien-trong-rd/" },
  { text: "Bài 2: Làm rõ vấn đề và giả định", link: "/vi/giao-trinh/bai-2-lam-ro-van-de-va-gia-dinh/" },
  { text: "Bài 3: Bằng chứng, lập luận và phản biện", link: "/vi/giao-trinh/bai-3-bang-chung-lap-luan-va-phan-bien/" },
  { text: "Bài 4: Ra quyết định liên-team", link: "/vi/giao-trinh/bai-4-ra-quyet-dinh-lien-team/" },
  { text: "Bài 5: Kiểm chứng rủi ro và học từ lỗi", link: "/vi/giao-trinh/bai-5-kiem-chung-rui-ro-va-hoc-tu-loi/" }
];

const practiceItems = [
  { text: "Case thực hành Lumi R&D", link: "/vi/thuc-hanh/case-thuc-hanh-lumi-rd/" },
  { text: "Workbook cá nhân", link: "/vi/thuc-hanh/workbook-ca-nhan/" }
];

const resourceItems = [
  { text: "Checklist và job aids", link: "/vi/tai-nguyen/checklist-job-aids/" },
  { text: "Rubric và kế hoạch áp dụng", link: "/vi/tai-nguyen/rubric-tu-danh-gia-va-ke-hoach-ap-dung/" }
];

const profileItems = [
  { text: "Profile Phòng R&D Lumi", link: "/vi/profile/lumi-rd-profile/" }
];

const nav = [
  { text: "Giáo trình", link: "/vi/giao-trinh/", activeMatch: "^/vi/giao-trinh/" },
  { text: "Thực hành", link: "/vi/thuc-hanh/case-thuc-hanh-lumi-rd/", activeMatch: "^/vi/thuc-hanh/" },
  { text: "Tài nguyên", link: "/vi/tai-nguyen/checklist-job-aids/", activeMatch: "^/vi/tai-nguyen/" },
  { text: "Profile R&D", link: "/vi/profile/lumi-rd-profile/", activeMatch: "^/vi/profile/" }
];

const sidebar = {
  "/vi/": [
    { text: "Giáo trình", items: guideItems },
    { text: "Thực hành", items: practiceItems },
    { text: "Tài nguyên", items: resourceItems },
    { text: "Profile R&D", items: profileItems }
  ]
};

const viThemeConfig = {
  nav,
  search: {
    provider: "local"
  },
  sidebar,
  outline: { level: [2, 3], label: "Mục lục trang" },
  docFooter: { prev: "Trang trước", next: "Trang sau" },
  lastUpdated: { text: "Cập nhật lần cuối" },
  returnToTopLabel: "Trở lên trên cùng",
  sidebarMenuLabel: "Menu",
  darkModeSwitchLabel: "Giao diện",
  lightModeSwitchTitle: "Chuyển sang chế độ sáng",
  darkModeSwitchTitle: "Chuyển sang chế độ tối"
};

export default withMermaid(
  defineConfig({
    title: "Tư duy phản biện cho Lumi R&D",
    description: "Giáo trình tư duy phản biện dành cho đội ngũ R&D Lumi.",
    base: docsBase,
    cleanUrls: true,
    lastUpdated: true,
    appearance: true,
    ignoreDeadLinks: false,
    srcExclude: ["README.md"],
    head: [
      ["link", { rel: "icon", type: "image/svg+xml", href: brandLogo }],
      ["meta", { name: "theme-color", content: "#FAF9F5" }]
    ],
    markdown: {
      theme: { light: "github-light", dark: "github-dark" },
      lineNumbers: false
    },
    locales: {
      root: {
        label: "Tiếng Việt",
        lang: "vi-VN",
        link: "/vi/",
        themeConfig: viThemeConfig
      }
    },
    themeConfig: {
      logo: brandLogo,
      search: {
        provider: "local"
      },
      siteTitle: "Tư duy phản biện",
      ...viThemeConfig
    },
    mermaid: {
      theme: "base",
      themeVariables: {
        primaryColor: "#B8533D",
        primaryTextColor: "#ffffff",
        primaryBorderColor: "#8F3E2E",
        lineColor: "#6F6A62",
        secondaryColor: "#F2EEE7",
        tertiaryColor: "#FBFAF7",
        fontFamily: "Inter, sans-serif"
      }
    }
  })
);
