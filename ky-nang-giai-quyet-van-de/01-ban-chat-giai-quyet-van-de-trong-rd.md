# Bài 1: Gọi đúng vấn đề trước khi tìm giải pháp

## Đối tượng người học

Đội ngũ R&D Lumi: Thiết kế, Cơ khí, Thiết kế Phần cứng, Firmware, Software, App, QA Tester, PM và BA.

## Vấn đề thật

Khi áp lực tiến độ tăng, phản ứng tự nhiên là hỏi: "Sửa thế nào?". Câu hỏi này hữu ích khi vấn đề đã rõ. Nhưng trong R&D nhiều lớp, nó thường đến quá sớm. Nếu chưa phân biệt được triệu chứng, vấn đề thật, nguyên nhân, ràng buộc và mục tiêu, nhóm có thể sửa đúng một phần nhưng sai bài toán.

Ví dụ: "App bị chậm trạng thái" là triệu chứng. Vấn đề thật có thể là trải nghiệm người dùng mất niềm tin vào điều khiển thiết bị, hoặc luồng đồng bộ trạng thái chưa có tiêu chí nhất quán giữa firmware, controller, cloud và app. Hai cách hiểu này dẫn đến hai hướng giải quyết rất khác nhau.

## Mục tiêu học tập

Sau bài này, học viên có thể gọi đúng một vấn đề R&D bằng cách tạo problem statement và problem map đạt tiêu chí: nêu rõ triệu chứng, tác động, mục tiêu, phạm vi, ràng buộc, người liên quan và điều chưa biết.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết khác nhau giữa triệu chứng, vấn đề, nguyên nhân, ràng buộc và mục tiêu. |
| Skill | Viết problem statement và vẽ problem map ngắn gọn cho một tình huống thật. |
| Mindset | Chuyển từ "có lỗi thì sửa ngay" sang "gọi đúng vấn đề để sửa đúng chỗ". |
| Behavior | Trước khi đề xuất giải pháp, bạn nêu lại vấn đề bằng một câu có tác động và tiêu chí. |
| Evidence | Có problem statement một câu và problem map đủ 6 thành phần. |

## Bản chất

Giải quyết vấn đề là quá trình thu hẹp khoảng cách giữa trạng thái hiện tại và trạng thái mong muốn bằng hành động có bằng chứng. Điểm cốt lõi không phải là nghĩ ra nhiều giải pháp, mà là làm cho khoảng cách đó trở nên rõ ràng.

Trong R&D, một vấn đề thường có 5 lớp:

| Lớp | Câu hỏi | Ví dụ Lumi R&D |
| --- | --- | --- |
| Triệu chứng | Điều gì đang hiện ra? | Người dùng thấy app báo trạng thái thiết bị không khớp thực tế. |
| Tác động | Ai bị ảnh hưởng và ảnh hưởng thế nào? | Người dùng mất tin tưởng, QA khó xác nhận release, PM khó chốt phạm vi. |
| Vấn đề thật | Khoảng cách cần đóng là gì? | Hệ thống chưa đảm bảo trạng thái end-to-end nhất quán trong điều kiện mạng yếu. |
| Nguyên nhân | Vì sao khoảng cách tồn tại? | Có thể do firmware, controller, cloud, app, tiêu chí test hoặc phối hợp dữ liệu. |
| Mục tiêu | Kết quả đủ tốt là gì? | Trạng thái phản ánh đúng trong thời gian chấp nhận được, có tiêu chí đo rõ. |

## Vì sao quan trọng

Gọi sai vấn đề làm tăng chi phí ở các lớp sau:

- BA viết lại yêu cầu vì mục tiêu chưa rõ.
- PM điều phối nhiều vòng vì phạm vi thay đổi.
- Design hoặc cơ khí chỉnh phương án theo triệu chứng thay vì ràng buộc thật.
- Hardware và firmware tối ưu cục bộ nhưng tích hợp vẫn lỗi.
- Software, cloud và app sửa workaround khó bảo trì.
- QA test lại nhiều lần nhưng không biết tiêu chí nào là đúng.

Gọi đúng vấn đề không làm chậm dự án. Nó giúp nhóm chậm lại ở chỗ rẻ nhất để tránh chậm ở chỗ đắt nhất.

## Hiểu lầm phổ biến

1. "Vấn đề là bug đang thấy."  
   Bug là tín hiệu. Vấn đề thật là khoảng cách giữa hành vi hiện tại và kết quả cần đạt.

2. "Người phát hiện vấn đề phải biết nguyên nhân."  
   Người phát hiện chỉ cần mô tả rõ triệu chứng, tác động và điều kiện xuất hiện. Nguyên nhân cần được kiểm chứng.

3. "Nếu đã có giải pháp thì không cần viết problem statement."  
   Giải pháp chưa gắn với vấn đề rõ sẽ khó thuyết phục, khó test và khó biết khi nào nên dừng.

4. "Vấn đề thuộc team nào thì team đó tự xử."  
   Trong hệ sinh thái IoT, triệu chứng ở một lớp có thể do tín hiệu từ lớp khác. Gán sớm cho một team dễ làm mất dữ liệu và tạo phòng thủ.

## Cách nghĩ đúng

