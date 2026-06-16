# Learning Pack: Tư duy phản biện cho Lumi R&D

## Đối tượng người học

Bộ tài liệu này dành cho đội ngũ R&D Lumi: Thiết kế, Cơ khí, Thiết kế Phần cứng, Firmware, Software, App, QA Tester, PM và BA. Bạn có thể dùng tài liệu khi đang làm rõ yêu cầu, thiết kế giải pháp, xử lý lỗi, review quyết định kỹ thuật, kiểm thử tích hợp hoặc chuẩn bị phát hành sản phẩm.

## Vấn đề thật

Trong R&D, nhiều vấn đề không thất bại vì thiếu năng lực kỹ thuật, mà vì nhóm đi quá nhanh qua bước nghĩ rõ:

- Yêu cầu nghe có vẻ hợp lý nhưng chưa rõ mục tiêu, tiêu chí nghiệm thu hoặc người dùng thật.
- Mỗi team tối ưu đúng phần của mình nhưng hệ thống tích hợp lại phát sinh lỗi.
- Một giả định kỹ thuật chưa được kiểm chứng trở thành quyết định lớn.
- Bug được sửa theo triệu chứng nhưng nguyên nhân gốc vẫn còn.
- Tranh luận giữa các team bị kéo về ý kiến cá nhân thay vì bằng chứng, rủi ro và trade-off.

Tư duy phản biện giúp bạn chậm lại đúng chỗ để đi nhanh hơn ở phần triển khai.

## Mục tiêu học tập

Sau learning pack này, học viên có thể phân tích và phản biện một vấn đề R&D trong bối cảnh smart home, smart lighting, AI hoặc IoT bằng cách tạo bản đồ vấn đề, nhật ký giả định, bảng bằng chứng, quyết định có trade-off và kế hoạch kiểm chứng đạt tiêu chí: rõ vấn đề, rõ bằng chứng, rõ rủi ro, rõ hành động tiếp theo.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết bản chất của tư duy phản biện trong R&D: làm rõ vấn đề, kiểm tra giả định, đánh giá bằng chứng, cân nhắc trade-off và học từ lỗi. |
| Skill | Biết dùng checklist, worksheet và rubric để phân tích yêu cầu, thiết kế, bug, rủi ro và quyết định liên-team. |
| Mindset | Chuyển từ "tôi nghĩ đúng" sang "điều gì chứng minh cách nghĩ này đủ tốt trong bối cảnh hiện tại?". |
| Behavior | Đặt câu hỏi rõ hơn, ghi lại giả định, yêu cầu bằng chứng, nêu trade-off và đề xuất kiểm chứng nhỏ trước khi khóa quyết định lớn. |
| Evidence | Có ít nhất một artifact hoàn chỉnh: bản đồ vấn đề, assumption log, evidence table, decision note hoặc post-incident learning note. |

## Lộ trình học

| File | Năng lực chính | Artifact sau khi học |
| --- | --- | --- |
| `01-ban-chat-tu-duy-phan-bien-trong-rd.md` | Hiểu tư duy phản biện trong R&D là gì và dùng khi nào | Bản đồ 5 câu hỏi nền |
| `02-lam-ro-van-de-va-gia-dinh.md` | Tách triệu chứng, nguyên nhân, giả định, ràng buộc | Problem map và assumption log |
| `03-bang-chung-lap-luan-va-phan-bien.md` | Xây lập luận, đánh giá bằng chứng, phản biện an toàn | Evidence table và phản hồi phản biện |
| `04-ra-quyet-dinh-lien-team.md` | Ra quyết định khi có trade-off giữa nhiều lớp hệ thống | Decision note liên-team |
| `05-kiem-chung-rui-ro-va-hoc-tu-loi.md` | Biến rủi ro mơ hồ thành thử nghiệm nhỏ và bài học | Risk experiment và learning note |
| `06-case-thuc-hanh-lumi-rd.md` | Luyện tập qua case gần bối cảnh Lumi R&D | Case worksheet đã điền |
| `07-workbook-ca-nhan.md` | Ghi chép và áp dụng từng công cụ vào việc thật | Workbook cá nhân |
| `08-checklist-job-aids.md` | Dùng checklist trong review công việc hằng ngày | Checklist áp dụng tại dự án |
| `09-rubric-tu-danh-gia-va-ke-hoach-ap-dung.md` | Tự đánh giá bằng bằng chứng và lập kế hoạch áp dụng | Rubric và kế hoạch 14 ngày |

## Cách dùng bộ tài liệu

1. Đọc từng bài theo thứ tự từ `01` đến `05`.
2. Sau mỗi bài, điền phần tương ứng trong `07-workbook-ca-nhan.md`.
3. Chọn ít nhất hai case trong `06-case-thuc-hanh-lumi-rd.md` để luyện tập.
4. Dùng `08-checklist-job-aids.md` trong một tình huống công việc thật.
5. Tự chấm bằng `09-rubric-tu-danh-gia-va-ke-hoach-ap-dung.md`.

## Nguyên tắc học

- Học bằng artifact, không học bằng cảm giác đã hiểu.
- Mỗi khái niệm phải gắn với một quyết định, một bug, một yêu cầu, một thiết kế hoặc một rủi ro thật.
- Phản biện tốt không làm người khác mất mặt; phản biện tốt làm giả định, bằng chứng và trade-off trở nên nhìn thấy được.
- Nếu chưa có bằng chứng, hãy nói rõ đó là giả định.
- Nếu chưa thể quyết định chắc chắn, hãy thiết kế kiểm chứng nhỏ nhất có thể.

## Bằng chứng hoàn thành

Bạn hoàn thành learning pack khi có đủ các bằng chứng sau:

- Một bản đồ vấn đề cho tình huống R&D thật.
- Một nhật ký ít nhất 5 giả định, trong đó có mức độ rủi ro và cách kiểm chứng.
- Một bảng bằng chứng dùng để đánh giá yêu cầu, bug hoặc quyết định kỹ thuật.
- Một quyết định liên-team có nêu trade-off, tiêu chí chọn và điều kiện xem lại.
- Một ghi chú học từ lỗi hoặc tắc nghẽn có hành động cải thiện cụ thể.

## Hành động trong 48 giờ

Chọn một việc đang diễn ra trong dự án của bạn và hoàn thành một trong ba artifact sau:

- Problem map cho một yêu cầu chưa rõ.
- Assumption log cho một quyết định kỹ thuật đang được thảo luận.
- Evidence table cho một bug hoặc rủi ro tích hợp.

Ghi lại đường link, tên ticket, tên tài liệu hoặc nội dung tóm tắt để dùng làm bằng chứng tự đánh giá.
