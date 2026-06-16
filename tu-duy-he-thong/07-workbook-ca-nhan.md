# Workbook cá nhân: Tư duy hệ thống

## Cách dùng

Mỗi phần dưới đây là một artifact. Hãy điền bằng một vấn đề thật trong dự án, không dùng ví dụ tưởng tượng nếu bạn đang có tình huống thực tế. Câu trả lời ngắn nhưng có bằng chứng tốt hơn câu trả lời dài mà mơ hồ.

## 1. Mindmap level 4 để ôn tập

```text
Tư duy hệ thống
├── Bản chất
│   ├── Hệ thống
│   │   ├── Phần tử
│   │   ├── Liên kết
│   │   ├── Mục đích
│   │   └── Ranh giới
│   └── Tư duy đúng
│       ├── Nhìn cấu trúc
│       ├── Nhìn hành vi theo thời gian
│       ├── Nhìn quan hệ nhân quả vòng
│       └── Nhìn tác dụng phụ
├── Công cụ nhìn hệ thống
│   ├── Stocks/flows
│   │   ├── Tích lũy
│   │   ├── Dòng vào
│   │   ├── Dòng ra
│   │   └── Chỉ báo trạng thái
│   ├── Feedback loops
│   │   ├── Cân bằng
│   │   ├── Khuếch đại
│   │   ├── Vòng trễ
│   │   └── Vòng phụ
│   └── Delays
│       ├── Trễ nhận biết
│       ├── Trễ quyết định
│       ├── Trễ triển khai
│       └── Trễ tác động
├── Bẫy hệ thống
│   ├── Tối ưu cục bộ
│   │   ├── Team đúng phần mình
│   │   ├── Hệ thống vẫn lỗi
│   │   ├── KPI riêng thắng mục tiêu chung
│   │   └── Cần review end-to-end
│   ├── Chữa triệu chứng
│   │   ├── Fix nhanh
│   │   ├── Workaround tăng
│   │   ├── Năng lực gốc yếu
│   │   └── Cần trả nợ cấu trúc
│   └── KPI lệch
│       ├── Số đẹp
│       ├── Kết quả thật không tăng
│       ├── Hành vi lách luật
│       └── Cần đo tác dụng phụ
├── Can thiệp hệ thống
│   ├── Điểm đòn bẩy thấp
│   │   ├── Tham số
│   │   ├── Tiêu chuẩn
│   │   ├── Tài nguyên
│   │   └── Buffer
│   ├── Điểm đòn bẩy trung bình
│   │   ├── Luồng thông tin
│   │   ├── Luật chơi
│   │   ├── Incentive
│   │   └── Quyền quyết định
│   └── Điểm đòn bẩy cao
│       ├── Mục tiêu hệ thống
│       ├── Mindset
│       ├── Paradigm
│       └── Khả năng đổi paradigm
└── Áp dụng Lumi R&D
    ├── Yêu cầu sản phẩm
    │   ├── Mục tiêu thật
    │   ├── Trạng thái hệ thống
    │   ├── Tiêu chí nghiệm thu
    │   └── Điều kiện xem lại
    ├── Tích hợp kỹ thuật
    │   ├── Firmware
    │   ├── Controller
    │   ├── Cloud/app/QA
    │   └── Vận hành
    └── Ra quyết định
        ├── Trade-off
        ├── Rủi ro lan truyền
        ├── Điểm đo học tập
        └── Điều kiện xem lại
```

## 2. System map

```text
Tên vấn đề:
Hành vi cần hiểu:
Ranh giới phân tích:
Phần tử chính:
Liên kết chính:
Mục tiêu tuyên bố:
Mục đích thật qua hành vi:
Ai bị ảnh hưởng:
Điểm chưa chắc chắn:
Bằng chứng cần thêm:
```

## 3. Stock-flow map

| Thành phần | Câu trả lời |
| --- | --- |
| Stock chính |  |
| Vì sao đây là thứ tích lũy? |  |
| Dòng vào làm stock tăng |  |
| Dòng ra làm stock giảm |  |
| Điểm nghẽn của dòng vào/dòng ra |  |
| Chỉ báo hiện tại |  |
| Chỉ báo tốt hơn |  |
| Team/người có thể tác động |  |

## 4. Delay log

| Loại trễ | Dấu hiệu | Tác động | Cách làm trễ rõ hơn/ít hại hơn |
| --- | --- | --- | --- |
| Trễ nhận biết |  |  |  |
| Trễ đo lường |  |  |  |
| Trễ quyết định |  |  |  |
| Trễ triển khai |  |  |  |
| Trễ tác động |  |  |  |

## 5. Feedback loop map

```text
Loop name:
Biến A:
Quan hệ A -> B:
Biến B:
Quan hệ B -> C:
Biến C:
Quan hệ quay lại A:
Loại loop: cân bằng/khuếch đại
Độ trễ:
Hành vi dự kiến:
Can thiệp đề xuất:
```

## 6. Trap diagnosis note

```text
Vấn đề/mẫu hình:
Bẫy nghi ngờ:
Dấu hiệu quan sát được:
Cấu trúc tạo bẫy:
Phản ứng mặc định:
Tác dụng phụ của phản ứng mặc định:
Cách thoát đề xuất:
Bằng chứng cần theo dõi:
```

## 7. Leverage point note

```text
Vấn đề/mẫu hình:
Mục tiêu hệ thống hiện tại:
Mục tiêu mong muốn:

Can thiệp mức thấp:
Tác dụng phụ có thể có:

Can thiệp mức trung bình:
Tác dụng phụ có thể có:

Can thiệp mức cao:
Tác dụng phụ có thể có:

Can thiệp chọn thử trong 1-2 tuần:
Bằng chứng cần thu thập:
Điều kiện giữ/sửa/bỏ:
```

## 8. Decision note hệ thống

```text
Quyết định cần chốt:
Hệ thống bị ảnh hưởng:
Mục tiêu thật:
Trade-off chính:
Stock/flow bị ảnh hưởng:
Feedback loop có thể phát sinh:
Độ trễ cần chú ý:
Bẫy hệ thống cần tránh:
Phương án chọn:
Điều kiện xem lại quyết định:
Bằng chứng cần thu thập sau khi triển khai:
```

## 9. Nhật ký áp dụng

| Ngày | Tình huống | Artifact dùng | Điều phát hiện | Hành động tiếp theo | Bằng chứng |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

