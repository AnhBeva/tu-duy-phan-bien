# Learning Pack: Tư duy hệ thống cho Lumi R&D

## Đối tượng người học

Bộ tài liệu này dành cho đội ngũ R&D Lumi: Thiết kế, Cơ khí, Thiết kế Phần cứng, Firmware, Software, App, QA Tester, PM và BA. Bạn có thể dùng tài liệu khi làm rõ yêu cầu, thiết kế sản phẩm nhiều lớp, xử lý bug tích hợp, ra quyết định kiến trúc, review KPI, phân tích rủi ro phát hành hoặc cải thiện phối hợp liên team.

Nội dung lấy cảm hứng nền tảng từ tư tưởng của Donella H. Meadows trong *Thinking in Systems* và bài viết về leverage points của Meadows. Tài liệu này diễn giải lại để phục vụ học và áp dụng trong môi trường R&D, không phải bản tóm tắt thay thế sách gốc.

## Vấn đề thật

Trong R&D, nhiều vấn đề lặp lại không phải vì từng team thiếu chuyên môn. Chúng lặp lại vì cả nhóm nhìn vấn đề như chuỗi sự kiện rời rạc thay vì một hệ thống có cấu trúc, phản hồi và độ trễ.

Bạn có thể gặp các tình huống này:

- Một bug trạng thái thiết bị được sửa ở app, nhưng vài sprint sau xuất hiện lại ở kịch bản mạng yếu.
- Firmware, cloud và app đều làm đúng phần mình, nhưng trải nghiệm end-to-end vẫn chậm.
- KPI tiến độ làm mọi người đóng task nhanh, nhưng rủi ro tích hợp bị đẩy sang QA cuối kỳ.
- Một quyết định tối ưu pin làm giảm tần suất đồng bộ, từ đó app hiển thị trạng thái lỗi thời.
- PM tăng kiểm soát để giảm trễ, nhưng hệ thống lại sinh thêm báo cáo, họp và chờ xác nhận.

Tư duy hệ thống giúp bạn hỏi: cấu trúc nào đang tạo ra hành vi này, thay vì chỉ hỏi ai đã gây ra sự kiện này.

## Mục tiêu học tập

Sau learning pack này, học viên có thể phân tích một vấn đề R&D như một hệ thống bằng cách tạo system map, stock-flow map, feedback loop map, delay log và leverage point note đạt tiêu chí: nêu rõ mục đích hệ thống, ranh giới phân tích, trạng thái tích lũy, vòng phản hồi, độ trễ, bẫy hệ thống và điểm can thiệp có đòn bẩy.

| Thành phần | Học viên cần đạt |
| --- | --- |
| Knowledge | Biết hệ thống gồm phần tử, liên kết, mục đích; biết stocks/flows, feedback loops, delays, system traps và leverage points. |
| Skill | Vẽ bản đồ hệ thống, chỉ ra trạng thái tích lũy, vòng phản hồi, độ trễ, bẫy hệ thống và đề xuất can thiệp. |
| Mindset | Chuyển từ "tìm lỗi ở một điểm" sang "nhìn cấu trúc tạo ra hành vi theo thời gian". |
| Behavior | Trước quyết định lớn, bạn hỏi: mục đích thật là gì, hệ thống đang tích lũy gì, vòng phản hồi nào đang vận hành, độ trễ nào bị bỏ qua, can thiệp nào có đòn bẩy? |
| Evidence | Có ít nhất một artifact hoàn chỉnh cho vấn đề thật: system map, stock-flow map, feedback loop map, delay log, leverage point note hoặc decision note hệ thống. |

## Lộ trình học

| File | Năng lực chính | Artifact sau khi học |
| --- | --- | --- |
| `01-ban-chat-tu-duy-he-thong.md` | Nhận diện hệ thống, mục đích, ranh giới và cách nhìn hành vi theo thời gian | System map |
| `02-nhin-thay-cau-truc-an.md` | Phân biệt sự kiện, mẫu hình, cấu trúc; dùng stocks/flows và độ trễ | Stock-flow map và delay log |
| `03-vong-lap-phan-hoi-va-hanh-vi-he-thong.md` | Nhận diện vòng cân bằng, vòng khuếch đại và hành vi hệ thống | Feedback loop map |
| `04-bay-he-thong-va-co-hoi-can-thiep.md` | Nhận diện bẫy hệ thống phổ biến và cách thoát | Trap diagnosis note |
| `05-diem-bay-leverage-points.md` | Chọn điểm can thiệp theo đòn bẩy thay vì chỉ theo độ dễ | Leverage point note |
| `06-case-thuc-hanh-lumi-rd.md` | Luyện phân tích case IoT nhiều lớp từ triệu chứng đến cấu trúc | Case worksheet đã điền |
| `07-workbook-ca-nhan.md` | Ghi chép, điền mẫu và áp dụng vào việc thật | Workbook cá nhân |
| `08-checklist-job-aids.md` | Dùng checklist trong review yêu cầu, bug, kiến trúc, tích hợp, KPI | Checklist áp dụng tại dự án |
| `09-rubric-tu-danh-gia-va-ke-hoach-ap-dung.md` | Tự đánh giá bằng bằng chứng và lập kế hoạch 14 ngày | Rubric và kế hoạch áp dụng |

