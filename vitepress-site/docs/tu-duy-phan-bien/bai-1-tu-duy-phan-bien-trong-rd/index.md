# Bài 1: Nghĩ rõ trước khi xây sâu trong R&D

## Đối tượng người học

Đội ngũ R&D Lumi tham gia phát triển sản phẩm smart home, smart lighting, AI và IoT qua nhiều lớp: thiết bị vật lý, firmware, kết nối, bộ điều khiển trung tâm, software nền tảng, cloud/backend, app và trải nghiệm người dùng.

## 1. Vấn đề thật

Bạn có thể gặp tình huống này:

Một tính năng mới được mô tả là "người dùng cần điều khiển thiết bị nhanh hơn". BA viết yêu cầu, Thiết kế đề xuất luồng UI, App chuẩn bị màn hình, Software chuẩn bị API, Firmware kiểm tra logic thiết bị, QA lên test case. Sau vài vòng, nhóm phát hiện mỗi team hiểu "nhanh hơn" khác nhau: nhanh khi mở app, nhanh khi bấm điều khiển, nhanh khi đồng bộ trạng thái, hay nhanh khi nhiều thiết bị cùng phản hồi.

Không ai sai hoàn toàn. Vấn đề là cả nhóm đã triển khai trước khi làm rõ câu hỏi nền.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể nhận diện tình huống cần tư duy phản biện trong công việc R&D bằng cách dùng mô hình 5 câu hỏi nền để làm rõ vấn đề, giả định, bằng chứng, trade-off và hành động tiếp theo đạt tiêu chí: người khác đọc vào hiểu vấn đề đang được phân tích, điều chưa chắc chắn và bước kiểm chứng gần nhất.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Tư duy phản biện là năng lực kiểm tra chất lượng suy nghĩ trước khi biến nó thành hành động. |
| Skill | Đặt câu hỏi nền, phân biệt dữ kiện với giả định, nêu trade-off và chọn bước kiểm chứng. |
| Mindset | Không xem phản biện là bắt lỗi; xem phản biện là bảo vệ chất lượng quyết định. |
| Behavior | Trước khi đồng ý hoặc phản đối, bạn hỏi: vấn đề là gì, bằng chứng nào, giả định nào, rủi ro nào, thử gì trước? |
| Evidence | Một bản ghi 5 câu hỏi nền cho một yêu cầu, bug, thiết kế hoặc quyết định thật. |

## 3. Bản chất

Tư duy phản biện trong R&D là quá trình kiểm tra xem cách hiểu, lập luận và quyết định của nhóm có đủ vững để đưa vào triển khai hay chưa.

Nó không phải là tranh luận cho thắng. Nó là cách làm cho những thứ dễ bị ẩn đi trở nên nhìn thấy được:

- Vấn đề thật phía sau yêu cầu.
- Giả định đang được xem như sự thật.
- Bằng chứng đang mạnh hay yếu.
- Trade-off giữa trải nghiệm, kỹ thuật, chi phí, tiến độ, sản xuất và vận hành.
- Rủi ro nếu quyết định hiện tại sai.

Trong sản phẩm IoT, một quyết định nhỏ ở một lớp có thể lan sang lớp khác. Một thay đổi UI có thể làm phát sinh yêu cầu API. Một ràng buộc cơ khí có thể ảnh hưởng anten, tản nhiệt hoặc bố trí PCB. Một lựa chọn firmware có thể ảnh hưởng QA, app và cloud. Vì vậy tư duy phản biện không chỉ giúp cá nhân nghĩ tốt hơn; nó giúp hệ thống phối hợp tốt hơn.

## 4. Vì sao quan trọng

Nếu thiếu tư duy phản biện, R&D dễ gặp các lỗi đắt giá:

- Làm đúng yêu cầu được ghi nhưng sai mục tiêu sản phẩm.
- Fix bug nhanh nhưng lỗi lặp lại ở biến thể khác.
- Tối ưu một team nhưng tăng rủi ro cho team khác.
- Ra quyết định theo người nói tự tin nhất thay vì bằng chứng tốt nhất.
- Phát hiện rủi ro quá muộn khi đã tích hợp hoặc gần phát hành.

Nếu dùng tốt, nhóm có thể:

- Giảm hiểu sai yêu cầu.
- Phát hiện sớm giả định nguy hiểm.
- Tạo tiêu chí nghiệm thu rõ hơn.
- Tranh luận kỹ thuật mà không làm hỏng quan hệ phối hợp.
- Học từ lỗi để cải thiện sản phẩm và quy trình.

## 5. Hiểu lầm phổ biến

1. **"Phản biện là phủ định ý tưởng của người khác."**  
   Thực tế: phản biện tốt giúp ý tưởng mạnh hơn bằng cách kiểm tra điều kiện đúng, bằng chứng và rủi ro.

2. **"Người có nhiều kinh nghiệm thì không cần kiểm tra giả định."**  
   Thực tế: kinh nghiệm giúp phát hiện mẫu hình nhanh hơn, nhưng cũng dễ tạo thiên kiến nếu không kiểm chứng.

3. **"Có dữ liệu là đủ."**  
   Thực tế: dữ liệu cần đúng ngữ cảnh, đủ chất lượng và liên quan trực tiếp đến quyết định.

