# Case thực hành: Trạng thái thiết bị chậm và sai trong hệ smart home

## Cách dùng

Chọn một case, đọc bối cảnh, tự điền worksheet trước khi xem gợi ý. Mục tiêu không phải tìm một team sai, mà là nhìn được cấu trúc hệ thống tạo ra hành vi.

## Case 1: App hiển thị trạng thái đèn chậm sau khi điều khiển

### Context

Sau một bản release, một nhóm người dùng phản ánh app Lumina đôi khi hiển thị trạng thái đèn chậm 3-8 giây sau khi bấm điều khiển. Lỗi xuất hiện nhiều hơn ở nhà có nhiều thiết bị, có automation chạy theo cảnh và mạng WiFi không ổn định. App team thấy request điều khiển đã gửi thành công. Backend/cloud thấy command được nhận. Firmware team thấy thiết bị đã đổi trạng thái. QA tái hiện được lỗi nhưng không ổn định.

### Wrong response

Nhóm họp nhanh và chia việc:

- App tăng tần suất refresh trạng thái sau khi người dùng bấm.
- Backend tối ưu một API trạng thái.
- Firmware thêm log cục bộ khi nhận command.
- QA tăng số test case điều khiển đèn.

Sau 2 tuần, lỗi giảm trong lab nhưng vẫn xuất hiện ngoài thực tế. Backend bắt đầu có tải cao hơn trong giờ cao điểm. App đôi khi nhảy trạng thái: bật, tắt, rồi bật lại.

### Root cause theo tư duy hệ thống

Vấn đề không nằm ở một điểm duy nhất. Hệ thống có nhiều lớp trạng thái và vòng phản hồi:

- Người dùng bấm trên app.
- App gửi command và tạm hiển thị optimistic state.
- Cloud/backend nhận command và chuyển về controller/hub.
- Controller gửi qua mesh hoặc giao thức thiết bị.
- Firmware đổi trạng thái và phát event.
- Event quay lại controller, cloud, app.
- App reconcile trạng thái optimistic với trạng thái thật.

Khi điều kiện mạng yếu hoặc nhiều thiết bị cùng phát event, độ trễ và thứ tự event thay đổi. App refresh nhiều hơn làm tăng tải backend. Tải cao làm response chậm hơn. Response chậm làm app retry/refresh nhiều hơn. Đây là vòng khuếch đại xấu.

### Better response

Nhóm phân tích bằng 5 artifact:

| Artifact | Câu trả lời mẫu |
| --- | --- |
| System map | Ranh giới từ app đến thiết bị và quay lại app; phần tử gồm app, cloud, controller, mesh, firmware, QA, người dùng, log/trace. |
| Stock-flow map | Stock chính: "trạng thái chưa được xác nhận end-to-end" và "event pending". Dòng vào: command mới, event từ thiết bị, retry. Dòng ra: confirmation đúng thứ tự, timeout có xử lý, reconciliation. |
| Delay log | Trễ mạng, trễ queue backend, trễ mesh, trễ app cache, trễ phát hiện qua telemetry. |
| Feedback loop map | App thấy trạng thái chưa chắc -> refresh/retry tăng -> tải backend tăng -> response chậm -> trạng thái chưa chắc kéo dài. |
| Leverage point note | Mức thấp: chỉnh timeout. Mức trung: trace ID xuyên lớp và dashboard latency end-to-end. Mức cao: định nghĩa lại mục tiêu là "trạng thái người dùng thấy có nhãn chắc chắn/chờ xác nhận" thay vì "mọi lớp trả nhanh". |

### Takeaway

Trong hệ IoT, "trạng thái đúng" không phải một giá trị đơn lẻ. Nó là kết quả của luồng thông tin qua nhiều lớp, có độ trễ, thứ tự event, cache, retry và kỳ vọng người dùng. Nếu chỉ tối ưu từng API hoặc từng lớp, nhóm có thể làm hệ thống dao động mạnh hơn.

## Worksheet cho Case 1

### 1. System map

```text
Hành vi cần hiểu:
Ranh giới phân tích:
Phần tử chính:
Liên kết chính:
Mục tiêu tuyên bố:
Mục đích thật qua hành vi:
Điểm chưa chắc chắn:
```

### 2. Stock-flow map

```text
Stock chính:
Dòng vào làm stock tăng:
Dòng ra làm stock giảm:
Chỉ báo đo stock:
Điểm nghẽn:
Team ảnh hưởng dòng vào:
Team ảnh hưởng dòng ra:
```

### 3. Delay log

