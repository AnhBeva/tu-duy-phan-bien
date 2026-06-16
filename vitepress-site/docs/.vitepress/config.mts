/// <reference types="node" />
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsBase = "/";
const brandLogo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23B8533D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5h16" /><path d="M4 12h16" /><path d="M4 18.5h10" /><circle cx="17" cy="18.5" r="2.2" /><path d="M15.4 16.9 13.7 15.2" /><path d="M18.6 16.9 20.3 15.2" /></svg>';

const criticalThinkingItems = [
  { text: "Tổng quan", link: "/tu-duy-phan-bien/" },
  { text: "Bài 1: Tư duy phản biện trong R&D", link: "/tu-duy-phan-bien/bai-1-tu-duy-phan-bien-trong-rd/" },
  { text: "Bài 2: Làm rõ vấn đề và giả định", link: "/tu-duy-phan-bien/bai-2-lam-ro-van-de-va-gia-dinh/" },
  { text: "Bài 3: Bằng chứng, lập luận và phản biện", link: "/tu-duy-phan-bien/bai-3-bang-chung-lap-luan-va-phan-bien/" },
  { text: "Bài 4: Ra quyết định liên-team", link: "/tu-duy-phan-bien/bai-4-ra-quyet-dinh-lien-team/" },
  { text: "Bài 5: Kiểm chứng rủi ro và học từ lỗi", link: "/tu-duy-phan-bien/bai-5-kiem-chung-rui-ro-va-hoc-tu-loi/" }
];

const criticalThinkingTools = [
  { text: "Case thực hành Lumi R&D", link: "/tu-duy-phan-bien/case-thuc-hanh-lumi-rd/" },
  { text: "Workbook cá nhân", link: "/tu-duy-phan-bien/workbook-ca-nhan/" },
  { text: "Checklist và job aids", link: "/tu-duy-phan-bien/checklist-job-aids/" },
  { text: "Rubric và kế hoạch áp dụng", link: "/tu-duy-phan-bien/rubric-tu-danh-gia-va-ke-hoach-ap-dung/" }
];

const systemsThinkingItems = [
  { text: "Tổng quan", link: "/tu-duy-he-thong/" },
  { text: "Bài 1: Bản chất tư duy hệ thống", link: "/tu-duy-he-thong/bai-1-ban-chat-tu-duy-he-thong/" },
  { text: "Bài 2: Nhìn thấy cấu trúc ẩn", link: "/tu-duy-he-thong/bai-2-nhin-thay-cau-truc-an/" },
  { text: "Bài 3: Vòng phản hồi và hành vi hệ thống", link: "/tu-duy-he-thong/bai-3-vong-lap-phan-hoi-va-hanh-vi-he-thong/" },
  { text: "Bài 4: Bẫy hệ thống và cơ hội can thiệp", link: "/tu-duy-he-thong/bai-4-bay-he-thong-va-co-hoi-can-thiep/" },
  { text: "Bài 5: Điểm bẩy leverage points", link: "/tu-duy-he-thong/bai-5-diem-bay-leverage-points/" }
];

const systemsThinkingTools = [
  { text: "Case thực hành Lumi R&D", link: "/tu-duy-he-thong/case-thuc-hanh-lumi-rd/" },
  { text: "Workbook cá nhân", link: "/tu-duy-he-thong/workbook-ca-nhan/" },
  { text: "Checklist và job aids", link: "/tu-duy-he-thong/checklist-job-aids/" },
  { text: "Rubric và kế hoạch áp dụng", link: "/tu-duy-he-thong/rubric-tu-danh-gia-va-ke-hoach-ap-dung/" }
];

