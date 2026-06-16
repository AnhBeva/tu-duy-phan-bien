# Bài 2: Tách vấn đề thật khỏi triệu chứng và giả định

## 1. Vấn đề thật

Trong R&D, câu "thiết bị không ổn định" có thể che giấu nhiều vấn đề khác nhau:

- Firmware reset khi tải cao.
- Kết nối Zigbee/Bluetooth Mesh/WiFi không ổn định trong một môi trường cụ thể.
- App hiển thị trạng thái cũ vì đồng bộ backend chậm.
- Nguồn hoặc bố trí phần cứng gây nhiễu.
- Test case chưa mô tả đúng điều kiện tái hiện.
- Yêu cầu ban đầu không nói rõ mức ổn định cần đạt.

Nếu nhóm nhảy thẳng vào sửa, mỗi team có thể sửa một phần nhưng không giải quyết nguyên nhân gốc.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể làm rõ một vấn đề R&D mơ hồ bằng cách tạo problem map và assumption log đạt tiêu chí: phân biệt được triệu chứng, tác động, nguyên nhân giả thuyết, ràng buộc, dữ kiện đã biết, giả định cần kiểm chứng và câu hỏi còn mở.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Biết khác nhau giữa triệu chứng, vấn đề thật, nguyên nhân, giả định và ràng buộc. |
| Skill | Tạo problem map và assumption log cho yêu cầu, bug hoặc rủi ro. |
| Mindset | Không vội sửa điều nhìn thấy đầu tiên; ưu tiên hiểu cơ chế gây lỗi. |
| Behavior | Khi nghe mô tả mơ hồ, bạn hỏi về tác động, điều kiện tái hiện, lớp hệ thống liên quan và bằng chứng. |
| Evidence | Một problem map và assumption log được dùng trong tình huống thật. |

## 3. Bản chất

Một vấn đề R&D thường có ba lớp:

1. **Triệu chứng:** điều đang được nhìn thấy, ví dụ "app cập nhật chậm", "thiết bị mất kết nối", "vỏ nóng", "test fail".
2. **Cơ chế:** chuỗi nguyên nhân có thể tạo ra triệu chứng, ví dụ độ trễ network, queue xử lý, nguồn nhiễu, logic retry, thiết kế anten, sai trạng thái backend.
3. **Tác động:** hậu quả thật với người dùng, sản phẩm, tiến độ, chất lượng hoặc vận hành.

Giả định xuất hiện khi nhóm lấp khoảng trống giữa ba lớp này bằng suy đoán. Giả định không xấu. Vấn đề chỉ xảy ra khi giả định được đối xử như dữ kiện.

## 4. Vì sao quan trọng

Làm rõ vấn đề và giả định giúp:

- BA viết yêu cầu và acceptance criteria rõ hơn.
- PM nhìn thấy phụ thuộc, rủi ro và điểm nghẽn.
- Thiết kế tránh tối ưu trải nghiệm trên một giả định sai.
- Cơ khí và Hardware phát hiện sớm ràng buộc vật lý, sản xuất, anten, nguồn, tản nhiệt hoặc không gian lắp ráp.
- Firmware, Software và App biết cần log, test và đo ở lớp nào.
- QA viết test case đúng điều kiện thực tế thay vì chỉ kiểm tra đường đi lý tưởng.

## 5. Hiểu lầm phổ biến

1. **"Mô tả triệu chứng càng dài thì vấn đề càng rõ."**  
   Mô tả dài nhưng thiếu điều kiện tái hiện, tác động và bằng chứng vẫn chưa đủ rõ.

2. **"Nguyên nhân đầu tiên nghĩ tới thường là đúng."**  
   Trong hệ thống nhiều lớp, nguyên nhân đầu tiên thường là nguyên nhân quen thuộc nhất với team đang nhìn vấn đề.

3. **"Ràng buộc là lý do để không phân tích thêm."**  
   Ràng buộc tốt giúp quyết định thực tế hơn; ràng buộc mơ hồ làm nhóm bỏ qua phương án tốt.

4. **"Chưa có bằng chứng thì không nên nói."**  
   Bạn vẫn nên nêu giả thuyết, nhưng phải gắn nhãn là giả thuyết và đề xuất cách kiểm chứng.

## 6. Cách nghĩ đúng

Khi vấn đề chưa rõ, đừng hỏi "ai xử lý?". Hãy hỏi "chúng ta đang thiếu điều gì để biết nên xử lý ở đâu?".

