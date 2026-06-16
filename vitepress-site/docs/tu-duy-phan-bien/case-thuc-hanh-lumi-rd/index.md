# Case thực hành: Tư duy phản biện trong Lumi R&D

## Cách dùng

Chọn ít nhất hai case. Với mỗi case, hãy điền worksheet:

| Câu hỏi | Câu trả lời của bạn |
| --- | --- |
| Vấn đề thật là gì? |  |
| Triệu chứng đang thấy là gì? |  |
| Giả định nào đang bị xem như dữ kiện? |  |
| Bằng chứng hiện có là gì? |  |
| Bằng chứng còn thiếu là gì? |  |
| Trade-off chính là gì? |  |
| Câu hỏi phản biện nên đặt là gì? |  |
| Kiểm chứng nhỏ nhất là gì? |  |
| Quyết định hoặc hành động tiếp theo là gì? |  |

## Case 1: Yêu cầu "điều khiển nhanh hơn" chưa rõ nghĩa

| Thành phần | Nội dung |
| --- | --- |
| Context | Một yêu cầu sản phẩm nói rằng người dùng cần điều khiển thiết bị trong app nhanh hơn. BA ghi yêu cầu, Thiết kế giảm số bước thao tác, App tối ưu animation, Software đề xuất cache trạng thái, Firmware kiểm tra phản hồi thiết bị. |
| Wrong response | Mỗi team tự tối ưu theo cách hiểu của mình mà không thống nhất "nhanh hơn" là nhanh ở điểm nào. |
| Root cause | Yêu cầu thiếu tiêu chí đo: thời gian mở màn hình, thời gian gửi lệnh, thời gian thiết bị thực thi, thời gian trạng thái hiển thị đúng, hay cảm nhận người dùng. |
| Better response | Làm problem map: xác định hành trình người dùng, điểm đo end-to-end, lớp liên quan và tiêu chí nghiệm thu. Chỉ sau đó mới chọn phương án tối ưu. |
| Takeaway | Từ mơ hồ trong yêu cầu thường là nơi rủi ro tích hợp bắt đầu. |

### Thực hành

- Viết lại yêu cầu thành 3 phiên bản có tiêu chí đo khác nhau.
- Chọn phiên bản tốt nhất và nêu bằng chứng cần có.
- Đề xuất một acceptance criterion mà QA có thể kiểm thử.

## Case 2: Lỗi kết nối thiết bị bị quy vội cho firmware

| Thành phần | Nội dung |
| --- | --- |
| Context | QA ghi nhận một cảm biến đôi lúc mất kết nối với bộ điều khiển trung tâm. Lỗi xảy ra không đều, khó tái hiện. |
| Wrong response | Nhóm mặc định lỗi thuộc firmware và yêu cầu firmware tăng retry. |
| Root cause | Chưa kiểm tra các lớp khác: nguồn, anten, vị trí lắp đặt, nhiễu, giao thức kết nối, bộ điều khiển trung tâm, cloud/app hiển thị trạng thái hoặc điều kiện test. |
| Better response | Tạo assumption log: lỗi do firmware, lỗi do môi trường kết nối, lỗi do phần cứng, lỗi do trạng thái hiển thị, lỗi do test setup. Mỗi giả định có cách kiểm chứng riêng. |
| Takeaway | Trong hệ IoT, triệu chứng ở thiết bị không có nghĩa nguyên nhân nằm ở firmware. |

### Thực hành

- Liệt kê ít nhất 5 nguyên nhân giả thuyết.
- Sắp xếp theo rủi ro và khả năng kiểm chứng nhanh.
- Viết kế hoạch kiểm chứng 2 giả định rủi ro cao nhất.

## Case 3: UI/UX mượt hơn nhưng trạng thái hệ thống khó đúng hơn

| Thành phần | Nội dung |
| --- | --- |
| Context | Thiết kế và App muốn hiển thị trạng thái sau thao tác ngay lập tức để trải nghiệm mượt hơn. QA lo nếu thiết bị không thực thi lệnh thì app sẽ tạo cảm giác sai. |
| Wrong response | Hai bên tranh luận "trải nghiệm quan trọng hơn" hoặc "đúng trạng thái quan trọng hơn" mà không phân loại tình huống. |
| Root cause | Chưa phân biệt hành động rủi ro thấp/cao, trạng thái pending/confirmed, timeout, rollback và thông báo lỗi. |
| Better response | Viết decision note: hành động rủi ro thấp có thể dùng trạng thái pending hoặc optimistic có chỉ báo; hành động nhạy cảm cần xác nhận trước khi hiển thị hoàn tất; QA bổ sung test case mất kết nối và timeout. |
| Takeaway | Trade-off tốt thường cần phân loại tình huống, không chỉ chọn một cực. |

### Thực hành

- Tạo bảng trade-off giữa "mượt" và "đúng".
- Viết 3 trạng thái UI: pending, confirmed, failed.
- Viết điều kiện khi nào được dùng optimistic UI.

## Case 4: Vỏ sản phẩm đẹp nhưng rủi ro anten và tản nhiệt

| Thành phần | Nội dung |
| --- | --- |
| Context | Concept kiểu dáng sản phẩm phần cứng được đánh giá đẹp và nhỏ gọn. Cơ khí bắt đầu chuyển thành thiết kế vỏ. Hardware lo không đủ không gian cho anten, bố trí PCB và tản nhiệt. |
| Wrong response | Nhóm chọn concept theo cảm nhận thẩm mỹ, sau đó mới xử lý ràng buộc kỹ thuật khi đã đi sâu. |
| Root cause | Ràng buộc cơ khí/phần cứng chưa được phản biện sớm bằng tiêu chí: không gian linh kiện, khoảng cách anten, nhiệt, lắp ráp, sản xuất và độ bền. |
| Better response | Tạo checklist review concept liên-team: Thiết kế, Cơ khí, Hardware, QA cùng đánh giá rủi ro. Chốt concept kèm giả định kỹ thuật và kiểm chứng mẫu nhanh. |
| Takeaway | Thiết kế đẹp cần được bảo vệ bằng bằng chứng khả thi, không chỉ bằng cảm nhận. |

