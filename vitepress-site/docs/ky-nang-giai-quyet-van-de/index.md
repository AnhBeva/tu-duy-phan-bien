# Learning Pack: Kĩ năng giải quyết vấn đề cho Lumi R&D

## Đối tượng người học

Bộ tài liệu này dành cho đội ngũ R&D Lumi: Thiết kế, Cơ khí, Thiết kế Phần cứng, Firmware, Software, App, QA Tester, PM và BA. Bạn có thể dùng tài liệu khi làm rõ yêu cầu, xử lý bug, phân tích lỗi tích hợp, ra quyết định kỹ thuật, điều phối liên team, review chất lượng hoặc chuẩn hóa bài học sau phát hành.

## Vấn đề thật

Trong R&D, vấn đề thường không nằm gọn trong một file code, một bản vẽ, một test case hay một cuộc họp. Sản phẩm Lumi là hệ sinh thái gồm thiết bị vật lý, firmware, kết nối, bộ điều khiển trung tâm, software nền tảng, cloud/backend, app và trải nghiệm người dùng. Vì vậy, một triệu chứng nhỏ có thể xuất phát từ nhiều lớp khác nhau.

Bạn có thể gặp các tình huống này:

- App hiển thị trạng thái thiết bị chậm, nhưng chưa rõ do firmware gửi sự kiện muộn, controller xử lý chậm, cloud sync trễ, app cache sai hay test case chưa phủ mạng yếu.
- Thiết kế cơ khí đúng theo concept, nhưng khi phối hợp với phần cứng lại phát sinh vấn đề anten, tản nhiệt, không gian lắp ráp hoặc sản xuất mẫu.
- Một bug được fix nhanh ở một lớp, nhưng vài sprint sau xuất hiện lại trong kịch bản tích hợp khác.
- BA, PM, QA và các team kỹ thuật cùng nói về "vấn đề", nhưng mỗi bên đang hiểu một mục tiêu, một phạm vi và một tiêu chí nghiệm thu khác nhau.
- Nhóm tranh luận giải pháp theo kinh nghiệm hoặc vai trò, thay vì thống nhất bằng chứng, tiêu chí và trade-off.

Kĩ năng giải quyết vấn đề giúp bạn biến một tình huống mơ hồ thành chuỗi hành động rõ: gọi đúng vấn đề, kiểm chứng nguyên nhân, chọn phương án đủ tốt, phối hợp thực thi và học để vấn đề ít lặp lại.

## Mục tiêu học tập

Sau learning pack này, học viên có thể xử lý một vấn đề R&D trong bối cảnh sản phẩm Lumi bằng cách tạo problem statement, root-cause map, option matrix, experiment plan và learning note đạt tiêu chí: rõ vấn đề thật, rõ nguyên nhân có bằng chứng, rõ phương án và trade-off, rõ người phối hợp, rõ cách đo kết quả.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết phân biệt triệu chứng, vấn đề, nguyên nhân, ràng buộc, giả định, tiêu chí chọn và kết quả đo được. |
| Skill | Biết dùng problem map, 5 Whys, Ishikawa, assumption/risk log, option matrix, experiment plan và learning note. |
| Mindset | Chuyển từ "tìm giải pháp nhanh" sang "làm rõ vấn đề đủ tốt để chọn hành động đúng". |
| Behavior | Trước khi kết luận, bạn hỏi: vấn đề thật là gì, bằng chứng nào đang có, giả định nào nguy hiểm, team nào bị ảnh hưởng, cách đo kết quả là gì? |
| Evidence | Có ít nhất một bộ artifact hoàn chỉnh cho vấn đề thật: problem statement, root-cause map, option matrix, experiment plan và learning note. |

## Lộ trình học

