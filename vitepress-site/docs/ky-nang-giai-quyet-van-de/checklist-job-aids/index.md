# Checklist và job aids

Dùng các checklist này ngay trong công việc. Mỗi checklist nên mất 3-10 phút, không phải tài liệu dài.

## 1. Checklist trước khi đề xuất giải pháp

- Vấn đề đã được viết thành một câu có bối cảnh, tác động và mục tiêu chưa?
- Triệu chứng có bị nhầm thành nguyên nhân không?
- Có ít nhất hai giả thuyết nguyên nhân cạnh tranh không?
- Bằng chứng hiện có là gì?
- Bằng chứng còn thiếu là gì?
- Team/lớp hệ thống nào có thể bị ảnh hưởng?
- Ràng buộc kỹ thuật, sản xuất, UX, QA, timeline đã được nêu chưa?
- Tiêu chí biết "đã giải quyết đủ tốt" là gì?

## 2. Checklist problem statement

```text
Trong [bối cảnh/điều kiện],
[đối tượng bị ảnh hưởng] đang gặp [triệu chứng/tác động],
khiến [hậu quả],
trong khi mục tiêu cần đạt là [kết quả đo được].
Hiện chưa rõ [điều cần làm rõ].
```

Tự kiểm:

- Có bối cảnh cụ thể không?
- Có tác động thật không?
- Có mục tiêu đo được không?
- Có điều chưa biết không?
- Có tránh kết luận nguyên nhân quá sớm không?

## 3. Checklist phân tích nguyên nhân

- Điều này là dữ kiện hay giả định?
- Nếu giả thuyết này đúng, ta sẽ quan sát thấy gì?
- Nếu giả thuyết này sai, ta sẽ quan sát thấy gì?
- Có giả thuyết nào ở lớp khác giải thích cùng triệu chứng không?
- Có nguyên nhân quy trình hoặc phối hợp nào làm lỗi lọt qua không?
- Có nguyên nhân nhận thức nào như hiểu sai yêu cầu, tiêu chí hoặc trạng thái hệ thống không?
- Cách kiểm chứng nhỏ nhất là gì?

## 4. Checklist họp xử lý vấn đề liên team

- Vấn đề đang được mô tả bằng cùng một câu chưa?
- Mỗi team đang nhìn thấy dữ liệu nào?
- Có team nào bị ảnh hưởng nhưng chưa có mặt hoặc chưa được hỏi không?
- Dependency nào đang block quyết định?
- Ai là owner kết quả, không chỉ owner task?
- Quyết định nào cần đưa ra hôm nay?
- Điều gì cần kiểm chứng sau họp?
- Update tiếp theo gửi khi nào, cho ai, bằng format nào?

## 5. Checklist option matrix

- Có ít nhất ba phương án không?
- Có phương án sửa nhanh và phương án sửa cơ chế không?
- Tiêu chí chọn có liên quan đến problem statement không?
- Có nêu trade-off về UX, kỹ thuật, QA, sản xuất, timeline hoặc bảo trì không?
- Phương án bị loại có lý do rõ không?
- Rủi ro còn lại có owner không?
- Có điều kiện xem lại quyết định không?

## 6. Checklist experiment plan

- Thử nghiệm đang kiểm chứng giả thuyết nào?
- Phạm vi thử có đủ hẹp để kiểm soát rủi ro không?
- Dữ liệu cần thu là gì?
- Ngưỡng thành công/thất bại là gì?
- Ai thực hiện, ai xác nhận, ai quyết định tiếp?
- Nếu kết quả trái dự đoán thì làm gì?
- Có cần rollback hoặc giới hạn ảnh hưởng không?

## 7. Checklist learning note

- Có kết quả đo được, không chỉ cảm nhận không?
- Có điều đúng và trái dự đoán không?
- Có giả định đã được xác nhận hoặc loại trừ không?
- Có bài học kỹ thuật và bài học phối hợp không?
- Có hành động chuẩn hóa cụ thể không?
- Có chỉ báo để phát hiện tái diễn không?
- Có người chịu trách nhiệm cập nhật checklist/test/tài liệu/log/quy trình không?

## 8. Script giao tiếp ngắn

### Khi vấn đề còn mơ hồ

```text
Mình muốn tách triệu chứng khỏi vấn đề thật. Điều chúng ta đang quan sát là gì, tác động là gì và mục tiêu cần đạt là gì?
```

### Khi nguyên nhân chưa có bằng chứng

```text
Giả thuyết này nghe hợp lý. Mình muốn ghi rõ bằng chứng hiện có và cách kiểm chứng để tránh khóa kết luận quá sớm.
```

### Khi cần phản biện an toàn

```text
Mình không phản biện người đề xuất, mình đang kiểm tra rủi ro của phương án. Nếu chọn hướng này, điều gì có thể khiến nó thất bại?
```

### Khi cần mời team khác

```text
Triệu chứng đang thấy ở lớp này, nhưng nguyên nhân có thể liên quan lớp khác. Mình đề xuất mời thêm [team] để kiểm tra giả thuyết trước khi chốt hướng sửa.
```

### Khi cần dừng tranh luận

```text
Hai hướng đều có lý. Ta chọn tiêu chí quyết định và dữ liệu cần thu để phân biệt, thay vì tiếp tục tranh luận bằng cảm giác.
```

