# Bài 3: Vòng phản hồi tạo ra hành vi hệ thống

## 1. Vấn đề thật

Khi app hiển thị trạng thái chậm, nhóm tăng tần suất đồng bộ. Ban đầu người dùng thấy tốt hơn. Sau đó backend tải cao hơn, phản hồi chậm hơn, app retry nhiều hơn, tải lại tăng. Cách sửa ban đầu trở thành một phần của vấn đề.

Đây là dấu hiệu của feedback loop: hành động của hệ thống quay lại ảnh hưởng chính điều kiện tạo ra hành động đó.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể nhận diện vòng phản hồi trong một vấn đề R&D bằng cách tạo feedback loop map đạt tiêu chí: chỉ ra biến chính, quan hệ tăng/giảm, loại vòng cân bằng hoặc khuếch đại, độ trễ và hành vi dự kiến theo thời gian.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Biết vòng cân bằng, vòng khuếch đại, quan hệ nhân quả vòng và độ trễ trong loop. |
| Skill | Vẽ causal loop đơn giản cho bug, quyết định kiến trúc hoặc cơ chế phối hợp. |
| Mindset | Không xem nguyên nhân chỉ là một đường thẳng; tìm tác động quay lại. |
| Behavior | Khi đề xuất can thiệp, bạn hỏi can thiệp này sẽ quay lại ảnh hưởng hệ thống ra sao. |
| Evidence | Một feedback loop map có giải thích hành vi hệ thống. |

## 3. Bản chất

Feedback loop là chuỗi ảnh hưởng khép kín. Một biến thay đổi, tác động đến biến khác, rồi sau một vòng lại ảnh hưởng biến ban đầu.

Có hai loại cơ bản:

| Loại vòng | Bản chất | Ví dụ |
| --- | --- | --- |
| Vòng cân bằng | Kéo hệ thống về mục tiêu, ngưỡng hoặc trạng thái mong muốn | Nhiệt độ cao thì điều hòa chạy mạnh hơn, nhiệt độ giảm |
| Vòng khuếch đại | Thay đổi tự nuôi lớn chính nó | Tải cao làm retry tăng, retry làm tải càng cao |

Trong R&D, một hệ thống thường có nhiều loop cùng lúc. Hành vi thật là kết quả của các loop đang kéo hệ thống theo các hướng khác nhau.

## 4. Vì sao quan trọng

Nếu không thấy feedback loop, nhóm dễ:

- Can thiệp vào triệu chứng và làm loop xấu mạnh hơn.
- Nhầm giải pháp ngắn hạn với giải pháp bền vững.
- Bỏ qua tác dụng phụ quay lại sau một độ trễ.
- Tranh luận tuyến tính trong khi vấn đề vận hành theo vòng.

Thấy loop giúp nhóm dự đoán hành vi: ổn định, dao động, tăng tốc, quá tải, bùng nổ, suy giảm hay phục hồi.

## 5. Hiểu lầm phổ biến

1. **"Một vấn đề có một nguyên nhân gốc duy nhất."**  
   Nhiều vấn đề hệ thống có nhiều loop cùng tạo ra hành vi.

2. **"Feedback luôn là phản hồi của người dùng."**  
   Feedback trong hệ thống là mọi tín hiệu quay lại ảnh hưởng hành vi, gồm log, KPI, lỗi, tải, niềm tin, deadline.

3. **"Vòng cân bằng luôn tốt."**  
   Vòng cân bằng có thể giữ hệ thống ở trạng thái kém nếu mục tiêu hoặc ngưỡng sai.

4. **"Vòng khuếch đại luôn xấu."**  
   Vòng khuếch đại có thể tạo tăng trưởng tốt, như tri thức chung tăng làm review tốt hơn, review tốt làm tri thức chung tăng.

## 6. Cách nghĩ đúng

Khi bạn nghe "càng... càng...", hãy nghi ngờ có loop.