| Loại trễ | Xuất hiện ở đâu? | Tác động đến quyết định |
| --- | --- | --- |
| Trễ nhận biết |  |  |
| Trễ đo lường |  |  |
| Trễ quyết định |  |  |
| Trễ triển khai |  |  |
| Trễ tác động |  |  |

### 4. Feedback loop map

```text
Loop 1:
Loại loop:
Độ trễ:
Hành vi dự kiến:
Điểm can thiệp:
```

### 5. Leverage point note

```text
Can thiệp mức thấp:
Can thiệp mức trung bình:
Can thiệp mức cao:
Can thiệp chọn thử:
Bằng chứng sau 1-2 chu kỳ:
Điều kiện xem lại:
```

## Case 2: Bug tích hợp tăng mạnh cuối sprint

### Context

Trong một dự án thiết bị mới, các team đều báo tiến độ xanh trong 2 tuần đầu. Đến tuần cuối, QA phát hiện nhiều lỗi tích hợp: app chưa xử lý trạng thái pending, firmware event thiếu một trường, backend contract thay đổi, cơ khí thay đổi vị trí anten làm kết nối yếu hơn trong một số điều kiện. PM tăng tần suất họp daily và yêu cầu các team cập nhật rủi ro chi tiết hơn.

### Wrong response

Nhóm cho rằng nguyên nhân là QA test muộn và thiếu người. Giải pháp được đưa ra là thêm người QA, tăng số test case và yêu cầu cập nhật trạng thái hằng ngày.

### Root cause theo tư duy hệ thống

Stock "rủi ro tích hợp chưa được phát hiện" đã tích lũy từ đầu sprint. Các team có thể hoàn thành task riêng nhưng chưa có điểm kiểm tra end-to-end đủ sớm. Dashboard tiến độ đo task done, không đo luồng người dùng chạy qua hệ thống.

Vòng phản hồi xấu:

```text
Áp lực tiến độ tăng -> ưu tiên đóng task riêng tăng -> review liên lớp giảm -> rủi ro tích hợp ẩn tăng -> bug cuối sprint tăng -> áp lực tiến độ tăng
```

### Better response

- Đổi chỉ báo từ "task done" sang thêm "end-to-end flow verified".
- Tạo contract review bắt buộc khi API/event/state model thay đổi.
- Dùng trace ID hoặc artifact liên lớp cho luồng chính.
- Đưa QA vào sớm để review acceptance criteria và điều kiện ngoại lệ.
- Đặt quality gate nhỏ giữa sprint thay vì dồn cuối sprint.

### Takeaway

Một hệ thống có thể báo xanh ở từng phần nhưng đỏ ở hành vi chung. Tiến độ cục bộ không thay thế được bằng chứng end-to-end.

## Case 3: KPI đóng bug làm chất lượng không tăng

### Context

Để cải thiện chất lượng, nhóm đặt KPI giảm số bug mở. Sau một tháng, số bug mở giảm. Tuy nhiên support vẫn nhận phản ánh lỗi lặp lại, QA thấy bug reopen tăng và dev phàn nàn nhiều bug được đóng bằng workaround.

### Wrong response

Tăng yêu cầu đóng bug nhanh hơn và đặt thêm SLA cho từng severity.

### Root cause theo tư duy hệ thống

Đây là bẫy rule beating và shifting the burden. Hệ thống học cách tối ưu chỉ số "bug mở" thay vì chất lượng thật. Workaround làm giảm đau ngắn hạn nhưng tăng nợ kỹ thuật.

### Better response

- Đo thêm bug reopen, defect escape, thời gian hotfix, lỗi lặp theo module.
- Phân biệt "closed by workaround" và "closed by root fix".
- Bắt buộc learning note cho bug lặp lại hoặc bug xuyên lớp.
- Gắn KPI chất lượng với bằng chứng giảm lỗi lặp, không chỉ giảm bug mở.

### Takeaway

Chỉ báo sai có thể khiến hệ thống vận hành rất hiệu quả để tạo kết quả sai.

## Bài tập tổng hợp

Chọn một case trên hoặc vấn đề thật của bạn, hoàn thành bảng:

| Câu hỏi | Câu trả lời |
| --- | --- |
| Sự kiện đang gây áp lực là gì? |  |
| Mẫu hình lặp lại theo thời gian là gì? |  |
| Stock chính đang tích lũy là gì? |  |
| Vòng phản hồi nào đang làm vấn đề mạnh hơn? |  |
| Bẫy hệ thống nào có thể đang xuất hiện? |  |
| Can thiệp hiện tại chạm vào mức đòn bẩy nào? |  |
| Can thiệp có đòn bẩy cao hơn là gì? |  |
| Bằng chứng nào cần thu thập trong 1-2 tuần? |  |