Một vấn đề đủ rõ cần trả lời được:

- Ai hoặc lớp hệ thống nào bị ảnh hưởng?
- Ảnh hưởng đo bằng gì?
- Xảy ra trong điều kiện nào?
- Điều gì đã biết chắc?
- Điều gì chỉ là giả định?
- Nếu giả định sai thì hậu quả là gì?
- Kiểm chứng nhỏ nhất là gì?

## 7. Cách làm: Problem map và assumption log

### Problem map

| Trường | Câu hỏi điền |
| --- | --- |
| Tình huống | Chuyện gì đang xảy ra? |
| Triệu chứng | Ta nhìn thấy hoặc đo được gì? |
| Tác động | Ai bị ảnh hưởng, ảnh hưởng ra sao? |
| Điều kiện | Xảy ra khi nào, ở thiết bị nào, môi trường nào, phiên bản nào? |
| Lớp liên quan | Thiết kế, cơ khí, phần cứng, firmware, kết nối, software, cloud, app, QA, BA, PM? |
| Nguyên nhân giả thuyết | Có những cơ chế nào có thể gây ra triệu chứng? |
| Dữ kiện đã có | Log, test, phản hồi, ảnh, video, đo đạc, tài liệu nào đang có? |
| Câu hỏi còn mở | Điều gì cần làm rõ trước khi quyết định? |

### Assumption log

| Giả định | Vì sao đang tin? | Nếu sai thì sao? | Mức rủi ro | Cách kiểm chứng |
| --- | --- | --- | --- | --- |
|  |  |  | Cao/Trung bình/Thấp |  |

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | QA ghi nhận thiết bị điều khiển chiếu sáng thỉnh thoảng không phản hồi khi app gửi lệnh qua hệ sinh thái Lumi. |
| Wrong response | Firmware bắt đầu sửa logic retry; App thêm loading lâu hơn; PM yêu cầu fix nhanh để kịp mốc. |
| Root cause | Nhóm chưa tách triệu chứng và điều kiện: lỗi chỉ xảy ra khi nhiều thiết bị cùng cập nhật trạng thái, mạng không ổn định và backend đang xử lý đồng bộ. |
| Better response | Lập problem map: triệu chứng là lệnh không phản hồi trong một số điều kiện; tác động là người dùng không tin trạng thái app; lớp liên quan gồm app, cloud/backend, bộ điều khiển trung tâm, firmware và kết nối; giả định nguy hiểm là lỗi nằm ở firmware. Kiểm chứng bằng log end-to-end và test lại với số lượng thiết bị khác nhau. |
| Takeaway | Làm rõ vấn đề không làm chậm fix; nó ngăn nhóm fix sai lớp. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Lấy một mô tả bug/yêu cầu gần đây và đánh dấu phần nào là triệu chứng, phần nào là tác động, phần nào là suy đoán. |
| Giải thích | Viết 3 nguyên nhân giả thuyết khác nhau có thể tạo ra cùng một triệu chứng. |
| Áp dụng nhỏ | Điền problem map cho tình huống đó. |
| Mô phỏng | Tạo assumption log với ít nhất 5 giả định, sắp xếp theo mức rủi ro. |
| Áp dụng thật | Chọn 1 giả định rủi ro cao và đề xuất cách kiểm chứng trong ticket/tài liệu/trao đổi team. |
| Cải thiện | Sau kiểm chứng, cập nhật giả định thành dữ kiện, bác bỏ hoặc câu hỏi mới. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn phân biệt được triệu chứng và vấn đề thật | Một ví dụ có gạch nhãn triệu chứng, tác động, giả định |
| 2. Giải thích | Bạn giải thích được vì sao sửa triệu chứng có thể thất bại | Mô tả được ít nhất 2 cơ chế khác nhau gây cùng triệu chứng |
| 3. Áp dụng | Bạn tạo được problem map và assumption log | Artifact có đủ dữ kiện, giả định, rủi ro và kiểm chứng |
| 4. Linh hoạt | Bạn cập nhật suy nghĩ khi có bằng chứng mới | Artifact có phần giả định được xác nhận, bác bỏ hoặc điều chỉnh |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: tạo problem map cho một bug, yêu cầu hoặc rủi ro đang mở.
- Bằng chứng cần thu thập: problem map, assumption log, một giả định được kiểm chứng hoặc kế hoạch kiểm chứng.
- Điều chỉnh lần sau: giả định nào bạn từng xem là chắc chắn nhưng thực ra cần kiểm chứng?
