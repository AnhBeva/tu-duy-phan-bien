# Bài 5: Chọn điểm bẩy thay vì chỉ chọn điểm dễ sửa

## 1. Vấn đề thật

Khi hệ thống có vấn đề, phản ứng tự nhiên là sửa thứ dễ thấy: tăng deadline buffer, thêm người, thêm checklist, tăng threshold, thêm cảnh báo. Những can thiệp này có thể cần thiết, nhưng nhiều khi đòn bẩy thấp. Hệ thống đổi ít vì mục tiêu, luật chơi, luồng thông tin và mindset vẫn giữ nguyên.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể chọn điểm can thiệp hệ thống bằng cách tạo leverage point note đạt tiêu chí: nêu ít nhất ba can thiệp ở ba mức đòn bẩy khác nhau, dự đoán tác dụng phụ và chọn thử nghiệm nhỏ có bằng chứng kiểm tra.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Biết 12 nhóm leverage points theo tinh thần Meadows, từ tham số thấp đòn bẩy đến mindset/paradigm cao đòn bẩy. |
| Skill | So sánh can thiệp theo mức đòn bẩy, độ khả thi, rủi ro và bằng chứng học tập. |
| Mindset | Không nhầm thứ dễ chỉnh với thứ đáng chỉnh nhất. |
| Behavior | Trước khi đề xuất giải pháp, bạn phân loại giải pháp đang chạm vào tham số, luồng thông tin, luật chơi, mục tiêu hay mindset. |
| Evidence | Một leverage point note cho vấn đề thật. |

## 3. Bản chất

Leverage point là nơi can thiệp vào hệ thống có thể tạo thay đổi lớn hơn so với nỗ lực bỏ ra. Meadows sắp xếp các điểm can thiệp từ thường yếu đến thường mạnh. Không phải lúc nào điểm cao cũng khả thi ngay, nhưng nếu chỉ sửa điểm thấp, hệ thống dễ quay lại hành vi cũ.

## 4. Vì sao quan trọng

Trong R&D, cùng một vấn đề có nhiều cách can thiệp:

- Tăng số người QA.
- Thêm test case.
- Đổi thời điểm test tích hợp.
- Thêm trace ID xuyên lớp.
- Đổi definition of done.
- Đổi KPI từ "task done" sang "end-to-end ready".
- Đổi quyền quyết định về contract API.
- Đổi mục tiêu từ "release đúng ngày bằng mọi giá" sang "release có điều kiện chất lượng rõ".

Các can thiệp này không cùng mức đòn bẩy.

## 5. 12 điểm can thiệp theo nhóm

### 5.1. Nhóm đòn bẩy thấp: chỉnh lượng và buffer

| Điểm can thiệp | Câu hỏi | Ví dụ Lumi R&D |
| --- | --- | --- |
| 12. Tham số | Con số nào đang được chỉnh? | Timeout, polling interval, sprint capacity, SLA |
| 11. Buffer | Hệ thống có vùng đệm không? | Buffer thời gian test, queue capacity, dự phòng thiết bị |
| 10. Cấu trúc vật chất/dòng chảy | Luồng vật chất/công việc đi qua đâu? | Luồng ticket, pipeline CI, môi trường test |

Nhóm này dễ làm, cần thiết trong nhiều tình huống, nhưng thường không đủ nếu mục tiêu hoặc luật chơi sai.

### 5.2. Nhóm đòn bẩy trung bình: đổi thông tin và quy tắc

| Điểm can thiệp | Câu hỏi | Ví dụ Lumi R&D |
| --- | --- | --- |
| 9. Độ trễ | Độ trễ nào cần giảm, tăng hoặc làm rõ? | Phát hiện bug sớm, feedback QA sớm, telemetry sau release |
| 8. Vòng cân bằng | Cơ chế tự điều chỉnh nào cần mạnh hơn? | Ngưỡng rollback, quality gate, cảnh báo tải |
| 7. Vòng khuếch đại | Loop tốt/xấu nào cần tăng/giảm? | Chia sẻ tri thức, nợ kỹ thuật, retry storm |
| 6. Luồng thông tin | Ai cần thấy thông tin nào, khi nào? | Trace ID, dashboard end-to-end, decision log |
| 5. Luật chơi | Quy tắc nào định hình hành vi? | Definition of done, release criteria, API contract rule |
| 4. Khả năng tự tổ chức | Ai có quyền tạo cấu trúc mới? | Team tự tạo checklist tích hợp, guild kỹ thuật, owner contract |

Nhóm này thường tạo khác biệt rõ vì đổi cách hệ thống học và tự điều chỉnh.

### 5.3. Nhóm đòn bẩy cao: đổi mục tiêu và cách nghĩ

