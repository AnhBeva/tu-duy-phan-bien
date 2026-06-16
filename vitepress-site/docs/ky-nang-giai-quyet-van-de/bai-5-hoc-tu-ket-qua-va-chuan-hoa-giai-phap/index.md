# Bài 5: Học từ kết quả và chuẩn hóa để vấn đề ít lặp lại

## Vấn đề thật

Nhiều vấn đề được xử lý xong về mặt ticket nhưng chưa được học xong về mặt tổ chức. Bug đóng, release đi tiếp, cuộc họp kết thúc, nhưng nguyên nhân hệ thống, dấu hiệu cảnh báo và thay đổi quy trình không được ghi lại. Vài tuần sau, vấn đề xuất hiện ở sản phẩm, phiên bản hoặc team khác.

Giải quyết vấn đề xuất sắc không dừng ở "đã fix". Nó kết thúc khi nhóm biết điều gì đã xảy ra, vì sao xảy ra, cách phát hiện sớm hơn, cách tránh lặp lại và phần nào cần chuẩn hóa.

## Mục tiêu học tập

Sau bài này, học viên có thể học từ kết quả xử lý vấn đề bằng learning note và standardization note đạt tiêu chí: có kết quả đo được, sai lệch so với dự đoán, bài học về nguyên nhân/giải pháp/phối hợp, hành động chuẩn hóa và chỉ báo theo dõi.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết after-action review, post-mortem không đổ lỗi, chuẩn hóa và chỉ báo tái diễn. |
| Skill | Viết learning note và standardization note ngắn gọn. |
| Mindset | Chuyển từ "xong việc" sang "hệ thống đã học gì?". |
| Behavior | Sau khi xử lý vấn đề, bạn ghi lại bài học và đề xuất cách giảm tái diễn. |
| Evidence | Có learning note và ít nhất một hành động chuẩn hóa. |

## Bản chất

Học từ kết quả là so sánh giữa điều nhóm nghĩ sẽ xảy ra và điều thực tế xảy ra. Phần quan trọng nhất không phải là ai đúng ai sai, mà là mô hình suy nghĩ nào cần cập nhật.

Một learning note tốt trả lời:

- Mục tiêu ban đầu là gì?
- Kết quả thực tế là gì?
- Giả thuyết nào đúng, giả thuyết nào sai?
- Điều gì bất ngờ?
- Vấn đề có thể lặp lại ở đâu?
- Cần thay đổi checklist, test case, tài liệu, quy trình, monitor hay tiêu chí nào?

## Vì sao quan trọng

Nếu không chuẩn hóa bài học:

- QA có thể phải phát hiện lại cùng loại lỗi.
- BA tiếp tục viết thiếu cùng loại acceptance criteria.
- PM tiếp tục bị bất ngờ bởi cùng loại dependency.
- Firmware/software/app tiếp tục hiểu khác nhau về cùng một trạng thái.
- Design/cơ khí/phần cứng tiếp tục gặp cùng ràng buộc muộn.
- Người mới không học được từ lỗi cũ.

## Hiểu lầm phổ biến

1. "Post-mortem là cuộc họp quy trách nhiệm."  
   Post-mortem tốt tách trách nhiệm cải thiện khỏi đổ lỗi cá nhân.

2. "Chỉ sự cố lớn mới cần học."  
   Vấn đề nhỏ nhưng lặp lại nhiều lần cũng xứng đáng có learning note.

3. "Đã sửa code là đã chuẩn hóa."  
   Chuẩn hóa có thể là test case, checklist, tài liệu yêu cầu, quy tắc thiết kế, monitor hoặc tiêu chí release.

4. "Bài học càng dài càng tốt."  
   Bài học tốt phải ngắn, cụ thể và có hành động tiếp theo.

## Cách nghĩ đúng

Hãy hỏi:

- Lỗi này lặp lại được bằng điều kiện nào?
- Tín hiệu nào lẽ ra giúp phát hiện sớm hơn?
- Quyết định nào đã đúng, quyết định nào cần điều kiện xem lại tốt hơn?
- Bài học thuộc lớp nào: yêu cầu, thiết kế, cơ khí, phần cứng, firmware, software, app, QA, PM hay phối hợp?
- Cần chuẩn hóa điều gì để lần sau người khác không phải học lại từ đầu?

