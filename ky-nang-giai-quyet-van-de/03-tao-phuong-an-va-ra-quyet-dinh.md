# Bài 3: Tạo phương án và ra quyết định bằng tiêu chí, không bằng cảm giác

## Vấn đề thật

Khi đã có giả thuyết nguyên nhân, nhóm dễ chọn ngay giải pháp quen thuộc: sửa code, thêm test, tăng timeout, đổi linh kiện, thêm cảnh báo, viết thêm tài liệu, dời deadline. Những hành động này có thể đúng, nhưng nếu không so sánh phương án bằng tiêu chí, nhóm sẽ khó thấy trade-off và rủi ro lan truyền sang các lớp khác.

Trong Lumi R&D, một phương án tốt phải cân bằng nhiều yếu tố: trải nghiệm người dùng, độ ổn định thiết bị, chi phí phần cứng, khả năng sản xuất, hiệu năng software/cloud, UX app, phạm vi QA, timeline PM và khả năng bảo trì.

## Mục tiêu học tập

Sau bài này, học viên có thể tạo và chọn phương án xử lý vấn đề bằng option matrix và decision note đạt tiêu chí: có ít nhất ba phương án, tiêu chí chọn rõ, trade-off minh bạch, rủi ro chính được nêu và có điều kiện xem lại quyết định.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết phương án, tiêu chí, trade-off, rủi ro, chi phí cơ hội và điều kiện xem lại. |
| Skill | Tạo option matrix, đánh giá phương án và viết decision note ngắn. |
| Mindset | Chuyển từ "chọn phương án mình thích" sang "chọn phương án phù hợp nhất với mục tiêu và ràng buộc". |
| Behavior | Khi đề xuất giải pháp, bạn nêu rõ tiêu chí chọn và phương án bị loại. |
| Evidence | Có option matrix và decision note cho một vấn đề thật. |

## Bản chất

Ra quyết định là chọn một hành động trong điều kiện không chắc chắn. Quyết định tốt không phải quyết định chắc chắn đúng. Quyết định tốt là quyết định có lý do rõ, phù hợp mục tiêu, nhận diện trade-off và có cách học nếu thực tế khác dự đoán.

Một quyết định R&D thường cần cân bằng:

- Giá trị người dùng.
- Độ ổn định hệ thống.
- Rủi ro kỹ thuật.
- Chi phí triển khai.
- Tác động liên team.
- Khả năng test và vận hành.
- Khả năng mở rộng và bảo trì.
- Tốc độ release.

## Vì sao quan trọng

Không có option matrix, nhóm thường bị chi phối bởi:

- Phương án của người nói tự tin nhất.
- Phương án quen thuộc nhất.
- Phương án sửa nhanh nhất nhưng tạo nợ kỹ thuật.
- Phương án tối ưu cục bộ cho một team.
- Phương án đã đầu tư nhiều nên ngại bỏ.

Option matrix giúp biến tranh luận thành so sánh rõ ràng.

## Hiểu lầm phổ biến

1. "Nhiều phương án làm mất thời gian."  
   Ba phương án ngắn thường giúp tiết kiệm thời gian vì giảm tranh luận vòng lặp và tránh bỏ sót giải pháp tốt hơn.

2. "Chấm điểm là khách quan tuyệt đối."  
   Điểm số chỉ là công cụ làm lộ tiêu chí và giả định. Quan trọng là lý do sau điểm số.

3. "Phương án nhanh nhất là tốt nhất khi đang gấp."  
   Đôi khi đúng. Nhưng cần biết nó tạo rủi ro gì, ai chịu rủi ro và khi nào phải trả nợ.

4. "Quyết định rồi thì không xem lại."  
   Quyết định trong môi trường bất định cần điều kiện xem lại.

## Cách nghĩ đúng

Trước khi chọn, hãy hỏi:

- Mục tiêu nào là bắt buộc?
- Ràng buộc nào không thể phá?
- Nếu chọn phương án này, lớp nào được lợi và lớp nào chịu chi phí?
- Nếu giả định chính sai, dấu hiệu nào sẽ xuất hiện?
- Khi nào cần xem lại quyết định?

Script phản biện phương án:

```text
Mình thấy phương án này mạnh ở [điểm mạnh]. Rủi ro mình muốn làm rõ là [rủi ro]. Nếu so với phương án B/C theo tiêu chí [tiêu chí], phương án này thắng/thua ở đâu?
```

