# Mindmap level 4: Kĩ năng giải quyết vấn đề cho Lumi R&D

```text
Kĩ năng giải quyết vấn đề
├── 1. Bản chất giải quyết vấn đề
│   ├── 1.1. Khoảng cách cần đóng
│   │   ├── 1.1.1. Trạng thái hiện tại
│   │   │   └── Triệu chứng, dữ kiện, log, phản hồi người dùng, kết quả test đang có
│   │   ├── 1.1.2. Trạng thái mong muốn
│   │   │   └── Kết quả cần đạt, tiêu chí nghiệm thu, ngưỡng chất lượng, trải nghiệm mong muốn
│   │   ├── 1.1.3. Khoảng cách
│   │   │   └── Phần chênh giữa hiện tại và mục tiêu, không phải phỏng đoán nguyên nhân
│   │   └── 1.1.4. Hành động có bằng chứng
│   │       └── Việc làm nhằm thu hẹp khoảng cách và có cách đo kết quả
│   ├── 1.2. Phân biệt khái niệm nền
│   │   ├── 1.2.1. Triệu chứng
│   │   │   └── Điều đang hiện ra, ví dụ app hiển thị trạng thái thiết bị không khớp
│   │   ├── 1.2.2. Vấn đề thật
│   │   │   └── Tác động cần xử lý, ví dụ trạng thái end-to-end chưa nhất quán trong điều kiện mạng yếu
│   │   ├── 1.2.3. Nguyên nhân
│   │   │   └── Điều kiện tạo ra vấn đề, có thể nằm ở firmware, controller, cloud, app, QA hoặc yêu cầu
│   │   └── 1.2.4. Ràng buộc
│   │       └── Giới hạn về kỹ thuật, sản xuất, UX, timeline, nguồn lực, chất lượng hoặc bảo trì
│   ├── 1.3. Tư duy đúng
│   │   ├── 1.3.1. Chậm lại đúng chỗ
│   │   │   └── Làm rõ vấn đề trước khi viết code, đổi thiết kế hoặc chốt kế hoạch
│   │   ├── 1.3.2. Tách người khỏi vấn đề
│   │   │   └── Hỏi điều kiện nào tạo lỗi thay vì ai gây lỗi
│   │   ├── 1.3.3. Dùng bằng chứng
│   │   │   └── Phân biệt dữ kiện, giả thuyết, suy luận và quyết định
│   │   └── 1.3.4. Học sau hành động
│   │       └── Kết thúc bằng learning note và chuẩn hóa, không chỉ đóng ticket
│   └── 1.4. Thiên kiến cần cảnh giác
│       ├── 1.4.1. Thiên kiến xác nhận
│       │   └── Chỉ tìm dữ liệu ủng hộ giả thuyết đầu tiên
│       ├── 1.4.2. Neo suy nghĩ
│       │   └── Bị khóa vào nguyên nhân hoặc giải pháp được nêu đầu tiên
│       ├── 1.4.3. Groupthink
│       │   └── Đồng ý nhanh để tránh xung đột, bỏ qua rủi ro
│       └── 1.4.4. Sunk cost
│           └── Tiếp tục phương án vì đã đầu tư nhiều dù dữ liệu mới không ủng hộ
├── 2. Làm rõ vấn đề
│   ├── 2.1. Problem statement
│   │   ├── 2.1.1. Bối cảnh
│   │   │   └── Điều kiện, môi trường, phiên bản, người dùng hoặc luồng sử dụng
│   │   ├── 2.1.2. Tác động
│   │   │   └── Ảnh hưởng đến người dùng, chất lượng, tiến độ, chi phí hoặc vận hành
│   │   ├── 2.1.3. Mục tiêu
│   │   │   └── Kết quả cần đạt và cách biết đã đạt đủ tốt
│   │   └── 2.1.4. Điều chưa biết
│   │       └── Câu hỏi mở cần kiểm chứng trước khi chốt nguyên nhân hoặc giải pháp
│   ├── 2.2. Problem Map 6P
│   │   ├── 2.2.1. Phenomenon
│   │   │   └── Triệu chứng quan sát được, tránh gán nguyên nhân sớm
│   │   ├── 2.2.2. Pain và Purpose
│   │   │   └── Tác động thật và mục tiêu cần đạt
│   │   ├── 2.2.3. Perimeter và Pressure
│   │   │   └── Phạm vi hệ thống và ràng buộc kỹ thuật, UX, sản xuất, QA, timeline
│   │   └── 2.2.4. Puzzle
│   │       └── Điều chưa rõ, giả định nguy hiểm và dữ liệu còn thiếu
│   ├── 2.3. Phạm vi hệ sinh thái Lumi
│   │   ├── 2.3.1. Lớp thiết bị
│   │   │   └── Cơ khí, phần cứng, nguồn, anten, cảm biến, module, điều kiện lắp đặt
│   │   ├── 2.3.2. Lớp firmware và kết nối
│   │   │   └── MCU, giao thức, trạng thái local, Zigbee, Bluetooth Mesh, WiFi, KNX
│   │   ├── 2.3.3. Lớp controller, software và cloud
│   │   │   └── Hub, Home Controller, AIH, service, API, dữ liệu, đồng bộ, hiệu năng
│   │   └── 2.3.4. Lớp app, QA và trải nghiệm
│   │       └── Flutter app, UI state, test case, cảm nhận người dùng, tiêu chí release
│   └── 2.4. Cạm bẫy khi làm rõ
│       ├── 2.4.1. Gọi triệu chứng là vấn đề
│       │   └── App chậm không đủ; cần biết tác động và mục tiêu trạng thái
│       ├── 2.4.2. Gán team quá sớm
│       │   └── Triệu chứng ở app có thể do nhiều lớp phía sau
│       ├── 2.4.3. Bỏ qua người bị ảnh hưởng
│       │   └── Không rõ user, QA, PM hay vận hành chịu tác động gì
│       └── 2.4.4. Thiếu tiêu chí đủ tốt
│           └── Không có ngưỡng đo thì khó biết khi nào giải pháp đạt
├── 3. Tìm nguyên nhân gốc
│   ├── 3.1. Dữ kiện và giả thuyết
│   │   ├── 3.1.1. Dữ kiện
│   │   │   └── Log, test, quan sát, phản hồi, tài liệu, chỉ số đo được
│   │   ├── 3.1.2. Giả thuyết
│   │   │   └── Cách giải thích có thể đúng nhưng cần kiểm chứng
│   │   ├── 3.1.3. Suy luận
│   │   │   └── Kết nối giữa dữ kiện và giả thuyết, cần nói rõ logic
│   │   └── 3.1.4. Mức chắc chắn
│   │       └── Cao, trung bình, thấp dựa trên chất lượng bằng chứng
│   ├── 3.2. Công cụ root cause
│   │   ├── 3.2.1. 5 Whys
│   │   │   └── Đào sâu từ triệu chứng đến điều kiện tạo lỗi và hành động giảm tái diễn
│   │   ├── 3.2.2. Ishikawa R&D
│   │   │   └── Mở rộng nhánh yêu cầu, thiết kế, cơ khí, phần cứng, firmware, software, app, QA, PM
│   │   ├── 3.2.3. Assumption log
│   │   │   └── Ghi giả định, hậu quả nếu sai, bằng chứng, cách kiểm chứng, owner
│   │   └── 3.2.4. Risk log
│   │       └── Xếp rủi ro theo tác động và khả năng xảy ra để ưu tiên kiểm chứng
│   ├── 3.3. Các lớp nguyên nhân
│   │   ├── 3.3.1. Nguyên nhân trực tiếp
│   │   │   └── Sự kiện gần nhất tạo triệu chứng, ví dụ nhận trạng thái cũ
│   │   ├── 3.3.2. Nguyên nhân kỹ thuật
│   │   │   └── Cơ chế thiết kế, API, giao thức, cache, concurrency, linh kiện hoặc layout
│   │   ├── 3.3.3. Nguyên nhân quy trình
│   │   │   └── Test coverage thiếu, bàn giao chưa rõ, review chưa chạm rủi ro
│   │   └── 3.3.4. Nguyên nhân nhận thức
│   │       └── Hiểu sai yêu cầu, giả định ngầm, tiêu chí thành công mơ hồ
│   └── 3.4. An toàn tâm lý khi phân tích
│       ├── 3.4.1. Không đổ lỗi
│       │   └── Mục tiêu là sửa điều kiện tạo lỗi, không tìm người để quy trách nhiệm
│       ├── 3.4.2. Ngôn ngữ trung tính
│       │   └── Nói "dữ liệu chưa đủ" thay vì "team này sai"
│       ├── 3.4.3. Mời phản biện
│       │   └── Hỏi giả thuyết nào cạnh tranh và dữ liệu nào có thể bác bỏ
│       └── 3.4.4. Ghi mức chắc chắn
│           └── Cho phép nhóm hành động mà không giả vờ chắc chắn tuyệt đối
├── 4. Tạo và chọn giải pháp
│   ├── 4.1. Tạo phương án
│   │   ├── 4.1.1. Phương án sửa nhanh
│   │   │   └── Giảm tác động trước mắt, cần biết nợ hoặc rủi ro còn lại
│   │   ├── 4.1.2. Phương án sửa cơ chế
│   │   │   └── Thay đổi logic, quy ước, API, thiết kế hoặc test để giảm tái diễn
│   │   ├── 4.1.3. Phương án thử nghiệm
│   │   │   └── Làm hẹp phạm vi để kiểm chứng giả thuyết trước khi triển khai lớn
│   │   └── 4.1.4. Phương án không làm ngay
│   │       └── Chấp nhận rủi ro có điều kiện, theo dõi bằng chỉ báo và điều kiện xem lại
│   ├── 4.2. Tiêu chí chọn
│   │   ├── 4.2.1. Hiệu quả với vấn đề thật
│   │   │   └── Có đóng khoảng cách trong problem statement không
│   │   ├── 4.2.2. Rủi ro kỹ thuật và UX
│   │   │   └── Có tạo lỗi mới, hành vi khó hiểu hoặc nợ bảo trì không
│   │   ├── 4.2.3. Khả năng test và vận hành
│   │   │   └── QA, support, log, monitor có kiểm chứng được không
│   │   └── 4.2.4. Chi phí và dependency
│   │       └── Cần team nào, mất bao lâu, ảnh hưởng mốc nào
│   ├── 4.3. Option matrix
│   │   ├── 4.3.1. So sánh minh bạch
│   │   │   └── Đưa phương án lên cùng một bảng thay vì tranh luận rời rạc
│   │   ├── 4.3.2. Trade-off
│   │   │   └── Nói rõ được lợi gì và trả giá ở đâu
│   │   ├── 4.3.3. Phương án bị loại
│   │   │   └── Ghi lý do để tránh quay lại tranh luận cũ
│   │   └── 4.3.4. Điều kiện xem lại
│   │       └── Tín hiệu nào khiến quyết định cần thay đổi
│   └── 4.4. Decision note
│       ├── 4.4.1. Quyết định được chọn
│       │   └── Một câu rõ về phương án sẽ làm
│       ├── 4.4.2. Lý do chọn
│       │   └── Dựa trên mục tiêu, bằng chứng, tiêu chí và ràng buộc
│       ├── 4.4.3. Rủi ro còn lại
│       │   └── Điều chưa chắc, tác dụng phụ và owner theo dõi
│       └── 4.4.4. Cách kiểm chứng
│           └── Kết quả đo, mốc kiểm tra và quyết định tiếp theo
└── 5. Thực thi, học hỏi và chuẩn hóa
    ├── 5.1. Experiment plan
    │   ├── 5.1.1. Giả thuyết
    │   │   └── Nếu làm hành động này thì kết quả nào sẽ thay đổi vì lý do gì
    │   ├── 5.1.2. Phạm vi
    │   │   └── Thiết bị, phiên bản, môi trường, test case hoặc người dùng được đưa vào
    │   ├── 5.1.3. Tiêu chí thành công
    │   │   └── Dữ liệu và ngưỡng đo để biết thử nghiệm đạt hay không
    │   └── 5.1.4. Quyết định tiếp
    │       └── Nếu đạt, không đạt hoặc dữ liệu mâu thuẫn thì làm gì
    ├── 5.2. Phối hợp liên team
    │   ├── 5.2.1. Owner kết quả
    │   │   └── Người chịu trách nhiệm đóng khoảng cách, không chỉ hoàn thành task
    │   ├── 5.2.2. Dependency
    │   │   └── Điều cần từ BA, PM, Design, Cơ khí, Hardware, Firmware, Software, App, QA
    │   ├── 5.2.3. Mốc cập nhật
    │   │   └── Khi nào gửi dữ liệu, rủi ro, quyết định mới
    │   └── 5.2.4. Coordination note
    │       └── Một ghi chú chung để giảm hiểu sai và phòng thủ
    ├── 5.3. Học từ kết quả
    │   ├── 5.3.1. Kết quả đo được
    │   │   └── Điều thực tế xảy ra so với mục tiêu và dự đoán
    │   ├── 5.3.2. Giả thuyết đúng/sai
    │   │   └── Điều gì được xác nhận, điều gì bị loại trừ
    │   ├── 5.3.3. Bài học kỹ thuật
    │   │   └── Quy ước, thiết kế, log, test, API, firmware hoặc app cần đổi
    │   └── 5.3.4. Bài học phối hợp
    │       └── Cách bàn giao, review, cập nhật hoặc ra quyết định cần cải thiện
    └── 5.4. Chuẩn hóa
        ├── 5.4.1. Checklist
        │   └── Thêm câu hỏi vào review yêu cầu, thiết kế, code, test hoặc release
        ├── 5.4.2. Test case
        │   └── Bổ sung kịch bản giúp QA phát hiện sớm loại vấn đề tương tự
        ├── 5.4.3. Tài liệu/quy ước
        │   └── Cập nhật acceptance criteria, API contract, quy tắc trạng thái hoặc tài liệu kỹ thuật
        └── 5.4.4. Monitor/log
            └── Tạo tín hiệu để phát hiện vấn đề trước khi người dùng hoặc release bị ảnh hưởng
```