| Điểm can thiệp | Câu hỏi | Ví dụ Lumi R&D |
| --- | --- | --- |
| 3. Mục tiêu hệ thống | Hệ thống đang tối ưu điều gì? | Từ "đóng task" sang "luồng người dùng hoạt động ổn định" |
| 2. Paradigm | Niềm tin nền nào chi phối quyết định? | Từ "team nào xong phần team đó" sang "sản phẩm là hệ thống end-to-end" |
| 1. Khả năng vượt paradigm | Có thể giữ nhiều cách nhìn và đổi khi bằng chứng yêu cầu không? | Dùng cả góc nhìn kỹ thuật, người dùng, vận hành, sản xuất, kinh doanh |

Nhóm này khó hơn vì chạm vào niềm tin, quyền lực và tiêu chuẩn thành công. Nhưng đây thường là nơi thay đổi bền vững xuất hiện.

## 6. Hiểu lầm phổ biến

1. **"Điểm đòn bẩy cao luôn là lựa chọn tốt nhất ngay lập tức."**  
   Thực tế: điểm cao có thể cần thời gian, quyền hạn và bằng chứng. Có thể cần thử điểm thấp để học trước.

2. **"Chỉnh tham số là vô ích."**  
   Thực tế: tham số vẫn quan trọng, nhất là khi hệ thống đã đúng mục tiêu. Vấn đề là đừng dừng ở đó.

3. **"Leverage point là một hành động lớn."**  
   Thực tế: một thay đổi nhỏ trong luồng thông tin hoặc luật review có thể tạo tác động lớn.

4. **"Can thiệp hệ thống phải chắc chắn đúng."**  
   Thực tế: can thiệp tốt nên được thiết kế như thử nghiệm có tiêu chí học.

## 7. Cách làm: Leverage point note

```text
Vấn đề/mẫu hình:
Mục tiêu hệ thống hiện tại:
Mục tiêu mong muốn:
Can thiệp mức thấp:
Can thiệp mức trung bình:
Can thiệp mức cao:
Can thiệp chọn thử:
Rủi ro/tác dụng phụ:
Bằng chứng sau 1-2 chu kỳ:
Điều kiện xem lại:
```

Checklist chọn can thiệp:

| Câu hỏi | Ý nghĩa |
| --- | --- |
| Can thiệp chạm vào đâu trong hệ thống? | Tham số, buffer, thông tin, luật chơi, mục tiêu, mindset |
| Can thiệp có làm loop xấu yếu đi không? | Tránh chỉ giảm đau bề mặt |
| Can thiệp có tăng năng lực học không? | Hệ thống thấy vấn đề sớm hơn và rõ hơn |
| Có tác dụng phụ nào không? | Tăng tải, tăng kiểm soát, giảm tự chủ, che giấu lỗi |
| Có bằng chứng kiểm tra không? | Chỉ báo trước/sau, artifact, feedback, số liệu |

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Bug tích hợp tăng cuối sprint và tạo áp lực release. |
| Wrong response | Chỉ thêm người QA ở cuối sprint. |
| Root cause | Can thiệp chỉ tăng năng lực ở dòng ra muộn, trong khi rủi ro tích hợp đã tích lũy từ requirement, API contract, firmware event và app state model. |
| Better response | Mức thấp: thêm buffer test tích hợp. Mức trung bình: trace ID xuyên lớp, contract review trước code freeze, quality gate end-to-end. Mức cao: đổi mục tiêu sprint từ "xong task từng team" sang "luồng người dùng chính chạy được qua hệ thống". |
| Takeaway | Can thiệp tốt thường kết hợp một hành động giảm đau ngắn hạn với một thay đổi cấu trúc giúp hệ thống học sớm hơn. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn một giải pháp nhóm hay dùng và phân loại mức đòn bẩy của nó. |
| Giải thích | Viết vì sao giải pháp đó có thể chưa đủ nếu đứng một mình. |
| Áp dụng nhỏ | Điền leverage point note với 3 can thiệp ở 3 mức. |
| Mô phỏng | Dự đoán tác dụng phụ của từng can thiệp. |
| Áp dụng thật | Chọn một can thiệp nhỏ có thể thử trong 1-2 tuần. |
| Cải thiện | So sánh bằng chứng trước/sau và quyết định giữ, sửa hay bỏ. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn phân biệt được can thiệp thấp, trung bình, cao | Có ví dụ đúng ở mỗi nhóm |
| 2. Giải thích | Bạn giải thích được vì sao điểm cao thường mạnh hơn | Có liên hệ đến thông tin, luật chơi, mục tiêu hoặc mindset |
| 3. Áp dụng | Bạn tạo được leverage point note | Có note cho vấn đề thật |
| 4. Linh hoạt | Bạn chọn thử nghiệm phù hợp quyền hạn và rủi ro | Có bằng chứng kiểm tra và điều kiện xem lại |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: lấy một giải pháp đang được đề xuất và viết thêm hai phương án can thiệp ở mức đòn bẩy cao hơn.
- Bằng chứng cần thu thập: leverage point note, can thiệp chọn thử, chỉ báo sau 1-2 chu kỳ.
- Điều chỉnh lần sau: bạn đang chỉnh con số, đổi thông tin, đổi luật chơi hay đổi mục tiêu?