- Càng nhiều bug cuối sprint, càng nhiều fix nhanh.
- Càng nhiều fix nhanh, càng nhiều nợ kỹ thuật.
- Càng nhiều nợ kỹ thuật, càng nhiều bug cuối sprint.

Loop không nói ai sai. Loop nói hệ thống đang tự củng cố hành vi nào.

## 7. Cách làm: Feedback loop map

Mẫu vẽ bằng chữ:

```text
Biến A tăng -> Biến B tăng/giảm -> Biến C tăng/giảm -> quay lại làm Biến A tăng/giảm
Loại vòng: cân bằng/khuếch đại
Độ trễ:
Hành vi dự kiến:
Điểm can thiệp:
```

Ký hiệu đơn giản:

| Ký hiệu | Nghĩa |
| --- | --- |
| A +> B | A tăng làm B tăng, hoặc A giảm làm B giảm |
| A -> B | A tăng làm B giảm, hoặc A giảm làm B tăng |
| Delay | Tác động đến muộn |
| R | Reinforcing loop, vòng khuếch đại |
| B | Balancing loop, vòng cân bằng |

Checklist:

| Câu hỏi | Câu trả lời tốt |
| --- | --- |
| Biến có thay đổi được theo thời gian không? | Có tăng/giảm, mạnh/yếu, nhiều/ít |
| Quan hệ có cơ chế rõ không? | Nói được vì sao A ảnh hưởng B |
| Loop có quay lại biến ban đầu không? | Có đường tác động khép kín |
| Có độ trễ không? | Nêu rõ trễ ở đâu và hậu quả |
| Có thể dự đoán hành vi không? | Tăng tốc, dao động, ổn định, suy giảm |

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Gần release, bug tăng. Nhóm chọn fix nhanh để kịp deadline. |
| Wrong response | Chỉ tăng giờ làm và cắt giảm review/test để đóng bug nhanh hơn. |
| Root cause | Vòng khuếch đại: áp lực deadline tăng -> fix nhanh tăng -> nợ kỹ thuật tăng -> bug mới/reopen tăng -> áp lực deadline tăng. Độ trễ nằm ở chỗ nợ kỹ thuật không gây đau ngay. |
| Better response | Tách loop ngắn hạn và dài hạn: vẫn xử lý bug chặn release, nhưng đặt ngưỡng bắt buộc cho regression test, ghi nợ kỹ thuật, chốt thời điểm trả nợ, thêm review contract cho lỗi xuyên lớp. |
| Takeaway | Nếu không làm yếu vòng khuếch đại xấu, hệ thống sẽ cần nhiều nỗ lực hơn để tạo cùng một kết quả. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Viết 3 câu "càng... càng..." trong dự án hiện tại. |
| Giải thích | Chọn một câu và giải thích cơ chế tác động. |
| Áp dụng nhỏ | Vẽ feedback loop map bằng chữ. |
| Mô phỏng | Đánh dấu độ trễ và dự đoán hành vi trong 2-4 tuần tới nếu không can thiệp. |
| Áp dụng thật | Đề xuất một can thiệp làm yếu loop xấu hoặc tăng loop tốt. |
| Cải thiện | Sau một chu kỳ, kiểm tra loop có thay đổi qua bằng chứng nào. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn thấy được quan hệ nhân quả vòng | Có 3 câu "càng... càng..." |
| 2. Giải thích | Bạn phân biệt vòng cân bằng và khuếch đại | Có ví dụ đúng cho mỗi loại |
| 3. Áp dụng | Bạn vẽ được feedback loop map | Có loop map cho vấn đề thật |
| 4. Linh hoạt | Bạn dự đoán tác dụng phụ và độ trễ | Có can thiệp kèm rủi ro phản hồi ngược |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một hành vi lặp lại và vẽ ít nhất một loop.
- Bằng chứng cần thu thập: loop map, loại loop, độ trễ, một điểm can thiệp.
- Điều chỉnh lần sau: can thiệp của bạn đang tác động vào biến nào trong loop?