Script post-mortem không đổ lỗi:

```text
Mục tiêu của ghi chú này là học để hệ thống tốt hơn. Ta sẽ mô tả điều kiện, tín hiệu, quyết định và điểm cải thiện. Không dùng ghi chú này để đánh giá cá nhân.
```

## Cách làm: Learning Note

```text
Vấn đề:
Mục tiêu ban đầu:
Giải pháp/thử nghiệm đã làm:
Kết quả đo được:
Điều đúng với dự đoán:
Điều trái dự đoán:
Nguyên nhân đã xác nhận:
Giả định đã loại trừ:
Bài học về kỹ thuật:
Bài học về phối hợp:
Điều cần chuẩn hóa:
Chỉ báo theo dõi tái diễn:
Hành động tiếp theo:
```

## Standardization Note

| Loại chuẩn hóa | Câu hỏi | Ví dụ |
| --- | --- | --- |
| Checklist | Có bước nào cần thêm vào review? | Thêm kiểm tra timestamp trạng thái trong review API |
| Test case | QA cần test kịch bản nào từ nay? | Mạng yếu, nhiều thiết bị, thao tác liên tục |
| Tài liệu yêu cầu | BA cần bổ sung tiêu chí nào? | Ngưỡng cập nhật trạng thái và hành vi khi offline |
| Thiết kế kỹ thuật | Team cần quy ước chung nào? | Quy tắc nguồn dữ liệu mới nhất |
| Monitor/log | Cần tín hiệu nào để phát hiện sớm? | Log sequence trạng thái theo request id |
| Quy trình phối hợp | Cần điểm đồng bộ nào? | Review end-to-end trước khi freeze scope |

## Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Một lỗi đồng bộ trạng thái được sửa sau nhiều vòng phân tích firmware-controller-cloud-app. |
| Wrong response | Đóng ticket sau khi test pass, không cập nhật test case hoặc tài liệu trạng thái. |
| Root cause của phản ứng sai | Nhóm xem "fix xong" là kết thúc, chưa xem "hệ thống học xong" là kết thúc. |
| Better response | Viết learning note, bổ sung test case mạng yếu, chuẩn hóa quy tắc timestamp/sequence, cập nhật checklist review API và ghi điều kiện xem lại. |
| Takeaway | Vấn đề chỉ thật sự được xử lý khi xác suất lặp lại giảm xuống. |

## Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Tìm một bug đã đóng và hỏi: bài học đã được ghi ở đâu? |
| Giải thích | Nêu một rủi ro nếu bug đó lặp lại ở sản phẩm khác. |
| Áp dụng nhỏ | Viết learning note cho một vấn đề đã xử lý. |
| Mô phỏng | Tạo standardization note cho case đồng bộ trạng thái. |
| Áp dụng thật | Đề xuất một checklist/test case/tài liệu cần cập nhật. |
| Cải thiện | Sau 2 tuần, kiểm tra chỉ báo tái diễn và cập nhật bài học. |

## Tự kiểm tra

| Mức | Tiêu chí | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn phân biệt được fix và learning | Có ghi chú phần chưa học xong |
| 2. Giải thích | Bạn giải thích được vì sao vấn đề có thể lặp lại | Có điều kiện tái diễn |
| 3. Áp dụng | Bạn viết được learning note dùng được | Có kết quả đo, bài học và hành động chuẩn hóa |
| 4. Linh hoạt | Bạn chọn đúng mức chuẩn hóa | Có lý do chọn checklist/test/log/quy trình phù hợp |

## Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một vấn đề đã xử lý gần đây và viết learning note một trang.
- Bằng chứng cần thu thập: learning note, hành động chuẩn hóa, chỉ báo theo dõi.
- Điều chỉnh lần sau: khi đóng vấn đề, hỏi "điều gì đã được cập nhật để lần sau dễ hơn?".