## Cách làm: Option Matrix

### Bước 1: Tạo ít nhất ba phương án

- Phương án A: sửa nhanh, ít thay đổi.
- Phương án B: sửa đúng cơ chế, tác động vừa.
- Phương án C: thay đổi cấu trúc hoặc quy trình để giảm tái diễn.

### Bước 2: Chọn tiêu chí

Gợi ý tiêu chí cho Lumi R&D:

| Tiêu chí | Câu hỏi |
| --- | --- |
| Hiệu quả với vấn đề thật | Có đóng khoảng cách đã nêu trong problem statement không? |
| Rủi ro kỹ thuật | Có tạo lỗi mới ở firmware, controller, cloud, app hoặc phần cứng không? |
| Tác động UX | Người dùng có thấy hành vi dễ hiểu hơn không? |
| Khả năng test | QA có kiểm chứng được rõ ràng không? |
| Chi phí triển khai | Cần bao nhiêu team, bao nhiêu thay đổi, bao nhiêu thời gian? |
| Khả năng bảo trì | Có làm hệ thống dễ hiểu hơn hay thêm workaround? |
| Tác động sản xuất/vận hành | Có ảnh hưởng sản xuất mẫu, phát hành, support hoặc cập nhật không? |

### Bước 3: Điền option matrix

| Phương án | Hiệu quả | Rủi ro | Chi phí | Khả năng test | Tác động liên team | Ghi chú trade-off |
| --- | --- | --- | --- | --- | --- | --- |
| A |  |  |  |  |  |  |
| B |  |  |  |  |  |  |
| C |  |  |  |  |  |  |

### Bước 4: Viết decision note

```text
Vấn đề:
Mục tiêu:
Phương án được chọn:
Vì sao chọn:
Phương án đã cân nhắc nhưng không chọn:
Trade-off chấp nhận:
Rủi ro còn lại:
Cách kiểm chứng kết quả:
Điều kiện xem lại quyết định:
```

## Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Trạng thái thiết bị trên app đôi khi cập nhật chậm sau thao tác qua bộ điều khiển trung tâm. |
| Wrong response | Tăng timeout ở app để giảm hiển thị lỗi. |
| Root cause của phản ứng sai | Phương án dễ triển khai ở app che triệu chứng nhưng không làm rõ luồng trạng thái end-to-end. |
| Better response | So sánh ba phương án: chỉnh cache app, thêm timestamp/sequence cho trạng thái, hoặc chuẩn hóa tiêu chí đồng bộ giữa firmware-controller-cloud-app và bổ sung test tích hợp. |
| Takeaway | Phương án đúng không chỉ làm triệu chứng biến mất; nó phải làm hệ thống dễ kiểm chứng và ít lặp lỗi hơn. |

## Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Tìm một quyết định gần đây và liệt kê tiêu chí đã dùng, kể cả tiêu chí ngầm. |
| Giải thích | Nêu trade-off của phương án đã chọn. |
| Áp dụng nhỏ | Tạo ba phương án cho một bug hoặc yêu cầu đang mở. |
| Mô phỏng | Điền option matrix cho case trạng thái app chậm. |
| Áp dụng thật | Viết decision note cho một quyết định liên team. |
| Cải thiện | Sau phản hồi, bổ sung điều kiện xem lại và rủi ro còn lại. |

## Tự kiểm tra

| Mức | Tiêu chí | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn nhận ra quyết định đang thiếu tiêu chí | Có ghi chú tiêu chí còn mơ hồ |
| 2. Giải thích | Bạn giải thích được trade-off giữa các phương án | Có so sánh ưu/nhược theo mục tiêu |
| 3. Áp dụng | Bạn tạo được option matrix dùng được | Có ít nhất ba phương án và tiêu chí rõ |
| 4. Linh hoạt | Bạn quyết định được trong điều kiện thiếu dữ liệu | Có giả định, rủi ro và điều kiện xem lại |

## Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một quyết định đang tranh luận và tạo option matrix.
- Bằng chứng cần thu thập: option matrix, decision note, tiêu chí xem lại.
- Điều chỉnh lần sau: trước khi bảo vệ một phương án, hãy mô tả phương án thay thế tốt nhất.

