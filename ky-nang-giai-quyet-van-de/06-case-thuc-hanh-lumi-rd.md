# Case thực hành Lumi R&D

Mỗi case dưới đây dùng cùng một mẫu phân tích:

```text
1. Problem statement:
2. Problem Map 6P:
3. Root-cause hypotheses:
4. Evidence needed:
5. Option matrix:
6. Experiment/execution plan:
7. Learning/standardization note:
```

## Case 1: App hiển thị trạng thái thiết bị không nhất quán

### Context

Trong một kịch bản smart home, người dùng thao tác bật/tắt thiết bị qua app. Thiết bị thực tế đã đổi trạng thái, nhưng app đôi khi hiển thị trạng thái cũ trong vài giây hoặc đến khi người dùng refresh. Lỗi không xuất hiện mọi lần.

### Wrong response

Kết luận nhanh rằng app cache sai và yêu cầu App sửa hiển thị để refresh thường xuyên hơn.

### Root cause của phản ứng sai

Triệu chứng xuất hiện ở app nhưng nguyên nhân có thể nằm ở firmware, controller, cloud sync, API, cache app, điều kiện mạng hoặc tiêu chí test. Refresh nhiều hơn có thể che lỗi, tăng tải và không làm rõ nguồn trạng thái.

### Better response

Tạo problem statement về trạng thái end-to-end, thu log theo timeline từ firmware-controller-cloud-app, xác định ngưỡng chấp nhận, so sánh phương án cache app, timestamp/sequence trạng thái và test tích hợp mạng yếu.

### Takeaway

Triệu chứng ở lớp nào không đồng nghĩa nguyên nhân nằm ở lớp đó.

### Worksheet

| Mục | Câu trả lời của bạn |
| --- | --- |
| Problem statement |  |
| Triệu chứng quan sát được |  |
| Tác động đến người dùng |  |
| Lớp hệ thống liên quan |  |
| Giả thuyết nguyên nhân 1 |  |
| Giả thuyết nguyên nhân 2 |  |
| Giả thuyết nguyên nhân 3 |  |
| Bằng chứng cần thu |  |
| Phương án A/B/C |  |
| Thử nghiệm nhỏ nhất |  |
| Tiêu chí thành công |  |
| Điều cần chuẩn hóa |  |

## Case 2: Thiết kế vỏ đẹp nhưng khó sản xuất ổn định

### Context

Concept kiểu dáng sản phẩm được đánh giá tốt về thẩm mỹ. Khi chuyển sang thiết kế cơ khí và sản xuất mẫu, phát sinh vấn đề về lắp ráp, độ bền chi tiết, không gian cho PCB/anten và chất lượng hoàn thiện.

### Wrong response

Đổ lỗi cho team cơ khí "chưa chuyển được concept" hoặc yêu cầu giữ nguyên kiểu dáng và tự xử lý kỹ thuật phía sau.

### Root cause của phản ứng sai

Nhóm xem thiết kế kiểu dáng và thiết kế sản xuất như hai bước tách rời. Ràng buộc phần cứng, anten, tản nhiệt, lắp ráp, khuôn và sản xuất chưa được đưa vào sớm.

### Better response

Tạo problem map về khoảng cách giữa concept và sản phẩm có thể sản xuất, mời Design-Cơ khí-Hardware-QA cùng xác định ràng buộc, tạo option matrix giữa giữ concept, chỉnh chi tiết, đổi cấu trúc hoặc prototype nhanh.

### Takeaway

Giải pháp tốt phải bảo toàn giá trị thiết kế trong ràng buộc sản xuất, không phải để một team gánh toàn bộ trade-off muộn.

### Worksheet

| Mục | Câu trả lời của bạn |
| --- | --- |
| Problem statement |  |
| Ràng buộc cơ khí/phần cứng/sản xuất |  |
| Tác động nếu giữ nguyên concept |  |
| Tác động nếu chỉnh concept |  |
| Giả thuyết nguyên nhân |  |
| Bằng chứng/prototype cần có |  |
| Phương án đề xuất |  |
| Tiêu chí chọn |  |
| Team cần xác nhận |  |
| Bài học chuẩn hóa |  |

## Case 3: Bug mất kết nối thiết bị khó tái hiện

### Context

QA phát hiện thiết bị đôi khi mất kết nối trong môi trường có nhiều thiết bị. Lỗi không ổn định, log chưa đủ, mỗi team có giả thuyết khác nhau.

### Wrong response

Yêu cầu Firmware sửa reconnect logic ngay vì thiết bị là nơi biểu hiện lỗi.

