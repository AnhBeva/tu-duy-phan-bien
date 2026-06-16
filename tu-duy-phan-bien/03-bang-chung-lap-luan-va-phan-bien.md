# Bài 3: Dùng bằng chứng để lập luận và phản biện không gây phòng thủ

## 1. Vấn đề thật

Trong cuộc trao đổi kỹ thuật, các câu sau nghe quen thuộc:

- "Em thấy cách này ổn hơn."
- "Cái này chắc do firmware."
- "Người dùng sẽ không dùng như vậy đâu."
- "Rust an toàn hơn nên nên dùng."
- "App chỉ cần hiển thị lại là xong."
- "QA test chưa đúng thực tế."

Những câu này có thể đúng, nhưng chưa đủ để ra quyết định. Chúng thiếu cấu trúc lập luận và bằng chứng.

## 2. Mục tiêu học tập

Sau bài này, học viên có thể xây dựng và phản biện một lập luận R&D bằng cách dùng bảng claim-evidence-risk đạt tiêu chí: nêu rõ kết luận, bằng chứng hỗ trợ, giới hạn của bằng chứng, rủi ro nếu kết luận sai và câu hỏi phản biện hướng vào vấn đề thay vì cá nhân.

| Thành phần | Nội dung |
| --- | --- |
| Knowledge | Biết cấu trúc lập luận: claim, evidence, reasoning, risk, next check. |
| Skill | Đánh giá chất lượng bằng chứng và viết phản hồi phản biện an toàn. |
| Mindset | Không đồng ý hay phản đối theo cảm giác; yêu cầu lập luận đủ rõ cho mức rủi ro. |
| Behavior | Khi nghe một kết luận, bạn hỏi bằng chứng, phạm vi đúng và cách kiểm chứng. |
| Evidence | Một bảng claim-evidence-risk và một phản hồi phản biện đã viết lại. |

## 3. Bản chất

Lập luận là cây cầu giữa dữ kiện và quyết định. Cây cầu này có ba phần:

- **Claim:** điều bạn muốn nhóm tin hoặc làm.
- **Evidence:** dữ kiện, quan sát, log, test, đo đạc, prototype, phản hồi hoặc tiêu chí hỗ trợ claim.
- **Reasoning:** vì sao evidence đó dẫn tới claim trong bối cảnh hiện tại.

Phản biện là kiểm tra cây cầu này có chịu được tải hay không. Tải càng lớn, bằng chứng càng cần mạnh. Một thay đổi UI nhỏ có thể dùng prototype nhanh. Một thay đổi kiến trúc backend, giao thức firmware hoặc thiết kế phần cứng cần bằng chứng nghiêm ngặt hơn.

## 4. Vì sao quan trọng

Bằng chứng tốt giúp:

- Tránh tranh luận theo cấp bậc, cảm tính hoặc sở thích team.
- Giúp QA biến nghi ngờ thành test case.
- Giúp PM nhìn thấy rủi ro thật thay vì chỉ nghe ý kiến trái chiều.
- Giúp BA và Thiết kế biết yêu cầu/trải nghiệm nào có cơ sở.
- Giúp kỹ thuật giải thích quyết định mà team khác có thể kiểm tra được.

## 5. Hiểu lầm phổ biến

1. **"Bằng chứng là thứ chứng minh mình đúng."**  
   Bằng chứng tốt cũng phải có khả năng làm bạn đổi ý nếu nó đi ngược kết luận ban đầu.

2. **"Log hoặc test luôn khách quan."**  
   Log sai điểm đo, test sai điều kiện hoặc dữ liệu thiếu ngữ cảnh vẫn có thể dẫn đến kết luận sai.

3. **"Phản biện trực diện là thẳng thắn."**  
   Thẳng thắn không đồng nghĩa với quy chụp. Phản biện tốt tấn công vào claim, evidence và reasoning, không tấn công người nói.

4. **"Một ví dụ là đủ."**  
   Một ví dụ có thể gợi ý vấn đề, nhưng chưa đủ đại diện nếu quyết định ảnh hưởng nhiều người dùng, thiết bị hoặc môi trường.

## 6. Cách nghĩ đúng

Khi nghe một kết luận, hãy tự hỏi:

- Kết luận này dựa trên bằng chứng nào?
- Bằng chứng đó đo đúng thứ cần quyết định chưa?
- Bằng chứng mạnh trong điều kiện nào, yếu trong điều kiện nào?
- Có bằng chứng nào trái chiều không?
- Nếu kết luận sai, rủi ro là gì?
- Cần kiểm chứng gì trước khi triển khai sâu?

## 7. Cách làm: Bảng claim-evidence-risk

