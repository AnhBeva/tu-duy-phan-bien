# Rubric tự đánh giá và kế hoạch áp dụng: Tư duy hệ thống

## Cách dùng

Chấm bằng bằng chứng, không chấm bằng cảm giác hiểu. Nếu chưa có artifact thật, hãy chọn mức thấp hơn và hoàn thành bài tập áp dụng trước khi tự nâng mức.

## 1. Rubric tổng thể

| Năng lực | Mức 1: Nhận biết | Mức 2: Giải thích | Mức 3: Áp dụng | Mức 4: Linh hoạt |
| --- | --- | --- | --- | --- |
| Nhìn hệ thống | Nhận ra vấn đề có nhiều phần liên quan | Giải thích phần tử, liên kết, mục đích, ranh giới | Tạo system map cho vấn đề thật | Điều chỉnh ranh giới theo mục tiêu phân tích |
| Nhìn cấu trúc ẩn | Phân biệt sự kiện và mẫu hình | Giải thích stock, flow, delay | Tạo stock-flow map và delay log | Chọn chỉ báo mới để thấy vấn đề sớm hơn |
| Nhìn feedback loop | Nhận ra quan hệ "càng... càng..." | Phân biệt vòng cân bằng và khuếch đại | Vẽ loop map có độ trễ và hành vi dự kiến | Dự đoán tác dụng phụ của can thiệp |
| Nhận diện bẫy hệ thống | Gọi tên được bẫy phổ biến | Giải thích cấu trúc tạo bẫy | Tạo trap diagnosis note | Chọn cách thoát không làm bẫy nặng hơn |
| Chọn leverage point | Phân biệt can thiệp thấp/trung/cao | Giải thích vì sao điểm đòn bẩy khác nhau | Tạo leverage point note | Thiết kế thử nghiệm nhỏ có bằng chứng kiểm tra |
| Áp dụng liên team | Đặt câu hỏi hệ thống trong trao đổi | Giải thích trade-off giữa các lớp | Đưa artifact vào ticket/review/decision note | Giúp nhóm đổi cách nhìn mà không tạo phòng thủ |

## 2. Bằng chứng bắt buộc

| Artifact | Tiêu chí đạt |
| --- | --- |
| System map | Có hành vi cần hiểu, ranh giới, phần tử, liên kết, mục tiêu tuyên bố và mục đích thật |
| Stock-flow map | Có stock tích lũy, dòng vào, dòng ra, chỉ báo và điểm nghẽn |
| Delay log | Có ít nhất 3 loại trễ và tác động của từng trễ |
| Feedback loop map | Có biến, quan hệ, loại loop, độ trễ, hành vi dự kiến và điểm can thiệp |
| Trap diagnosis note | Có bẫy nghi ngờ, dấu hiệu, cấu trúc, phản ứng mặc định, cách thoát |
| Leverage point note | Có can thiệp ở ít nhất 3 mức, rủi ro/tác dụng phụ, bằng chứng kiểm tra |
| Decision note hệ thống | Có trade-off, stock/flow, loop, delay, bẫy cần tránh, điều kiện xem lại |

## 3. Tự chấm nhanh 100 điểm

| Mã | Tiêu chuẩn | Điểm | Tự chấm |
| --- | --- | ---: | --- |
| C01 | Vấn đề thật rõ và có bối cảnh Lumi R&D | 10 |  |
| C02 | Có system map đủ phần tử, liên kết, mục đích, ranh giới | 12 |  |
| C03 | Có stock-flow map đúng bản chất tích lũy | 12 |  |
| C04 | Có delay log và nêu tác động đến quyết định | 10 |  |
| C05 | Có feedback loop map đúng loại loop | 12 |  |
| C06 | Có chẩn đoán bẫy hệ thống | 10 |  |
| C07 | Có leverage point note với nhiều mức can thiệp | 12 |  |
| C08 | Có bằng chứng/metric kiểm tra sau can thiệp | 8 |  |
| C09 | Có artifact đưa vào ticket/review/tài liệu thật | 8 |  |
| C10 | Có kế hoạch áp dụng 14 ngày | 6 |  |

