# Bài 2: Tìm nguyên nhân gốc mà không rơi vào đổ lỗi

## Vấn đề thật

Sau khi gọi được vấn đề, nhóm thường muốn kết luận nguyên nhân thật nhanh. Điều này dễ hiểu: dự án cần tiến độ, bug cần người xử lý, release cần quyết định. Nhưng nếu nguyên nhân chưa được kiểm chứng, nhóm có thể fix theo giả thuyết đầu tiên, bỏ qua nguyên nhân hệ thống hoặc vô tình biến phân tích thành đổ lỗi cá nhân.

Trong R&D Lumi, nguyên nhân gốc có thể nằm ở yêu cầu chưa rõ, tiêu chí nghiệm thu thiếu, thiết kế chưa xét ràng buộc sản xuất, phần cứng và firmware chưa đồng bộ, cloud/app hiểu khác trạng thái, QA thiếu kịch bản tích hợp hoặc PM chưa nhìn thấy dependency.

## Mục tiêu học tập

Sau bài này, học viên có thể truy nguyên nhân gốc của một vấn đề R&D bằng cách tạo root-cause map, 5 Whys, Ishikawa và assumption/risk log đạt tiêu chí: phân biệt dữ kiện với giả định, có ít nhất ba nhánh nguyên nhân, có bằng chứng đi kèm và có kế hoạch kiểm chứng giả định rủi ro cao.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết nguyên nhân gần, nguyên nhân gốc, điều kiện tạo lỗi và giả định chưa kiểm chứng. |
| Skill | Dùng 5 Whys, Ishikawa và assumption/risk log để mở rộng và kiểm chứng nguyên nhân. |
| Mindset | Chuyển từ "ai làm sai?" sang "điều kiện nào khiến lỗi có thể xảy ra và lặp lại?". |
| Behavior | Khi nêu nguyên nhân, bạn nói rõ bằng chứng, mức chắc chắn và cách kiểm chứng. |
| Evidence | Có root-cause map và assumption/risk log cho một vấn đề thật. |

## Bản chất

Nguyên nhân gốc không phải lúc nào cũng là nguyên nhân đầu tiên trong chuỗi sự kiện. Nguyên nhân gốc là điều kiện nếu được thay đổi thì vấn đề ít có khả năng lặp lại.

Có 4 loại nguyên nhân cần tách:

| Loại | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| Nguyên nhân trực tiếp | Sự kiện gần nhất tạo triệu chứng | App nhận trạng thái cũ từ cache |
| Nguyên nhân kỹ thuật | Cơ chế kỹ thuật tạo lỗi | API chưa phân biệt timestamp nguồn dữ liệu |
| Nguyên nhân quy trình | Cách làm việc khiến lỗi lọt qua | Test case chưa có kịch bản mạng yếu và đồng bộ nhiều thiết bị |
| Nguyên nhân nhận thức | Cách hiểu sai khiến quyết định sai | Nhóm mặc định trạng thái từ cloud luôn mới hơn local |

## Vì sao quan trọng

Nếu chỉ sửa nguyên nhân trực tiếp, nhóm có thể đóng bug nhanh nhưng không giảm xác suất tái diễn. Nếu truy nguyên nhân như tìm người có lỗi, nhóm sẽ phòng thủ, che giấu thông tin và mất cơ hội học. Phân tích nguyên nhân tốt tạo ra hiểu biết chung để sửa cả cơ chế tạo lỗi.

## Hiểu lầm phổ biến

1. "5 Whys là hỏi vì sao 5 lần là đủ."  
   Sai. 5 Whys là cách đào sâu, nhưng cần dừng ở nơi có hành động cải thiện hệ thống và có bằng chứng.

2. "Nguyên nhân gốc chỉ có một."  
   Nhiều vấn đề R&D là kết quả của nhiều điều kiện cùng xuất hiện: yêu cầu, kỹ thuật, quy trình, giao tiếp và kiểm thử.

3. "Không có bằng chứng thì không được nêu giả thuyết."  
   Được nêu giả thuyết, nhưng phải ghi là giả thuyết và thiết kế cách kiểm chứng.

4. "Root cause analysis là post-mortem sau khi lỗi xảy ra."  
   Có thể dùng trước khi quyết định lớn để tìm rủi ro tiềm ẩn.

## Cách nghĩ đúng

Hãy xem nguyên nhân như một bản đồ giả thuyết có bằng chứng tăng dần, không phải một bản án. Câu nói tốt khi phân tích:

```text
Hiện có bằng chứng A và B cho thấy giả thuyết X có khả năng cao. Nhưng chúng ta vẫn chưa loại trừ Y. Cần kiểm chứng thêm bằng dữ liệu Z trước khi khóa hướng sửa.
```

Script giao tiếp an toàn:

