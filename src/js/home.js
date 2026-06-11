document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll(".survey-grid input[type='radio']");
    const resultBox = document.getElementById("survey-result");
    const resultList = document.getElementById("result-list");
    const solutionBtn = document.getElementById("show-solution-btn");
    const solutionContent = document.getElementById("solution-content");
    let currentSolution = null;

    const results = {
        tech: "👉 Công nghệ và mạng xã hội: Khảo sát do nhóm thực hiện trên 362 người cho thấy, có 196 người, tương đương 54,14% số người tham gia cũng đang gặp tình trạng giống bạn; họ rất thường xuyên chịu tác động từ công nghệ và mạng xã hội đến khả năng tập trung trong học tập, công việc và sinh hoạt hằng ngày.",
        social: "👉 Môi trường và tác động xã hội: Khảo sát do nhóm thực hiện trên 362 người cho thấy, có 85 người, tương đương 23,48% số người tham gia cũng đang gặp tình trạng giống bạn; họ rất thường xuyên chịu tác động từ môi trường và tác động xã hội đến khả năng tập trung trong học tập, công việc và sinh hoạt hằng ngày.",
        pressure: "👉 Tâm lý và áp lực cuộc sống: Khảo sát do nhóm thực hiện trên 362 người cho thấy, có 30 người, tương đương 8,29% số người tham gia cũng đang gặp tình trạng giống bạn; họ rất thường xuyên chịu tác động từ tâm lý và áp lực cuộc sống đến khả năng tập trung trong học tập, công việc và sinh hoạt hằng ngày.",
        habit: "👉 Thói quen và lối sống cá nhân: Khảo sát do nhóm thực hiện trên 362 người cho thấy, có 20 người, tương đương 5,52% số người tham gia cũng đang gặp tình trạng giống bạn; họ rất thường xuyên chịu tác động từ thói quen và lối sống cá nhân đến khả năng tập trung trong học tập, công việc và sinh hoạt hằng ngày.",
        skill: "👉 Kỹ năng quản lý bản thân: Khảo sát do nhóm thực hiện trên 362 người cho thấy, có 31 người, tương đương 8,56% số người tham gia cũng đang gặp tình trạng giống bạn; họ rất thường xuyên chịu tác động từ kỹ năng quản lý bản thân đến khả năng tập trung trong học tập, công việc và sinh hoạt hằng ngày."
    };

    const solutions = {
        tech: `
            <h3>Giải pháp: POMODORO - CHIA NHỎ ĐỂ HIỆU QUẢ</h3>
            <p>
                Xây dựng các chiến lược học tập khoa học được xem là một trong những giải pháp giúp cải thiện khả năng tập trung.
                Trong đó, phương pháp Pomodoro được đánh giá cao nhờ khả năng giúp người học duy trì sự chú ý trong từng khoảng thời gian ngắn.
                Chia sẻ về vấn đề này, NCS. ThS Nguyễn Đại Minh cho biết: 
            </p>
            <blockquote>
                “Tôi khuyến nghị các bạn có thể thử áp dụng những việc chúng ta thay đổi về mặt môi trường sinh hoạt,... tận dụng các phương pháp như chia ra 80-20; và đặc biệt là phương pháp Pomodoro”
                <br><strong>(NCS. ThS Nguyễn Đại Minh)</strong>
            </blockquote>
            <img
        src="https://res.cloudinary.com/dkmudlfal/image/upload/f_auto,q_auto/cà_chua_2_jpeqap"
        alt="Phương pháp Pomodoro"
        class="solution-image"
    >
        `,

        social: `
            <h3>Giải pháp: KHÔNG GIAN MỚI - HIỆU QUẢ MỚI </h3>
            <h4 class="tile" >Quán cà phê – Không gian tạo cảm hứng </h4>
            
            <p>Giữa vô số tác nhân gây xao nhãng, nhiều người trẻ đang chủ động tìm kiếm những không gian phù hợp hơn để học tập và làm việc.
             Việc thay đổi môi trường không chỉ giúp hạn chế các yếu tố gây mất tập trung mà còn tạo điều kiện để duy trì động lực và hình thành thói quen làm việc hiệu quả. 
            Dưới góc nhìn chuyên môn, NCS. Ths Nguyễn Đại Minh - giảng viên Trường Đại học Khoa học Xã hội và Nhân văn chia sẻ:</p>
            
          <div class="audio-card" id="audio-trigger">

            <div class="audio-wave">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
            </div>


            <audio id="expertAudio">
                <source src="https://res.cloudinary.com/dkmudlfal/video/upload/voice_ko_gian_rljsui.wav" type="audio/wav">
            </audio>

                    </div>
                    

            <div id="audio-subtitle" class="audio-subtitle"></div>
                    <p>Mất tập trung đang trở thành vấn đề mà nhiều người trẻ phải đối mặt trong học tập và công việc. Khảo sát trên 362 người của nhóm thực hiện cho thấy 72, 37% người tham gia cho biết họ thường xuyên hoặc rất thường xuyên bị tác động bởi các yếu tố môi trường và xã hội. 

            Từ kết quả khảo sát và quá trình tìm hiểu thực tế, nhóm thực hiện nhận thấy việc thay đổi không gian học tập, làm việc có thể là một giải pháp giúp cải thiện tình trạng này. Thay vì học tập hoặc làm việc trong những môi trường quen thuộc dễ gây xao nhãng, người trẻ có thể tìm đến những không gian được thiết kế phù hợp hơn cho việc tập trung.

            Trong số đó, quán cà phê học tập là một lựa chọn đáng cân nhắc. Không gian tương đối yên tĩnh, hệ thống bàn ghế được bố trí phục vụ cho việc học tập, cùng bầu không khí mà phần lớn mọi người đều đang tập trung vào công việc của mình có thể tạo động lực và giúp người trẻ duy trì sự chú ý tốt hơn. Bên cạnh đó, việc thay đổi môi trường cũng góp phần giảm cảm giác nhàm chán, tạo ra nguồn cảm hứng mới trong quá trình học tập và làm việc.

            Để đánh giá rõ hơn hiệu quả của giải pháp này, nhóm thực hiện đã trải nghiệm thực tế tại một quán cà phê học tập và ghi nhận những chia sẻ từ các bạn trẻ đang lựa chọn nơi đây làm không gian học tập, làm việc. 
            <p/>
            <div class="video-cafe">
            <video controls poster="../assets/image/video-cover.png">
                                <source src="https://res.cloudinary.com/dkmudlfal/video/upload/0606_iixbk6.mp4" type="video/mp4">
                                Trình duyệt của bạn không hỗ trợ video.
                            </video>
            </div>
            <h4 class="tile" >Thư viện – Không gian dành cho sự tập trung cao độ </h4>
                        <p> Khi sự xao nhãng trở thành trạng thái thường trực của thời đại số, nhiều người trẻ bắt đầu tìm kiếm những không gian giúp họ lấy lại khả năng tập trung. Thư viện vì thế không chỉ còn là nơi đọc sách, mà dần trở thành điểm đến của những người muốn tạm rời xa những thông báo liên tục từ điện thoại, mạng xã hội và nhịp sống hối hả bên ngoài.</p>

           <p> Không gian yên tĩnh, ít tiếng ồn cùng những quy tắc giữ gìn trật tự giúp thư viện hạn chế tối đa các tác nhân gây phân tâm. Tại đây, người trẻ có thể dành hàng giờ để học tập, nghiên cứu hoặc đơn giản là tập trung hoàn thành một công việc mà không bị gián đoạn. Với nhiều người, thư viện trở thành một trong số ít những nơi còn duy trì được sự tập trung sâu – trạng thái ngày càng khó tìm thấy trong cuộc sống thường nhật.</p>

           <p> Để cảm nhận rõ hơn về không gian này, người đọc có thể trực tiếp khám phá thư viện thông qua bộ ảnh dưới đây:</p>
            
                    <img
            src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781073351/Rectangle_26_1_dtpjlv.png"
            alt="Không gian thư viện"
            class="Space-image"
                       />
                       <div class="library-gallery">
                    <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781073886/Rectangle_27_pqtmwu.png">
                    <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781073931/Rectangle_28_o1991q.png">
                  
                       </div>
                       

            <p class="Space-tile">
            Giữa nhịp sống liên tục bị ngắt quãng bởi những thông báo, tin nhắn và màn hình điện tử, việc duy trì sự tập trung trong thời gian dài đang trở thành một thách thức đối với nhiều người trẻ. Trong bối cảnh đó, thư viện dần trở thành một trong số ít không gian còn giữ được sự tĩnh lặng cần thiết cho việc học tập, đọc sách và suy ngẫm. Tách biệt khỏi sự ồn ào của thế giới bên ngoài, nơi đây mang đến cảm giác chậm rãi và yên bình, giúp mỗi người có cơ hội tập trung trọn vẹn vào điều mình đang theo đuổi.
            </p>
            <div class="library-column">
    
    <div class="left-column">
        <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781074689/Rectangle_26_2_nj7kmi.png" alt="">
        <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781074731/Rectangle_28_1_nmch13.png" alt="">
    </div>

    <div class="right-column">
        <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781074801/Rectangle_27_1_mmyw9t.png" alt="">
    </div>

</div>
<p>
Những giá sách trải dài nên khung cảnh quen thuộc của các thư viện. Hàng nghìn đầu sách nằm ngay ngắn trên các kệ, mang theo những câu chuyện, kiến thức và ký ức được lưu giữ qua thời gian. Trong không gian ấy, mỗi người đều có thể chậm lại đôi chút để tìm cho mìn một khoảng yên tĩnh hiếm hoi giữa nhịp sống hối hả bên ngoài.
</p>
<div class="library-photo-grid">

    <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781075978/Rectangle_31_dyyt2n.png" alt="Thư viện">

    <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781076019/Rectangle_30_l1recy.png" alt="Thư viện">

    <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781076050/Rectangle_32_brf33z.png" alt="Thư viện">

    <div class="library-quote">
        <p>
            "Tôi luôn hình dung thiên đường
            sẽ là một dạng thư viện nào đó."
        </p>

        <span>- Jorge Luis Borges -</span>
    </div>

</div>

        <h4 class="tile">Co-working Space – Không gian làm việc chuyên nghiệp</h4>

        <p>Với những người trẻ cần một nơi để học tập và làm việc nghiêm túc, co-working space là một lựa chọn rất phù hợp. Không gian này tạo cảm giác thoải mái, linh hoạt giống như quán cà phê, nhưng vẫn giữ được sự chuyên nghiệp và ổn định như một văn phòng làm việc.</p>

        <p>Bạn nên chọn co-working space thay vì quán cà phê khi cần tập trung trong nhiều giờ liên tục. Đây là lựa chọn phù hợp nếu bạn phải học bài, làm deadline, xử lý công việc quan trọng hoặc cần một môi trường ít bị gián đoạn bởi tiếng nói chuyện, âm nhạc hay người ra vào liên tục. Coworking space cũng phù hợp khi bạn cần một không gian ổn định hơn quán cà phê. Thay vì phải lo tìm chỗ ngồi, ổ cắm điện, mạng wifi hay không gian đủ yên tĩnh, bạn có thể làm việc trong một môi trường được thiết kế sẵn cho việc học tập và làm việc.</p>

        <p>Nếu bạn thường xuyên phải tham gia họp online, học trực tuyến hoặc gọi điện trao đổi công việc, co-working space sẽ giúp bạn chuyên nghiệp hơn. Không gian yên tĩnh, riêng tư và ít tiếng ồn giúp cuộc gọi rõ ràng hơn, đồng thời hạn chế tối đa các yếu tố gây xao nhãng.
        Những lợi ích nổi bật của co-working space có thể kể đến như: không gian yên tĩnh, wifi ổn định, ghế ngồi công thái học, bàn làm việc phù hợp và môi trường tập trung cao. Nhờ đó, bạn có thể học tập, làm việc trong thời gian dài mà vẫn cảm thấy thoải mái và hiệu quả hơn.</p>


<div class="momento360-grid">
    <div class="momento360-item">
        <iframe
            src="https://momento360.com/e/u/cd4c9ab86751477a9e80f27cfb49f564?utm_campaign=embed&amp;utm_source=other&amp;utm_medium=embed&amp;heading=0&amp;pitch=0&amp;field-of-view=75&amp;size=medium&amp;display-plan=true"
            frameborder="0"
            allowfullscreen>
        </iframe>
    </div>

    <div class="momento360-item">
        <iframe
            src="https://momento360.com/e/u/372ebb4eefa240c291f2395f8835839e?utm_campaign=embed&amp;utm_source=other&amp;utm_medium=embed&amp;heading=0&amp;pitch=0&amp;field-of-view=75&amp;size=medium&amp;display-plan=true"
            frameborder="0"
            allowfullscreen>
        </iframe>
    </div>
    <div class="momento360-item">
<iframe src="https://momento360.com/e/u/c3dbb70176884563a8b16f0a8b12601c?utm_campaign=embed&amp;utm_source=other&amp;utm_medium=embed&amp;heading=0&amp;pitch=0&amp;field-of-view=75&amp;size=medium&amp;display-plan=true" width="900" height="450" frameborder="0" allowfullscreen="true" marginheight="0" marginwidth="0"></iframe>
    </div>
</div>


<div class="meeting-gallery">

    <div class="meeting-top">
        <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781082227/IMG_8767_1_v53tpj.png" alt="">
        <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781082305/IMG_8774_1_qwxirj.png" alt="">
    </div>

    <div class="meeting-bottom">
        <img src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781082344/IMG_8761_1_dnuiwg.png" alt="">
    </div>

</div>
        `,

        pressure: `
            <h3>Giải pháp:  THIỀN - TẬP TRUNG TỪ SỰ TĨNH LẶNG</h3>
           <div class="expert-quote-section">
    <div class="expert-quote-frame">
        <div class="expert-quote-card">
            <span class="quote-mark quote-left">“</span>

            <p>
                Khi tình trạng mất tập trung diễn ra thường xuyên và kéo dài, giới trẻ cần ưu tiên rèn luyện
                các kỹ năng ổn định cảm xúc và lấy lại sự tập trung. Một trong những cách hiệu quả là thực hành
                các kỹ thuật hít thở sâu. Chẳng hạn phương pháp thiền định, hít vào – nín thở – thở ra hay
                phương pháp 5-5 (hít vào – nín thở – thở ra – nín thở, mỗi bước 5 giây). Việc kết nối lại với
                cơ thể thông qua hơi thở giúp điều hòa cảm xúc, giảm sự phân tán chú ý và đưa tâm trí trở lại
                với công việc hoặc việc học đang thực hiện.
            </p>

            <span class="quote-mark quote-right">”</span>
        </div>

        <div class="quote-line"></div>

        <p class="quote-author">
            ThS.BS Nguyễn Thanh Trúc, công tác tại Khoa Tâm lý lâm sàng,<br>
            Bệnh viện Tâm thần Trung ương 2 (Đồng Nai).
        </p>
    </div>
</div>
   <h4>“Thiền là gì?”</h4>
   <p>
   Khi nhắc đến thiền, nhiều người thường liên tưởng đến những khoảng lặng tuyệt đối hay hình ảnh ngồi nhắm mắt giữa không gian tĩnh mịch. Tuy nhiên, thiền không chỉ là một tư thế hay một nghi thức mang màu sắc tôn giáo. Trong Phật giáo, thiền được xem là một phần của quá trình tu tập, giúp con người giữ tâm trí tĩnh lặng và quan sát bản thân rõ ràng hơn.
   </p>
   <p>
   Trong cuốn Thiền là gì?, Jiddu Krishnamurti cho rằng thiền là “nhìn thế giới như nó đang là, chứ không phải như ta muốn nó phải là”. Theo cách hiểu phổ biến hiện nay, thiền là quá trình đưa sự chú ý trở về hiện tại thông qua hơi thở, cảm giác cơ thể hoặc việc quan sát suy nghĩ một cách tỉnh thức.
   <p/>
   <p>
   Ngày nay, thiền không chỉ gắn với đời sống tâm linh mà còn dần trở thành một phương pháp được nhiều người lựa chọn để giảm căng thẳng và tìm lại sự tập trung giữa nhịp sống hiện đại nhiều xao nhãng. Trong bối cảnh điện thoại, mạng xã hội và lượng thông tin liên tục bủa vây, nhu cầu tìm kiếm những khoảng nghỉ cho tâm trí cũng ngày càng phổ biến, đặc biệt ở người trẻ.
   </p>
   <h4>
Thiền chánh niệm là gì?
   </h4>
   <p>
Thiền chánh niệm là phương pháp giúp rèn luyện khả năng duy trì sự tập trung bằng cách hướng sự chú ý vào hiện tại, như hơi thở hoặc cảm nhận cơ thể. Thay vì cố loại bỏ suy nghĩ, người tập học cách nhận ra sự xao nhãng rồi nhẹ nhàng đưa tâm trí trở lại trạng thái tập trung. Nhiều chuyên gia cho rằng phương pháp này có thể hỗ trợ cải thiện sự tập trung, giảm căng thẳng và điều tiết cảm xúc.
   </p>

<h4>
Cách thực hành thiền chánh niệm đơn giản:
</h4>
<p>
Người tập có thể bắt đầu bằng việc ngồi ở tư thế thoải mái, giữ lưng thẳng và thả lỏng cơ thể. Không cần cố gắng kiểm soát suy nghĩ hay ép bản thân phải “trống rỗng”.
</p>
<p>
- Một nhịp thở cơ bản trong thiền chánh niệm thường được thực hiện theo nhịp:
</p>
<p>
- Hít vào bằng mũi trong khoảng 4 giây
</p>
<p>
- Giữ nhẹ 1–2 giây
</p>
<p>
- Thở ra chậm bằng mũi hoặc miệng trong khoảng 4–6 giây
</p>
<p>
Nhiều người thường bắt đầu với 1–5 phút mỗi ngày trước khi tăng thời gian luyện tập. Theo các chuyên gia về thiền và chánh niệm, điều quan trọng không nằm ở việc phải ngồi thiền trong bao lâu, mà là khả năng nhận ra khi tâm trí mất tập trung và đưa sự chú ý quay trở lại hiện tại.
</p>
<img class="focus-image"  src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781151206/image_15_1_n0ckat.png" alt="thiền">
<h4>
</br>
“Tại sao khi mất tập trung, thiền lại giúp bạn tập trung trở lại?”
</4>
<div class="video-meditation">
    <iframe
        src="https://player.cloudinary.com/embed/?cloud_name=dkmudlfal&public_id=vid_thiền_khóa_luận_1_idlxjx"
        width="100%"
        height="500"
        frameborder="0"
        allowfullscreen>
    </iframe>
</div>


        `,

        habit: `
            <h3>Giải pháp: POMODORO - CHIA NHỎ ĐỂ HIỆU QUẢ</h3>
            <p>
                Xây dựng các chiến lược học tập khoa học được xem là một trong những giải pháp giúp cải thiện khả năng tập trung.
                Trong đó, phương pháp Pomodoro được đánh giá cao nhờ khả năng giúp người học duy trì sự chú ý trong từng khoảng thời gian ngắn.
                Chia sẻ về vấn đề này, NCS. ThS Nguyễn Đại Minh cho biết: 
            </p>
            <blockquote>
                “Tôi khuyến nghị các bạn có thể thử áp dụng những việc chúng ta thay đổi về mặt môi trường sinh hoạt,... tận dụng các phương pháp như chia ra 80-20; và đặc biệt là phương pháp Pomodoro”
                <br><strong>(NCS. ThS Nguyễn Đại Minh)</strong>
            </blockquote>
            <img
        src="https://res.cloudinary.com/dkmudlfal/image/upload/f_auto,q_auto/cà_chua_2_jpeqap"
        alt="Phương pháp Pomodoro"
        class="solution-image"
    >
        `,

        skill: `
            <h3>Giải pháp:  THIỀN - TẬP TRUNG TỪ SỰ TĨNH LẶNG</h3>
             <div class="expert-quote-section">
    <div class="expert-quote-frame">
        <div class="expert-quote-card">
            <span class="quote-mark quote-left">“</span>

            <p>
                Khi tình trạng mất tập trung diễn ra thường xuyên và kéo dài, giới trẻ cần ưu tiên rèn luyện
                các kỹ năng ổn định cảm xúc và lấy lại sự tập trung. Một trong những cách hiệu quả là thực hành
                các kỹ thuật hít thở sâu. Chẳng hạn phương pháp thiền định, hít vào – nín thở – thở ra hay
                phương pháp 5-5 (hít vào – nín thở – thở ra – nín thở, mỗi bước 5 giây). Việc kết nối lại với
                cơ thể thông qua hơi thở giúp điều hòa cảm xúc, giảm sự phân tán chú ý và đưa tâm trí trở lại
                với công việc hoặc việc học đang thực hiện.
            </p>

            <span class="quote-mark quote-right">”</span>
        </div>

        <div class="quote-line"></div>

        <p class="quote-author">
            ThS.BS Nguyễn Thanh Trúc, công tác tại Khoa Tâm lý lâm sàng,<br>
            Bệnh viện Tâm thần Trung ương 2 (Đồng Nai).
        </p>
    </div>
</div>
   <h4>“Thiền là gì?”</h4>
   <p>
   Khi nhắc đến thiền, nhiều người thường liên tưởng đến những khoảng lặng tuyệt đối hay hình ảnh ngồi nhắm mắt giữa không gian tĩnh mịch. Tuy nhiên, thiền không chỉ là một tư thế hay một nghi thức mang màu sắc tôn giáo. Trong Phật giáo, thiền được xem là một phần của quá trình tu tập, giúp con người giữ tâm trí tĩnh lặng và quan sát bản thân rõ ràng hơn.
   </p>
   <p>
   Trong cuốn Thiền là gì?, Jiddu Krishnamurti cho rằng thiền là “nhìn thế giới như nó đang là, chứ không phải như ta muốn nó phải là”. Theo cách hiểu phổ biến hiện nay, thiền là quá trình đưa sự chú ý trở về hiện tại thông qua hơi thở, cảm giác cơ thể hoặc việc quan sát suy nghĩ một cách tỉnh thức.
   <p/>
   <p>
   Ngày nay, thiền không chỉ gắn với đời sống tâm linh mà còn dần trở thành một phương pháp được nhiều người lựa chọn để giảm căng thẳng và tìm lại sự tập trung giữa nhịp sống hiện đại nhiều xao nhãng. Trong bối cảnh điện thoại, mạng xã hội và lượng thông tin liên tục bủa vây, nhu cầu tìm kiếm những khoảng nghỉ cho tâm trí cũng ngày càng phổ biến, đặc biệt ở người trẻ.
   </p>
   <h4>
Thiền chánh niệm là gì?
   </h4>
   <p>
Thiền chánh niệm là phương pháp giúp rèn luyện khả năng duy trì sự tập trung bằng cách hướng sự chú ý vào hiện tại, như hơi thở hoặc cảm nhận cơ thể. Thay vì cố loại bỏ suy nghĩ, người tập học cách nhận ra sự xao nhãng rồi nhẹ nhàng đưa tâm trí trở lại trạng thái tập trung. Nhiều chuyên gia cho rằng phương pháp này có thể hỗ trợ cải thiện sự tập trung, giảm căng thẳng và điều tiết cảm xúc.
   </p>

<h4>
Cách thực hành thiền chánh niệm đơn giản:
</h4>
<p>
Người tập có thể bắt đầu bằng việc ngồi ở tư thế thoải mái, giữ lưng thẳng và thả lỏng cơ thể. Không cần cố gắng kiểm soát suy nghĩ hay ép bản thân phải “trống rỗng”.
</p>
<p>
- Một nhịp thở cơ bản trong thiền chánh niệm thường được thực hiện theo nhịp:
</p>
<p>
- Hít vào bằng mũi trong khoảng 4 giây
</p>
<p>
- Giữ nhẹ 1–2 giây
</p>
<p>
- Thở ra chậm bằng mũi hoặc miệng trong khoảng 4–6 giây
</p>
<p>
Nhiều người thường bắt đầu với 1–5 phút mỗi ngày trước khi tăng thời gian luyện tập. Theo các chuyên gia về thiền và chánh niệm, điều quan trọng không nằm ở việc phải ngồi thiền trong bao lâu, mà là khả năng nhận ra khi tâm trí mất tập trung và đưa sự chú ý quay trở lại hiện tại.
</p>
<img class="focus-image"  src="https://res.cloudinary.com/dkmudlfal/image/upload/v1781151206/image_15_1_n0ckat.png" alt="thiền">
</br>
<h4>
“Tại sao khi mất tập trung, thiền lại giúp bạn tập trung trở lại?”
</4>
<div class="video-meditation">
    <iframe
        src="https://player.cloudinary.com/embed/?cloud_name=dkmudlfal&public_id=vid_thiền_khóa_luận_1_idlxjx"
        width="100%"
        height="500"
        frameborder="0"
        allowfullscreen>
    </iframe>
</div>
        `
    };

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            lockUsedColumns();
            hideSolution();
            showResultWhenDone();
        });
    });

    function showResultWhenDone() {
        const checkedRadios = [...radios].filter(radio => radio.checked);

        if (checkedRadios.length < 5) {
            resultBox.style.display = "none";
            solutionBtn.style.display = "none";
            resultList.innerHTML = "";
            hideSolution();
            return;
        }

        const veryRadio = checkedRadios.find(radio => radio.value === "very");

        if (!veryRadio) {
            resultBox.style.display = "none";
            solutionBtn.style.display = "none";
            resultList.innerHTML = "";
            hideSolution();
            return;
        }

        const factor = veryRadio.dataset.factor;

        resultList.innerHTML = `
            <p class="result-item">
                ${results[factor]}
            </p>
        `;

        resultBox.style.display = "block";
        solutionBtn.style.display = "block";
    }

    function lockUsedColumns() {
        const selectedValues = [...radios]
            .filter(radio => radio.checked)
            .map(radio => radio.value);

        radios.forEach(radio => {
            radio.disabled = !radio.checked && selectedValues.includes(radio.value);
        });
    }

    function hideSolution() {
        if (!solutionContent) return;
        solutionContent.innerHTML = "";
        solutionContent.classList.remove("show");
    }

    const methodInfo = {
        pomodoro: { label: "POMODORO - CHIA NHỎ ĐỂ HIỆU QUẢ", factor: "tech" },
        newSpace: { label: "KHÔNG GIAN MỚI - HIỆU QUẢ MỚI", factor: "social" },
        meditation: { label: "THIỀN - TẬP TRUNG TỪ SỰ TĨNH LẶNG", factor: "pressure" }
    };

    const factorToMethod = {
        tech: "pomodoro",
        social: "newSpace",
        pressure: "meditation",
        habit: "pomodoro",
        skill: "meditation"
    };

    function renderSolution(methodKey) {
        currentSolution = methodKey;
        const methodFactor = methodInfo[methodKey]?.factor;
        if (!methodFactor || !solutions[methodFactor]) return;

        solutionContent.innerHTML = solutions[methodFactor];
        solutionContent.classList.add("show");

        const optionSection = document.createElement("div");
        optionSection.className = "method-options";
        optionSection.innerHTML = `<h4>Các phương pháp khác bạn có thể tham khảo:</h4>`;

        const optionList = document.createElement("div");
        optionList.className = "method-options-list";

        Object.keys(methodInfo)
            .filter(key => key !== methodKey)
            .forEach(key => {
                const optionButton = document.createElement("button");
                optionButton.type = "button";
                optionButton.className = "method-option-btn";
                optionButton.textContent = methodInfo[key].label;
                optionButton.addEventListener("click", () => renderSolution(key));
                optionList.appendChild(optionButton);
            });

        optionSection.appendChild(optionList);
        solutionContent.appendChild(optionSection);

        solutionContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    solutionBtn.addEventListener("click", () => {
        const veryRadio = [...radios].find(
            radio => radio.checked && radio.value === "very"
        );

        if (!veryRadio) return;

        const methodKey = factorToMethod[veryRadio.dataset.factor];
        if (!methodKey) return;

        renderSolution(methodKey);
    });


    // audio card 
    document.addEventListener("click", function (e) {
        const card = e.target.closest(".audio-card");

        if (!card) return;

        const audio = card.querySelector("audio");

        if (!audio) return;

        if (audio.paused) {
            audio.play();
            card.classList.add("playing");
        } else {
            audio.pause();
            card.classList.remove("playing");
        }

        audio.onended = () => {
            card.classList.remove("playing");
        };
    });




});