## Mindmap level 4

```text
Tư duy hệ thống
├── 1. Bản chất
│   ├── 1.1. Hệ thống
│   │   ├── 1.1.1. Phần tử
│   │   │   └── Con người, thiết bị, service, tài liệu, quy trình, công cụ, dữ liệu
│   │   ├── 1.1.2. Liên kết
│   │   │   └── Luồng thông tin, vật chất, quyết định, quyền hạn, tín hiệu, dependency
│   │   ├── 1.1.3. Mục đích
│   │   │   └── Điều hệ thống thật sự đang tối ưu, có thể khác điều được tuyên bố
│   │   └── 1.1.4. Ranh giới
│   │       └── Phần được đưa vào phân tích và phần đang tạm để ngoài
│   └── 1.2. Tư duy đúng
│       ├── 1.2.1. Nhìn cấu trúc
│       │   └── Hành vi lặp lại thường đến từ cấu trúc lặp lại
│       ├── 1.2.2. Nhìn hành vi theo thời gian
│       │   └── Không chỉ hỏi chuyện gì xảy ra, mà hỏi xu hướng đang đi đâu
│       ├── 1.2.3. Nhìn quan hệ nhân quả vòng
│       │   └── A ảnh hưởng B, B quay lại ảnh hưởng A
│       └── 1.2.4. Nhìn tác dụng phụ
│           └── Một can thiệp tốt cục bộ có thể làm xấu hệ thống rộng hơn
├── 2. Công cụ nhìn hệ thống
│   ├── 2.1. Stocks/flows
│   │   ├── 2.1.1. Tích lũy
│   │   │   └── Bug backlog, nợ kỹ thuật, niềm tin, tải hệ thống, hiểu biết chung
│   │   ├── 2.1.2. Dòng vào
│   │   │   └── Task mới, bug mới, yêu cầu mới, log mới, feedback mới
│   │   ├── 2.1.3. Dòng ra
│   │   │   └── Bug được đóng, nợ được trả, quyết định được làm rõ, tri thức được chia sẻ
│   │   └── 2.1.4. Chỉ báo trạng thái
│   │       └── Giá trị đo cho biết hệ thống đang tích lũy hay xả bớt
│   ├── 2.2. Feedback loops
│   │   ├── 2.2.1. Vòng cân bằng
│   │   │   └── Hệ thống tự kéo về mục tiêu, ngưỡng hoặc trạng thái ổn định
│   │   ├── 2.2.2. Vòng khuếch đại
│   │   │   └── Một thay đổi tự nuôi lớn chính nó theo thời gian
│   │   ├── 2.2.3. Vòng trễ
│   │   │   └── Tác động đến muộn khiến người ra quyết định dễ phản ứng quá tay
│   │   └── 2.2.4. Vòng phụ
│   │       └── Các loop nhỏ chen vào làm hành vi thực tế khác dự đoán
│   └── 2.3. Delays
│       ├── 2.3.1. Trễ nhận biết
│       │   └── Lỗi đã xảy ra nhưng chưa có tín hiệu đủ rõ
│       ├── 2.3.2. Trễ quyết định
│       │   └── Cần nhiều người xác nhận trước khi hành động
│       ├── 2.3.3. Trễ triển khai
│       │   └── Quyết định đã có nhưng code, test, firmware, sản xuất chưa xong
│       └── 2.3.4. Trễ tác động
│           └── Can thiệp đã làm nhưng kết quả chỉ hiện ra sau nhiều vòng dùng thật
├── 3. Bẫy hệ thống
│   ├── 3.1. Tối ưu cục bộ
│   │   ├── 3.1.1. Team đúng phần mình nhưng hệ thống lỗi
│   │   ├── 3.1.2. KPI riêng thắng mục tiêu chung
│   │   ├── 3.1.3. Dependency bị xem là việc của team khác
│   │   └── 3.1.4. Cách thoát: mục tiêu chung, thông tin chung, review end-to-end
│   ├── 3.2. Chữa triệu chứng
│   │   ├── 3.2.1. Fix nhanh làm giảm áp lực học nguyên nhân
│   │   ├── 3.2.2. Workaround trở thành quy trình chính
│   │   ├── 3.2.3. Năng lực xử lý gốc yếu dần
│   │   └── 3.2.4. Cách thoát: song song fix triệu chứng và trả nợ cấu trúc
│   └── 3.3. KPI lệch
│       ├── 3.3.1. Hệ thống học cách đạt số thay vì đạt mục tiêu thật
│       ├── 3.3.2. Chỉ báo bị nhầm với kết quả
│       ├── 3.3.3. Hành vi tránh rủi ro bị thưởng nhầm
│       └── 3.3.4. Cách thoát: đo kết quả, tác dụng phụ và hành vi mong muốn
├── 4. Can thiệp hệ thống
│   ├── 4.1. Điểm đòn bẩy thấp
│   │   ├── 4.1.1. Tham số
│   │   ├── 4.1.2. Tiêu chuẩn
│   │   ├── 4.1.3. Tài nguyên
│   │   └── 4.1.4. Buffer
│   ├── 4.2. Điểm đòn bẩy trung bình
│   │   ├── 4.2.1. Luồng thông tin
│   │   ├── 4.2.2. Luật chơi
│   │   ├── 4.2.3. Incentive
│   │   └── 4.2.4. Quyền quyết định
│   └── 4.3. Điểm đòn bẩy cao
│       ├── 4.3.1. Mục tiêu hệ thống
│       ├── 4.3.2. Mindset
│       ├── 4.3.3. Paradigm
│       └── 4.3.4. Khả năng thay đổi paradigm
└── 5. Áp dụng Lumi R&D
    ├── 5.1. Yêu cầu sản phẩm
    │   ├── 5.1.1. Mục tiêu thật
    │   ├── 5.1.2. Trạng thái hệ thống
    │   ├── 5.1.3. Tiêu chí nghiệm thu
    │   └── 5.1.4. Điều kiện xem lại
    ├── 5.2. Tích hợp kỹ thuật
    │   ├── 5.2.1. Firmware
    │   ├── 5.2.2. Controller
    │   ├── 5.2.3. Cloud, app, QA
    │   └── 5.2.4. Vận hành sau release
    └── 5.3. Ra quyết định
        ├── 5.3.1. Trade-off
        ├── 5.3.2. Rủi ro lan truyền
        ├── 5.3.3. Điểm đo học tập
        └── 5.3.4. Điều kiện xem lại quyết định
```