const problemSolvingItems = [
  { text: "Tổng quan", link: "/ky-nang-giai-quyet-van-de/" },
  { text: "Bài 1: Bản chất giải quyết vấn đề", link: "/ky-nang-giai-quyet-van-de/bai-1-ban-chat-giai-quyet-van-de-trong-rd/" },
  { text: "Bài 2: Vấn đề và nguyên nhân gốc", link: "/ky-nang-giai-quyet-van-de/bai-2-lam-ro-van-de-va-nguyen-nhan-goc/" },
  { text: "Bài 3: Phương án và quyết định", link: "/ky-nang-giai-quyet-van-de/bai-3-tao-phuong-an-va-ra-quyet-dinh/" },
  { text: "Bài 4: Thử nghiệm và phối hợp liên-team", link: "/ky-nang-giai-quyet-van-de/bai-4-thuc-thi-thu-nghiem-va-phoi-hop-lien-team/" },
  { text: "Bài 5: Học và chuẩn hóa giải pháp", link: "/ky-nang-giai-quyet-van-de/bai-5-hoc-tu-ket-qua-va-chuan-hoa-giai-phap/" }
];

const problemSolvingTools = [
  { text: "Case thực hành Lumi R&D", link: "/ky-nang-giai-quyet-van-de/case-thuc-hanh-lumi-rd/" },
  { text: "Workbook cá nhân", link: "/ky-nang-giai-quyet-van-de/workbook-ca-nhan/" },
  { text: "Checklist và job aids", link: "/ky-nang-giai-quyet-van-de/checklist-job-aids/" },
  { text: "Rubric và kế hoạch áp dụng", link: "/ky-nang-giai-quyet-van-de/rubric-tu-danh-gia-va-ke-hoach-ap-dung/" }
];

const problemSolvingReview = [
  { text: "Mindmap level 4", link: "/ky-nang-giai-quyet-van-de/mindmap-level-4/" }
];

const profileItems = [
  { text: "Profile Phòng R&D Lumi", link: "/profile/lumi-rd-profile/" }
];

const nav = [
  { text: "Trang chủ", link: "/" },
  { text: "Tư duy phản biện", link: "/tu-duy-phan-bien/", activeMatch: "^/tu-duy-phan-bien/" },
  { text: "Tư duy hệ thống", link: "/tu-duy-he-thong/", activeMatch: "^/tu-duy-he-thong/" },
  { text: "Giải quyết vấn đề", link: "/ky-nang-giai-quyet-van-de/", activeMatch: "^/ky-nang-giai-quyet-van-de/" },
  { text: "Profile R&D", link: "/profile/lumi-rd-profile/", activeMatch: "^/profile/" }
];

const sidebar = {
  "/tu-duy-phan-bien/": [
    { text: "Tư duy phản biện", items: criticalThinkingItems },
    { text: "Thực hành và công cụ", items: criticalThinkingTools },
    { text: "Bối cảnh", items: profileItems }
  ],
  "/tu-duy-he-thong/": [
    { text: "Tư duy hệ thống", items: systemsThinkingItems },
    { text: "Thực hành và công cụ", items: systemsThinkingTools },
    { text: "Bối cảnh", items: profileItems }
  ],
  "/ky-nang-giai-quyet-van-de/": [
    { text: "Giáo trình", items: problemSolvingItems },
    { text: "Thực hành và công cụ", items: problemSolvingTools },
    { text: "Ôn tập", items: problemSolvingReview },
    { text: "Bối cảnh", items: profileItems }
  ],
  "/profile/": [
    { text: "Profile R&D", items: profileItems },
    { text: "Giáo trình", items: [
      { text: "Tư duy phản biện", link: "/tu-duy-phan-bien/" },
      { text: "Tư duy hệ thống", link: "/tu-duy-he-thong/" },
      { text: "Kĩ năng giải quyết vấn đề", link: "/ky-nang-giai-quyet-van-de/" }
    ] }
  ],
  "/vi/": [
    { text: "Redirect cũ", items: [
      { text: "Về trang chủ", link: "/" },
      { text: "Tư duy phản biện", link: "/tu-duy-phan-bien/" }
    ] }
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
    title: "Học viện Tư duy Lumi R&D",
    description: "Cổng giáo trình tư duy phản biện, tư duy hệ thống và kĩ năng giải quyết vấn đề dành cho đội ngũ R&D Lumi.",
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
    lang: "vi-VN",
    themeConfig: {
      logo: brandLogo,
      siteTitle: "Học viện Tư duy",
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