4. **"Cứ triển khai rồi sửa sau."**  
   Thực tế: cách này phù hợp với thay đổi nhỏ, nhưng nguy hiểm với kiến trúc, phần cứng, cơ khí, giao thức, trải nghiệm cốt lõi hoặc quyết định ảnh hưởng nhiều team.

## 6. Cách nghĩ đúng

Hãy xem mọi quyết định R&D như một cây cầu nối giữa mục tiêu và bằng chứng. Cây cầu này có thể yếu ở 5 điểm:

1. Vấn đề chưa đúng.
2. Giả định chưa lộ diện.
3. Bằng chứng chưa đủ.
4. Trade-off chưa được nói rõ.
5. Bước kiểm chứng chưa cụ thể.

Khi phản biện, bạn không hỏi để làm chậm. Bạn hỏi để biết quyết định hiện tại có đủ chắc cho mức rủi ro mà nhóm sắp nhận hay chưa.

## 7. Cách làm: Mô hình 5 câu hỏi nền

Dùng 5 câu hỏi sau trước một yêu cầu, thiết kế, bug, kế hoạch hoặc quyết định:

| Câu hỏi | Mục đích | Câu trả lời tốt cần có |
| --- | --- | --- |
| 1. Vấn đề thật là gì? | Tránh xử lý triệu chứng | Nêu được người dùng, hệ thống hoặc team nào bị ảnh hưởng và ảnh hưởng ra sao |
| 2. Điều gì đang là giả định? | Tránh xem suy đoán là sự thật | Tách được dữ kiện đã biết và điều cần kiểm chứng |
| 3. Bằng chứng nào đang có? | Đánh giá chất lượng lập luận | Có log, test, quan sát người dùng, đo đạc, ticket, prototype hoặc tiêu chí nghiệm thu |
| 4. Trade-off chính là gì? | Tránh tối ưu cục bộ | Nêu được được gì, mất gì, ai bị ảnh hưởng, rủi ro nào tăng |
| 5. Bước kiểm chứng gần nhất là gì? | Biến tranh luận thành hành động | Có thử nghiệm, review, test case, prototype hoặc quyết định nhỏ tiếp theo |

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Một tính năng tự động hóa cho smart home cần hiển thị trạng thái thiết bị gần như tức thời trên app. |
| Wrong response | App cho rằng backend cần trả trạng thái nhanh hơn; backend cho rằng firmware gửi chậm; firmware cho rằng thiết bị đã gửi đúng; QA chỉ ghi "trạng thái cập nhật chậm". |
| Root cause | Nhóm chưa định nghĩa "gần như tức thời" theo thời gian đo được, điểm đo, điều kiện mạng, số lượng thiết bị và hành vi người dùng. |
| Better response | Dùng 5 câu hỏi nền: vấn đề là độ trễ cảm nhận trên app; giả định là firmware/backend/app đều có thể là nguồn trễ; bằng chứng cần log theo từng lớp; trade-off là tần suất đồng bộ, pin, tải cloud và trải nghiệm; bước kiểm chứng là đo end-to-end ở 3 điều kiện mạng và 2 kịch bản thiết bị. |
| Takeaway | Khi vấn đề đi qua nhiều lớp, câu hỏi đúng quan trọng hơn việc đoán team nào sai. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn một yêu cầu hoặc bug gần đây. Gạch chân các từ mơ hồ như nhanh, ổn định, dễ dùng, tối ưu, an toàn, thông minh. |
| Giải thích | Viết 3 cách hiểu khác nhau của một từ mơ hồ và hậu quả nếu mỗi team hiểu khác nhau. |
| Áp dụng nhỏ | Điền mô hình 5 câu hỏi nền cho tình huống đã chọn. |
| Mô phỏng | Viết một phản hồi 5-7 câu để đề nghị nhóm làm rõ vấn đề mà không quy lỗi cho cá nhân/team. |
| Áp dụng thật | Đưa 1 câu hỏi nền vào ticket, tài liệu yêu cầu, bug report hoặc cuộc trao đổi kỹ thuật hiện tại. |
| Cải thiện | Sau khi nhận phản hồi, bổ sung bằng chứng hoặc sửa lại câu hỏi cho rõ hơn. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn biết khi nào cần dừng lại để hỏi rõ | Chỉ ra được ít nhất 3 dấu hiệu mơ hồ trong một tình huống R&D |
| 2. Giải thích | Bạn giải thích được vì sao phản biện giúp giảm rủi ro | Mô tả được rủi ro nếu nhóm bỏ qua một câu hỏi nền |
| 3. Áp dụng | Bạn dùng được mô hình 5 câu hỏi | Có bản ghi 5 câu hỏi cho một tình huống thật |
| 4. Linh hoạt | Bạn dùng câu hỏi mà không tạo phòng thủ | Có phản hồi từ đồng nghiệp hoặc kết quả trao đổi rõ hơn sau khi bạn đặt câu hỏi |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một ticket, yêu cầu, bug hoặc quyết định đang mở và điền mô hình 5 câu hỏi nền.
- Bằng chứng cần thu thập: đường link/tên artifact, 5 câu trả lời, một điểm còn thiếu bằng chứng và bước kiểm chứng gần nhất.
- Điều chỉnh lần sau: câu hỏi nào giúp nhóm rõ hơn, câu hỏi nào gây khó hiểu hoặc phòng thủ?