### Root cause của phản ứng sai

Nhóm chưa phân biệt nguyên nhân trực tiếp, nguyên nhân kỹ thuật và điều kiện môi trường. Có nguy cơ bỏ qua nguồn, anten, nhiễu, gateway, giao thức, controller, cloud, app hoặc test environment.

### Better response

Dùng Ishikawa theo các lớp, tạo assumption/risk log, bổ sung logging, chạy thử nghiệm có kiểm soát về số lượng thiết bị, khoảng cách, nguồn, RSSI và phiên bản firmware/controller.

### Takeaway

Với lỗi khó tái hiện, mục tiêu đầu tiên không phải là fix ngay mà là làm lỗi quan sát được và phân biệt được giả thuyết.

### Worksheet

| Mục | Câu trả lời của bạn |
| --- | --- |
| Điều kiện tái hiện đã biết |  |
| Điều kiện chưa biết |  |
| Nhánh nguyên nhân kỹ thuật |  |
| Nhánh nguyên nhân môi trường |  |
| Nhánh nguyên nhân quy trình test |  |
| Dữ liệu cần thu |  |
| Thử nghiệm nhỏ |  |
| Tiêu chí xác nhận nguyên nhân |  |
| Quyết định tiếp nếu không tái hiện |  |

## Case 4: Yêu cầu AI nghe hấp dẫn nhưng tiêu chí thành công mơ hồ

### Context

Một ý tưởng AI cho nhà thông minh được đề xuất với kỳ vọng "thông minh hơn" và "hỗ trợ người dùng tốt hơn". BA, Design, Software, App và QA chưa thống nhất hành vi cụ thể, dữ liệu đầu vào, ranh giới an toàn và cách nghiệm thu.

### Wrong response

Chuyển ngay sang prototype kỹ thuật vì ý tưởng hấp dẫn và có áp lực trình diễn.

### Root cause của phản ứng sai

Nhóm nhảy vào giải pháp trước khi làm rõ vấn đề người dùng, tình huống sử dụng, tiêu chí đúng/sai, rủi ro trải nghiệm và giới hạn vận hành.

### Better response

Viết problem statement từ nhu cầu người dùng, định nghĩa acceptance criteria, xác định kịch bản không nên tự động hóa, tạo prototype hẹp và test hành vi với tiêu chí rõ.

### Takeaway

AI không thay thế bước làm rõ vấn đề; nó làm bước này quan trọng hơn vì rủi ro mơ hồ cao hơn.

### Worksheet

| Mục | Câu trả lời của bạn |
| --- | --- |
| Người dùng/tình huống |  |
| Vấn đề thật |  |
| Hành vi AI mong muốn |  |
| Hành vi không được phép |  |
| Dữ liệu cần có |  |
| Tiêu chí nghiệm thu |  |
| Rủi ro UX/an toàn |  |
| Prototype hẹp |  |
| Cách đo kết quả |  |

## Case 5: PM thấy dự án trễ nhưng nguyên nhân mỗi team nói khác nhau

### Context

Dự án có dấu hiệu trễ mốc tích hợp. Mỗi team báo một lý do: yêu cầu thay đổi, phần cứng chưa ổn, firmware chờ mẫu, app chờ API, QA chờ build ổn định. Cuộc họp dễ biến thành cập nhật trạng thái mà không tháo được điểm nghẽn.

### Wrong response

Tăng tần suất họp và yêu cầu từng team cam kết lại deadline.

### Root cause của phản ứng sai

Tập trung vào áp lực tiến độ nhưng chưa vẽ dependency, chưa xác định điểm nghẽn thật, chưa phân biệt việc đang chờ, việc bị block và việc có thể làm song song.

### Better response

Tạo problem map về trễ tích hợp, vẽ dependency, phân loại blocker, tạo option matrix cho giảm phạm vi, thử nghiệm sớm, mock API, build tích hợp hẹp hoặc điều chỉnh mốc.

### Takeaway

Vấn đề tiến độ thường là vấn đề hệ thống phối hợp, không chỉ là vấn đề nhắc việc.

### Worksheet

| Mục | Câu trả lời của bạn |
| --- | --- |
| Mốc đang rủi ro |  |
| Tác động nếu trễ |  |
| Dependency chính |  |
| Blocker thật |  |
| Giả định tiến độ |  |
| Phương án giảm rủi ro |  |
| Trade-off phạm vi/tốc độ/chất lượng |  |
| Cách cập nhật liên team |  |
| Bài học chuẩn hóa |  |