- "Mình đang tách người khỏi vấn đề. Điều kiện nào khiến lỗi này có thể xảy ra?"
- "Giả thuyết này dựa trên bằng chứng nào?"
- "Có giả thuyết cạnh tranh nào giải thích cùng triệu chứng không?"
- "Nếu nguyên nhân này đúng, ta sẽ quan sát thấy log/test/hành vi nào?"
- "Nếu sửa điểm này, điều gì giúp vấn đề ít lặp lại hơn?"

## Cách làm: 3 công cụ

### 1. 5 Whys có kiểm chứng

| Why | Câu trả lời | Bằng chứng | Mức chắc chắn | Cần kiểm chứng |
| --- | --- | --- | --- | --- |
| 1 | Vì sao triệu chứng xảy ra? |  | Cao/Trung bình/Thấp |  |
| 2 | Vì sao điều đó xảy ra? |  |  |  |
| 3 | Vì sao điều kiện đó tồn tại? |  |  |  |
| 4 | Vì sao quy trình/tín hiệu không chặn được? |  |  |  |
| 5 | Thay đổi gì giúp lỗi ít lặp lại? |  |  |  |

### 2. Ishikawa cho R&D nhiều lớp

Nhánh nguyên nhân nên xét:

- Yêu cầu/BA: mục tiêu, phạm vi, acceptance criteria, ngoại lệ.
- Thiết kế/UX/ID: hành vi người dùng, affordance, ràng buộc kiểu dáng.
- Cơ khí: lắp ráp, vật liệu, không gian, tản nhiệt, sản xuất.
- Phần cứng: linh kiện, nguồn, anten, layout PCB, sai số.
- Firmware: logic nhúng, giao thức, tài nguyên, update, trạng thái local.
- Software/controller/cloud: API, đồng bộ, concurrency, dữ liệu, hiệu năng.
- App: cache, UI state, offline/online, thông báo lỗi.
- QA: test coverage, môi trường test, dữ liệu test, kịch bản tích hợp.
- PM/phối hợp: dependency, mốc quyết định, thay đổi phạm vi, bàn giao.

### 3. Assumption/Risk Log

| Giả định | Nếu sai thì hậu quả | Bằng chứng hiện có | Cách kiểm chứng | Owner | Hạn kiểm chứng |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

## Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Một thiết bị thỉnh thoảng mất kết nối trong môi trường test có nhiều thiết bị gần nhau. |
| Wrong response | Kết luận "firmware chưa ổn định" và yêu cầu Firmware sửa reconnect logic. |
| Root cause của phản ứng sai | Nhóm neo vào lớp firmware vì triệu chứng là mất kết nối, chưa xét nguồn, anten, vị trí lắp, nhiễu, controller, gateway, test environment và tiêu chí ổn định. |
| Better response | Vẽ Ishikawa theo các lớp, ghi giả thuyết cạnh tranh, lấy log firmware/controller, kiểm tra nguồn, RSSI, điều kiện mạng, phiên bản app và kịch bản QA. |
| Takeaway | Root cause tốt là nguyên nhân có bằng chứng và có hành động làm giảm tái diễn, không phải phỏng đoán nghe hợp lý nhất. |

## Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn một kết luận nguyên nhân trong ticket và đánh dấu bằng chứng đi kèm. |
| Giải thích | Viết vì sao kết luận đó có thể là giả định chứ chưa phải nguyên nhân. |
| Áp dụng nhỏ | Điền 5 Whys cho một bug quen thuộc, mỗi dòng có bằng chứng hoặc điều cần kiểm chứng. |
| Mô phỏng | Vẽ Ishikawa cho case mất kết nối thiết bị. |
| Áp dụng thật | Tạo assumption/risk log cho một vấn đề đang mở. |
| Cải thiện | Sau khi có dữ liệu mới, cập nhật mức chắc chắn của từng giả thuyết. |

## Tự kiểm tra

| Mức | Tiêu chí | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn phân biệt được dữ kiện và giả định | Có bảng đánh dấu rõ evidence/assumption |
| 2. Giải thích | Bạn giải thích được vì sao nguyên nhân đầu tiên chưa chắc là nguyên nhân gốc | Có ít nhất hai giả thuyết cạnh tranh |
| 3. Áp dụng | Bạn tạo được root-cause map đủ nhánh | Có root-cause map dùng được trong trao đổi team |
| 4. Linh hoạt | Bạn thay đổi kết luận khi bằng chứng mới xuất hiện | Có log cập nhật giả thuyết và lý do |

## Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một bug đang mở và viết ít nhất ba giả thuyết nguyên nhân cạnh tranh.
- Bằng chứng cần thu thập: root-cause map, assumption/risk log, dữ liệu kiểm chứng đầu tiên.
- Điều chỉnh lần sau: trước khi nói "nguyên nhân là...", hãy nói "giả thuyết hiện tại là...".

