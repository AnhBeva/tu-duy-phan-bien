# Workbook cá nhân: Tư duy phản biện cho Lumi R&D

## Cách dùng

Điền workbook này trong khi học các bài `01` đến `05`. Không cần viết dài. Mỗi phần nên gắn với một tình huống thật: yêu cầu, bug, thiết kế, test case, rủi ro, quyết định kỹ thuật hoặc vấn đề phối hợp.

## 1. Bản đồ 5 câu hỏi nền

| Câu hỏi | Câu trả lời của bạn |
| --- | --- |
| Vấn đề thật là gì? |  |
| Điều gì đang là giả định? |  |
| Bằng chứng nào đang có? |  |
| Trade-off chính là gì? |  |
| Bước kiểm chứng gần nhất là gì? |  |

### Bằng chứng hoàn thành

- Tên ticket/tài liệu/tình huống:
- Người hoặc team liên quan:
- Điều bạn đã làm rõ hơn sau khi điền:

## 2. Problem map

| Trường | Nội dung |
| --- | --- |
| Tình huống |  |
| Triệu chứng |  |
| Tác động |  |
| Điều kiện xảy ra |  |
| Lớp hệ thống liên quan |  |
| Nguyên nhân giả thuyết |  |
| Dữ kiện đã có |  |
| Câu hỏi còn mở |  |

### Kiểm tra nhanh

- Tôi đã tách triệu chứng khỏi tác động chưa?
- Tôi đã ghi điều kiện tái hiện chưa?
- Tôi đã nêu nhiều hơn một nguyên nhân giả thuyết chưa?
- Tôi đã chỉ ra bằng chứng còn thiếu chưa?

## 3. Assumption log

| Giả định | Vì sao đang tin? | Nếu sai thì sao? | Mức rủi ro | Cách kiểm chứng | Kết quả cập nhật |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

### Câu hỏi gợi ý

- Giả định nào đang ảnh hưởng quyết định lớn nhất?
- Giả định nào nếu sai sẽ làm chậm tiến độ hoặc tăng lỗi tích hợp?
- Giả định nào có thể kiểm chứng nhanh nhất?

## 4. Bảng claim-evidence-risk

| Trường | Nội dung |
| --- | --- |
| Claim |  |
| Evidence |  |
| Evidence quality |  |
| Reasoning |  |
| Boundary |  |
| Counter-evidence |  |
| Risk if wrong |  |
| Next check |  |

### Viết lại phản biện

Câu phản biện ban đầu có thể gây phòng thủ:

```text

```

Câu phản biện viết lại theo hướng claim/evidence/risk:

```text

```

## 5. Decision note liên-team

| Phần | Nội dung |
| --- | --- |
| Bối cảnh |  |
| Mục tiêu |  |
| Tiêu chí chọn |  |
| Phương án |  |
| Trade-off |  |
| Quyết định |  |
| Theo dõi/xem lại |  |

### Kiểm tra nhanh

- Team nào chịu ảnh hưởng trực tiếp?
- Có phương án "không làm ngay" hoặc "làm phạm vi hẹp" chưa?
- Rủi ro nào được chấp nhận có điều kiện?
- Khi nào quyết định cần được xem lại?

## 6. Risk experiment note

| Phần | Nội dung |
| --- | --- |
| Risk statement |  |
| Assumption |  |
| Impact |  |
| Early signal |  |
| Experiment |  |
| Pass/fail criteria |  |
| Decision after check |  |
| Learning update |  |

### Công thức viết rủi ro

```text
Chúng ta đang giả định rằng [điều chưa chắc] trong [điều kiện], nếu sai sẽ gây [hậu quả]. Ta sẽ kiểm chứng bằng [hành động] và quyết định dựa trên [tiêu chí].
```

## 7. Learning note sau lỗi hoặc tắc nghẽn

| Câu hỏi | Câu trả lời |
| --- | --- |
| Chuyện gì đã xảy ra? |  |
| Tác động là gì? |  |
| Giả định nào đã sai hoặc thiếu? |  |
| Bằng chứng nào đáng lẽ cần có sớm hơn? |  |
| Test/checklist/tài liệu nào thiếu? |  |
| Quyết định nào cần ghi lại rõ hơn? |  |
| Hành động cải thiện cụ thể là gì? |  |
| Bằng chứng hoàn thành hành động cải thiện là gì? |  |

## 8. Nhật ký áp dụng 14 ngày

| Ngày | Tình huống | Công cụ đã dùng | Kết quả | Bằng chứng | Điều chỉnh lần sau |
| --- | --- | --- | --- | --- | --- |
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |

## 9. Cam kết hành động trong 48 giờ

Tôi sẽ áp dụng công cụ sau:

- Công cụ:
- Tình huống cụ thể:
- Người/team liên quan:
- Bằng chứng tôi sẽ tạo:
- Khi nào hoàn thành:
- Tôi sẽ biết mình làm tốt nếu:
