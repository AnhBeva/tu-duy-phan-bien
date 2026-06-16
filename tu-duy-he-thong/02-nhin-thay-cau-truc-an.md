# Bài 2: Nhìn thấy cấu trúc ẩn phía sau sự kiện

## 1. Vấn đề thật

Mỗi tuần nhóm đều xử lý bug "trạng thái thiết bị không nhất quán". Có tuần bug ở app cache, có tuần ở cloud sync, có tuần ở firmware event, có tuần ở điều kiện mạng. Nếu chỉ nhìn từng bug, nhóm thấy nhiều sự kiện khác nhau. Nếu nhìn theo hệ thống, nhóm có thể thấy một cấu trúc chung: trạng thái bị tích lũy sai, tín hiệu đến trễ, log không đủ nối chuỗi và test end-to-end chưa bao phủ điều kiện thật.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể phân tích cấu trúc ẩn của một vấn đề R&D bằng cách tạo stock-flow map và delay log đạt tiêu chí: chỉ ra trạng thái đang tích lũy, dòng vào/dòng ra, điểm đo, độ trễ và tác động của độ trễ lên quyết định.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Sự kiện, mẫu hình và cấu trúc là ba tầng khác nhau; stocks/flows giải thích tích lũy; delays làm hệ thống khó đọc. |
| Skill | Vẽ stock-flow map và ghi delay log cho một vấn đề thật. |
| Mindset | Không chỉ hỏi "lỗi vừa xảy ra là gì"; hỏi "thứ gì đang tích lũy để tạo lỗi này". |
| Behavior | Khi thấy sự kiện lặp lại, bạn tìm chỉ báo trạng thái và dòng vào/dòng ra. |
| Evidence | Một stock-flow map và delay log có thể dùng để thảo luận với team. |

## 3. Bản chất

Hệ thống tạo ra hành vi qua cấu trúc. Meadows nhấn mạnh rằng nhiều hành vi khó hiểu đến từ stocks, flows và delays.

| Tầng nhìn | Câu hỏi | Ví dụ |
| --- | --- | --- |
| Sự kiện | Chuyện gì vừa xảy ra? | App hiển thị sai trạng thái đèn lúc 21:05 |
| Mẫu hình | Chuyện này lặp lại thế nào theo thời gian? | Lỗi tăng sau release và nhiều hơn ở nhà có nhiều thiết bị |
| Cấu trúc | Cơ chế nào tạo ra mẫu hình đó? | Queue trạng thái, retry, cache, mạng mesh, thiếu trace ID, test chưa bao phủ tải cao |

Stock là thứ tích lũy. Flow là dòng làm stock tăng hoặc giảm.

Ví dụ trong R&D:

| Stock | Dòng vào | Dòng ra |
| --- | --- | --- |
| Bug backlog | Bug mới, bug reopen | Bug được fix đúng gốc, bug được đóng |
| Nợ kỹ thuật | Shortcut, workaround, thiếu test | Refactor, test bổ sung, xóa workaround |
| Hiểu biết chung | Review, tài liệu, log, postmortem | Người rời dự án, tài liệu lỗi thời, quyết định không ghi lại |
| Tải hệ thống | Event, request, thiết bị online | Xử lý thành công, drop có kiểm soát, backpressure |

## 4. Vì sao quan trọng

Nếu không nhìn stock/flow, nhóm dễ xử lý dòng vào mà quên stock. Ví dụ đóng bug nhanh không có nghĩa chất lượng tăng nếu bug reopen và nợ kỹ thuật vẫn tích lũy.

Nếu không nhìn delay, nhóm dễ phản ứng quá tay. Ví dụ tăng polling để app cập nhật nhanh hơn có thể tạo tải backend, rồi backend chậm hơn, rồi app càng polling mạnh hơn.

## 5. Hiểu lầm phổ biến

1. **"Có dashboard là đã nhìn hệ thống."**  
   Dashboard chỉ hữu ích khi đo đúng stock và flow, không chỉ đo sự kiện dễ đếm.

2. **"Bug đóng nhiều nghĩa là chất lượng tăng."**  
   Nếu bug reopen, test thiếu và nợ kỹ thuật tăng, hệ thống có thể đang yếu đi.

3. **"Độ trễ chỉ là vấn đề hiệu năng."**  
   Độ trễ còn nằm ở nhận biết, quyết định, phối hợp, kiểm thử, phát hành và học từ lỗi.

4. **"Cấu trúc ẩn quá phức tạp nên không vẽ được."**  
   Không cần vẽ tất cả. Chỉ cần vẽ đủ để quyết định tiếp theo tốt hơn.

## 6. Cách nghĩ đúng

