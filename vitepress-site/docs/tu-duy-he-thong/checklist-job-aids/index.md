# Checklist và job aids: Tư duy hệ thống trong Lumi R&D

## Cách dùng

Chọn checklist phù hợp với tình huống thật. Trả lời ngắn gọn, đưa kết quả vào ticket, tài liệu review, decision note hoặc cuộc trao đổi liên team.

## 1. Checklist review yêu cầu sản phẩm

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Mục tiêu thật của yêu cầu là gì? |  |  |
| Hệ thống nào bị ảnh hưởng: thiết bị, firmware, controller, cloud, app, QA, vận hành? |  |  |
| Trạng thái nào cần được đồng bộ hoặc theo dõi? |  |  |
| Stock nào có thể tích lũy nếu yêu cầu này triển khai sai? |  |  |
| Luồng vào/ra của trạng thái đó là gì? |  |  |
| Độ trễ nào người dùng hoặc team sẽ cảm nhận? |  |  |
| Có vòng phản hồi nào có thể làm lỗi tăng lên không? |  |  |
| Tiêu chí nghiệm thu đo sự kiện hay đo hành vi hệ thống? |  |  |
| KPI hoặc incentive nào có thể làm lệch mục tiêu thật? |  |  |
| Điều kiện nào khiến cần xem lại yêu cầu? |  |  |

## 2. Checklist review bug hệ thống

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Đây là sự kiện đơn lẻ hay mẫu hình lặp lại? |  |  |
| Mẫu hình theo thời gian là gì: tăng, giảm, dao động, bùng phát, trễ? |  |  |
| Bug nằm trong ranh giới hệ thống nào? |  |  |
| Những lớp nào tham gia vào hành vi lỗi? |  |  |
| Stock nào đang tích lũy: pending state, bug backlog, nợ kỹ thuật, tải hệ thống? |  |  |
| Dòng vào nào làm stock tăng? |  |  |
| Dòng ra nào đang nghẽn? |  |  |
| Có trace/log nối được end-to-end không? |  |  |
| Fix dự kiến làm yếu loop xấu hay chỉ giảm triệu chứng? |  |  |
| Test chống hồi quy có bao phủ độ trễ và điều kiện thật không? |  |  |

## 3. Checklist review kiến trúc hoặc API/event contract

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Quyết định này thay đổi luồng thông tin nào? |  |  |
| Ai tạo, ai tiêu thụ, ai sở hữu trạng thái? |  |  |
| Có trạng thái pending, stale, failed, retry, rollback không? |  |  |
| Thứ tự event có quan trọng không? |  |  |
| Khi event đến trễ hoặc mất, hệ thống reconcile thế nào? |  |  |
| Can thiệp này tạo thêm loop retry/tải cao không? |  |  |
| Điểm đo latency end-to-end nằm ở đâu? |  |  |
| Log có đủ để nối app, cloud, controller, firmware không? |  |  |
| Definition of done có yêu cầu bằng chứng end-to-end không? |  |  |
| Điều kiện xem lại kiến trúc là gì? |  |  |

## 4. Checklist review tích hợp liên team

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| Luồng người dùng chính nào cần chạy xuyên hệ thống? |  |  |
| Mỗi team đang tối ưu mục tiêu riêng nào? |  |  |
| Mục tiêu chung có đủ rõ và đo được không? |  |  |
| Rủi ro tích hợp nào đang tích lũy nhưng chưa thấy? |  |  |
| Điểm kiểm tra end-to-end sớm nhất là khi nào? |  |  |
| QA tham gia từ lúc nào và với artifact nào? |  |  |
| Contract giữa các lớp có owner không? |  |  |
| Có bẫy policy resistance hoặc tối ưu cục bộ không? |  |  |
| Có thông tin nào team này biết nhưng team khác không thấy? |  |  |
| Quyết định nào cần ghi điều kiện xem lại? |  |  |

## 5. Checklist review KPI và quy trình

| Câu hỏi | Đã rõ? | Ghi chú |
| --- | --- | --- |
| KPI đang đo kết quả thật hay chỉ đo hoạt động? |  |  |
| Người trong hệ thống có thể đạt KPI bằng cách làm hại mục tiêu thật không? |  |  |
| Có dấu hiệu rule beating không? |  |  |
| KPI có khuyến khích tối ưu cục bộ không? |  |  |
| Có chỉ báo tác dụng phụ không? |  |  |
| KPI có làm tăng shifting the burden không? |  |  |
| Có đo stock quan trọng không: nợ kỹ thuật, bug reopen, tri thức chung? |  |  |
| Người bị ảnh hưởng bởi KPI có thấy dữ liệu kịp thời không? |  |  |
| Luật chơi hiện tại thưởng/phạt hành vi nào? |  |  |
| Cần đổi thông tin, luật chơi hay mục tiêu? |  |  |

## 6. Mẫu câu sử dụng trong trao đổi

| Tình huống | Câu có thể dùng |
| --- | --- |
| Muốn mở rộng ranh giới | "Mình đề xuất nhìn luồng này từ thiết bị đến app để tránh tối ưu một lớp nhưng bỏ sót hành vi end-to-end." |
| Muốn tìm stock | "Vấn đề này có vẻ không chỉ là một bug. Thứ gì đang tích lũy qua các sprint?" |
| Muốn hỏi về delay | "Tín hiệu lỗi này đến với mình sau bao lâu so với lúc người dùng gặp vấn đề?" |
| Muốn nói về loop | "Can thiệp này có thể quay lại làm tải hoặc retry tăng thêm không?" |
| Muốn tránh đổ lỗi | "Mình không nghĩ đây là lỗi riêng của một team. Cấu trúc phối hợp hiện tại đang tạo ra hành vi này như thế nào?" |
| Muốn nâng mức đòn bẩy | "Ngoài chỉnh tham số, ta có thể đổi luồng thông tin hoặc definition of done để hệ thống thấy lỗi sớm hơn không?" |
| Muốn review KPI | "Chỉ số này có thể bị đạt bằng cách không cải thiện kết quả thật không?" |

## 7. Mẫu ghi chú ngắn trong ticket

```text
Hành vi hệ thống:
Ranh giới phân tích:
Stock/flow liên quan:
Feedback loop nghi ngờ:
Độ trễ quan trọng:
Bẫy hệ thống cần tránh:
Can thiệp đề xuất:
Bằng chứng cần thu thập:
Điều kiện xem lại:
```

## 8. Checklist tự hỏi trước khi chốt quyết định

- Tôi đang nhìn sự kiện, mẫu hình hay cấu trúc?
- Ranh giới phân tích có bỏ sót lớp quan trọng không?
- Hệ thống đang tích lũy thứ gì?
- Can thiệp này làm loop xấu yếu đi hay mạnh hơn?
- Độ trễ nào có thể khiến ta kết luận quá sớm?
- Chỉ báo đang đo kết quả thật hay đo hoạt động?
- Có bẫy tối ưu cục bộ, chữa triệu chứng hoặc KPI lệch không?
- Có can thiệp nào ở mức luồng thông tin, luật chơi, mục tiêu hoặc mindset không?

Nếu có từ 2 câu trở lên chưa trả lời được, đừng chốt quyết định lớn. Hãy thiết kế một bước kiểm chứng nhỏ hơn.

