# Bài 4: Ra quyết định liên-team khi mỗi lựa chọn đều có trade-off

## 1. Vấn đề thật

Một sản phẩm Lumi thường đi qua nhiều lớp: thiết kế, cơ khí, phần cứng, firmware, software, cloud/backend, app và QA. Vì vậy một quyết định hiếm khi chỉ ảnh hưởng một team.

Ví dụ:

- UI muốn thao tác ít bước hơn, nhưng firmware cần thêm trạng thái để phản hồi chính xác.
- Cơ khí muốn vỏ mỏng hơn, nhưng phần cứng cần không gian cho anten, tản nhiệt hoặc bố trí linh kiện.
- Backend muốn đồng bộ thường xuyên hơn, nhưng thiết bị dùng pin cần tiết kiệm năng lượng.
- PM cần giữ mốc phát hành, nhưng QA thấy rủi ro tích hợp chưa được kiểm chứng.

Nếu không nói rõ trade-off, nhóm dễ tranh luận như thể chỉ có một đáp án đúng.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể đề xuất một quyết định liên-team bằng cách viết decision note nêu rõ bối cảnh, tiêu chí chọn, phương án, trade-off, rủi ro, điều kiện xem lại và bằng chứng cần theo dõi đạt tiêu chí: team liên quan hiểu vì sao chọn, chấp nhận phần đánh đổi và biết khi nào cần mở lại quyết định.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Biết quyết định liên-team cần tiêu chí, phương án và trade-off rõ ràng. |
| Skill | Viết decision note ngắn nhưng đủ để các team kiểm tra. |
| Mindset | Không tìm phương án hoàn hảo; tìm phương án phù hợp nhất với mục tiêu và rủi ro hiện tại. |
| Behavior | Khi có xung đột ý kiến, bạn đưa cuộc trao đổi về tiêu chí chọn và bằng chứng. |
| Evidence | Một decision note được dùng cho yêu cầu, thiết kế, bug hoặc kế hoạch phát hành. |

## 3. Bản chất

Trade-off là sự đánh đổi có thật giữa các giá trị cùng quan trọng. Trong R&D, các giá trị thường va chạm:

- Trải nghiệm người dùng và độ phức tạp kỹ thuật.
- Tốc độ phát hành và mức độ kiểm chứng.
- Chi phí linh kiện và độ ổn định.
- Kích thước thiết bị và khả năng tản nhiệt/anten/lắp ráp.
- Đồng bộ thời gian thực và tải hệ thống/pin.
- Tính năng mới và khả năng bảo trì.

Quyết định tốt không xóa trade-off. Quyết định tốt làm trade-off đủ rõ để nhóm chọn có trách nhiệm.

## 4. Vì sao quan trọng

Decision note giúp:

- Giảm lặp lại tranh luận vì lý do chọn đã được ghi lại.
- Giúp PM theo dõi rủi ro và điều kiện mở lại quyết định.
- Giúp QA xây test case theo rủi ro đã chấp nhận.
- Giúp BA và Thiết kế giải thích phạm vi trải nghiệm.
- Giúp kỹ thuật biết điều gì là ràng buộc, điều gì có thể đổi.
- Giúp team mới tham gia hiểu lịch sử quyết định.

## 5. Hiểu lầm phổ biến

1. **"Quyết định nhanh là quyết định tốt."**  
   Nhanh chỉ tốt khi rủi ro thấp hoặc đã có tiêu chí rõ.

2. **"Có consensus là đủ."**  
   Đồng thuận mà không ghi trade-off vẫn dễ vỡ khi xuất hiện lỗi hoặc áp lực tiến độ.

3. **"Decision note làm nặng quy trình."**  
   Decision note tốt có thể ngắn. Nó tiết kiệm thời gian khi vấn đề quay lại.

4. **"Chọn một phương án nghĩa là phương án khác sai."**  
   Nhiều phương án đều hợp lý trong các điều kiện khác nhau. Việc cần làm là nói rõ điều kiện chọn.

## 6. Cách nghĩ đúng

Trước quyết định liên-team, hãy hỏi:

- Mục tiêu ưu tiên là gì?
- Tiêu chí chọn nào quan trọng nhất lúc này?
- Có những phương án nào thật sự khả thi?
- Mỗi phương án được gì, mất gì?
- Team nào chịu ảnh hưởng hoặc cần đổi cách làm?
- Rủi ro nào chấp nhận được, rủi ro nào phải kiểm chứng trước?
- Khi nào quyết định này cần được xem lại?

## 7. Cách làm: Decision note 7 phần

| Phần | Nội dung cần viết |
| --- | --- |
| 1. Bối cảnh | Vấn đề/quyết định đang cần chốt là gì? |
| 2. Mục tiêu | Quyết định này phục vụ mục tiêu sản phẩm/kỹ thuật nào? |
| 3. Tiêu chí chọn | Tiêu chí nào dùng để so sánh phương án? |
| 4. Phương án | Có những lựa chọn nào, kể cả không làm ngay? |
| 5. Trade-off | Mỗi phương án được gì, mất gì, ảnh hưởng team nào? |
| 6. Quyết định | Chọn phương án nào, vì sao phù hợp nhất hiện tại? |
| 7. Theo dõi | Rủi ro, chỉ số, test hoặc điều kiện nào khiến cần xem lại? |

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Team App muốn hiển thị trạng thái thiết bị thật nhanh sau khi người dùng bấm điều khiển. Software đề xuất cập nhật optimistic UI trước khi nhận xác nhận đầy đủ từ thiết bị. QA lo ngại trạng thái hiển thị sai nếu thiết bị không thực hiện lệnh. |
| Wrong response | App nói trải nghiệm phải mượt; QA nói không được sai; Software nói backend có thể xử lý. Cuộc trao đổi xoay quanh đúng/sai tuyệt đối. |
| Root cause | Nhóm chưa đưa ra tiêu chí chọn: ưu tiên cảm nhận tốc độ hay độ chính xác trạng thái trong từng loại hành động? Chưa phân loại hành động rủi ro thấp/cao. |
| Better response | Viết decision note: với hành động rủi ro thấp, app có thể hiển thị trạng thái "đang thực hiện" hoặc optimistic có dấu hiệu pending; với hành động nhạy cảm, chỉ cập nhật sau xác nhận. QA bổ sung test case cho mất kết nối, timeout và rollback trạng thái. |
| Takeaway | Quyết định tốt không chọn giữa nhanh và đúng một cách tuyệt đối; nó phân loại tình huống và quy định điều kiện áp dụng. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn một quyết định gần đây có ảnh hưởng từ hai team trở lên. Liệt kê các team bị ảnh hưởng. |
| Giải thích | Viết các tiêu chí chọn đang xung đột với nhau. |
| Áp dụng nhỏ | Tạo bảng phương án và trade-off cho ít nhất 2 lựa chọn. |
| Mô phỏng | Viết decision note 7 phần cho tình huống đó. |
| Áp dụng thật | Chia sẻ decision note trong ticket/tài liệu/cuộc trao đổi hiện tại để nhận phản hồi. |
| Cải thiện | Bổ sung điều kiện xem lại quyết định sau phản hồi. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn thấy được quyết định có ảnh hưởng liên-team | Liệt kê team/lớp hệ thống chịu tác động |
| 2. Giải thích | Bạn nói rõ trade-off thay vì chỉ nêu ý kiến | Có bảng được/mất của từng phương án |
| 3. Áp dụng | Bạn viết được decision note đủ rõ | Decision note có đủ 7 phần |
| 4. Linh hoạt | Bạn biết khi nào cần xem lại quyết định | Có điều kiện theo dõi, chỉ số hoặc rủi ro trigger mở lại |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: viết decision note cho một quyết định đang có tranh luận hoặc ảnh hưởng nhiều team.
- Bằng chứng cần thu thập: decision note, phản hồi của ít nhất một team liên quan, điều kiện xem lại.
- Điều chỉnh lần sau: tiêu chí chọn nào cần được nói sớm hơn để giảm tranh luận?