Khi thấy một sự kiện gây áp lực, đừng chỉ hỏi "làm sao dập ngay?". Hãy hỏi thêm:

- Sự kiện này có phải dấu hiệu của stock đang tích lũy không?
- Dòng vào nào đang làm stock tăng?
- Dòng ra nào đang bị nghẽn?
- Độ trễ nào làm chúng ta nhận ra vấn đề quá muộn?
- Chỉ báo hiện tại đo sự kiện hay đo trạng thái thật?

## 7. Cách làm: Stock-flow map và delay log

### 7.1. Stock-flow map

```text
Vấn đề:
Stock chính:
Dòng vào làm stock tăng:
Dòng ra làm stock giảm:
Chỉ báo đo stock:
Điểm nghẽn:
Ai có thể ảnh hưởng dòng vào:
Ai có thể ảnh hưởng dòng ra:
```

Checklist chất lượng:

| Câu hỏi | Đạt khi |
| --- | --- |
| Stock có phải thứ tích lũy theo thời gian không? | Có thể tăng, giảm, tồn lại |
| Flow có đo được không? | Có số lượng, tần suất, tốc độ hoặc bằng chứng |
| Chỉ báo có đo trạng thái thật không? | Không chỉ đo hoạt động bề mặt |
| Có phân biệt dòng vào và dòng ra không? | Không nhầm "nhiều task" với "năng lực xử lý" |

### 7.2. Delay log

| Loại trễ | Câu hỏi | Ví dụ Lumi R&D |
| --- | --- | --- |
| Trễ nhận biết | Bao lâu sau vấn đề ta mới thấy tín hiệu? | User report đến sau 3 ngày dùng thật |
| Trễ đo lường | Dữ liệu có đến đủ nhanh và đủ nối chuỗi không? | Log firmware không nối được với request app |
| Trễ quyết định | Ai cần xác nhận trước khi hành động? | BA, PM, tech lead, QA chờ nhau |
| Trễ triển khai | Quyết định mất bao lâu để thành thay đổi thật? | Firmware OTA theo đợt, app chờ release store |
| Trễ tác động | Bao lâu mới biết can thiệp có hiệu quả? | Chỉ thấy giảm lỗi sau một chu kỳ release |

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Bug tích hợp tăng mạnh gần cuối sprint. Team nghĩ nguyên nhân là QA test muộn. |
| Wrong response | Tăng thêm người QA và yêu cầu QA test nhanh hơn. |
| Root cause | Stock "rủi ro tích hợp chưa được phát hiện" đã tích lũy từ đầu sprint. Dòng vào là thay đổi API, firmware event, app state model và requirement ngoại lệ. Dòng ra là test tích hợp, review contract, log trace, prototype end-to-end nhưng các dòng ra xảy ra muộn. |
| Better response | Vẽ stock-flow map, chuyển một phần test tích hợp và contract review lên sớm, thêm trace ID xuyên lớp, tạo chỉ báo rủi ro tích hợp mỗi tuần thay vì chỉ đếm bug cuối sprint. |
| Takeaway | Thêm năng lực ở cuối dòng chảy không giải quyết được stock đã tích lũy âm thầm từ đầu. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn một vấn đề lặp lại và nêu 3 sự kiện gần nhất liên quan. |
| Giải thích | Viết mẫu hình theo thời gian: tăng, giảm, dao động, trễ, bùng phát hay lặp chu kỳ. |
| Áp dụng nhỏ | Điền stock-flow map cho vấn đề đó. |
| Mô phỏng | Viết delay log với ít nhất 3 loại trễ. |
| Áp dụng thật | Đề xuất một chỉ báo đo stock thay vì chỉ đo sự kiện. |
| Cải thiện | Sau một tuần, xem chỉ báo có giúp nhóm thấy vấn đề sớm hơn không. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn phân biệt được sự kiện, mẫu hình, cấu trúc | Có ví dụ đủ 3 tầng |
| 2. Giải thích | Bạn giải thích được stock, flow và delay | Có mô tả nguyên nhân tích lũy |
| 3. Áp dụng | Bạn tạo được stock-flow map và delay log | Có artifact cho vấn đề thật |
| 4. Linh hoạt | Bạn chọn chỉ báo tốt hơn để phát hiện sớm | Có đề xuất thay đổi đo lường hoặc điểm review |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một chỉ báo hiện tại trong dự án và hỏi nó đang đo sự kiện, flow hay stock.
- Bằng chứng cần thu thập: stock-flow map, delay log, một chỉ báo đề xuất.
- Điều chỉnh lần sau: stock nào đang tích lũy mà dashboard hiện tại chưa thấy?

