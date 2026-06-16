# Bài 4: Thực thi bằng thử nghiệm nhỏ và phối hợp liên team

## Vấn đề thật

Một quyết định tốt vẫn có thể thất bại khi chuyển sang thực thi. Lý do thường không phải là thiếu cố gắng, mà là thiếu thử nghiệm nhỏ, thiếu owner rõ, thiếu điểm đo, thiếu bàn giao giữa team hoặc thiếu kịch bản kiểm chứng end-to-end.

Trong R&D Lumi, giải pháp thường chạm nhiều lớp. Một thay đổi firmware có thể ảnh hưởng app, QA, controller, cloud và trải nghiệm người dùng. Một thay đổi cơ khí có thể ảnh hưởng phần cứng, sản xuất mẫu và test độ bền. Vì vậy, thực thi không chỉ là chia task; thực thi là biến giả thuyết giải pháp thành kết quả có thể đo.

## Mục tiêu học tập

Sau bài này, học viên có thể chuyển một phương án thành experiment plan hoặc execution note liên team đạt tiêu chí: có giả thuyết, phạm vi thử, owner, dependency, dữ liệu cần thu, tiêu chí thành công, rủi ro và cách cập nhật cho các bên liên quan.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết khác nhau giữa triển khai lớn, thử nghiệm nhỏ, spike, prototype và validation test. |
| Skill | Viết experiment plan, coordination note và update ngắn cho team liên quan. |
| Mindset | Chuyển từ "giao việc là xong" sang "thiết kế cách học nhanh nhất từ thực tế". |
| Behavior | Khi bắt đầu thực thi, bạn làm rõ ai làm gì, phụ thuộc vào ai, đo bằng gì và khi nào cập nhật. |
| Evidence | Có experiment plan hoặc execution note cho một vấn đề thật. |

## Bản chất

Thực thi trong môi trường bất định là quá trình học có kiểm soát. Nếu vấn đề chưa chắc, nguyên nhân chưa chắc hoặc giải pháp chưa chắc, cách làm tốt là giảm kích thước rủi ro bằng thử nghiệm nhỏ.

Một thử nghiệm tốt trả lời một câu hỏi cụ thể:

```text
Nếu chúng ta làm [hành động], trong [phạm vi], thì [kết quả đo được] sẽ thay đổi theo [hướng mong muốn], vì [giả thuyết].
```

## Vì sao quan trọng

Thử nghiệm nhỏ giúp:

- Phát hiện sai giả định trước khi đổi kiến trúc, thiết kế hoặc quy trình lớn.
- Giảm tranh luận bằng dữ liệu.
- Giúp QA biết cần kiểm chứng điều gì.
- Giúp PM thấy rủi ro và dependency sớm.
- Giúp BA/Design/Engineering cùng hiểu tiêu chí thành công.
- Giảm khả năng một team tối ưu cục bộ làm hỏng trải nghiệm end-to-end.

## Hiểu lầm phổ biến

1. "Thử nghiệm nhỏ là làm tạm."  
   Thử nghiệm nhỏ không phải làm ẩu. Nó là hành động có phạm vi hẹp để học nhanh.

2. "Chỉ kỹ thuật mới cần thử nghiệm."  
   BA có thể thử nghiệm cách diễn đạt yêu cầu, Design có thể prototype, QA có thể test kịch bản, PM có thể thử cách giảm dependency.

3. "Có owner task là đủ."  
   Với vấn đề liên team, cần owner kết quả, owner dữ liệu và owner quyết định tiếp theo.

4. "Update nhiều là tốt."  
   Update tốt là ngắn, đúng người, đúng thời điểm, nêu rõ thay đổi về rủi ro hoặc quyết định.

## Cách nghĩ đúng

Hãy thực thi theo chu kỳ:

```text
Giả thuyết -> Thử nhỏ -> Đo -> Học -> Quyết định tiếp
```

Script phối hợp:

- "Mục tiêu của thử nghiệm này là loại trừ/ủng hộ giả thuyết nào?"
- "Team nào cần biết trước để tránh tác động phụ?"
- "QA cần thấy bằng chứng gì để xác nhận?"
- "Nếu kết quả trái dự đoán, quyết định tiếp theo là gì?"
- "Có phần nào cần rollback hoặc giới hạn phạm vi không?"

## Cách làm: Experiment Plan 8 ô

| Ô | Nội dung cần điền |
| --- | --- |
| 1. Vấn đề | Problem statement rút gọn |
| 2. Giả thuyết | Nếu nguyên nhân/giải pháp đúng thì điều gì sẽ xảy ra? |
| 3. Phạm vi | Thiết bị, môi trường, phiên bản, người dùng, test case nào được đưa vào? |
| 4. Hành động | Thay đổi hoặc thử nghiệm cụ thể là gì? |
| 5. Owner | Ai chịu trách nhiệm kết quả, ai cung cấp dữ liệu, ai xác nhận? |
| 6. Dependency | Cần BA/PM/Design/Hardware/Firmware/Software/App/QA làm rõ gì? |
| 7. Tiêu chí thành công | Đo bằng gì, ngưỡng nào là đủ? |
| 8. Quyết định tiếp | Nếu đạt/không đạt thì làm gì? |

## Coordination Note

```text
Vấn đề:
Thử nghiệm/hành động:
Team liên quan:
Điều cần mỗi team xác nhận:
Rủi ro cần theo dõi:
Mốc cập nhật:
Bằng chứng sẽ dùng để quyết định:
```

## Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Team nghi ngờ trạng thái thiết bị không nhất quán do thứ tự sự kiện giữa controller và cloud. |
| Wrong response | Sửa đồng loạt logic trạng thái ở nhiều service và app trước khi có dữ liệu phân biệt nguyên nhân. |
| Root cause của phản ứng sai | Nhóm muốn giải quyết triệt để nhưng phạm vi thay đổi quá rộng, khó biết thay đổi nào tạo kết quả. |
| Better response | Thiết kế thử nghiệm nhỏ: thêm logging/timestamp trong một luồng cụ thể, chạy test với điều kiện mạng yếu, QA xác nhận kịch bản, App/Software so sánh trạng thái theo timeline. |
| Takeaway | Khi bất định cao, thử nghiệm nhỏ giúp học nhanh hơn thay đổi lớn. |

## Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn một task đang thực thi và xác định giả thuyết ngầm phía sau. |
| Giải thích | Nêu vì sao task đó cần hoặc không cần thử nghiệm nhỏ. |
| Áp dụng nhỏ | Viết Experiment Plan 8 ô cho một giả thuyết kỹ thuật. |
| Mô phỏng | Tạo coordination note cho case trạng thái không nhất quán. |
| Áp dụng thật | Chạy hoặc đề xuất một thử nghiệm nhỏ trong phạm vi dự án. |
| Cải thiện | Sau khi có kết quả, cập nhật quyết định tiếp theo. |

## Tự kiểm tra

| Mức | Tiêu chí | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn nhận ra task thiếu điểm đo hoặc owner | Có ghi chú phần thiếu |
| 2. Giải thích | Bạn giải thích được thử nghiệm đang kiểm chứng giả thuyết nào | Có câu giả thuyết rõ |
| 3. Áp dụng | Bạn viết được experiment plan đủ dùng | Có đủ phạm vi, owner, tiêu chí, quyết định tiếp |
| 4. Linh hoạt | Bạn điều chỉnh kế hoạch khi dữ liệu trái dự đoán | Có cập nhật rủi ro và hành động tiếp |

## Áp dụng sau bài học

- Việc làm trong 48 giờ: biến một phương án đang bàn thành Experiment Plan 8 ô.
- Bằng chứng cần thu thập: plan, dữ liệu đầu tiên, quyết định tiếp.
- Điều chỉnh lần sau: nếu task có rủi ro liên team, viết coordination note trước khi triển khai.