| File | Năng lực chính | Artifact sau khi học |
| --- | --- | --- |
| `01-ban-chat-giai-quyet-van-de-trong-rd.md` | Hiểu bản chất giải quyết vấn đề trong hệ sinh thái R&D nhiều lớp | Problem statement và problem map |
| `02-lam-ro-van-de-va-nguyen-nhan-goc.md` | Tách triệu chứng, nguyên nhân, giả định và bằng chứng | Root-cause map và assumption/risk log |
| `03-tao-phuong-an-va-ra-quyet-dinh.md` | Tạo phương án, so sánh trade-off và chọn giải pháp | Option matrix và decision note |
| `04-thuc-thi-thu-nghiem-va-phoi-hop-lien-team.md` | Biến giải pháp thành thử nghiệm hoặc kế hoạch thực thi liên team | Experiment plan và coordination note |
| `05-hoc-tu-ket-qua-va-chuan-hoa-giai-phap.md` | Đo kết quả, học từ sai lệch và chuẩn hóa bài học | Learning note và standardization note |
| `06-case-thuc-hanh-lumi-rd.md` | Luyện tập qua case smart home/IoT nhiều lớp | Case worksheet đã điền |
| `07-workbook-ca-nhan.md` | Ghi chép và áp dụng từng công cụ vào việc thật | Workbook cá nhân |
| `08-checklist-job-aids.md` | Dùng checklist trong họp, review, xử lý bug và quyết định | Checklist áp dụng tại dự án |
| `09-rubric-tu-danh-gia-va-ke-hoach-ap-dung.md` | Tự đánh giá bằng bằng chứng và lập kế hoạch 14 ngày | Rubric và kế hoạch áp dụng |
| `10-mindmap-level-4.md` | Ôn toàn bộ cấu trúc kĩ năng giải quyết vấn đề | Mindmap level 4 |

## Khung tư duy chính

- Không nhảy ngay vào giải pháp khi chưa gọi đúng vấn đề.
- Không nhầm triệu chứng với nguyên nhân gốc.
- Không tranh luận bằng chức danh, cảm giác hoặc thói quen; dùng bằng chứng, tiêu chí và trade-off.
- Không xử lý vấn đề như lỗi của một team riêng lẻ khi nó thuộc hệ sinh thái thiết bị, firmware, controller, cloud, app, QA và vận hành.
- Không chỉ sửa xong; phải học được điều gì để vấn đề ít lặp lại hơn.

## Yếu tố tâm lý cần cảnh giác

| Yếu tố | Dấu hiệu trong R&D | Cách xử lý |
| --- | --- | --- |
| Thiên kiến xác nhận | Chỉ tìm log hoặc test ủng hộ giả thuyết đầu tiên | Viết ít nhất hai giả thuyết cạnh tranh và bằng chứng cần phân biệt |
| Neo suy nghĩ | Bị kẹt ở nguyên nhân được nêu đầu tiên trong cuộc họp | Tách "giả thuyết đầu tiên" khỏi "kết luận đã chứng minh" |
| Đổ lỗi cá nhân | Hỏi ai làm sai trước khi hỏi điều kiện nào tạo lỗi | Dùng ngôn ngữ "quy trình/tín hiệu/ràng buộc nào dẫn đến..." |
| Phòng thủ khi bị phản biện | Người nêu giải pháp bảo vệ cái tôi thay vì kiểm tra giả định | Phản biện trên tiêu chí, dữ liệu và rủi ro, không phán xét năng lực |
| Groupthink | Cả nhóm đồng ý nhanh vì ngại mâu thuẫn | Mời một người nêu "điều gì có thể khiến phương án này thất bại?" |
| Sunk cost | Tiếp tục phương án vì đã đầu tư nhiều | Đặt điều kiện dừng và tiêu chí xem lại từ đầu |

## Bằng chứng hoàn thành

Bạn hoàn thành learning pack khi có đủ:

- Một problem statement cho vấn đề R&D thật.
- Một problem map có triệu chứng, tác động, mục tiêu, phạm vi, ràng buộc và người liên quan.
- Một root-cause map có ít nhất ba nhánh nguyên nhân và bằng chứng đi kèm.
- Một assumption/risk log có cách kiểm chứng cho giả định rủi ro cao.
- Một option matrix so sánh ít nhất ba phương án.
- Một experiment plan hoặc execution note có người phối hợp và cách đo kết quả.
- Một learning note sau khi xử lý hoặc thử nghiệm.

## Hành động trong 48 giờ

Chọn một vấn đề đang mở trong dự án của bạn và điền ngắn gọn:

```text
Vấn đề đang thấy:
Triệu chứng dễ thấy:
Tác động đến người dùng/hệ thống/dự án:
Mục tiêu cần đạt:
Giả thuyết nguyên nhân số 1:
Giả thuyết nguyên nhân số 2:
Bằng chứng đang có:
Bằng chứng còn thiếu:
Team cần phối hợp:
Hành động nhỏ nhất có thể thử:
Cách đo kết quả:
```

