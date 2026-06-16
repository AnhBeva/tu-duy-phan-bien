# Bài 1: Nhìn vấn đề như một hệ thống, không như một sự kiện rời rạc

## Đối tượng người học

Đội ngũ R&D Lumi tham gia phát triển sản phẩm smart home, smart lighting, AI và IoT qua nhiều lớp: thiết bị vật lý, firmware, kết nối, controller, software nền tảng, cloud/backend, app, QA và trải nghiệm người dùng.

## 1. Vấn đề thật

Một tính năng điều khiển thiết bị bị phản ánh là "lúc được lúc không". App thấy trạng thái không cập nhật đúng. Backend thấy API trả đúng. Firmware thấy thiết bị đã gửi sự kiện. QA thấy lỗi khó tái hiện. PM thấy tiến độ bị kéo dài.

Nếu nhìn theo sự kiện, nhóm dễ hỏi: lỗi ở team nào? Nếu nhìn theo hệ thống, nhóm hỏi: các phần tử đang liên kết thế nào, mục đích chung là gì, ranh giới phân tích đang ở đâu, và cấu trúc nào khiến lỗi khó nhìn thấy?

## 2. Mục tiêu học tập

Sau bài này, học viên có thể nhận diện một vấn đề R&D như một hệ thống bằng cách tạo system map gồm phần tử, liên kết, mục đích và ranh giới đạt tiêu chí: người khác đọc vào hiểu hệ thống đang được phân tích, phần nào nằm trong/ngoài phạm vi và mục tiêu thật cần tối ưu.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Hệ thống gồm phần tử, liên kết và mục đích; ranh giới hệ thống là lựa chọn phân tích. |
| Skill | Vẽ system map cho một yêu cầu, bug, quy trình hoặc quyết định liên team. |
| Mindset | Không vội quy lỗi cho một điểm; tìm cấu trúc tạo ra hành vi. |
| Behavior | Khi phân tích, bạn nói rõ đang xét những lớp nào, ai liên quan, luồng thông tin nào và mục tiêu thật là gì. |
| Evidence | Một system map một trang cho vấn đề thật. |

## 3. Bản chất

Hệ thống không chỉ là tập hợp nhiều phần. Hệ thống là một nhóm phần tử được liên kết theo cách tạo ra hành vi chung.

Trong Lumi R&D, một hệ thống có thể là:

- Một sản phẩm IoT: thiết bị, firmware, controller, cloud, app, người dùng, môi trường mạng.
- Một quy trình release: requirement, development, test, bug triage, sign-off, deployment.
- Một cơ chế phối hợp: BA, PM, các team kỹ thuật, QA, thông tin, quyền quyết định, KPI.

Ba câu hỏi nền:

| Thành phần | Câu hỏi | Ví dụ Lumi R&D |
| --- | --- | --- |
| Phần tử | Có những thành phần nào? | Thiết bị, hub, firmware, service Rust, app Flutter, QA, người dùng |
| Liên kết | Các phần ảnh hưởng nhau bằng gì? | Event, API, log, ticket, meeting, acceptance criteria, dependency |
| Mục đích | Hệ thống đang thật sự tối ưu điều gì? | Trải nghiệm ổn định, đóng task nhanh, giảm lỗi, giữ tiến độ, giảm tải support |

Mục đích quan trọng nhất vì hệ thống thường tự tổ chức quanh mục đích thật, không chỉ mục đích được viết trong tài liệu.

## 4. Vì sao quan trọng

Khi thiếu tư duy hệ thống, nhóm dễ:

- Tối ưu một lớp nhưng làm tăng rủi ro lớp khác.
- Xử lý triệu chứng nhanh nhưng không làm thay đổi nguyên nhân cấu trúc.
- Tranh luận về người chịu trách nhiệm thay vì nhìn luồng thông tin và cơ chế phối hợp.
- Đo sai chỉ báo, khiến hệ thống học cách đạt số đẹp thay vì kết quả tốt.

Khi dùng tốt, nhóm có thể:

- Nhìn vấn đề xuyên lớp thay vì đứt đoạn theo team.
- Làm rõ ranh giới phân tích để tránh tranh luận lan man.
- Thấy mục tiêu thật đang chi phối hành vi.
- Chọn điểm can thiệp phù hợp hơn.

## 5. Hiểu lầm phổ biến

1. **"Hệ thống là thứ rất lớn."**  
   Thực tế: một ticket bug cũng có thể là hệ thống nhỏ nếu có nhiều phần tử, liên kết và mục đích.

2. **"Vẽ càng nhiều phần tử càng tốt."**  
   Thực tế: bản đồ tốt không phải bản đồ đầy đủ nhất, mà là bản đồ giúp ra quyết định tốt hơn.

3. **"Mục đích hệ thống là mục tiêu ghi trên tài liệu."**  
   Thực tế: mục đích thật thường lộ ra qua hành vi lặp lại và thứ được thưởng/phạt.

