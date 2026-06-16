# Bài 5: Biến rủi ro mơ hồ thành kiểm chứng nhỏ và bài học thật

## 1. Vấn đề thật

Trong dự án R&D, rủi ro thường xuất hiện dưới dạng câu nói mơ hồ:

- "Không biết lên production có ổn không."
- "Sợ nhiều thiết bị cùng lúc sẽ chậm."
- "Có thể cơ khí sẽ không vừa."
- "Không chắc app xử lý đủ các trạng thái lỗi."
- "QA chưa test hết được."

Nếu rủi ro chỉ được ghi như nỗi lo, nó khó biến thành hành động. Nếu rủi ro bị bỏ qua, nhóm có thể phát hiện quá muộn khi đã tích hợp, làm mẫu, phát hành hoặc sản xuất.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể chuyển một rủi ro R&D mơ hồ thành thử nghiệm nhỏ hoặc hành động giảm rủi ro bằng cách viết risk experiment note đạt tiêu chí: nêu rõ giả định rủi ro, tín hiệu cảnh báo, cách kiểm chứng, tiêu chí pass/fail, quyết định sau kiểm chứng và bài học cập nhật.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Biết rủi ro là giả định có hậu quả nếu sai. |
| Skill | Thiết kế kiểm chứng nhỏ, đọc kết quả và viết learning note. |
| Mindset | Không che giấu rủi ro để giữ tiến độ; làm rủi ro rõ hơn để bảo vệ tiến độ thật. |
| Behavior | Khi nghe "sợ rằng", bạn hỏi "ta kiểm chứng bằng cách nào, trong điều kiện nào, đạt tiêu chí gì?". |
| Evidence | Một risk experiment note hoặc learning note sau lỗi/tắc nghẽn. |

## 3. Bản chất

Rủi ro không phải là điều xấu chắc chắn xảy ra. Rủi ro là điều chưa chắc, nhưng nếu xảy ra sẽ gây hậu quả.

Trong R&D, rủi ro tốt cần được viết như một giả định có thể kiểm chứng:

```text
Chúng ta đang giả định rằng [điều chưa chắc] trong [điều kiện], nếu sai sẽ gây [hậu quả]. Ta sẽ kiểm chứng bằng [hành động] và quyết định dựa trên [tiêu chí].
```

Học từ lỗi cũng là một dạng kiểm chứng. Khi lỗi xảy ra, câu hỏi quan trọng không phải "ai gây ra?", mà là "hệ thống suy nghĩ, phối hợp hoặc kiểm chứng nào đã để lỗi đi qua?".

## 4. Vì sao quan trọng

Kiểm chứng rủi ro giúp:

- Phát hiện sớm giới hạn của thiết kế, phần cứng, firmware, software, app hoặc cloud.
- Giúp PM quản lý tiến độ dựa trên rủi ro thật.
- Giúp QA tham gia sớm bằng test case có mục tiêu.
- Giúp team kỹ thuật tránh over-engineering bằng cách chỉ kiểm chứng điều quan trọng.
- Giúp sau lỗi có hành động cải thiện cụ thể thay vì chỉ nhắc "lần sau cẩn thận hơn".

## 5. Hiểu lầm phổ biến

1. **"Rủi ro càng nhiều càng chứng tỏ dự án nguy hiểm."**  
   Rủi ro được viết rõ giúp dự án an toàn hơn rủi ro bị giấu.

2. **"Kiểm chứng phải đầy đủ mới có giá trị."**  
   Kiểm chứng nhỏ vẫn có giá trị nếu nó làm giảm bất định quan trọng nhất.

3. **"Pass test nghĩa là hết rủi ro."**  
   Pass chỉ có nghĩa là rủi ro giảm trong điều kiện đã test.

4. **"Học từ lỗi là tìm người chịu trách nhiệm."**  
   Học từ lỗi là cải thiện hệ thống phát hiện, quyết định và phối hợp.

## 6. Cách nghĩ đúng