### Thực hành

- Liệt kê ràng buộc kỹ thuật có thể ảnh hưởng concept.
- Viết 5 câu hỏi phản biện cho review concept.
- Đề xuất một prototype/kiểm chứng nhỏ trước khi khóa thiết kế.

## Case 5: Backend, app và thiết bị không đồng bộ trạng thái

| Thành phần | Nội dung |
| --- | --- |
| Context | Người dùng thấy app báo thiết bị đã bật, nhưng thiết bị thực tế chưa bật hoặc bộ điều khiển trung tâm chưa xác nhận. |
| Wrong response | App sửa hiển thị, Backend sửa API, Firmware sửa phản hồi riêng lẻ nhưng lỗi vẫn xuất hiện trong một số điều kiện. |
| Root cause | Chưa có mô hình trạng thái end-to-end thống nhất: requested, accepted, executing, confirmed, failed, stale. |
| Better response | Làm rõ state machine chung và điểm sở hữu trạng thái giữa thiết bị, bộ điều khiển trung tâm, cloud/backend và app. QA test theo state transition thay vì chỉ test màn hình. |
| Takeaway | Một bug trạng thái thường là lỗi mô hình hệ thống, không chỉ lỗi giao diện. |

### Thực hành

- Vẽ bảng trạng thái tối thiểu cho một lệnh điều khiển.
- Xác định nguồn sự thật của từng trạng thái.
- Viết 3 test case cho trạng thái lỗi hoặc timeout.

## Case 6: QA tham gia quá muộn

| Thành phần | Nội dung |
| --- | --- |
| Context | Gần mốc phát hành, QA mới nhận bản tích hợp đầy đủ và phát hiện nhiều lỗi liên-team. PM bị áp lực timeline, các team kỹ thuật phải sửa gấp. |
| Wrong response | Nhóm xem QA là bước kiểm tra cuối và chỉ yêu cầu QA test nhanh hơn. |
| Root cause | Rủi ro tích hợp chưa được chuyển thành test sớm; acceptance criteria chưa đủ rõ; QA chưa tham gia khi yêu cầu và thiết kế còn đang hình thành. |
| Better response | Đưa QA vào sớm để cùng BA, PM và kỹ thuật xác định tiêu chí nghiệm thu, kịch bản rủi ro, test tích hợp tối thiểu và điều kiện release. |
| Takeaway | QA không chỉ tìm lỗi; QA giúp làm rõ chất lượng cần đạt trước khi lỗi xuất hiện. |

### Thực hành

- Chọn một yêu cầu và viết 5 acceptance criteria kiểm thử được.
- Xác định 3 rủi ro tích hợp cần test sớm.
- Viết một câu phản biện để đề nghị QA tham gia sớm mà không quy lỗi.

## Case 7: Chọn công nghệ khi tiêu chí chưa rõ

| Thành phần | Nội dung |
| --- | --- |
| Context | Một phần nền tảng cần hiệu năng và độ tin cậy cao. Có ý kiến đề xuất dùng Rust cho phần logic này; ý kiến khác muốn tận dụng công nghệ hiện có để đi nhanh hơn. |
| Wrong response | Nhóm tranh luận theo sở thích công nghệ hoặc kinh nghiệm cá nhân. |
| Root cause | Chưa xác định tiêu chí chọn: hiệu năng, an toàn bộ nhớ, năng lực team, thời gian phát triển, tích hợp với hệ thống hiện có, bảo trì, kiểm thử và rủi ro vận hành. |
| Better response | Viết claim-evidence-risk và decision note. Nếu chọn Rust, cần nêu phần nào hưởng lợi rõ, bằng chứng năng lực triển khai, rủi ro học/maintain và phạm vi áp dụng ban đầu. |
| Takeaway | Công nghệ nên được chọn theo tiêu chí và bằng chứng, không theo hào quang của công nghệ. |

### Thực hành

- Viết 5 tiêu chí chọn công nghệ.
- Tạo bảng trade-off giữa hai phương án.
- Viết điều kiện xem lại quyết định sau giai đoạn thử nghiệm.

## Case 8: Bug lặp lại sau khi đã fix

| Thành phần | Nội dung |
| --- | --- |
| Context | Một lỗi đã được fix trong bản trước nhưng biến thể tương tự xuất hiện lại ở sản phẩm hoặc module khác. |
| Wrong response | Nhóm xử lý như một bug mới độc lập và tiếp tục fix triệu chứng. |
| Root cause | Bài học từ lỗi trước chưa được chuyển thành checklist, test case, rule thiết kế hoặc tiêu chí review. |
| Better response | Viết learning note: lỗi đi qua vì giả định nào, test nào thiếu, tài liệu nào chưa cập nhật, checklist nào cần thêm. Sau đó cập nhật job aid để ngăn biến thể lỗi lặp lại. |
| Takeaway | Một bug được fix nhưng không tạo bài học hệ thống thì vẫn còn nợ chất lượng. |

### Thực hành

- Chọn một lỗi từng lặp lại và viết learning note.
- Xác định artifact cần cập nhật: test case, checklist, tài liệu yêu cầu, tài liệu kỹ thuật hoặc decision note.
- Viết một hành động cải thiện có người sở hữu và bằng chứng hoàn thành.
