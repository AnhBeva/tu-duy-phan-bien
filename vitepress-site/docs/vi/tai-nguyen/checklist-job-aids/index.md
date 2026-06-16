# Checklist và job aids: Tư duy phản biện trong công việc R&D

## Cách dùng

Mỗi checklist dưới đây dùng cho một tình huống thật. Chọn checklist phù hợp, trả lời ngắn gọn, rồi đưa kết quả vào ticket, tài liệu, review hoặc trao đổi team.

## 1. Checklist review yêu cầu

Dùng khi đọc yêu cầu sản phẩm, user story, use case hoặc acceptance criteria.

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Người dùng hoặc đối tượng vận hành là ai? |  |  |
| Vấn đề thật hoặc nhu cầu thật là gì? |  |  |
| Từ nào còn mơ hồ: nhanh, ổn định, dễ dùng, thông minh, tối ưu, an toàn? |  |  |
| Tiêu chí nghiệm thu có đo/kiểm thử được không? |  |  |
| Luồng chính và luồng ngoại lệ đã rõ chưa? |  |  |
| Trạng thái hệ thống cần đồng bộ giữa thiết bị, controller, cloud và app đã rõ chưa? |  |  |
| Ràng buộc kỹ thuật, sản xuất, vận hành hoặc tiến độ nào ảnh hưởng yêu cầu? |  |  |
| QA có thể viết test case từ yêu cầu này chưa? |  |  |
| Giả định nguy hiểm nhất là gì? |  |  |
| Kiểm chứng nhỏ nhất trước khi triển khai sâu là gì? |  |  |

## 2. Checklist review thiết kế trải nghiệm hoặc kiểu dáng

Dùng khi review UI/UX, concept sản phẩm, thiết kế 3D hoặc kiểu dáng công nghiệp.

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Thiết kế đang giải quyết vấn đề người dùng nào? |  |  |
| Có bằng chứng nào cho lựa chọn trải nghiệm/hình thái này? |  |  |
| Điều gì đang là giả định về hành vi người dùng? |  |  |
| Thiết kế có tạo yêu cầu mới cho app, backend, firmware hoặc phần cứng không? |  |  |
| Concept có rủi ro cơ khí, lắp ráp, anten, tản nhiệt, kích thước hoặc sản xuất không? |  |  |
| Có trạng thái lỗi, loading, pending, timeout hoặc rollback chưa? |  |  |
| Phương án này được gì và mất gì so với phương án khác? |  |  |
| Prototype/kiểm chứng nhỏ nhất là gì? |  |  |

## 3. Checklist review bug

Dùng khi nhận bug report hoặc chuẩn bị sửa lỗi.

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Triệu chứng cụ thể là gì? |  |  |
| Tác động đến người dùng, sản phẩm hoặc tiến độ là gì? |  |  |
| Điều kiện tái hiện gồm thiết bị, phiên bản, môi trường, mạng, dữ liệu nào? |  |  |
| Lỗi xảy ra ở lớp nào hoặc đi qua những lớp nào? |  |  |
| Có log, video, ảnh, test result hoặc đo đạc không? |  |  |
| Nguyên nhân hiện tại là dữ kiện hay giả thuyết? |  |  |
| Có nguyên nhân thay thế nào cần loại trừ không? |  |  |
| Fix dự kiến xử lý nguyên nhân hay chỉ xử lý triệu chứng? |  |  |
| Test xác nhận và test chống hồi quy là gì? |  |  |
| Bài học nào cần cập nhật vào checklist/tài liệu/test case? |  |  |

## 4. Checklist review quyết định kỹ thuật

Dùng khi chọn kiến trúc, công nghệ, giao thức, API, state model, module dùng chung hoặc phương án tối ưu.

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Quyết định cần chốt là gì? |  |  |
| Mục tiêu sản phẩm/kỹ thuật của quyết định này là gì? |  |  |
| Tiêu chí chọn đã rõ chưa? |  |  |
| Có những phương án khả thi nào? |  |  |
| Bằng chứng ủng hộ từng phương án là gì? |  |  |
| Trade-off về hiệu năng, ổn định, bảo trì, timeline, năng lực team, chi phí là gì? |  |  |
| Team nào bị ảnh hưởng và cần thay đổi cách làm? |  |  |
| Rủi ro nếu quyết định sai là gì? |  |  |
| Có cần thử nghiệm phạm vi hẹp trước khi mở rộng không? |  |  |
| Điều kiện nào khiến cần xem lại quyết định? |  |  |

## 5. Checklist review rủi ro tích hợp

Dùng trước khi tích hợp nhiều lớp: thiết bị, firmware, controller, cloud, app và QA.

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Luồng end-to-end nào cần hoạt động? |  |  |
| Mỗi lớp sở hữu trạng thái/dữ liệu nào? |  |  |
| Điểm đồng bộ hoặc chuyển giao giữa các lớp là gì? |  |  |
| Timeout, retry, rollback, offline hoặc mất kết nối xử lý thế nào? |  |  |
| Log/trace có đủ để tìm nguyên nhân khi lỗi không? |  |  |
| Test tích hợp tối thiểu là gì? |  |  |
| Điều kiện tải cao hoặc nhiều thiết bị đã được kiểm chứng chưa? |  |  |
| Rủi ro nào nếu phát hiện muộn sẽ tốn kém nhất? |  |  |
| Ai cần xác nhận trước khi release? |  |  |
| Bằng chứng release-ready là gì? |  |  |

## 6. Mẫu câu phản biện an toàn

| Tình huống | Câu có thể dùng |
| --- | --- |
| Yêu cầu mơ hồ | "Phần này mình muốn làm rõ tiêu chí đo để các team hiểu cùng một nghĩa." |
| Giả định chưa kiểm chứng | "Mình đang xem đây là giả định. Ta có bằng chứng nào xác nhận chưa?" |
| Bằng chứng yếu | "Bằng chứng này hữu ích, nhưng có vẻ mới bao phủ một điều kiện. Điều kiện nào còn thiếu?" |
| Trade-off chưa rõ | "Phương án này được điểm nào và làm tăng rủi ro ở lớp nào?" |
| Quyết định ảnh hưởng nhiều team | "Ta có thể ghi lại tiêu chí chọn và điều kiện xem lại quyết định không?" |
| Rủi ro mơ hồ | "Ta có thể biến rủi ro này thành kiểm chứng nhỏ với tiêu chí pass/fail không?" |
| Bug khó tái hiện | "Trước khi gán nguyên nhân, mình đề xuất tách điều kiện tái hiện và log theo từng lớp." |

## 7. Mẫu ghi chú ngắn trong ticket

```text
Vấn đề:

Giả định hiện tại:

Bằng chứng đã có:

Bằng chứng còn thiếu:

Trade-off:

Rủi ro nếu sai:

Kiểm chứng tiếp theo:

Người/team cần phản hồi:
```

## 8. Checklist tự hỏi trước khi bấm "đồng ý"

- Tôi có hiểu vấn đề thật không, hay chỉ hiểu giải pháp được đề xuất?
- Tôi có biết giả định chính của phương án này không?
- Tôi có thấy bằng chứng nào đủ mạnh cho mức rủi ro không?
- Tôi có biết team nào sẽ chịu ảnh hưởng không?
- Tôi có biết khi nào quyết định này cần xem lại không?

Nếu câu trả lời là "chưa", hãy đặt thêm một câu hỏi phản biện rõ ràng trước khi đồng ý.