4. **"Ranh giới hệ thống là khách quan."**  
   Thực tế: ranh giới là lựa chọn. Nếu chọn ranh giới quá hẹp, bạn bỏ sót nguyên nhân; quá rộng, bạn không hành động được.

## 6. Cách nghĩ đúng

Đừng bắt đầu bằng câu hỏi "ai sai?". Hãy bắt đầu bằng câu hỏi "hệ thống đang được thiết kế để tạo ra hành vi gì?".

Một lỗi lặp lại là tín hiệu rằng hệ thống hiện tại đang có một cấu trúc lặp lại. Nếu bug chỉ xuất hiện một lần, bạn có thể cần sửa điểm lỗi. Nếu bug xuất hiện theo mẫu, bạn cần nhìn hệ thống.

## 7. Cách làm: System map 4 phần

| Bước | Việc cần làm | Câu hỏi kiểm tra |
| --- | --- | --- |
| 1. Chọn hành vi cần hiểu | Nêu hiện tượng hoặc mẫu hình đang gây vấn đề | Điều gì đang lặp lại hoặc ngày càng tệ? |
| 2. Xác định ranh giới | Nói rõ lớp, team, người dùng, môi trường được đưa vào | Phần nào đang để ngoài và vì sao? |
| 3. Liệt kê phần tử | Chọn phần tử có ảnh hưởng đến hành vi cần hiểu | Nếu bỏ phần tử này, phân tích có sai không? |
| 4. Vẽ liên kết | Ghi luồng thông tin, quyết định, trạng thái, dependency | Phần này ảnh hưởng phần kia bằng cơ chế nào? |
| 5. Kiểm tra mục đích | So sánh mục tiêu tuyên bố và mục đích thật qua hành vi | Hệ thống đang thưởng cho hành vi nào? |

Mẫu ghi nhanh:

```text
Hành vi cần hiểu:
Ranh giới phân tích:
Phần tử chính:
Liên kết chính:
Mục tiêu tuyên bố:
Mục đích thật qua hành vi:
Điểm chưa chắc chắn:
```

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Tính năng đồng bộ trạng thái đèn trong hệ smart home thường chậm ở một số nhà có nhiều thiết bị. |
| Wrong response | App yêu cầu backend tối ưu API; backend yêu cầu firmware gửi event nhanh hơn; firmware cho rằng mạng mesh mới là nguyên nhân; QA tạo thêm test case nhưng lỗi vẫn khó tái hiện. |
| Root cause | Nhóm nhìn vấn đề theo từng lớp, chưa có system map end-to-end: số thiết bị, mesh network, gateway, queue xử lý, cloud sync, app cache, điều kiện mạng và hành vi người dùng. |
| Better response | Vẽ system map với ranh giới từ thiết bị đến app, xác định luồng trạng thái, điểm đo độ trễ, ai sở hữu log, mục tiêu thật là "trạng thái người dùng thấy đủ đúng trong ngữ cảnh sử dụng", không chỉ "API trả nhanh". |
| Takeaway | Khi hành vi đi qua nhiều lớp, ranh giới phân tích quyết định chất lượng kết luận. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn một bug, yêu cầu hoặc quyết định có ít nhất 3 team/lớp liên quan. |
| Giải thích | Viết vì sao nhìn theo một team riêng lẻ có thể dẫn đến kết luận sai. |
| Áp dụng nhỏ | Điền mẫu system map 4 phần cho tình huống đã chọn. |
| Mô phỏng | Viết một đoạn 5-7 câu đề xuất nhóm mở rộng ranh giới phân tích mà không quy lỗi. |
| Áp dụng thật | Đưa system map vào ticket, tài liệu yêu cầu hoặc ghi chú review kỹ thuật. |
| Cải thiện | Sau phản hồi, thêm/bớt phần tử để bản đồ giúp ra quyết định rõ hơn. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn phân biệt được sự kiện đơn lẻ và vấn đề hệ thống | Chỉ ra 3 dấu hiệu cho thấy vấn đề cần nhìn hệ thống |
| 2. Giải thích | Bạn giải thích được phần tử, liên kết, mục đích, ranh giới | Mô tả được 4 phần trong một ví dụ R&D |
| 3. Áp dụng | Bạn vẽ được system map đơn giản | Có system map cho một vấn đề thật |
| 4. Linh hoạt | Bạn điều chỉnh ranh giới theo mục tiêu phân tích | Có bản đồ trước/sau và lý do thay đổi ranh giới |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một vấn đề R&D đang mở và tạo system map một trang.
- Bằng chứng cần thu thập: tên ticket/tài liệu, bản đồ 4 phần, một điểm còn chưa chắc chắn.
- Điều chỉnh lần sau: ranh giới đang quá hẹp hay quá rộng? Mục đích thật có khác mục tiêu tuyên bố không?