| Trường | Câu hỏi điền |
| --- | --- |
| Claim | Tôi đề xuất/cho rằng điều gì? |
| Evidence | Bằng chứng nào đang hỗ trợ claim? |
| Evidence quality | Bằng chứng mạnh, trung bình hay yếu? Vì sao? |
| Reasoning | Vì sao bằng chứng này dẫn tới claim? |
| Boundary | Claim đúng trong điều kiện nào, chưa chắc trong điều kiện nào? |
| Counter-evidence | Có dữ kiện hoặc quan sát nào đi ngược claim không? |
| Risk if wrong | Nếu claim sai thì ảnh hưởng gì đến sản phẩm, team, tiến độ, chất lượng? |
| Next check | Kiểm chứng nhỏ nhất trước khi quyết định là gì? |

### Câu phản biện an toàn

Dùng các mẫu sau khi cần phản biện:

- "Mình đồng ý hướng này có thể đúng. Phần mình chưa thấy rõ là bằng chứng cho ..."
- "Nếu giả định này sai, lớp nào sẽ bị ảnh hưởng nhiều nhất?"
- "Ta đang đo ở điểm nào trong luồng end-to-end?"
- "Có trường hợp nào dữ liệu hiện tại chưa bao phủ không?"
- "Mình đề xuất tách claim này thành hai phần để kiểm chứng dễ hơn."
- "Trước khi khóa quyết định, ta có thể chạy kiểm chứng nhỏ nào?"

## 8. Case

| Thành phần | Nội dung |
| --- | --- |
| Context | Team cân nhắc dùng một logic AI để tự động gợi ý kịch bản trong nhà thông minh. Một ý kiến nói rằng "AI sẽ làm trải nghiệm thông minh hơn". |
| Wrong response | Nhóm tranh luận thích hay không thích AI, trong khi chưa rõ AI cải thiện chỉ số nào, bằng chứng người dùng nào, rủi ro sai gợi ý ra sao. |
| Root cause | Claim quá rộng, evidence chưa có, reasoning thiếu tiêu chí, rủi ro trải nghiệm và vận hành chưa được nhìn thấy. |
| Better response | Viết claim cụ thể: "AI nên gợi ý kịch bản khi có đủ tín hiệu hành vi lặp lại". Evidence cần: dữ liệu hành vi, prototype, phản hồi người dùng, tỷ lệ chấp nhận gợi ý. Boundary: không tự động chạy hành động nhạy cảm nếu chưa xác nhận. Risk: gợi ý sai làm mất niềm tin. Next check: thử nghiệm prototype với tập kịch bản hẹp và tiêu chí rõ. |
| Takeaway | Một công nghệ tốt chưa phải là một quyết định sản phẩm tốt nếu thiếu claim cụ thể và bằng chứng đúng. |

## 9. Thực hành

| Mức | Nhiệm vụ |
| --- | --- |
| Nhận diện | Chọn 3 câu kết luận trong tài liệu, ticket hoặc cuộc trao đổi gần đây. Gạch nhãn claim và evidence nếu có. |
| Giải thích | Chọn 1 claim và giải thích vì sao evidence hiện tại mạnh/yếu/trung bình. |
| Áp dụng nhỏ | Điền bảng claim-evidence-risk cho một quyết định đang thảo luận. |
| Mô phỏng | Viết lại một phản hồi phản biện dễ gây phòng thủ thành phản hồi dùng câu hỏi về bằng chứng. |
| Áp dụng thật | Đưa bảng claim-evidence-risk vào một review yêu cầu, thiết kế, bug hoặc quyết định kỹ thuật. |
| Cải thiện | Sau phản hồi từ người khác, bổ sung counter-evidence hoặc boundary cho claim. |

## 10. Tự kiểm tra

| Mức | Dấu hiệu | Bằng chứng |
| --- | --- | --- |
| 1. Nhận biết | Bạn nhận ra claim thiếu bằng chứng | Gạch nhãn được claim/evidence trong 3 câu trao đổi |
| 2. Giải thích | Bạn đánh giá được chất lượng bằng chứng | Có nhận xét evidence quality và boundary |
| 3. Áp dụng | Bạn lập luận bằng bảng claim-evidence-risk | Có bảng hoàn chỉnh cho một quyết định thật |
| 4. Linh hoạt | Bạn phản biện mà vẫn giữ hợp tác | Có phản hồi được viết lại theo hướng hỏi rõ claim, evidence, risk |

## 11. Áp dụng sau bài học

- Việc làm trong 48 giờ: chọn một claim đang được tin trong dự án và điền bảng claim-evidence-risk.
- Bằng chứng cần thu thập: claim cụ thể, ít nhất 2 evidence, boundary, risk if wrong và next check.
- Điều chỉnh lần sau: bằng chứng nào từng làm bạn tự tin nhưng thực ra chưa đo đúng vấn đề?