## Nguyên tắc học

- Học bằng bản đồ và bằng chứng, không học bằng cảm giác đã hiểu.
- Đừng chỉ mô tả sự kiện; hãy tìm mẫu hình lặp lại và cấu trúc tạo ra mẫu hình đó.
- Một hệ thống thường làm rất tốt điều mà cấu trúc hiện tại khuyến khích, kể cả khi điều đó khác mục tiêu được tuyên bố.
- Không có ranh giới hệ thống nào là tuyệt đối. Ranh giới là lựa chọn phân tích, phải nói rõ để tránh tranh luận lẫn phạm vi.
- Điểm can thiệp mạnh thường không phải là điểm dễ sửa nhất.

## Bằng chứng hoàn thành

Bạn hoàn thành learning pack khi có đủ:

- Một system map cho vấn đề R&D thật.
- Một stock-flow map chỉ ra ít nhất một trạng thái tích lũy và dòng vào/dòng ra.
- Một feedback loop map có ít nhất một vòng cân bằng hoặc khuếch đại.
- Một delay log có ít nhất ba loại độ trễ và ảnh hưởng của chúng.
- Một trap diagnosis note cho một bẫy hệ thống đang xuất hiện.
- Một leverage point note nêu ít nhất ba can thiệp ở ba mức đòn bẩy khác nhau.
- Một kế hoạch áp dụng 14 ngày có bằng chứng kiểm tra.

## Hành động trong 48 giờ

Chọn một vấn đề đang mở trong dự án của bạn. Điền ngắn gọn:

```text
Vấn đề đang thấy:
Mẫu hình lặp lại:
Trạng thái hệ thống đang tích lũy:
Vòng phản hồi nghi ngờ:
Độ trễ quan trọng:
Can thiệp nhỏ nhất có thể thử:
Bằng chứng cần thu thập:
```