Diễn giải:

| Điểm | Mức |
| ---: | --- |
| 90-100 | Xuất sắc: có thể dùng tư duy hệ thống độc lập trong vấn đề thật |
| 75-89 | Tốt: dùng được, cần cải thiện một vài artifact hoặc bằng chứng |
| 60-74 | Nền tảng: hiểu khái niệm, cần thêm áp dụng thật |
| <60 | Cần luyện lại từ system map và stock-flow map |

## 4. Kế hoạch áp dụng 14 ngày

### Ngày 1-2: Chọn vấn đề và vẽ system map

```text
Vấn đề chọn:
Lý do chọn:
Ranh giới ban đầu:
Artifact hoàn thành:
Người cần phản hồi:
```

### Ngày 3-4: Tạo stock-flow map và delay log

```text
Stock chính:
Dòng vào:
Dòng ra:
Delay quan trọng nhất:
Chỉ báo cần theo dõi:
```

### Ngày 5-6: Vẽ feedback loop

```text
Loop chính:
Loại loop:
Độ trễ:
Hành vi dự kiến nếu không can thiệp:
```

### Ngày 7: Xin phản hồi

```text
Ai đã phản hồi:
Điểm họ đồng ý:
Điểm họ chưa đồng ý:
Bản đồ cần sửa:
```

### Ngày 8-9: Chẩn đoán bẫy hệ thống

```text
Bẫy nghi ngờ:
Dấu hiệu:
Phản ứng mặc định:
Tác dụng phụ:
Cách thoát nhỏ:
```

### Ngày 10-11: Chọn leverage point

```text
Can thiệp mức thấp:
Can thiệp mức trung:
Can thiệp mức cao:
Can thiệp chọn thử:
Rủi ro/tác dụng phụ:
```

### Ngày 12-13: Thử hoặc đưa vào quyết định thật

```text
Nơi áp dụng: ticket/review/meeting/tài liệu
Hành động đã làm:
Phản ứng của hệ thống/team:
Bằng chứng ban đầu:
```

### Ngày 14: Tự đánh giá và điều chỉnh

```text
Điểm tự chấm:
Artifact mạnh nhất:
Artifact yếu nhất:
Điều học được:
Điều chỉnh cho chu kỳ tiếp theo:
```

## 5. Checklist hoàn thành

- [ ] Tôi đã chọn một vấn đề thật, không chỉ ví dụ giả định.
- [ ] Tôi đã vẽ system map.
- [ ] Tôi đã vẽ stock-flow map.
- [ ] Tôi đã ghi delay log.
- [ ] Tôi đã vẽ ít nhất một feedback loop.
- [ ] Tôi đã chẩn đoán ít nhất một bẫy hệ thống.
- [ ] Tôi đã viết leverage point note.
- [ ] Tôi đã đưa ít nhất một artifact vào trao đổi/ticket/tài liệu thật.
- [ ] Tôi đã thu thập phản hồi hoặc bằng chứng sau áp dụng.
- [ ] Tôi đã xác định điều chỉnh tiếp theo.

## 6. Câu hỏi phản tư có bằng chứng

Trả lời bằng một tình huống cụ thể:

| Câu hỏi | Câu trả lời |
| --- | --- |
| Tôi đã từng nhìn vấn đề như sự kiện, nhưng giờ nhìn ra cấu trúc nào? |  |
| Stock nào trước đây tôi không để ý? |  |
| Loop nào giải thích hành vi lặp lại tốt nhất? |  |
| Bẫy hệ thống nào tôi dễ mắc nhất? |  |
| Can thiệp nào tôi từng nghĩ là đủ nhưng thật ra đòn bẩy thấp? |  |
| Trong 14 ngày tới, tôi sẽ dùng artifact nào vào việc thật? |  |