Khi gặp rủi ro, hãy chuyển từ lo lắng sang kiểm chứng:

- Rủi ro này thuộc lớp nào?
- Nếu xảy ra, hậu quả cụ thể là gì?
- Dấu hiệu cảnh báo sớm là gì?
- Điều gì cần đúng để phương án hiện tại thành công?
- Kiểm chứng nhỏ nhất có thể làm trong thời gian ngắn là gì?
- Kết quả nào khiến ta tiếp tục, đổi hướng hoặc cần thêm dữ liệu?

## 7. Cách làm: Risk experiment note

| Phần | Nội dung cần viết |
| --- | --- |
| Risk statement | Chúng ta đang lo điều gì, trong điều kiện nào? |
| Assumption | Điều gì phải đúng để phương án hiện tại an toàn? |
| Impact | Nếu giả định sai, ảnh hưởng đến ai/lớp nào/mốc nào? |
| Early signal | Dấu hiệu cảnh báo sớm là gì? |
| Experiment | Kiểm chứng nhỏ nhất là gì? |
| Pass/fail criteria | Kết quả thế nào là đạt/chưa đạt? |
| Decision after check | Nếu pass/fail thì quyết định tiếp theo là gì? |
| Learning update | Sau kiểm chứng, ta học được gì và cập nhật tài liệu nào? |

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Một service nền tảng trên bộ điều khiển trung tâm cần xử lý nhiều thiết bị đồng thời. Team tin rằng kiến trúc hiện tại đủ ổn, nhưng QA lo khi số lượng thiết bị tăng sẽ phát sinh độ trễ. |
| Wrong response | Nhóm ghi "rủi ro hiệu năng" trong danh sách nhưng không có test, không có ngưỡng, không có quyết định sau test. |
| Root cause | Rủi ro chưa được chuyển thành giả định kiểm chứng được. "Nhiều thiết bị" và "chậm" chưa có định nghĩa. |
| Better response | Viết risk experiment: giả định service xử lý được kịch bản nhiều thiết bị đồng thời trong giới hạn độ trễ chấp nhận. Kiểm chứng bằng test tải theo số lượng thiết bị giả lập, đo latency end-to-end, CPU/memory và tỷ lệ lỗi. Nếu fail, giảm phạm vi phát hành hoặc tối ưu queue/xử lý đồng thời trước mốc tích hợp. |
| Takeaway | Rủi ro không được đo sẽ quay lại dưới dạng sự cố. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn 3 câu "lo rằng/sợ rằng/không chắc" trong dự án. |
| Giải thích | Viết lại mỗi câu thành risk statement có điều kiện và hậu quả. |
| Áp dụng nhỏ | Chọn 1 risk statement và điền risk experiment note. |
| Mô phỏng | Xác định pass/fail criteria và decision after check cho kiểm chứng đó. |
| Áp dụng thật | Đưa experiment vào kế hoạch test, ticket kỹ thuật hoặc tài liệu rủi ro. |
| Cải thiện | Sau khi có kết quả, viết learning update: tiếp tục, đổi hướng hay cần thêm bằng chứng? |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn nhận ra rủi ro mơ hồ | Có 3 câu rủi ro được viết lại rõ điều kiện/hậu quả |
| 2. Giải thích | Bạn giải thích được giả định phía sau rủi ro | Có assumption và impact cho rủi ro đã chọn |
| 3. Áp dụng | Bạn thiết kế được kiểm chứng nhỏ | Risk experiment note có pass/fail criteria |
| 4. Linh hoạt | Bạn học được từ kết quả kiểm chứng hoặc lỗi | Learning update có quyết định tiếp theo và tài liệu cần cập nhật |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một rủi ro đang bị nói mơ hồ và viết risk experiment note.
- Bằng chứng cần thu thập: risk statement, kiểm chứng nhỏ, pass/fail criteria, quyết định sau kiểm chứng.
- Điều chỉnh lần sau: rủi ro nào nên được phát hiện sớm hơn trong vòng đời sản phẩm?