Một vấn đề tốt không phải là câu mô tả dài. Một vấn đề tốt là câu giúp nhóm cùng nhìn về một khoảng cách cụ thể, có tác động rõ và có thể kiểm chứng.

Mẫu câu:

```text
Trong [bối cảnh/điều kiện], [đối tượng bị ảnh hưởng] đang gặp [triệu chứng/tác động], khiến [hậu quả], trong khi mục tiêu cần đạt là [kết quả đo được]. Hiện chưa rõ [điều cần làm rõ].
```

Ví dụ:

```text
Trong kịch bản điều khiển thiết bị qua app khi mạng gia đình không ổn định, người dùng thấy trạng thái thiết bị cập nhật chậm hoặc không khớp thực tế, khiến họ phải thao tác lại và mất tin tưởng vào hệ thống. Mục tiêu cần đạt là trạng thái end-to-end được phản ánh nhất quán trong ngưỡng chấp nhận được. Hiện chưa rõ nguyên nhân chính nằm ở firmware, controller, cloud sync, app cache hay tiêu chí kiểm thử.
```

## Cách làm: Problem Map 6P

| Thành phần | Câu hỏi cần trả lời |
| --- | --- |
| Phenomenon - Triệu chứng | Điều gì đang xảy ra, ở đâu, khi nào, với điều kiện nào? |
| Pain - Tác động | Ai bị ảnh hưởng, ảnh hưởng đến chất lượng, tiến độ, chi phí hay trải nghiệm ra sao? |
| Purpose - Mục tiêu | Trạng thái mong muốn là gì, đo bằng gì? |
| Perimeter - Phạm vi | Vấn đề nằm trong/ngoài phạm vi nào, lớp hệ thống nào liên quan? |
| Pressure - Ràng buộc | Ràng buộc kỹ thuật, thời gian, sản xuất, vận hành, UX hoặc nguồn lực là gì? |
| Puzzle - Điều chưa biết | Giả định, dữ liệu thiếu, câu hỏi mở nào cần kiểm chứng? |

Các bước áp dụng:

1. Viết triệu chứng bằng dữ kiện quan sát được, tránh kết luận nguyên nhân.
2. Ghi tác động theo người dùng, hệ thống, dự án hoặc team.
3. Định nghĩa mục tiêu bằng kết quả có thể đo hoặc nghiệm thu.
4. Khoanh phạm vi hệ thống và các team có thể liên quan.
5. Ghi ràng buộc trước khi nghĩ giải pháp.
6. Liệt kê điều chưa biết để chuyển sang bài tìm nguyên nhân.

## Case

| Thành phần | Nội dung |
| --- | --- |
| Context | QA phát hiện một số thiết bị trong kịch bản smart home thỉnh thoảng không cập nhật đúng trạng thái trên app sau khi thao tác. |
| Wrong response | Kết luận nhanh "app cache sai", yêu cầu App sửa ngay phần hiển thị. |
| Root cause của phản ứng sai | Nhóm nhìn triệu chứng ở app như nguyên nhân, chưa tách luồng firmware, controller, cloud, app và điều kiện mạng. |
| Better response | Viết problem statement, xác định điều kiện tái hiện, tác động người dùng, ngưỡng mong muốn, các lớp cần kiểm tra và dữ liệu cần lấy. |
| Takeaway | Triệu chứng xuất hiện ở đâu không đồng nghĩa nguyên nhân nằm ở đó. |

## Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn 3 câu mô tả vấn đề trong ticket gần đây và đánh dấu đâu là triệu chứng, đâu là vấn đề thật. |
| Giải thích | Viết 3 câu giải thích vì sao nhảy ngay vào giải pháp có thể gây sai lệch. |
| Áp dụng nhỏ | Viết lại một ticket bug thành problem statement theo mẫu. |
| Mô phỏng | Với case app trạng thái chậm, điền Problem Map 6P trong 15 phút. |
| Áp dụng thật | Chọn một vấn đề đang mở trong dự án và tạo problem map gửi vào tài liệu/ticket liên quan. |
| Cải thiện | Sau phản hồi của đồng đội, chỉnh lại mục tiêu, phạm vi hoặc điều chưa biết. |

## Tự kiểm tra

| Mức | Tiêu chí | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn phân biệt được triệu chứng và vấn đề | Gạch chân được hai phần này trong một ticket |
| 2. Giải thích | Bạn giải thích được vì sao vấn đề mô tả hiện tại còn mơ hồ | Có nhận xét cụ thể về thiếu tác động, mục tiêu hoặc phạm vi |
| 3. Áp dụng | Bạn viết được problem statement dùng được | Có câu vấn đề được team đọc hiểu và tiếp tục phân tích |
| 4. Linh hoạt | Bạn điều chỉnh được phạm vi khi có dữ liệu mới | Có bản trước/sau và lý do thay đổi |

## Áp dụng sau bài học

- Việc làm trong 48 giờ: lấy một ticket, bug hoặc yêu cầu đang mở và viết lại thành problem statement.
- Bằng chứng cần thu thập: link/tên ticket, problem statement, Problem Map 6P.
- Điều chỉnh lần sau: hỏi đồng đội "câu này đã đủ rõ để tìm nguyên nhân chưa?" và ghi lại điểm còn thiếu.

