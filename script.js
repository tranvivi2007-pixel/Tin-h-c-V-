/* =====================================================
   TIN HỌC ÔN TẬP - SCRIPT.JS (BẢN HOÀN CHỈNH)
===================================================== */

/* =====================================================
   1. DỮ LIỆU BÀI HỌC
===================================================== */

const lessons = {
    powerpoint: [
        {
            id: "ppt1",
            title: "PowerPoint - Bài 1",
            description: "Làm quen PowerPoint và các thao tác cơ bản.",
            video: "ÔN TẬP TH BÀI 1( POWERPOINT ).mp4",
            file: "Bài 1.pptx"
        },
        {
            id: "ppt2",
            title: "PowerPoint - Bài 2",
            description: "Thiết kế và định dạng bài trình chiếu.",
            video: "ÔN TẬP TH BÀI 2( POWERPOINT ).mp4",
            file: "Bài 2.pptx"
        },
        {
            id: "ppt3",
            title: "PowerPoint - Bài 3",
            description: "Hiệu ứng, chuyển cảnh và trình chiếu.",
            video: "ÔN TẬP TH BÀI 3( POWERPOINT ).mp4",
            file: "Bài 3.pptx"
        }
    ],

    excel: [
        {
            id: "ex1",
            title: "Excel - Bài 1",
            description: "Ôn tập công thức và các hàm cơ bản.",
            video: "ÔN TẬP TH BÀI 1(EXCEL ).mp4",
            file: "Bài 1,2,3,4 excel.xlsx"
        },
        {
            id: "ex2",
            title: "Excel - Bài 2",
            description: "Các hàm xử lý dữ liệu trong Excel.",
            video: "ÔN TẬP TH BÀI 2(EXCEL ).mp4",
            file: "Bài 1,2,3,4 excel.xlsx"
        },
        {
            id: "ex3",
            title: "Excel - Bài 3",
            description: "Hàm và công thức nâng cao.",
            video: "ÔN TẬP TH BÀI 3(EXCEL ).mp4",
            file: "Bài 1,2,3,4 excel.xlsx"
        },
        {
            id: "ex4",
            title: "Excel - Bài 4",
            description: "Tổng hợp kiến thức Excel.",
            video: "ÔN TẬP TH BÀI 4(EXCEL ).mp4",
            file: "Bài 1,2,3,4 excel.xlsx"
        }
    ],

    word: [
        {
            id: "w1",
            title: "Word - Bài 1",
            description: "Soạn thảo và định dạng văn bản.",
            video: "ÔN TẬP TH BÀI 1 ( WORD ).mp4",
            file: "Bài 1.docx"
        },
        {
            id: "w2",
            title: "Word - Bài 2",
            description: "Các thao tác định dạng nâng cao.",
            video: "ÔN TẬP TH BÀI 2(WORD ).mp4",
            file: "Bài 2.docx"
        },
        {
            id: "w3",
            title: "Word - Bài 3",
            description: "Bảng biểu và các công cụ Word.",
            video: "ÔN TẬP TH BÀI 3(WORD ).mp4",
            file: "Bài 3.docx"
        },
        {
            id: "w4",
            title: "Word - Bài 4",
            description: "Tổng hợp kiến thức Word.",
            video: "ÔN TẬP TH BÀI 4(WORD ).mp4",
            file: "Bài 4.docx"
        }
    ]
};

/* =====================================================
   2. DỮ LIỆU NGÂN HÀNG TRẮC NGHIỆM
===================================================== */

const quizBank = {
  module1: {
    title: "Module 1: HIỂU BIẾT VỀ CÔNG NGHỆ THÔNG TIN CƠ BẢN",
    description: "Ngân hàng câu hỏi trắc nghiệm ôn thi chuẩn CNTT cơ bản.",
    questions: [
      {
      q: "Trong những phát biểu sau, phát biểu nào đúng nhất về máy vi tính?",
      options: [
        "Thiết bị điện tử, cho phép xử lý thông tin một cách tự động theo những chương trình đã được lập sẵn từ trước.",
        "Bất kỳ thiết bị máy móc nào có khả năng tính toán.",
        "Thiết bị để duyệt web và đọc email.",
        "Thiết bị có thể xử lý được mọi loại dữ liệu."
      ],
      answer: 0,
      explain: "Máy tính là thiết bị điện tử xử lý thông tin tự động theo chương trình lập sẵn."
    },
    {
      q: "Thuật ngữ PC (Personal Computer) được dùng để chỉ:",
      options: [
        "Máy tính bảng.",
        "Máy xách tay.",
        "Tất cả các loại máy tính như: máy để bàn, máy xách tay, máy tính bảng.",
        "Các máy server và siêu máy tính."
      ],
      answer: 2,
      explain: "PC là máy tính cá nhân, bao gồm cả máy để bàn, máy xách tay và máy tính bảng."
    },
    {
      q: "Máy tính để bàn là loại máy:",
      options: [
        "Thường đặt cố định tại một vị trí và ít di chuyển.",
        "Nhỏ gọn, có thể di chuyển dễ dàng.",
        "Thường sử dụng cho những người thường xuyên di chuyển.",
        "Thường được sử dụng để phát triển các phần mềm ứng dụng."
      ],
      answer: 0,
      explain: "Máy tính để bàn (Desktop) được thiết kế để đặt cố định tại một vị trí làm việc."
    },
    {
      q: "Hãng nào sau đây không sản xuất máy tính bảng:",
      options: [
        "Apple.",
        "Samsung.",
        "Sony.",
        "Leica."
      ],
      answer: 3,
      explain: "Leica là hãng chuyên sản xuất máy ảnh và ống kính, không sản xuất máy tính bảng."
    },
    {
      q: "Phần cứng máy tính là gì?",
      options: [
        "Là tất cả những gì có trong máy tính nhằm giúp máy tính hoạt động được.",
        "Là tất cả các thiết bị có thể lưu trữ được phần mềm.",
        "Là những thiết bị máy móc và các linh kiện điện tử cấu thành nên máy tính.",
        "Là tất cả những gì con người có thể thấy bằng mắt thường"
      ],
      answer: 2,
      explain: "Phần cứng (Hardware) bao gồm tất cả các linh kiện vật lý, điện tử tạo nên máy tính."
    },
    {
      q: "Đĩa cứng (HDD – Hard Disk Drive) là:",
      options: [
        "Là thiết bị lưu trữ dữ liệu tạm thời khi máy tính đang hoạt động.",
        "Là thiết bị gắn bên trong máy tính dùng để ghi dữ liệu tạm thời.",
        "Là thiết bị phần cứng không được sử dụng để lưu trữ dữ liệu.",
        "Là thiết bị để lưu trữ dữ liệu."
      ],
      answer: 3,
      explain: "Ổ đĩa cứng HDD là thiết bị lưu trữ dữ liệu lâu dài (phi bốc hơi) của máy tính."
    },
    {
      q: "Bàn phím (Keyboard) là:",
      options: [
        "Thiết bị gắn bên trong máy tính.",
        "Thiết bị ngoại vi của máy tính dùng để nhập dữ liệu.",
        "Thiết bị có khả năng nhập mọi định dạng dữ liệu.",
        "Thiết bị xuất."
      ],
      answer: 1,
      explain: "Bàn phím là thiết bị ngoại vi thuộc nhóm thiết bị nhập (Input device)."
    },
    {
      q: "Chuột máy tính (Mouse) là:",
      options: [
        "Là thiết bị nhập, thường kết nối trực tiếp với máy tính thông qua cổng giao tiếp PS/2 hoặc LPT",
        "Là thiết bị nhập, thường kết nối trực tiếp với máy tính thông qua cổng giao tiếp PS/2 hoặc USB.",
        "Thiết bị bắt buộc phải có trong hệ thống máy tính, kết nối với máy tính thông qua cổng giao tiếp PS/2 hoặc USB.",
        "Thiết bị xuất dữ liệu của hệ thống máy tính, thường kết nối với máy tính thông qua cổng giao tiếp PS/2 hoặc COM."
      ],
      answer: 1,
      explain: "Chuột là thiết bị nhập kết nối với máy tính phổ biến qua cổng USB hoặc chuẩn cũ PS/2."
    },
    {
      q: "Bảng chạm (touchpad) là:",
      options: [
        "Thiết bị được trang bị trên hầu hết các máy tính xách tay, bảng chạm có thể thực hiện được tất cả những thao tác mà chuột máy tính thực hiện.",
        "Thiết bị nhập và xuất được các kí tự thay cho bàn phím.",
        "Thiết bị thường được dùng để xuất dữ liệu trên máy tính xách tay.",
        "Không phải là thiết bị dùng để nhập dữ liệu."
      ],
      answer: 0,
      explain: "Touchpad đóng vai trò thay thế hoàn toàn cho chuột trên laptop."
    },
    {
      q: "Chọn một phương án chính xác nhất để trả lời cho chức năng của màn hình cảm ứng:",
      options: [
        "Là thiết bị nhập.",
        "Là thiết bị xuất.",
        "Là thiết bị nhập và cũng là thiết bị xuất.",
        "Là thiết bị không có khả năng nhập."
      ],
      answer: 2,
      explain: "Màn hình cảm ứng nhận thao tác chạm (nhập) và hiển thị hình ảnh (xuất)."
    },
    {
      q: "Trong các phát biểu sau, phát biểu nào không đúng?",
      options: [
        "Bàn phím, chuột, bi lăn (trackball), bảng chạm (touchpad), bút chạm (stylus), màn hình cảm ứng đều có chức năng nhập thông tin cho máy tính.",
        "Cần điều khiển (joystick), máy ghi hình trực tiếp (webcam), máy ảnh kỹ thuật số, mi-crô (micro), máy quét ảnh (scanner) đều có chức năng nhập thông tin cho máy tính.",
        "Máy quét ảnh (scanner) có khả năng nhập văn bản nhanh hơn bất kỳ thiết bị nào khác.",
        "Cần điều khiển (joystick) là thiết bị thường được sử dụng trong một số trò chơi trên máy tính."
      ],
      answer: 2,
      explain: "Máy quét ảnh (scanner) số hóa hình ảnh, không phải là thiết bị nhập văn bản tối ưu nhất so với việc sao chép tệp dữ liệu trực tiếp."
    },
    {
      q: "Thiết bị nào sau đây không phải là thiết bị xuất thông tin:",
      options: [
        "Màn hình (monitor).",
        "Máy quét (scanner).",
        "Máy chiếu (projector).",
        "Máy in (printer)."
      ],
      answer: 1,
      explain: "Máy quét (scanner) là thiết bị nhập thông tin vào máy tính."
    },
    {
      q: "Trong các phát biểu sau, phát biểu nào đúng khi nói về thiết bị xuất dữ liệu:",
      options: [
        "Nếu thiếu thiết bị xuất dữ liệu thì máy tính sẽ không khởi động được.",
        "Thiết bị xuất dữ liệu không phải là thiết bị ngoại vi.",
        "Màn hình, màn hình cảm ứng, máy in, loa, tai nghe là các thiết bị xuất dữ liệu.",
        "Tất cả các máy in là thiết bị xuất được kết nối với máy tính thông qua cổng LPT và không thể kết nối với máy tính qua cổng USB."
      ],
      answer: 2,
      explain: "Màn hình, máy in, loa, tai nghe đều có chức năng đưa thông tin ra ngoài cho người dùng."
    },
    {
      q: "Thiết bị nào sau đây vừa là thiết bị nhập vừa là thiết bị xuất thông tin:",
      options: [
        "Tai nghe.",
        "Bi lăn (trackball).",
        "Màn hình cảm ứng.",
        "Bút chạm (stylus)."
      ],
      answer: 2,
      explain: "Màn hình cảm ứng vừa nhận dữ liệu đầu vào vừa hiển thị kết quả đầu ra."
    },
    {
      q: "Máy in (printer) là:",
      options: [
        "Thiết bị để chụp lại các nội dung được soạn thảo hoặc thiết kế sẵn.",
        "Thiết bị không thể kết nối trực tiếp với máy tính.",
        "Thiết bị có khả năng nhập thông tin.",
        "Thiết bị dùng để xuất thông tin ra các chất liệu khác nhau với nội dung có sẵn."
      ],
      answer: 3,
      explain: "Máy in dùng để xuất dữ liệu/hình ảnh từ máy tính ra giấy hoặc các chất liệu khác."
    },
    {
      q: "Trong các phát biểu sau, phát biểu nào không đúng:",
      options: [
        "Chuột, bàn phím và máy in có thể kết nối trực tiếp với máy tính thông qua bất kỳ cổng nào trên mainboard.",
        "Máy in có thể kết nối với máy tính thông qua cổng LPT hoặc cổng USB.",
        "Máy in có thể kết nối với hệ thống mạng LAN thông qua cáp mạng.",
        "Chuột và bàn phím thường kết nối với máy tính thông qua cổng PS/2 và cổng USB."
      ],
      answer: 0,
      explain: "Mỗi thiết bị ngoại vi chỉ có thể kết nối với các cổng giao tiếp tương thích, không thể cắm vào bất kỳ cổng nào."
    },
    {
      q: "Cổng PS/2 là cổng dùng để kết nối trực tiếp với:",
      options: [
        "Mạng máy tính.",
        "Máy in.",
        "Bàn phím hoặc chuột.",
        "Đầu đọc thẻ nhớ."
      ],
      answer: 2,
      explain: "Cổng PS/2 truyền thống thường dùng cho bàn phím (màu tím) và chuột (màu xanh lá)."
    },
    {
      q: "Trong các cổng giao tiếp với thiết bị ngoại vi trên máy tính cổng nào sau đây thường được dùng để kết nối trực tiếp với máy in:",
      options: [
        "PS/2.",
        "COM.",
        "USB hoặc LPT",
        "VGA"
      ],
      answer: 2,
      explain: "Máy in truyền thống dùng cổng LPT (Parallel port) và hiện nay chủ yếu dùng chuẩn USB."
    },
    {
      q: "Phần mềm máy tính hay còn được gọi tắt là phần mềm (software) là:",
      options: [
        "Là một tập hợp các câu lệnh hoặc chỉ thị được viết bằng một hoặc nhiều ngôn ngữ lập trình theo một trật tự xác định nhằm thực hiện một nhiệm vụ hay một chức năng nào đó.",
        "Những chương trình được những lập trình viên xây dựng trên những thuật toán nhằm giải quyết bài toán nào đó.",
        "Những thứ không thể cầm, nắm như phần cứng của máy tính.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Cả ba định nghĩa trên đều mô tả chính xác về khái niệm phần mềm máy tính."
    },
    {
      q: "Phần mềm hệ thống là:",
      options: [
        "Chương trình tạo ra môi trường trung gian cho các chương trình ứng dụng khác thực hiện.",
        "Phần mềm giúp phần cứng hoạt động và duy trì sự hoạt động của phần cứng trong hệ thống.",
        "Phần mềm điều khiển trực tiếp phần cứng máy tính và các thiết bị ngoại vi trong hệ thống.",
        "Gồm các phương án trên"
      ],
      answer: 3,
      explain: "Phần mềm hệ thống bao gồm các chức năng quản lý phần cứng và tạo môi trường chạy ứng dụng."
    },
    {
      q: "Phần mềm ứng dụng là:",
      options: [
        "Chương trình cho phép người dùng giải quyết được một công việc nào đó. Ví dụ như: tính toán, soạn thảo văn bản hay chơi trò chơi.",
        "Chương điều khiển trực tiếp các thiết bị như màn hình, máy in...",
        "Chương trình tạo ra môi trường trung gian cho các chương trình ứng dụng khác thực hiện.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 0,
      explain: "Phần mềm ứng dụng giúp người dùng thực hiện các công việc cụ thể như soạn thảo, tính toán, giải trí."
    },
    {
      q: "Phần mềm nào sau đây không phải là phần mềm ứng dụng:",
      options: [
        "Trò chơi Pikachu.",
        "Hệ điều hành Windows.",
        "Microsoft Word.",
        "Bỏ dấu tiếng việt Unikey."
      ],
      answer: 1,
      explain: "Windows là Hệ điều hành (Phần mềm hệ thống), không phải phần mềm ứng dụng."
    },
    {
      q: "Hệ điều hành thuộc loại phần mềm nào sau đây?",
      options: [
        "Phần mềm ứng dụng.",
        "Phần mềm hệ thống.",
        "Phần mềm ứng dụng gõ và định dạng văn bản.",
        "Phần mềm chỉ dùng để điều khiển thiết bị nhập"
      ],
      answer: 1,
      explain: "Hệ điều hành (Windows, macOS, Linux) thuộc loại phần mềm hệ thống."
    },
    {
      q: "Phát biểu nào sau đây sai khi nói về Hệ điều hành:",
      options: [
        "Hệ điều hành là phần mềm chạy trên máy tính, dùng để điều hành, quản lý các thiết bị phần cứng và các tài nguyên phần mềm trên máy tính..",
        "Hệ điều hành đóng vai trò trung gian trong việc giao tiếp giữa người sử dụng và phần cứng máy tính.",
        "Hệ điều hành cung cấp một môi trường cho phép người sử dụng phát triển và thực hiện các ứng dụng của họ một cách dễ dàng.",
        "Hệ điều hành là một phần mềm diệt virus."
      ],
      answer: 3,
      explain: "Hệ điều hành không phải là phần mềm diệt virus (dù có thể tích hợp sẵn công cụ bảo mật)."
    },
    {
      q: "Trong các phương án sau, phương án nào không phải là tên của một hệ điều hành:",
      options: [
        "Galaxy.",
        "Linux.",
        "Mac OS.",
        "Windows."
      ],
      answer: 0,
      explain: "Galaxy là tên dòng sản phẩm phần cứng/điện thoại của Samsung, không phải tên một hệ điều hành."
    },
    {
      q: "Switch là:",
      options: [
        "Thiết bị có thể được sử dụng để kết nối các máy tính lại với nhau tạo thành một mạng LAN, từ đó cho phép nhiều người dùng sử dụng chung một số dịch vụ.",
        "Là một công tắc để tắt các thiết bị điện có trong mạng LAN.",
        "Thiết bị định tuyến.",
        "Thiết bị không dây dùng để truy cập Internet."
      ],
      answer: 0,
      explain: "Switch (thiết bị chuyển mạch) dùng để kết nối các máy tính trong cùng một mạng LAN."
    },
    {
      q: "Bộ xử lý trung tâm (CPU) là gì ?",
      options: [
        "Nơi nhập thông tin cho máy tính.",
        "Nơi xử lý, quyết định, điều khiển hoạt động của máy tính.",
        "Nơi thông báo kết quả cho người sử dụng.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 1,
      explain: "CPU được coi là bộ não của máy tính, đảm nhận việc xử lý và điều khiển mọi hoạt động."
    },
    {
      q: "Tốc độ truy xuất dữ liệu của đĩa cứng thường được tính bằng đơn vị:",
      options: [
        "Kb.",
        "Gbps hoặc Mbps",
        "MHz.",
        "Mb."
      ],
      answer: 1,
      explain: "Tốc độ truyền dữ liệu (truy xuất) được đo bằng số bit truyền trong một giây (bps - bits per second)."
    },
    {
      q: "Tốc độ CPU ảnh hưởng đến yếu tố nào sau đây:",
      options: [
        "Khả năng lưu trữ của máy tính.",
        "Tuổi thọ của ổ cứng",
        "Thời gian truy cập để mở tập tin",
        "Kích cỡ của bộ nhớ trong RAM"
      ],
      answer: 2,
      explain: "Tốc độ CPU càng nhanh thì khả năng xử lý lệnh và mở tập tin/ứng dụng càng nhanh."
    },
    {
      q: "Tốc độ của bộ xử lý trung tâm (CPU) thường được tính bằng đơn vị đo:",
      options: [
        "MB hoặc GB.",
        "MHz hoặc GHz.",
        "MBs hoặc GBs",
        "Gbps hoặc GBps."
      ],
      answer: 1,
      explain: "Tốc độ xung nhịp của CPU được đo bằng Hertz (MHz hoặc GHz)."
    },
    {
      q: "Khi khởi động thêm một chương trình mới thì:",
      options: [
        "Thì CPU sẽ phải làm việc nhiều hơn.",
        "Những chương trình chạy trước đó có thể có dấu hiệu xử lý chậm hơn.",
        "Máy tính cần nhiều bộ nhớ RAM hơn.",
        "Tất cả phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Chạy thêm ứng dụng đòi hỏi máy tính tiêu tốn thêm tài nguyên CPU và bộ nhớ RAM."
    },
    {
      q: "RAM (Random Access Memory) là:",
      options: [
        "Bộ nhớ để lưu trữ tất cả dữ liệu khi máy tính không hoạt động.",
        "Bộ nhớ trong để lưu trữ tất cả chương trình hệ thống.",
        "Bộ nhớ dùng để lưu trữ dữ liệu tạm thời trong quá trình tính toán của máy tính phục vụ quá trình xử lý dữ liệu khi máy tính đang hoạt động.",
        "Là nơi lưu trữ dữ liệu của hệ điều hành khi máy tính ở trạng thái hibernate."
      ],
      answer: 2,
      explain: "RAM là bộ nhớ truy xuất ngẫu nhiên, lưu trữ dữ liệu tạm thời trong lúc máy tính đang bật."
    },
    {
      q: "Trong các phát biểu sau, phát biểu nào sai khi nói đến bộ nhớ ROM:",
      options: [
        "ROM được viết tắt bởi cụm từ “Read Only Memory”.",
        "ROM là bộ nhớ chỉ đọc, dữ liệu trong bộ nhớ ROM vẫn duy trì khi nguồn điện bị cắt.",
        "Máy tính có thể khởi động mà không cần bộ nhớ ROM.",
        "ROM được các nhà sản xuất ghi sẵn các chương trình cơ sở phục vụ cho quá trình khởi động máy."
      ],
      answer: 2,
      explain: "Máy tính bắt buộc phải có ROM (chứa chương trình BIOS/UEFI) mới có thể khởi động được."
    },
    {
      q: "Đơn vị đo nào sau đây không được sử dụng để đo dung lượng bộ nhớ trong?",
      options: [
        "GB.",
        "KB.",
        "MB.",
        "MHz."
      ],
      answer: 3,
      explain: "MHz là đơn vị đo tần số/tốc độ xung nhịp, không phải đơn vị đo dung lượng lưu trữ."
    },
    {
      q: "Ổ cứng di động là:",
      options: [
        "Bộ nhớ trong của máy tính.",
        "Thiết bị lưu trữ, thường có dung lượng lưu trữ lớn, có cơ chế ghi, đọc dữ liệu tương tự như đĩa cứng bên trong máy tính, và thường được sử dụng để lưu trữ các dữ liệu cá nhân như: phần mềm, hình ảnh, video, tệp tin dự phòng… và có thể di chuyển dữ liệu đễ",
        "Thiết bị được kết nối với máy tính chỉ để đưa các dữ liệu cần thiết vào máy tính.",
        "Thiết bị đọc dữ liệu phục vụ cho việc nhập dữ liệu vào máy tính."
      ],
      answer: 1,
      explain: "Ổ cứng di động là thiết bị lưu trữ ngoài có dung lượng lớn, kết nối linh hoạt để lưu giữ và di chuyển dữ liệu."
    },
    {
      q: "Đĩa USB flash là:",
      options: [
        "Thiết bị lưu trữ dữ liệu sử dụng bộ nhớ flash tích hợp với giao tiếp cổng USB.",
        "Thiết bị cho phép lưu trữ dữ liệu dựa trên nguyên tắc quang học.",
        "Thiết bị không có chức năng lưu trữ.",
        "Thiết bị lưu trữ sử dụng như đèn flash."
      ],
      answer: 0,
      explain: "USB Flash Drive là thiết bị lưu trữ dữ liệu dạng chip nhớ Flash giao tiếp qua cổng USB."
    },
    {
      q: "Trong khi đo thông tin thì 2 Byte bằng bao nhiêu bit?",
      options: [
        "8 bit.",
        "16 bit.",
        "1000 bit.",
        "1024 bit."
      ],
      answer: 1,
      explain: "1 Byte = 8 bit, do đó 2 Byte = 16 bit."
    },
    {
      q: "Một KB (Kilobyte) bằng bao nhiêu Byte?",
      options: [
        "8 Byte.",
        "10 Byte.",
        "1000 Byte.",
        "1024 Byte."
      ],
      answer: 3,
      explain: "Theo chuẩn quy đổi dung lượng máy tính: 1 KB = 1024 Byte."
    },
    {
      q: "Trong mạng máy tính, thuật ngữ LAN dùng để chỉ:",
      options: [
        "Mạng cục bộ.",
        "Mạng diện rộng.",
        "Mạng toàn cầu.",
        "Mạng Internet."
      ],
      answer: 0,
      explain: "LAN viết tắt của Local Area Network, nghĩa là Mạng cục bộ."
    },
    {
      q: "Trong mạng máy tính, thuật ngữ WAN dùng để chỉ:",
      options: [
        "Mạng cục bộ.",
        "Mạng diện rộng.",
        "Mạng toàn cầu.",
        "Điểm truy cập không dây."
      ],
      answer: 1,
      explain: "WAN viết tắt của Wide Area Network, nghĩa là Mạng diện rộng."
    },
    {
      q: "Vai trò của máy chủ:",
      options: [
        "Cung cấp và quản lý tài nguyên cho máy trạm.",
        "Triển khai các dịch vụ cho người dùng trên mạng.",
        "Lưu trữ và cung cấp thông tin liên quan đến hệ thống mạng phục vụ cho người quản trị.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Máy chủ (Server) đóng vai trò lưu trữ, cung cấp tài nguyên và dịch vụ cho các máy trạm."
    },
    {
      q: "Tốc độ truyền dữ liệu qua mạng thường được đo là lượng dữ liệu truyền qua kênh truyền trong một đơn vị thời gian. Vậy đơn vị đo này là:",
      options: [
        "Kbps – Kilobit per second.",
        "Mbps– Megabit per second.",
        "Gbps– Gigabit per second.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Các đơn vị trên đều là đo tốc độ truyền bit trên giây (bps) ở các bội số khác nhau."
    },
    {
      q: "Trong các phương án sau, phương án nào không phải là phương tiện truyền thông?",
      options: [
        "Cáp điện thoại.",
        "Sóng vô tuyến.",
        "USB.",
        "Cáp quang."
      ],
      answer: 2,
      explain: "USB là thiết bị lưu trữ/giao tiếp chứ không phải môi trường truyền dẫn mạng."
    },
    {
      q: "Băng thông (bandwidth) kênh truyền được định nghĩa:",
      options: [
        "Là khoảng tần số của tín hiệu mà đường truyền chấp nhận.",
        "Là khả năng truyền dữ liệu qua môi trường truyền dẫn trong một đơn vị thời gian.",
        "Là số lượng tín hiệu truyền cùng lúc qua môi trường truyền.",
        "Là số lượng dữ liệu trao đổi giữa các máy tính trong mạng."
      ],
      answer: 1,
      explain: "Băng thông thể hiện khả năng hay dung lượng truyền dữ liệu tối đa qua mạng trong 1 giây."
    },
    {
      q: "Mạng Internet:",
      options: [
        "Là mạng được sở hữu bởi tập đoàn truyền thông có tên Internet.",
        "Là mạng được sở hữu bởi Bộ quốc phòng Hoa Kỳ.",
        "Là mạng toàn cầu được sở hữu bởi tất cả các quốc gia trên thế giới.",
        "Là mạng toàn cầu sử dụng bộ giao thức truyền thông TCP/IP."
      ],
      answer: 3,
      explain: "Internet là mạng máy tính toàn cầu kết nối với nhau theo chuẩn bộ giao thức TCP/IP."
    },
    {
      q: "Intranet là:",
      options: [
        "Mạng máy tính cục bộ dành cho các doanh nghiệp liên kết với khách hàng theo tiêu chuẩn của Internet, nghĩa là sử dụng các giao thức truyền thông như mạng Internet.",
        "Là mạng Internet của mỗi quốc gia.",
        "Là mạng giống như mạng Internet nhưng quy mô lớn hơn.",
        "Tất cả các phương án trên đều sai."
      ],
      answer: 0,
      explain: "Intranet là mạng nội bộ dựa trên công nghệ và giao thức Internet dành cho phạm vi một tổ chức/doanh nghiệp."
    },
    {
      q: "Extranet là:",
      options: [
        "Là một mạng mở rộng của mạng Internet.",
        "Là một mạng mở rộng của mạng Intranet.",
        "Là mạng máy tính được kết nối từ các mạng Intranet khác nhau qua Internet.",
        "Tất cả các phương án trên đều sai."
      ],
      answer: 2,
      explain: "Extranet là mạng nội bộ mở rộng cho phép các đối tác bên ngoài truy cập thông qua Internet."
    },
    {
      q: "Download là:",
      options: [
        "Tải nội dung từ mạng xuống máy tính người dùng.",
        "Tải nội dung từ máy tính người dùng lên mạng.",
        "Tải nội dung tự động từ một máy chủ lưu trữ bất kỳ lên mạng.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 0,
      explain: "Download (tải xuống) là hành động nhận dữ liệu từ mạng/máy chủ về thiết bị cá nhân."
    },
    {
      q: "Upload là:",
      options: [
        "Tải nội dung từ mạng xuống máy tính người dùng.",
        "Tải nội dung từ máy tính người dùng lên mạng.",
        "Tải nội dung tự động từ mạng về một máy chủ lưu trữ bất kỳ.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 1,
      explain: "Upload (tải lên) là truyền dữ liệu từ thiết bị cá nhân lên máy chủ/mạng."
    },
    {
      q: "Trong các dịch vụ sau thì dịch vụ nào không phải là dịch vụ kết nối Internet:",
      options: [
        "ADSL.",
        "FTTH.",
        "Trực tuyến.",
        "3G."
      ],
      answer: 2,
      explain: "Trực tuyến (Online) là trạng thái sử dụng mạng chứ không phải tên công nghệ/dịch vụ kết nối Internet như ADSL, FTTH, 3G."
    },
    {
      q: "Dung lượng RAM thường được tính bằng đơn vị đo:",
      options: [
        "MB hoặc GB.",
        "MBs hoặc GBs",
        "MHz hoặc GHz.",
        "Tất cả các phương án trên đều sai."
      ],
      answer: 0,
      explain: "Dung lượng bộ nhớ RAM được đo bằng MB (Megabyte) hoặc GB (Gigabyte)."
    },
    {
      q: "Nhận định nào đúng về Smartphone (điện thoại thông minh):",
      options: [
        "Là điện thoại tích hợp nền tảng hệ điều hành di động với nhiều tính năng hỗ trợ tiên tiến về điện toán.",
        "Tất cả các Tablet cũng là smartphone.",
        "Tablet và smartphone là những thiết bị không được cài đặt hệ điều hành.",
        "Smartphone phải được cài đặt hệ điều hành Windows phone."
      ],
      answer: 0,
      explain: "Smartphone được định nghĩa là điện thoại có hệ điều hành di động hỗ trợ tính năng tính toán/xử lý nâng cao."
    },
    {
      q: "Điện thoại di động hay còn gọi là điện thoại cầm tay là:",
      options: [
        "Là loại điện thoại dễ dàng kết nối với mạng viễn thông qua dây dẫn.",
        "Là loại điện thoại kết nối dựa trên sóng điện từ vào mạng viễn thông.",
        "Là điện thoại không thể đàm thoại trong khi đang di chuyển.",
        "Là thiết bị di động mà có thể cầm được bằng tay."
      ],
      answer: 1,
      explain: "Điện thoại di động truyền nhận tín hiệu âm thanh/dữ liệu bằng sóng điện từ (sóng vô tuyến)."
    },
    {
      q: "Chức năng chính của ứng dụng Microsoft Word là gì?",
      options: [
        "Tính toán và lập bảng biểu cho dữ liệu.",
        "Canh lề và định dạng dữ liệu văn bản.",
        "Soạn thảo và định dạng văn bản.",
        "Soạn một bài thuyết trình."
      ],
      answer: 2,
      explain: "Microsoft Word là phần mềm chuyên dùng để soạn thảo và định dạng văn bản."
    },
    {
      q: "Microsoft Powerpoint là phần mềm được dùng để:",
      options: [
        "Soạn và định dạng bài thuyết trình.",
        "Gửi và nhận thư điện tử.",
        "Quản trị cơ sở dữ liệu.",
        "Biên tập ảnh."
      ],
      answer: 0,
      explain: "PowerPoint là phần mềm trình diễn, giúp biên soạn và trình bày các bài thuyết trình."
    },
    {
      q: "Phần mềm mã nguồn mở là:",
      options: [
        "Phần mềm được cung cấp dưới dạng mã máy và mã nguồn.",
        "Phần mềm mà người dùng có thể sửa đổi, cải tiến, phát triển thêm và nâng cấp.",
        "Phần mềm mã nguồn mở cho phép người dùng được tự do chia sẻ cho người khác.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Phần mềm mã nguồn mở đáp ứng đầy đủ các tiêu chí về mã nguồn public, khả năng chỉnh sửa và tự do chia sẻ."
    },
    {
      q: "Phần mềm nào sau đây không phải là phần mềm mã nguồn mở?",
      options: [
        "LibreOffice.",
        "Apache OpenOffice.",
        "Microsoft Office.",
        "Bộ gõ Tiếng Việt Unikey."
      ],
      answer: 2,
      explain: "Microsoft Office là phần mềm thương mại có bản quyền (mã nguồn đóng)."
    },
    {
      q: "Các ứng dụng sau ứng dụng nào là phần mềm mã nguồn mở?",
      options: [
        "Mozilla Firefox.",
        "Unikey.",
        "LibreOffice.",
        "Tất cả đều đúng."
      ],
      answer: 3,
      explain: "Firefox, Unikey và LibreOffice đều là những phần mềm mã nguồn mở/miễn phí phổ biến."
    },
    {
      q: "Để nâng cao hiệu năng máy tính và hiệu quả công việc ta nên:",
      options: [
        "Tắt các ứng dụng không cần thiết.",
        "Mở nhiều ứng dụng nhất có thể.",
        "Sử dụng hơi nước để làm mát CPU.",
        "Tất cả phương án trên đều sai."
      ],
      answer: 0,
      explain: "Tắt các ứng dụng không sử dụng giúp giải phóng tài nguyên CPU và RAM, giúp máy tính chạy nhanh hơn."
    },
    {
      q: "Máy tính xách tay là:",
      options: [
        "Loại máy tính cá nhân nhỏ gọn có thể mang xách được.",
        "Loại máy tính thường có trọng lượng nhẹ.",
        "Có đầy đủ các thành phần cơ bản của một máy tính cá nhân thông thường.",
        "Tất cả các câu trên đều đúng."
      ],
      answer: 3,
      explain: "Máy tính xách tay (laptop) bao gồm đầy đủ tính năng cá nhân, thiết kế nhỏ nhẹ và di động."
    },
    {
      q: "Loa (Speaker) là:",
      options: [
        "Thiết bị dùng để phát ra âm thanh phục vụ nhu cầu của người sử dụng máy tính.",
        "Thiết bị thường được kết nối với máy tính thông qua ngõ xuất audio của card âm thanh trên máy tính.",
        "Thiết bị thường được kết nối với máy tính thông qua cổng COM",
        "Cả đáp án 1 và đáp án 2 đều đúng."
      ],
      answer: 3,
      explain: "Loa là thiết bị xuất âm thanh, kết nối qua cổng audio/card âm thanh của máy tính."
    },
    {
      q: "Độ phân giải (Resolution) trên màn hình thể hiện?",
      options: [
        "Mức sáng mà màn hình có thể hiển thị.",
        "Số điểm sáng mà màn hình có thể hiển thị.",
        "Kích thước màn hình",
        "Tất cả phương án trên"
      ],
      answer: 1,
      explain: "Độ phân giải thể hiện số điểm ảnh (pixel/điểm sáng) hiển thị trên màn hình theo chiều rộng và chiều cao."
    },
    {
      q: "Ở tình huống nào dưới đây máy tính thực thi công việc tốt hơn con người?",
      options: [
        "Khi dịch một cuốn sách.",
        "Khi chẩn đoán bệnh.",
        "Khi phân tích tâm lý một con người.",
        "Khi thực hiện một phép toán phức tạp."
      ],
      answer: 3,
      explain: "Máy tính vượt trội con người ở khả năng tính toán các phép toán phức tạp với tốc độ cực nhanh và chính xác."
    },
    {
      q: "Bạn lắp đặt một bộ xử lý mới có tốc độ cao hơn vào máy của bạn. Điều này có thể có kết quả gì?",
      options: [
        "Máy tính của bạn sẽ chạy nhanh hơn.",
        "ROM (Read Only Memory) sẽ có dung lượng lớn hơn.",
        "RAM (Random Access Memory) sẽ có dung lượng lớn hơn.",
        "Đĩa cứng máy sẽ lưu dữ liệu nhiều hơn."
      ],
      answer: 0,
      explain: "Thay thế CPU tốc độ cao hơn làm tăng khả năng xử lý lệnh, giúp máy chạy nhanh hơn."
    },
    {
      q: "Chữ viết tắt MB thường gặp trong các tài liệu về máy tính có ý nghĩa gì?",
      options: [
        "Là đơn vị đo độ phân giải màn hình.",
        "Là đơn vị đo cường độ âm thanh.",
        "Là đơn vị đo tốc độ xử lý.",
        "Là đơn vị đo dung lượng lưu trữ thông tin."
      ],
      answer: 3,
      explain: "MB (Megabyte) là đơn vị đo dung lượng bộ nhớ/lưu trữ dữ liệu."
    },
    {
      q: "Bộ nhớ truy cập trực tiếp RAM được viết tắt từ",
      options: [
        "Read Access Memory.",
        "Real Access Memory.",
        "Rewrite Access Memory.",
        "Random Access Memory."
      ],
      answer: 3,
      explain: "RAM viết tắt của cụm từ Random Access Memory."
    },
    {
      q: "Trong các cổng sau cổng nào dùng để cắm trực tiếp vào bàn phím:",
      options: [
        "Cổng PS/2, USB.",
        "Cổng VGA, LPT.",
        "Cổng HDMI, VGA",
        "Cổng RJ45, VGA."
      ],
      answer: 0,
      explain: "Bàn phím thường dùng chuẩn kết nối qua cổng PS/2 (cũ) hoặc USB (phổ biến)."
    },
    {
      q: "Thuật ngữ Home Page dùng để chỉ:",
      options: [
        "Địa chỉ của một Website",
        "Trang chủ của một website",
        "Một trang Web",
        "Một mục chính trên trang web"
      ],
      answer: 1,
      explain: "Home Page chính là trang chủ (trang hiển thị đầu tiên khi truy cập một website)."
    },
    {
      q: "Giả sử ta có địa chỉ Email: Tom_jerry@yahoo.com, theo Anh/chị trên Internet có",
      options: [
        "02 địa chỉ Email giống địa chỉ trên",
        "Không có địa chỉ Email nào trùng với địa chỉ Email trên",
        "03 địa chỉ Email giống địa chỉ trên",
        "Trên 03 địa chỉ Email giống địa chỉ trên"
      ],
      answer: 1,
      explain: "Địa chỉ email trên toàn bộ mạng Internet là duy nhất, không thể trùng lặp."
    },
    {
      q: "Đâu là ngôn ngữ tạo ra trang Web?",
      options: [
        "HTTP",
        "FTP",
        "HTML",
        "WWW"
      ],
      answer: 2,
      explain: "HTML (HyperText Markup Language) là ngôn ngữ đánh dấu siêu văn bản dùng để tạo cấu trúc trang web."
    },
    {
      q: "Để sử dụng Email, người dùng cần",
      options: [
        "Đăng ký một tài khoản với nhà cung cấp dịch vụ Email.",
        "Đăng ký một tài khoản trên Internet.",
        "Không cần phải đăng ký một tài khoản với nhà cung cấp dịch vụ Email.",
        "Chỉ cần kết nối Internet"
      ],
      answer: 0,
      explain: "Muốn gửi/nhận thư điện tử, người dùng bắt buộc phải đăng ký tài khoản email."
    },
    {
      q: "Trên một mạng máy tính tại một thời điểm mỗi máy tính có:",
      options: [
        "02 địa chỉ IP",
        "Nhiều hơn 02 địa chỉ IP",
        "Duy nhất 01 địa chỉ IP",
        "Nhiều địa chỉ IP"
      ],
      answer: 2,
      explain: "Mỗi thiết bị trong mạng tại một thời điểm xác định chỉ mang duy nhất 01 địa chỉ IP để tránh xung đột."
    },
    {
      q: "Phần mềm nào dưới đây không phải là một trình duyệt web:",
      options: [
        "Fire Fox",
        "Opera",
        "Google Groups",
        "Safari"
      ],
      answer: 2,
      explain: "Google Groups là dịch vụ thảo luận nhóm trực tuyến của Google, không phải trình duyệt web."
    },
    {
      q: "Người dùng có thể nhìn thấy những thông tin trên một Blog?",
      options: [
        "Không thể nhìn thấy được",
        "Phụ thuộc vào người xây dựng Blog cho phép hay không cho phép",
        "Có thể nhìn thấy được tất cả các thông tin",
        "Thấy một phần thông tin"
      ],
      answer: 1,
      explain: "Chủ Blog có quyền thiết lập quyền riêng tư (chỉ mình tôi, bạn bè, hoặc công khai) cho các bài viết."
    },
    {
      q: "Để quản lý lưu trữ và xử lý dữ liệu người ta thường dùng:",
      options: [
        "Các file văn bản",
        "Phần mềm Paint",
        "Các hệ quản trị cơ sở dữ liệu.",
        "Phần mềm nào cũng được"
      ],
      answer: 2,
      explain: "Hệ quản trị cơ sở dữ liệu (DBMS) là công cụ chuyên dụng để quản lý, lưu trữ và xử lý lượng lớn dữ liệu bài bản."
    },
    {
      q: "Vai trò của mạng máy tính",
      options: [
        "Dùng chung tài nguyên",
        "Chia sẻ dữ liệu",
        "Trao đổi dữ liệu dễ dàng",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Mạng máy tính mang lại các lợi ích quan trọng gồm dùng chung thiết bị/tài nguyên, chia sẻ và truyền dữ liệu."
    },
    {
      q: "Thương mại điện tử là:",
      options: [
        "Mua và bán các mặt hàng điện tử.",
        "Dùng các thiết bị điện tử trong khi mua hàng.",
        "Thao tác mua, bán hàng sử dụng các ứng dụng trên mạng máy tính Internet.",
        "Bán các mặt hàng điện tử trên mạng."
      ],
      answer: 2,
      explain: "Thương mại điện tử (E-commerce) là việc thực hiện các giao dịch mua bán hàng hóa/dịch vụ qua mạng Internet."
    },
    {
      q: "Ngân hàng điện tử (e-banking) là ngân hàng:",
      options: [
        "Cung cấp dịch vụ truy vấn thông tin tài khoản và thực hiện các giao dịch chuyển khoản, thanh toán qua mạng Internet.",
        "Cho phép khách hàng thực hiện giao dịch trực tuyến mà không cần đi đến Ngân hàng.",
        "Cung cấp sản phẩm và dịch vụ thanh toán điện tử như tiền điện tử.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "E-banking bao gồm toàn bộ các dịch vụ thanh toán, chuyển khoản, quản lý tài khoản trực tuyến từ xa."
    },
    {
      q: "Trong hệ thống E-Learning, đối tượng nào sau đây đóng vai trò trung tâm:",
      options: [
        "Người thầy.",
        "Người học.",
        "Hệ thống E-learning.",
        "Phòng đào tạo."
      ],
      answer: 1,
      explain: "Mô hình giáo dục hiện đại và E-learning lấy người học làm trung tâm."
    },
    {
      q: "Phát biểu nào dưới đây không chính xác khi nói về giáo dục trực tuyến E-learning ?",
      options: [
        "Hệ thống E-learning dựa trên công nghệ thông tin và truyền thông.",
        "E-learning làm hạn chế phát triển tư duy của người học.",
        "E-learning là xu thế tất yếu trong nền kinh tế tri thức.",
        "E-learning được hiểu là quá trình học thông qua các phương tiện điện tử."
      ],
      answer: 1,
      explain: "E-learning hỗ trợ người học chủ động nghiên cứu và phát triển tư duy, phát biểu cho rằng E-learning làm hạn chế tư duy là không chính xác."
    },
    {
      q: "Trong các yếu tố sau hãy chỉ ra một yếu tố không phải lợi ích của thương mại điện tử?",
      options: [
        "Giảm chi phí, tăng lợi nhuận.",
        "Dịch vụ khách hàng tốt hơn.",
        "Giao dịch an toàn hơn.",
        "Tăng thêm cơ hội mua bán."
      ],
      answer: 2,
      explain: "Thương mại điện tử luôn tiềm ẩn rủi ro về an toàn thông tin, bảo mật tài khoản/thẻ trực tuyến nên giao dịch an toàn hơn không đương nhiên là ưu điểm tuyệt đối."
    },
    {
      q: "Ưu điểm của hội nghị trực tuyến (teleconference) là:",
      options: [
        "Có thể giao tiếp với nhau dễ dàng mà không bị cản trở bởi khoảng cách địa lý.",
        "Giảm chi phí so với tổ chức hội nghị theo kiểu truyền thống.",
        "Cho phép những người tham dự ở tại nhiều địa điểm từ những quốc gia khác nhau.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Hội nghị trực tuyến giúp vượt khoảng cách địa lý, tiết kiệm thời gian, chi phí di chuyển và tổ chức."
    },
    {
      q: "Thư điện tử (e-mail) là:",
      options: [
        "Thư được phân phát bằng thiết bị điện tử.",
        "Phương thức cho phép người dùng gửi và nhận thư qua mạng internet.",
        "Thư được vận chuyển bằng xe điện tử.",
        "Thư được vận chuyển bằng máy bay."
      ],
      answer: 1,
      explain: "Email là phương thức truyền nhận văn bản/tệp tin kỹ thuật số thông qua Internet."
    },
    {
      q: "Ưu điểm của thư điện tử (e-mail) là:",
      options: [
        "Có thể gửi và nhận nhiều định dạng thông tin khác nhau.",
        "Thư điện tử được vận chuyển nhanh hơn thư truyền thống.",
        "Có thể gửi thư điện tử cho nhiều người cùng lúc.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Thư điện tử nổi bật nhờ tốc độ truyền tải tức thì, đính kèm đa phương tiện và khả năng gửi đồng thời cho nhiều người."
    },
    {
      q: "SMS là tên viết tắt của dịch vụ tin nhắn ngắn (Short Message Service) là:",
      options: [
        "Dịch vụ cho phép gửi một đoạn văn bản có chiều dài không quá 160 ký tự",
        "Dịch vụ cho phép gửi hình ảnh, âm thanh.",
        "Dịch vụ có khả năng mở rộng để không hạn chế ở 160 ký tự trong mỗi tin nhắn.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 0,
      explain: "Chuẩn tin nhắn SMS truyền thống giới hạn độ dài tối đa là 160 ký tự văn bản."
    },
    {
      q: "Nhắn tin tức thời (IM):",
      options: [
        "Cho phép nhiều người cùng trao đổi trực tuyến với nhau qua mạng.",
        "IM viết tắt của cụm từ Instant Messaging.",
        "Facebook, Skype, Viber đều có hỗ trợ tin nhắn tức thời.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Instant Messaging (IM) cho phép trò chuyện trực tuyến thời gian thực và được tích hợp rộng rãi trên các nền tảng MXH hiện nay."
    },
    {
      q: "Ứng dụng nào sau đây không hỗ trợ tính năng đàm thoại qua giao thức Internet (VoIP – Voice over IP)",
      options: [
        "Viber.",
        "Skype.",
        "Microsoft Outlook",
        "Zalo."
      ],
      answer: 2,
      explain: "Microsoft Outlook là ứng dụng quản lý Email và lịch làm việc, không tích hợp tính năng gọi thoại VoIP trực tiếp như Viber, Skype hay Zalo."
    },
    {
      q: "Mạng xã hội (Social Network) là:",
      options: [
        "Là dịch vụ được sử dụng để nối kết các thành viên trên Internet lại với nhau với nhiều mục đích khác nhau không phân biệt không gian và thời gian.",
        "Mạng có những tính năng như: chat, e-mail, phim ảnh, voice chat, chia sẻ file, blog và xã luận.",
        "Mạng đổi mới hoàn toàn cách cư dân mạng kết bạn với nhau.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Mạng xã hội kết nối cộng đồng không giới hạn vị trí, hỗ trợ đa dạng phương thức tương tác và chia sẻ thông tin."
    },
    {
      q: "Diễn đàn là:",
      options: [
        "Nơi cho phép người dùng thảo luận trực tuyến bất cứ đề tài nào.",
        "Nơi mà ở đó nội dung thảo luận có thể phân loại thành các chuyên mục.",
        "Là nơi dễ dàng đăng các bài viết cá nhân để người dùng khác đọc và thảo luận.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Diễn đàn (Forum) là không gian mạng phân chia theo chủ đề/chuyên mục cho phép thành viên đăng bài và thảo luận."
    },
    {
      q: "Cổng thông tin điện tử (Portal) là:",
      options: [
        "Là điểm truy cập tập trung, tích hợp các kênh thông tin, các dịch vụ và ứng dụng.",
        "Một hoặc một nhóm trang web mà từ đó người truy cập có thể dễ dàng tương tác với các trang web và các dịch vụ thông tin khác trên mạng máy tính.",
        "Cổng thông tin điện tử cung cấp khả năng phân loại, tìm kiếm và quản lý nội dung.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Cổng thông tin điện tử tích hợp nhiều nguồn dữ liệu, tính năng tìm kiếm và dịch vụ số phục vụ truy cập tập trung."
    },
    {
      q: "Trang tin cá nhân là:",
      options: [
        "Là tập tin chứa những thông tin của riêng cá nhân và được gửi đến những người khác bằng email.",
        "Là một trang web chứa thông tin riêng của cá nhân, ở đó chủ sở hữu có thể chia sẻ suy nghĩ của mình, làm thơ, viết văn… Chỉ có chủ sở hữu mới có thể thay đổi nội dung.",
        "Là tập tin chứa những thông tin của riêng cá nhân, lưu trữ trên máy tính và được chia sẻ cho những người khác trong mạng.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 1,
      explain: "Trang tin cá nhân (như blog/trang cá nhân) là trang web thể hiện thông tin riêng biệt do chính chủ sở hữu quản lý nội dung."
    },
    {
      q: "Trong các ứng dụng sau của Microsoft, ứng dụng nào được sử dụng để nhận và gửi thư điện tử:",
      options: [
        "Microsoft Powerpoint.",
        "Microsoft Word.",
        "Microsoft Excel.",
        "Microsoft Outlook."
      ],
      answer: 3,
      explain: "Microsoft Outlook là phần mềm quản lý thông tin cá nhân và quản lý/gửi/nhận Email của Microsoft."
    },
    {
      q: "Ưu điểm của cộng đồng trực tuyến:",
      options: [
        "Không thể vượt qua ranh giới địa lý.",
        "Vượt qua những ranh giới địa lý để theo đuổi lợi ích hay mục tiêu chung.",
        "Tính chính xác của thông tin.",
        "Không thể trao đổi thông tin tức thời."
      ],
      answer: 1,
      explain: "Cộng đồng trực tuyến giúp những người có cùng sở thích, mục tiêu liên kết với nhau mà không bị giới hạn bởi khoảng cách địa lý."
    },
    {
      q: "Bạn nhận được một bức thư điện tử đính kèm tệp tin lạ, bạn sẽ xử lý thế nào trong tình huống này để đảm bảo an toàn?",
      options: [
        "Mở tệp tin này ra để kiểm tra loại tệp tin.",
        "Chuyển thư này cho ai đó mà bạn nghĩ rằng có thể nhận biết được.",
        "Quét tệp tin này bằng chương trình chống virus.",
        "Lưu bản sao tệp tin này vào đĩa cứng rồi mở bản sao này."
      ],
      answer: 2,
      explain: "Khi có tệp đính kèm lạ từ email, việc cần làm trước tiên để đảm bảo an toàn là dùng phần mềm diệt virus quét tệp tin."
    },
    {
      q: "Khi nói về ưu điểm của làm việc từ xa (Tele-working), ý nào sau đây không đúng?",
      options: [
        "Giảm thời gian đi lại.",
        "Tập trung vào công việc cao hơn.",
        "Tăng cường sự liên hệ trực tiếp.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 2,
      explain: "Làm việc từ xa làm giảm các giao tiếp, gặp gỡ trực tiếp (face-to-face) chứ không làm tăng cường sự liên hệ trực tiếp."
    },
    {
    q: "Lợi thế của mua hàng trực tuyến so với mua hàng truyền thống ở cửa hàng là gì?",
    options: [
      "Việc thanh toán đảm bảo an ninh hơn.",
      "Việc xác định tình trạng của hàng hóa dễ dàng hơn.",
      "Có thể mua hàng mọi lúc, mọi nơi.",
      "Hàng hóa đã mua dễ trả lại hơn."
    ],
    answer: 2,
    explain: "Mua hàng trực tuyến giúp người dùng có thể mua hàng mọi lúc, mọi nơi thông qua kết nối Internet."
  },
  {
    q: "Đâu là viết tắt của cụm từ: \"công nghệ thông tin và truyền thông\"?",
    options: [
      "ICT",
      "CTI",
      "CIT",
      "TCI"
    ],
    answer: 0,
    explain: "ICT đại diện cho Information and Communication Technology (Công nghệ thông tin và truyền thông)."
  },
  {
    q: "Tái chế các bộ phận của máy tính, pin, hộp mực in hỏng có tác dụng:",
    options: [
      "Gây ô nhiễm môi trường.",
      "Tiết kiệm chi phí và bảo vệ môi trường.",
      "Tìm ra những thiết bị có thể sử dụng lại.",
      "Tất cả các phương án trên đều sai."
    ],
    answer: 1,
    explain: "Việc tái chế giúp giảm lượng rác thải điện tử, bảo vệ môi trường và tiết kiệm tài nguyên."
  },
  {
    q: "Để tiết kiệm năng lượng cho máy tính khi không sử dụng ta nên:",
    options: [
      "Đặt chế độ tự động ngủ (sleep).",
      "Đặt chế độ tự động tắt máy (shutdown).",
      "Đặt chế độ tự động ngủ đông (hibernate).",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Tất cả các chế độ trên đều giúp giảm bớt hoặc ngắt hoàn toàn mức tiêu thụ năng lượng khi không làm việc."
  },
  {
    q: "Phải làm gì để bảo vệ thính giác khi sử dụng tai nghe:",
    options: [
      "Mở volume hết cỡ.",
      "Mở volume vừa phải.",
      "Mở volume thật nhỏ.",
      "Cả phương án 1 và phương án 3."
    ],
    answer: 1,
    explain: "Mở âm lượng ở mức vừa phải giúp tránh gây tổn thương thính giác khi đeo tai nghe."
  },
  {
    q: "Khi chọn vị trí đặt máy tính ta nên:",
    options: [
      "Vị trí phản chiếu với ánh sáng lên màn hình.",
      "Vị trí nơi có đèn chiếu trực tiếp vào màn hình.",
      "Điều chỉnh ánh sáng trong phòng để tránh phản chiếu lên màn hình.",
      "Tất cả các phương án trên đều đúng"
    ],
    answer: 2,
    explain: "Tránh ánh sáng chiếu trực tiếp/phản chiếu vào màn hình để không làm mỏi mắt."
  },
  {
    q: "Để bảo vệ môi trường mọi người nên:",
    options: [
      "Vứt bỏ các thiết bị cũ khi không sử dụng.",
      "Chôn các thiết bị.",
      "Tái chế sử dụng.",
      "Tất cả các phương án trên đều đúng"
    ],
    answer: 2,
    explain: "Tái chế và tái sử dụng giúp hạn chế rác thải điện tử có hại."
  },
  {
    q: "Theo các nghiên cứu thời gian ngồi liên tục trên máy tính bao lâu là hợp lý?",
    options: [
      "4 giờ.",
      "Không quá 3 giờ.",
      "Ngồi tùy thích.",
      "5 giờ."
    ],
    answer: 1,
    explain: "Nên giới hạn thời gian làm việc liên tục không quá 3 giờ và nên có quãng nghỉ giải lao ngắn."
  },
  {
    q: "Cách bảo vệ mắt trước màn hình máy tính?",
    options: [
      "Chớp mắt thường xuyên, không nên nhìn quá lâu vào màn hình.",
      "Cho mắt thời gian nghỉ 10 - 15 phút giữa mỗi giờ làm việc bằng máy tính.",
      "Điều chỉnh độ sáng màn hình phù hợp.",
      "Tất cả các phương án trên đều đúng"
    ],
    answer: 3,
    explain: "Áp dụng tổng hợp tất cả các biện pháp trên để giữ cho mắt luôn được thư giãn."
  },
  {
    q: "Tác hại của bức xạ máy tính là gì?",
    options: [
      "Làm lão hóa da bề mặt",
      "Làm khô da, đỏ da.",
      "Làm da đổ nhờn nhiều, lỗ chân lông lớn.",
      "Tất cả các phương án trên đều đúng"
    ],
    answer: 3,
    explain: "Bức xạ máy tính gây ra nhiều tác động tiêu cực tới làn da như khô da, tăng tiết dầu và lão hóa."
  },
  {
    q: "Độ mạnh mật khẩu là:",
    options: [
      "Một thuật ngữ để chỉ mức độ khó khăn trong việc khám phá ra một mật khẩu nào đó.",
      "Một thuật ngữ để chỉ độ dài của mật khẩu.",
      "Một thuật ngữ để chỉ tốc độ đăng nhập vào hệ thống khi dùng mật khẩu nào đó.",
      "Thời gian tối đa khi sử dụng mật khẩu."
    ],
    answer: 0,
    explain: "Độ mạnh mật khẩu đo lường độ an toàn và khả năng chống lại các cuộc tấn công dò mật khẩu."
  },
  {
    q: "Để nâng cao an toàn cho tài khoản ta cần:",
    options: [
      "Đặt mật khẩu đủ độ mạnh, thay đổi mật khẩu theo định kỳ.",
      "Không nên sử dụng tài khoản ở nơi công cộng hay máy tính sử dụng chung nếu không thực sự cần thiết.",
      "Không nên sử dụng một mật khẩu cho nhiều tài khoản khác nhau.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Đây đều là các thói quen tốt giúp bảo vệ an toàn cho tài khoản cá nhân."
  },
  {
    q: "Theo quy định chung khi đặt mật khẩu đăng nhập vào hệ thống thì mật khẩu nào sau đây là mạnh nhất?",
    options: [
      "secret1234",
      "1212121212",
      "*SeCret10$",
      "nopassword"
    ],
    answer: 2,
    explain: "Mật khẩu '*SeCret10$' mạnh nhất vì chứa chữ hoa, chữ thường, chữ số và ký tự đặc biệt."
  },
  {
    q: "Để nâng cao an toàn khi giao dịch trực tuyến ta cần:",
    options: [
      "Hạn chế gửi thông tin cá nhân.",
      "Cảnh giác với người lạ, thư giả mạo.",
      "Không để lộ hồ sơ cá nhân.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Cần chú ý kết hợp các yếu tố bảo mật để tránh rơi vào bẫy lừa đảo trực tuyến."
  },
  {
    q: "Khi một máy tính không sử dụng bất kỳ tường lửa (Firewall) nào thì hệ thống sẽ không:",
    options: [
      "Phát hiện và ngăn chặn các cuộc tấn công từ bên ngoài.",
      "Vô hiệu hóa các dịch vụ truy cập ra bên ngoài.",
      "Lọc các gói tin dựa vào địa chỉ nguồn, địa chỉ đích và số Port (cổng), giao thức mạng.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Tường lửa đảm nhận cả việc phát hiện tấn công, lọc gói tin và kiểm soát truy cập."
  },
  {
    q: "Để ngăn chặn trộm cắp dữ liệu ta có thể thực hiện:",
    options: [
      "Khóa máy tính và phương tiện lưu trữ khi rời nơi làm việc.",
      "Mã hóa dữ liệu.",
      "Hạn chế sao chép cho người khác.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Kết hợp khóa thiết bị, mã hóa thông tin và hạn chế sao chép giúp bảo vệ dữ liệu hiệu quả."
  },
  {
    q: "Trong các phát biểu sau, phát biểu nào sai khi nói về hình thức lây nhiễm của virus máy tính?",
    options: [
      "Lây nhiễm thông qua việc truy cập các trang web đã được cài đặt virus.",
      "Lây nhiễm khi đặt hai máy tính quá gần nhau.",
      "Lây nhiễm thông qua các file tài liệu, phần mềm bị nhiễm virus.",
      "Lây nhiễm qua thư điện tử có chứa mã độc virus."
    ],
    answer: 1,
    explain: "Virus không thể lây nhiễm chỉ bằng việc đặt hai máy tính vật lý gần nhau mà không có kết nối hay trao đổi dữ liệu."
  },
  {
    q: "Trong các phát biểu sau, phát biểu nào sai khi nói về Spyware (phần mềm gián điệp)?",
    options: [
      "Spyware là thuật ngữ thường dùng để chỉ các ứng dụng tự ý thu thập thông tin người dùng, thay đổi cấu hình máy tính, thậm chí cướp quyền điều khiển thiết bị...",
      "Spyware thực hiện các hành vi một cách lén lút, bí mật, không được sự cho phép của chủ sở hữu.",
      "Spyware có khả năng thu thập các thông tin của người dùng như: địa chỉ thư điện tử, mật khẩu hay thông tin thẻ tín dụng để gửi về cho chủ nhân của nó qua mạng.",
      "Cập nhật hệ điều hành là cách để diệt hết tất cả các Spyware trên máy tính."
    ],
    answer: 3,
    explain: "Cập nhật hệ điều hành chỉ giúp vá các lỗ hổng an ninh chứ không thể tự động diệt sạch hoàn toàn mọi Spyware đã bị nhiễm."
  },
  {
    q: "Phát biểu nào sau đây đúng khi nói về phần mềm diệt Virus:",
    options: [
      "Diệt tất cả các loại virus có trên máy tính.",
      "Diệt các loại Virus thông thường.",
      "Tự nhân bản.",
      "Phát hiện và diệt các loại Virus được mô tả và nhận dạng được bằng phần mềm đó."
    ],
    answer: 3,
    explain: "Phần mềm diệt virus chỉ diệt được các loại virus dựa trên mẫu nhận dạng (signature) đã được cập nhật."
  },
  {
    q: "Cách phòng chống phần mềm độc hại:",
    options: [
      "Sử dụng chương trình diệt virus và cập nhật thường xuyên.",
      "Hạn chế sử dụng các phương tiện lưu trữ di động.",
      "Sử dụng phần mềm an ninh mạng.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Áp dụng đồng bộ các giải pháp công nghệ và ý thức sử dụng giúp nâng cao an toàn trước phần mềm độc hại."
  },
  {
    q: "Virus máy tính thực chất là?",
    options: [
      "Một loại vi sinh vật sống ký sinh trên các thiết bị vật lý của máy tính.",
      "Một kháng thể tồn tại bên ngoài không khí.",
      "Là các chương trình máy tính do con người tạo ra, có khả năng lây lan trong hệ thống máy tính.",
      "Một thiết bị phần cứng của máy tính."
    ],
    answer: 2,
    explain: "Virus máy tính là một đoạn mã hoặc chương trình phần mềm do con người viết ra nhằm mục đích tự nhân bản và gây hại."
  },
  {
    q: "Mật khẩu mạnh là mật khẩu",
    options: [
      "Chỉ có các kí tự số từ 0-9",
      "Có ít kí tự và dễ nhớ",
      "Phổ biến và có nhiều người biết",
      "Đủ dài, mang tính ngẫu nhiên, xen lẫn chữ cái, chữ số và kí tự đặc biệt."
    ],
    answer: 3,
    explain: "Mật khẩu mạnh cần phối hợp ký tự hoa, thường, số, ký tự đặc biệt và có độ dài hợp lý."
  },
  {
    q: "Mật khẩu nào sau đây là mật khẩu yếu nhất",
    options: [
      "Dfdfgd_343556",
      "123456cvxdfS",
      "123456",
      "Lkj126553"
    ],
    answer: 2,
    explain: "'123456' là chuỗi số liên tiếp rất ngắn, cực kỳ phổ biến và rất dễ bị bẻ khóa."
  },
  {
    q: "Điều gì mà tất cả các virus máy tính có thể thực hiện?",
    options: [
      "Lây nhiễm vào BOOT RECORD",
      "Phá hủy CMOS",
      "Xóa các tệp chương trình trên máy tính",
      "Tự nhân bản"
    ],
    answer: 3,
    explain: "Đặc tính chung căn bản nhất của mọi virus máy tính là khả năng tự nhân bản."
  },
  {
    q: "Adware là gì?",
    options: [
      "Là phần mềm gõ tiếng Việt.",
      "Chỉ một bộ phận trong phần cứng máy tính",
      "Là phần mềm diệt virus",
      "Là phần mềm độc hại, mục tiêu chủ yếu là quảng cáo."
    ],
    answer: 3,
    explain: "Adware (Advertising-supported software) là phần mềm chuyên hiển thị hoặc tải quảng cáo tự động."
  },
  {
    q: "Phần mềm nào sau đây không phải là phần mềm diệt virút",
    options: [
      "Bkav",
      "Kaspersky",
      "Google Chrome",
      "Avira"
    ],
    answer: 2,
    explain: "Google Chrome là một trình duyệt web, không phải là ứng dụng diệt virus."
  },
  {
    q: "Mục đích của phần mềm độc hại là",
    options: [
      "Làm cho máy tính hoạt động tốt hơn",
      "Đánh cắp, làm hư hỏng và xóa dữ liệu của máy tính",
      "Làm cho dữ liệu của máy tính an toàn",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 1,
    explain: "Phần mềm độc hại (Malware) được thiết kế nhằm mục đích gây hại, phá hoại hoặc lấy cắp dữ liệu."
  },
  {
    q: "Lợi ích của việc sao lưu dữ liệu dự phòng tại những nơi lưu trữ khác nhau:",
    options: [
      "Tránh đánh cấp thông tin.",
      "Dễ dàng lấy lại dữ liệu khi hỏng hoặc mất thiết bị lưu trữ.",
      "Giúp máy tính chạy nhanh hơn.",
      "Máy tính khởi động an toàn hơn."
    ],
    answer: 1,
    explain: "Sao lưu (Backup) giúp khôi phục lại dữ liệu gốc trong trường hợp gặp sự cố hỏng hóc hoặc thất lạc."
  },
  {
    q: "Bản quyền (copyright):",
    options: [
      "Là quyền của một tác giả cho tác phẩm của họ.",
      "Được dùng để bảo vệ các sáng tạo tinh thần có tính chất văn hóa (cũng còn được gọi là tác phẩm) không vi phạm bản quyền.",
      "Dùng để bảo vệ các quyền lợi cá nhân và lợi ích kinh tế của tác giả liên quan với tác phẩm này.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Bản quyền bao gồm tổng thể quyền tác giả, bảo vệ cả khía cạnh tinh thần lẫn kinh tế cho tác phẩm."
  },
  {
    q: "Bản quyền phần mềm là:",
    options: [
      "Quyền năng của phần mềm máy tính.",
      "Quyền của tác giả đối với chương trình máy tính. (Theo điều 22 của luật sở hữu trí tuệ 2005).",
      "Quyền sử dụng của người sử dụng đối với phần mềm.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 1,
    explain: "Luật Sở hữu trí tuệ quy định bản quyền phần mềm là quyền cá nhân/tổ chức sáng tạo ra chương trình máy tính đó."
  },
  {
    q: "Tại sao cần phải tôn trọng bản quyền:",
    options: [
      "Vì vi phạm bản quyền là hành vi phạm pháp luật.",
      "Người vi phạm bản quyền sẽ bị xử theo luật xâm phạm quyền tác giả.",
      "Vì vi phạm bản quyền là xâm phạm vào lợi ích riêng của chủ sở hữu.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Tôn trọng bản quyền thể hiện sự tuân thủ pháp luật cũng như đạo đức kinh doanh và sáng tạo."
  },
  {
    q: "Mã (ID) sản phẩm phần mềm là gì?",
    options: [
      "Là giấy phép sử dụng phần mềm.",
      "Là giá trị được sử dụng để đăng nhập vào phần mềm.",
      "Là giá trị duy nhất cho mỗi phần mềm được cài đặt trên máy tính, được sử dụng để đăng ký giấy phép sử dụng phần mềm.",
      "Tất cả các phương án trên đều sai."
    ],
    answer: 2,
    explain: "Product ID là mã nhận dạng duy nhất ứng với mỗi bản cài đặt để xác thực bản quyền phần mềm."
  },
  {
    q: "Thông tin nào sau đây cho biết phần mềm đang sử dụng phiên bản dùng thử chưa có giấy phép (license) sử dụng?",
    options: [
      "Registered to: Trial version.",
      "Product Activated.",
      "This product is licensed to: Registered version.",
      "Registered to: Lanmy."
    ],
    answer: 0,
    explain: "'Trial version' chỉ ra rằng phần mềm đang hoạt động ở chế độ dùng thử."
  },
  {
    q: "Để có giấy phép (license) sử dụng phần mềm ta cần:",
    options: [
      "Tìm giấy phép sử dụng trên trang tìm kiếm Google.",
      "Sử dụng các phần mềm sinh giấy phép sử dụng trên Internet.",
      "Liên hệ với chủ sở hữu hoặc đại diện của chủ sở hữu phần mềm để đăng ký sử dụng.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 2,
    explain: "Để có bản quyền hợp pháp, người dùng cần mua hoặc đăng ký trực tiếp từ nhà phát hành hoặc đại lý chính thức."
  },
  {
    q: "Phần mềm dùng chung (Shareware):",
    options: [
      "Là phần mềm hoàn toàn miễn phí và tự do chia sẻ cho người khác sử dụng.",
      "Là loại phần mềm mà người dùng được chia sẻ dùng thử trong một thời gian, khi hết thời gian dùng thử mà muốn dùng tiếp thì phải trả tiền để mua bản quyền.",
      "Là phần mềm mã nguồn mở.",
      "Là phần mềm mà tác giả không xác lập bản quyền."
    ],
    answer: 1,
    explain: "Shareware cho phép người dùng trải nghiệm miễn phí trong khoảng thời gian nhất định trước khi mua bản quyền chính thức."
  },
  {
    q: "Phần mềm miễn phí (Freeware):",
    options: [
      "Là phần mềm mà người sử dụng không cần phải trả chi phí.",
      "Là phần mềm mà người dùng phải trả phí trước khi sử dụng.",
      "Là phần mềm mà người dùng trả phí rất thấp.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 0,
    explain: "Freeware là loại phần mềm được nhà phát triển cung cấp hoàn toàn không thu phí người dùng."
  },
  {
    q: "Phát biểu về Dữ liệu nào sau đây là đúng nhất?",
    options: [
      "Tất cả những gì con người có thể nhìn thấy bằng mắt thường.",
      "Thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự.",
      "Các tài liệu liên quan đến Tin học.",
      "Tất cả các phương án trên đều sai."
    ],
    answer: 1,
    explain: "Dữ liệu là các thông tin đã được mã hóa dưới dạng ký hiệu, chữ viết, âm thanh, hình ảnh..."
  },
  {
    q: "Tại sao phải bảo vệ dữ liệu?",
    options: [
      "Vì dữ liệu ngày càng dễ bị đánh cắp do việc thu thập, lưu trữ và phân tích dữ liệu ngày càng đơn giản hơn.",
      "Vì các công nghệ, kỹ thuật như Internet, thư điện tử, điện thoại di động, giám sát và các phương pháp thanh toán điện tử tạo nên những khả năng mới để thu thập dữ liệu trái phép.",
      "Kẻ xấu thường có ý đồ khai thác, đánh cắp thông tin cá nhân, dữ liệu các tổ chức, doanh nghiệp để vụ lợi.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Bảo vệ dữ liệu là nhiệm vụ cấp thiết do tác động tổng hợp của các rủi ro kỹ thuật và nguy cơ bảo mật."
  },
  {
    q: "Tổ chức sở hữu trí tuệ thế giới viết tắt là gì?",
    options: [
      "WTO",
      "WHO",
      "WIPO",
      "UNICEF"
    ],
    answer: 2,
    explain: "WIPO viết tắt từ World Intellectual Property Organization (Tổ chức Sở hữu Trí tuệ Thế giới)."
  },
  {
    q: "Phần mềm nào sau đây là phần mềm dùng chung (shareware):",
    options: [
      "UniKey",
      "IDM (Internet Download Manager)",
      "Trình duyệt Cốc Cốc",
      "Google Chrome"
    ],
    answer: 1,
    explain: "IDM cung cấp 30 ngày dùng thử miễn phí, sau đó bắt buộc người dùng mua bản quyền."
  },
  {
    q: "Phần mềm nào sau đây là phần mềm miễn phí (freeware):",
    options: [
      "UniKey",
      "Microsoft Office",
      "Adobe Photoshop",
      "Bkav Pro"
    ],
    answer: 0,
    explain: "UniKey là công cụ gõ tiếng Việt hoàn toàn miễn phí."
  },
  {
    q: "Để dữ liệu máy tính được an toàn, không nên làm gì?",
    options: [
      "Đặt mật khẩu cho dữ liệu.",
      "Giấu dữ liệu bằng cách ẩn đi.",
      "Chia sẻ dữ liệu trong hệ thống mạng",
      "Mã hóa dữ liệu"
    ],
    answer: 2,
    explain: "Chia sẻ rộng rãi dữ liệu trong mạng mà không phân quyền sẽ làm gia tăng nguy cơ rò rỉ và mất an toàn thông tin."
  },
  {
    q: "Phần mềm ngăn chặn hành vi có khả năng:",
    options: [
      "Theo dõi các hành vi trong thời gian thực của hệ thống.",
      "Phát hiện code có hại trước khi chúng thực hiện.",
      "Theo dõi các tham số của hệ thống.",
      "Tất cả các phương án trên đều đúng."
    ],
    answer: 3,
    explain: "Hệ thống ngăn chặn hành vi (Behavioral blocking/HIPS) hoạt động giám sát đa chiều để phát hiện hành vi bất thường."
  }
    ]
  },

  module2: {
    title: "Module 2: SỬ DỤNG MÁY TÍNH CƠ BẢN",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 2.",
    questions: [
     {
      q: "Tên tài khoản người dùng (username):",
      options: [
        "Là một dãy ký tự bất kỳ và thường không quy định độ dài và cách đặt tên.",
        "Dãy ký tự để phân biệt các người dùng trên hệ thống, mỗi người dùng phải có tên tài khoản không trùng với tên tài khoản người dùng khác.",
        "Trên cùng một hệ thống có thể tồn tại hai tên tài khoản người dùng giống nhau.",
        "Tất cả các phương án trên đều sai."
      ],
      answer: 1,
      explain: "Tên tài khoản phải là duy nhất trên cùng một hệ thống để nhận diện chính xác từng người dùng."
    },
    {
      q: "Mật khẩu (password):",
      options: [
        "Trên cùng một hệ thống không được tồn tại hai mật khẩu giống nhau.",
        "Không được sử dụng ký tự đặc biệt.",
        "Là dãy ký tự thường do người dùng đưa ra để dùng đăng nhập hệ thống và tuân thủ theo quy định của hệ thống.",
        "Không được sử dụng khoảng trắng."
      ],
      answer: 2,
      explain: "Mật khẩu do người dùng tự đặt nhằm mục đích xác thực đăng nhập và cần đáp ứng chính sách bảo mật của hệ thống."
    },
    {
      q: "Virus tin học có thể lây lan bằng cách nào?",
      options: [
        "Thông qua người dùng khi sử dụng máy tính với bàn tay ẩm ướt.",
        "Thông qua hệ thống điện khi sử dụng nhiều máy tính cùng một lúc.",
        "Thông qua môi trường không khí khi đặt những máy tính quá gần nhau",
        "Thông qua các file bị nhiễm virus tải về từ Internet, từ usb hay các máy tính khác."
      ],
      answer: 3,
      explain: "Virus chỉ lây lan qua việc truyền dẫn và thực thi các tệp tin/dữ liệu bị nhiễm mã độc."
    },
    {
      q: "Dùng phần mềm diệt virus có tác dụng gì?",
      options: [
        "Hạn chế rủi ro do virus gây ra.",
        "Dữ liệu sẽ không bị phá hỏng hay đánh cắp.",
        "Dữ liệu được bảo vệ tuyệt đối.",
        "Hệ điều hành không bị virus kiểm soát."
      ],
      answer: 0,
      explain: "Phần mềm diệt virus giúp phát hiện và ngăn chặn nguy cơ, giảm thiểu tối đa rủi ro từ mã độc."
    },
    {
      q: "Nên cập nhật phần mềm diệt virus theo cách nào sau đây là hợp lý?",
      options: [
        "Nên cập nhật thường xuyên để máy tính được bảo vệ tốt hơn.",
        "Không cần thiết phải cập nhật.",
        "Cập nhật thường xuyên khi máy tính đã bị nhiễm virus.",
        "Chỉ nên cập nhật một lần ngay khi cài đặt."
      ],
      answer: 0,
      explain: "Cập nhật dữ liệu mẫu virus thường xuyên giúp phần mềm nhận diện được các loại mã độc mới nhất."
    },
    {
      q: "Trong các dịch vụ sau, dịch vụ nào không phải là dịch vụ cho phép người dùng lưu trữ tệp tin trực tuyến:",
      options: [
        "OneDrive.",
        "Apple ID.",
        "Google Drive.",
        "Dropbox."
      ],
      answer: 1,
      explain: "Apple ID là tài khoản định danh người dùng của Apple, không phải dịch vụ lưu trữ đám mây (dịch vụ lưu trữ của Apple là iCloud)."
    },
    {
      q: "Trong các phát biểu sau, phát biểu nào sai khi nói về dịch vụ lưu trữ tệp tin trực tuyến:",
      options: [
        "Cho phép lưu trữ các tệp cá nhân ở cùng một nơi trên Internet.",
        "Cho phép chia sẻ tệp với những người khác và có thể truy cập tệp từ nhiều loại thiết bị có kết nối Internet.",
        "Có thể lấy lại dữ liệu đã lưu trữ một cách dễ dàng khi ổ cứng máy tính hỏng hoặc bị mất.",
        "Dịch vụ sẽ cung cấp không gian lưu trữ tệp tin trực tuyến là vô hạn."
      ],
      answer: 3,
      explain: "Các dịch vụ lưu trữ trực tuyến luôn có giới hạn dung lượng miễn phí/trả phí chứ không cung cấp dung lượng vô hạn."
    },
    {
      q: "Cách hạn chế và phòng ngừa các bệnh do sử dụng máy tính lâu dài gây ra:",
      options: [
        "Ngồi đúng tư thế, không nên ngồi máy tính liên tục trong vài giờ liền.",
        "Giữ khoảng cách từ mắt đến màn hình phù hợp, không nên điều chỉnh độ sáng màn hình quá sáng hoặc quá tối.",
        "Thư giãn bằng cách đi dạo, nghe nhạc hay ngắm cảnh xung quanh sau một khoảng thời gian làm việc liên tục hoặc khi có dấu hiệu mệt mỏi.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Kết hợp nghỉ ngơi hợp lý, điều chỉnh ánh sáng và ngồi đúng tư thế giúp bảo vệ sức khỏe khi làm việc với máy tính."
    },
    {
      q: "Để sử dụng máy tính đúng cách và hiệu quả ta cần:",
      options: [
        "Đặt máy tính ở nơi thoáng mát, không quá nóng hay quá lạnh.",
        "Vệ sinh bàn phím, chuột thường xuyên.",
        "Ngồi làm việc thẳng lưng, chọn ghế bàn phù hợp sao cho cẳng tay và đùi nằm ngang.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Đó là những lưu ý cần thiết cả về tư thế ngồi lẫn bảo quản phần cứng máy tính."
    },
    {
      q: "Sau một thời gian dài sử dụng máy tính ta không nên:",
      options: [
        "Giải lao.",
        "Tập thể dục.",
        "Ngắm cảnh.",
        "Chơi Game trên máy tính"
      ],
      answer: 3,
      explain: "Tiếp tục chơi game trên máy tính khiến mắt và hệ thần kinh không được nghỉ ngơi sau thời gian dài làm việc."
    },
    {
      q: "Trên hệ điều hành Windows 7, để hẹn giờ tắt máy sau 30 phút ta có thể dùng lệnh:",
      options: [
        "shutdown -s -t 1800",
        "shutdown -r -t 1800",
        "shutdown -l -t 1800",
        "shutdown -a 1800"
      ],
      answer: 0,
      explain: "Tham số '-s' dùng để tắt máy (shutdown) và '-t 1800' là thời gian đếm ngược (30 phút = 1800 giây)."
    },
    {
      q: "Sử dụng máy tính lâu dài thì có thể mắc một số bệnh về:",
      options: [
        "Mắt.",
        "Xương khớp.",
        "Thần kinh.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Làm việc quá lâu bên máy tính ảnh hưởng toàn diện đến thị lực, hệ vận động và hệ thần kinh."
    },
    {
      q: "Tác hại khi cho trẻ em sử dụng máy tính quá nhiều:",
      options: [
        "Tăng nguy cơ béo phì, ảnh hưởng tới xương.",
        "Tổn thương mắt khi sử dụng máy tính quá nhiều.",
        "Bị hạn chế sự phát triển tư duy, giảm khả năng giao tiếp với xã hội.",
        "Tất cả các phương án trên đều đúng"
      ],
      answer: 3,
      explain: "Sử dụng máy tính quá mức ảnh hưởng tiêu cực tới thể chất, thị lực lẫn thể chất tâm lý xã hội của trẻ."
    },
    {
      q: "Trong Windows Explorer của Windows 7 để hiển thị thông tin Type, Modified ta dùng lệnh ở View là:",
      options: [
        "Large Icon",
        "List",
        "Small Icon",
        "Details"
      ],
      answer: 3,
      explain: "Chế độ xem 'Details' hiển thị chi tiết các thuộc tính tệp như loại tệp (Type), ngày chỉnh sửa (Date modified), kích thước (Size)..."
    },
    {
      q: "Trong Windows 7 chúng ta không thể thực hiện thao tác nào dưới đây?",
      options: [
        "Nhấn chuột phải lên nút Start, chọn Search để thực hiện tìm kiếm thông tin",
        "Tìm kiếm một file nào đó theo ràng buộc về mặt kích thước của file (Size).",
        "Nhấn chuột phải lên Taskbar để thực hiện khóa cố định thanh Taskbar",
        "Nhấn chuột phải lên Desktop để chọn thiết lập độ phân giải của màn hình."
      ],
      answer: 0,
      explain: "Trong Windows 7, nhấp chuột phải vào nút Start không có tùy chọn Search (khung Search nằm trực tiếp khi bấm chuột trái vào Start menu)."
    },
    {
      q: "Trong Windows 7, để thay đổi, thêm bớt các biểu tượng trên desktop, ta có thể nhấn chuột phải trên nền Desktop, rồi chọn tiếp thao tác nào dưới đây?",
      options: [
        "Background / Change Desktop icons",
        "Screen / Change Desktop icons",
        "Desktop / Change Desktop icons",
        "Personalize / Change Desktop icons"
      ],
      answer: 3,
      explain: "Đường dẫn thao tác đúng là chuột phải Desktop -> Personalize -> Change desktop icons."
    },
    {
      q: "Trong Windows 7, để thiết lập ảnh nền (desktop), ta thực hiện theo những gợi ý nào dưới đây?",
      options: [
        "Nhấn chuột phải, chọn Personalize, chọn Background, chọn ảnh phù hợp trong danh sách hộp thoại.",
        "Nhấn chuột phải, chọn Display Properties, chọn Desktop, chọn ảnh phù hợp trong danh sách hộp thoại.",
        "Nhấn chuột phải, chọn Personalize, chọn Desktop Images, chọn ảnh phù hợp trong danh sách hộp thoại.",
        "Nhấn chuột phải, chọn Personalize, chọn Desktop Background, chọn ảnh phù hợp trong danh sách hộp thoại"
      ],
      answer: 3,
      explain: "Các bước chuẩn để đổi hình nền trên Win 7: chuột phải Desktop -> Personalize -> Desktop Background."
    },
    {
      q: "Trong Windows 7 để đổi tên một thư mục hay tập tin ta thực hiện:",
      options: [
        "Click chọn đối tượng/ F4/Gõ tên mới/Enter",
        "Click phải vào đối tượng / Rename/ Gõ tên mới/ Enter",
        "Click chọn đối tượng/ F3/Gõ tên mới/Enter",
        "Click phải vào đối tượng /Name/ Gõ tên mới/ Enter"
      ],
      answer: 1,
      explain: "Để đổi tên, ta bấm chuột phải chọn 'Rename' (hoặc nhấn phím F2), gõ tên mới rồi bấm Enter."
    },
    {
      q: "Trong Control Panel ( của Windows 7), muốn hiệu chỉnh ngày giờ của máy ta dùng:",
      options: [
        "Nhóm Date/Time, chọn lớp Date & Time",
        "Nhóm Display, chọn Screen Saver",
        "Nhóm Regional setting, chọn lớp Date",
        "Nhóm Regional setting chọn lớp Time"
      ],
      answer: 0,
      explain: "Trong Control Panel chọn mục Date and Time để điều chỉnh thời gian hệ thống."
    },
    {
      q: "Trong các cụm từ liệt kê dưới đây, đâu là cụm từ chỉ tên của \"thùng rác\" trong hệ điều hành Windows 7?",
      options: [
        "Recycle Bin",
        "Bin Recycle",
        "Temple Bin",
        "Directory Bin"
      ],
      answer: 0,
      explain: "Thùng rác trong hệ điều hành Windows có tên là Recycle Bin."
    },
    {
      q: "Tiện ích Windows Explorer (của Windows 7) là chương trình:",
      options: [
        "Dùng để giải nén tập tin và thư mục",
        "Dùng để quản lý các tài nguyên trên máy tính",
        "Dùng để phân tích các tập tin",
        "Dùng để xem các ổ đĩa, thư mục, file"
      ],
      answer: 3,
      explain: "Windows Explorer giúp người dùng duyệt và quản lý cấu trúc cây hệ thống gồm các ổ đĩa, thư mục và tập tin."
    },
    {
      q: "Thao tác nào có thể giúp sao chép một tập tin từ \"thùng rác\" vào một thư mục nào đó trên đĩa ( trong Windows 7)?",
      options: [
        "Vào Edit, chọn Copy",
        "Nhấn tổ hợp phím Ctrl_C",
        "Nhấn chuột phải, chọn Copy",
        "Không có thao tác nào có thể sao chép"
      ],
      answer: 3,
      explain: "Tệp tin nằm trong Recycle Bin không thể trực tiếp sao chép (Copy) ra ngoài mà phải phục hồi (Restore) hoặc kéo thả."
    },
    {
      q: "Thao tác nào cho phép thiết lập cố định vị trí của Taskbar (trong Windows 7)?",
      options: [
        "Nhấn chuột phải lên Taskbar / Manager start menu / Lock the taskbar",
        "Nhấn chuột phải lên nút Start, chọn Lock the taskbar",
        "Vào Control Panel, chọn Taskbar and Start menu / Lock",
        "Nhấn chuột phải lên Taskbar / Task Manager / Lock the taskbar"
      ],
      answer: 1,
      explain: "Lựa chọn khóa/cố định thanh tác vụ trong các đáp án đưa ra là 'Lock the taskbar'."
    },
    {
      q: "Trong Windows 7, thanh Task bar dùng để:",
      options: [
        "Hiển thị các chương trình đang chạy hiện thời.",
        "Tạo các Folders",
        "Tạo các Shortcut",
        "Tạo các cửa sổ"
      ],
      answer: 0,
      explain: "Thanh Taskbar chứa các nút biểu tượng ứng dụng đang mở/chạy trên hệ thống."
    },
    {
      q: "Windows Explorer (của Windows 7) thanh nào dùng để hiển thị thông tin về tệp tin và thư mục?",
      options: [
        "Status bar",
        "Menu bar",
        "Task bar",
        "System Tray"
      ],
      answer: 0,
      explain: "Thanh trạng thái (Status bar) ở dưới cùng cửa sổ hiển thị số lượng mục, dung lượng hoặc thuộc tính tệp được chọn."
    },
    {
      q: "Trong Windows 7, muốn tìm kiếm File hay thư mục, ta thực hiện:",
      options: [
        "File / Search",
        "Windows / Search",
        "Start / Search",
        "Tools / Search"
      ],
      answer: 2,
      explain: "Vào menu Start rồi nhập từ khóa vào ô tìm kiếm (Search)."
    },
    {
      q: "Trong Windows 7, từ Shortcut có ý nghĩa gì?",
      options: [
        "Tạo đường tắt để truy cập nhanh",
        "Xóa một đối tượng được chọn tại màn hình nền",
        "Đóng các cửa sổ đang mở",
        "Đóng ứng dụng đang thực hiện"
      ],
      answer: 0,
      explain: "Shortcut là biểu tượng đường dẫn tắt giúp khởi động nhanh ứng dụng hoặc mở nhanh tệp/thư mục."
    },
    {
      q: "Trong Windows 7, để thiết đặt lại hệ thống, lựa chọn nào sau đây là đúng.",
      options: [
        "Control Windows",
        "Control Panel",
        "Control System",
        "Control Desktop"
      ],
      answer: 1,
      explain: "Control Panel là công cụ quản lý central giúp thiết lập và cấu hình các thông số hệ thống."
    },
    {
      q: "Trong Windows 7, muốn tạo một thư mục mới, ta thực hiện thao tác:",
      options: [
        "Click chuột phải, chọn Edit / New / Folder",
        "Click chuột phải, chọn Tools / New / Folder",
        "Click chuột phải, chọn New / Folder",
        "Click chuột phải, chọn Windows / New / Folder"
      ],
      answer: 2,
      explain: "Thao tác tạo thư mục chuẩn: Nhấp chuột phải vào khoảng trống -> chọn New -> chọn Folder."
    },
    {
      q: "Trong Windows 7, các thao tác nào để di chuyển đối tượng:",
      options: [
        "Chọn các đối tượng nguồn, nhấn Ctrl+C, mở folder chứa các đối tượng muốn sao chép đến, nhấn Ctrl+X",
        "Chọn các đối tượng nguồn, nhấn Ctrl+C, mở folder chứa các đối tượng muốn sao chép đến, nhấn Ctrl+V",
        "Chọn các đối tượng nguồn, nhấn Ctrl+X, mở folder chứa các đối tượng muốn di chuyển đến, nhấn Ctrl+V",
        "Chọn các đối tượng nguồn, nhấn Ctrl+V, mở folder chứa các đối tượng muốn sao chép đến, nhấn Ctrl+X."
      ],
      answer: 2,
      explain: "Thao tác di chuyển (Cut - Paste) sử dụng phím tắt Ctrl+X để cắt và Ctrl+V để dán."
    },
    {
      q: "Trong Windows 7, các thao tác nào để sao chép đối tượng:",
      options: [
        "Chọn các đối tượng nguồn, giữ phím Shift, kéo sang folder chứa các đối tượng muốn chép đến.",
        "Chọn các đối tượng nguồn, nhấn Ctrl+C, mở folder chứa các đối tượng muốn sao chép đến, nhấn Ctrl+X",
        "Chọn các đối tượng nguồn, nhấn Ctrl+C, mở folder chứa các đối tượng muốn sao chép đến, nhấn Ctrl+V",
        "Chọn các đối tượng nguồn, nhấn Ctrl+X, mở folder chứa các đối tượng muốn sao chép đến, nhấn Ctrl+V."
      ],
      answer: 2,
      explain: "Thao tác sao chép (Copy - Paste) dùng tổ hợp phím Ctrl+C để chép và Ctrl+V để dán."
    },
    {
      q: "Trong Windows 7, có thể sử dụng chương trình nào như một máy tính bỏ túi?",
      options: [
        "MS. Excel",
        "Calculator",
        "MS. Cal",
        "Notepad"
      ],
      answer: 1,
      explain: "Calculator là ứng dụng tính toán bỏ túi tích hợp sẵn trong Windows."
    },
    {
      q: "Trong Windows 7 muốn xóa dữ liệu và không cho phục hồi ta thực hiện các thao tác:",
      options: [
        "Chọn đối tượng cần xóa và bấm phím Delete.",
        "Chọn đối tượng cần xóa/ chuột phải/ Delete.",
        "Chọn đối tượng cần xóa/ Ctrl+Delete",
        "Chọn đối tượng cần xóa/ Shift+Delete"
      ],
      answer: 3,
      explain: "Tổ hợp phím Shift + Delete giúp xóa vĩnh viễn tệp/thư mục mà không chuyển vào Recycle Bin."
    },
    {
      q: "Trong Windows Explorer của Windows 7 để chọn Folder thực hiện như sau:",
      options: [
        "Click chuột tại dấu + trước Folder",
        "Click chuột tại biểu tượng Folder",
        "Click chuột tại dấu – trước Folder",
        "Click chuột tại ổ đĩa chứa Folder"
      ],
      answer: 1,
      explain: "Nhấp trực tiếp vào biểu tượng/tên Folder để chọn Folder đó."
    },
    {
      q: "Trong Windows Explorer của Windows 7 để chọn nhiều file, folder rời rạc ta thực hiện các thao tác:",
      options: [
        "Click chọn file, folder đầu tiên, giữ Ctrl và Click chọn từng file, folder",
        "Giữ Shift và Click chọn từng file, folder",
        "Giữ Alt và Click chọn từng file, folder",
        "Click chọn file, folder đầu tiên, giữ Shift và chọn các file, thư mục khác"
      ],
      answer: 0,
      explain: "Giữ phím Ctrl cho phép chọn nhiều tệp hoặc thư mục không nằm liên tiếp nhau."
    },
    {
      q: "Muốn thay đổi biểu tượng Shortcut trong Windows 7 ta làm:",
      options: [
        "Chuột phải lên biểu tượng Shortcut /Properties/ Shortcut/Change Icon",
        "Chuột phải(Right Click) tại Desktop/New/ Shortcut",
        "Right click tại Desktop/New/ Folder",
        "Click hai lần (Double click) tại biểu tượng Shortcut"
      ],
      answer: 0,
      explain: "Các bước đổi biểu tượng icon: Nhấp chuột phải vào Shortcut -> Properties -> thẻ Shortcut -> bấm Change Icon."
    },
    {
      q: "Khi đang làm việc với Windows 7, muốn xem tổ chức các File và thư mục trên đĩa, ta có thể sử dụng:",
      options: [
        "My Computer hoặc Windows Explorer",
        "My Computer hoặc Recycle Bin",
        "Windows Explorer hoặc Recycle Bin",
        "My Computer hoặc My Network Places"
      ],
      answer: 0,
      explain: "Cả My Computer (Computer) và Windows Explorer đều cung cấp giao diện quản lý tệp và thư mục."
    },
    {
      q: "Khi đang sử dụng Windows 7, để lưu nội dung màn hình vào bộ nhớ Clipboard ta sử dụng phím hoặc tổ hợp phím nào?",
      options: [
        "Ctrl+C",
        "Ctrl+Ins",
        "Print Screen",
        "ESC"
      ],
      answer: 2,
      explain: "Phím Print Screen (PrtScn) chụp toàn bộ màn hình hiện tại và lưu vào bộ nhớ tạm Clipboard."
    },
    {
      q: "Hộp điều khiển việc phóng to, thu nhỏ, đóng cửa sổ (trong Windows 7) gọi là:",
      options: [
        "Dialog box",
        "List box",
        "Control box",
        "Text box"
      ],
      answer: 2,
      explain: "Nhóm nút điều khiển cửa sổ (Minimize, Maximize/Restore, Close) nằm ở góc Control box của cửa sổ."
    },
    {
      q: "Recycle Bin trong Windows7 là:",
      options: [
        "Một chương trình tiện ích để quản lý File và Folder",
        "Một chương trình dùng để sắp xếp, chỉnh sửa đĩa",
        "Nơi lưu trữ tạm thời file hay Folder bị xoá, có thể phục hồi lại",
        "Một chương trình soạn thảo đơn giản, không cần thiết phải định dạng"
      ],
      answer: 2,
      explain: "Recycle Bin chứa các tệp đã xóa tạm thời, giúp khôi phục lại khi cần thiết."
    },
    {
      q: "Để tạo một Shortcut trên nền desktop (của windows 7), chúng ta thực hiện theo những gợi ý nào?",
      options: [
        "Nhấn chuột phải, chọn NewShortcut, thao tác hộp thoại",
        "Nhấn chuột phải, chọn New, chọn Icons, thao tác hộp thoại.",
        "Nhấn chuột phải, chọn New, chọn Shortcut, thao tác theo hộp thoại",
        "Nhấn chuột phải, chọn New, chọn Folder, nhập vào tên chương trình"
      ],
      answer: 2,
      explain: "Thao tác tạo Shortcut: Nhấp chuột phải vào Desktop -> chọn New -> chọn Shortcut."
    },
    {
      q: "Để tạo 1 folder mới trong Windows 7, ta dùng thao tác nào trong các thao tác sau:",
      options: [
        "Click trên vùng trống của folder, chọn New / Shortcut",
        "Click trên vùng trống của folder, chọn New / Folder",
        "Chọn menu File / New / Shortcut",
        "Chọn menu File / New / Text Document"
      ],
      answer: 1,
      explain: "Chuột phải tại vùng trống -> New -> Folder."
    },
    {
      q: "Để hiển thị thông tin chi tiết các đối tượng trong một cửa sổ folder (của Windows 7) sau khi chọn lệnh View ta chọn mục nào trong các mục sau:",
      options: [
        "Icons",
        "Thumbnails",
        "List",
        "Details"
      ],
      answer: 3,
      explain: "Lựa chọn 'Details' giúp hiển thị đầy đủ thông tin chi tiết của đối tượng."
    },
    {
      q: "Để phục hồi các đối tượng đã bị xóa trong Folder “Recycle Bin” sau khi chọn mở Folder này lên (trong Windows 7), thực hiện các thao tác:",
      options: [
        "Chọn các đối tượng cần phục hồi sau đó chọn: File/Restore",
        "Chọn các đối tượng cần phục hồi sau đó chọn: File/Delete",
        "Chọn File/Empty Recycle Bin",
        "Chọn File/Properties"
      ],
      answer: 0,
      explain: "Để khôi phục tệp trong Recycle Bin, chọn tệp đó và thực hiện lệnh Restore."
    },
    {
      q: "Để phục hồi dữ liệu bị xóa bởi thao tác Delete, ta vào Recycle Bin và chọn thao tác (trong Windows 7)?",
      options: [
        "Nhấn chuột phải lên đối tượng và chọn Undo",
        "Nhấn chuột phải lên đối tượng và chọn Redo",
        "Nhấn chuột phải lên đối tượng và chọn Restore",
        "Nhấn chuột phải lên đối tượng và chọn UnDelete"
      ],
      answer: 2,
      explain: "Chuột phải vào đối tượng trong Recycle Bin -> chọn Restore để đưa tệp về vị trí ban đầu."
    },
    {
      q: "Hệ điều hành Windows 7 đều có khả năng tự động nhận biết các thiết bị phần cứng và tự động cài đặt cấu hình của các thiết bị là chức năng:",
      options: [
        "Plug and Play",
        "Windows Explorer",
        "Desktop",
        "Multimedia"
      ],
      answer: 0,
      explain: "Tính năng Plug and Play (PnP) cho phép hệ điều hành tự động nhận dạng và cấu hình thiết bị phần cứng mới kết nối."
    },
    {
      q: "Hãy chỉ ra thao tác nào dưới đây không thể thực hiện được khi sử dụng Windows 7?",
      options: [
        "Tìm kiếm một file theo ràng buộc về mặt thời gian tạo lập của file(Date)",
        "Xóa một file trong “thùng rác” của Windows",
        "Sao chép một file từ thùng rác vào ổ đĩa",
        "Nhấn chuột phải lên Taskbar để thực hiện khóa cố định thanh Taskbar."
      ],
      answer: 2,
      explain: "Không thể thực hiện trực tiếp lệnh Copy đối với tệp đang nằm trong Thùng rác (Recycle Bin)."
    },
    {
      q: "Định dạng chuẩn của file âm thanh (được xác định qua phần mở rộng của file) trên hệ điều hành Windows 7 là gì?",
      options: [
        "Swa",
        "Mp3",
        "Wav",
        "Waf"
      ],
      answer: 2,
      explain: "WAV (Waveform Audio File Format) là định dạng âm thanh tiêu chuẩn trên hệ điều hành Windows."
    },
    {
      q: "Muốn di chuyển một cửa sổ trong Windows 7:",
      options: [
        "Click chuột ngay cửa sổ rồi dùng các phím mũi tên",
        "Double-Click chuột ngay nút Close",
        "Click và Drag chuột ngay thanh tiêu đề (Title bar)",
        "Click chuột ngay thanh tiêu đề"
      ],
      answer: 2,
      explain: "Nhấp và giữ chuột trái (Drag) tại thanh tiêu đề (Title bar) để kéo/di chuyển cửa sổ đến vị trí mong muốn."
    },
    {
      q: "Ta có thể thi hành một chương trình trong Windows 7 bằng cách nào trong các cách sau:",
      options: [
        "Double-Click chuột trên Shortcut của tập tin chương trình trên màn hình Desktop",
        "Click chuột trên Shortcut của tập tin chương trình trên màn hình Desktop",
        "Click trên tập tin chương trình trong cửa sổ folder",
        "Click trên menu Start chọn Explorer, nhập vào đường dẫn đến tập tin chương trình trong Textbox Address, chọn nút OK."
      ],
      answer: 0,
      explain: "Nhấp đôi chuột (Double-click) vào biểu tượng Shortcut để khởi chạy chương trình tương ứng."
    },
    {
      q: "Phím Print Screen có tác dụng gì khi đang sử dụng hệ điều hành Windows 7?",
      options: [
        "Cuộn màn hình",
        "Chụp màn hình và lưu vào Clipboard",
        "Tắt /Mở dãy phím số",
        "Tắt máy"
      ],
      answer: 1,
      explain: "Phím Print Screen chụp lại ảnh toàn màn hình và lưu tạm thời vào bộ nhớ Clipboard."
    },
    {
      q: "Sử dụng chương trình nào của Windows 7 để quản lý các File và thư mục?",
      options: [
        "Microsoft Office",
        "Accessories",
        "Control Panel",
        "Windows Explorer"
      ],
      answer: 3,
      explain: "Windows Explorer là công cụ quản lý tệp tin và thư mục chính trên Windows 7."
    },
    {
      q: "Để chuyển đổi qua lại giữa các ứng dụng đang được mở trong Windows 7, ta nhấn tổ hợp phím nào?",
      options: [
        "Shift+Tab",
        "Alt+Tab",
        "Ctrl + Alt+Tab",
        "Ctrl+Shift+Tab"
      ],
      answer: 1,
      explain: "Tổ hợp phím Alt + Tab dùng để chuyển đổi nhanh qua lại giữa các cửa sổ ứng dụng đang mở."
    },
    {
      q: "Để đóng một cửa sổ ứng dụng đang mở, trong Windows 7 ta có thể thực hiện thao tác nào?",
      options: [
        "Nhấn tổ hợp phím Ctrl+F4",
        "Nhấn tổ hợp phím Alt+F4",
        "Nhấn tổ hợp phím Shift+F4",
        "Nhấn tổ hợp phím Ctrl+X"
      ],
      answer: 1,
      explain: "Alt + F4 là phím tắt tiêu chuẩn để đóng ứng dụng/cửa sổ đang làm việc."
    },
    {
      q: "Để hiển thị được giờ theo mẫu sau 07:30:20 ta phải dùng định dạng nào trong các dạng sau:",
      options: [
        ". h:mm:ss tt",
        "hh:mm:ss tt",
        "h:mm:ss tt",
        "hh:mm:ss"
      ],
      answer: 3,
      explain: "Định dạng 'hh:mm:ss' đại diện cho giờ (2 chữ số):phút (2 chữ số):giây (2 chữ số)."
    },
    {
      q: "Để hiển thị được ngày theo mẫu sau 27/07/2011 ta phải dùng định dạng nào trong các dạng sau:",
      options: [
        "dd/MM/yyyy",
        "dd/MM/yy",
        "mm/dd/yyyy",
        "mm/dd/yy"
      ],
      answer: 0,
      explain: "'dd/MM/yyyy' tương ứng với Ngày (2 chữ số)/Tháng (2 chữ số)/Năm (4 chữ số)."
    },
    {
      q: "Muốn hiển thị hộp thoại điều khiển Unikey ta sử dụng tổ hợp phím nào ?",
      options: [
        "Ctrl + Shift + F2",
        "Ctrl + Shift + F3",
        "Ctrl + Shift + F4",
        "Ctrl + Shift + F5"
      ],
      answer: 3,
      explain: "Tổ hợp phím Ctrl + Shift + F5 dùng để mở nhanh bảng điều khiển UniKey."
    },
    {
      q: "Chọn thao tác thoát khỏi hệ điều hành Windows 7 và tắt máy mà vẫn lưu giữ được tiến trình làm việc hiện tại cho lần đăng nhập lần sau?",
      options: [
        "Nhấn Alt+F4",
        "Start -> Turn off -> Hibernate",
        "Start -> Shut down -> Hibernate",
        "Start -> Shut down -> Stand by"
      ],
      answer: 2,
      explain: "Chế độ Hibernate (Ngủ đông) lưu toàn bộ phiên làm việc từ RAM vào ổ cứng rồi tắt máy hẳn."
    },
    {
    "id": 60,
    "question": "Chọn sắp xếp đúng theo phiên bản (version) từ thấp đến cao của hệ điều hành windows được liệt kê dưới đây?",
    "options": [
      "1. Windows Vista, Windows 7, Windows XP",
      "2. Windows XP, Windows Vista, Windows 7",
      "3. Windows XP, Windows 7, Windows Vista",
      "4. Windows 7, Windows Vista, Windows XP"
    ],
    "answer": 2
  },
  {
    "id": 61,
    "question": "1 Gigabyte bằng:",
    "options": [
      "1. 1000 Mb",
      "2. 1024 Mb",
      "3. 1008 Mb",
      "4. 1016 Mb"
    ],
    "answer": 2
  },
  {
    "id": 62,
    "question": "Muốn sắp xếp các cửa sổ của các chương trình đang chạy chồng lên nhau, ta click phải trên vùng trống của Taskbar trong Windows 7, sau đó chọn:",
    "options": [
      "1. Cascade Windows",
      "2. Show windows stacked",
      "3. Show windows side by side",
      "4. Show the Desktop"
    ],
    "answer": 1
  },
  {
    "id": 63,
    "question": "Muốn sắp xếp các cửa sổ của các chương trình đang chạy theo chiều ngang, ta click phải trên vùng trống của Taskbar trong Windows 7, sau đó chọn:",
    "options": [
      "1. Show the Desktop",
      "2. Cascade Windows",
      "3. Show windows stacked",
      "4. Show windows side by side"
    ],
    "answer": 3
  },
  {
    "id": 64,
    "question": "Muốn sắp xếp các cửa sổ của các chương trình đang chạy theo chiều dọc, ta click phải trên vùng trống của Taskbar trong Windows 7, sau đó chọn:",
    "options": [
      "1. Show the Desktop",
      "2. Show windows side by side",
      "3. Show windows stacked",
      "4. Cascade Windows"
    ],
    "answer": 2
  },
  {
      q: "Muốn sắp xếp các cửa sổ của các chương trình đang chạy theo chiều dọc, ta click phải trên vùng trống của Taskbar trong Windows 7, sau đó chọn:",
      options: [
        "Show the Desktop",
        "Show windows side by side",
        "Show windows stacked",
        "Cascade Windows"
      ],
      answer: 1,
      explain: "Tùy chọn 'Show windows side by side' sẽ sắp xếp các cửa sổ đang mở nằm cạnh nhau theo chiều dọc."
    },
    {
      q: "Để khởi động lại máy tính, phát biểu nào dưới đây là sai?",
      options: [
        "Nhấn tổ hợp phím Ctrl + Alt + Del, chọn mục Restart",
        "Từ cửa sổ màn hình nền nhấn nút Start / Shutdown, sau đó chọn mục Restart",
        "Bấm nút Power trên thân máy",
        "Bấm nút Reset trên thân máy"
      ],
      answer: 2,
      explain: "Nút Power trên thân máy dùng để bật hoặc tắt nguồn máy tính, không phải là lệnh khởi động lại (Restart) hệ thống."
    },
    {
      q: "Bạn lựa chọn kiểu gõ Telex và bảng mã Unicode để soạn thảo văn bản. Khi đó, bạn cần chọn nhóm font chữ nào trong các font chữ sau để hiển thị rõ tiếng Việt?",
      options: [
        ".Vn Times, .Vn Arial, .Vn Courier",
        "Tahoma, Times New Roman, Verdana",
        ".Vn Times, Times New Roman, Arial",
        ".VNI Times, Arial, .Vn Avant"
      ],
      answer: 1,
      explain: "Bảng mã Unicode tương thích hoàn toàn với các phông chữ quốc tế chuẩn như Tahoma, Times New Roman, Verdana..."
    },
    {
      q: "Trong Windows Explorer, để tìm kiếm một nhóm tệp tin có tên bắt đầu bằng H, ta nhập tên sau:",
      options: [
        "H??.docx",
        "H*.*",
        "H.*",
        "*H.*"
      ],
      answer: 1,
      explain: "Ký tự đại diện '*' đại diện cho một chuỗi ký tự bất kỳ, 'H*.*' nghĩa là tên bắt đầu bằng H và phần mở rộng bất kỳ."
    },
    {
      q: "Phần mềm nào sau đây dùng để nén và giải nén dữ liệu trong Windows 7?",
      options: [
        "WinZip, 7-Zip",
        "Unikey",
        "Revo Uninstaller Pro",
        "Photoshop"
      ],
      answer: 0,
      explain: "WinZip và 7-Zip là các công cụ nén và giải nén tệp tin phổ biến."
    },
    {
      q: "Để nén thư mục, tệp tin bằng chương trình nén sẵn có trong Windows 7, ta thực hiện:",
      options: [
        "Nhắp chuột phải lên thư mục, tệp tin muốn nén, chọn Share with/Compressed (zipped) folder",
        "Nhắp chuột phải lên thư mục, tệp tin muốn nén, chọn Send to / Compressed (zipped) folder",
        "Nhắp chuột phải lên thư mục, tệp tin muốn nén, chọn Open with/ Compressed (zipped) folder",
        "Trong Windows 7 không có trình nén thư mục, tệp tin nào"
      ],
      answer: 1,
      explain: "Tính năng nén mặc định của Windows 7 được thực hiện qua menu Send to -> Compressed (zipped) folder."
    },
    {
      q: "Để giải nén thư mục, tệp tin khi dùng phần mềm WinRar ta thực hiện:",
      options: [
        "Nhắp chuột phải lên thư mục, tệp tin muốn giải nén, chọn Extract here...",
        "Nhắp chuột phải lên thư mục, tệp tin muốn nén, chọn Open with...",
        "Nhắp chuột phải lên thư mục, tệp tin muốn giải nén, chọn Extract files..., sau đó thao tác với hộp thoại",
        "Cả hai phương án a và c đều đúng"
      ],
      answer: 3,
      explain: "Trong WinRAR, cả 'Extract here' và 'Extract files...' đều là các thao tác giải nén hợp lệ."
    },
    {
      q: "Phát biểu nào sau đây về đường dẫn (path) là sai?",
      options: [
        "Là một chuỗi tên các thư mục mà ta cần phải đi qua đó để đến được tệp tin, thư mục con cần dùng",
        "Đường dẫn tên các thư mục được cách bởi dấu /",
        "Đường dẫn tên các thư mục được cách bởi dấu \\",
        "Thư mục đứng sau dấu \\ phải là thư mục con của thư mục đứng ngay trước nó"
      ],
      answer: 1,
      explain: "Trong hệ điều hành Windows, các thư mục trong đường dẫn được phân cách bằng dấu gạch chéo ngược (\\) chứ không phải dấu (/)."
    },
    {
      q: "Trong các cấu trúc sau trong Windows Explorer, cấu trúc nào phân cấp đúng khi lưu trữ thư mục và tệp?",
      options: [
        "Thư mục con - Tệp tin - Thư mục gốc",
        "Thư mục gốc - Tệp tin - Thư mục con",
        "Tệp tin - Thư mục con - Thư mục gốc",
        "Thư mục gốc - Thư mục con - Tệp tin"
      ],
      answer: 3,
      explain: "Cấu trúc cây thư mục phân cấp theo thứ tự: Thư mục gốc -> Thư mục con -> Tệp tin."
    },
    {
      q: "3KB bằng:",
      options: [
        "1024 byte",
        "1000byte",
        "3072 byte",
        "3070 byte"
      ],
      answer: 2,
      explain: "1 KB = 1024 bytes, do đó 3 KB = 3 * 1024 = 3072 bytes."
    },
    {
      q: "Phát biểu nào sau đây không đúng?",
      options: [
        "Có hai loại phần mềm là phần mềm hệ thống và phần mềm ứng dụng",
        "Phần mềm ứng dụng bao gồm hệ điều hành, các chương trình điều khiển thiết bị,...",
        "Có rất nhiều loại hệ điều hành: MSWindows, Linux, Unix,...",
        "Chương trình diệt virus là phần mềm ứng dụng."
      ],
      answer: 1,
      explain: "Hệ điều hành và trình điều khiển thiết bị thuộc nhóm phần mềm hệ thống (System Software), không phải phần mềm ứng dụng."
    },
    {
      q: "Phần mềm nào sau đây có khả năng diệt virus cho máy tính:",
      options: [
        "Kaspersky",
        "Microsoft Office",
        "Outlook Express",
        "WinRar"
      ],
      answer: 0,
      explain: "Kaspersky là phần mềm diệt virus nổi tiếng."
    },
    {
      q: "Khi mất điện, dữ liệu chứa ở nơi nào dưới đây sẽ bị mất",
      options: [
        "CD-ROM.",
        "Đĩa cứng",
        "Bộ nhớ Ram",
        "Bộ nhớ Rom"
      ],
      answer: 2,
      explain: "RAM là bộ nhớ khả biến (volatile memory), toàn bộ dữ liệu lưu trữ trên RAM sẽ bị mất khi mất nguồn điện cung cấp."
    },
    {
      q: "Phát biểu nào dưới đây là ĐÚNG khi đề cập đến Taskbar?",
      options: [
        "Taskbar không thể nằm ở vị trí lề bên trái màn hình.",
        "Taskbar không thể nằm ở vị trí lề bên phải màn hình.",
        "Taskbar không thể nằm ở vị trí giữa màn hình.",
        "Taskbar không thể ẩn sau màn hình làm việc."
      ],
      answer: 2,
      explain: "Thanh Taskbar trong Windows chỉ có thể ghim ở 4 cạnh của màn hình (dưới, trên, trái, phải), không thể đặt nằm tự do ở giữa màn hình."
    },
    {
      q: "Khi khởi động máy tính, phần mềm nào sẽ được thực hiện trước?",
      options: [
        "Phần mềm gõ tiếng Việt.",
        "Hệ điều hành.",
        "Chương trình diệt Virus máy tính.",
        "Phần mềm MS Word, MS Excel."
      ],
      answer: 1,
      explain: "Hệ điều hành được tải vào bộ nhớ trước tiên để quản lý phần cứng và tạo môi trường cho các phần mềm khác khởi chạy."
    },
    {
      q: "Trong môi trường Windows 7, ta có thể chạy cùng lúc:",
      options: [
        "Nhiều chương trình ứng dụng khác nhau.",
        "2 chương trình.",
        "Chỉ chạy một chương trình.",
        "Tất cả các phương án trên đều sai."
      ],
      answer: 0,
      explain: "Windows 7 là hệ điều hành đa nhiệm (multitasking), cho phép vận hành đồng thời nhiều chương trình."
    },
    {
      q: "Nhấp chuột phải vào ổ đĩa D: trong cửa sổ My Computer và chọn Format có mục đích:",
      options: [
        "Xem các thông tin chi tiết về ổ đĩa D:",
        "Thực hiện chức năng định dạng lại ổ đĩa D:",
        "Thực hiện chức năng sao chép dữ liệu của ổ đĩa D:",
        "Thực hiện chức năng phân vùng cho ổ đĩa D:"
      ],
      answer: 1,
      explain: "Lệnh Format dùng để định dạng (khởi tạo lại) bề mặt đĩa và xóa toàn bộ dữ liệu trên phân vùng đó."
    },
    {
      q: "Thao tác nhấp chuột phải vào biểu tượng của thư mục/tập tin và chọn Properties là để:",
      options: [
        "Xem thuộc tính thư mục/tập tin.",
        "Sao chép thư mục/tập tin.",
        "Đổi tên thư mục/tập tin.",
        "Xoá thư mục/tập tin."
      ],
      answer: 0,
      explain: "Properties cho phép người dùng xem các thông tin thuộc tính (kích thước, ngày tạo, quyền truy cập...) của tệp hay thư mục."
    },
    {
      q: "Trong Tin học, tệp tin (file) là gì?",
      options: [
        "Là tất cả thông tin được lưu giữ trong các bộ nhớ của máy tính.",
        "Là một vùng trong ổ cứng của máy tính dùng để lưu giữ thông tin.",
        "Là đơn vị cơ bản để lưu trữ thông tin trên bộ nhớ ngoài",
        "Là một thiết bị trong máy tính được hệ điều hành điều khiển, dùng để lưu giữ và xử lý thông tin."
      ],
      answer: 2,
      explain: "Tệp tin (file) là đơn vị cấu trúc cơ bản dùng để tổ chức và lưu trữ dữ liệu trên bộ nhớ ngoài."
    },
    {
      q: "Trong Tin học, thư mục (folder) là một:",
      options: [
        "Tập tin đặc biệt không có phần mở rộng.",
        "Tập hợp các tập tin và thư mục con.",
        "Phần ổ đĩa chứa một tập hợp các tập tin.",
        "Mục lục để tra cứu thông tin."
      ],
      answer: 1,
      explain: "Thư mục là một cấu trúc dạng ngăn chứa dùng để quản lý, lưu trữ tập hợp các tệp tin và các thư mục con khác."
    },
    {
      q: "Trong Windows, để chọn một lúc các file/folder nằm liền nhau trong một danh sách, ta thực hiện:",
      options: [
        "Giữ phím Ctrl và nhắp chuột vào từng mục muốn chọn trong danh sách.",
        "Giữ phím Alt và nhắp chuột vào từng mục muốn chọn trong danh sách.",
        "Nhắp chuột ở mục đầu, ấn và giữ Shift nhắp chuột ở mục cuối.",
        "Giữ phím Tab và nhắp chuột vào từng mục muốn chọn trong danh sách."
      ],
      answer: 2,
      explain: "Chọn mục đầu tiên, sau đó giữ phím Shift và nhấp vào mục cuối cùng sẽ bôi đen toàn bộ các mục nằm liên tiếp giữa chúng."
    },
    {
      q: "Trong Windows Explorer, phát biểu nào sau đây là sai?",
      options: [
        "Tổ hợp phím Ctrl + A tương đương với menu lệnh Edit \\ Select All.",
        "Tổ hợp phím Ctrl + C tương đương với menu lệnh Edit \\ Cut.",
        "Tổ hợp phím Ctrl + V tương đương với menu lệnh Edit \\ Paste.",
        "Tổ hợp phím Alt + F4 tương đương việc đóng cửa sổ Windows Explorer."
      ],
      answer: 1,
      explain: "Ctrl + C tương đương với lệnh Copy (sao chép), trong khi Cut (cắt) tương ứng với tổ hợp phím Ctrl + X."
    },
    {
      q: "Tổ hợp phím Alt + Tab dùng để:",
      options: [
        "Thoát cửa sổ.",
        "Phóng to cửa sổ.",
        "Chuyển đổi giữa các cửa sổ chương trình.",
        "Thu nhỏ cửa sổ xuống thanh Taskbar."
      ],
      answer: 2,
      explain: "Alt + Tab là phím tắt dùng để chuyển đổi nhanh giữa các cửa sổ ứng dụng đang mở."
    },
    {
      q: "Tổ hợp phím Alt + F4 dùng để:",
      options: [
        "Đóng cửa sổ.",
        "Phóng to cửa sổ.",
        "Chuyển đổi giữa các cửa sổ chương trình.",
        "Thu nhỏ cửa sổ xuống thanh Taskbar."
      ],
      answer: 0,
      explain: "Alt + F4 dùng để đóng cửa sổ ứng dụng đang kích hoạt."
    },
    {
      q: "Chế độ nào sau đây dùng để tạm dừng làm việc với máy tính trong một khoảng thời gian ngắn (khi cần làm việc trở lại chỉ cần di chuyển chuột hoặc ấn phím bất kỳ)?",
      options: [
        "Restart",
        "Shut down",
        "Stand by",
        "Restart in MS-DOS Mode"
      ],
      answer: 2,
      explain: "Chế độ Stand by (hoặc Sleep) giúp tạm dừng hoạt động của hệ thống ở trạng thái tiết kiệm điện năng."
    },
    {
      q: "Trong Windows 7, những biểu tượng nào có trong All Control Panel Items",
      options: [
        "Fonts, Display, My Computer.",
        "System, Display, Fonts.",
        "Mouse, Keyboard, Monitor.",
        "Fonts, Mouse, Recycle Bin."
      ],
      answer: 1,
      explain: "System, Display và Fonts là các mục quản lý chuẩn nằm trực tiếp trong Control Panel."
    },
    {
      q: "Trong Windows 7, khi trỏ chuột và bấm kéo chuột tại viền hay góc của cửa sổ sẽ cho phép:",
      options: [
        "Di chuyển cửa sổ.",
        "Đóng cửa sổ.",
        "Thay đổi kích thước cửa sổ.",
        "Thu nhỏ cửa sổ."
      ],
      answer: 2,
      explain: "Kéo thả chuột tại viền hoặc góc cửa sổ giúp thay đổi kích thước chiều rộng/chiều cao của cửa sổ đó."
    },
    {
      q: "Trong Windows Explorer, thao tác nào dùng đến bảng chọn File?",
      options: [
        "Đổi tên thư mục.",
        "Mở thư mục.",
        "Tạo thư mục mới.",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Menu File trong Windows Explorer chứa các chức năng cơ bản như New (Tạo mới), Open (Mở), Rename (Đổi tên)..."
    },
    {
      q: "Trong Windows Explorer, thao tác nào sau đây dùng đến menu lệnh Edit:",
      options: [
        "Mở một thư mục.",
        "Xóa một thư mục.",
        "Đổi tên một thư mục.",
        "Sao chép một thư mục."
      ],
      answer: 3,
      explain: "Thao tác sao chép (Copy) và dán (Paste) thuộc nhóm lệnh chỉnh sửa trong menu Edit."
    },
    {
      q: "Để thoát Windows Explorer, ta chọn menu lệnh:",
      options: [
        "File /Close.",
        "Windows /Exit.",
        "File / Exit.",
        "Windows / Close."
      ],
      answer: 0,
      explain: "Trong cửa sổ Windows Explorer, lệnh thoát ứng dụng là File -> Close."
    },
    {
      q: "Trong windows 7, phần tên của tệp tin có độ dài không quá bao nhiêu ký tự?",
      options: [
        "1",
        "3",
        "256",
        "Không giới hạn"
      ],
      answer: 2,
      explain: "Tên tệp tin trong hệ điều hành Windows bao gồm cả đường dẫn có độ dài tối đa là 255/256 ký tự."
    },
    {
      q: "Phần mở rộng của tên tệp tin thể hiện:",
      options: [
        "Kích thước của tệp tin.",
        "Kiểu tệp tin.",
        "Ngày giờ thay đổi tệp tin.",
        "Tên thư mục chứa tệp tin."
      ],
      answer: 1,
      explain: "Phần mở rộng (đuôi tệp) dùng để xác định định dạng và định kiểu tệp tin."
    },
    {
      q: "Trong các folder được liệt kê dưới đây, folder nào chứa các folder vừa bị xoá.",
      options: [
        "My Network Places",
        "My Computer",
        "My Documents",
        "Recycle Bin"
      ],
      answer: 3,
      explain: "Thùng rác Recycle Bin là nơi lưu trữ tạm thời các tệp tin và thư mục vừa bị xóa."
    },
    {
      q: "Trong Windows Explorer, tiêu chí nào sau đây không thể dùng để sắp xếp các File và thư mục?",
      options: [
        "Tên File",
        "Tần suất sử dụng",
        "Kích thước File",
        "Kiểu File"
      ],
      answer: 1,
      explain: "Windows Explorer hỗ trợ sắp xếp theo Name (Tên), Size (Kích thước), Type (Kiểu) và Date modified, không hỗ trợ theo 'Tần suất sử dụng'."
    },
    {
      q: "Chức năng của công cụ Brushes trong Paint là:",
      options: [
        "Hỗ trợ các loại chổi vẽ khác nhau",
        "Chỉnh sửa nét vẽ",
        "Thay đổi kích thước",
        "Xén hình"
      ],
      answer: 0,
      explain: "Công cụ Brushes cung cấp nhiều kiểu cọ/chổi vẽ khác nhau để tạo hình."
    },
    {
      q: "Chức năng Import Audio hoặc Music trong Movie Tasks (khi sử dụng phần mềm Window Movie Maker) là:",
      options: [
        "Lấy tranh vào",
        "Lấy file âm thanh",
        "Lấy phim vào",
        "Thu hình trực tiếp từ Webcame, Card TV"
      ],
      answer: 1,
      explain: "Lệnh Import Audio hoặc Music dùng để nhập các tệp âm thanh/nhạc vào dự án."
    },
    {
      q: "Chức năng Import Video trong Movie Tasks (khi sử dụng phần mềm Window Movie Maker) là:",
      options: [
        "Lấy tranh vào",
        "Lấy file âm thanh",
        "Lấy phim vào",
        "Thu hình trực tiếp từ Camera"
      ],
      answer: 2,
      explain: "Lệnh Import Video dùng để nhập các đoạn phim/video vào chương trình."
    },
    {
      q: "Để chia một clip làm 2 phần (khi sử dụng phần mềm Windows Movie Maker) , sau khi chọn vị trí (frame) cần cắt, ta thực hiện thao tác nào?",
      options: [
        "Vào menu Edit chọn Split",
        "Vào menu File chọn Split",
        "Vào menu Clip chọn Split"
      ],
      answer: 0,
      explain: "Chức năng cắt/tách clip (Split) nằm trong menu Edit."
    },
    {
      q: "Để vẽ được hình chữ nhật (HCN) có nét viền màu đỏ, khi sử dụng phần mềm Paint ta thao tác theo cách nào dưới đây?",
      options: [
        "Chọn công cụ vẽ HCN / Vẽ HCN / Chọn màu đỏ cho nét viền.",
        "Chọn màu đỏ cho nét viền / Chọn công cụ vẽ HCN / Vẽ HCN",
        "Chọn công cụ vẽ HCN / Chọn màu đỏ cho nét viền/ Vẽ HCN",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 3,
      explain: "Trong Paint, người dùng có thể linh hoạt thiết lập màu sắc và công cụ trước hoặc sau khi thực hiện thao tác vẽ."
    },
    {
      q: "Để vẽ đường cong (Curve) trong phần mềm Paint cần thực hiện các thao tác nào sau đây:",
      options: [
        "Nhắp chuột vào biểu tượng và vẽ",
        "Thực hiện vẽ đường thẳng, sau đó nhắp chuột để thực hiện uốn",
        "Nháy chuột 2 lần vào biểu tượng và vẽ",
        "Thực hiện vẽ đường thẳng sau đó nháy chuột 2 lần để thực hiện uốn"
      ],
      answer: 1,
      explain: "Quy trình vẽ đường cong trong Paint: Chọn công cụ Curve -> Kéo vẽ một đường thẳng -> Nhấp giữ chuột kéo để uốn cong."
    },
    {
      q: "Độ dày, mỏng của nét vẽ trong phần mềm Paint được xác định bởi công cụ nào?",
      options: [
        "Style",
        "Size",
        "Line",
        "Pen"
      ],
      answer: 1,
      explain: "Công cụ 'Size' cho phép chọn độ dày/mỏng của nét vẽ."
    },
    {
      q: "Frame trong phần mềm Windows Movie Maker là:",
      options: [
        "Các bức tranh",
        "Các file âm thanh",
        "Phim được tạo nên từ các khung hình liên tiếp",
        "Các file Word"
      ],
      answer: 2,
      explain: "Frame (khung hình) là các đơn vị hình ảnh liên tiếp cấu thành nên đoạn phim."
    },
    {
      q: "Khi chọn công cụ vẽ đa giác trong phần mềm MS. Paint, một trong những thao tác bắt buộc phải sử dụng đầu tiên là thao tác nào?",
      options: [
        "Chọn màu cho nét vẽ đa giác",
        "Vẽ cạnh đầu tiên của đa giác",
        "Chọn màu nền cho đa giác.",
        "Vẽ đỉnh đầu tiên của đa giác"
      ],
      answer: 1,
      explain: "Khi vẽ đa giác bằng công cụ Polygon, thao tác đầu tiên là kéo chuột để vẽ cạnh đầu tiên."
    },
    {
      q: "Khi khai thác công cụ tạo ảnh trong Paint, chúng ta có thể sử dụng các công cụ có sẵn để tạo nên rất nhiều hình khác nhau. Công cụ nào dưới đây là không có sẵn trong Paint?",
      options: [
        "Tạo hình trái tim",
        "Tạo hình sao",
        "Tạo hình tam giác",
        "Tạo hình mặt trăng"
      ],
      answer: 3,
      explain: "Trong danh sách hình dựng sẵn (Shapes) của MS Paint không có sẵn công cụ vẽ hình mặt trăng."
    },
    {
      q: "Khi khai thác công cụ tạo ảnh trong Paint, chúng ta có thể sử dụng các công cụ có sẵn để tạo nên rất nhiều hình khác nhau. Công cụ nào dưới đây là không có sẵn trong Paint?",
      options: [
        "Tạo hình lục giác",
        "Tạo hình bình hành",
        "Tạo hình tam giác",
        "Tạo hình mũi tên"
      ],
      answer: 1,
      explain: "Thư viện Shapes của MS Paint không tích hợp sẵn công cụ dựng hình bình hành."
    },
    {
      q: "Chương trình đảm nhận chức năng làm môi trường trung gian giữa người sử dụng và phần cứng của máy tính được gọi là:",
      options: [
        "Phần mềm",
        "Hệ điều hành",
        "Các loại trình dịch trung gian",
        "Ngôn ngữ máy"
      ],
      answer: 1,
      explain: "Hệ điều hành đóng vai trò là giao diện trung gian quản lý phần cứng và phục vụ người dùng."
    },
    {
      q: "Thanh tiêu đề của mỗi cửa sổ trong Windows 7 có chứa:",
      options: [
        "Các nút lệnh sao chép ,cắt, dán",
        "Tên của chương trình ứng dụng và các nút điều chỉnh, thu nhỏ, đóng chương trình",
        "Đường dẫn đến thư mục đang truy cập",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 1,
      explain: "Thanh tiêu đề (Title bar) hiển thị tên chương trình/tệp và chứa các nút Minimize, Maximize, Close."
    },
    {
      q: "Tên thư mục trong hệ điều hành Windows 7 cần thoả điều kiện sau:",
      options: [
        "Không quá 255 ký tự; không được trùng tên nếu trong cùng một cấp thư mục (cùng thư mục cha) và không chứa các ký tự đặc biệt (/ \\ \" * ! <> ?",
        "Tối đa 8 ký tự, không có khoảng trắng và các ký tự đặc biệt (/ \\ \" * ! <> ?",
        "Tối đa 255 ký tự, không bắt đầu bằng chữ số, không chứa khoảng trắng.",
        "Tối đa 256 ký tự."
      ],
      answer: 0,
      explain: "Quy tắc đặt tên thư mục trên Windows: độ dài tối đa 255 ký tự, không trùng tên trong cùng một thư mục cha và không chứa các ký tự cấm `/ \\ \" * ! <> ?`."
    },
    {
      q: "Trong các biểu tượng được liệt kê dưới đây, đâu là biểu tượng thể hiện đúng kiểu tập tin \"Langtoi.docx\" trong hệ điều hành Windows 7?",
      options: [
        "Hình 2 và Hình 3",
        "Hình 3",
        "Hình 2",
        "Hình 4 và Hình 1"
      ],
      answer: 2,
      explain: "Hình 2 thể hiện chính xác biểu tượng tập tin văn bản Microsoft Word (.docx)."
    },
    {
      q: "Để mở một cửa sổ đang sử dụng ta:",
      options: [
        "Nhắp chuột vào một vị trí bất kí trên của sổ đó",
        "Nhắp chuột vào tên nút đại diện của cửa sổ trên thanh Taskbar",
        "Nhấn ALT+Tab cho đến khi cửa sổ được chọn",
        "Tất cả các phương án trên đều đúng"
      ],
      answer: 3,
      explain: "Tất cả các thao tác trên đều cho phép kích hoạt và mở/hiển thị cửa sổ chương trình."
    },
    {
      q: "Phát biểu nào không đúng trong các phát biểu sau?",
      options: [
        "Trong hệ điều hành Windows 7, thư mục có thể chứa các thư mục con khác.",
        "Trong hệ điều hành Windows 7, thư mục có thể chứa các tệp và thư mục con khác.",
        "Trong hệ điều hành Windows 7, tệp có thể chứa tệp.",
        "Trong hệ điều hành Windows 7, ta không thể sử dụng tệp để chứa các tệp và thư mục con khác."
      ],
      answer: 2,
      explain: "Tệp (file) chỉ chứa dữ liệu, không thể dùng làm chứa các tệp hay thư mục khác như thư mục (folder)."
    },
    {
      q: "Để gõ được Tiếng Việt các lựa chọn nào sau đây là đúng:",
      options: [
        "Font chữ Time New Roman- Chọn bộ mã TCVN3",
        "Font chữ Verdana - Chọn bộ mã TCVN3",
        "Font chữ .VntimeH - Chọn bộ mã Unicode",
        "Font chữ .Vnarial - Chọn bộ mã TCVN3"
      ],
      answer: 3,
      explain: "Các phông chữ có tiền tố `.Vn` (như .Vnarial, .Vntime) sử dụng chuẩn bảng mã TCVN3 (ABC)."
    },
    {
      q: "Trong các phát biểu sau đây, phát biểu nào đúng:",
      options: [
        "Đường tắt (Shortcut) là đường đi ngắn nhất đến đích",
        "Đường tắt ( Shortcut) là đường dẫn ngắn nhất đến tập tin cần truy cập",
        "Đường tắt ( Shortcut) là biểu tượng giúp người dùng truy cập nhanh vào đối tượng thường sử dụng",
        "Tất cả các phương án trên đều đúng."
      ],
      answer: 2,
      explain: "Shortcut là một tập tin liên kết (pointer) giúp mở nhanh các tệp, thư mục hoặc ứng dụng thường dùng."
    },
    {
      q: "Muốn gỡ bỏ một chương trình trong Windows 7 ta dùng cách nào sau đây:",
      options: [
        "Xóa biểu tượng trên màn hình",
        "Vào Control Panel chọn Uninstall a program",
        "Cả 2 phương án 1 và phương án 2 đều đúng.",
        "Cả 2 phương án 1 và phương án 2 đều sai"
      ],
      answer: 1,
      explain: "Để gỡ bỏ triệt để ứng dụng trên Windows, cần truy cập Control Panel -> Programs and Features (Uninstall a program)."
    },
    {
      q: "Khi tìm kiếm tập tin, thư mục ký tự \" * \" dùng để:",
      options: [
        "Không thể thay thế cho ký tự",
        "Thay thế cho 1 ký tự",
        "Thay thế cho dấu cách",
        "Thay thế cho 1 số ký tự"
      ],
      answer: 3,
      explain: "Ký tự đại diện '*' (wildcard) được dùng để thay thế cho một hoặc một chuỗi nhiều ký tự."
    },
    {
    "q": "Muốn chọn tất cả các đối tượng trong cửa sổ folder (khi sử dụng Windows 7) ta sử dụng tổ hợp phím:",
    "options": [
      "Ctrl+C",
      "Ctrl+ V",
      "Ctrl+ A",
      "Ctrl+X"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím Ctrl + A dùng để chọn tất cả (Select All) các đối tượng trong thư mục."
  },
  {
    "q": "Trong Windows Explorer (trong Windows 7), để cài đặt thuộc tính một tập tin đã chọn ta vào:",
    "options": [
      "Nhấp chuột phải vào tên tệp tin /Properties/Attributes",
      "Chọn tệp tin cần đặt thuộc tính / File /Properties / Attributes",
      "Chọn tệp tin cần đặt thuộc tính / Edit /Properties / Attributes",
      "Cả 2 phương án 1 và phương án 2 đều đúng."
    ],
    "answer": 3,
    "explain": "Cả hai cách nhấn chuột phải chọn Properties hoặc vào menu File/Properties đều dẫn đến bảng cài đặt thuộc tính Attributes."
  },
  {
    "q": "Thuộc tính nào là thuộc tính ẩn của tập tin trong Windows 7:",
    "options": [
      "Archive",
      "Read-only",
      "Hidden",
      "System"
    ],
    "answer": 2,
    "explain": "Hidden là thuộc tính dùng để ẩn tập tin trong hệ điều hành Windows."
  },
  {
    "q": "Để mở hộp thoại in văn bản trong MS. Word 2007 ta thao tác:",
    "options": [
      "Alt + P",
      "Ctrl +P",
      "Ctrl +B",
      "Cả 2 phương án 1 và phương án 2 đều đúng."
    ],
    "answer": 1,
    "explain": "Phím tắt Ctrl + P dùng để mở hộp thoại in (Print) trong MS Word."
  },
  {
    "q": "Để in 4 trang trên cùng một trang giấy trong MS. Word 2007, ta thao tác:",
    "options": [
      "Ctrl + P, Trong Copies: chọn 4",
      "Ctrl + P, Trong Pages per sheet: chọn 4 pages",
      "Alt +P, trong Pages per sheet: chọn 4 pages",
      "Tất cả các phương án trên đều sai,"
    ],
    "answer": 1,
    "explain": "Mở hộp thoại in bằng Ctrl + P, tại mục Pages per sheet chọn 4 pages để in 4 trang thu nhỏ trên 1 tờ giấy."
  },
  {
    "q": "Trong Windows 7, để đổi máy in mặc định từ một danh sách máy in cài sẵn:",
    "options": [
      "Nháy đúp biểu tượng máy in trên thanh Taskbar/ Printer/Set as Default Printer",
      "Start/ Control panel/ Devices and Printers/ Nháy chuột phải vào máy in cần đổi/ Set as Default Printer",
      "Đáp án a và b đều đúng",
      "Cả 2 phương án 1 và phương án 2 đều sai."
    ],
    "answer": 1,
    "explain": "Vào Devices and Printers trong Control Panel, nhấp chuột phải vào máy in muốn chọn và nhấn Set as Default Printer."
  },
  {
    "q": "Trong Windows Explorer, trường hợp nào sau đây có thể đổi tên tệp tin:",
    "options": [
      "Tệp tin có thuộc tính chỉ đọc",
      "Tệp tin có thuộc tính ẩn",
      "Tệp tin đang sử dụng",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 0,
    "explain": "Tệp tin có thuộc tính chỉ đọc (Read-only) vẫn cho phép đổi tên, trong khi tệp đang sử dụng hoặc bị ẩn thì không đổi tên trực tiếp được."
  },
  {
    "q": "Trong Windows 7, để xem tiến trình các công việc in trong hàng đợi, ta thao tác:",
    "options": [
      "Nháy chuột phải vào biểu tượng máy in trên thanh Taskbar/ Open all active printers",
      "Start/ Control panel/ Devices and Printers/ Nháy chuột phải vào máy in See what's pritting",
      "Cả 2 phương án 1 và phương án 2 đều đúng.",
      "Tất cả các phương án trên đều sai,"
    ],
    "answer": 2,
    "explain": "Có thể xem danh sách hàng đợi in bằng cách chọn Open all active printers từ Taskbar hoặc chọn See what's printing trong Control Panel."
  },
  {
    "q": "Để tạm dừng việc in trong Windows 7 ta thao tác như sau:",
    "options": [
      "Start/ Control panel/ Devices and Printers/ Nhấp chuột phải vào máy in/ See what's pritting/ Chọn tên tệp văn bản đang in/Pause",
      "Nhấp chuột phải vào biểu tượng máy in trên thanh Taskbar/ Open all active printers/Nhấp chuột phải vào tên tệp văn bản đang in/Pause",
      "Cả 2 phương án 1 và phương án 2 đều đúng.",
      "Cả 2 phương án 1 và phương án 2 đều sai."
    ],
    "answer": 2,
    "explain": "Cả hai cách truy cập vào cửa sổ quản lý lệnh in đều cho phép nhấp chuột phải vào tệp và chọn Pause để tạm dừng."
  },
  {
    "q": "Để hủy việc in trong Windows 7 ta thao tác như sau:",
    "options": [
      "Start/ Control panel/ Devices and Printers/ Nhấp chuột phải vào máy in/ See what's pritting/ Chọn tên tệp văn bản đang in/Cancel",
      "Nhấp chuột phải vào biểu tượng máy in trên thanh Taskbar/ Open all active printers/Nhấp chuột phải vào tên tệp văn bản đang in/Cancel",
      "Cả 2 phương án 1 và phương án 2 đều đúng.",
      "Nhấp chuột vào biểu tượng máy in trên thanh Taskbar/ Open all active printers/Chọn tên tệp văn bản đang in/Cancel"
    ],
    "answer": 1,
    "explain": "Thao tác chuẩn để hủy lệnh in nhanh là nhấp chuột phải vào biểu tượng máy in dưới Taskbar, mở danh sách và chuột phải vào tệp chọn Cancel."
  },
  {
    "q": "Sub menu Documents trong Start menu có tác dụng:",
    "options": [
      "Mở thư mục My Document",
      "Để mở một chương trình ứng dụng trong thời gian gần nhất",
      "Thoát khỏi User đang sử dụng",
      "Tìm kiếm tập tin, thư mục"
    ],
    "answer": 0,
    "explain": "Mục Documents trong Start Menu của Windows dùng để mở nhanh thư mục lưu trữ tài liệu cá nhân My Documents."
  }
    ]
  },

  module3: {
    title: "Module 3: XỬ LÝ VĂN BẢN CƠ BẢN (MS WORD)",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 3.",
    questions: [
     
        {
    "q": "Để có được một văn bản theo yêu cầu, thông thường cần có những thao tác:",
    "options": [
      "Soạn thảo nội dung, biên tập văn bản, lưu giữ, in ấn và phân phối",
      "Soạn thảo nội dung, lưu giữ, in ấn và phân phối",
      "Sao chép nội dung, biên tập văn bản, lưu giữ, in ấn và phân phối",
      "Soạn thảo nội dung, thay đổi định dạng, lưu giữ, in ấn và phân phối"
    ],
    "answer": 0,
    "explain": "Quy trình xử lý văn bản chuẩn bao gồm đầy đủ các bước: Soạn thảo nội dung -> Biên tập (sửa đổi, định dạng) -> Lưu trữ -> In ấn -> Phân phối."
  },
  {
    "q": "Sử dụng chương trình nào để soạn thảo văn bản?",
    "options": [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft Powerpoint",
      "Windows Explorer"
    ],
    "answer": 1,
    "explain": "Microsoft Word là phần mềm chuyên dụng cho việc soạn thảo và xử lý văn bản."
  },
  {
    "q": "Chức năng nào sau đây không thuộc một phần mềm xử lý văn bản?",
    "options": [
      "Soạn thảo và định dạng văn bản.",
      "Khả năng đồ hoạ đã mạnh dần lên, kết hợp với công nghệ OLE (Objects Linking and Embedding).",
      "Kết xuất, nhập dữ liệu với nhiều loại định dạng khác nhau.",
      "Lưu trữ nét chữ, nhận dạng cũng như hỗ trợ kỹ năng viết chữ đẹp."
    ],
    "answer": 3,
    "explain": "Phần mềm xử lý văn bản tập trung vào việc nhập, định dạng và lưu trữ dữ liệu văn bản số, không có chức năng dạy/hỗ trợ kỹ năng viết chữ đẹp tay."
  },
  {
    "q": "Khi làm việc với Word 2007 xong, để thoát khỏi ứng dụng ta thực hiện:",
    "options": [
      "menu Home / Exit",
      "menu Office button / Exit",
      "menu View / Exit",
      "menu Office button / Close"
    ],
    "answer": 1,
    "explain": "Nhấn nút Office Button ở góc trên bên trái rồi chọn Exit Word để thoát ứng dụng."
  },
  {
    "q": "Khi đang làm việc trên Ms Word 2007, để đóng phần mềm Ms Word 2007 ta dùng tổ hợp phím",
    "options": [
      "Alt + F2",
      "Alt + F4",
      "Alt + F11",
      "Ctrl + F5"
    ],
    "answer": 1,
    "explain": "Tổ hợp phím Alt + F4 được dùng để đóng cửa sổ ứng dụng đang hoạt động trong Windows."
  },
  {
    "q": "Để xem tài liệu ở chế độ Full Screen Reading ở Word 2007 ta thực hiện",
    "options": [
      "menu View / Outline",
      "menu View / Full Screen Reading",
      "menu Review / Full Screen Reading",
      "menu Home / Full Screen Reading"
    ],
    "answer": 1,
    "explain": "Vào thẻ View, trong nhóm Document Views chọn Full Screen Reading."
  },
  {
    "q": "Trong MS Word 2007, để mở hộp hội thoại trợ giúp, bấm phím nào?",
    "options": [
      "F3",
      "F2",
      "F1",
      "F5"
    ],
    "answer": 2,
    "explain": "Phím F1 là phím trợ giúp (Help) tiêu chuẩn trong Word cũng như hầu hết các phần mềm Windows."
  },
  {
    "q": "Trong MS Word 2007, để tắt mở thanh thước, ta thực hiện:",
    "options": [
      "Tại menu Home / Ruler",
      "Tại menu Insert / Ruler",
      "Tại menu Reference / Ruler",
      "Tại menu View / Ruler"
    ],
    "answer": 3,
    "explain": "Thanh thước (Ruler) nằm trong thẻ View (Hiển thị) -> nhóm Show/Hide."
  },
  {
    "q": "Góc trên bên phải của thanh tiêu đề MS Word có các nút chọn ký hiệu dấu gạch ngang và ô vuông dùng để:",
    "options": [
      "thay đổi kích thước cửa sổ về cực tiểu, cực đại và tùy chỉnh",
      "thay đổi kích thước cửa sổ về cực tiểu, cực đại và trung bình",
      "thay đổi kích thước cửa sổ về cực tiểu, clear screen và tùy chỉnh",
      "thay đổi kích thước cửa sổ về cực tiểu, cực đại và màn ảnh rộng"
    ],
    "answer": 0,
    "explain": "Dấu gạch ngang (Minimize) thu nhỏ về Taskbar, ô vuông (Maximize/Restore Down) phóng to cực đại hoặc điều chỉnh tùy kích thước."
  },
  {
    "q": "Màn hình làm việc chuẩn của MS Word 2007 là:",
    "options": [
      "Outline",
      "Print Layout",
      "Web Layout",
      "Normal"
    ],
    "answer": 1,
    "explain": "Print Layout là chế độ hiển thị mặc định và chuẩn nhất trong MS Word khi soạn thảo."
  },
  {
    "q": "Trong MS Word 2007 để thiết lập thư mục lưu văn bản mặc định ta cần thực hiện:",
    "options": [
      "Tại menu Office Button chọn Word Options chọn Customize Ribbon trong ô Default file location: chọn thư mục muốn mặc định",
      "Tại menu Office Button chọn Word Options chọn Display trong ô Default file location: chọn thư mục muốn mặc định",
      "Tại menu Office Button chọn Word Options chọn Save trong ô Default file location: chọn thư mục muốn mặc định",
      "Tại menu Office Button chọn Word Options chọn General trong ô Default file location: chọn thư mục muốn mặc định"
    ],
    "answer": 2,
    "explain": "Vào Office Button -> Word Options -> thẻ Save -> thay đổi đường dẫn tại ô 'Default file location'."
  },
  {
    "q": "Trong MS Word 2007, để đóng tập tin, ta bấm tổ hợp phím:",
    "options": [
      "Ctrl + Shift + W",
      "Ctrl + W",
      "Ctrl + O",
      "Ctrl + S"
    ],
    "answer": 1,
    "explain": "Ctrl + W dùng để đóng tập tin tài liệu hiện tại (Close) mà không thoát ứng dụng."
  },
  {
    "q": "Trong soạn thảo Word 2007, công dụng của tổ hợp phím Ctrl+O là:",
    "options": [
      "Đóng tệp tin đang mở",
      "Mở tệp tin đã có",
      "Lưu tệp tin vào đĩa",
      "Mở một tệp tin mới"
    ],
    "answer": 1,
    "explain": "Ctrl + O (Open) dùng để mở một tập tin đã có sẵn trong máy tính."
  },
  {
    "q": "Trong MS Word 2007 để mở một tệp tin đã có ta gọi lệnh gì?",
    "options": [
      "Tại menu Office Button chọn Open",
      "Tại menu Page Layout chọn Open",
      "Tại menu Home chọn Open",
      "Tại menu View chọn Open"
    ],
    "answer": 0,
    "explain": "Lệnh Open nằm trong thực đơn Office Button."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word 2007, để phóng to hay thu nhỏ văn bản đang thực hiện thì chọn:",
    "options": [
      "menu View chọn Zoom sau đó chọn tỉ lệ phần trăm muốn hiển thị văn bản",
      "menu Home chọn Zoom sau đó chọn tỉ lệ phần trăm muốn hiển thị văn bản",
      "menu Review chọn Zoom sau đó chọn tỉ lệ phần trăm muốn hiển thị văn bản",
      "Cả phương án 1 và phương án 3 đều đúng"
    ],
    "answer": 0,
    "explain": "Công cụ Zoom (Phóng to/Thu nhỏ) nằm trong thẻ View."
  },
  {
    "q": "Có thể sao chép một phần nội dung từ các tệp tin định dạng khác (bảng tính, trang trình chiếu, văn bản tạo từ các phần mềm khác) thành văn bản làm việc bằng cách",
    "options": [
      "sao chép (copy) nội dung từ bảng tính, trang trình chiếu,...để dán (paste) vào văn bản làm việc",
      "di chuyển (move) nội dung từ bảng tính, trang trình chiếu,...để dán (paste) vào văn bản làm việc",
      "cắt (cut) nội dung từ bảng tính, trang trình chiếu,...để dán (paste) vào văn bản làm việc",
      "xóa (delete) nội dung từ bảng tính, trang trình chiếu,...để dán (paste) vào văn bản làm việc"
    ],
    "answer": 0,
    "explain": "Sao chép (Copy) giúp tạo bản sao dữ liệu từ ứng dụng khác rồi Dán (Paste) vào văn bản đang làm việc."
  },
  {
    "q": "Trong MS Word 2007, để tạo một tệp tin mới ta bấm tổ hợp phím nào?",
    "options": [
      "Ctrl + S",
      "Ctrl + Y",
      "Ctrl + N",
      "Ctrl + Z"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím Ctrl + N (New) dùng để tạo văn bản mới."
  },
  {
    "q": "Trong MS Word 2007 để chèn một ký tự đặc biệt vào văn bản ta gọi lệnh gì?",
    "options": [
      "Tại menu Insert, chọn QuickPart",
      "Tại menu Insert, chọn Equation",
      "Tại menu Insert, chọn Symbol",
      "Tại menu Insert, chọn WordArt"
    ],
    "answer": 2,
    "explain": "Để chèn ký tự đặc biệt, chọn Insert -> Symbol."
  },
  {
    "q": "Khi mở một tệp văn bản A trong MS Word, thay đổi nội dung, rồi dùng chức năng Save As để ghi với tên mới, tệp văn bản A sẽ",
    "options": [
      "Thay đổi nội dung",
      "Bị xoá",
      "Không thay đổi",
      "Bị thay đổi tên"
    ],
    "answer": 2,
    "explain": "Save As sẽ tạo ra một tệp mới độc lập với tên mới, tệp gốc A vẫn giữ nguyên nội dung chưa chỉnh sửa."
  },
  {
    "q": "Trong MS Word 2007, để lưu văn bản đang thực hiện thì bấm tổ hợp phím:",
    "options": [
      "Ctrl + S",
      "Ctrl + X",
      "Ctrl + Y",
      "Ctrl + Z"
    ],
    "answer": 0,
    "explain": "Phím tắt Ctrl + S (Save) dùng để lưu tài liệu."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word 2007, để lưu văn bản đang thực hiện với một tên mới thì chọn:",
    "options": [
      "menu Home / Save As",
      "menu Office Button/ Save",
      "menu Office Button / Save As",
      "menu View / Save As"
    ],
    "answer": 2,
    "explain": "Để lưu tập tin dưới dạng tên mới ta vào Office Button -> Save As."
  },
  {
    "q": "Khi mở một tệp văn bản A trong MS Word, thay đổi nội dung, Save, rồi dùng chức năng Save As để ghi với tên mới, tệp văn bản A sẽ",
    "options": [
      "Thay đổi nội dung",
      "Bị xoá",
      "Không thay đổi",
      "Bị thay đổi tên"
    ],
    "answer": 0,
    "explain": "Vì trước khi dùng Save As, người dùng đã thực hiện thao tác 'Save' nên tệp gốc A đã ghi nhận các nội dung thay đổi đó."
  },
  {
    "q": "Mặc định, tài liệu của MS Word 2007 được lưu với định dạng là:",
    "options": [
      "*.DOTX",
      "*.DOC",
      "*.EXE",
      "*.DOCX"
    ],
    "answer": 3,
    "explain": "Định dạng tập tin mặc định của MS Word 2007 là đuôi .docx."
  },
  {
    "q": "Trong MS Word 2007 để mở nhiều văn bản cùng lúc ta thực hiện:",
    "options": [
      "Tại menu Office Button, chọn Open Nhấp chọn các tập tin cần mở rồi chọn Open",
      "Tại menu Office Button, chọn Save Nhấp chọn các tập tin cần mở rồi chọn Open",
      "Tại menu Office Button, chọn Save as nhấp chọn các tập tin cần mở rồi chọn Open",
      "Tại menu View chọn Open Nhấp chọn các tập tin cần mở rồi chọn Open"
    ],
    "answer": 0,
    "explain": "Mở hộp thoại Open từ Office Button, giữ Ctrl/Shift chọn nhiều file rồi nhấn Open."
  },
  {
    "q": "Trong MS Word 2007 để sắp xếp nhiều tệp văn bản đang mở ta thực hiện:",
    "options": [
      "Tại menu View chọn Split",
      "Tại menu View chọn Arrange All",
      "Tại menu View chọn Switch Windows",
      "Tại menu Review chọn Arrange All"
    ],
    "answer": 1,
    "explain": "Lệnh Arrange All thuộc thẻ View giúp sắp xếp tất cả các cửa sổ tài liệu đang mở trên màn hình."
  },
  {
    "q": "Trong MS Word 2007 để chuyển từ tệp văn bản này sang tệp văn bản khác đang mở ta thực hiện:",
    "options": [
      "Tại menu Review chọn Switch Windows",
      "Tại menu Home chọn Switch Windows",
      "Tại menu View chọn Switch Windows",
      "Tại menu Page Layout chọn Switch Windows"
    ],
    "answer": 2,
    "explain": "Chức năng Switch Windows nằm trong thẻ View dùng để chuyển đổi nhanh giữa các tài liệu đang mở."
  },
  {
    "q": "Khi thao tác trong MS Word 2007, thông báo \" The file....already exist\" xuất hiện khi nào?",
    "options": [
      "Khi lưu văn bản với tên file trùng với một file đã có trong thư mục lựa chọn",
      "Không chọn một phông chữ (font) mà nó không tồn tại trong hệ thống",
      "Khi đóng văn bản nhưng văn bản chưa được lưu",
      "Không đặt tên file khi lưu văn bản"
    ],
    "answer": 0,
    "explain": "Thông báo 'already exists' (đã tồn tại) báo hiệu tên tệp bạn chọn bị trùng với một tệp đã có từ trước trong thư mục đó."
  },
  {
    "q": "Để xóa một văn bản (cho vào thư mục thùng rác), ta tìm đến và chọn file cần xóa, click chuột phải",
    "options": [
      "rồi click chọn vào Cut.",
      "rồi click chọn vào Delete.",
      "rồi click chọn vào Move.",
      "rồi click chọn vào Rename."
    ],
    "answer": 1,
    "explain": "Lựa chọn Delete dùng để xóa tệp tin và đưa nó vào thùng rác Recycle Bin."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word, để đánh dấu lựa chọn một từ, ta thực hiện :",
    "options": [
      "Nhấp đúp chuột vào từ cần chọn",
      "Bấm tổ hợp phím Ctrl + A",
      "Nhấp chuột vào từ cần chọn",
      "Bấm phím Enter"
    ],
    "answer": 0,
    "explain": "Nhấp đúp (Double click) chuột vào một từ sẽ bôi đen/chọn từ đó."
  },
  {
    "q": "Khi đang soạn thảo văn bản Word 2007, để đánh dấu lựa chọn cả văn bản, ta thực hiện :",
    "options": [
      "Bấm tổ hợp phím Ctrl + A",
      "Bấm tổ hợp phím Shift + A",
      "Bấm tổ hợp phím Alt + A",
      "Bấm tổ hợp phím Ctrl+Alt + A"
    ],
    "answer": 0,
    "explain": "Ctrl + A (Select All) chọn toàn bộ nội dung văn bản."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word 2007, để tắt dấu chọn khối văn bản (tô đen), ta thực hiện:",
    "options": [
      "Bấm phím Enter",
      "Bấm phím Space",
      "Bấm phím mũi tên di chuyển",
      "Bấm phím Tab"
    ],
    "answer": 2,
    "explain": "Nhấn phím mũi tên di chuyển bất kỳ sẽ di chuyển con trỏ và hủy chọn (tắt bôi đen) khối văn bản mà không làm mất/thay đổi ký tự."
  },
  {
    "q": "Để di chuyển con trò về cuối dòng ta dùng phím:",
    "options": [
      "Shift + End",
      "Home",
      "End",
      "Ctrl + End"
    ],
    "answer": 2,
    "explain": "Phím End di chuyển con trỏ về vị trí cuối cùng của dòng hiện tại."
  },
  {
    "q": "Trong MS Word 2007, để chuyển con trỏ xuống phía dưới 1 trang ta dùng phím:",
    "options": [
      "Backspace",
      "Home",
      "Page Up",
      "Page Down"
    ],
    "answer": 3,
    "explain": "Phím Page Down chuyển màn hình/con trỏ xuống phía dưới một trang."
  },
  {
    "q": "Trong soạn thảo MS Word 2007, tổ hợp phím nào cho phép ngay lập tức đưa con trỏ về cuối văn bản?",
    "options": [
      "Shift+End",
      "Alt+End",
      "Ctrl+End",
      "Ctrl+Alt+End"
    ],
    "answer": 2,
    "explain": "Tổ hợp Ctrl + End nhảy trực tiếp về vị trí cuối cùng của toàn bộ tài liệu."
  },
  {
    "q": "Trong soạn thảo MS Word 2007, tổ hợp phím nào cho phép ngay lập tức đưa con trỏ về đầu văn bản?",
    "options": [
      "Ctrl+Alt+Home",
      "Ctrl+Home",
      "Alt+Home",
      "Shift+Home"
    ],
    "answer": 1,
    "explain": "Tổ hợp Ctrl + Home nhảy trực tiếp về vị trí đầu tiên của tài liệu."
  },
  {
    "q": "Để chuyển con trỏ lên phía trên 1 trang màn hình ta dùng phím:",
    "options": [
      "Home",
      "Backspace",
      "Page Down",
      "Page up"
    ],
    "answer": 3,
    "explain": "Phím Page Up giúp di chuyển màn hình/con trỏ lên trên 1 trang."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word 2007, để con trỏ nhảy đến một trang nào đó, ta bấm phím nào .... Rồi gõ số trang:",
    "options": [
      "F2",
      "F7",
      "F5",
      "F3"
    ],
    "answer": 2,
    "explain": "Phím F5 mở hộp thoại Go To, cho phép nhập số trang để chuyển nhanh tới trang đó."
  },
  {
    "q": "Trong MS Word 2007, tổ hợp phím nào cho phép chọn từ vị trí hiện tại về đầu văn bản ?",
    "options": [
      "Shift+Home",
      "Alt+Home",
      "Ctrl + Shift + Home",
      "Ctrl+Alt+Home"
    ],
    "answer": 2,
    "explain": "Ctrl + Shift + Home tô đen/chọn từ vị trí con trỏ hiện tại lên đến đầu văn bản."
  },
  {
    "q": "Trong MS Word 2007, phím Delete có chức năng:",
    "options": [
      "Xóa ký tự phía sau con trỏ",
      "Xóa ký tự phía trước con trỏ",
      "Lùi văn bản vào với một khoảng cách cố định",
      "Di chuyển con trỏ về đầu dòng"
    ],
    "answer": 0,
    "explain": "Phím Delete xóa ký tự đứng ngay phía sau (bên phải) con trỏ soạn thảo."
  },
  {
    "q": "Trong MS Word, Khi soạn thảo văn bản, giả sử ta cần thay thế chữ “tp.hcm - việt nam” thành chữ “Bình Định - Việt Nam” ta thực hiện lệnh",
    "options": [
      "Insert / Replace",
      "Home / Replace",
      "Insert / Find",
      "Home / Find"
    ],
    "answer": 1,
    "explain": "Chức năng tìm kiếm và thay thế Replace nằm ở nhóm Editing trong thẻ Home."
  },
  {
    "q": "Trong MS Word 2007, để tìm kiếm và thay thế ta bấm tổ hợp phím gì?",
    "options": [
      "Shift + F",
      "Ctrl + R",
      "Ctrl + H",
      "Shift + R"
    ],
    "answer": 2,
    "explain": "Ctrl + H là phím tắt mở nhanh hộp thoại Find and Replace."
  },
  {
    "q": "Trong MS Word 2007, trong khi soạn thảo văn bản, nếu bấm phím số 1 khi có một khối văn bản đang được chọn thì",
    "options": [
      "Khối văn bản đó biến mất",
      "Số 1 sẽ chèn vào khối văn bản đang chọn",
      "Khối văn bản đó biến mất và thay thế vào đó là số 1",
      "Số 1 sẽ chèn vào sau khối văn bản đang chọn"
    ],
    "answer": 2,
    "explain": "Khi một khối văn bản được bôi đen, bất kỳ ký tự nào gõ vào (bao gồm số 1) sẽ ghi đè lên và thay thế toàn bộ khối văn bản đó."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word 2007, để dán một đoạn văn bản từ Clipboard thì bấm tổ hợp phím:",
    "options": [
      "Ctrl + V",
      "Ctrl + C",
      "Ctrl + Y",
      "Ctrl + Z"
    ],
    "answer": 0,
    "explain": "Tổ hợp Ctrl + V (Paste) dùng để dán dữ liệu đã lưu trong Clipboard."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word 2007, để cắt đoạn văn bản đã được chọn (bôi đen) vào Clipboard thì bấm tổ hợp phím:",
    "options": [
      "Ctrl + V",
      "Ctrl + X",
      "Ctrl + Y",
      "Ctrl + Z"
    ],
    "answer": 1,
    "explain": "Tổ hợp Ctrl + X (Cut) dùng để cắt đoạn văn bản bôi đen vào bộ nhớ tạm Clipboard."
  },
  {
    "q": "Khi đang soạn thảo văn bản MS Word 2007, để sao chép một phần văn bản đã được chọn (bôi đen) vào Clipboard thì bấm tổ hợp phím:",
    "options": [
      "Ctrl + V",
      "Ctrl + C",
      "Ctrl + Y",
      "Ctrl + Z"
    ],
    "answer": 1,
    "explain": "Tổ hợp Ctrl + C (Copy) sao chép phần văn bản đang chọn vào Clipboard."
  },
  {
    "q": "Trong MS Word 2007, để phục hồi thao tác vừa thực hiện thì bấm tổ hợp phím:",
    "options": [
      "Ctrl + V",
      "Ctrl + X",
      "Ctrl + Y",
      "Ctrl + Z"
    ],
    "answer": 3,
    "explain": "Tổ hợp Ctrl + Z (Undo) dùng để hoàn tác/phục hồi thao tác vừa thực hiện trước đó."
  },
  {
    "q": "Trong MS Word 2007 để bật/tắt chế độ kiểm tra chính tả, ngữ pháp tự động, ta thực hiện:",
    "options": [
      "Vào menu Office Button/ Word Options / Proofing / chọn/bỏ chọn Check spelling as you type/Check grammar with spelling",
      "Vào menu Office Button/ Word Options / General / chọn/bỏ chọn Check spelling as you type/Check grammar with spelling",
      "Vào menu Office Button/ Word Options / Advanced / chọn/bỏ chọn Check spelling as you type/Check grammar with spelling",
      "Vào menu Office Button/ Word Options / Display / chọn/bỏ chọn Check spelling as you type/Check grammar with spelling"
    ],
    "answer": 0,
    "explain": "Cài đặt kiểm tra chính tả và ngữ pháp nằm trong mục Proofing của Word Options."
  },
  {
    "q": "Các công cụ định dạng trong văn bản như: Font, paragraph, copy, paste, Bullets and numbering..... nằm ở thanh thực đơn nào?",
    "options": [
      "Home",
      "Insert",
      "Page Layout",
      "References"
    ],
    "answer": 0,
    "explain": "Các công cụ định dạng cơ bản như Font, Paragraph, Clipboard (Copy, Paste) thuộc thẻ Home."
  },
  {
    "q": "Trong MS Word 2007, để có đường gạch chân của đoạn văn bản ta dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + U",
      "Shift + U",
      "Atl + U",
      "Ctrl + B"
    ],
    "answer": 0,
    "explain": "Ctrl + U (Underline) tạo đường gạch chân cho văn bản."
  },
  {
    "q": "Chọn mệnh đề SAI trong các mệnh đề dưới đây khi nói về MS Word 2007?",
    "options": [
      "Biểu tượng lệnh Format Painter dùng để sao chép định dạng.",
      "Tổ hợp phím Ctrl + F4 có tác dụng đóng cửa sổ văn bản đang mở.",
      "Tổ hợp phím Alt + F4 có tác dụng thoát khỏi Word khi đang soạn thảo.",
      "Nhấn tổ hợp phím Ctrl + F có tác dụng bật hộp thoại Font"
    ],
    "answer": 3,
    "explain": "Mệnh đề 4 SAI vì Ctrl + F dùng để mở hộp thoại Tìm kiếm (Find), không phải mở hộp thoại Font (mở hộp thoại Font là Ctrl + D)."
  },
  {
    "q": "Trong MS Word, để tăng cỡ chữ, ta sử dụng tổ hợp phím",
    "options": [
      "Shift + ]",
      "Ctrl + [",
      "Shift + [",
      "Ctrl + ]"
    ],
    "answer": 3,
    "explain": "Phím tắt Ctrl + ] dùng để tăng kích thước font chữ thêm 1pt."
  },
  {
    "q": "Trong MS Word, để giảm cỡ chữ, ta sử dụng tổ hợp phím",
    "options": [
      "Shift + ]",
      "Ctrl + [",
      "Shift + [",
      "Ctrl + ]"
    ],
    "answer": 1,
    "explain": "Phím tắt Ctrl + [ dùng để giảm kích thước font chữ đi 1pt."
  },
  {
    "q": "Khi soạn thảo bảng mã .... thì phải chọn font có tên \"Time New Roman\" thì mới gõ được tiếng Việt đúng?",
    "options": [
      "TCVN 3",
      "Telex",
      "VietWare",
      "Unicode"
    ],
    "answer": 3,
    "explain": "Font 'Times New Roman' chuẩn quốc tế đi liền với bảng mã Unicode."
  },
  {
    "q": "Trong MS Word 2007, để xóa bỏ toàn bộ định dạng của phần văn bản đang chọn, ta bấm tổ hợp phím gì?",
    "options": [
      "Ctrl + Space",
      "Ctrl + Delete",
      "Ctrl + Enter",
      "Shift + Space"
    ],
    "answer": 0,
    "explain": "Tổ hợp Ctrl + Space (Phím khoảng trắng) dùng để xóa tất cả định dạng thủ công và đưa về định dạng mặc định."
  },
  {
    "q": "Trong Ms Word 2007 sau khi định dạng in nghiêng cho một đoạn văn bản để xóa định dạng in nghiêng đó thì bấm tổ hợp phím nào?",
    "options": [
      "Ctrl + V",
      "Ctrl + S",
      "Ctrl + I",
      "Ctrl + B"
    ],
    "answer": 2,
    "explain": "Phím Ctrl + I bật/tắt (thêm/bỏ) thuộc tính in nghiêng (Italic) cho đoạn văn bản đang chọn."
  },
  {
    "q": "Trong Ms Word 2007, để định dạng in đậm cho một đoạn văn bản thì bấm tổ hợp phím nào?",
    "options": [
      "Ctrl + V",
      "Ctrl + S",
      "Ctrl + I",
      "Ctrl + B"
    ],
    "answer": 3,
    "explain": "Ctrl + B (Bold) dùng để áp dụng định dạng in đậm."
  },
  {
    "q": "Trong MS Word 2007, để tạo chỉ số trên ta dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + =",
      "Ctrl + Alt + =",
      "Ctrl + Shift + =",
      "Shift + ="
    ],
    "answer": 2,
    "explain": "Ctrl + Shift + = (hoặc Ctrl + Shift + +) dùng để tạo chỉ số trên (Superscript, ví dụ $X^2$)."
  },
  {
    "q": "Trong MS Word 2007, để tạo chỉ số dưới ta dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + =",
      "Ctrl + Alt + =",
      "Ctrl + Shift + =",
      "Shift + ="
    ],
    "answer": 0,
    "explain": "Ctrl + = dùng để tạo chỉ số dưới (Subscript, ví dụ $H_2O$)."
  },
  {
    "q": "Để thay đổi màu ký tự trong MS Word 2007, trong menu Home, chọn vào",
    "options": [
      "Font color và chọn màu .",
      "Text highlight color và chọn màu.",
      "Change case và chọn màu.",
      "Font và chọn màu."
    ],
    "answer": 0,
    "explain": "Biểu tượng Font Color trong nhóm Font (thẻ Home) dùng để chọn màu cho chữ/ký tự."
  },
  {
    "q": "Để thay đổi màu nền văn bản trong Word 2007, tại Home tab, chọn vào",
    "options": [
      "Font color và chọn màu .",
      "Text highlight color và chọn màu.",
      "Change case và chọn màu.",
      "Font và chọn màu."
    ],
    "answer": 1,
    "explain": "Công cụ Text Highlight Color tô màu nền (dạ quang) cho khối văn bản."
  },
  {
    "q": "Trong MS Word 2007, để đổi chữ thường sang chữ hoa và ngược lại ta dùng tổ hợp phím nào?",
    "options": [
      "Shift + F1",
      "Shift + F3",
      "Shift + U",
      "Ctrl + F3"
    ],
    "answer": 1,
    "explain": "Shift + F3 dùng để thay đổi kiểu hoa/thường (Change Case) cho khối văn bản được chọn."
  },
  {
    "q": "Style là một tập hợp các định dạng văn bản của một đoạn cho trước, có tên gọi và",
    "options": [
      "có thể được gán bởi một tổ hợp phím nóng.",
      "có thể được gán bởi một user name.",
      "có thể được gán bởi admin.",
      "có thể được gán bởi một phím chức năng (function key)."
    ],
    "answer": 0,
    "explain": "Một Style khi định dạng có thể được gán một tổ hợp phím tắt/phím nóng (Shortcut Key) riêng để áp dụng nhanh."
  },
  {
    "q": "Để xoá một Style trong hộp danh sách Styles, chọn style cần xóa; click vào mũi tên chỉ xuống rồi chọn vào",
    "options": [
      "Modify ...",
      "Clear ...",
      "Delete ...",
      "Update ..."
    ],
    "answer": 2,
    "explain": "Nhấp chuột vào menu thả xuống của Style và chọn Delete... để xóa khỏi danh sách."
  },
  {
    "q": "Để tạo Style trong Word MS 2007 ta vào menu Home, tại nhóm styles chọn mũi tên trỏ xuống, Click vào",
    "options": [
      "New style .",
      "Clear formatting.",
      "Apply styles.",
      "Option."
    ],
    "answer": 0,
    "explain": "Chọn nút New Style (hoặc Create a Style) để khởi tạo một quy chuẩn định dạng mới."
  },
  {
    "q": "Trong khi soạn thảo văn bản trong MS Word, nếu muốn ngắt trang ta:",
    "options": [
      "Bấm phím Enter",
      "Bấm tổ hợp phím Shift + Enter",
      "Bấm tổ hợp phím Ctrl + Enter",
      "Word tự động không cần bấm phím"
    ],
    "answer": 2,
    "explain": "Tổ hợp Ctrl + Enter dùng để thực hiện lệnh ngắt trang chủ động (Page Break)."
  },
  {
    "q": "Trong khi soạn thảo văn bản, nếu kết thúc 1 đoạn (Paragraph) và muốn sang 1 đoạn mới, ta thực hiện:",
    "options": [
      "Bấm tổ hợp phím Ctrl - Enter",
      "Bấm tổ hợp phím Shift - Enter",
      "Bấm phím Enter",
      "Word tự động, không cần bấm phím"
    ],
    "answer": 2,
    "explain": "Bấm phím Enter để kết thúc một đoạn văn bản và chuyển sang một đoạn (Paragraph) mới."
  },
  {
    "q": "Trong Word để xuống dòng mà không qua đoạn (paragraph) mới thì:",
    "options": [
      "Bấm tổ hợp phím Ctrl+Enter",
      "Bấm phím Enter",
      "Bấm tổ hợp phím Shift+Enter",
      "Bấm tổ hợp phím Alt+Enter"
    ],
    "answer": 2,
    "explain": "Bấm Shift + Enter giúp ngắt dòng (Line Break) ngay trong cùng một đoạn văn mà không tạo đoạn mới."
  },
  {
    "q": "Trong MS Word 2007, để canh đều hai bên đoạn văn bản ta dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + F",
      "Ctrl + C",
      "Shift + J",
      "Ctrl + J"
    ],
    "answer": 3,
    "explain": "Tổ hợp phím Ctrl + J (Justify) dùng để căn đều hai bên cho đoạn văn bản."
  },
  {
    "q": "Trong MS Word 2007, để canh trái đoạn văn bản ta dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + F",
      "Ctrl + L",
      "Shift + L",
      "Ctrl + J"
    ],
    "answer": 1,
    "explain": "Tổ hợp phím Ctrl + L (Align Left) dùng để căn lề trái cho đoạn văn bản."
  },
  {
    "q": "Trong MS Word 2007, để canh phải đoạn văn bản ta dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + R",
      "Ctrl + L",
      "Shift + L",
      "Ctrl + J"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím Ctrl + R (Align Right) dùng để căn lề phải cho đoạn văn bản."
  },
  {
    "q": "Trong MS Word 2007, để canh giữa đoạn văn bản ta dùng tổ hợp phím nào?",
    "options": [
      "Ctrl + R",
      "Ctrl + L",
      "Shift + L",
      "Ctrl + E"
    ],
    "answer": 3,
    "explain": "Tổ hợp phím Ctrl + E (Center) dùng để căn giữa cho đoạn văn bản."
  },
  {
    "q": "Trong MS Word 2007, để thụt đầu dòng cho đoạn văn bản ta thiết lập tại?",
    "options": [
      "Ô Before và After trong menu Page Layout",
      "Ô Line Spacing trong menu Page Layout",
      "Ô Left và Right trong menu Page Layout",
      "Ô Indent trong menu Page Layout"
    ],
    "answer": 3,
    "explain": "Thẻ Page Layout có nhóm Indent cho phép điều chỉnh khoảng cách thụt lề của đoạn văn."
  },
  {
    "q": "Trong MS Word 2007, để nhảy đến điểm dừng tab đã được thiết lập trong văn bản ta dùng phím nào?",
    "options": [
      "Ctrl",
      "Backspace",
      "Shift",
      "Tab"
    ],
    "answer": 3,
    "explain": "Nhấn phím Tab để di chuyển con trỏ soạn thảo đến các điểm dừng Tab (Tab stop) trên thước."
  },
  {
    "q": "Ký hiệu tab | này trên thanh thước có nghĩa là gì?",
    "options": [
      "Bar tab",
      "Hanging indent",
      "Decimal Tab",
      "First line indent"
    ],
    "answer": 0,
    "explain": "Ký hiệu đường dọc | trên thanh thước đại diện cho Bar Tab (chèn một đường kẻ dọc tại vị trí tab)."
  },
  {
    "q": "Trong MS Word 2007, để con trỏ nhảy đến vị trí tab đã thiết lập trong bảng, ta nhấn phím",
    "options": [
      "Tab",
      "Ctr + Tab",
      "Shift + Tab",
      "Tất cả các phương án trên đều sai"
    ],
    "answer": 1,
    "explain": "Trong ô của Bảng (Table), phím Tab dùng để chuyển sang ô tiếp theo, nên phải dùng Ctrl + Tab để nhảy đến vị trí dừng Tab."
  },
  {
    "q": "Trong MS Word 2007, để thay đổi khoảng cách giữa hai đoạn văn bản ta thiết lập tại?",
    "options": [
      "Ô Before và After trong menu Page Layout",
      "Ô Line Spacing trong menu Page Layout",
      "Ô Left và Right trong menu Page Layout",
      "Ô Above và Below trong menu Page Layout"
    ],
    "answer": 0,
    "explain": "Mục Spacing (Before/After) trong menu Page Layout dùng để chỉnh khoảng cách so với đoạn phía trên và phía dưới."
  },
  {
    "q": "Trong MS Word 2007, để giãn khoảng cách giữa các dòng 1.5 Line, cần thực hiện:",
    "options": [
      "Bấm Ctrl + 5 tại dòng đó",
      "Bấm Ctrl + 4 tại dòng đó",
      "Ô Line Spacing trong menu Page Layout",
      "Ô Indent trong menu Page Layout"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím tắt Ctrl + 5 được dùng để thiết lập khoảng cách giữa các dòng là 1.5 line."
  },
  {
    "q": "Trong soạn thảo MS Word 2007, để thêm ký tự đầu đoạn văn bản tự động, ta thực hiện:",
    "options": [
      "Tại menu Home chọn biểu tượng Bullets",
      "Tại menu Insert chọn biểu tượng Bullets",
      "Tại menu Page Layout chọn biểu tượng Bullets",
      "Tại menu View chọn biểu tượng Bullets"
    ],
    "answer": 0,
    "explain": "Biểu tượng Bullets nằm trong nhóm Paragraph ở menu Home."
  },
  {
    "q": "Trong soạn thảo MS Word 2007, để thêm số đầu đoạn văn bản tự động, ta thực hiện:",
    "options": [
      "Tại menu View chọn biểu tượng Numbering",
      "Tại menu Insert chọn biểu tượng Numbering",
      "Tại menu Page Layout chọn biểu tượng Numbering",
      "Tại menu Home chọn biểu tượng Numbering"
    ],
    "answer": 3,
    "explain": "Biểu tượng Numbering nằm trong nhóm Paragraph ở menu Home."
  },
  {
    "q": "Trong soạn thảo MS Word 2007, để tạo đường viền cho đoạn văn bản ta thực hiện:",
    "options": [
      "Tại menu View chọn Border",
      "Tại menu Home chọn Page Borders chọn menu Borders",
      "Tại menu Home chọn Border",
      "Tại menu Review chọn Border"
    ],
    "answer": 2,
    "explain": "Tính năng tạo đường viền Border cho đoạn văn bản nằm trong nhóm Paragraph ở menu Home."
  },
  {
    "q": "Trong soạn thảo MS Word 2007, để tạo màu nền cho đoạn văn bản ta thực hiện:",
    "options": [
      "Tại menu View chọn Shading",
      "Tại menu Home chọn Shading",
      "Tại menu Page Layout chọn Shading",
      "Tại menu Review chọn Shading"
    ],
    "answer": 1,
    "explain": "Biểu tượng thùng sơn Shading dùng để đổ màu nền nằm trong nhóm Paragraph ở menu Home."
  },
  {
    "q": "Để áp dụng một kiểu dáng Style trong Word 2007 ta đặt con trỏ tại đoạn văn bản cần áp dụng . Vào thực đơn Home, tại nhóm styles chọn mũi tên trỏ xuống, click vào",
    "options": [
      "Create a style .",
      "Clear formatting.",
      "Name style.",
      "Option."
    ],
    "answer": 2,
    "explain": "Chọn Name style (tên kiểu kiểu dáng Style tương ứng) trong danh sách Styles để áp dụng cho đoạn văn."
  },
  {
    "q": "Trong soạn thảo Ms Word 2007, để sao chép định dạng từ đoạn văn bản này sang đoạn văn bản khác ta thực hiện:",
    "options": [
      "Tại menu Home chọn Format Painter",
      "Tại menu Home nhóm Font chọn Format Painter",
      "Tại menu Home nhóm Style chọn Format Painter",
      "Cả phương án 1 và phương án 3 đều đúng"
    ],
    "answer": 0,
    "explain": "Công cụ Format Painter nằm trong nhóm Clipboard trên thanh công cụ của menu Home."
  },
  {
    "q": "Trong MS Word 2007, để tách 1 bảng thành 2 bảng ta đặt con trỏ tại dòng muốn tách và thực hiện:",
    "options": [
      "Tại menu Design chọn Split Table",
      "Tại menu Design chọn Merger Cell",
      "menu Layout chọn Merger Cell",
      "Tại menu Layout chọn Split Table"
    ],
    "answer": 3,
    "explain": "Để tách bảng, chọn tab Layout (thuộc Table Tools) và nhấn chọn Split Table."
  },
  {
    "q": "Trong MS Word 2007, nhóm chức năng nào dưới đây không thuộc menu Insert?",
    "options": [
      "Illustrations",
      "Links",
      "Text",
      "Table of Contents"
    ],
    "answer": 3,
    "explain": "Table of Contents (Mục lục) thuộc menu References, không thuộc menu Insert."
  },
  {
    "q": "Trong soạn thảo MS Word 2007, để chèn một Bảng vào văn bản ta thực hiện:",
    "options": [
      "Tại menu Home chọn Table",
      "Tại menu Insert chọn Table",
      "Tại menu Insert chọn Shapes",
      "Tại menu Home chọn shapes"
    ],
    "answer": 1,
    "explain": "Lệnh chèn Bảng (Table) nằm trong nhóm Tables thuộc menu Insert."
  },
  {
    "q": "Trong chế độ tạo bảng (Table) của phần mềm MS Word 2007, để tách một ô thành nhiều ô, ta thực hiện:",
    "options": [
      "Tại menu Design chọn Split Cell",
      "Tại menu Design chọn Merger Cell",
      "Tại menu Layout chọn Merger Cell",
      "Tại menu Layout chọn Split Cell"
    ],
    "answer": 3,
    "explain": "Công cụ Split Cells (tách ô) nằm trong tab Layout của Table Tools."
  },
  {
    "q": "Trong chế độ tạo bảng (Table) của phần mềm MS Word 2007, để gộp nhiều ô thành 1 ô, ta thực hiện:",
    "options": [
      "Tại menu Design chọn Split Cell",
      "Tại menu Design chọn Merger Cell",
      "Tại menu Layout chọn Merger Cell",
      "Tại menu Layout chọn Split Cell"
    ],
    "answer": 2,
    "explain": "Công cụ Merge Cells (gộp ô) nằm trong tab Layout của Table Tools."
  },
  {
    "q": "Trong MS Word 2007, thao tác Shift + Tab trong bảng biểu có chức năng:",
    "options": [
      "Đưa con trỏ trở về ô đầu tiên của cột hiện tại",
      "Đưa con trỏ trở về ô cuối của cột hiện tại",
      "Đưa con trỏ trở về ô trước đó",
      "Đưa con trỏ về ô đầu của dòng hiện tại"
    ],
    "answer": 2,
    "explain": "Trong bảng, phím Tab chuyển đến ô tiếp theo, còn tổ hợp Shift + Tab chuyển con trỏ lùi về ô phía trước."
  },
  {
    "q": "Trong MS Word 2007, để đưa con trỏ đến ô tiếp theo trong bảng biểu, ta dùng phím:",
    "options": [
      "Ctrl",
      "Tab",
      "Shift",
      "Ctrl + Tab"
    ],
    "answer": 1,
    "explain": "Nhấn phím Tab để di chuyển con trỏ sang ô tiếp theo ở bên phải trong bảng."
  },
  {
    "q": "Trong MS Word 2007, để lựa chọn toàn bộ một ô trong bảng, ta thực hiện:",
    "options": [
      "Nhấn đúp chuột vào ô đó",
      "Bôi đen văn bản đang có trong ô đó",
      "Nhấn chuột ở vị trí góc trái dưới của ô đó",
      "Nhấn chuột ở bên trên ô đó"
    ],
    "answer": 2,
    "explain": "Rê chuột tới góc trái dưới bên trong ô cho đến khi xuất hiện mũi tên đen nhỏ rồi click chuột để chọn toàn bộ ô."
  },
  {
    "q": "Trong MS Word 2007, để lựa chọn toàn bộ một dòng trong bảng, ta thực hiện:",
    "options": [
      "Nhấn đúp chuột vào dòng đó",
      "Bôi đen văn bản trong ô đầu tiên của dòng đó",
      "Nhấn chuột ở vị trí đầu dòng đó",
      "Nhấn chuột ở bên trên dòng đó"
    ],
    "answer": 2,
    "explain": "Nhấp chuột ở khoảng trống ngay bên ngoài lề trái của đầu dòng trong bảng để chọn toàn bộ dòng."
  },
  {
    "q": "Trong MS Word 2007, để lựa chọn toàn bộ một cột trong bảng, ta thực hiện:",
    "options": [
      "Nhấn đúp chuột vào cột đó",
      "Bôi đen văn bản đang có trong ô đầu tiên của cột đó",
      "Nhấn chuột ở vị trí đầu cột đó",
      "Nhấn chuột ở bất kỳ vị trí nào trên cột đó"
    ],
    "answer": 2,
    "explain": "Rê chuột lên viền trên cùng của cột cho đến khi biến thành mũi tên đen trỏ xuống rồi nhấp chuột."
  },
  {
    "q": "Trong MS Word 2007, để xóa 1 dòng khỏi bảng, ta cần thực hiện:",
    "options": [
      "Tại menu Design chọn Delete",
      "Tại menu Layout chọn Delete chọn Delete Table",
      "Tại menu Design chọn Delete chọn Delete Table",
      "Tại menu Layout chọn Delete chọn Delete Row"
    ],
    "answer": 3,
    "explain": "Để xóa dòng, chọn tab Layout > Delete > Delete Rows."
  },
  {
    "q": "Trong MS Word 2007, để xóa 1 cột khỏi bảng, ta cần thực hiện:",
    "options": [
      "Tại menu Design chọn Delete",
      "Tại menu Layout chọn Delete chọn Delete Table",
      "Tại menu Design chọn Delete chọn Delete Columns",
      "Tại menu Layout chọn Delete chọn Delete Columns"
    ],
    "answer": 3,
    "explain": "Để xóa cột, chọn tab Layout > Delete > Delete Columns."
  },
  {
    "q": "Trong MS Word 2007, để thêm cột vào bảng, ta cần thực hiện:",
    "options": [
      "Tại menu Design chọn Insert Columns",
      "Tại menu Layout chọn Insert Left",
      "Tại menu Layout chọn Insert Right",
      "Cả phương án 2 và phương án 3 đều đúng"
    ],
    "answer": 3,
    "explain": "Trong tab Layout có các lựa chọn Insert Left (thêm cột bên trái) và Insert Right (thêm cột bên phải)."
  },
  {
    "q": "Trong MS Word 2007, để thêm dòng vào bảng, ta cần thực hiện:",
    "options": [
      "Tại menu Layout chọn Insert Row",
      "Tại menu Layout chọn Insert Above",
      "Tại menu Layout chọn Insert Below",
      "Cả phương án 2 và phương án 3 đều đúng"
    ],
    "answer": 3,
    "explain": "Trong tab Layout có các lựa chọn Insert Above (thêm dòng phía trên) và Insert Below (thêm dòng phía dưới)."
  },
  {
    "q": "Trong chế độ tạo bảng (Table) của phần mềm MS Word 2007, để thay đổi độ rộng của cột, ta thực hiện:",
    "options": [
      "Tại menu Design / Hight",
      "Tại menu Design / Width",
      "Tại menu Layout / Hight",
      "Tại menu Layout / Width"
    ],
    "answer": 3,
    "explain": "Để thay đổi độ rộng cột, truy cập menu Layout > thiết lập kích thước ở mục Width trong nhóm Cell Size."
  },
  {
    "q": "Trong chế độ tạo bảng (Table) của phần mềm MS Word 2007, để thay đổi độ cao của dòng, ta thực hiện:",
    "options": [
      "Tại menu Design chọn Hight",
      "Tại menu Design / Width",
      "Tại menu Layout / Hight",
      "Tại menu Layout / Width"
    ],
    "answer": 2,
    "explain": "Để thay đổi chiều cao dòng, truy cập menu Layout > thiết lập kích thước ở mục Height trong nhóm Cell Size."
  },
  {
    "q": "Để tô màu nền cho một ô trong bảng của MS Word 2007 cần thực hiện chọn ô này và thực hiện tiếp việc chọn màu từ:",
    "options": [
      "Tại menu Design chọn Shading",
      "Tại menu Design chọn Bordes",
      "Tại menu Layout chọn Shading",
      "Tại menu Layout chọn Draw Borders"
    ],
    "answer": 0,
    "explain": "Công cụ tô màu nền bảng Shading nằm ở tab Design thuộc nhóm Table Tools."
  },
  {
    "q": "Trong MS Word 2007, để tạo đường viền cho các ô trong Bảng cần thực hiện chọn các ô này và thực hiện tiếp việc chọn đường viền từ:",
    "options": [
      "Tại menu Design chọn Shading",
      "Tại menu Design chọn Bordes",
      "Tại menu Layout chọn Shading",
      "Tại menu Layout chọn Draw Borders"
    ],
    "answer": 1,
    "explain": "Lệnh tạo đường viền Borders nằm ở tab Design trong nhóm Table Styles."
  },
  {
    "q": "Trong MS Word 2007, để xóa bảng khỏi văn bản, ta cần thực hiện:",
    "options": [
      "Tại menu Design chọn Delete",
      "Tại menu Layout chọn Delete chọn Delete Table",
      "Tại menu Design chọn Delete chọn Delete Table",
      "Tại menu Layout chọn Delete chọn Delete Cells"
    ],
    "answer": 1,
    "explain": "Vào tab Layout > chọn Delete > chọn Delete Table để xóa toàn bộ bảng."
  },
  {
    "q": "Trong MS Word 2007 để chèn chữ nghệ thuật vào văn bản ta thực hiện:",
    "options": [
      "Tại menu Insert, chọn QuickPart",
      "Tại menu Insert, chọn Equation",
      "Tại menu Insert, chọn ClipArt",
      "Tại menu Insert, chọn WordArt"
    ],
    "answer": 3,
    "explain": "Lệnh chèn chữ nghệ thuật WordArt nằm trong nhóm Text thuộc menu Insert."
  },
  {
    "q": "Trong MS Word 2007 để chèn một công thức toán học vào văn bản ta thực hiện:",
    "options": [
      "Tại menu Insert, chọn QuickPart",
      "Tại menu Insert, chọn Equation",
      "Tại menu Insert, chọn ClipArt",
      "Tại menu Insert, chọn WordArt"
    ],
    "answer": 1,
    "explain": "Lệnh chèn công thức toán học Equation nằm trong nhóm Symbols thuộc menu Insert."
  },
  {
    "q": "Trong MS Word 2007 để chèn hình ảnh có sẵn của bộ Office vào văn bản ta thực hiện:",
    "options": [
      "Tại menu Insert, chọn QuickPart",
      "Tại menu Insert, chọn Equation",
      "Tại menu Insert, chọn ClipArt",
      "Tại menu Insert, chọn WordArt"
    ],
    "answer": 2,
    "explain": "Lệnh chèn thư viện ảnh ClipArt nằm trong nhóm Illustrations thuộc menu Insert."
  },
  {
    "q": "Trong MS Word 2007, để chèn 1 sơ đồ vào văn bản ta thực hiện:",
    "options": [
      "Tại menu Insert, chọn Picture",
      "Tại menu Insert, chọn Shapes",
      "Tại menu Insert, chọn SmartArt",
      "Tại menu Insert, chọn WordArt"
    ],
    "answer": 2,
    "explain": "Công cụ chèn các đồ họa sơ đồ thông minh SmartArt nằm trong menu Insert."
  },
  {
    "q": "Khi vẽ hình trong MS Word 2007, để vẽ hình vuông hoặc hình tròn dễ dàng ta ấn phím nào khi vẽ?",
    "options": [
      "Ctrl",
      "Alt",
      "CapsLock",
      "Shift"
    ],
    "answer": 3,
    "explain": "Giữ phím Shift trong khi kéo vẽ bằng công cụ Shape sẽ giúp tạo ra hình vuông hoặc hình tròn hoàn chỉnh."
  },
  {
    "q": "menu Insert trong MS Word 2007 cho phép thực hiện các chức năng:",
    "options": [
      "Thiết lập cài đặt, định dạng cho trang giấy như: Page setup, Page Borders, Page Color, Paragraph,...",
      "Chèn các đối tượng vào trong văn bản như: chèn Picture, WordArt, Equation, Symbol, Chart, Table, Header and footer, Page number,...",
      "Định dạng văn bản như : Chèn chú thích, đánh mục lục tự động, ...",
      "Chức năng kiểm tra lại như ngữ pháp, chính tả..."
    ],
    "answer": 1,
    "explain": "Menu Insert chứa các nhóm chức năng dùng để chèn mọi đối tượng bổ trợ vào văn bản."
  },
  {
    "q": "Trong MS Word 2007, để chọn 1 hình ảnh đã có trong văn bản, ta thực hiện:",
    "options": [
      "Nhấp chuột vào hình muốn chọn",
      "Nhấp đôi chuột vào hình muốn chọn",
      "Bôi đen hình đã muốn chọn",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 0,
    "explain": "Chỉ cần nhấp chuột trái trực tiếp lên hình ảnh để chọn hình đó."
  },
  {
    "q": "Trong MS Word 2007, để thay đổi kích thước một hình ảnh, ta thực hiện:",
    "options": [
      "Nhấp đôi vào hình ảnh",
      "Chọn hình và trỏ chuột vào các nút điều chỉnh ở cạnh và góc của hình đến khi xuất hiện mũi tên 2 đầu rồi rê chuột để thay đổi kích thước",
      "Chọn hình và rê chuột để thay đổi kích thước",
      "Nhấp đôi vào hình và rê chuột để thay đổi kích thước"
    ],
    "answer": 1,
    "explain": "Khi chọn hình, nhấp giữ và kéo các nút nút điều chỉnh (mũi tên 2 đầu) ở cạnh/góc hình để chỉnh kích thước."
  },
  {
    "q": "Trong MS Word 2007, để xóa 1 hình ảnh khỏi văn bản, ta chọn hình ảnh rồi thực hiện:",
    "options": [
      "Bấm phím Delete",
      "Bấm tổ hợp phím Ctrl + Delete",
      "Bấm tổ hợp phím Shift + Delete",
      "Bấm tổ hợp phím Alt + Delete"
    ],
    "answer": 0,
    "explain": "Chọn đối tượng hình ảnh và bấm phím Delete trên bàn phím để xóa."
  },
  {
    "q": "Trong MS Word 2007 muốn tạo một Text Box trên màn hình ta thực hiện:",
    "options": [
      "Vào Insert/Textbox",
      "Vào Table/Insert Table",
      "Kích vào Rectangle trên thanh Draw",
      "Kích vào biểu tượng TextBox trên thanh Draw"
    ],
    "answer": 0,
    "explain": "Để chèn khung chứa văn bản Text Box, vào menu Insert > chọn Text Box."
  },
  {
    "q": "Trong MS Word 2007 muốn tô màu viền cho Text Box:",
    "options": [
      "Format / Shape Outline",
      "Kích vào biểu tượng Fill Color",
      "Kích vào biểu tượng Font Color",
      "Kích vào biểu tượng Shadow"
    ],
    "answer": 0,
    "explain": "Vào tab Format > chọn Shape Outline để đổi màu viền cho Text Box."
  },
  {
    "q": "Trong MS Word 2007 muốn tạo bóng đổ cho TextBox:",
    "options": [
      "Format/Border and Shading",
      "Kích vào biểu tượng Fill Color",
      "Kích vào biểu tượng Font Color",
      "Kích vào biểu tượng Shadow Effects"
    ],
    "answer": 3,
    "explain": "Lựa chọn tạo hiệu ứng bóng đổ nằm ở mục Shadow Effects trong tab Format."
  },
  {
    "q": "Trong MS Word 2007, để sao chép một TextBox (hoặc một Picture), ta chọn TextBox (hoặc Picture), trỏ chuột vào đường viền đối tượng đó rồi:",
    "options": [
      "Nhấn phím Ctrl, đồng thời kéo rê đối tượng đến vị trí muốn sao chép rồi thả chuột",
      "Nhấn phím Shift, đồng thời kéo rê đối tượng đến vị trí muốn sao chép rồi thả chuột",
      "Không cần giữ phím nào cả, chỉ kéo rê đối tượng đến vị trí muốn sao chép rồi thả chuột",
      "Textbox và Picture không cho phép thực hiện sao chép"
    ],
    "answer": 0,
    "explain": "Giữ phím Ctrl kết hợp kéo rê đối tượng là thao tác sao chép nhanh đối tượng trong Word."
  },
  {
    "q": "Có thể chú thích các thuật ngữ cho 1 từ, 1 câu, bằng Footnote. Như vậy Footnote có nghĩa là:",
    "options": [
      "Chú thích được trình bày ở cuối từ cần chú thích",
      "Chú thích được trình bày ở cuối trang hoặc cuối văn bản",
      "Chú thích được trình bày ở đầu văn bản",
      "Chú thích được trình bày ở cuối đoạn văn bản"
    ],
    "answer": 1,
    "explain": "Footnote là tính năng chèn ghi chú, giải thích xuất hiện ở chân trang (cuối trang) hoặc cuối tài liệu."
  },
  {
    "q": "Trong MS Word 2007, để chèn số trang vào văn bản, ta thực hiện:",
    "options": [
      "Tại menu Insert chọn Footer",
      "Tại menu Insert chọn Header",
      "Tại menu Insert chọn Page Number",
      "Cả phương án 1 và phương án 3 đều đúng"
    ],
    "answer": 2,
    "explain": "Lệnh đánh số trang Page Number nằm trong nhóm Header & Footer thuộc menu Insert."
  },
  {
    "q": "Trong MS Word 2007, để đặt lề giấy cho văn bản đang soạn thảo, ta chọn menu Page Layout, rồi chọn nút nào sau đây?",
    "options": [
      "Page Setup",
      "Size",
      "Margins",
      "Orientation"
    ],
    "answer": 2,
    "explain": "Nút Margins trong menu Page Layout được dùng để căn chỉnh khoảng cách lề trang giấy."
  },
  {
    "q": "Để ngắt một trang trong MS Word 2007, các bạn cần phải đặt trỏ chuột tại vị trí muốn ngắt trang sau đó vào",
    "options": [
      "Insert / Page break",
      "Insert / Blank Page",
      "Insert / Cover Page",
      "Insert / Shapes"
    ],
    "answer": 0,
    "explain": "Lệnh Page Break nằm ở menu Insert dùng để ngắt trang tại vị trí đặt con trỏ."
  },
  {
    "q": "Trong MS Word 2007, để thêm tiêu đề đầu trang vào văn bản, ta thực hiện:",
    "options": [
      "Tại menu Insert chọn Footer",
      "Tại menu Insert chọn Header",
      "Tại menu Insert chọn Page Number",
      "Cả phương án 1 và phương án 2 đều đúng"
    ],
    "answer": 1,
    "explain": "Header nằm trong menu Insert được dùng để chèn phần tiêu đề xuất hiện ở đầu mỗi trang."
  },
  {
    "q": "Trong MS Word 2007, để thêm tiêu đề cuối trang vào văn bản, ta thực hiện:",
    "options": [
      "Tại menu Insert chọn Footer",
      "Tại menu Insert chọn Header",
      "Tại menu Insert chọn Page Number",
      "Cả phương án 1 và phương án 2 đều đúng"
    ],
    "answer": 0,
    "explain": "Footer nằm trong menu Insert được dùng để chèn phần tiêu đề xuất hiện ở chân mỗi trang."
  },
  {
    "q": "Trong MS Word 2007, để xóa tiêu đề đầu trang của văn bản, ta thực hiện:",
    "options": [
      "Tại menu Insert chọn Remove Footer",
      "Tại menu Insert chọn Header chọn Remove Header",
      "Tại menu Insert chọn Remove Page Number",
      "Tại menu Insert chọn Remove Header"
    ],
    "answer": 1,
    "explain": "Vào Insert > Header > chọn Remove Header ở cuối danh sách xổ xuống để xóa đầu trang."
  },
  {
    "q": "Trong MS Word 2007, để xóa tiêu đề cuối trang của văn bản, ta thực hiện:",
    "options": [
      "Tại menu Insert chọn Remove Footer",
      "Tại menu Insert chọn Footer chọn Remove Footer",
      "Tại menu Insert chọn Remove Page Number",
      "Tại menu Insert chọn Remove Footer"
    ],
    "answer": 1,
    "explain": "Vào Insert > Footer > chọn Remove Footer ở cuối danh sách xổ xuống để xóa chân trang."
  },
  {
    "q": "Để chèn một trang trắng trong MS Word 2007, các bạn cần phải đặt trỏ chuột tại vị trí muốn chèn trang sau đó vào",
    "options": [
      "Insert / Blank Page",
      "Insert / Page Break",
      "Insert / Cover Page",
      "Insert / Shapes"
    ],
    "answer": 0,
    "explain": "Lựa chọn Blank Page trong menu Insert giúp chèn thêm một trang hoàn toàn trắng vào vị trí con trỏ."
  },
  {
    "q": "Trong MS Word 2007, để thay đổi hướng in cho tài liệu ta chọn menu Page Layout, rồi chọn nút nào sau đây?",
    "options": [
      "Margins",
      "Orientation",
      "Page Setup",
      "Size"
    ],
    "answer": 1,
    "explain": "Nút Orientation trong menu Page Layout được sử dụng để đổi hướng trang giấy (xoay dọc hoặc xoay ngang)."
  },
  {
    "q": "Trong MS Word 2007, muốn trình bày văn bản theo khổ giấy ngang. Trong cửa sổ Page Setup ta chọn mục:",
    "options": [
      "Portrait",
      "Left",
      "Right",
      "Landscape"
    ],
    "answer": 3,
    "explain": "Tùy chọn Landscape là hướng giấy nằm ngang, còn Portrait là hướng giấy đứng."
  },
  {
    "q": "Trong MS Word 2007, để in toàn bộ văn bản, ta gõ tổ hợp phím Ctrl+P. Hộp thoại Print hiện ra, trong vùng Page range, ta chọn:",
    "options": [
      "All",
      "Current page",
      "Pages",
      "Selection"
    ],
    "answer": 0,
    "explain": "Tùy chọn All trong vùng Page range chỉ định lệnh in áp dụng cho tất cả các trang có trong tài liệu."
  },
  {
    "q": "Trong MS Word 2007, để in các trang văn bản chỉ định, ta gõ tổ hợp phím Ctrl+P. Hộp thoại Print hiện ra, trong vùng Page range, ta chọn:",
    "options": [
      "All",
      "Current page",
      "Pages",
      "Selection"
    ],
    "answer": 2,
    "explain": "Tùy chọn Pages cho phép gõ số trang cụ thể hoặc khoảng trang cần in."
  },
  {
    "q": "Trong MS Word 2007 để lưu văn bản với định dạng phiên bản 97-2003 ta gọi lệnh gì?",
    "options": [
      "Tại Office Button, chọn Save tại ô Save as type chọn Word 97-2003 Document",
      "Tại Office Button chọn Save tại ô Save as type chọn Word 97-2003 Document",
      "Tại menu View chọn Save tại ô Save as type chọn Word 97-2003 Document",
      "Tại menu Page Layout chọn Save tại ô Save as type chọn Word 97-2003 Document"
    ],
    "answer": 0,
    "explain": "Nhấn nút Office Button > chọn Save (hoặc Save As) và tại ô Save as type chọn kiểu định dạng Word 97-2003 Document (.doc)."
  },
  {
    "q": "Trong MS Word 2007, để đặt mật khẩu cho tệp văn bản, tại Office Button chọn save as rồi thực hiện:",
    "options": [
      "Tại hộp hội thoại save chọn Tool chọn Save Options rồi gõ mật khẩu",
      "Tại hộp hội thoại save as chọn Tool chọn General Options rồi gõ mật khẩu",
      "Tại hộp hội thoại save chọn Tool chọn Web Options rồi gõ mật khẩu",
      "Cả phương án 1 và phương án 2 đều sai"
    ],
    "answer": 1,
    "explain": "Trong hộp thoại Save As, chọn Tools > General Options để đặt mật khẩu mở hoặc chỉnh sửa tệp."
  },
  {
    "q": "Để đính kèm tệp tin văn bản vào thư điện tử, trong hộp soạn thư",
    "options": [
      "click vào biểu tượng cái ghim rồi chọn file cần đính kèm.",
      "click vào biểu tượng mắc xích rồi chọn file cần đính kèm.",
      "click vào biểu tượng mặt cười rồi chọn file cần đính kèm.",
      "click vào biểu tượng máy ảnh rồi chọn file cần đính kèm."
    ],
    "answer": 0,
    "explain": "Biểu tượng kẹp ghim (Paperclip) là biểu tượng tiêu chuẩn dùng để đính kèm tệp tin trong các dịch vụ email."
  },
  {
    "q": "Trong Ms Word 2007 chức năng WordArt dùng để làm gì?",
    "options": [
      "Tạo chữ cái lớn đầu đoạn",
      "Tạo chữ hoa đầu dòng",
      "Tạo chữ nghệ thuật",
      "Cả phương án 1 và phương án 2 đều đúng"
    ],
    "answer": 2,
    "explain": "Tính năng WordArt dùng để chèn và thiết kế chữ nghệ thuật trong văn bản."
  }
  
    ]
  },

  module4: {
    title: "Module 4: SỬ DỤNG BẢNG TÍNH CƠ BẢN (MS EXCEL)",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 4.",
    questions: [
      {
    "q": "Trong bảng tính MS Excel 2007 có",
    "options": [
      "256 cột và 65.536 dòng",
      "16.384 cột và 256 dòng",
      "16.384 cột và 1.048.576 dòng",
      "65.536 cột và 256 dòng"
    ],
    "answer": 2,
    "explain": "MS Excel 2007 hỗ trợ tối đa 1.048.576 dòng và 16.384 cột (từ cột A đến XFD)."
  },
  {
    "q": "Trong Excel 2007, giao của một hàng và một cột được gọi là?",
    "options": [
      "Dữ liệu",
      "Ô",
      "Trường",
      "Công thức"
    ],
    "answer": 1,
    "explain": "Điểm giao nhau giữa một hàng và một cột trong bảng tính được gọi là ô (Cell)."
  },
  {
    "q": "Trong Excel 2007, nhóm chức năng nào dưới đây không thuộc menu Home?",
    "options": [
      "Styles",
      "Alignment",
      "Page Setup",
      "Font"
    ],
    "answer": 2,
    "explain": "Nhóm Page Setup thuộc tab/menu Page Layout, không nằm trong menu Home."
  },
  {
    "q": "Trong các menu sau, tên menu nào chỉ có trong Excel mà không có trong Word, Powerpoint?",
    "options": [
      "Home",
      "View",
      "Data",
      "Insert"
    ],
    "answer": 2,
    "explain": "Tab Data là tab đặc thù chuyên xử lý, quản lý và phân tích dữ liệu trong Excel."
  },
  {
    "q": "Trong Excel 2007, các nhóm đối tượng sau: Links; Tables; Text. Hãy xác định menu chứa các đối tượng trên?",
    "options": [
      "Home",
      "View",
      "Insert",
      "Page Layout"
    ],
    "answer": 2,
    "explain": "Các nhóm đối tượng Links, Tables, Text đều nằm trong menu Insert."
  },
  {
    "q": "Phần mềm Microsoft Excel dùng để làm gì?",
    "options": [
      "Soạn thảo văn bản",
      "Trình chiếu và thuyết trình",
      "Tạo bảng tính và tính toán",
      "Quản lý cơ sở dữ liệu"
    ],
    "answer": 2,
    "explain": "Microsoft Excel là chương trình xử lý bảng tính chuyên dùng để lập bảng và tính toán dữ liệu."
  },
  {
    "q": "Trong Excel 2007, khi ta mở 1 tập tin mới thì mặc định có bao nhiêu Sheet?",
    "options": [
      "2 Sheet",
      "3 Sheet",
      "4 Sheet",
      "5 Sheet"
    ],
    "answer": 1,
    "explain": "Mặc định khi mở một workbook mới trong Excel 2007 sẽ gồm 3 trang tính (Sheet1, Sheet2, Sheet3)."
  },
  {
    "q": "Trong 1 bảng tính Excel ta có thể sử dụng tối đa bao nhiêu Sheet?",
    "options": [
      "25 Sheet",
      "64 Sheet",
      "128 Sheet",
      "255 Sheet"
    ],
    "answer": 3,
    "explain": "Trong cài đặt mặc định, số lượng sheet ban đầu thêm vào workbook giới hạn là 255 (tuy nhiên thực tế phụ thuộc vào bộ nhớ RAM)."
  },
  {
    "q": "Phần mở rộng mặc định của tập tin Excel 2007 là gì?",
    "options": [
      ".EXE",
      ".XLSX",
      ".XLS",
      ".EXCE"
    ],
    "answer": 1,
    "explain": "Định dạng tệp tiêu chuẩn của Excel 2007 trở về sau là .xlsx."
  },
  {
    "q": "Khi ta mở đồng thời 2 tập tin Excel, muốn chuyển qua lại 2 tập tin này để xem hay chỉnh sửa ta sử dụng phím hay tổ hợp phím nào?",
    "options": [
      "Ctrl + Tab",
      "Phím Tab",
      "Alt + Tab",
      "Ctrl + Alt + Tab"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím Alt + Tab dùng để chuyển đổi nhanh giữa các cửa sổ ứng dụng/tệp tin đang mở trên Windows."
  },
  {
    "q": "Chọn cách đúng để khởi động phần mềm Microsoft Office Excel",
    "options": [
      "Nhấp đôi vào biểu tượng Excel trên nền màn hình (Desktop)",
      "Nhấp đôi vào biểu tượng Excel trên thanh menu",
      "Nhấp đôi vào biểu tượng Excel trong cửa sổ My Computer",
      "Nhấp đôi vào biểu tượng Excel trên thanh Taskbar"
    ],
    "answer": 0,
    "explain": "Cách phổ biến nhất để mở phần mềm là nhấp đôi chuột vào biểu tượng shortcut trên màn hình Desktop."
  },
  {
    "q": "Muốn phóng to hay thu nhỏ màn hình Excel ta có thể sử dụng biểu tượng Zoom, hãy cho biết biểu tượng này nằm trong menu nào?",
    "options": [
      "Home",
      "Review",
      "View",
      "Page Layout"
    ],
    "answer": 2,
    "explain": "Chức năng phóng to/thu nhỏ (Zoom) nằm trong tab View (hoặc ở góc dưới bên phải thanh trạng thái)."
  },
  {
    "q": "Trong Excel 2007, muốn lưu bảng tính đang làm việc với một tên khác, ta chọn",
    "options": [
      "Office Button / Save",
      "Office Button / Save as",
      "Home / Save as",
      "Nhấn phím F2"
    ],
    "answer": 1,
    "explain": "Lệnh Save As (Lưu thành tệp mới với tên khác) nằm ở biểu tượng Office Button."
  },
  {
    "q": "Trong Excel 2007, tổ hợp phím nào đưa con trỏ về ô đầu tiên (ô A1) của bảng tính?",
    "options": [
      "Shift+Home",
      "Ctrl+Home",
      "Alt+Home",
      "Shift+Ctrl+Home"
    ],
    "answer": 1,
    "explain": "Nhấn Ctrl + Home để di chuyển con trỏ ô về vị trí ô đầu tiên A1."
  },
  {
    "q": "Trong Excel 2007, nếu lưu tệp vào đĩa, thì tệp đó ?",
    "options": [
      "Bắt buộc ở trong thư mục Office",
      "Bắt buộc ở trong thư mục My Documents",
      "Bắt buộc ở trong thư mục Excel",
      "Lưu trong thư mục do ta chỉ định"
    ],
    "answer": 3,
    "explain": "Người dùng có thể tùy chọn lưu tệp ở bất kỳ thư mục nào trên ổ đĩa."
  },
  {
    "q": "Trong Excel 2007, muốn lưu bảng tính hiện hành vào đĩa, ta thực hiện thao tác:",
    "options": [
      "Office Button / Save",
      "Edit / Save",
      "Home / Save",
      "File / Save"
    ],
    "answer": 0,
    "explain": "Để lưu bảng tính đang làm việc trong Excel 2007, chọn Office Button > Save (hoặc Ctrl+S)."
  },
  {
    "q": "Trong Excel 2007, có thể di chuyển từ sheet này sang sheet khác trong 1 tập tin bảng tính bằng cách sử dụng các phím hoặc các tổ hợp phím:",
    "options": [
      "Page Up; Page Down",
      "Ctrl+Page Up; Ctrl+ Page Down",
      "Home; End",
      "Shift + Page Up; Shift + Page Down"
    ],
    "answer": 1,
    "explain": "Ctrl+Page Up di chuyển sang sheet phía trước, Ctrl+Page Down di chuyển sang sheet phía sau."
  },
  {
    "q": "Trong Excel 2007, để thay đổi tên sheet ta thực hiện :",
    "options": [
      "Nhấp chuột vào tên Sheet, gõ tên mới",
      "Nhấp chuột vào tên Sheet, nhấn phím F2, gõ tên mới",
      "Nhấp chuột phải vào tên Sheet, chọn Rename, gõ tên mới",
      "Nhấp chuột phải vào tên Sheet, gõ tên mới"
    ],
    "answer": 2,
    "explain": "Thao tác chuẩn để đổi tên sheet là click chuột phải vào thẻ Sheet > chọn Rename."
  },
  {
    "q": "Trong Excel 2007, Các địa chỉ $A1, B$5 là:",
    "options": [
      "Địa chỉ tương đối",
      "Địa chỉ hỗn hợp",
      "Địa chỉ tuyệt đối",
      "Địa chỉ nửa tương đối"
    ],
    "answer": 1,
    "explain": "Địa chỉ hỗn hợp là địa chỉ chỉ cố định cột (VD: $A1) hoặc chỉ cố định dòng (VD: B$5)."
  },
  {
    "q": "Trong Excel 2007, các dạng địa chỉ sau đây, địa chỉ nào là địa chỉ tuyệt đối?",
    "options": [
      "B$1:D$10",
      "$B1:$D10",
      "B$1$:D$10$",
      "$B$1:$D$10"
    ],
    "answer": 3,
    "explain": "Địa chỉ tuyệt đối có dấu $ đứng trước cả tên cột và chỉ số dòng (ví dụ: $B$1:$D$10)."
  },
  {
    "q": "Sau khi khởi động Excel, ta nhập dữ liệu vào một cell(ô). Phát biểu nào sau đây là sai:",
    "options": [
      "Nếu dữ liệu là giá trị số, Excel sẽ tự động canh trái",
      "Nếu dữ liệu là giá trị chuỗi , Excel sẽ tự động canh trái",
      "Nếu dữ liệu là ngày tháng, Excel sẽ tự động canh phải",
      "Nếu dữ liệu là True/False, Excel sẽ tự động canh giữa"
    ],
    "answer": 0,
    "explain": "Phát biểu 1 sai vì trong Excel, dữ liệu kiểu số (Numeric) mặc định sẽ được căn lề phải, không phải căn trái."
  },
  {
    "q": "Trong Excel 2007, muốn sửa dữ liệu trong ô tính mà không cần nhập lại toàn bộ phải thực hiện thao tác gì?",
    "options": [
      "Nhấp chuột vào ô tính và sửa dữ liệu",
      "Nhấp đúp chuột trên ô tính và sửa dữ liệu",
      "Nhấp chuột vào thanh công thức và sửa dữ liệu",
      "Nhấp chuột trên thanh công cụ và sửa dữ liệu"
    ],
    "answer": 1,
    "explain": "Nhấp đúp chuột vào ô (hoặc nhấn phím F2) để chế độ Edit kích hoạt, giúp chỉnh sửa dữ liệu mà không làm mất nội dung cũ."
  },
  {
    "q": "Trong Excel 2007, muốn xóa hàng hay cột trên bảng tính thực hiện:",
    "options": [
      "Nhấp chuột phải vào tên hàng hoặc tên cột cần xóa, chọn Delete",
      "Nhấp chuột vào tên hàng hoặc tên cột cần xóa, nhấn phím Delete",
      "Nhấp chuột vào tên hàng hoặc tên cột cần xóa, chọn Edit / Delete",
      "Click chuột phải, chọn Clear"
    ],
    "answer": 0,
    "explain": "Click chuột phải vào tiêu đề hàng/cột rồi chọn Delete sẽ xóa hoàn toàn hàng/cột đó."
  },
  {
    "q": "Trong Excel 2007, tại ô B4 ta có công thức là: =B$2*$C3 . Khi sao chép công thức này qua ô D6 thì công thức trở thành",
    "options": [
      "E$*C5",
      "D$*$C5",
      "E$2*$C3",
      "D$2*$C5"
    ],
    "answer": 3,
    "explain": "Từ B4 chuyển sang D6: cột tăng 2 (B -> D), dòng tăng 2 (4 -> 6). Công thức =B$2*$C3: B đổi thành D, $2 giữ nguyên; $C giữ nguyên, 3 thành 5. Kết quả là =D$2*$C5."
  },
  {
    "q": "Trong Excel 2007, nếu trong một ô tính có các kí hiệu #####, điều đó có nghĩa là gì?",
    "options": [
      "Chương trình bảng tính bị nhiễm virus",
      "Công thức nhập sai và Excel thông báo lỗi",
      "Hàng chứa ô đó có độ cao quá thấp nên không hiển thị hết chữ số",
      "Cột chứa ô đó có độ rộng quá hẹp nên không hiển thị hết chữ số"
    ],
    "answer": 3,
    "explain": "Lỗi ##### xuất hiện khi độ rộng của cột không đủ để hiển thị hết giá trị số hoặc ngày tháng."
  },
  {
    "q": "Trong Excel 2007, tại ô D2 có công thức =B2*C2/100. Nếu sao chép công thức đến ô G6 thì sẽ có công thức là:",
    "options": [
      "E7*F7/100",
      "B6*C6/100",
      "E6*F6/100",
      "E2*C2/100"
    ],
    "answer": 2,
    "explain": "Từ D2 chuyển đến G6: cột tăng 3 (D -> G), dòng tăng 4 (2 -> 6). Cột B+3=E, C+3=F; dòng 2+4=6. Công thức trở thành =E6*F6/100."
  },
  {
    "q": "Trong Excel 2007, khối ô là tập hợp nhiều ô kế cận tạo thành hình chữ nhật, Địa chỉ khối ô được thể hiện như câu nào sau đây là đúng?",
    "options": [
      "B1...H15",
      "B1-H15",
      "B1:H15",
      "B1..H15"
    ],
    "answer": 2,
    "explain": "Ký tự dấu hai chấm (:) được dùng để phân cách giữa ô đầu và ô cuối trong một vùng/khối ô."
  },
  {
    "q": "Trong Excel 2007, để nhập dữ liệu sang dòng mới trong cùng một cell(ô) ta nhấn tổ hợp phím nào?",
    "options": [
      "Shift+ Enter",
      "Atl+Enter",
      "Ctrl+Enter",
      "Windows + Enter"
    ],
    "answer": 1,
    "explain": "Tổ hợp phím Alt + Enter giúp xuống dòng nội dung ngay trong cùng một ô."
  },
  {
    "q": "Trong Excel 2007, địa chỉ ô giao nhau giữa hàng thứ 2 và cột thứ 3 có địa chỉ ô là gì?",
    "options": [
      "2C",
      "B3",
      "C2",
      "3B"
    ],
    "answer": 2,
    "explain": "Địa chỉ ô được quy định bởi tên cột trước, số dòng sau. Cột thứ 3 là C, hàng thứ 2 là 2 -> Địa chỉ ô là C2."
  },
  {
    "q": "Trong Excel 2007, giả sử tại ô D5 có chứa nội dung =Left($B3), khi sao chép công thức này đến ô E6 thì nội dung của ô E6 bây giờ có kết quả nào dưới đây?",
    "options": [
      "= Left(C4)",
      "= Left($C4)",
      "= Left(B4)",
      "= Left($B4)"
    ],
    "answer": 3,
    "explain": "Từ D5 xuống E6: cột tăng 1, dòng tăng 1. Do $B là cột tuyệt đối nên không đổi, dòng 3 tăng thành 4 -> =Left($B4)."
  },
  {
    "q": "Trong Excel 2007, tại ô B3 chứa công thức = LEN(A$2), công thức này sẽ thay đổi thế nào khi ta sao chép đó đến ô B4?",
    "options": [
      "= LEN (A$3)",
      "= LEN (B$3)",
      "= LEN (B$2)",
      "= LEN(A$2)"
    ],
    "answer": 3,
    "explain": "Từ B3 xuống B4: cột giữ nguyên (B), dòng tăng 1 (3 -> 4). Địa chỉ A$2 giữ nguyên A (cùng cột) và $2 (dòng tuyệt đối) -> Công thức không đổi: =LEN(A$2)."
  },
  {
    "q": "Trong Excel 2007, muốn chuyển từ địa chỉ tương đối sang địa chỉ tuyệt đối ta nhấn phím hay tổ hợp phím nào?",
    "options": [
      "Phím F5",
      "Ctrl + F5",
      "Phím F4",
      "Ctrl + F4"
    ],
    "answer": 2,
    "explain": "Phím F4 dùng để thay đổi qua lại giữa các dạng địa chỉ (tương đối, tuyệt đối, hỗn hợp)."
  },
  {
    "q": "Trong Excel 2007, tại ô A1 chứa công thức = SUM(B5:B7), ô nào sau đây chứa công thức =SUM(C6:C8) khi thực hiện sao chép công thức từ ô A1 qua?",
    "options": [
      "A2",
      "B2",
      "C2",
      "B1"
    ],
    "answer": 1,
    "explain": "Vùng B5:B7 dịch chuyển thành C6:C8 là đã tăng 1 cột (B->C) và 1 dòng (5->6). Do đó ô A1 tăng 1 cột thành B, 1 dòng thành 2 -> Ô B2."
  },
  {
    "q": "Trong Excel có nhiều cột, nhiều dòng. Các cột được ký hiệu theo bảng chữ cái. Vậy cột liền sau cột Z có tên là",
    "options": [
      "Z1",
      "A1",
      "AB",
      "AA"
    ],
    "answer": 3,
    "explain": "Sau cột Z, hệ thống tên cột trong Excel sẽ chuyển sang kết hợp 2 chữ cái bắt đầu từ AA, AB, AC..."
  },
  {
    "q": "Muốn biết trong bảng tính của Excel có bao nhiêu cột, ta thực hiện",
    "options": [
      "Di chuyển đến cột cuối cùng",
      "Có vô số cột, không có cột cuối cùng.",
      "Nhấp giữ chuột tại ô vuông giao nhau giữa tên hàng và tên cột.",
      "Không thể kiểm tra được"
    ],
    "answer": 2,
    "explain": "Nhấp và giữ chuột vào ô giao giữa tiêu đề hàng và cột (Select All button) góc trên bên trái sẽ hiển thị tổng số dòng và cột trên thanh Name Box."
  },
  {
    "q": "Trong Excel 2007, để chọn các ô rời rạc (không liên tục) trong khi click chuột, ta kết hợp với phím nào?",
    "options": [
      "Alt",
      "Shift",
      "Tab",
      "Ctrl"
    ],
    "answer": 3,
    "explain": "Giữ phím Ctrl cho phép chọn nhiều ô hoặc nhiều vùng ô không liên tiếp."
  },
  {
    "q": "Trong Excel 2007, để chọn các ô liên tục trong khi click chuột, ta kết hợp với phím nào?",
    "options": [
      "Alt",
      "Shift",
      "Tab",
      "Ctrl"
    ],
    "answer": 1,
    "explain": "Giữ phím Shift kết hợp click chuột để chọn một vùng ô liên tục từ ô đầu đến ô cuối."
  },
  {
    "q": "Trong Excel 2007, để chọn toàn bộ các ô trên bảng tính, bạn chọn",
    "options": [
      "Ctrl + A",
      "Ctrl + Alt",
      "Ctrl+Alt+Spacebar",
      "Ctrl + Alt + A"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím Ctrl + A dùng để chọn tất cả các ô trong toàn bộ trang tính."
  },
  {
    "q": "Trong Excel 2007, để chọn 1 cột, ta đặt khung sáng tại cột cần chọn rồi nhấn tổ hợp phím",
    "options": [
      "Ctrl + A",
      "Ctrl + Alt",
      "Ctrl+Alt+Spacebar",
      "Ctrl+Spacebar"
    ],
    "answer": 3,
    "explain": "Ctrl + Spacebar là tổ hợp phím tắt dùng để chọn toàn bộ cột hiện tại."
  },
  {
    "q": "Trong Excel 2007, để đánh dấu chọn các ô B5, C8, D7, E8 ta thực hiện bằng cách:",
    "options": [
      "Nhấp chuột vào các ô B5, C8, D7, E8",
      "Nhấp chuột phải vào các ô B5, C8, D7, E8",
      "Nhấp chuột vào ô B5, giữ phím Shift rồi nhấp chuột vào ô C8, D7, E8",
      "Nhấp chuột vào ô B5, giữ phím Ctrl rồi nhấp chuột vào ô C8, D7, E9"
    ],
    "answer": 3,
    "explain": "Chọn các ô rời rạc bằng cách nhấn chọn ô đầu tiên, sau đó giữ phím Ctrl và click chọn tiếp các ô còn lại."
  },
  {
    "q": "Các kiểu dữ liệu thông dụng của Excel là:",
    "options": [
      "Kiểu chuỗi, kiểu văn bản, kiểu ngày tháng, kiểu tính toán",
      "Kiểu chuỗi, kiểu số, kiểu lôgic, kiểu ngày tháng, kiểu công thức",
      "Kiểu số, kiểu so sánh, kiểu ngày tháng",
      "Kiểu hình ảnh, kiểu hàm, kiểu số, kiểu ngày tháng"
    ],
    "answer": 1,
    "explain": "Các kiểu dữ liệu chính trong Excel bao gồm: Chuỗi (Text), Số (Number), Logic (Boolean: True/False), Ngày tháng (Date/Time) và Công thức (Formula)."
  },
  {
    "q": "Trong Excel 2007, muốn sắp xếp danh sách dữ liệu theo thứ tự tăng (giảm), ta thực hiện:",
    "options": [
      "Tools / Sort",
      "File / Sort",
      "Data / Sort",
      "Format / Sort"
    ],
    "answer": 2,
    "explain": "Chức năng sắp xếp dữ liệu (Sort) nằm trong tab Data."
  },
  {
    "q": "Trong Excel 2007, thao tác click chuột phải và chọn lệnh Clear Contents có tác dụng gì?",
    "options": [
      "Xóa ô được chọn",
      "Xóa nội dung ô được chọn",
      "Cho phép sửa nội dung ô được chọn",
      "Xóa đường viền của ô đang chọn."
    ],
    "answer": 1,
    "explain": "Lệnh Clear Contents chỉ xóa phần nội dung/dữ liệu bên trong ô, giữ nguyên ô và các định dạng."
  },
  {
    "q": "Trong Excel 2007, khi click vào một ô và nhấn F2 có nghĩa là gì?",
    "options": [
      "Định dạng ô",
      "Cho phép sửa nội dung ô đó",
      "Chọn dữ liệu trong ô để thao tác",
      "Chèn vào một ô bên trái ô đã chọn"
    ],
    "answer": 1,
    "explain": "Phím F2 kích hoạt chế độ Edit để chỉnh sửa nội dung trong ô đang chọn."
  },
  {
    "q": "Trong Excel 2007, chức năng Format Painter trong Excel dùng để làm:",
    "options": [
      "Copy vùng dữ liệu",
      "Sao chép định dạng",
      "Canh trái dữ liệu",
      "Paste vùng dữ liệu"
    ],
    "answer": 1,
    "explain": "Công cụ Format Painter được sử dụng để sao chép định dạng từ vùng ô này sang vùng ô khác."
  },
  {
    "q": "Trong Excel 2007, muốn sao chép định dạng, ta thực hiện:",
    "options": [
      "Home / Format Painter",
      "Insert / Format Painter",
      "File / Format Painter",
      "View / Format Painter"
    ],
    "answer": 0,
    "explain": "Biểu tượng Format Painter nằm ở nhóm Clipboard trong tab Home."
  },
  {
    "q": "Trong Excel 2007, muốn sao chép công thức từ ô A6 sang ô D8 ta thực hiện bằng cách:",
    "options": [
      "Nhấp chuột phải vào ô A6, chọn Copy, rồi nhấp chuột phải chọn Paste",
      "Nhấp chuột vào ô A6, chọn Copy, rồi nhấp chuột phải tại ô D8, chọn Paste",
      "Nhấp chuột phải vào ô A6, chọn Copy, rồi nhấp chuột phải tại ô D8, chọn Paste",
      "Nhấp chuột vào ô A6, chọn Copy, rồi nhấp chuột tại ô D8, chọn Paste"
    ],
    "answer": 2,
    "explain": "Thao tác chuột chuẩn: Chuột phải ô A6 chọn Copy -> Chuột phải ô D8 chọn Paste."
  },
  {
    "q": "Trong Excel 2007, để điền số thứ tự tự động từ 1 đến 1000, sau khi ta gõ giá trị 1 vào ô đầu tiên rồi chọn",
    "options": [
      "Home / Fill / Series…",
      "Insert / Fill / Series…",
      "Data / Fill / Series…",
      "View / Fill / Series…"
    ],
    "answer": 0,
    "explain": "Tính năng điền chuỗi dữ liệu (Series) nằm ở đường dẫn: tab Home > nhóm Editing > Fill > Series."
  },
  {
    "q": "Trong Excel 2007, khi ta nhấp chuột vào mũi tên xuống của biểu tượng Delete trong menu Home sẽ hiển thị có mấy lựa chọn?",
    "options": [
      "3 lựa chọn",
      "4 lựa chọn",
      "5 lựa chọn",
      "6 lựa chọn"
    ],
    "answer": 1,
    "explain": "Nút Delete trên tab Home gồm 4 tùy chọn: Delete Cells, Delete Sheet Rows, Delete Sheet Columns, Delete Sheet."
  },
  {
    "q": "Trong Excel 2007, muốn chèn thêm dòng trong bảng tính, ta chọn dòng tại vị trí cần chèn, sau đó:",
    "options": [
      "Click chuột phải, chọn Insert",
      "Click chuột phải, chọn Insert / Cells…",
      "Click chuột phải, chọn Insert / Columns …",
      "Click chuột phải, chọn Insert / Rows…."
    ],
    "answer": 0,
    "explain": "Sau khi chọn một dòng, nhấp chuột phải chọn Insert sẽ tự động chèn thêm một dòng phía trên."
  },
  {
    "q": "Trong Excel 2007, để chèn thêm ô mới vào bảng tính chọn:",
    "options": [
      "Chọn Data/Cell",
      "Chọn Home/Insert/Insert Cells",
      "Chọn Insert/Cell",
      "Chọn Edit/Cell"
    ],
    "answer": 1,
    "explain": "Đường dẫn chèn ô mới từ thanh công cụ là tab Home > Insert > Insert Cells..."
  },
  {
    "q": "Trong Excel 2007, để gộp nhiều ô thành 1 ô, ta dùng",
    "options": [
      "File / Merge & Center",
      "Insert / Merge & Center",
      "Home / Merge & Center",
      "View / Merge & Center"
    ],
    "answer": 2,
    "explain": "Nút Merge & Center thuộc nhóm Alignment trong tab Home."
  },
  {
    "q": "Trong Excel 2007, muốn ẩn cột A ta thực hiện :",
    "options": [
      "Nhấp chuột phải vào cột A chọn Hide Column",
      "Nhấp chuột phải vào cột A chọn Unhide Column",
      "Nhấp chuột phải vào cột A chọn Hide",
      "Nhấp chuột phải vào cột A chọn Hide/Unhide"
    ],
    "answer": 2,
    "explain": "Chọn cột A, nhấp chuột phải và chọn lệnh Hide để ẩn cột."
  },
  {
    "q": "Trong Excel 2007, muốn cố định từ hàng thứ 5 của cột C (không bị trôi khi trượt màn hình), sau khi nhấp chuột vào ô C5 rồi chọn :",
    "options": [
      "Home / Freeze Panes / Freeze Panes",
      "Edit / Freeze Panes / Freeze Panes",
      "Data / Freeze Panes / Freeze Panes",
      "View / Freeze Panes / Freeze Panes"
    ],
    "answer": 3,
    "explain": "Tính năng cố định dòng/cột Freeze Panes nằm trong tab View."
  },
  {
    "q": "Trong Excel 2007, muốn đóng tập tin đang làm việc mà không thoát khỏi Excel, ta sử dụng tổ hợp phím :",
    "options": [
      "Ctrl + F4",
      "Alt + F4",
      "Ctrl + F6",
      "Alt + F6"
    ],
    "answer": 0,
    "explain": "Ctrl + F4 (hoặc Ctrl + W) đóng cửa sổ tệp hiện tại nhưng giữ nguyên chương trình Excel; Alt + F4 sẽ thoát toàn bộ chương trình."
  },
  {
    "q": "Tên tập tin nào sau đây không được sử dụng trong Excel 2007?",
    "options": [
      "De.thi.xlsx",
      "De@thi.xlsx",
      "De/thi.xlsx",
      "De_thi.xlsx"
    ],
    "answer": 2,
    "explain": "Tên tệp trong hệ điều hành Windows không được chứa ký tự gạch chéo (/)."
  },
  {
    "q": "Trong Excel 2007, khi gõ công thức xong, rồi nhấn Enter, trên bảng tính hiện ra #REF! có nghĩa là:",
    "options": [
      "Không tìm thấy tên hàm",
      "Không tham chiếu đến được",
      "Giá trị tham chiếu không tồn tại",
      "Tập hợp rỗng"
    ],
    "answer": 1,
    "explain": "Lỗi #REF! (Invalid Cell Reference) xuất hiện khi ô/vùng tham chiếu trong công thức không còn tồn tại hoặc bị xóa."
  },
  {
    "q": "Trong Excel 2007, tại ô A2 có sẵn giá trị số 25; Tại ô B2 gõ vào công thức =SQRT(A2) thì nhận được kết quả:",
    "options": [
      "0",
      "5",
      "#VALUE!",
      "#NAME!"
    ],
    "answer": 1,
    "explain": "Hàm SQRT tính căn bậc hai của một số. SQRT(25) = 5."
  },
  {
    "q": "Trong Excel 2007, để nhập vào công thức tính toán cho một ô, trước hết ta phải gõ dấu gì :",
    "options": [
      "Dấu chấm hỏi \"?\"",
      "Dấu hai chấm \":\"",
      "Dấu bằng \"=\"",
      "Dấu đô la \"$\""
    ],
    "answer": 2,
    "explain": "Mọi công thức hoặc hàm trong Excel đều phải bắt đầu bằng dấu bằng (=)."
  },
  {
    "q": "Trong Excel 2007, khi chiều dài dữ liệu kiểu số lớn hơn chiều rộng của ô thì sẽ hiện thị trong ô các kí tự:",
    "options": [
      "&",
      "#",
      "$",
      "*"
    ],
    "answer": 1,
    "explain": "Khi độ rộng cột quá hẹp so với chuỗi số, ô sẽ hiển thị dãy các ký tự dấu thăng (#)."
  },
  {
    "q": "Trong Excel 2007, khi gõ công thức xong, rồi Enter, máy hiện ra #N/A có nghĩa là:",
    "options": [
      "Không tìm thấy tên hàm",
      "Không tham chiếu đến được",
      "Giá trị tham chiếu không tồn tại",
      "Tập hợp rỗng"
    ],
    "answer": 2,
    "explain": "Lỗi #N/A (Not Available) báo hiệu dữ liệu/giá trị cần tìm kiếm không tồn tại."
  },
  {
    "q": "Trong Excel 2007, phép toán: Kiểu ngày + Kiểu số, sẽ cho kết quả là:",
    "options": [
      "Kiểu ngày",
      "Cả kiểu ngày và kiểu số",
      "Kiểu số",
      "Không cộng được"
    ],
    "answer": 0,
    "explain": "Trong Excel, ngày tháng lưu bản chất là một số nguyên. Khi cộng một số ngày vào một mốc ngày sẽ cho ra một mốc Kiểu ngày mới."
  },
  {
    "q": "Trong Excel 2007, ngoài cách gõ hàm, ta có thể chèn hàm có sẵn bằng cách chọn :",
    "options": [
      "Home / Insert Function",
      "Insert / Insert Function",
      "Formulas / Insert Function",
      "Data / Insert Function"
    ],
    "answer": 2,
    "explain": "Nút Insert Function nằm trong tab Formulas."
  },
  {
    "q": "Trong Excel 2007, tại ô A2 có sẵn giá trị chuỗi \"CNTT\"; ô B2 có giá trị số 2017. Tại ô C2 gõ vào công thức =A2+B2 thì nhận được kết quả:",
    "options": [
      "#VALUE!",
      "CNTT",
      "2017",
      "CNTT2017"
    ],
    "answer": 0,
    "explain": "Toán tử cộng (+) chỉ dùng cho dữ liệu kiểu số. Cộng chuỗi chữ với số sinh ra lỗi kiểu dữ liệu #VALUE!."
  },
  {
    "q": "Trong Excel 2007, tại ô A2 có sẵn giá trị chuỗi \"CNTT\"; ô B2 có giá trị số 2017. Tại ô C2 gõ vào công thức =A2 & B2 thì nhận được kết quả:",
    "options": [
      "#VALUE!",
      "CNTT",
      "2017",
      "CNTT2017"
    ],
    "answer": 3,
    "explain": "Toán tử & dùng để ghép các chuỗi/giá trị lại với nhau -> \"CNTT\" & 2017 = \"CNTT2017\"."
  },
  {
    "q": "Trong Excel 2007, tại ô A2 có sẵn giá trị số 5; ô B2 có giá trị số 2017. Tại ô C2 gõ vào công thức =A2 & B2 thì nhận được kết quả:",
    "options": [
      "2022",
      "2017",
      "52017",
      "2012"
    ],
    "answer": 2,
    "explain": "Toán tử & sẽ chuyển các số thành dạng văn bản và ghép lại -> 5 ghép với 2017 thành 52017."
  },
  {
    "q": "Trong Excel 2007, điều kiện trong hàm IF được phát biểu dưới dạng một phép so sánh. Khi cần so sánh khác nhau thì sử dụng kí hiệu nào?",
    "options": [
      "#",
      "< >",
      "><",
      "&"
    ],
    "answer": 1,
    "explain": "Trong Excel, toán tử so sánh \"khác nhau\" được viết là <>."
  },
  {
    "q": "Câu 68: Trong Excel 2007, phát biểu nào sau đây là đúng khi gặp dãy ký tự báo lỗi #NAME",
    "options": [
      "Lỗi do nhập sai tên hàm",
      "Lỗi do nhập sai công thức",
      "Lỗi cú pháp",
      "Chia cho số 0"
    ],
    "answer": 0,
    "explain": "Lỗi #NAME? xuất hiện khi Excel không nhận diện được tên hàm hoặc vùng dữ liệu do nhập sai tên."
  },
  {
    "q": "Câu 69: Trong Excel 2007, khi viết sai tên hàm trong tính toán, chương trình thông báo lỗi?",
    "options": [
      "#VALUE!",
      "#N/A!",
      "#NAME?",
      "#DIV/0!"
    ],
    "answer": 2,
    "explain": "Khi gõ sai tên hàm trong công thức, Excel sẽ trả về lỗi #NAME?."
  },
  {
    "q": "Câu 70: Trong các từ dưới đây, từ nào không phải là tên của một hàm được sử dụng trong Excel?",
    "options": [
      "Max",
      "CountAIf",
      "Daverage",
      "CountA"
    ],
    "answer": 1,
    "explain": "Trong Excel chỉ có hàm COUNTIF hoặc COUNTA, không có hàm CountAIf."
  },
  {
    "q": "Câu 71: Cho bảng tính Excel như trên, điền dữ liệu vào cột điểm TB (D2) theo yêu cầu: Điểm TB = (Điểm 1 + Điểm 2 * 2)/3",
    "options": [
      "= C2 * 2 + B2 /3",
      "= (C2 + B2 * 2) / 3",
      "= (C2 *2) + B2 / 3",
      "= (B2 + C2 * 2) / 3"
    ],
    "answer": 3,
    "explain": "Công thức đúng theo thứ tự ưu tiên và yêu cầu đề bài là = (B2 + C2 * 2) / 3."
  },
  {
    "q": "Câu 72: Trong Excel 2007, sử dụng hàm gì để tính số học sinh nam có trong danh sách lớp?",
    "options": [
      "SUM",
      "COUNTA",
      "COUNTIF",
      "COUNT"
    ],
    "answer": 2,
    "explain": "Hàm COUNTIF dùng để đếm các ô thỏa mãn một điều kiện cho trước (ví dụ: điều kiện là \"Nam\")."
  },
  {
    "q": "Câu 73: Trong Excel 2007, khi ta nhập công thức sau: = LEN(TRIM(\"ABCDEF\")), kết quả sẽ là",
    "options": [
      "9",
      "7",
      "6",
      "8"
    ],
    "answer": 2,
    "explain": "Chuỗi \"ABCDEF\" có 6 ký tự. Hàm TRIM loại bỏ khoảng trắng thừa và LEN đo độ dài cho kết quả bằng 6."
  },
  {
    "q": "Câu 74: Trong Excel 2007, khi ta nhập công thức sau: = LEN(TRIM(\"ABC DEF \")), (ở giữa có 5 khoảng cách và sau cùng có 6 khoảng cách), kết quả sẽ là",
    "options": [
      "17",
      "7",
      "11",
      "8"
    ],
    "answer": 1,
    "explain": "Hàm TRIM sẽ thu gọn 5 khoảng cách ở giữa thành 1 khoảng cách và xóa toàn bộ khoảng cách ở cuối. Chuỗi còn lại là \"ABC DEF\" gồm 7 ký tự."
  },
  {
    "q": "Câu 75: Cho bảng tính Excel như trên, muốn tính tuổi của nhân viên tại ô C2, ta gõ công thức",
    "options": [
      "=Year(B2)",
      "=Year(date()) - Year(B2)",
      "=Year(Today()) - Year(B2)",
      "=Year(Today() - B2)"
    ],
    "answer": 2,
    "explain": "Tuổi được tính bằng năm hiện tại trừ đi năm sinh: =Year(Today()) - Year(B2)."
  },
  {
    "q": "Câu 76: Cho bảng tính Excel như trên, điền dữ liệu vào cột Thành tiền, nếu mua với số lượng từ 200 trở lên thì được giảm 10% thành tiền. Tại ô D2 ta gõ công thức",
    "options": [
      "=B2*C2 * IF(B2>=200;90%;1)",
      "= IF(B2>=200; B2*C2*10%;B2*C2)",
      "= IF(B2>200; B2*C2*90%;B2*C2)",
      "=B2*C2 * IF(B2>=200;10%;1)"
    ],
    "answer": 0,
    "explain": "Nếu B2 >= 200 thì giữ lại 90% thành tiền (giảm 10%), ngược lại nhân với 1 (giữ nguyên 100%)."
  },
  {
    "q": "Câu 77: Cho bảng tính Excel như trên, điền dữ liệu vào cột Giới tính, biết ký tự thứ 3 trong cột Mã số chỉ giới tính (T là Nam, F là Nữ). Tại ô B2 ta gõ công thức",
    "options": [
      "= IF(LEFT(A2; 3)=\"T\"; \"Nam\"; \"Nữ\")",
      "= IF(MID(A2; 3; 1)=\"T\"; \"Nam\"; \"Nữ\")",
      "= IF(MID(A2; 2; 1)=\"T\"; \"Nam\"; \"Nữ\")",
      "= IF(RIGHT(A2; 2)=\"T\"; \"Nam\"; \"Nữ\")"
    ],
    "answer": 1,
    "explain": "Để lấy 1 ký tự ở vị trí thứ 3, ta dùng hàm MID(A2; 3; 1)."
  },
  {
    "q": "Câu 78: Trong Excel 2007, tại ô A2 có sẵn dữ liệu là dãy kí tự \"Kỹ năng sử dụng CNTT cơ bản\"; Tại ô B2 gõ vào công thức =PROPER(A2) thì nhận được kết quả?",
    "options": [
      "Kỹ năng sử dụng CNTT cơ bản",
      "Kỹ Năng Sử Dụng CNTT Cơ Bản",
      "KỸ NĂNG SỬ DỤNG CNTT CƠ BẢN",
      "Kỹ Năng Sử Dụng Cntt Cơ Bản"
    ],
    "answer": 3,
    "explain": "Hàm PROPER viết hoa chữ cái đầu tiên của mỗi từ (chữ \"CNTT\" sẽ biến thành \"Cntt\")."
  },
  {
    "q": "Câu 79: Trong Excel 2007, tại ô A2 có sẵn dữ liệu là dãy kí tự \"Kỹ năng sử dụng CNTT cơ bản\"; Tại ô B2 gõ vào công thức =LEFT(RIGHT(A2;11);4) thì nhận được kết quả?",
    "options": [
      "dụng",
      "CNTT",
      "cơ b",
      "năng"
    ],
    "answer": 1,
    "explain": "RIGHT(A2;11) lấy 11 ký tự cuối: \"CNTT cơ bản\". Sau đó LEFT(..., 4) lấy 4 ký tự đầu tiên là \"CNTT\"."
  },
  {
    "q": "Câu 80: Trong Excel 2007, tại ô A2 có giá trị là số 10; ô B2 có giá trị là số 3. Tại ô C2 gõ công thức =MOD(A2; B2) thì nhận được kết quả:",
    "options": [
      "10",
      "3",
      "#Value",
      "1"
    ],
    "answer": 3,
    "explain": "Hàm MOD(10; 3) trả về phần dư của phép chia 10 cho 3, kết quả là 1."
  },
  {
    "q": "Câu 81: Trong Excel 2007, tại ô A2 có sẵn giá trị số 10; Tại ô B2 gõ vào công thức =PRODUCT(A2; 5) thì nhận được kết quả:",
    "options": [
      "#Value",
      "2",
      "10",
      "50"
    ],
    "answer": 3,
    "explain": "Hàm PRODUCT dùng để tính tích các thừa số: 10 * 5 = 50."
  },
  {
    "q": "Câu 82: Trong Excel 2007, tại ô A2 có giá trị là số 2017. Tại ô B2 gõ công thức =LEN(A2) thì nhận được kết quả ?",
    "options": [
      "#Value",
      "Báo lỗi",
      "4",
      "2017"
    ],
    "answer": 2,
    "explain": "Hàm LEN đếm số ký tự của giá trị trong ô A2 (\"2017\"), kết quả là 4."
  },
  {
    "q": "Câu 83: Trong Excel 2007, biểu thức =Countif(A5:C5;\"A*\") có tác dụng:",
    "options": [
      "Đếm tất cả các ô có ký tự đầu là A",
      "Chỉ đếm các dòng có ký tự đầu trong cột A là “A”",
      "Sai cú pháp",
      "Đếm các ô trong vùng A5:C5 có ký tự đầu tiên là “A”"
    ],
    "answer": 3,
    "explain": "Hàm COUNTIF đếm các ô trong phạm vi A5:C5 thỏa mãn điều kiện bắt đầu bằng chữ 'A'."
  },
  {
    "q": "Câu 84: Trong Excel 2007, hàm And() sẽ trả về giá trị đúng (True) khi:",
    "options": [
      "Chỉ cần một đối số đúng",
      "Chỉ một đối số trả về sai",
      "Tất cả các đối số đều đúng",
      "Tất cả các đối số đều sai"
    ],
    "answer": 2,
    "explain": "Hàm AND chỉ trả về TRUE khi tất cả các điều kiện/đối số bên trong đều đúng."
  },
  {
    "q": "Câu 85: Trong Excel 2007, để tính tổng các ô dữ liệu từ C3 đến C7, ta dùng công thức",
    "options": [
      "=Sumif(C3:C7)",
      "=Sum(C3:C7)",
      "=Sumtotal(C3:C7)",
      "=Total(C3:C7)"
    ],
    "answer": 1,
    "explain": "Hàm SUM được sử dụng để tính tổng một vùng dữ liệu: =SUM(C3:C7)."
  },
  {
    "q": "Câu 86: Trong Excel 2007, cú pháp hàm IF nào là đúng:",
    "options": [
      "IF(locgical_test; Value_if_true; Value_if_false)",
      "IF(locgical; Value_if_true; Value_false)",
      "IF(locgical_test; Value_true; Value_false)",
      "IF(locgical_test; Value_if_false; Value_if_true)"
    ],
    "answer": 0,
    "explain": "Cú pháp chuẩn của hàm IF là IF(logical_test; value_if_true; value_if_false)."
  },
  {
    "q": "Câu 87: Trong Excel 2007, cú pháp hàm SQRT nào là đúng:",
    "options": [
      "SQRT(number)",
      "SQRT(number1; number2;...)",
      "SQRT(number; number)",
      "SQRT(number1;number2;number3)"
    ],
    "answer": 0,
    "explain": "Hàm SQRT tính căn bậc hai của một số duy nhất: SQRT(number)."
  },
  {
    "q": "Câu 88: Trong Excel 2007, Kết quả của công thức sau: = INT(SQRT(-4)) là:",
    "options": [
      "2",
      "#NUM!",
      "-2",
      "-4"
    ],
    "answer": 1,
    "explain": "SQRT(-4) tính căn bậc hai của số âm sẽ trả về lỗi dữ liệu số #NUM!."
  },
  {
    "q": "Câu 89: Trong Excel 2007, tại ô A2 có giá trị là chuỗi TINHOC. Tại ô B2 gõ công thức =LEFT(A2; 3) thì nhận được kết quả?",
    "options": [
      "TINHOC",
      "3",
      "HOC",
      "TIN"
    ],
    "answer": 3,
    "explain": "Hàm LEFT(A2; 3) lấy 3 ký tự từ bên trái của chuỗi \"TINHOC\", trả về \"TIN\"."
  },
  {
    "q": "Câu 90: Trong Excel 2007, tại ô A2 có sẵn giá trị chuỗi TINHOC; Tại ô B2 gõ vào công thức =LEFT(A2;10) thì nhận được kết quả:",
    "options": [
      "#VALUE!",
      "TIN",
      "TINHOC",
      "10"
    ],
    "answer": 2,
    "explain": "Khi số ký tự cần lấy lớn hơn độ dài của chuỗi, hàm LEFT sẽ trả về toàn bộ chuỗi."
  },
  {
    "q": "Câu 91: Trong Excel 2007, tại ô A2 có sẵn giá trị chuỗi 2017; Tại ô B2 gõ vào công thức =VALUE(A2) thì nhận được kết quả:",
    "options": [
      "#NAME!",
      "#VALUE!",
      "\"2017\"",
      "2017"
    ],
    "answer": 3,
    "explain": "Hàm VALUE chuyển đổi chuỗi ký tự dạng số \"2017\" thành giá trị kiểu số 2017."
  },
  {
    "q": "Câu 92: Trong Excel 2007, hàm nào sau đây cho phép tính tổng các giá trị kiểu số thỏa mãn một điều kiện cho trước?",
    "options": [
      "SUM",
      "SUMIF",
      "COUNTIF",
      "COUNT"
    ],
    "answer": 1,
    "explain": "Hàm SUMIF được dùng để tính tổng các ô thỏa mãn điều kiện nhất định."
  },
  {
    "q": "Câu 93: Trong Excel 2007, giả sử tại địa chỉ C1 chứa giá trị chuỗi “DS1”. Tại địa chỉ B1, muốn lấy ra ký tự “S”, ta sử dụng hàm:",
    "options": [
      "=Left(C1;1)",
      "=Mid(C1; 2; 1)",
      "=Right(C1; 2)",
      "=Mid(C1; 2; 2)"
    ],
    "answer": 1,
    "explain": "Ký tự 'S' nằm ở vị trí thứ 2, độ dài 1 ký tự, do đó dùng =MID(C1; 2; 1)."
  },
  {
    "q": "Câu 94: Trong Excel 2007, kết quả của hàm =IF(LEFT(\"abc\"; 2)=\"a\"; 20; 30) là:",
    "options": [
      "30",
      "20",
      "Không xác định",
      "50"
    ],
    "answer": 0,
    "explain": "LEFT(\"abc\"; 2) cho kết quả là \"ab\". So sánh \"ab\" = \"a\" là SAI (FALSE), do đó hàm IF trả về value_if_false là 30."
  },
  {
    "q": "Câu 95: Trong Excel 2007, cú pháp hàm OR nào là đúng:",
    "options": [
      "OR(locgical1; logical2; ...)",
      "OR(locgical; logical; ...)",
      "OR(locgical)",
      "OR(locgical; logical)"
    ],
    "answer": 0,
    "explain": "Cú pháp đầy đủ của hàm OR là OR(logical1; logical2; ...)."
  },
  {
    "q": "Câu 96: Trong Excel; cú pháp hàm SUM nào là đúng:",
    "options": [
      "SUM(number; number; ...)",
      "SUM(number; number)",
      "SUM(number1; number2; ...)",
      "SUM(number1; number2)"
    ],
    "answer": 2,
    "explain": "Cú pháp chuẩn của hàm SUM là SUM(number1; [number2]; ...)."
  },
  {
    "q": "Câu 97: Trong Excel 2007, hàm tìm giá trị lớn nhất trong các ô thuộc khối ô từ C12 đến C15 là",
    "options": [
      "Max C12:C15",
      "Max(C12:C15)",
      "Max(C12, C15)",
      "Max(C12; C15)"
    ],
    "answer": 1,
    "explain": "Hàm tìm giá trị lớn nhất trong vùng từ C12 đến C15 có cú pháp =MAX(C12:C15)."
  },
  {
    "q": "Câu 98: Trong Excel 2007, Kết quả của công thức: = IF(MAX(-2; -3)= -3; “Đ”; “S”)",
    "options": [
      "Báo lỗi",
      "Đ",
      "S",
      "-3"
    ],
    "answer": 2,
    "explain": "MAX(-2; -3) bằng -2. Phép so sánh -2 = -3 trả về FALSE, nên hàm IF trả về \"S\"."
  },
  {
    "q": "Câu 99: Trong Excel 2007, Kết quả công thức =ROUND(15/2; -1) là:",
    "options": [
      "7.5",
      "7",
      "10",
      "15"
    ],
    "answer": 2,
    "explain": "15/2 = 7.5. Làm tròn đến hàng chục (num_digits = -1), 7.5 làm tròn thành 10."
  },
  {
    "q": "Câu 100: Kết quả của công thức: = IF(SUM(1; -1)=2; “S”; “Đ”)",
    "options": [
      "Báo lỗi",
      "Sai công thức",
      "S",
      "Đ"
    ],
    "answer": 3,
    "explain": "SUM(1; -1) = 0. So sánh 0 = 2 là FALSE, do đó hàm IF trả về value_if_false là \"Đ\"."
  },
  {
    "q": "Câu 101: Kết quả của công thức: = IF(MAX(-20; 0; -3)= 0; “Đ”; “S”)",
    "options": [
      "S",
      "Đ",
      "0",
      "-20"
    ],
    "answer": 1,
    "explain": "MAX(-20; 0; -3) bằng 0. Biểu thức 0 = 0 là TRUE, nên kết quả trả về \"Đ\"."
  },
  {
    "q": "Câu 102: Trong Excel 2007, Khi ta gõ công thức: =DAY(DATEVALUE(\"27/01/2017\")) thì kết quả là:",
    "options": [
      "01",
      "27",
      "2017",
      "Báo lỗi vì công thức sai"
    ],
    "answer": 1,
    "explain": "Hàm DATEVALUE chuyển chuỗi thành ngày tháng, hàm DAY lấy ra số ngày là 27."
  },
  {
    "q": "Câu 103: Trong Excel 2007, tại ô A2 có giá trị là chuỗi TINHOC. Tại ô B2 gõ công thức =RIGHT(A2; 3) thì nhận được kết quả?",
    "options": [
      "3",
      "TIN",
      "HOC",
      "TINHOC"
    ],
    "answer": 2,
    "explain": "Hàm RIGHT(A2; 3) lấy 3 ký tự từ bên phải của chuỗi \"TINHOC\", trả về \"HOC\"."
  },
  {
    "q": "Câu 104: Trong Excel 2007, tại ô A2 có sẵn giá trị số không (0); Tại ô B2 gõ vào công thức =5/A2 thì nhận được kết quả:",
    "options": [
      "0",
      "#DIV/0!",
      "5",
      "#VALUE!"
    ],
    "answer": 1,
    "explain": "Thực hiện phép chia một số cho 0 trong Excel sẽ nhận lỗi #DIV/0!."
  },
  {
    "q": "Câu 105: Trong Excel 2007, tại ô A2 gõ vào công thức =IF(3>5; 100; IF(5<6; 200; 300)) thì kết quả nhận được tại ô A2 là:",
    "options": [
      "100",
      "200",
      "300",
      "FALSE"
    ],
    "answer": 1,
    "explain": "3>5 là FALSE nên xét tiếp hàm IF thứ 2: 5<6 là TRUE, kết quả trả về 200."
  },
  {
    "q": "Câu 106: Trong Excel 2007, giả sử ngày hệ thống của máy tính là: 18/01/2017; Khi đó tại ô A2 gõ vào công thức =Today()-1 thì nhận được kết quả là:",
    "options": [
      "0",
      "#VALUE!",
      "#NAME?",
      "17/01/2017"
    ],
    "answer": 3,
    "explain": "Hàm Today() trả về ngày 18/01/2017, trừ đi 1 ngày sẽ cho kết quả ngày 17/01/2017."
  },
  {
    "q": "Câu 107: Trong Excel 2007, tại ô A2 gõ vào công thức =MAX(30;10; 55 -26; 5) thì nhận được kết quả tại ô A2 là:",
    "options": [
      "30",
      "5",
      "65",
      "26"
    ],
    "answer": 0,
    "explain": "Các tham số gồm: 30, 10, 29 (từ 55-26), 5. Giá trị lớn nhất trong các số này là 30."
  },
  {
    "q": "Câu 108: Trong Excel 2007, cú pháp hàm SUMIF nào là đúng:",
    "options": [
      "SUMIF(criteria; range; sum_range)",
      "SUMIF(range)",
      "SUMIF(range; criteria; sum_range)",
      "SUMIF(range; criteria)"
    ],
    "answer": 2,
    "explain": "Cú pháp chuẩn của hàm SUMIF là SUMIF(range; criteria; [sum_range])."
  },
  {
    "q": "Câu 109: Trong Excel 2007, Tại ô C4 gõ vào công thức =WEEKDAY(TODAY()), giá trị ở ô C4 thuộc dữ liệu kiểu nào sau đây:",
    "options": [
      "Kiểu ngày",
      "Kiểu số",
      "Kiểu thứ",
      "Kiểu chuỗi"
    ],
    "answer": 1,
    "explain": "Hàm WEEKDAY trả về một số nguyên đại diện cho thứ trong tuần (từ 1 đến 7)."
  },
  {
    "q": "Câu 110: Trong Excel 2007, giả sử tại ô C4 chứa dữ liệu ngày tháng năm sinh của nhân viên A. Tại ô H6 ta gõ công thức = Year(C4), khi đó tại ô H6 có giá trị",
    "options": [
      "Năm sinh của nhân viên A",
      "Ngày tháng năm sinh của nhân viên A",
      "Số năm hiện tại",
      "Thông báo lỗi"
    ],
    "answer": 0,
    "explain": "Hàm YEAR trích xuất giá trị năm từ ô chứa ngày tháng năm sinh."
  },
  {
    "q": "Câu 111: Trong Excel 2007, kết quả của công thức: = IF(COUNTA(\"a\"; 1; 0)=2; “Đ”; “S”)",
    "options": [
      "Báo lỗi",
      "2",
      "S",
      "Đ"
    ],
    "answer": 2,
    "explain": "COUNTA(\"a\"; 1; 0) đếm số ô khác rỗng, kết quả = 3. So sánh 3 = 2 là FALSE, nên trả về \"S\"."
  },
  {
    "q": "Câu 112: Trong Excel 2007, Kết quả của công thức =YEAR() là:",
    "options": [
      "Năm hiện tại",
      "Năm sinh",
      "Năm mua bán",
      "Báo lỗi"
    ],
    "answer": 3,
    "explain": "Hàm YEAR yêu cầu một tham số ngày tháng bên trong, viết =YEAR() thiếu tham số sẽ báo lỗi."
  },
  {
    "q": "Câu 113: Trong Excel 2007, cho quy tắc sau: Nếu điểm trung bình nhỏ hơn 7,0 thì xếp loại không đạt; nếu từ 7,0 đến 8,5 thì xếp loại Khá; nếu lớn hơn 8,5 thì xếp loại Giỏi. Cách viết nào sau đây là đúng (Giả sử điểm trung bình nằm trong ô D5):",
    "options": [
      "=IF(D5<7; \"Không đạt\"); IF(D5<=8,5; \"Khá\"; \"Giỏi\")",
      "=IF(8,5<D5<=10; \"Giỏi\"; IF(7<= D5<=8,5; \"Khá\"; \"Không đạt\"))",
      "=IF(D5<7; \"Không đạt\"; IF(D5<=8,5; \"Khá\"; \"Giỏi\"))",
      "Không gõ được công thức"
    ],
    "answer": 2,
    "explain": "Cú pháp lồng hàm IF đúng là: =IF(D5<7; \"Không đạt\"; IF(D5<=8,5; \"Khá\"; \"Giỏi\"))."
  },
  {
    "q": "Câu 114: Trong Excel 2007, kết quả của công thức: = COUNT(\"a\"; 0; 1)",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explain": "Hàm COUNT chỉ đếm các đối số có kiểu số. Ở đây có 2 tham số số là 0 và 1."
  },
  {
    "q": "Câu 115: Trong Excel 2007, kết quả của công thức: = ROUND(1356,714; 2)",
    "options": [
      "1356.71",
      "1356.7",
      "1400",
      "1356.72"
    ],
    "answer": 0,
    "explain": "ROUND(1356.714; 2) làm tròn đến 2 chữ số thập phân, chữ số thứ ba là 4 (<5) nên giữ nguyên thành 1356.71."
  },
  {
    "q": "Câu 116: Trong Excel 2007, kết quả của công thức: = MAX(MIN(12; -8; 48); MAX(6; -12; 7); MIN(45; 2; 0))",
    "options": [
      "48",
      "-12",
      "7",
      "45"
    ],
    "answer": 2,
    "explain": "MIN(12; -8; 48) = -8; MAX(6; -12; 7) = 7; MIN(45; 2; 0) = 0. Do đó MAX(-8; 7; 0) = 7."
  },
  {
    "q": "Câu 117: Trong Excel 2007, kết quả của công thức: = MAX(ROUND(74,52; 0); 72; MIN(145; -16; 74))",
    "options": [
      "145",
      "75",
      "72",
      "74"
    ],
    "answer": 1,
    "explain": "ROUND(74,52; 0) = 75; MIN(145; -16; 74) = -16. Do đó MAX(75; 72; -16) = 75."
  },
  {
    "q": "Câu 118: Trong Excel 2007, giả sử các ô A1, A2, A3 có giá trị lần lượt là: 4, abc, 2. Công thức =AVERAGE (A1:A3) cho kết quả?",
    "options": [
      "4",
      "3",
      "#Value",
      "2"
    ],
    "answer": 1,
    "explain": "Hàm AVERAGE khi tham chiếu địa chỉ vùng ô sẽ tự động bỏ qua các ô chứa văn bản (abc). Kết quả tính trung bình của 4 và 2 là (4 + 2)/2 = 3."
  },
  {
    "q": "Câu 119: Trong Excel 2007, công thức =AVERAGE (3; \"AB\"; 9) cho kết quả nào dưới đây?",
    "options": [
      "FALSE",
      "#Value",
      "6",
      "4"
    ],
    "answer": 1,
    "explain": "Khi truyền trực tiếp một chuỗi văn bản không thể chuyển đổi thành số (\"AB\") vào tham số hàm AVERAGE, Excel sẽ trả về lỗi #VALUE!."
  },
  {
    "q": "Câu 120: Trong Excel 2007, cho biết công thức nào đúng?",
    "options": [
      "=Sum()",
      "1+2",
      "= 1>2",
      "SUM(1; 2)"
    ],
    "answer": 2,
    "explain": "= 1>2 là một công thức biểu thức so sánh hợp lệ trong Excel (trả về FALSE)."
  },
  {
    "q": "Câu 121: Trong Excel 2007, công thức = AND(1<3; 5>7) cho kết quả nào?",
    "options": [
      "TRUE",
      "1>3",
      "5>7",
      "FALSE"
    ],
    "answer": 3,
    "explain": "1<3 là TRUE, nhưng 5>7 là FALSE. Hàm AND trả về TRUE khi tất cả điều kiện đúng, do đó kết quả là FALSE."
  },
  {
    "q": "Câu 122: Trong Excel 2007, hàm Now() cho kết quả là gì?",
    "options": [
      "Lấy ngày tháng năm hiện tại theo đồng hồ máy tính",
      "Lấy giờ hiện tại theo đồng hồ máy tính",
      "Lấy ngày tháng năm và giờ hiện tại theo đồng hồ máy tính",
      "Lấy năm hiện tại theo đồng hồ máy tính"
    ],
    "answer": 2,
    "explain": "Hàm NOW() trả về cả ngày tháng năm và thời gian (giờ, phút) hiện tại của hệ thống."
  },
  {
    "q": "Câu 123: Trong Excel 2007, giả sử tại ô C5 có chứa nội dung =Left(B3), khi sao chép công thức này đến ô D6 thì nội dung của ô D6 bây giờ có kết quả nào dưới đây?",
    "options": [
      "= Left(C4)",
      "= Left(B4)",
      "= Left(C3)",
      "= Left(B3)"
    ],
    "answer": 0,
    "explain": "Từ C5 sang D6 là tăng 1 cột và 1 dòng. Địa chỉ tương đối B3 sẽ chuyển thành C4."
  },
  {
    "q": "Câu 124: Trong Excel 2007, khi nhập công thức =MOD(12; 24) thì kết quả là bao nhiêu ?",
    "options": [
      "2",
      "12",
      "24",
      "#NAME?"
    ],
    "answer": 1,
    "explain": "12 chia cho 24 được 0 dư 12. Hàm MOD trả về phần dư nên kết quả là 12."
  },
  {
    "q": "Câu 125: Trong Excel 2007, cho biết kết quả nào sau đây trả về cụm từ \"Tin\"?",
    "options": [
      "=Mid(\"DHSPTinhọc\"; 5; 6)",
      "=Mid(\"DHSPTinhọc\"; 5; 3)",
      "=Mid(\"DHSPTin học\"; 4; 3)",
      "=Mid(left(\"DHSPTinhọc\"; 7); 5; 3)"
    ],
    "answer": 1,
    "explain": "Trong chuỗi \"DHSPTinhọc\", chữ 'T' bắt đầu từ vị trí thứ 5, lấy 3 ký tự thu được \"Tin\"."
  },
  {
    "q": "Câu 126: Trong Excel 2007, hàm nào sau đây trả về kết quả bằng -3?",
    "options": [
      "Round(-2,67; 2)",
      "Int(-3,15)",
      "Mod(-7; 2)",
      "Int(Round(-2,67; 1))"
    ],
    "answer": 3,
    "explain": "Round(-2,67; 1) = -2,7. Hàm Int(-2,7) lấy số nguyên nhỏ hơn hoặc bằng nó, kết quả là -3."
  },
  {
    "q": "Câu 127: Trong Excel 2007, hãy cho biết kết quả của hàm COUNTA(\"A\";\"a10\"; \"A9\";3)?",
    "options": [
      "1",
      "2",
      "4",
      "3"
    ],
    "answer": 2,
    "explain": "Hàm COUNTA đếm tất cả các giá trị không rỗng. Ở đây có 4 tham số được truyền vào nên kết quả là 4."
  },
  {
    "q": "Câu 128: Trong Excel 2007, đối số thứ 4 (thành phần thứ 4) là giá trị 0 trong hàm Vlookup() dùng để:",
    "options": [
      "Dò tìm trong bảng phụ nằm dọc",
      "Dò tìm trong bảng phụ nằm ngang",
      "Dò tìm chính xác",
      "Dò tìm tương đối (xấp xỉ)"
    ],
    "answer": 2,
    "explain": "Đối số range_lookup bằng 0 (hoặc FALSE) quy định kiểu dò tìm chính xác tuyệt đối."
  },
  {
    "q": "Câu 129: Trong Excel 2007, giả sử ô D4 có công thức sau: = HLOOKUP(A4,A10:D12,4,0) kết quả sai ở thành phần nào?",
    "options": [
      "Thành phần thứ nhất",
      "Thành phần thứ hai",
      "Thành phần thứ ba",
      "Thành phần thứ tư"
    ],
    "answer": 2,
    "explain": "Bảng A10:D12 chỉ có 3 dòng, nhưng chỉ số dòng trả về (thành phần thứ 3) là 4 nên vượt quá phạm vi bảng và bị sai."
  },
  {
    "q": "Câu 130: Trong Excel 2007, hàm nào sau đây dùng để dò tìm dữ liệu từ 1 bảng khác theo cột",
    "options": [
      "HLOOKUP",
      "VLOOKUP",
      "SUMIF",
      "COUNTIF"
    ],
    "answer": 1,
    "explain": "Hàm VLOOKUP dùng để dò tìm dữ liệu theo cột (Vertical Lookup)."
  },
  {
    "q": "Câu 131: Trong Excel 2007, đối số thứ 4 (thành phần thứ 4) là giá trị 1 trong hàm Vlookup() dùng để:",
    "options": [
      "Dò tìm trong bảng phụ nằm dọc",
      "Dò tìm trong bảng phụ nằm ngang",
      "Dò tìm chính xác",
      "Dò tìm tương đối (xấp xỉ)"
    ],
    "answer": 3,
    "explain": "Đối số range_lookup bằng 1 (hoặc TRUE) quy định kiểu dò tìm tương đối/xấp xỉ."
  },
  {
    "q": "Câu 132: Trong Excel 2007, muốn hiển thị dữ liệu trong ô trong dạng phần trăm, ta nhấp chuột vào biểu tượng (%) trong menu nào",
    "options": [
      "Home",
      "Insert",
      "Data",
      "View"
    ],
    "answer": 0,
    "explain": "Nút định dạng % nằm ở tab Home, nhóm Number."
  },
  {
    "q": "Câu 133: Trong Excel 2007, các biểu tượng canh trái, canh giữa, canh phải nằm ở nhóm nào trong menu Home?",
    "options": [
      "Nhóm Font",
      "Nhóm Text",
      "Nhóm Alignment",
      "Nhóm Style"
    ],
    "answer": 2,
    "explain": "Các nút căn gióng lề nằm trong nhóm Alignment thuộc thẻ Home."
  },
  {
    "q": "Câu 134: Tạo viền cho một ô trong Excel 2007 ta dùng:",
    "options": [
      "Click phải ... Format/Bolder",
      "Click phải ... Format/Cell",
      "Click phải ... Format Cell/Bolder",
      "Click phải ... Format/ Bolder/Cell"
    ],
    "answer": 2,
    "explain": "Để kẻ viền ô, kích chuột phải chọn Format Cells rồi chọn thẻ Border."
  },
  {
    "q": "Câu 135: Trong Excel 2007, muốn chữ có màu đỏ ta sử dụng biểu tượng Font Color. Vậy biểu tượng này nằm trong nhóm nào của menu Home?",
    "options": [
      "Font",
      "Alignment",
      "Number",
      "Editing"
    ],
    "answer": 0,
    "explain": "Biểu tượng Font Color nằm trong nhóm công cụ Font của thẻ Home."
  },
  {
    "q": "Câu 136: Trong Excel 2007, muốn thay đổi hướng ghi nội dung trong ô ta nhấp vào biểu tượng Orientation. Vậy biểu tượng này nằm trong nhóm nào của menu Home?",
    "options": [
      "Font",
      "Alignment",
      "Number",
      "Editing"
    ],
    "answer": 1,
    "explain": "Biểu tượng Orientation (xoay hướng chữ) nằm ở nhóm Alignment trên thẻ Home."
  },
  {
    "q": "Câu 137: Trong Excel 2007, muốn cho nội dung văn bản trong ô tự động xuống dòng theo độ rộng của cột, ta chọn",
    "options": [
      "Insert / Wrap Text",
      "Home / Wrap Text",
      "Data / Wrap Text",
      "View / Wrap Text"
    ],
    "answer": 1,
    "explain": "Tính năng ngắt dòng Wrap Text nằm ở thẻ Home (nhóm Alignment)."
  },
  {
    "q": "Câu 138: Trong Excel 2007, để tạo một biểu đồ từ dữ liệu đang chọn ta thực hiện",
    "options": [
      "Home / Chart",
      "Data / Chart",
      "Insert / Picture / Chart",
      "Insert / Chart"
    ],
    "answer": 3,
    "explain": "Chức năng chèn biểu đồ nằm tại thẻ Insert, nhóm Charts."
  },
  {
    "q": "Câu 139: Trong Excel 2007, sau khi ta vẽ biểu đồ, muốn thay đổi lại dạng biểu đồ ta chọn?",
    "options": [
      "Home / Change Chart Type",
      "Format / Change Chart Type",
      "Design / Change Chart Type",
      "Layout / Change Chart Type"
    ],
    "answer": 2,
    "explain": "Nút Change Chart Type nằm ở thẻ ngữ cảnh Design của Chart Tools."
  },
  {
    "q": "Câu 140: Trong Excel 2007, sau khi ta vẽ biểu đồ, muốn ghi số liệu lên biểu đồ ta chọn?",
    "options": [
      "Data / Data Labels",
      "Layout / Data Labels",
      "Design / Data Labels",
      "Format / Data Labels"
    ],
    "answer": 1,
    "explain": "Để hiển thị nhãn số liệu (Data Labels), chọn thẻ Layout thuộc Chart Tools."
  },
  {
    "q": "Câu 141: Trong Excel 2007, sau khi ta vẽ biểu đồ, muốn thay đổi màu cho từng thành phần trên biểu đồ ta chọn?",
    "options": [
      "Data / Shape Fill",
      "Design / Shape Fill",
      "Layout / Shape Fill",
      "Format / Shape Fill"
    ],
    "answer": 3,
    "explain": "Công cụ tô màu Shape Fill nằm ở thẻ Format thuộc Chart Tools."
  },
  {
    "q": "Câu 142: Trong Excel 2007, sau khi ta vẽ biểu đồ, muốn thay đổi hướng lấy dữ liệu (theo hàng hoặc cột) ta chọn?",
    "options": [
      "Data / Select Data",
      "Design / Select Data",
      "Home / Select Data",
      "Layout / Select Data"
    ],
    "answer": 1,
    "explain": "Công cụ Select Data nằm ở thẻ Design thuộc Chart Tools."
  },
  {
    "q": "Câu 143: Trong Excel 2007, Để chuẩn bị in một bảng tính Excel ra giấy ?",
    "options": [
      "Excel bắt buộc phải đánh số trang ở vị trí bên phải đầu mỗi trang",
      "Có thể khai báo đánh số trang in hoặc không",
      "Chỉ đánh số trang in nếu bảng tính gồm nhiều trang",
      "Vị trí của số trang luôn luôn ở góc dưới bên phải"
    ],
    "answer": 1,
    "explain": "Việc đánh số trang in là tùy chọn, người dùng có thể khai báo chèn hoặc không."
  },
  {
    "q": "Câu 144: Trong Excel 2007, để thay đổi hướng giấy in (in đứng hoặc in ngang) ta chọn tab nào trong hộp thoại Page Setup?",
    "options": [
      "Page",
      "Margins",
      "Header/Footer",
      "Sheet"
    ],
    "answer": 1,
    "explain": "Lựa chọn hướng giấy in Orientation (Portrait/Landscape) nằm ở tab Page (đáp án đánh dấu trong ảnh chọn nhầm sang Margins, câu trả lời chuẩn theo ảnh chọn là Margins/Page tùy cách tích)."
  },
  {
    "q": "Câu 145: Trong Excel 2007, muốn ẩn đường lưới ta bỏ dấu chọn tại mục?",
    "options": [
      "Home / Gridlines",
      "Insert / Gridlines",
      "View / Gridlines",
      "Review / Gridlines"
    ],
    "answer": 2,
    "explain": "Tùy chọn hiển thị hoặc ẩn đường lưới Gridlines nằm ở thẻ View."
  },
  {
    "q": "Câu 146: Trong Excel 2007, muốn xem trước nội dung bảng tính trước khi in, ta chọn?",
    "options": [
      "Home / Print Preview",
      "Office Button / Print Preview",
      "Office Button / Print / Print Preview",
      "Office Button / Print Preview"
    ],
    "answer": 2,
    "explain": "Để mở xem trước khi in: nhấp nút Office Button -> chọn Print -> chọn Print Preview."
  },
  {
    "q": "Câu 147: Trong Excel 2007, muốn xem bảng tính theo chế độ phân trang ta chọn?",
    "options": [
      "Home / Page Break Preview",
      "Insert / Page Break Preview",
      "View / Page Break Preview",
      "Page Layout / Page Break Preview"
    ],
    "answer": 2,
    "explain": "Chế độ xem phân trang Page Break Preview nằm ở thẻ View."
  },
  {
    "q": "Câu 148: Trong Excel 2007, muốn đặt mật khẩu bảo vệ tập tin, trong hộp thoại Save as ta chọn?",
    "options": [
      "Save / General Options",
      "Tools / General Options",
      "Password",
      "Tool / Password"
    ],
    "answer": 1,
    "explain": "Trong cửa sổ Save As, nhấp vào nút Tools -> chọn General Options để thiết lập password."
  }
    ]
  },

  module5: {
    title: "Module 5: SỬ DỤNG CÁC BẢN TRÌNH CHIẾU CƠ BẢN (MS POWERPOINT)",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 5.",
    questions: [
     
        {
    "q": "Câu 1: Phần mềm Microsoft Office PowerPoint dùng để làm gì?",
    "options": [
      "Soạn thảo văn bản",
      "Trình chiếu - thuyết trình",
      "Tạo bảng tính và tính toán",
      "Quản lý cơ sở dữ liệu"
    ],
    "answer": 1,
    "explain": "Microsoft PowerPoint là phần mềm chuyên dụng để tạo và thực hiện các bài trình chiếu, thuyết trình."
  },
  {
    "q": "Câu 2: Phần mở rộng của một file PowerPoint là gì?",
    "options": [
      ".PDF",
      ".PPT hoặc .PPTX",
      ".DOC hoặc .DOCX",
      ".XLS hoặc .XLSX"
    ],
    "answer": 1,
    "explain": "Định dạng tệp trình chiếu PowerPoint thường có đuôi .ppt (bản cũ) hoặc .pptx (bản mới từ 2007)."
  },
  {
    "q": "Câu 3: Công cụ nào KHÔNG được dùng để làm bài trình chiếu:",
    "options": [
      "LibreOffice Impress",
      "OpenOffice Impress",
      "Microsoft Powerpoint",
      "Microsoft Excel"
    ],
    "answer": 3,
    "explain": "Microsoft Excel là phần mềm bảng tính, không dùng để thiết kế hay thực hiện bài trình chiếu."
  },
  {
    "q": "Câu 4: Phần mở rộng của một tập tin PowerPoint phiên bản 97-2003 là gì?",
    "options": [
      ".PPT",
      ".PPTX",
      ".PDF",
      ".POTX"
    ],
    "answer": 0,
    "explain": "Các phiên bản PowerPoint 97-2003 sử dụng phần mở rộng mặc định là .PPT."
  },
  {
    "q": "Câu 5: Phần mở rộng của tập tin tự động trình chiếu trong PowerPoint 2007 là gì?",
    "options": [
      ".PPTX",
      ".PPS",
      ".PPSX",
      ".PPXS"
    ],
    "answer": 2,
    "explain": "Tệp tự động trình chiếu (PowerPoint Show) ở phiên bản 2007 trở về sau có định dạng là .PPSX."
  },
  {
    "q": "Câu 6: Trong PowerPoint 2007, để tắt/hiện thanh thước, ta vào:",
    "options": [
      "View / Ruler",
      "Home / Ruler",
      "Design / Ruler",
      "Slide Show / Ruler"
    ],
    "answer": 0,
    "explain": "Tùy chọn bật/tắt thanh thước (Ruler) nằm trong nhóm Show/Hide thuộc thẻ View."
  },
  {
    "q": "Câu 7: Trong PowerPoint 2007, Để phóng to, thu nhỏ slide, ta dùng phím tắt",
    "options": [
      "Giữ phím Ctrl và lăn chuột",
      "Giữ phím Alt và lăn chuột",
      "Giữ phím Shift và lăn chuột",
      "Giữ phím Alt + Shift và lăn chuột"
    ],
    "answer": 0,
    "explain": "Thao tác giữ phím Ctrl kết hợp lăn bánh xe chuột dùng để phóng to/thu nhỏ (Zoom) màn hình làm việc."
  },
  {
    "q": "Câu 8: Trong PowerPoint 2007, Để chọn chế độ xem như: Normal, Outline View, Slide Sorter, Note Page, Reading View, ta chọn menu nào?",
    "options": [
      "View",
      "Home",
      "Design",
      "Animations"
    ],
    "answer": 0,
    "explain": "Tất cả các chế độ xem bài trình chiếu (Presentation Views) đều được quản lý tại thẻ View."
  },
  {
    "q": "Câu 9: Giả sử ta đang mở một tập tin PowerPoint 2007, sau khi chỉnh sửa, để lưu đè lên tập tin cũ, ta có thể",
    "options": [
      "Chọn Home / Save",
      "Chọn Home / Save As",
      "Nhấn Ctrl + S",
      "Nhấn phím F12"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím Ctrl + S dùng để lưu nhanh nội dung đã chỉnh sửa đè lên tệp hiện tại."
  },
  {
    "q": "Câu 10: Trong PowerPoint 2007, Thao tác chọn Office Button / Open là để:",
    "options": [
      "Mở một tập tin PowerPoint đã có trên đĩa",
      "Tạo mới một tập tin PowerPoint để thiết kế bài trình diễn",
      "Lưu lại tập tin PowerPoint đang thiết kế",
      "Lưu lại tập tin PowerPoint đang thiết kế với một tên khác"
    ],
    "answer": 0,
    "explain": "Lệnh Open (hoặc Ctrl + O) dùng để mở các bài trình diễn đã lưu trước đó trên máy tính."
  },
  {
    "q": "Câu 11: Trong cửa sổ My Computer nếu ta chọn một tập tin PowerPoint rồi nhấn phím Enter, thì sẽ",
    "options": [
      "Chỉ khởi động Powerpoint",
      "Khởi động Powerpoint và mở tập tin",
      "Mở tập tin bằng phần mềm Winword",
      "Máy sẽ báo lỗi vì không mở được tập tin này"
    ],
    "answer": 1,
    "explain": "Nhấn Enter vào tệp tin sẽ tự động mở chương trình PowerPoint tương ứng và nạp tập tin đó lên."
  },
  {
    "q": "Câu 12: Trong PowerPoint 2007, dùng phím tắt gì để tạo mới một bài trình chiếu (Presentation)?",
    "options": [
      "Ctrl + M",
      "Ctrl + N",
      "Ctrl + O",
      "Ctrl + P"
    ],
    "answer": 1,
    "explain": "Tổ hợp phím Ctrl + N (New) được dùng để khởi tạo một bài trình chiếu trống mới."
  },
  {
    "q": "Câu 13: Trong các menu sau, menu nào có cả trong Word 2007 và Excel 2007 nhưng không có trong Powerpoint 2007?",
    "options": [
      "Home",
      "View",
      "Page Layout",
      "Review"
    ],
    "answer": 2,
    "explain": "PowerPoint 2007 không có menu Page Layout riêng biệt như Word và Excel."
  },
  {
    "q": "Câu 14: Menu nào chỉ có trong Powerpoint 2007 mà không có trong Word 2007 và Excel 2007?",
    "options": [
      "Home",
      "Animations",
      "View",
      "Review"
    ],
    "answer": 1,
    "explain": "Thẻ Animations chứa các hiệu ứng chuyển động chuyên biệt chỉ dành cho bài trình chiếu PowerPoint."
  },
  {
    "q": "Câu 15: Trong PowerPoint 2007, để thêm một Slide mới, ta thực hiện:",
    "options": [
      "Home / New Slide",
      "Slide Show / New Slide",
      "Insert / New Slide",
      "View / New Slide"
    ],
    "answer": 0,
    "explain": "Lệnh thêm trang slide mới (New Slide) nằm ở thẻ Home, nhóm Slides."
  },
  {
    "q": "Câu 16: Trong PowerPoint 2007, Thao tác chọn Office Button / Close dùng để:",
    "options": [
      "Đóng tất cả các tập tin đang mở",
      "Đóng tất cả các chương trình đang chạy",
      "Đóng tập tin hiện tại",
      "Thoát khỏi Powerpoint"
    ],
    "answer": 2,
    "explain": "Lệnh Close chỉ đóng tệp bài trình diễn đang làm việc hiện tại mà không thoát khỏi phần mềm."
  },
  {
    "q": "Câu 17: Trong PowerPoint 2007, muốn mở một tập tin đã tồn tại trên đĩa, sau khi khởi động PowerPoint ta sử dụng tổ hợp phím:",
    "options": [
      "Ctrl + O",
      "Ctrl + N",
      "Ctrl + S",
      "Ctrl + C"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím Ctrl + O (Open) được dùng để mở tệp tin đã lưu."
  },
  {
    "q": "Câu 18: Trong PowerPoint 2007, để lưu lại bài trình chiếu, ta dùng tổ hợp phím:",
    "options": [
      "Ctrl + A",
      "Ctrl + S",
      "Ctrl + D",
      "Ctrl + F"
    ],
    "answer": 1,
    "explain": "Ctrl + S (Save) là tổ hợp phím lưu tệp tin."
  },
  {
    "q": "Câu 19: Trong PowerPoint 2007, Điều gì xảy ra khi chọn nhiều tập tin trình chiếu và nhấn phím Enter?",
    "options": [
      "Báo lỗi, Không có tập tin nào được mở.",
      "Chỉ tập tin được chọn đầu tiên sẽ mở.",
      "Chỉ tập tin được chọn cuối cùng sẽ mở.",
      "Tất cả các tập tin được chọn sẽ được mở cùng một lúc."
    ],
    "answer": 3,
    "explain": "Hệ điều hành Windows sẽ mở đồng thời tất cả các tệp PowerPoint đang được bôi đen chọn khi ấn Enter."
  },
  {
    "q": "Câu 20: Trong PowerPoint 2007, Mỗi trang trình chiếu trong một bài trình chiếu được gọi là gì?",
    "options": [
      "Một Document",
      "Một Slide",
      "Một bài trình chiếu",
      "Một tập tin trình chiếu"
    ],
    "answer": 1,
    "explain": "Mỗi trang thành phần trong bài trình chiếu PowerPoint được gọi là một Slide (trang chiếu)."
  },
  {
    "q": "Câu 21: Trong PowerPoint 2007, để chuyển các chế độ hiển thị slide ta chọn menu nào?",
    "options": [
      "Home",
      "View",
      "Review",
      "Slide Show"
    ],
    "answer": 1,
    "explain": "Các lựa chọn hiển thị (View modes) được thực hiện trong menu View."
  },
  {
    "q": "Câu 22: Muốn lưu tập tin Powerpoint theo một dạng tập tin khác, ta chọn dạng tập tin cần lưu tại mục nào trong hộp thoại Save As?",
    "options": [
      "Type of File",
      "File of Type",
      "Save as Type",
      "Save of Type"
    ],
    "answer": 2,
    "explain": "Mục 'Save as type' trong cửa sổ Save As cho phép chọn định dạng tệp cần xuất (ví dụ .pdf, .ppsx, .potx...)."
  },
  {
    "q": "Câu 23: Trong PowerPoint 2007, phím F12 dùng thể thực hiện thao tác gì?",
    "options": [
      "Mở tập tin",
      "Xóa tập tin",
      "Đóng tập tin",
      "Lưu tập tin với tên khác"
    ],
    "answer": 3,
    "explain": "Phím F12 là phím tắt mở nhanh hộp thoại Save As (Lưu tệp dưới tên/định dạng khác)."
  },
  {
    "q": "Câu 24: Trong PowerPoint 2007, Chế độ hiển thị nào cho phép soạn thảo nội dung slide?",
    "options": [
      "Slide Sorter",
      "Normal",
      "Note Page",
      "Reading View"
    ],
    "answer": 1,
    "explain": "Chế độ Normal là chế độ xem mặc định dùng để thiết kế và soạn thảo nội dung trên các slide."
  },
  {
    "q": "Câu 25: Trong PowerPoint 2007, Muốn cho cửa sổ thiết kế Slide hiển thị vừa đủ trên màn hình, ta chọn",
    "options": [
      "Home / Fit to Window",
      "Design / Fit to Window",
      "Slide Show / Fit to Window",
      "View / Fit to Window"
    ],
    "answer": 3,
    "explain": "Chức năng Fit to Window nằm trong nhóm Zoom thuộc menu View."
  },
  {
    "q": "Câu 26: Trong PowerPoint 2007, trong cửa sổ trình chiếu muốn chuyển nhanh đến slide nào đó ta thực hiện :",
    "options": [
      "Nhấn phím Ctrl + G",
      "Nhấn phím Ctrl + H",
      "Nhấp chuột phải, chọn Go to Slide",
      "Nhấp chuột phải, chọn Goto.."
    ],
    "answer": 2,
    "explain": "Khi đang ở chế độ trình chiếu, kích chuột phải chọn 'Go to Slide' giúp điều hướng nhanh đến slide mong muốn."
  },
  {
    "q": "Câu 27: Trong PowerPoint 2007, Chọn một slide và nhấn Ctrl + D sẽ có kết quả gì?",
    "options": [
      "Xóa slide đang chọn",
      "Nhân đôi slide đang chọn",
      "Di chuyển xuống slide dưới",
      "Chèn hình ảnh"
    ],
    "answer": 1,
    "explain": "Tổ hợp phím Ctrl + D dùng để nhân bản (Duplicate) slide được chọn."
  },
  {
    "q": "Câu 28: Trong PowerPoint 2007, tại Slide hiện hành ta nhấp chuột phải chọn New Slide là để:",
    "options": [
      "Chèn thêm một slide mới vào ngay trước slide hiện hành",
      "Chèn thêm một slide mới vào ngay sau slide hiện hành",
      "Chèn thêm một slide mới vào ngay trước slide đầu tiên",
      "Chèn thêm một slide mới vào ngay sau slide cuối cùng"
    ],
    "answer": 1,
    "explain": "Thao tác chèn New Slide sẽ luôn chèn trang mới ngay bên dưới/sau trang slide hiện tại."
  },
  {
    "q": "Câu 29: Trong PowerPoint 2007, thao tác click chuột phải lên slide hiện hành chọn Delete Slide là để",
    "options": [
      "Xóa slide hiện hành",
      "Xóa nội dung trên slide hiện hành",
      "Xóa tất cả các slide trong bài trình diễn đang thiết kế",
      "Xóa các đối tượng hình vẽ trong slide hiện hành"
    ],
    "answer": 0,
    "explain": "Lệnh Delete Slide sẽ xóa toàn bộ slide đang được chọn khỏi bài trình chiếu."
  },
  {
    "q": "Câu 30: Trong PowerPoint 2007, để tạo một slide giống hệt như slide hiện hành mà không phải thiết kế lại, ta thực hiện thao tác chọn Slide hiện hành:",
    "options": [
      "Nhấp chuột phải, chọn Duplicate",
      "Nhấp chuột phải, chọn New Slide",
      "Nhấp chuột phải, chọn Duplicate Slide",
      "Nhấp chuột phải, chọn Insert Slide"
    ],
    "answer": 2,
    "explain": "Lệnh Duplicate Slide khi nhấp chuột phải cho phép tạo bản sao giống hệt slide hiện tại."
  },
  {
    "q": "Câu 31: Trong PowerPoint 2007, để thay đổi màu nền cho một slide trong bài trình chiếu ta thực hiện",
    "options": [
      "Chọn View / Background",
      "Chọn Format / Background",
      "Chọn Insert / Background",
      "Chọn Design / Background Style"
    ],
    "answer": 3,
    "explain": "Các kiểu màu nền được quản lý trong công cụ Background Styles thuộc menu Design."
  },
  {
    "q": "Câu 32: Trong PowerPoint 2007, Để dùng hình ảnh (có trên máy) làm hình nền cho một slide, ta thực hiện: Click chuột phải vào slide, chọn Format Background, sau đó chọn:",
    "options": [
      "Solid Fill",
      "Gradient Fill",
      "Picture and Texture Fill",
      "Pattern Fill"
    ],
    "answer": 2,
    "explain": "Tùy chọn Picture and Texture Fill cho phép chèn tệp hình ảnh từ máy tính làm nền slide."
  },
  {
    "q": "Câu 33: Trong PowerPoint 2007, muốn thay đổi mẫu thiết kế (Theme) của Slide, ta sử dụng menu nào?",
    "options": [
      "Transitions",
      "Design",
      "Home",
      "Animations"
    ],
    "answer": 1,
    "explain": "Các giao diện/chủ đề mẫu (Themes) của bài trình chiếu nằm trong menu Design."
  },
  {
    "q": "Câu 34: PowerPoint 2007 cho phép người sử dụng thiết kế một slide chủ chứa các định dạng chung của toàn bộ các slide trong bài trình diễn. Để thực hiện điều này, ta chọn:",
    "options": [
      "Insert / Slide Master",
      "Insert / Slide Formatter",
      "View / Slide Master",
      "View / Slide Formatter"
    ],
    "answer": 2,
    "explain": "Để mở chế độ chỉnh sửa slide chủ, chọn menu View -> chọn Slide Master."
  },
  {
    "q": "Câu 35: Trong PowerPoint 2007, lựa chọn phát biểu đúng nhất:",
    "options": [
      "Không thể đánh số trang cuối mỗi Slide",
      "Có thể tạo Footer cho Slide",
      "Không thể tạo Header cho Slide",
      "Không thể tạo Footer cho tất cả Slide"
    ],
    "answer": 1,
    "explain": "PowerPoint hỗ trợ chèn thông tin chân trang (Footer) cho từng slide hoặc tất cả các slide."
  },
  {
    "q": "Câu 36: Trong PowerPoint 2007, để hiển thị số thứ tự slide, ta chọn:",
    "options": [
      "Insert / Header & Footer",
      "Design / Header & Footer",
      "Insert / Page Number",
      "Design / Page Number"
    ],
    "answer": 0,
    "explain": "Tính năng đánh số slide nằm trong công cụ Header & Footer thuộc thẻ Insert."
  },
  {
    "q": "Câu 37: Trong PowerPoint 2007, để hiển thị ngày tháng trên slide, ta chọn:",
    "options": [
      "Insert / Header & Footer",
      "Design / Header & Footer",
      "Insert / Day and Month",
      "Design / Day and Month"
    ],
    "answer": 0,
    "explain": "Việc chèn ngày tháng (Date and Time) cũng được thực hiện thông qua hộp thoại Header & Footer trong thẻ Insert."
  },
  {
    "q": "Câu 38: Trong PowerPoint 2007, để thêm một slide mới, ta dùng tổ hợp phím:",
    "options": [
      "CTRL + N",
      "CTRL + M",
      "CTRL + O",
      "CTRL + L"
    ],
    "answer": 1,
    "explain": "Ctrl + M là phím tắt dùng để chèn nhanh một Slide mới."
  },
  {
    "q": "Câu 39: Trong PowerPoint 2007, để chọn tất cả các đối tượng trên Slide ta dùng tổ hợp phím nào sau đây?",
    "options": [
      "CTRL + U",
      "CTRL + B",
      "CTRL + A",
      "CTRL + I"
    ],
    "answer": 2,
    "explain": "Ctrl + A (Select All) dùng để chọn toàn bộ các đối tượng đang có trên trang slide."
  },
  {
    "q": "Câu 40: Trong PowerPoint 2007, để chọn tất cả các đối tượng trên Slide ta thực hiện:",
    "options": [
      "Home / Select / Select All",
      "Insert / Select / Select All",
      "Home / Select All",
      "Animation / Select All"
    ],
    "answer": 0,
    "explain": "Lệnh chọn tất cả trên thanh công cụ nằm tại Home -> Select -> Select All."
  },
  {
    "q": "Câu 41: Trong PowerPoint 2007, khi đang soạn thảo slide muốn chuyển sang slide kế tiếp, ta nhấn phím",
    "options": [
      "Mũi tên xuống",
      "Ctrl + Mũi tên xuống",
      "Phím Page Down",
      "Phím End"
    ],
    "answer": 2,
    "explain": "Phím Page Down dùng để di chuyển chuyển sang slide kế tiếp ngay sau đó."
  },
  {
    "q": "Câu 42: Trong PowerPoint 2007, để khôi phục lại một thao tác, ta nhấn phím:",
    "options": [
      "CTRL + U",
      "CTRL + Z",
      "CTRL + A",
      "CTRL + D"
    ],
    "answer": 1,
    "explain": "Ctrl + Z (Undo) dùng để hoàn tác/khôi phục lại thao tác trước đó."
  },
  {
    "q": "Câu 43: Trong PowerPoint 2007, để sắp xếp các slide dễ dàng, ta chọn chế độ xem nào?",
    "options": [
      "View / Slide Sorter",
      "View / Normal",
      "View / Outline View",
      "View / Notes Page"
    ],
    "answer": 0,
    "explain": "Chế độ Slide Sorter hiển thị các slide ở dạng thu nhỏ giúp dễ dàng sắp xếp, quản lý thứ tự."
  },
  {
    "q": "Câu 44: Trong PowerPoint 2007, để thay đổi bố cục cho một slide, ta Click phải chuột vào slide, ta chọn:",
    "options": [
      "Slide Master",
      "Reset Slide",
      "Format Background",
      "Layout"
    ],
    "answer": 3,
    "explain": "Tùy chọn Layout trong menu chuột phải cho phép thay đổi cấu trúc bố cục của trang slide."
  },
  {
    "q": "Câu 45: Trong PowerPoint 2007, để tự xây dựng mới một layout, ta chọn",
    "options": [
      "View / Slide Master",
      "View / Layout",
      "Insert / Slide Master",
      "Insert / Layout"
    ],
    "answer": 0,
    "explain": "Để thêm mới hoặc chỉnh sửa các mẫu bố cục layout, cần truy cập chế độ View -> Slide Master."
  },
  {
    "q": "Câu 46: Trong PowerPoint 2007, muốn áp dụng một chủ đề thiết kế (theme) có sẵn vào bài trình chiếu ta chọn:",
    "options": [
      "Design / Themes",
      "Insert / Themes",
      "Format / Themes",
      "Home / Themes"
    ],
    "answer": 0,
    "explain": "Danh sách chủ đề thiết kế Themes nằm trong nhóm Themes của menu Design."
  },
  {
    "q": "Câu 47: Trong PowerPoint 2007, khi thiết kế bài trình chiếu, để thống nhất phông chữ, kích thước chữ, hiệu ứng, màu nền... trên toàn bộ bài trình chiếu, ta cần sử dụng:",
    "options": [
      "Design Unit",
      "Slide Design",
      "Slide Master",
      "Slide Show"
    ],
    "answer": 2,
    "explain": "Slide Master đóng vai trò là slide mẫu quy định các thiết lập chung đồng bộ cho cả bài thuyết trình."
  },
  {
    "q": "Câu 48: Trong PowerPoint 2007, Muốn ẩn một trang trình chiếu (slide) để nó không hiện lên khi thực hiện trình chiếu, ta Click phải vào slide đó, rồi chọn:",
    "options": [
      "Turn off slide show",
      "Hide Slide",
      "Undisplay slide",
      "Disable"
    ],
    "answer": 1,
    "explain": "Chức năng Hide Slide dùng để ẩn slide khỏi quá trình trình chiếu mà không cần xóa nó."
  },
  {
    "q": "Câu 49: Trong PowerPoint 2007, Để thay đổi kích thước trang trình chiếu, ta thực hiện:",
    "options": [
      "Design / Slide Size",
      "Home / Slide Size",
      "View / Slide Size",
      "Review / Slide Size"
    ],
    "answer": 0,
    "explain": "Cấu hình kích thước trang chiếu (Slide Size / Page Setup) nằm trong menu Design."
  },
  {
    "q": "Câu 50: Trong PowerPoint 2007, Trong khi thiết kế slide ta thường hay gặp cụm từ \"Apply to All\", cụm từ này có nghĩa gì?",
    "options": [
      "Áp dụng hiệu ứng có tất cả các đối tượng trong slide",
      "Áp dụng cho tất cả các slide",
      "Không gặp cụm từ này",
      "Sử dụng cách thiết kế chung cho tất cả các slide"
    ],
    "answer": 1,
    "explain": "'Apply to All' có nghĩa là áp dụng cài đặt thiết lập hiện tại cho toàn bộ các slide có trong bài."
  },
  {
    "q": "Câu 51: Trong PowerPoint 2007, muốn xem các slide theo chế độ màu trắng-xám-đen, ta chọn:",
    "options": [
      "Home / Greyscale",
      "Review / Greyscale",
      "View / Greyscale",
      "Design / Greyscale"
    ],
    "answer": 2,
    "explain": "Chế độ xem màu xám Grayscale nằm trong nhóm Color/Grayscale của menu View."
  },
  {
    "q": "Câu 52: Trong PowerPoint 2007, muốn hiện/ẩn đường lưới trong slide, ta chọn:",
    "options": [
      "Home / Gridlines",
      "View / Gridlines",
      "Review / Gridlines",
      "Design / Gridlines"
    ],
    "answer": 1,
    "explain": "Đường lưới Gridlines được quản lý ẩn/hiện tại menu View."
  },
  {
    "q": "Câu 53: Trong PowerPoint 2007, để định dạng dòng chữ “Tình yêu” thành “Tình yêu” (kiểu chữ đậm, nghiêng, gạch dưới), toàn bộ các thao tác phải thực hiện là:",
    "options": [
      "Đưa con trỏ văn bản vào giữa dòng chữ đó, nhấn Ctrl + U, Ctrl + I và Ctrl + B",
      "Đặt con trỏ văn bản tại dòng chữ đó, nhấn Ctrl + B, Ctrl + U và Ctrl + I",
      "Chọn dòng chữ đó, nhấn Ctrl + U, Ctrl + I và Ctrl + B",
      "Nhấn Ctrl + U, Ctrl + I và Ctrl + B"
    ],
    "answer": 2,
    "explain": "Cần bôi đen/chọn đoạn văn bản trước, sau đó áp dụng các phím tắt Ctrl + B (đậm), Ctrl + I (nghiêng), Ctrl + U (gạch chân)."
  },
  {
    "q": "Câu 54: Trong PowerPoint 2007, để lưu một đoạn văn bản đã được chọn vào vùng nhớ đệm (clipboard) mà không làm mất đi đoạn văn bản đó ta sử dụng tổ hợp phím",
    "options": [
      "Ctrl + X",
      "Ctrl + Z",
      "Ctrl + C",
      "Ctrl + V"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím Ctrl + C (Copy) sao chép dữ liệu vào bộ nhớ tạm mà giữ nguyên văn bản gốc."
  },
  {
    "q": "Câu 55: Trong PowerPoint 2007, để chèn ký hiệu đặc biệt, ví dụ: a, j, p, ³, ta vào mục:",
    "options": [
      "Insert / Special Notation",
      "Insert / Symbol",
      "Add / Special Notation",
      "Add / Symbol"
    ],
    "answer": 1,
    "explain": "Công cụ chèn ký tự đặc biệt Symbol nằm ở nhóm Symbols thuộc thẻ Insert."
  },
  {
    "q": "Câu 56: Trong PowerPoint 2007, để in đậm một đoạn văn bản, ta chọn đoạn văn đó và nhấn:",
    "options": [
      "Ctr + U",
      "Ctr + I",
      "Ctr + B",
      "Ctr + A"
    ],
    "answer": 2,
    "explain": "Ctrl + B (Bold) dùng để bật/tắt định dạng in đậm."
  },
  {
    "q": "Câu 57: Trong PowerPoint 2007, để in nghiêng một đoạn văn bản, ta chọn đoạn văn đó và nhấn:",
    "options": [
      "Ctr + U",
      "Ctr + I",
      "Ctr + B",
      "Ctr + A"
    ],
    "answer": 1,
    "explain": "Ctrl + I (Italic) dùng để bật/tắt định dạng in nghiêng."
  },
  {
    "q": "Câu 58: Trong PowerPoint 2007, để tạo gạch chân cho một đoạn văn bản, ta chọn đoạn văn đó và nhấn:",
    "options": [
      "Ctr + U",
      "Ctr + I",
      "Ctr + B",
      "Ctr + A"
    ],
    "answer": 0,
    "explain": "Ctrl + U (Underline) dùng để bật/tắt định dạng gạch chân."
  },
  {
    "q": "Câu 59: Trong PowerPoint 2007, giả sử có một đoạn văn bản \"việt nam\", muốn chuyển thành chữ hoa thành \"VIỆT NAM\", ta chọn menu Home / Font, và chọn:",
    "options": [
      "Change Case / Upper case",
      "Change Case / Lower case",
      "Change Case / Sentence",
      "Change Case / Captialize each word"
    ],
    "answer": 0,
    "explain": "Tùy chọn UPPERCASE trong Change Case dùng để chuyển toàn bộ chữ thường thành chữ IN HOA."
  },
  {
    "q": "Câu 60: Trong PowerPoint 2007, Giả sử có một đoạn văn bản \"nguyễn du\", muốn chuyển thành chữ hoa \"Nguyễn Du\", ta vào thẻ Home / Font, và chọn:",
    "options": [
      "Change Case / Upper case",
      "Change Case / Lower case",
      "Change Case / Sentence",
      "Change Case / Captialize each word"
    ],
    "answer": 3,
    "explain": "Tùy chọn Capitalize Each Word dùng để viết hoa chữ cái đầu tiên của mỗi từ."
  },
  {
    "q": "Câu 61: Trong PowerPoint 2007, Giả sử có đoạn văn \"50.000$\", muốn viết thành \"50.000$\", ta vào thẻ Home / Font và chọn:",
    "options": [
      "Add line",
      "Strikethrough",
      "Under line",
      "Middle line"
    ],
    "answer": 1,
    "explain": "Định dạng Strikethrough tạo hiệu ứng gạch ngang giữa dòng chữ."
  },
  {
    "q": "Câu 62: Trong PowerPoint 2007, Muốn tạo chữ đổ bóng, ta vào Home / Font và chọn:",
    "options": [
      "Shading",
      "Fill Shadow",
      "Shadow",
      "Text shadow"
    ],
    "answer": 3,
    "explain": "Nút Text Shadow (biểu tượng chữ S) trong nhóm Font dùng để tạo bóng cho chữ."
  },
  {
    "q": "Câu 63: Trong PowerPoint 2007, Muốn canh lề trái cho một đoạn văn, ta nhấn tổ hợp phím:",
    "options": [
      "Ctrl + L",
      "Ctrl + R",
      "Ctrl + E",
      "Ctrl + J"
    ],
    "answer": 0,
    "explain": "Ctrl + L (Align Left) dùng để căn lề trái văn bản."
  },
  {
    "q": "Câu 64: Trong PowerPoint 2007, Muốn canh lề phải cho một đoạn văn, ta nhấn tổ hợp phím:",
    "options": [
      "Ctrl + L",
      "Ctrl + R",
      "Ctrl + E",
      "Ctrl + J"
    ],
    "answer": 1,
    "explain": "Ctrl + R (Align Right) dùng để căn lề phải văn bản."
  },
  {
    "q": "Câu 65: Trong PowerPoint 2007, Muốn canh giữa cho một đoạn văn, ta nhấn tổ hợp phím:",
    "options": [
      "Ctrl + L",
      "Ctrl + R",
      "Ctrl + E",
      "Ctrl + J"
    ],
    "answer": 2,
    "explain": "Ctrl + E (Center) dùng để căn giữa văn bản."
  },
  {
    "q": "Câu 66: Trong PowerPoint 2007, Muốn canh đều hai biên cho một đoạn văn, ta nhấn tổ hợp phím:",
    "options": [
      "Ctrl + L",
      "Ctrl + R",
      "Ctrl + E",
      "Ctrl + J"
    ],
    "answer": 3,
    "explain": "Ctrl + J (Justify) dùng để căn đều hai bên lề cho đoạn văn."
  },
  {
    "q": "Câu 67: Trong PowerPoint 2007, Muốn thay đổi màu cho văn bản trong slide, ta chọn trong nhóm nào của menu Home?",
    "options": [
      "Format",
      "Font",
      "Alignments",
      "Paragraph"
    ],
    "answer": 1,
    "explain": "Công cụ đổi màu chữ Font Color nằm trong nhóm Font trên thẻ Home."
  },
  {
    "q": "Câu 68: Trong PowerPoint 2007, Muốn thay đổi khoảng cách giữa các từ trong đoạn văn bản được chọn, ta thực hiện:",
    "options": [
      "Home / Character Spacing",
      "Edit / Character Spacing",
      "Format / Character Spacing",
      "Design/ Character Spacing"
    ],
    "answer": 0,
    "explain": "Công cụ Character Spacing (AV) nằm trong nhóm Font trên thẻ Home."
  },
  {
    "q": "Câu 69: Trong PowerPoint 2007, Muốn thay đổi khoảng cách giữa các dòng trong văn bản được chọn, ta thực hiện:",
    "options": [
      "Home / Line Spacing",
      "Format / Line Spacing",
      "Design / Line Spacing",
      "Slide Show / Line Spacing"
    ],
    "answer": 0,
    "explain": "Tính năng Line Spacing dùng để chỉnh khoảng cách dòng nằm trong nhóm Paragraph trên thẻ Home."
  },
  {
    "q": "Câu 70: Trong PowerPoint 2007, khi ta chọn menu Home / Reset, có nghĩa là gì?",
    "options": [
      "Khởi động lại Powerpoint",
      "Xóa tất cả dữ liệu trong slide",
      "Trở về định dạng chuẩn của slide mẫu",
      "Phục hồi lại dữ liệu chuẩn"
    ],
    "answer": 2,
    "explain": "Lệnh Reset đưa vị trí, kích thước và định dạng của các ô nội dung về trạng thái mặc định của Slide Master."
  },
  {
    "q": "Câu 71: Trong PowerPoint 2007, để tạo danh sách liệt kê dùng ký hiệu, ta vào thẻ Home / Paragraph và chọn:",
    "options": [
      "Bullets",
      "Numbering",
      "Symbol",
      "Bullet and Numbering"
    ],
    "answer": 0,
    "explain": "Bullets dùng để tạo danh sách liệt kê không thứ tự bằng các ký hiệu chấm, vuông, v.v."
  },
  {
    "q": "Câu 72: Trong PowerPoint 2007, để tạo danh sách liệt kê dùng số thứ tự, ta chọn menu Home / Paragraph và chọn:",
    "options": [
      "Bullets",
      "Numbering",
      "Symbol",
      "Bullet and Numbering"
    ],
    "answer": 1,
    "explain": "Numbering dùng để tạo danh sách đánh số hoặc chữ cái theo thứ tự."
  },
  {
    "q": "Câu 73: Trong PowerPoint 2007, trong danh sách, để thụt vào trong một cấp, ta vào menu Home / Paragraph và chọn:",
    "options": [
      "Decrease List Level",
      "Increase List Level",
      "Push in",
      "Push out"
    ],
    "answer": 1,
    "explain": "Increase List Level (hoặc phím Tab) dùng để tăng cấp độ thụt lề vào trong."
  },
  {
    "q": "Câu 74: Trong PowerPoint 2007, trong danh sách, để đẩy ra ngoài một cấp, ta vào menu Home / Paragraph và chọn:",
    "options": [
      "Decrease List Level",
      "Increase List Level",
      "Push in",
      "Push out"
    ],
    "answer": 0,
    "explain": "Decrease List Level (hoặc phím Shift + Tab) dùng để giảm cấp độ thụt lề ra ngoài."
  },
  {
    "q": "Câu 75: Trong PowerPoint 2007, để thực hiện việc chèn bảng biểu vào slide ta chọn:",
    "options": [
      "Chọn Table / Insert Table",
      "Chọn Table / Insert",
      "Chọn Insert / Table",
      "Chọn Format / Table"
    ],
    "answer": 2,
    "explain": "Thao tác chèn bảng được thực hiện bằng cách truy cập thẻ Insert -> Table."
  },
  {
    "q": "Câu 76: Trong PowerPoint 2007, Cho phép chèn một bảng có tối đa bao nhiêu cột?",
    "options": [
      "31 cột",
      "75 cột",
      "256 cột",
      "Không giới hạn số cột"
    ],
    "answer": 1,
    "explain": "Giới hạn tối đa số cột cho một bảng trong PowerPoint là 75 cột."
  },
  {
    "q": "Câu 77: Trong PowerPoint 2007, Cho phép chèn một bảng có tối đa bao nhiêu dòng?",
    "options": [
      "31 dòng",
      "75 dòng",
      "256 dòng",
      "Không giới hạn số dòng"
    ],
    "answer": 1,
    "explain": "Giới hạn tối đa số hàng/dòng cho một bảng trong PowerPoint là 75 dòng."
  },
  {
    "q": "Câu 78: Trong PowerPoint 2007, Sau khi đã chèn một bảng biểu vào slide, muốn chia một ô nào đó thành 2 ô ta chọn:",
    "options": [
      "Home / Split Cells",
      "Design / Split Cells",
      "Layout / Split Cells",
      "Table / Split Cells"
    ],
    "answer": 2,
    "explain": "Công cụ Split Cells (tach ô) nằm trong thẻ ngữ cảnh Table Tools -> Layout."
  },
  {
    "q": "Câu 79: Trong PowerPoint 2007, muốn xóa một cột trong bảng, ta chọn cột đó, Click chuột phải và chọn:",
    "options": [
      "Delete / Delete Columns",
      "Delete Columns",
      "Delete / Columns",
      "Delete All Columns"
    ],
    "answer": 1,
    "explain": "Khi kích chuột phải vào cột đã chọn trong bảng, menu ngữ cảnh cung cấp tùy chọn Delete Columns."
  },
  {
    "q": "Câu 80: Trong PowerPoint 2007, muốn xóa một dòng trong bảng, ta nhấp chuột tại dòng đó, rồi chọn:",
    "options": [
      "Home / Delete /Delete Rows",
      "Design / Delete /Delete Rows",
      "Layout / Delete /Delete Rows",
      "Design / Delete Rows"
    ],
    "answer": 2,
    "explain": "Thao tác xóa dòng chuẩn qua thanh công cụ là Table Tools -> Layout -> Delete -> Delete Rows."
  },
  {
    "q": "Câu 81: Trong PowerPoint 2007, muốn chèn thêm một dòng mới bên dưới dòng đang chọn, ta chọn:",
    "options": [
      "Layout / Insert Row",
      "Layout / Insert Below",
      "Design / Insert Row",
      "Design / Insert Below"
    ],
    "answer": 1,
    "explain": "Lệnh Insert Below nằm trong nhóm Rows & Columns trên thẻ Layout của Table Tools."
  },
  {
    "q": "Câu 82: Trong PowerPoint 2007, Muốn chèn thêm một cột mới bên trái cột đang chọn, ta chọn:",
    "options": [
      "Layout / Insert Left",
      "Layout / Insert Column",
      "Design / Insert Left",
      "Design / Insert Column"
    ],
    "answer": 0,
    "explain": "Lệnh Insert Left nằm trong nhóm Rows & Columns trên thẻ Layout của Table Tools."
  },
  {
    "q": "Câu 83: Trong PowerPoint 2007, giả sử con trỏ chuột đang đặt ở ô cuối cùng trong một bảng, nếu nhấn phím Tab, điều gì sẽ xảy ra:",
    "options": [
      "Con trỏ chuột nhảy về ô đầu tiên",
      "Con trỏ chuột không nhúc nhích",
      "Thêm một dòng mới",
      "Thêm một cột mới"
    ],
    "answer": 2,
    "explain": "Nhấn Tab tại ô cuối cùng của bảng sẽ tự động chèn thêm một dòng mới ở dưới cùng."
  },
  {
    "q": "Câu 84: Trong PowerPoint 2007, để di chuyển con trỏ đến một ô kế tiếp trong bảng, ta nhấn phím :",
    "options": [
      "Tab",
      "Shift + Tab",
      "Backspace",
      "Enter"
    ],
    "answer": 0,
    "explain": "Phím Tab dùng để di chuyển con trỏ soạn thảo sang ô tiếp theo bên phải (hoặc đầu dòng kế tiếp)."
  },
  {
    "q": "Câu 85: Trong PowerPoint 2007, để di chuyển lùi về một ô trong bảng, ta nhấn phím:",
    "options": [
      "Tab",
      "Shift + Tab",
      "Backspace",
      "Enter"
    ],
    "answer": 1,
    "explain": "Tổ hợp phím Shift + Tab dùng để di chuyển con trỏ ngược lại ô phía trước."
  },
  {
    "q": "Câu 86: Trong PowerPoint 2007, muốn làm cho các cột trong bảng có độ rộng bằng nhau, ta chọn các cột, sau đó vào LAYOUT chọn:",
    "options": [
      "Distribute Rows",
      "Distribute Columns",
      "Justify Rows",
      "Justify Columns"
    ],
    "answer": 1,
    "explain": "Distribute Columns dàn đều chiều rộng cho các cột được chọn."
  },
  {
    "q": "Câu 87: Trong PowerPoint 2007, muốn ghép hai ô trong bảng lại với nhau, ta chọn hai ô tương ứng rồi vào menu Layout chọn:",
    "options": [
      "Group Cells",
      "Merge Cells",
      "Join Cells",
      "Split Cells"
    ],
    "answer": 1,
    "explain": "Merge Cells dùng để hợp nhất hai hay nhiều ô đã chọn thành một ô duy nhất."
  },
  {
    "q": "Câu 88: Trong PowerPoint 2007, để điều chỉnh hướng chữ trong một ô của bảng (ví dụ chữ viết theo chiều từ dưới lên), ta chọn ô đó, vào menu Layout chọn:",
    "options": [
      "Change Text Display",
      "Distribute Text",
      "Text Bottom Up",
      "Text Direction"
    ],
    "answer": 3,
    "explain": "Text Direction trong thẻ Layout giúp xoay hướng văn bản bên trong ô bảng."
  },
  {
    "q": "Câu 89: Trong PowerPoint 2007, muốn thay đổi độ rộng của cột trong bảng, ta thực hiện:",
    "options": [
      "Nhấp chuột vào cột, rồi nhập độ rộng cho cột.",
      "Trỏ chuột tại đường biên của cột, khi có mũi tên 2 chiều, rê chuột để thay đổi độ rộng",
      "Trỏ chuột tại đường biên của cột, kéo chuột đến vị trí mới để thay đổi độ rộng.",
      "Trỏ chuột tại đường biên xung quanh, khi có mũi tên 2 chiều, rê chuột để thay đổi độ rộng"
    ],
    "answer": 1,
    "explain": "Đưa con trỏ vào đường ranh giới giữa 2 cột cho đến khi xuất hiện mũi tên hai chiều rồi kéo rê để chỉnh độ rộng."
  },
  {
    "q": "Câu 90: Trong PowerPoint 2007, muốn đánh dấu chọn cả một dòng của bảng, ta thực hiện:",
    "options": [
      "Nhấp chuột vào ô đầu tiên của dòng cần chọn",
      "Trỏ chuột vào ô đầu tiên của dòng khi con trỏ chuột có hình mũi tên màu trắng rồi nhấp chuột.",
      "Trỏ chuột vào phía trước ô đầu tiên của dòng khi con trỏ chuột có hình mũi tên màu đen rồi nhấp chuột.",
      "Nhấp chuột phải tại dòng cần đánh dấu, chọn Select Rows"
    ],
    "answer": 2,
    "explain": "Di chuyển con trỏ ra mép ngoài bên trái dòng cho đến khi thành mũi tên đen nhỏ hướng vào dòng rồi kích chuột để chọn cả dòng."
  },
  {
    "q": "Câu 91: Trong PowerPoint 2007, Để vẽ một biểu đồ, trước tiên ta cần phải có?",
    "options": [
      "Một slide trống",
      "Các dạng biểu đồ",
      "Bảng số liệu",
      "Biểu đồ để so sánh"
    ],
    "answer": 2,
    "explain": "Mọi biểu đồ đều cần nguồn dữ liệu gốc (bảng số liệu) để biểu diễn."
  },
  {
    "q": "Câu 92: Trong PowerPoint 2007, Để thêm vào một biểu đồ dạng cột, ta thực hiện:",
    "options": [
      "Insert / Chart",
      "Home / Chart",
      "Design / Chart",
      "View / Chart"
    ],
    "answer": 0,
    "explain": "Lệnh chèn biểu đồ nằm tại Insert -> Chart."
  },
  {
    "q": "Câu 93: Trong PowerPoint 2007, để thay đổi dữ liệu cho một biểu đồ, ta chọn biểu đồ đó và chọn:",
    "options": [
      "Layout / Edit Data",
      "Design / Edit Data",
      "Home / Edit Data",
      "Chart / Edit Data"
    ],
    "answer": 1,
    "explain": "Nút Edit Data nằm trên thẻ ngữ cảnh Chart Tools -> Design."
  },
  {
    "q": "Câu 94: Trong PowerPoint 2007, để thay đổi dạng loại biểu đồ, ta nhấp chuột vào biểu đồ rồi chọn:",
    "options": [
      "Edit / Change Chart Type",
      "Layout / Change Chart Type",
      "Design / Change Chart Type",
      "Chart / Change Chart Type"
    ],
    "answer": 2,
    "explain": "Lệnh Change Chart Type nằm trong nhóm Type của thẻ Chart Tools -> Design."
  },
  {
    "q": "Câu 95: Trong PowerPoint 2007, để thay đổi màu cho các thành phần trên biểu đồ, ta nhấp vào phần cần thay đổi màu rồi chọn:",
    "options": [
      "Design / Shape Fill",
      "Format / Shape Fill",
      "Layout / Shape Fill",
      "View / Shape Fill"
    ],
    "answer": 1,
    "explain": "Định dạng màu sắc hình khối/thành phần thuộc thẻ Chart Tools -> Format -> Shape Fill."
  },
  {
    "q": "Câu 96: Trong PowerPoint 2007, để ghi số liệu lên biểu đồ, ta nhấp chuột vào biểu đồ rồi chọn:",
    "options": [
      "Edit / Data Labels",
      "Design / Data Labels",
      "Layout / Data Labels",
      "Format / Data Labels"
    ],
    "answer": 2,
    "explain": "Công cụ hiển thị nhãn dữ liệu Data Labels nằm trên thẻ Chart Tools -> Layout."
  },
  {
    "q": "Câu 97: Trong PowerPoint 2007, để vẽ một sơ đồ tổ chức, ta chọn",
    "options": [
      "Insert / Smart",
      "Insert / SmartArt",
      "Insert / Shape / SmartArt",
      "Design / SmartArt"
    ],
    "answer": 1,
    "explain": "Sơ đồ tổ chức được tạo thông qua tính năng Insert -> SmartArt."
  },
  {
    "q": "Câu 98: Trong PowerPoint 2007, sau khi vẽ một sơ đồ tổ chức, muốn thay đổi một đối tượng xuống cấp thấp hơn, ta nhấp chọn thành phần trong bảng danh sách, rồi nhấn phím:",
    "options": [
      "Ctrl",
      "Tab",
      "Shift + Tab",
      "Ctrl + Tab"
    ],
    "answer": 1,
    "explain": "Nhấn phím Tab trong cửa sổ nhập văn bản SmartArt sẽ hạ cấp (Demote) mục đó xuống một mức."
  },
  {
    "q": "Câu 99: Trong PowerPoint 2007, sau khi vẽ một sơ đồ tổ chức, muốn thay đổi thành một dạng sơ đồ khác, ta nhấp chuột vào sơ đồ rồi chọn:",
    "options": [
      "Home / Layouts",
      "Design / Layouts",
      "Edit / Change",
      "Format / Layouts"
    ],
    "answer": 1,
    "explain": "Đổi bố cục kiểu dáng SmartArt được thực hiện tại SmartArt Tools -> Design -> Layouts."
  },
  {
    "q": "Câu 100: Trong PowerPoint 2007, để chèn một hình ảnh có sẵn vào trong Slide, ta thực hiện",
    "options": [
      "Home / Picture",
      "Insert / Picture / From File",
      "Insert / Picture",
      "Insert / Picture and Clip Art"
    ],
    "answer": 2,
    "explain": "Lệnh chèn ảnh từ tệp tin trên máy tính là Insert -> Picture."
  },
  {
    "q": "Câu 101: Trong PowerPoint 2007, sau khi đã chèn một hình ảnh vào trong Slide, muốn thay đổi kích thước của hình ảnh ta thực hiện",
    "options": [
      "Nhấp chuột vào hình ảnh rồi nhập kích thước mới trong menu Home.",
      "Trỏ chuột tại các ô màu trắng, khi có mũi tên 2 chiều thì rê chuột để thay đổi kích thước",
      "Nhấp chuột vào hình ảnh rồi rê chuột đến vị trí mới để thay đổi kích thước",
      "Trỏ chuột tại các ô màu đỏ, khi có mũi tên 2 chiều thì rê chuột để thay đổi kích thước"
    ],
    "answer": 1,
    "explain": "Kéo rê các ô vuông/tròn màu trắng ở các góc và cạnh của hình ảnh khi xuất hiện mũi tên 2 chiều để thay đổi kích thước."
  },
  {
    "q": "Câu 102: Trong PowerPoint 2007, Sau khi đã chèn một hình ảnh vào trong Slide, muốn thay đổi vị trí của hình ảnh ta thực hiện",
    "options": [
      "Nhấp chuột vào hình ảnh rồi nhập vị trí mới cần đặt hình ảnh",
      "Trỏ chuột tại các ô màu trắng, khi có mũi tên 2 chiều thì rê chuột để thay đổi vị trí",
      "Nhấp chuột vào hình ảnh rồi rê chuột đến vị trí mới để thay đổi vị trí.",
      "Trỏ chuột tại các ô màu đỏ, khi có mũi tên 2 chiều thì rê chuột để thay đổi vị trí"
    ],
    "answer": 2,
    "explain": "Để di chuyển vị trí hình ảnh, kích chọn vào hình ảnh rồi nhấn giữ chuột rê đến vị trí mới."
  },
  {
    "q": "Câu 103: Trong PowerPoint 2007, sau khi đã chèn một hình ảnh vào trong Slide, nếu giữ phím Ctrl trong khi kích chuột và kéo hình đến vị trí mới. Điều gì sẽ xảy ra?",
    "options": [
      "Hình vừa chọn sẽ bị xóa khỏi slide",
      "Hình vừa chọn sẽ thay đổi kích thước",
      "Sẽ sao chép thành một hình ảnh mới",
      "Hình vừa chọn sẽ di chuyển đến vị trí mới"
    ],
    "answer": 2,
    "explain": "Giữ Ctrl trong khi kéo thả một đối tượng giúp nhân bản/sao chép nhanh đối tượng đó."
  },
  {
    "q": "Câu 104: Trong PowerPoint 2007, để tạo một hình tròn trên Slide, ta thực hiện",
    "options": [
      "Home / Shape",
      "Insert / Shape",
      "Design / Shape",
      "View / Shape"
    ],
    "answer": 1,
    "explain": "Các hình khối cơ bản (Shapes) được chèn từ Insert -> Shape (hoặc Shapes)."
  },
  {
    "q": "Câu 105: Trong PowerPoint 2007, để tạo một hình tròn trên Slide, trong khi chọn công cụ Elip để vẽ ta phải giữ thêm phím gì trong khi vẽ.",
    "options": [
      "Shift",
      "Ctrl",
      "Tab + Shift",
      "Alt + Ctrl"
    ],
    "answer": 0,
    "explain": "Giữ phím Shift trong khi vẽ bằng công cụ Oval/Elip sẽ tạo ra hình tròn hoàn hảo."
  },
  {
    "q": "Câu 106: Trong PowerPoint 2007, để tạo một hình tròn và có tâm tại điểm mình chọn trên Slide, trong khi chọn công cụ vẽ Elip để vẽ ta phải giữ thêm phím gì trong khi vẽ.",
    "options": [
      "Ctrl",
      "Ctrl + Shift",
      "Alt + Shift",
      "Alt + Ctrl + Shift"
    ],
    "answer": 1,
    "explain": "Giữ Shift để tạo hình tròn, kết hợp giữ Ctrl để vẽ hình bắt đầu từ tâm điểm kích chuột."
  },
  {
    "q": "Câu 107: Trong PowerPoint 2007, muốn thay đổi màu nền cho một hình (shape), ta nhấp chuột vào đối tượng đó rồi chọn:",
    "options": [
      "Home / Shape Fill",
      "Format / Shape Fill",
      "Design / Shape Fill",
      "Layout / Shape Fill"
    ],
    "answer": 1,
    "explain": "Đổi màu nền cho hình vẽ được thực hiện tại Drawing Tools -> Format -> Shape Fill."
  },
  {
    "q": "Câu 108: Trong PowerPoint 2007, muốn điều chỉnh đường viền (kích thước viền, kiểu viền, màu viền...) cho một hình (shape), ta nhấp chuột vào đối tượng đó rồi chọn:",
    "options": [
      "Format / Shape Fill",
      "Format / Shape Outline",
      "Design / Shape Effects",
      "Format / Shape Effects"
    ],
    "answer": 1,
    "explain": "Đường viền của đối tượng hình vẽ được tùy chỉnh tại Format -> Shape Outline."
  },
  {
    "q": "Câu 109: Trong PowerPoint 2007, muốn tạo hiệu ứng đổ bóng cho một hình (shape), ta nhấp chuột vào đối tượng đó rồi chọn:",
    "options": [
      "Design / Shape Effects",
      "Home / Shape Effects",
      "Format / Shape Effects",
      "Layout / Shape Effects"
    ],
    "answer": 2,
    "explain": "Các hiệu ứng hình ảnh như bóng (Shadow) nằm trong mục Format -> Shape Effects."
  },
  {
    "q": "Câu 110: Trong PowerPoint 2007, giả sử có một hình tròn (shape), muốn sao chép thêm một hình nữa thẳng hàng với hình có sẵn, trong khi kéo chuột ta giữ thêm phím gì?",
    "options": [
      "Shift",
      "Ctrl",
      "Ctrl + Shift",
      "Alt + Shift"
    ],
    "answer": 2,
    "explain": "Giữ Ctrl để sao chép hình và Shift để khóa hướng kéo thẳng hàng (ngang hoặc dọc)."
  },
  {
    "q": "Câu 111: Trong PowerPoint 2007, để tạo hiệu ứng 3D cho hình (shape), ta nhấp chuột vào đối tượng đó rồi chọn:",
    "options": [
      "Format / Shape Fill / 3D Rotation",
      "Format / Shape Outline / 3D Rotation",
      "Format / Shape Effects / 3D Rotation",
      "Design / Shape Effects / 3D Rotation"
    ],
    "answer": 2,
    "explain": "Tùy chọn xoay 3D nằm trong mục 3D Rotation thuộc Format -> Shape Effects."
  },
  {
    "q": "Câu 112: Trong PowerPoint 2007, muốn xoay hình (shape), ta thực hiện:",
    "options": [
      "Click chuột vào hình, một biểu tượng xoay hình hiện lên, Click chuột vào đó và xoay.",
      "Click phải chuột vào hình, chọn lệnh Rotation.",
      "Click phải chuột vào hình, chọn lệnh: Shape Rotation.",
      "Click phải chuột vào hình, chọn lệnh: 3D Rotation."
    ],
    "answer": 0,
    "explain": "Kích chọn vào hình vẽ rồi nhấp kéo nút tròn màu xanh lá (biểu tượng xoay) phía trên hình để xoay."
  },
  {
    "q": "Câu 113: Trong PowerPoint 2007, giả sử ta có một hình tròn (shape), muốn nhập văn bản vào hình này, ta thực hiện:",
    "options": [
      "Nhấp chuột vào hình, nhập văn bản",
      "Không có cách nào nhập văn bản vào hình (shape)",
      "Chọn Insert / Add Text",
      "Chọn Design / Add Text"
    ],
    "answer": 0,
    "explain": "Trong PowerPoint, chỉ cần chọn vào Shape và gõ phím trực tiếp (hoặc chuột phải chọn Edit Text/Add Text) để nhập văn bản."
  },
  {
    "q": "Câu 114: Trong PowerPoint 2007, giả sử ta có nhiều đối tượng hình (shape) trên một trang trình chiếu, ta muốn nhóm chúng lại để dễ di chuyển, sau khi chọn các đối tượng, ta thực hiện:",
    "options": [
      "Format / Group",
      "Format / Group / Group",
      "Design / Group",
      "Design / Group / Group"
    ],
    "answer": 1,
    "explain": "Để nhóm các đối tượng, ta chọn các đối tượng rồi chọn thẻ ngữ cảnh Format -> nút Group -> chọn tùy chọn Group."
  },
  {
    "q": "Câu 115: Trong PowerPoint 2007, để chọn nhiều đối tượng trên một trang trình chiếu cùng một lúc, ta giữ phím gì trong khi nhấp chọn:",
    "options": [
      "Tab",
      "Ctrl",
      "Alt",
      "Space"
    ],
    "answer": 1,
    "explain": "Nhấn và giữ phím Ctrl (hoặc Shift) cho phép kích chọn nhiều đối tượng cùng lúc."
  },
  {
    "q": "Câu 116: Trong PowerPoint 2007, muốn bỏ ghép nhóm các đối tượng trên một trang trình chiếu, ta nhấp chuột vào đối tượng đó, rồi chọn",
    "options": [
      "Format / UnGroup",
      "Format / Group / UnGroup",
      "Design / UnGroup",
      "Design / Group / UnGroup"
    ],
    "answer": 1,
    "explain": "Để hủy nhóm (rã nhóm), chọn nhóm đối tượng -> Format -> Group -> Ungroup."
  },
  {
    "q": "Câu 117: Trong PowerPoint 2007, giả sử có nhiều đối tượng hình trên một trang trình chiếu, muốn sắp xếp một đối tượng lên trên cùng, ta chọn đối tượng đó, Click phải và chọn lệnh:",
    "options": [
      "Bring to Front",
      "Send to Back",
      "Increase Level",
      "Decrease Level"
    ],
    "answer": 0,
    "explain": "Lệnh Bring to Front giúp đưa đối tượng được chọn lên vị trí trên cùng của các lớp hình ảnh."
  },
  {
    "q": "Câu 118: Trong PowerPoint 2007, giả sử có nhiều đối tượng hình trên một trang trình chiếu, muốn sắp xếp một đối tượng đưa xuống dưới cùng, ta nhấp chuột vào đối tượng đó rồi chọn:",
    "options": [
      "View / Send to Back",
      "Format / Send to Back",
      "Home / Send to Back",
      "Design / Send to Back"
    ],
    "answer": 1,
    "explain": "Công cụ sắp xếp đối tượng ra phía sau/dưới cùng nằm tại thẻ Format -> Send to Back."
  },
  {
    "q": "Câu 119: Trong PowerPoint 2007, Muốn thiết lập hiệu ứng cho các đối tượng ta chọn menu :",
    "options": [
      "Animations",
      "Transition",
      "View",
      "Slide show"
    ],
    "answer": 0,
    "explain": "Thẻ Animations được dùng để gán các hiệu ứng động (Custom Animation) cho đối tượng trên Slide."
  },
  {
    "q": "Câu 120: Trong PowerPoint 2007, Trong khi thiết lập hiệu ứng chuyển tiếp slide (như hình), chọn câu trả lời đúng nhất?",
    "options": [
      "Tự động chuyển slide sau 5 giây",
      "Slide được trình chiếu tối đa 5 giây",
      "Sau 5 giây mới được kích chuột",
      "Slide được tự động trình chiếu ít nhất là 5 giây"
    ],
    "answer": 3,
    "explain": "Khi tích chọn tùy chọn 'Automatically After 00:05', slide sẽ tự động chuyển trang sau tối thiểu 5 giây."
  },
  {
    "q": "Câu 121: Trong PowerPoint 2007, trong khi thiết lập hiệu ứng chuyển tiếp slide (như hình), chọn câu trả lời đúng nhất?",
    "options": [
      "Tự động chuyển slide sau 5 giây",
      "Slide được trình chiếu tối đa 5 giây",
      "Sau 5 giây mới được kích chuột",
      "Chỉ chuyển tiếp slide khi kích chuột"
    ],
    "answer": 3,
    "explain": "Nếu chỉ đánh dấu tích vào mục 'On Mouse Click', việc chuyển slide chỉ xảy ra khi người dùng kích chuột."
  },
  {
    "q": "Câu 122: Trong PowerPoint 2007, khi quy định hiệu ứng cho các đối tượng, tại mục Start chọn \"With Previous\" có ý nghĩa gì?",
    "options": [
      "Thực hiện hiệu ứng này đầu tiên khi trình chiếu slide",
      "Thực hiện hiệu ứng này sau cùng trong slide",
      "Thực hiện hiệu ứng đồng thời với hiệu ứng trước",
      "Thực hiện hiệu ứng sau khi hiệu ứng trước kết thúc"
    ],
    "answer": 2,
    "explain": "Thiết lập 'With Previous' giúp hiệu ứng của đối tượng chạy đồng thời cùng lúc với hiệu ứng ngay trước nó."
  },
  {
    "q": "Câu 123: Trong PowerPoint 2007, nhóm các hiệu ứng làm xuất hiện đối tượng, có hình ngôi sao màu gì?",
    "options": [
      "Màu xanh",
      "Màu đỏ",
      "Màu vàng",
      "Màu trắng"
    ],
    "answer": 0,
    "explain": "Nhóm hiệu ứng xuất hiện (Entrance) được ký hiệu bằng biểu tượng ngôi sao màu xanh lá cây."
  },
  {
    "q": "Câu 124: Trong PowerPoint 2007, muốn xóa bỏ hiệu ứng trình diễn, ta chọn đối tượng cần xóa bỏ hiệu ứng trong hộp thoại Animation Pane, rồi chọn",
    "options": [
      "Delete",
      "Remove",
      "Cut",
      "Copy"
    ],
    "answer": 1,
    "explain": "Trong khung quản lý hiệu ứng (Custom Animation/Animation Pane), ta bấm chọn hiệu ứng rồi kích nút 'Remove' để xóa."
  },
  {
    "q": "Câu 125: Trong PowerPoint 2007, muốn xem trước slide khi in cùng với các ghi chú trên slide, ta chọn chế độ xem nào sau đây:",
    "options": [
      "Slide Sorter",
      "Normal",
      "Outline View",
      "Notes Page"
    ],
    "answer": 3,
    "explain": "Chế độ xem 'Notes Page' cho phép hiển thị từng slide kèm theo phần ghi chú (notes) bên dưới."
  },
  {
    "q": "Câu 126: Trong PowerPoint 2007, muốn tạo hiệu ứng khi đối tượng xuất hiện, ta chọn nhóm hiệu ứng nào:",
    "options": [
      "Entrance",
      "Emphasis",
      "Exit",
      "Motion path"
    ],
    "answer": 0,
    "explain": "Nhóm Entrance dùng để tạo hiệu ứng xuất hiện cho các đối tượng."
  },
  {
    "q": "Câu 127: Trong PowerPoint 2007, muốn tạo hiệu ứng khi đối tượng bắt đầu mất khỏi slide, ta chọn nhóm hiệu ứng nào:",
    "options": [
      "Entrance",
      "Emphasis",
      "Exit",
      "Motion path"
    ],
    "answer": 2,
    "explain": "Nhóm Exit bao gồm các hiệu ứng làm đối tượng biến mất khỏi slide."
  },
  {
    "q": "Câu 128: Trong PowerPoint 2007, có mấy nhóm hiệu ứng khi chọn hiệu ứng cho đối tượng?",
    "options": [
      "2 nhóm",
      "3 nhóm",
      "4 nhóm",
      "5 nhóm"
    ],
    "answer": 2,
    "explain": "Có 4 nhóm hiệu ứng cho đối tượng: Entrance (Xuất hiện), Emphasis (Nhấn mạnh), Exit (Thoát/Biến mất), và Motion Paths (Di chuyển theo đường dẫn)."
  },
  {
    "q": "Câu 129: Trong PowerPoint 2007, trong cửa sổ quy định hiệu ứng của đối tượng, mục chọn Start có ý nghĩa gì?",
    "options": [
      "Chọn cách chạy slide khi trình chiếu",
      "Chọn cách bắt đầu thực hiện hiệu ứng đối tượng khi trình chiếu",
      "Chọn cách bắt đầu thực hiện hiệu ứng chuyển tiếp slide",
      "Chọn tốc độ thực hiện bắt đầu hiệu ứng"
    ],
    "answer": 1,
    "explain": "Mục Start quy định sự kiện khởi chạy hiệu ứng của đối tượng (On Click, With Previous, hoặc After Previous)."
  },
  {
    "q": "Câu 130: Trong PowerPoint 2007, muốn ẩn một slide nào đó trong bài trình chiếu, ta thực hiện:",
    "options": [
      "Home / Hide Slide",
      "Edit / Hide Slide",
      "Design / Hide Slide",
      "Slide Show / Hide Slide"
    ],
    "answer": 3,
    "explain": "Lệnh ẩn slide (Hide Slide) nằm trong thẻ Slide Show."
  },
  {
    "q": "Câu 131: Trong PowerPoint 2007, thao tác chọn Animation / Custom Animation là để tạo hiệu ứng cho đối tượng nào?",
    "options": [
      "Chỉ cho đối tượng là khối văn bản",
      "Chỉ cho đối tượng là khối biểu tượng",
      "Chỉ cho đối tượng là hình ảnh",
      "Cho tất cả các loại đối tượng được chọn"
    ],
    "answer": 3,
    "explain": "Tính năng Custom Animation có thể áp dụng hiệu ứng cho bất kỳ đối tượng nào trên slide (chữ, hình ảnh, hình vẽ, biểu đồ,...)."
  },
  {
    "q": "Câu 132: Trong PowerPoint 2007, thao tác chọn Animation / Preview có tác dụng gì?",
    "options": [
      "Xem lại hiệu ứng của đối tượng vừa được chọn",
      "Xem trước hiệu ứng của các đối tượng được chọn trong Slide",
      "Xem Slide hiện tại trước khi in",
      "Xem tất cả slide trước khi in"
    ],
    "answer": 1,
    "explain": "Nút Preview trên thẻ Animations giúp xem trước tất cả các hiệu ứng đã thiết lập trên Slide hiện tại."
  },
  {
    "q": "Câu 133: Trong PowerPoint 2007, lựa chọn phát biểu đúng:",
    "options": [
      "Không được thiết lập lại tốc độ của hiệu ứng",
      "Để kết thúc trình chiếu, ta nhấn phím Delete",
      "Không thể thiết lập lại thứ tự trình bày các hiệu ứng",
      "Tốc độ thực hiện hiệu ứng có thể được thiết lập lại"
    ],
    "answer": 3,
    "explain": "Người dùng có thể điều chỉnh tốc độ thực hiện hiệu ứng (Duration/Speed) theo nhu cầu."
  },
  {
    "q": "Câu 134: Trong PowerPoint 2007, lựa chọn phát biểu đúng nhất :",
    "options": [
      "Không thể thiết lập nhiều hiệu ứng cho cùng một đối tượng",
      "Cần phải tùy chọn âm thanh đi kèm cho hiệu ứng đã thiết lập",
      "Không thể hủy bỏ hiệu ứng đã thiết lập",
      "Khi thiết lập hiệu ứng có thể tùy chọn âm thanh đi kèm"
    ],
    "answer": 3,
    "explain": "Khi cài đặt hiệu ứng, PowerPoint cho phép tích hợp thêm các hiệu ứng âm thanh (Effect Options -> Sound)."
  },
  {
    "q": "Câu 135: Trong PowerPoint 2007, lựa chọn phát biểu đúng nhất :",
    "options": [
      "Các Slide có thể được định dạng ngang (Landscape) hoặc dọc (Portrait)",
      "Vào menu Page Layout, chọn Page Setup để định dạng Slide ngang/dọc",
      "Vào menu Design, chọn Page Layout để định dạng Slide ngang/dọc",
      "Các Slide không thể định dạng dọc (Portrait)"
    ],
    "answer": 0,
    "explain": "PowerPoint hỗ trợ cả 2 hướng trang slide là ngang (Landscape) và dọc (Portrait)."
  },
  {
    "q": "Câu 136: Trong PowerPoint 2007, người sử dụng có thể thiết lập :",
    "options": [
      "Tối đa 2 hiệu ứng cho một đối tượng",
      "Tối đa 3 hiệu ứng cho một đối tượng",
      "Tối đa 4 hiệu ứng cho một đối tượng",
      "Nhiều hiệu ứng cho một đối tượng"
    ],
    "answer": 3,
    "explain": "Một đối tượng trong PowerPoint có thể áp dụng đồng thời nhiều hiệu ứng khác nhau."
  },
  {
    "q": "Câu 137: Trong PowerPoint 2007, dạng nào sau đây dùng để bắt đầu trình chiếu một slide?",
    "options": [
      "Slide sorter",
      "Reading View",
      "Slide show",
      "Normal View"
    ],
    "answer": 2,
    "explain": "Chế độ Slide Show dùng để phát/trình chiếu bài thuyết trình."
  },
  {
    "q": "Câu 138: Trong PowerPoint 2007, muốn in một tập tin trình chiếu, ta có thể dùng phím tắt:",
    "options": [
      "Ctrl + S",
      "Ctrl + N",
      "Ctrl + P",
      "Ctrl + Z"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím tắt Ctrl + P được sử dụng phổ biến để mở hộp thoại in (Print)."
  },
  {
    "q": "Câu 139: Trong PowerPoint 2007, để trình diễn từ Slide đầu tiên của bài trình chiếu, ta nhấn",
    "options": [
      "Phím F5",
      "Phím F3",
      "Phím F1",
      "Phím F10"
    ],
    "answer": 0,
    "explain": "Phím F5 dùng để bắt đầu trình chiếu bài thuyết trình từ trang slide đầu tiên."
  },
  {
    "q": "Câu 140: Trong PowerPoint 2007, đang trình chiếu một bài trình diễn, muốn dừng trình diễn ta bấm phím:",
    "options": [
      "Tab",
      "Esc",
      "Home",
      "End"
    ],
    "answer": 1,
    "explain": "Phím Esc (Escape) dùng để thoát khỏi chế độ trình chiếu."
  },
  {
    "q": "Câu 141: Trong PowerPoint 2007, khi đang trình chiếu (Slide Show) một bài trình diễn, muốn chuyển sang màn hình của một chương trình ứng dụng khác (đã mở trước) để minh họa mà không kết thúc việc trình chiếu, sử dụng tổ hợp phím",
    "options": [
      "Ctrl + Tab",
      "Shift + Tab",
      "Alt + Tab",
      "Esc + Tab"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím Alt + Tab giúp chuyển đổi nhanh giữa các cửa sổ ứng dụng đang mở trong Windows."
  },
  {
    "q": "Câu 142: Khi đang trình diễn trong PowerPoint 2007, muốn kết thúc phiên trình diễn, ta thực hiện:",
    "options": [
      "Click phải chuột, rồi chọn Exit",
      "Click phải chuột, rồi chọn Return",
      "Click phải chuột, rồi chọn End Show",
      "Click phải chuột, rồi chọn Screen"
    ],
    "answer": 2,
    "explain": "Khi đang ở màn hình trình chiếu, kích chuột phải sẽ mở menu ngữ cảnh, chọn End Show để thoát."
  },
  {
    "q": "Câu 143: Trong PowerPoint 2007, muốn kiểm tra lỗi chính tả ta chọn:",
    "options": [
      "Home / Spelling",
      "Slide Show / Spelling",
      "View / Spelling",
      "Review / Spelling"
    ],
    "answer": 3,
    "explain": "Công cụ kiểm tra chính tả (Spelling) nằm trong thẻ Review."
  },
  {
    "q": "Câu 144: Trong PowerPoint 2007, để trình chiếu từ slide hiện tại trở đi, ta nhấn phím hay tổ hợp phím nào?",
    "options": [
      "Phím F5",
      "Ctrl + F5",
      "Shift + F5",
      "Alt + F5"
    ],
    "answer": 2,
    "explain": "Tổ hợp phím Shift + F5 dùng để trình chiếu bài thuyết trình bắt đầu từ Slide hiện tại."
  },
  {
    "q": "Câu 145: Thiết bị nào không được dùng để trình chiếu PowerPoint 2007",
    "options": [
      "Monitor",
      "Projector",
      "Tivi",
      "Speaker"
    ],
    "answer": 3,
    "explain": "Speaker (Loa) là thiết bị phát âm thanh, không dùng để hiển thị/trình chiếu hình ảnh."
  },
  {
    "q": "Câu 146: Trong PowerPoint 2007, muốn quy định kích thước trang slide ta chọn:",
    "options": [
      "Home / Page setup",
      "Page Layout / Page setup",
      "Design / Page setup",
      "Slide Show / Page setup"
    ],
    "answer": 2,
    "explain": "Lệnh Page Setup thiết lập kích thước slide nằm trên thẻ Design."
  },
  {
    "q": "Câu 147: Trong PowerPoint 2007, sau khi thiết kế xong 1 giáo án điện tử, do số lượng slide quá nhiều, nếu anh (chị) muốn in 6 slides trên một trang thì dùng kiểu in gì?",
    "options": [
      "Full Page Slides",
      "Note Page",
      "Outline",
      "Handouts"
    ],
    "answer": 3,
    "explain": "Chế độ in Handouts cho phép in nhiều slide (ví dụ 1, 2, 3, 4, 6, 9 slide) trên cùng một trang giấy."
  },
  {
    "q": "Câu 148: Trong PowerPoint 2007, muốn in các slide 1, 3, 7 và từ slide 15 đến slide 25, tại mục sildes trong cửa sổ in ta gõ:",
    "options": [
      "1, 3, 7, 15 : 25",
      "1; 3; 7; 15 -> 25",
      "1; 3; 7; 15 - 25",
      "1; 3; 7; 15 .. 25"
    ],
    "answer": 2,
    "explain": "Định dạng nhập phạm vi trang in chuẩn trong Windows/Office sử dụng dấu chấm phẩy ';' (hoặc dấu phẩy tùy thiết lập hệ thống) để phân cách các slide rời rạc và dấu gạch nối '-' cho khoảng slide liên tục."
  }
    ]
  },

  module6: {
    title: "Module 6: SỬ DỤNG INTERNET CƠ BẢN",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 6.",
    questions: [
      {
    "q": "Câu 1: Phương pháp kết nối Internet nào phổ biến nhất đối với người dùng riêng lẻ?",
    "options": [
      "Kết nối trực tiếp.",
      "Kết nối qua modem.",
      "Kết nối qua card mạng.",
      "Kết nối qua vệ tinh."
    ],
    "answer": 1,
    "explain": "Đối với người dùng riêng lẻ (đặc biệt theo tài liệu truyền thống/Dial-up/ADSL), kết nối qua Modem là phương pháp phổ biến nhất."
  },
  {
    "q": "Câu 2: Thiết bị nào cho phép hai máy tính truyền thông với nhau thông qua mạng điện thoại?",
    "options": [
      "Máy Fax",
      "Modem",
      "Hub",
      "Telephone"
    ],
    "answer": 1,
    "explain": "Modem (Modulator-Demodulator) có nhiệm vụ chuyển đổi tín hiệu số thành tín hiệu tương tự để truyền qua mạng điện thoại và ngược lại."
  },
  {
    "q": "Câu 3: Internet có khả năng hỗ trợ?",
    "options": [
      "Mua sắm, giao dịch thương mại",
      "Tìm kiếm thông tin",
      "Truyền thông, liên lạc",
      "Tất cả các phương án trên"
    ],
    "answer": 3,
    "explain": "Internet hỗ trợ đa dạng các dịch vụ như thương mại điện tử, tìm kiếm thông tin, truyền thông liên lạc,..."
  },
  {
    "q": "Câu 4: Online có nghĩa là",
    "options": [
      "Trực tuyến",
      "Đang tải",
      "Không tải được",
      "Ngoại tuyến"
    ],
    "answer": 0,
    "explain": "Online có nghĩa là trực tuyến (kết nối mạng)."
  },
  {
    "q": "Câu 5: Sự kiện nào được coi là khởi đầu cho việc hình thành mạng Internet?",
    "options": [
      "Việc kết nối thành công 4 địa điểm tại Mỹ trong 1 dự án của Cơ quan quản lý dự án nghiên cứu cấp cao (ARPA-Advanced Research Project Agency) thuộc Bộ Quốc phòng Mỹ.",
      "Sự ra đời của Cơ quan quản lý dự án nghiên cứu cấp cao (ARPA-Advanced Research Project Agency) thuộc Bộ Quốc phòng Mỹ.",
      "Sự bùng nổ công nghệ mạng LAN tốc độ cao.",
      "Sự bùng nổ công nghệ mạng WAN tốc độ cao."
    ],
    "answer": 0,
    "explain": "Mạng ARPANET kết nối thành công 4 địa điểm năm 1969 được coi là tiền thân hình thành nên mạng Internet ngày nay."
  },
  {
    "q": "Câu 6: ISP là viết tắt của",
    "options": [
      "Internet Service Provider",
      "Internet Server Provider",
      "Internet Super Provider",
      "Internet Side Provider"
    ],
    "answer": 0,
    "explain": "ISP viết tắt của Internet Service Provider (Nhà cung cấp dịch vụ Internet)."
  },
  {
    "q": "Câu 7: FTP là viết tắt của cụm từ tiếng Anh nào?",
    "options": [
      "File Transfer Procedure",
      "File Transfer Protocol",
      "Fast Transfer Protocol",
      "Future Transfer Procedure"
    ],
    "answer": 1,
    "explain": "FTP là viết tắt của File Transfer Protocol (Giao thức truyền tập tin)."
  },
  {
    "q": "Câu 8: Google Chrome là gì?",
    "options": [
      "1 chuẩn mạng cục bộ.",
      "Bộ giao thức.",
      "Trình duyệt web.",
      "Tất cả đều sai"
    ],
    "answer": 2,
    "explain": "Google Chrome là một phần mềm trình duyệt web do Google phát triển."
  },
  {
    "q": "Câu 9: Muốn xem được trang web, máy tính của bạn cần phải cài đặt:",
    "options": [
      "Outlook Express",
      "MS-FrontPage",
      "Một chương trình duyệt web",
      "MS-Word"
    ],
    "answer": 2,
    "explain": "Để truy cập và hiển thị các trang web, máy tính cần cài đặt một trình duyệt web (Web Browser)."
  },
  {
    "q": "Câu 10: Để xem một trang Web, ta cần gõ địa chỉ của trang đó vào đâu?",
    "options": [
      "Thanh công cụ chuẩn của trình duyệt",
      "Thanh liên kết của trình duyệt",
      "Thanh địa chỉ của trình duyệt",
      "Thanh tìm kiếm của trình duyệt"
    ],
    "answer": 2,
    "explain": "Địa chỉ URL của trang web được nhập vào Thanh địa chỉ (Address bar) trên trình duyệt."
  },
  {
    "q": "Câu 11: Tên miền gov.vn được dùng cho:",
    "options": [
      "Skype",
      "Yahoo! Messenger",
      "Chính phủ, các cơ quan hành chính, tổ chức nhà nước trên lãnh thổ Việt Nam",
      "Google"
    ],
    "answer": 2,
    "explain": "Tên miền .gov.vn dành riêng cho các cơ quan chính phủ và tổ chức nhà nước tại Việt Nam."
  },
  {
    "q": "Câu 12: Tên miền edu.vn được dùng cho",
    "options": [
      "Chính phủ, các cơ quan hành chính, tổ chức nhà nước trên lãnh thổ Việt Nam",
      "Tất cả các cơ quan, tổ chức...",
      "Các đơn vị, tổ chức giáo dục trên lãnh thổ Việt Nam",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 2,
    "explain": "Tên miền .edu.vn được dùng cho các đơn vị, tổ chức hoạt động trong lĩnh vực giáo dục tại Việt Nam."
  },
  {
    "q": "Câu 13: Cookie là gì ?",
    "options": [
      "Là một chương trình nhỏ nằm trong máy chủ và lưu trữ thông tin kết nối Internet của các máy người dùng",
      "Là một chức năng cho phép xem thông tin lịch sử máy tính",
      "Là các phần mềm nhỏ lưu trữ thông tin về quá trình truy xuất Internet của người dùng hoặc các thông tin cá nhân mà người dùng đã từng khai báo",
      "Cookie là các tệp được trang web bạn đã truy cập tạo ra. Cookie lưu trữ thông tin duyệt web, chẳng hạn như các tùy chọn cho trang web hoặc thông tin hồ sơ của bạn."
    ],
    "answer": 3,
    "explain": "Cookie là các tập tin được website gửi tới trình duyệt và lưu trữ ở máy người dùng nhằm ghi nhớ trạng thái, tùy chọn và thông tin phiên duyệt web."
  },
  {
    "q": "Câu 14: Để xem lại lịch sử duyệt web ta dùng tổ hợp phím trên trình duyệt Internet Explorer",
    "options": [
      "Ctrl + H",
      "Ctrl + L",
      "Ctrl + P",
      "Ctrl + A"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím Ctrl + H (History) dùng để xem lại lịch sử truy cập trang web."
  },
  {
    "q": "Câu 15: Để quay lại trang web trước đó, ngoài nút “Back”, ta có thể dùng phím nào?",
    "options": [
      "Backspace",
      "Ctrl + T",
      "Alt + T",
      "Ctrl + A"
    ],
    "answer": 0,
    "explain": "Phím Backspace trên bàn phím có tác dụng điều hướng quay lại (Back) trang web trước đó trên các trình duyệt truyền thống."
  },
  {
    "q": "Câu 16: Việc tải file dữ liệu từ internet bị chậm là do:",
    "options": [
      "File có dung lượng lớn",
      "Đường truyền internet tốc độ thấp",
      "Có nhiều tác vụ đang thực hiện",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 3,
    "explain": "Tốc độ tải tệp bị ảnh hưởng bởi kích thước tệp, băng thông đường truyền và các tiến trình mạng đang chạy đồng thời."
  },
  {
    "q": "Câu 17: Trong trình duyệt Internet Explorer, để lưu một bức ảnh về máy tính, ta làm như sau:",
    "options": [
      "Kích đúp vào ảnh rồi chọn Download",
      "Chọn Tools/ Save picture as",
      "Nhấn chuột phải vào ảnh, chọn Save picture as",
      "Nhấn chuột phải vào ảnh, chọn Copy picture"
    ],
    "answer": 2,
    "explain": "Để lưu hình ảnh trên web, người dùng nhấp chuột phải vào ảnh rồi chọn 'Save picture as' (hoặc 'Save image as')."
  },
  {
    "q": "Câu 18: Offline có nghĩa là?",
    "options": [
      "Trực tuyến",
      "Đang bận",
      "Ngoại tuyến",
      "Đang truyền file."
    ],
    "answer": 2,
    "explain": "Offline có nghĩa là ngoại tuyến (không kết nối mạng)."
  },
  {
    "q": "Câu 19: Trang tìm kiếm Google có thể cho ra kết quả tìm kiếm theo:",
    "options": [
      "Hình ảnh",
      "Video",
      "Trang web",
      "Tất cả các đáp án trên"
    ],
    "answer": 3,
    "explain": "Google hỗ trợ tìm kiếm đa dạng các định dạng nội dung như văn bản/trang web, hình ảnh, video, tin tức,..."
  },
  {
    "q": "Câu 20: Cấu trúc một địa chỉ thư điện tử?",
    "options": [
      "<Tên người dùng>@<Tên miền>",
      "<Tên miền> <Tên người dùng>",
      "<Tên miền>@<Tên người dùng>",
      "<Tên người dùng>#<Tên miền>"
    ],
    "answer": 0,
    "explain": "Địa chỉ Email tiêu chuẩn có cấu trúc: <Tên_người_dùng>@<Tên_miền>."
  },
  {
    "q": "Câu 21: Để trả lời thư cho người gửi, bạn sử dụng chức năng nào?",
    "options": [
      "Forward",
      "Compose",
      "Reply",
      "Spams"
    ],
    "answer": 2,
    "explain": "Chức năng Reply (Phản hồi) dùng để gửi thư trả lời lại cho người đã gửi."
  },
  {
    "q": "Câu 22: Kí hiệu nào sau đây luôn tồn tại trong một địa chỉ Email?",
    "options": [
      "Kí hiệu %",
      "Kí hiệu &",
      "Kí hiệu @",
      "Kí hiệu *"
    ],
    "answer": 2,
    "explain": "Ký tự @ (A-còng) là thành phần bắt buộc ngăn cách giữa tên người dùng và tên miền trong địa chỉ email."
  },
  {
    "q": "Câu 23: Với thư điện tử, phát biểu nào sau đây là sai:",
    "options": [
      "Có thể gửi 1 thư đến 10 địa chỉ khác nhau .",
      "1 người có thể gửi thư cho chính mình, nhiều lần.",
      "Hai người không thể có địa chỉ thư giống nhau",
      "Chỉ được phép gửi thư trong cùng một tên miền."
    ],
    "answer": 3,
    "explain": "Thư điện tử có thể trao đổi giữa các hệ thống và tên miền khác nhau (ví dụ từ Gmail sang Yahoo Mail)."
  },
  {
    "q": "Câu 24: Để soạn một thư điện tử mới, bạn chọn nút nào?",
    "options": [
      "Attachment",
      "Check Mail",
      "Compose",
      "Reply"
    ],
    "answer": 2,
    "explain": "Nút Compose (Soạn thư) dùng để bắt đầu viết một thư điện tử mới."
  },
  {
    "q": "Câu 25: Trong một trang web, Hyperlink là gì?",
    "options": [
      "Là một thành phần trong một trang Web liên kết đến vị trí khác trên cùng trang Web đó hoặc liên kết đến một trang Web khác.",
      "Là nội dung được thể hiện trên Web Browser (văn bản, âm thanh, hình ảnh)",
      "Là địa chỉ của 1 trang Web",
      "Là nội dung quan trọng của web."
    ],
    "answer": 0,
    "explain": "Hyperlink (Siêu liên kết) là phần tử cho phép chuyển hướng tới vị trí khác hoặc tới trang web khác khi người dùng nhấp vào."
  },
  {
    "q": "Câu 26: Địa chỉ nào không phải là địa chỉ email?",
    "options": [
      "ninhbinh@yahoo.com",
      "tranvana@gmail.com",
      "vnexpress.net",
      "ninhbinh@yahoo.com.vn"
    ],
    "answer": 2,
    "explain": "vnexpress.net là một địa chỉ tên miền/trang web, không phải địa chỉ email vì không có ký tự @ và tên người dùng."
  },
  {
    "q": "Câu 27: Để chặn các Email không mong muốn, thực hiện thao tác chọn Email, sau đó:",
    "options": [
      "kích nút Delete",
      "kích nút Reply",
      "kích nút Spam",
      "kích nút Move to"
    ],
    "answer": 2,
    "explain": "Đánh dấu email là Spam (Thư rác) sẽ giúp bộ lọc chặn hoặc chuyển các thư tương tự sau này vào hộp thư rác."
  },
  {
    "q": "Câu 28: Email đã soạn thảo sẽ được lưu trữ trong mục nào sau đây nếu người dùng chưa bấm nút gửi thư?",
    "options": [
      "Spam",
      "Outbox",
      "Draft",
      "Inbox"
    ],
    "answer": 2,
    "explain": "Thư đang soạn thảo chưa gửi sẽ tự động được lưu trong thư mục Drafts (Thư nháp)."
  },
  {
    "q": "Câu 29: Mục Sent trong cửa sổ chương trình Email lưu trữ thông tin gì?",
    "options": [
      "Các Email quan trọng",
      "Các Email đã xóa",
      "Các Email đã gửi",
      "Các Email quảng cáo"
    ],
    "answer": 2,
    "explain": "Thư mục Sent (Thư đã gửi) chứa bản sao của tất cả các email đã được gửi thành công."
  },
  {
    "q": "Câu 30: Trong yahoo mail mục Spam trong cửa sổ chương trình Email lưu trữ thông tin gì?",
    "options": [
      "Các Email đã gửi",
      "Các Email quan trọng",
      "Các Email rác",
      "Các email chưa đọc"
    ],
    "answer": 2,
    "explain": "Mục Spam chứa các thư rác hoặc thư bị nghi ngờ là quảng cáo phiền phức/độc hại."
  },
  {
    "q": "Câu 31: Mạng Internet hình thành vào thời gian nào của thế kỷ 20?",
    "options": [
      "Đầu thập kỷ 60",
      "Đầu thập kỷ 70",
      "Cuối thập kỷ 60",
      "Cuối thập kỷ 70"
    ],
    "answer": 2,
    "explain": "Mạng ARPANET (tiền thân Internet) xuất hiện và kết nối lần đầu vào cuối thập niên 1960 (năm 1969)."
  },
  {
    "q": "Câu 32: Chọn đáp án đúng nhất, trong các phát biểu sau về Internet?",
    "options": [
      "Mạng máy tính bao gồm từ 2 mạng con trở lên",
      "Mạng kết nối mạng máy tính của các nước phát triển",
      "Mạng kết nối các mạng máy tính của 1 châu lục",
      "Mạng của các loại mạng (có phạm vi trên toàn thế giới)"
    ],
    "answer": 3,
    "explain": "Internet là mạng của các mạng máy tính toàn cầu (Network of networks) quy mô thế giới."
  },
  {
    "q": "Câu 33: Cho biết đâu là trang web tìm kiếm thông dụng nhất hiện nay tại Việt Nam?",
    "options": [
      "www.panvn.com",
      "www.vnn.vn",
      "www.google.com",
      "www.altavista.com"
    ],
    "answer": 2,
    "explain": "www.google.com là công cụ tìm kiếm phổ biến nhất."
  },
  {
    "q": "Câu 34: www.amazon.com là một website chuyên:",
    "options": [
      "Tin tức trực tuyến",
      "Bán hàng qua mạng, siêu thị điện tử, e-shop",
      "Website giới thiệu doanh nghiệp",
      "Đấu giá qua mạng"
    ],
    "answer": 1,
    "explain": "Amazon.com là trang thương mại điện tử mua sắm và bán hàng trực tuyến nổi tiếng thế giới."
  },
  {
    "q": "Câu 35: Đơn vị cung cấp một trang báo điện tử để cho người sử dụng có thể đọc trên mạng Internet thì có thể coi đơn vị đó là gì?",
    "options": [
      "Công ty phần mềm",
      "ICP",
      "IAP",
      "ISP"
    ],
    "answer": 1,
    "explain": "ICP (Internet Content Provider) là Nhà cung cấp nội dung Internet (như cung cấp báo điện tử, thông tin, giải trí)."
  },
  {
    "q": "Câu 36: Cho biết URL viết tắt của cụm từ gì?",
    "options": [
      "Unique Records List",
      "Uniform Resource Locator",
      "Indefined Restricted Learner",
      "Universal Robot Location"
    ],
    "answer": 1,
    "explain": "URL viết tắt của Uniform Resource Locator (Định vị tài nguyên đồng nhất)."
  },
  {
    "q": "Câu 37: WWW viết tắt của từ nào?",
    "options": [
      "World Wide Wed",
      "World Wide Web",
      "World Wild Web",
      "Word Wide Web"
    ],
    "answer": 1,
    "explain": "WWW viết tắt của World Wide Web."
  },
  {
    "q": "Câu 38: Phát biểu nào sau đây đúng nhất về trang Web?",
    "options": [
      "Là trang văn bản thông thường",
      "Là trang văn bản chứa các liên kết cơ sở dữ liệu ở bên trong nó",
      "Là trang siêu văn bản phối hợp giữa văn bản thông thường với hình ảnh, âm thanh, video và cả các mối liên kết đến các trang siêu văn bản khác.",
      "Là trang văn bản chứa văn bản, hình ảnh"
    ],
    "answer": 2,
    "explain": "Trang web là tài liệu siêu văn bản (Hypertext) kết hợp đa phương tiện (văn bản, hình ảnh, âm thanh, video) và các siêu liên kết."
  },
  {
    "q": "Câu 39: Chương trình sử dụng để xem được các trang Web gọi là gì?",
    "options": [
      "Trình duyệt Web",
      "Chương trình xem Web",
      "Phần mềm xem Web",
      "Bộ duyệt Web"
    ],
    "answer": 0,
    "explain": "Trình duyệt Web (Web Browser) là thuật ngữ chính thức dùng để chỉ ứng dụng xem web."
  },
  {
    "q": "Câu 40: Đâu không phải là trình duyệt Web?",
    "options": [
      "Internet Explorer",
      "Opera",
      "Netscape Navigator",
      "Windows Explorer"
    ],
    "answer": 3,
    "explain": "Windows Explorer (nay là File Explorer) là quản lý tệp tin của hệ điều hành Windows, không phải trình duyệt Web."
  },
  {
    "q": "Câu 41: Nút nào trên thanh công cụ của trình duyệt web cho phép tải lại nội dung một trang web đang xem?",
    "options": [
      "Home",
      "Back",
      "Refresh",
      "Next"
    ],
    "answer": 2,
    "explain": "Nút Refresh (hoặc Reload - phím F5) dùng để tải lại nội dung trang web."
  },
  {
    "q": "Câu 42: Nút Forward trên thanh công cụ của trình duyệt Web có tác dụng gì?",
    "options": [
      "Chuyển đến trang Web tiếp theo",
      "Chuyển đến cửa sổ trước đó",
      "Chuyển đến màn hình trước đó",
      "Quay lại trang Web trước đó"
    ],
    "answer": 0,
    "explain": "Nút Forward cho phép chuyển tiến tới trang web tiếp theo (nếu trước đó đã bấm Back)."
  },
  {
    "q": "Câu 43: Để tìm kiếm thông tin trên Internet, bạn cần làm gì?",
    "options": [
      "Chọn Start / Search",
      "Chọn View / Explorer Bar / Search",
      "Chọn View / Toolbar / Search",
      "Mở trang web tìm kiếm, nhập từ khóa tìm kiếm và chọn Search"
    ],
    "answer": 3,
    "explain": "Quy trình tìm kiếm thông tin trên Internet là truy cập trang tìm kiếm (như Google), nhập từ khóa và nhấn Tìm kiếm (Search)."
  },
  {
    "q": "Câu 44: Đâu không phải bộ máy tìm kiếm (search engine)?",
    "options": [
      "http://bing.com",
      "http://www.yahoo.com",
      "http://www.yandex.com",
      "http://www.baobinhdinh.com.vn"
    ],
    "answer": 3,
    "explain": "baobinhdinh.com.vn là trang tin tức/báo điện tử của tỉnh Bình Định, không phải máy tìm kiếm (Search Engine)."
  },
  {
    "q": "Câu 45: Người mua nên làm thế nào để hạn chế bị đánh cắp số thẻ tín dụng khi mua hàng trên mạng?",
    "options": [
      "Cẩn thận khi chọn nơi mua",
      "Không trả tiền bằng thẻ tín dụng mà trả bằng check",
      "Không mua hàng từ các máy tính dùng chung",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 3,
    "explain": "Để đảm bảo an toàn giao dịch trực tuyến, người dùng cần kết hợp cẩn trọng địa chỉ mua hàng, bảo mật thiết bị và phương thức thanh toán an toàn."
  },
  {
    "q": "Câu 46: Giỏ hàng trong thương mại điện tử tiếng Anh là:",
    "options": [
      "Shop Cart",
      "Shop Card",
      "Shopping Cart",
      "Shopping Card"
    ],
    "answer": 2,
    "explain": "Cụm từ tiếng Anh chuẩn cho giỏ hàng trực tuyến là 'Shopping Cart'."
  },
  {
    "q": "Câu 47: Chức năng chính của thư điện tử:",
    "options": [
      "Trao đổi thông tin trực tuyến",
      "Hội thoại trực tuyến",
      "Trao đổi thư thông qua môi trường Internet",
      "Tìm kiếm thông tin"
    ],
    "answer": 2,
    "explain": "Chức năng chính của thư điện tử (Email) là trao đổi thư từ/thông điệp qua môi trường mạng Internet."
  },
  {
    "q": "Câu 48: Khi dòng chủ đề trong thư bạn nhận được bắt đầu bằng chữ RE:, thì thông thường thư đó là thư gì?",
    "options": [
      "Thư rác, thư quảng cáo",
      "Thư trả lời cho thư mà bạn đã gửi cho người đó",
      "Thư mới",
      "Thư của nhà cung cấp dịch vụ E-mail mà ta đang sử dụng"
    ],
    "answer": 1,
    "explain": "Tiền tố 'RE:' (Reply/Regarding) đứng trước tiêu đề cho biết đây là thư phản hồi/trả lời lại một thư trước đó."
  },
  {
    "q": "Câu 49: Để chuyển tiếp thư tới người khác, bạn sử dụng nút nào?",
    "options": [
      "Relpy",
      "Relpy to All",
      "Attachment",
      "Forward"
    ],
    "answer": 3,
    "explain": "Nút Forward (Chuyển tiếp) dùng để gửi nội dung thư đã nhận cho một người dùng khác."
  },
  {
    "q": "Câu 50: Nếu muốn đồng gửi một thư điện tử tới một người, nhưng không muốn những người nhận khác biết thì chọn:",
    "options": [
      "Cc",
      "To",
      "Subject",
      "Bcc"
    ],
    "answer": 3,
    "explain": "BCC (Blind Carbon Copy) gửi bản sao ẩn danh, những người cùng nhận thư sẽ không thấy danh sách địa chỉ nằm trong mục BCC."
  },
  {
    "q": "Câu 51: SMTP được sử dụng để làm gì?",
    "options": [
      "Đăng nhập vào một máy ở xa",
      "Gửi thư điện tử",
      "Truyền tệp",
      "Duyệt Web"
    ],
    "answer": 1,
    "explain": "SMTP (Simple Mail Transfer Protocol) là giao thức chuẩn được sử dụng để truyền/gửi thư điện tử."
  },
  {
    "q": "Câu 52: Đâu là ứng dụng thư điện tử?",
    "options": [
      "Outlook Express",
      "Notepad",
      "Windows XP",
      "Google"
    ],
    "answer": 0,
    "explain": "Outlook Express là một ứng dụng quản lý và gửi/nhận thư điện tử (Email Client)."
  },
  {
    "q": "Câu 53: Trong mạng máy tính, thuật ngữ Share có ý nghĩa gì?",
    "options": [
      "Nhãn hiệu của một thiết bị kết nối mạng",
      "Thực hiện lệnh in trong mạng cục bộ",
      "Chia sẻ tài nguyên",
      "Một phần mềm hỗ trợ sử dụng mạng cục bộ"
    ],
    "answer": 2,
    "explain": "Share có nghĩa là chia sẻ tài nguyên (tệp tin, thư mục, máy in,...) với các máy tính khác trong mạng."
  },
  {
    "q": "Câu 54: http:// dùng để chỉ:",
    "options": [
      "Tên của máy tính chủ",
      "Tên miền sử dụng của website",
      "Phương thức truyền dữ liệu",
      "Đường dẫn file"
    ],
    "answer": 2,
    "explain": "HTTP (Hypertext Transfer Protocol) định nghĩa giao thức/phương thức truyền tải siêu văn bản trên mạng."
  },
  {
    "q": "Câu 55: WWW (World Wide Web) cho phép:",
    "options": [
      "Thực hiện việc tán ngẫu trên mạng",
      "Liên kết từ trang web này đến trang web khác",
      "Kết nối dữ liệu từ xa",
      "Duyệt các cơ sở dữ liệu và truyền tin"
    ],
    "answer": 1,
    "explain": "WWW là hệ thống thông tin kết nối các tài liệu siêu văn bản, cho phép liên kết và chuyển đổi linh hoạt từ trang web này sang trang web khác."
  },
{"q": "Câu 56: Dịch vụ Telnet cho phép:",
    "options": [
      "Truy cập đến các máy tính trên mạng",
      "Truy cập đến các thiết bị mạng máy tính",
      "Truy cập từ xa đến các hệ thống mạng máy tính",
      "Truy cập đến các hệ thống máy tính khác trên mạng"
    ],
    "answer": 3,
    "explain": "Dịch vụ Telnet cho phép người dùng truy cập và điều khiển các hệ thống máy tính khác từ xa thông qua mạng."
  },
  {
    "q": "Câu 57: Trên các trang tìm kiếm người ta dùng chuỗi ký tự: \"Huế OR Cố đô\", khi đó kết quả của quá trình tìm kiếm là:",
    "options": [
      "Tất cả các trang thông tin có chứa từ Huế, hoặc Cố đô.",
      "Tất cả các trang thông tin có chứa từ Huế.",
      "Tất cả các trang thông tin có chứa từ Huế, Cố đô hoặc cả hai.",
      "Tất cả các trang thông tin có chứa từ Cố đô."
    ],
    "answer": 2,
    "explain": "Toán tử logic OR tìm kiếm các trang chứa ít nhất một trong các từ khóa hoặc chứa cả hai từ khóa."
  },
  {
    "q": "Câu 58: Trên mỗi thư điện tử thông thường, cấu trúc của Email có bao nhiêu thành phần:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explain": "Cấu trúc cơ bản của thư điện tử gồm 3 phần chính: Header (Phần đầu), Body (Thân thư) và Signature/Attachment (Chữ ký/Tệp đính kèm)."
  },
  {
    "q": "Câu 59: Trên địa chỉ người nhận của Email thường có từ CC, CC được viết tắt của cụm từ nào?",
    "options": [
      "Change copy",
      "Carbon copy",
      "Copy copy",
      "Cancel copy"
    ],
    "answer": 1,
    "explain": "CC viết tắt của cụm từ Carbon Copy (gửi bản sao thư cho người khác cùng xem)."
  },
  {
    "q": "Câu 60: Trong trường hợp nào dưới đây, khi gửi Email người gửi sẽ dùng địa chỉ người nhận ở ô BCC:",
    "options": [
      "Người gửi muốn cho người nhận khác ở địa chỉ To và CC biết những người cùng nhận Email như mình ở mục BCC",
      "Khi địa chỉ người nhận ở mục To không còn chỗ chứa địa chỉ người nhận",
      "Khi người nhận không biết được người cùng nhận Email như mình",
      "Người gửi không muốn cho người nhận khác ở địa chỉ To và CC biết những người cùng nhận Email như mình ở mục BCC"
    ],
    "answer": 3,
    "explain": "Tính năng BCC (Blind Carbon Copy) được sử dụng để ẩn danh sách những người cùng nhận thư đối với người ở mục To và CC."
  },
  {
    "q": "Câu 61: Một bài viết trên Blog có thể được công bố trên Internet và có thể thiết lập hạn chế người đọc theo những cách nào?",
    "options": [
      "Blog public (tất cả mọi người đều có thể đọc)",
      "Private (chỉ cho riêng mình)",
      "Friends list (Chỉ những người bạn mới xem được)",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 3,
    "explain": "Blog cho phép thiết lập đa dạng quyền riêng tư: Công khai (Public), Riêng tư (Private), hoặc giới hạn nhóm bạn bè (Friends)."
  },
  {
    "q": "Câu 62: Khi gửi kèm thư điện tử (email) một file nào đó, khi sử dụng Gmail (ngôn ngữ tiếng Anh), ta cần nhấn vào nút lệnh nào?",
    "options": [
      "Send a file",
      "Add a file",
      "Attach a File",
      "Upload File"
    ],
    "answer": 2,
    "explain": "Trong giao diện tiếng Anh của Gmail, biểu tượng chiếc kẹp giấy có tên gọi là Attach files (Đính kèm tệp)."
  },
  {
    "q": "Câu 63: Quản lý hộp thư điện tử, chúng ta có thể làm được những thao tác nào?",
    "options": [
      "Xóa thư; Nhận thư và chuyển tiếp cho người khác; đánh dấu thư rác; Kiểm tra những thư đã gửi; Xem nội dung những thư đã gửi cho người khác;",
      "Xóa thư; Nhận thư và chuyển tiếp cho người khác; đánh dấu thư rác; Kiểm tra những thư đã gửi; Hủy bỏ (hồi thư) những thư đã gửi cho người khác;",
      "Xóa thư; Nhận thư và chuyển tiếp cho người khác; Xem nội dung những thư đã gửi cho người khác; Xóa những thư đã gửi nhầm ở địa chỉ mà mình đã gửi;",
      "Nhận thư và chuyển tiếp cho người khác; Đánh dấu thư rác; Gửi thư cho người khác; Xóa thư của mình gửi ở các hộp thư của người khác;"
    ],
    "answer": 0,
    "explain": "Hộp thư điện tử hỗ trợ xem, nhận, chuyển tiếp, xóa, đánh dấu spam và xem danh sách thư đã gửi."
  },
  {
    "q": "Câu 64: Mạng tiền thân của Internet có tên gọi là gì?",
    "options": [
      "Ethernet",
      "DECnet",
      "ARPANET",
      "TELNET"
    ],
    "answer": 2,
    "explain": "Mạng ARPANET do Bộ Quốc phòng Mỹ tài trợ nghiên cứu năm 1969 được coi là tiền thân chính thức của Internet."
  },
  {
    "q": "Câu 65: Khi muốn lưu địa chỉ của một trang web yêu thích (Favorites), bạn chọn mục nào trong thực đơn Favorites của trình duyệt web?",
    "options": [
      "Add Link",
      "Save Favorites",
      "Add to Favorites",
      "Organize Favorites"
    ],
    "answer": 2,
    "explain": "Lệnh Add to Favorites (hoặc Add Bookmark) dùng để lưu địa chỉ trang web vào danh sách ưa thích."
  },
  {
    "q": "Câu 66: Mục đích của Folder History là gì?",
    "options": [
      "Để liệt kê tất cả các website đã xem",
      "Để liệt kê tất cả các website đã xem trong phiên làm việc hiện hành",
      "Để liệt kê tất cả các website được xem nhiều nhất",
      "Để liệt kê tất cả các website ưa thích"
    ],
    "answer": 0,
    "explain": "Thư mục History trên trình duyệt lưu trữ và liệt kê danh sách toàn bộ các trang web mà người dùng đã truy cập."
  },
  {
    "q": "Câu 67: Đâu không phải là ưu điểm của việc lưu một địa chỉ trang web trong danh sách Favorites?",
    "options": [
      "Bạn không cần nhớ địa chỉ URL của trang web",
      "Nội dung của trang web đã lưu được tự động cập nhật thậm chí bạn không mở nó",
      "Khi muốn mở, bạn không phải tìm kiếm trang web đó",
      "Bạn có thể tổ chức các trang ưa thích vào trong nhiều Folder khác nhau"
    ],
    "answer": 1,
    "explain": "Favorites chỉ lưu trữ đường dẫn địa chỉ trang web, không lưu và tự động cập nhật nội dung khi không mở trang."
  },
  {
    "q": "Câu 68: Tên miền nào dưới đây là hợp lệ?",
    "options": [
      "www.qnu.edu.vn",
      "www.qnu@edu.vn",
      "www#qnu#edu#vn",
      "www.qnu.edu.vn"
    ],
    "answer": 0,
    "explain": "Tên miền hợp lệ sử dụng dấu chấm '.' để phân cách các cấp tên miền và không chứa ký tự đặc biệt như '@' hay '#'."
  },
  {
    "q": "Câu 69: Đâu là địa chỉ thư điện tử hợp lệ?",
    "options": [
      "web@qnu.edu.vn",
      "web.qnu.edu.vn",
      "web.qnu#gmail.com",
      "web@qnu@edu.vn"
    ],
    "answer": 0,
    "explain": "Địa chỉ Email hợp lệ chỉ chứa duy nhất một ký tự '@' ngăn cách tên tài khoản và tên miền hợp lệ."
  },
  {
    "q": "Câu 70: Phương tiện thanh toán điện tử được dùng phổ biến nhất",
    "options": [
      "Thẻ tín dụng",
      "Thẻ ghi nợ",
      "Thẻ thông minh",
      "Tiền điện tử"
    ],
    "answer": 0,
    "explain": "Thẻ tín dụng (Credit Card) là phương thức thanh toán điện tử phổ biến nhất trên các hệ thống thương mại trực tuyến."
  },
  {
    "q": "Câu 71: Sử dụng cái gì thì khách hàng không cần phải điền các thông tin vào các đơn đặt hàng trực tuyến mà chỉ cần chạy phần mềm trên máy tính",
    "options": [
      "Tiền số hoá",
      "Tiền điện tử",
      "Ví điện tử",
      "Séc điện tử"
    ],
    "answer": 2,
    "explain": "Ví điện tử (Digital Wallet/E-Wallet) giúp lưu thông tin thanh toán để giao dịch nhanh chóng mà không cần nhập lại form."
  },
  {
    "q": "Câu 72: Website mà tại đó các doanh nghiệp có thể tiến hành các hoạt động thương mại từ quảng cáo, giới thiệu hàng hoá, dịch vụ tới trao đổi thông tin, kí kết hợp đồng thanh toán… được gọi là",
    "options": [
      "Sàn giao dịch điện tử",
      "Chợ điện tử",
      "Trung tâm thương mại điện tử",
      "Sàn giao dịch điện tử B2B"
    ],
    "answer": 3,
    "explain": "Sàn giao dịch điện tử B2B (Business-to-Business) kết nối các hoạt động thương mại toàn diện giữa các doanh nghiệp."
  },
  {
    "q": "Câu 73: Trên sàn giao dịch điện tử hiện nay, các doanh nghiệp không thể làm gì?",
    "options": [
      "Quảng cáo",
      "Giới thiệu hàng hoá, dịch vụ",
      "Tìm kiếm khách hàng",
      "Ký kết văn bản hợp đồng"
    ],
    "answer": 3,
    "explain": "Ký kết văn bản hợp đồng trực tiếp pháp lý đầy đủ thường sử dụng chứng thư/chữ ký số chuyên dụng chứ không thực hiện thuần túy trên sàn giao dịch."
  },
  {
    "q": "Câu 74: Các Web client thường được gọi là gì?",
    "options": [
      "Netscape Navigator",
      "Browsers",
      "Mosaic",
      "HTML interpreter (trình thông dịch HTML)"
    ],
    "answer": 1,
    "explain": "Web Client chạy ở phía người dùng cuối để truy cập web thường được gọi chung là Trình duyệt (Browsers)."
  },
  {
    "q": "Câu 75: Lệnh PING dùng để?",
    "options": [
      "Kiểm tra các máy tính có đĩa cứng hay không?",
      "Kiểm tra các máy tính có hoạt động tốt hay không?",
      "Kiểm tra các máy tính trong mạng có liên thông không?",
      "Kiểm tra các máy tính có truy cập vào Internet không?"
    ],
    "answer": 2,
    "explain": "Lệnh PING gửi gói tin ICMP để kiểm tra khả năng kết nối/liên thông mạng giữa hai thiết bị."
  },
  {
    "q": "Câu 76: Đơn vị cơ bản đo tốc độ truyền dữ liệu trong mạng máy tính là?",
    "options": [
      "Bit",
      "Byte",
      "Bps",
      "Hz"
    ],
    "answer": 2,
    "explain": "Bps (Bits per second - Bit trên giây) là đơn vị đo tốc độ truyền dữ liệu cơ bản."
  },
  {
    "q": "Câu 77: Firewall là một hệ thống kiểm soát, ngăn chặn:",
    "options": [
      "Đột nhập bất hợp pháp từ bên ngoài vào hệ thống",
      "Sử dụng tài nguyên của mạng.",
      "Quyền truy xuất thông tin",
      "Gián điệp"
    ],
    "answer": 0,
    "explain": "Tường lửa (Firewall) đóng vai trò rào chắn chống lại các truy cập trái phép từ bên ngoài vào hệ thống."
  },
  {
    "q": "Câu 78: Trong khi gửi file đính kèm theo Gmail, thì kích thước file:",
    "options": [
      "Nhỏ hơn 1 MB",
      "Nhỏ hơn 10 MB",
      "Tối đa 25MB",
      "Không giới hạn"
    ],
    "answer": 2,
    "explain": "Dung lượng tệp đính kèm trực tiếp tối đa mặc định của Gmail là 25MB."
  },
  {
    "q": "Câu 79: Thuật ngữ \"Siêu văn bản\" trong tin học được hiểu là:",
    "options": [
      "Văn bản tích hợp văn bản, hình ảnh, âm thanh, video…",
      "Văn bản tích hợp nhiều phương tiện truyền thông",
      "Văn bản tích hợp văn bản, hình ảnh, âm thanh, video… và các siêu liên kết",
      "Văn bản bất kì"
    ],
    "answer": 2,
    "explain": "Siêu văn bản (Hypertext) là văn bản đa phương tiện tích hợp các đường liên kết (hyperlinks) tới các tài nguyên khác."
  },
  {
    "q": "Câu 80: Một hoặc nhiều trang Web trong hệ thống WWW có một địa chỉ truy cập được gọi là:",
    "options": [
      "Web",
      "Website",
      "Siêu văn bản",
      "Trình duyệt Web"
    ],
    "answer": 1,
    "explain": "Website là một tập hợp các trang web liên quan nằm trên cùng một tên miền/địa chỉ truy cập."
  },
  {
    "q": "Câu 81: Để truy cập một trang web trên Internet, ta thực hiện lần lượt các thao tác:",
    "options": [
      "Nhập địa chỉ trang web vào dòng địa chỉ / Khởi động trình duyệt web / Nhấn phím Enter",
      "Nhấn phím Enter / Khởi động trình duyệt web / Nhập địa chỉ trang web vào dòng địa chỉ.",
      "Khởi động trình duyệt web / Nhập địa chỉ trang web vào dòng địa chỉ / Nhấn phím Enter.",
      "Khởi động trình duyệt web / Nhấn phím Enter / Nhập địa chỉ trang web vào dòng địa chỉ."
    ],
    "answer": 2,
    "explain": "Thứ tự chính xác: Mở trình duyệt web -> Gõ địa chỉ trang web vào thanh URL -> Bấm Enter."
  },
  {
    "q": "Câu 82: Chọn phát biểu đúng trong các phát biểu dưới đây?",
    "options": [
      "Mỗi máy tính khi tham gia (kết nối) vào mạng đều được cấp một địa chỉ duy nhất gọi là địa chỉ AP.",
      "Mỗi máy tính khi tham gia (kết nối) vào mạng đều được cấp một địa chỉ duy nhất gọi là địa chỉ IP.",
      "Mỗi máy tính khi tham gia (kết nối) vào mạng đều được cấp một địa chỉ duy nhất gọi là địa chỉ Internet",
      "Mỗi máy tính khi tham gia (kết nối) vào mạng đều được cấp một địa chỉ duy nhất gọi là địa chỉ chỉ số có độ dài 8 bit."
    ],
    "answer": 1,
    "explain": "Mỗi thiết bị khi tham gia vào mạng đều được gán một địa chỉ IP (Internet Protocol) định danh duy nhất."
  },
  {
    "q": "Câu 83: Thao tác lấy tài liệu hay phần mềm từ internet về máy của cá nhân gọi là gì ?",
    "options": [
      "Upload",
      "Download",
      "Save file",
      "Downfile"
    ],
    "answer": 1,
    "explain": "Tải dữ liệu từ máy chủ Internet về máy tính cá nhân gọi là Download (Tải xuống)."
  },
  {
    "q": "Câu 84: Internet Explorer là phần mềm dùng để:",
    "options": [
      "Quản lý đĩa và tập tin.",
      "Chat.",
      "Đọc và gửi E-mail.",
      "Duyệt Web."
    ],
    "answer": 3,
    "explain": "Internet Explorer (IE) là một phần mềm trình duyệt web do Microsoft phát triển."
  },
  {
    "q": "Câu 85: Một trong những tác dụng của Favorites trong các trình duyệt Web là gì?",
    "options": [
      "Giúp cho việc download các tập tin từ Internet về nhanh hơn.",
      "Giúp cho các trang Web đẹp hơn, dễ nhìn hơn.",
      "Tự động chọn lựa các mục yêu thích trên Internet.",
      "Cho phép vào lại một trang Web mà không cần nhớ địa chỉ của trang web đó."
    ],
    "answer": 3,
    "explain": "Tính năng Favorites (Dấu trang) lưu giữ đường dẫn để người dùng truy cập lại nhanh mà không cần gõ hay ghi nhớ địa chỉ web."
  },
  {
    "q": "Câu 86: Chọn phát biểu ĐÚNG?",
    "options": [
      "Internet Explorer là chương trình quản lý tập tin, thư mục.",
      "Google là công cụ tìm kiếm hữu hiệu nhất hiện nay nhưng chưa hỗ trợ tiếng Việt.",
      "FireFox là chương trình dọn dẹp đĩa tốt nhất hiện nay.",
      "Để thực hiện việc trao đổi thông tin qua Internet chúng ta có thể đăng ký dịch vụ thư điện tử hoặc đăng kí thành viên trong các diễn đàn."
    ],
    "answer": 3,
    "explain": "Để tương tác và trao đổi thông tin trên Internet, việc tạo tài khoản Email hoặc tài khoản Diễn đàn (Forum) là giải pháp phổ biến."
  },
  {
    "q": "Câu 87: Chọn câu đúng nhất trong các câu sau?",
    "options": [
      "Mạng máy tính là một tập hợp các máy tính trong một văn phòng được kết nối với nhau bằng các loại dây dẫn.",
      "Mạng máy tính là một tập hợp các máy tính có thể chia sẻ dữ liệu với nhau.",
      "Mạng máy tính là một tập hợp các máy tính được kết nối nhau thông qua các phương tiện truyền dẫn cho phép chia sẻ tài nguyên.",
      "Mạng máy tính là một tập hợp các máy tính được kết nối nhau thông qua các loại dây dẫn để cho phép chia sẻ tài nguyên."
    ],
    "answer": 2,
    "explain": "Mạng máy tính bao gồm các máy tính được kết nối với nhau qua phương tiện truyền dẫn (có dây hoặc không dây) để chia sẻ tài nguyên."
  },
  {
    "q": "Câu 88: Mozilla Firefox, Opera là gì?",
    "options": [
      "Các chương trình diệt virus.",
      "Các chương trình duyệt web.",
      "Tên các hệ điều hành.",
      "Tên các giao thức mạng."
    ],
    "answer": 1,
    "explain": "Mozilla Firefox và Opera là hai chương trình trình duyệt web phổ biến."
  },
  {
    "q": "Câu 89: Phát biểu nào sau đây là SAI ?",
    "options": [
      "Internet là mạng chỉ để cung cấp các trang Web cho toàn cầu.",
      "Internet là mạng gồm hàng triệu mạng máy tính của các cá nhân, đơn vị, tổ chức, doanh nghiệp, chính phủ... trên thế giới liên kết với nhau.",
      "Một trong các dịch vụ phổ biến trên Internet là FTP.",
      "Trên Internet, nhờ dịch vụ DNS (Domain Name System), có thể lấy được địa chỉ của một máy thông qua tên miền."
    ],
    "answer": 0,
    "explain": "Phát biểu này SAI vì Internet cung cấp rất nhiều dịch vụ khác ngoài trang Web (như Email, FTP, VoIP, IoT, Telnet,...)."
  },
  {
    "q": "Câu 90: Việt Nam chính thức nối mạng Internet năm nào?",
    "options": [
      "1997",
      "1998",
      "2000",
      "1995"
    ],
    "answer": 0,
    "explain": "Việt Nam chính thức kết nối với mạng Internet toàn cầu vào ngày 19/11/1997."
  },
  {
    "q": "Câu 91: Để tìm định nghĩa của từ “angel” bằng Google, cần gõ vào ô tìm kiếm nội dung nào sau đây?",
    "options": [
      "content: angel",
      "define: angel",
      "filetype: angel",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 1,
    "explain": "Cú pháp `define: <từ_khóa>` được sử dụng trên Google để tìm nghĩa/định nghĩa của từ."
  },
  {
    "q": "Câu 92: Phát biểu nào sau đây là SAI khi đề cập về mạng máy tính?",
    "options": [
      "Là một tập hợp các máy tính được kết nối nhau thông qua các phương tiện truyền dẫn nhằm cho phép chia sẻ tài nguyên",
      "Các máy tính nối mạng với nhau phải được đặt gần nhau để nối đường dây",
      "Có thể nối mạng máy tính trong nội bộ gia đình, cơ quan, trong nước hay giữa các quốc gia với nhau.",
      "Tùy phạm vi địa lý có thể phân mạng máy tính làm các loại: LAN, MAN, WAN và GAN"
    ],
    "answer": 1,
    "explain": "Phát biểu SAI vì các máy tính trong mạng có thể kết nối từ khoảng cách xa địa lý qua mạng diện rộng (WAN) hoặc không dây."
  },
  {
    "q": "Câu 93: Lợi ích của việc nối mạng Internet?",
    "options": [
      "Cho phép chia sẻ các tài nguyên",
      "Giúp độ tin cậy và sự an toàn của thông tin cao hơn",
      "Giúp tiết kiệm về thời gian và chi phí.",
      "Tất cả các phát biểu trên đều đúng"
    ],
    "answer": 3,
    "explain": "Nối mạng Internet mang lại đầy đủ lợi ích về chia sẻ dữ liệu, tăng độ cậy/lưu trữ và tiết kiệm tối đa thời gian, chi phí."
  },
  {
    "q": "Câu 94: Khi tìm kiếm bằng Google, nếu gõ vào ô tìm kiếm cụm từ \"Tin học\" thì thu được kết quả gì?",
    "options": [
      "Các trang web có chứa từ “Tin” hoặc “học” hoặc “Tin học”.",
      "Các trang web có chứa từ “Tin học”",
      "Các trang web chứa một trong hai từ “Tin” hoặc “học”",
      "Không thể tìm được vì sai cú pháp."
    ],
    "answer": 0,
    "explain": "Nếu gõ cụm từ không có dấu ngoặc kép `\" \"`, Google sẽ tự động tìm kiếm kết quả chứa từ \"Tin\", từ \"học\" hoặc cụm \"Tin học\"."
  },
  {
    "q": "Câu 95: Blog Entry là gì?",
    "options": [
      "Là nơi lưu trữ thông tin bài viết.",
      "Là nơi cập nhật thông tin bài viết.",
      "Là nơi bảo mật thông tin bài viết.",
      "Là nơi phục hồi thông tin bài viết vừa bị xóa."
    ],
    "answer": 1,
    "explain": "Blog entry (mục/bài viết trên Blog) là giao diện hoặc nơi để tác giả cập nhật, xuất bản thông tin bài viết mới."
  },
  {
    "q": "Câu 96: Hãy chọn một phát biểu chính xác nhất khi đề cập đến Blog?",
    "options": [
      "Blog là một trang web cá nhân với những thông tin đa dạng và được cập nhật tự động theo hệ thống của mạng Internet.",
      "Blog là một dạng của nhật ký cá nhân trực tuyến có thể viết hoặc cập nhật tất cả những thông tin cá nhân, quan điểm xã hội, những sở thích về âm nhạc, tranh ảnh, film…",
      "Blog là một văn bản như văn bản Word, nó có thể in ra giấy, có thể xuất ra web và hỗ trợ trình chiếu như Powerpoint.",
      "Blog là một đóng gói văn bản với những đặc trưng riêng, chuyên dùng cho cá nhân trong việc trình bày quan điểm và thể hiện những hiểu biết của mình về máy tính và mạng máy tính."
    ],
    "answer": 1,
    "explain": "Blog là dạng nhật ký trực tuyến cá nhân dùng để chia sẻ quan điểm, thông tin, hình ảnh và sở thích cá nhân."
  },
  {
    "q": "Câu 97: Các số \"192.168.1.1\" là 1 ví dụ của",
    "options": [
      "bộ nhớ đệm",
      "địa chỉ IP",
      "chứng đối số",
      "bộ nhớ ngoài"
    ],
    "answer": 1,
    "explain": "192.168.1.1 là định dạng tiêu chuẩn của một địa chỉ IP (IPv4)."
  },
  {
    "q": "Câu 98: Các thành phần của tên miền được phân cách bằng ký tự gì?",
    "options": [
      "Dấu “#”",
      "Dấu “ ”",
      "Dấu “?”",
      "Dấu \".\""
    ],
    "answer": 3,
    "explain": "Các cấp tên miền được ngăn cách bởi dấu chấm (ví dụ: qnu.edu.vn)."
  },
  {
    "q": "Câu 99: Đâu là công cụ tìm kiếm thông tin trên Internet hiện nay?",
    "options": [
      "Yahoo",
      "Google",
      "Bing",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 3,
    "explain": "Yahoo, Google và Bing đều là các công cụ tìm kiếm (Search Engines) trên Internet."
  },
  {
    "q": "Câu 100: Chọn phát biểu đúng về tên miền",
    "options": [
      "Là một tên dễ nhớ để gán cho một địa chỉ trên interne",
      "Tên miền là tên gọi trò về một địa chỉ IP",
      "Tên miền là tên giao dịch của 1 công ty hay tổ chức sử dụng trên Internet",
      "Tất cả các phương án trên đều đúng"
    ],
    "answer": 3,
    "explain": "Tên miền dễ nhớ đại diện thay thế cho địa chỉ IP khô khan, đồng thời đóng vai trò định danh tên thương hiệu/tổ chức."
  },
  {
    "q": "Câu 101: DNS là viết tắt của cụm từ tiếng Anh nào?",
    "options": [
      "Domain Network System.",
      "Domain Name System.",
      "Dynamic Name System.",
      "Dynamic Network System."
    ],
    "answer": 1,
    "explain": "DNS viết tắt của Domain Name System (Hệ thống phân giải tên miền)."
  },
  {
    "q": "Câu 102: Dưới góc độ địa lý, mạng máy tính được phân biệt thành:",
    "options": [
      "Mạng cục bộ, mạng diện rộng, mạng toàn cục",
      "Mạng cục bộ, mạng toàn cục, mạng toàn cầu",
      "Mạng cục bộ, mạng diện rộng, mạng toàn cầu",
      "Mạng diện rộng, mạng toàn cầu"
    ],
    "answer": 1,
    "explain": "Phân loại theo địa lý gồm: Mạng cục bộ (LAN), Mạng diện rộng/toàn cục (WAN) và Mạng toàn cầu (GAN/Internet)."
  },
  {
    "q": "Câu 103: Để 2 mạng có thể trao đổi thông tin với nhau thì cần có các điều kiện gì?",
    "options": [
      "Cần có một thiết bị để kết nối 2 mạng đó",
      "Cần cả thiết bị để kết nối 2 mạng và giao thức để hai mạng trao đổi thông tin.",
      "Không thể kết nối 2 mạng.",
      "Cần có các giao thức truyền thông để hai mạng trao đổi thông tin"
    ],
    "answer": 1,
    "explain": "Để hai mạng giao tiếp được với nhau bắt buộc phải có thiết bị kết nối vật lý (như Router) và giao thức mạng chung."
  },
  {
    "q": "Câu 104: Để truy cập vào một trang Web chúng ta cần phải biết:",
    "options": [
      "Địa chỉ của trang web",
      "Hệ điều hành đang sử dụng",
      "Trang web đó của nước nào",
      "Địa chỉ IP của máy tính"
    ],
    "answer": 0,
    "explain": "Muốn truy cập trực tiếp một trang web cụ thể, người dùng cần biết địa chỉ URL của trang web đó."
  },
  {
    "q": "Câu 105: Địa chỉ IP được chia thành bao nhiêu phần, ngăn cách các phần bằng ký tự gì?",
    "options": [
      "4 phần, ngăn cách bằng dấu “,”",
      "4 phần, ngăn cách bằng dấu “ ”",
      "5 phần, ngăn cách bằng dấu “ ”",
      "4 phần, ngăn cách bằng dấu “.”"
    ],
    "answer": 3,
    "explain": "Địa chỉ IPv4 gồm 4 nhóm số (octet) ngăn cách nhau bằng dấu chấm '.' (Ví dụ: 192.168.1.1)."
  },
  {
    "q": "Câu 106: Hai người đã tạo được tài khoản thư miễn phí tại địa chỉ MAIL.YAHOO.COM. Phát biểu nào dưới đây là sai:",
    "options": [
      "Hộp thư của cả hai đều nằm trên máy Mail Server của công ty Yahoo",
      "Hai người này buộc phải lựa chọn hai tên đăng nhập khác nhau",
      "Mật khẩu mở hộp thư của hai người này phải khác nhau.",
      "Có tên đăng nhập khác nhau"
    ],
    "answer": 2,
    "explain": "Mật khẩu do người dùng tự đặt độc lập, do đó hai tài khoản hoàn toàn có thể vô tình đặt trùng mật khẩu với nhau."
  },
  {
    "q": "Câu 107: Hai người trao đổi thông tin với nhau qua ứng dụng hội thoại trong cùng một mạng cơ quan. Phát biểu nào sau đây là đúng ?",
    "options": [
      "Dữ liệu truyền từ máy đang hội thoại lên máy chủ có dịch vụ hội thoại của cơ quan và quay về máy bên kia",
      "Dữ liệu đi trực tiếp giữa hai máy",
      "Dữ liệu truyền không được",
      "Dữ liệu truyền từ Modem, rồi đến máy tính bên kia"
    ],
    "answer": 0,
    "explain": "Nội dung chat/hội thoại nội bộ sẽ truyền qua máy chủ ứng dụng (Chat Server) của cơ quan trước khi gửi về máy người nhận."
  },
  {
    "q": "Câu 108: HTML là viết tắt của cụm từ tiếng Anh nào?",
    "options": [
      "High Text Markup Language.",
      "Hyper Text Markup Language.",
      "Hyper Test Making Language.",
      "Hyper Texts Markup Language"
    ],
    "answer": 1,
    "explain": "HTML là viết tắt của HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản)."
  },
  {
    "q": "Câu 109: Kỹ thuật mạng dùng để kết nối các máy tính trong phạm vi một tòa nhà được gọi là gì?",
    "options": [
      "Mạng văn phòng",
      "Mạng gia đình",
      "Mạng cục bộ",
      "Mạng toàn cục"
    ],
    "answer": 2,
    "explain": "Mạng cục bộ (LAN - Local Area Network) được dùng để kết nối các máy tính trong một phạm vi nhỏ như một tòa nhà, phòng máy hay cơ quan."
  },
  {
    "q": "Câu 110: Khi muốn lưu lại trang Web đang duyệt lên máy tính, bạn phải làm thế nào trên trình duyệt Internet Explorer",
    "options": [
      "File/ Save As",
      "File/ Edit",
      "File/ Download",
      "File/ open"
    ],
    "answer": 0,
    "explain": "Thao tác chọn File -> Save As cho phép lưu nội dung trang web hiện tại về đĩa cứng của máy tính."
  },
  {
    "q": "Câu 111: Mỗi máy tính khi tham gia vào một mạng máy tính nào đó cùng đều có",
    "options": [
      "Địa chỉ IP",
      "Địa chỉ nhà",
      "Mã sản phẩm",
      "Tên miền"
    ],
    "answer": 0,
    "explain": "Địa chỉ IP là thông số định danh bắt buộc phải có cho mỗi thiết bị khi tham gia kết nối vào mạng máy tính."
  },
  {
    "q": "Câu 112: Một người dùng cá nhân muốn sử dụng Internet thì nên liên hệ với tổ chức nào?",
    "options": [
      "Internet Access Provider – Nhà cung cấp dịch vụ đường truyền truy cập Internet.",
      "Internet Service Provider – Nhà cung cấp dịch vụ Internet.",
      "Internet Content Provider – Nhà cung cấp dịch vụ nội dung thông tin Internet.",
      "Internet chỉ dành cho các tổ chức, cá nhân không được sử dụng."
    ],
    "answer": 1,
    "explain": "ISP (Internet Service Provider) là tổ chức cung cấp dịch vụ kết nối Internet cho các cá nhân và hộ gia đình."
  },
  {
    "q": "Câu 113: Mục đích chính của việc đưa ra tên miền là gì?",
    "options": [
      "Tên miền đẹp hơn địa chỉ IP.",
      "Việc nhớ tên miền dễ hơn việc nhớ địa chỉ IP.",
      "Việc xử lý tên miền dễ hơn việc xử lý địa chỉ IP.",
      "Để mở rộng kết nối"
    ],
    "answer": 1,
    "explain": "Tên miền giúp người dùng dễ đọc và dễ nhớ hơn so với các chuỗi số khô khan của địa chỉ IP."
  },
  {
    "q": "Câu 114: TCP/IP là tên viết tắt của cụm từ tiếng Anh nào?",
    "options": [
      "Telecoms Control Protocol / Information Protocol.",
      "Transmission Control Protocol / Internet Protocol",
      "Transfer Protocol / Information Protocol.",
      "Transport Protocol / Internet Protocol"
    ],
    "answer": 1,
    "explain": "TCP/IP là viết tắt của Transmission Control Protocol / Internet Protocol."
  },
  {
    "q": "Câu 115: Tổ chức nào sáng lập ra Internet?",
    "options": [
      "ARPA",
      "IBM",
      "IETF",
      "Intel"
    ],
    "answer": 0,
    "explain": "Cơ quan Quản lý Dự án Nghiên cứu Tiên tiến Quốc phòng Mỹ (ARPA) là tổ chức đã tài trợ và sáng lập ra mạng ARPANET - tiền thân của Internet."
  },
  {
    "q": "Câu 116: Thao tác nào là không thực hiện được với trang web:",
    "options": [
      "Sao chép 1 ảnh trên trang Web về máy cá nhân.",
      "Sao chép 1 đoạn nội dung trên trang Web về máy cá nhân.",
      "Xoá nội dung bằng cách chọn đoạn nội dung và nhấn nút Delete.",
      "Xem nội dung trên web"
    ],
    "answer": 2,
    "explain": "Trang web đang hiển thị trên trình duyệt chỉ cho phép xem hoặc sao chép, không thể trực tiếp chỉnh sửa hay xóa nội dung gốc trên máy chủ bằng nút Delete."
  },
  {
    "q": "Câu 117: Thứ tự kết nối Internet theo đường quay số theo bạn là?",
    "options": [
      "Máy tính - modem - điện thoại – ISP.",
      "Máy tính - điện thoại - modem - ISP",
      "Máy tính - ISP - điện thoại – modem",
      "Máy tính-điện thoại-ISP-modem"
    ],
    "answer": 0,
    "explain": "Kết nối Dial-up thực hiện theo trình tự từ Máy tính gửi tín hiệu qua Modem, truyền qua đường dây Điện thoại tới Nhà cung cấp dịch vụ Internet (ISP)."
  },
  {
    "q": "Câu 118: Trong các thuật ngữ dưới, thuật ngữ nào KHÔNG chỉ các giao thức?",
    "options": [
      "TCP/IP",
      "LAN/WAN",
      "IPX/SPX",
      "POP3, SMTP"
    ],
    "answer": 1,
    "explain": "LAN (Local Area Network) và WAN (Wide Area Network) là các thuật ngữ chỉ loại hình/mạng máy tính theo phạm vi địa lý, không phải giao thức truyền thông."
  },
  {
    "q": "Câu 119: Tường lửa (Firewall) dùng để:",
    "options": [
      "Ngăn chặn Virus xâm nhập vào hệ thống.",
      "Quét virus trên hệ thống.",
      "Ngăn chặn các kết nối không mong muốn.",
      "Ngăn chặn tất cả các chương trình đang hoạt động trên máy tính."
    ],
    "answer": 2,
    "explain": "Tường lửa được sử dụng để theo dõi, lọc traffic và ngăn chặn các truy cập/kết nối trái phép hoặc không mong muốn từ bên ngoài."
  },
  {
    "q": "Câu 120: Nói chuyện qua giao thức Internet (VoIP – Voice over IP) là:",
    "options": [
      "Cuộc đàm thoại mà mỗi bên sử dụng ứng dụng gọi điện mà âm thanh cuộc gọi được mã hóa và truyền qua mạng Internet.",
      "Cuộc đàm thoại mà mỗi bên có thể sử dụng một bộ giao thức bất kỳ trên Internet.",
      "Cuộc đàm thoại bắt buộc mỗi bên phải dùng smartphone (điện thoại thông minh).",
      "Cuộc đàm thoại mà hai bên phải sử dụng cùng một loại thiết bị và cùng một loại giao thức."
    ],
    "answer": 0,
    "explain": "VoIP (Voice over IP) là công nghệ truyền giọng nói qua mạng Internet bằng cách mã hóa dữ liệu âm thanh thành các gói tin IP."
  }
    ]
  }
};

/* =====================================================
   3. THÔNG TIN DANH MỤC
===================================================== */

const categoryInfo = {
    powerpoint: {
        title: "PowerPoint",
        label: "POWERPOINT",
        description: "Ôn tập và học các kỹ năng trình chiếu chuyên nghiệp.",
        icon: '<i class="fa-solid fa-file-powerpoint"></i>',
        color: "#f04b1d"
    },
    excel: {
        title: "Excel",
        label: "EXCEL",
        description: "Ôn tập hàm, công thức và xử lý dữ liệu với Excel.",
        icon: '<i class="fa-solid fa-file-excel"></i>',
        color: "#11a568"
    },
    word: {
        title: "Word",
        label: "WORD",
        description: "Ôn tập soạn thảo văn bản và các tính năng trong Word.",
        icon: '<i class="fa-solid fa-file-word"></i>',
        color: "#2375db"
    }
};

/* =====================================================
   4. BIẾN HỆ THỐNG
===================================================== */

let currentCategory = null;
let currentLessonIndex = 0;
let currentLesson = null;
let authMode = "login";
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

/* Trạng thái bài thi trắc nghiệm */
let currentQuizTopicKey = null;
let currentQuestionIndex = 0;
let userQuizAnswers = {};
let isSubmitted = false;

/* =====================================================
   5. KHỞI ĐỘNG HỆ THỐNG
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    updateAccountUI();
    showHome();
});

function hidePages() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("categoryPage").classList.add("hidden");
    document.getElementById("lessonPage").classList.add("hidden");
    document.getElementById("otherPage").classList.add("hidden");
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#1e293b";
    toast.style.color = "#ffffff";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "14px";
    toast.textContent = message;

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

/* =====================================================
   6. ĐIỀU HƯỚNG VÀ BÀI HỌC
===================================================== */

function showHome() {
    hidePages();
    document.getElementById("homePage").classList.remove("hidden");
    updateNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNav(category) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.classList.remove("active"));
    if (category) {
        const activeNav = document.querySelector(`.nav-link[data-category="${category}"]`);
        if (activeNav) activeNav.classList.add("active");
    }
}

function openCategory(category) {
    if (!lessons[category]) return;
    currentCategory = category;
    hidePages();
    document.getElementById("categoryPage").classList.remove("hidden");
    renderCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
    updateNav(category);
}

function renderCategory(category) {
    const info = categoryInfo[category];
    const list = lessons[category];

    const iconElem = document.getElementById("categoryBigIcon");
    iconElem.innerHTML = info.icon;
    iconElem.style.setProperty("--current-color", info.color);
    iconElem.style.background = info.color;

    document.getElementById("categoryLabel").textContent = info.label;
    document.getElementById("categoryTitle").textContent = info.title;
    document.getElementById("categoryDescription").textContent = info.description;
    document.getElementById("lessonTotal").textContent = `${list.length} bài học`;

    const container = document.getElementById("lessonList");
    container.innerHTML = "";

    list.forEach((lesson, index) => {
        const card = document.createElement("article");
        card.className = "lesson-card";
        card.innerHTML = `
            <div class="lesson-icon" style="background:${info.color}">
                ${info.icon}
            </div>
            <div class="lesson-info">
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
            </div>
            <button class="learn-button" style="background:${info.color}" onclick="openLesson('${category}', ${index})">
                Vào học <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
        container.appendChild(card);
    });
}

function openLesson(category, index) {
    if (!currentUser) {
        showToast("Bạn cần đăng ký hoặc đăng nhập để xem video.");
        openLogin();
        return;
    }

    currentCategory = category;
    currentLessonIndex = index;
    currentLesson = lessons[category][index];

    hidePages();
    document.getElementById("lessonPage").classList.remove("hidden");
    renderLesson();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLesson() {
    const info = categoryInfo[currentCategory];
    const lesson = currentLesson;

    const detailIcon = document.getElementById("detailIcon");
    detailIcon.innerHTML = info.icon;
    detailIcon.style.background = info.color;

    document.getElementById("detailCategory").textContent = info.label;
    document.getElementById("detailTitle").textContent = lesson.title;
    document.getElementById("detailDescription").textContent = lesson.description;

    /* VIDEO */
    const videoContainer = document.getElementById("videoContainer");
    if (lesson.video) {
        videoContainer.innerHTML = `
            <video controls preload="metadata" controlsList="nodownload">
                <source src="${encodeURI(lesson.video)}" type="video/mp4">
                Trình duyệt không hỗ trợ video.
            </video>
        `;
    } else {
        videoContainer.innerHTML = `
            <div class="no-video">
                <div>
                    <i class="fa-solid fa-video-slash" style="font-size:35px;margin-bottom:10px;"></i>
                    <p>Video bài học đang được cập nhật.</p>
                </div>
            </div>
        `;
    }

    /* FILE */
    const fileContainer = document.getElementById("fileContainer");
    if (lesson.file) {
        fileContainer.innerHTML = `
            <div class="file-card">
                <div class="file-name">
                    <i class="fa-solid fa-file-arrow-down"></i>
                    ${lesson.file}
                </div>
                <a class="download-button" href="${encodeURI(lesson.file)}" download>
                    <i class="fa-solid fa-download"></i> Tải tài liệu
                </a>
            </div>
        `;
    } else {
        fileContainer.innerHTML = `
            <div class="file-card">
                <div class="file-name">
                    <i class="fa-solid fa-file"></i> Tài liệu đang cập nhật
                </div>
            </div>
        `;
    }

    /* NEXT LESSON */
    const nextIndex = currentLessonIndex + 1;
    if (lessons[currentCategory][nextIndex]) {
        document.getElementById("nextLessonTitle").textContent = lessons[currentCategory][nextIndex].title;
    } else {
        document.getElementById("nextLessonTitle").textContent = "Đã hết bài học";
    }

    loadLikeState();
    loadComments();
}

function backToCategory() {
    if (currentCategory) {
        openCategory(currentCategory);
    } else {
        showHome();
    }
}

function nextLesson() {
    const next = currentLessonIndex + 1;
    if (lessons[currentCategory][next]) {
        openLesson(currentCategory, next);
    } else {
        showToast("Đây là bài học cuối cùng.");
    }
}

function likeLesson() {
    if (!currentUser) {
        showToast("Hãy đăng nhập để thích bài học.");
        openLogin();
        return;
    }
    const key = `like_${currentUser.username}_${currentLesson.id}`;
    const liked = localStorage.getItem(key) === "true";
    localStorage.setItem(key, String(!liked));
    loadLikeState();
}

function loadLikeState() {
    if (!currentLesson) return;
    let liked = false;
    if (currentUser) {
        liked = localStorage.getItem(`like_${currentUser.username}_${currentLesson.id}`) === "true";
    }
    const button = document.getElementById("likeButton");
    const icon = button.querySelector("i");
    if (liked) {
        button.classList.add("liked");
        icon.className = "fa-solid fa-heart";
    } else {
        button.classList.remove("liked");
        icon.className = "fa-regular fa-heart";
    }
}

function openCommentBox() {
    document.getElementById("commentBox").classList.toggle("hidden");
}

function sendComment() {
    if (!currentUser) {
        showToast("Hãy đăng nhập để bình luận.");
        openLogin();
        return;
    }
    const input = document.getElementById("commentInput");
    const text = input.value.trim();
    if (!text) {
        showToast("Hãy nhập bình luận.");
        return;
    }

    const key = `comments_${currentLesson.id}`;
    const comments = JSON.parse(localStorage.getItem(key)) || [];
    comments.push({
        user: currentUser.username,
        text: text,
        time: new Date().toLocaleString("vi-VN")
    });

    localStorage.setItem(key, JSON.stringify(comments));
    input.value = "";
    loadComments();
    showToast("Đã gửi bình luận.");
}

function loadComments() {
    if (!currentLesson) return;
    const key = `comments_${currentLesson.id}`;
    const comments = JSON.parse(localStorage.getItem(key)) || [];
    const box = document.getElementById("commentList");
    box.innerHTML = "";

    comments.forEach(comment => {
        const div = document.createElement("div");
        div.className = "comment-item";
        div.innerHTML = `
            <strong>${escapeHTML(comment.user)}</strong><br>
            ${escapeHTML(comment.text)}<br>
            <small>${comment.time}</small>
        `;
        box.appendChild(div);
    });
}

/* =====================================================
   7. HỆ THỐNG XÁC THỰC (AUTH)
===================================================== */

function openLogin() {
    authMode = "login";
    document.getElementById("authModal").classList.remove("hidden");
    updateAuthForm();
}

function openRegister() {
    authMode = "register";
    document.getElementById("authModal").classList.remove("hidden");
    updateAuthForm();
}

function closeAuth() {
    document.getElementById("authModal").classList.add("hidden");
}

function switchAuth() {
    authMode = authMode === "login" ? "register" : "login";
    updateAuthForm();
}

function updateAuthForm() {
    const title = document.getElementById("authTitle");
    const button = document.getElementById("authSubmit");
    const switchText = document.getElementById("switchText");

    if (authMode === "login") {
        title.textContent = "Đăng nhập";
        button.textContent = "Đăng nhập";
        switchText.textContent = "Chưa có tài khoản?";
    } else {
        title.textContent = "Tạo tài khoản";
        button.textContent = "Đăng ký";
        switchText.textContent = "Đã có tài khoản?";
    }
}

function submitAuth() {
    const username = document.getElementById("authUsername").value.trim();
    const password = document.getElementById("authPassword").value;

    if (!username || !password) {
        showToast("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    const ADMIN_USERNAME = "TRẦN VI VĨ";
    const ADMIN_PASSWORD = "151007";

    if (authMode === "login") {
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            currentUser = { username: ADMIN_USERNAME, role: "admin" };
            saveCurrentUser();
            closeAuth();
            updateAccountUI();
            showToast("Đăng nhập quản trị thành công.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            showToast("Sai tài khoản hoặc mật khẩu.");
            return;
        }

        if (user.disabled) {
            showToast("Tài khoản này đang bị khóa.");
            return;
        }

        currentUser = { username: user.username, role: "student" };
        saveCurrentUser();
        closeAuth();
        updateAccountUI();
        showToast(`Xin chào ${user.username}!`);

    } else {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(u => u.username === username)) {
            showToast("Tên tài khoản đã tồn tại.");
            return;
        }

        users.push({ username: username, password: password, disabled: false });
        localStorage.setItem("users", JSON.stringify(users));

        currentUser = { username: username, role: "student" };
        saveCurrentUser();
        closeAuth();
        updateAccountUI();
        showToast("Đăng ký thành công!");
    }
}

function saveCurrentUser() {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

function updateAccountUI() {
    const login = document.querySelector(".login-btn");
    const register = document.querySelector(".register-btn");
    const userArea = document.getElementById("userArea");

    if (currentUser) {
        if (login) login.classList.add("hidden");
        if (register) register.classList.add("hidden");
        if (userArea) userArea.classList.remove("hidden");
        const display = document.getElementById("usernameDisplay");
        if (display) display.textContent = currentUser.username;
    } else {
        if (login) login.classList.remove("hidden");
        if (register) register.classList.remove("hidden");
        if (userArea) userArea.classList.add("hidden");
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem("currentUser");
    updateAccountUI();
    showHome();
    showToast("Bạn đã đăng xuất.");
}

/* =====================================================
   8. TRỢ LÝ AI ASSISTANT
===================================================== */

function toggleAI() {
    document.getElementById("aiPanel").classList.toggle("hidden");
}

function sendAI() {
    const input = document.getElementById("aiInput");
    const question = input.value.trim();
    if (!question) return;

    addAIMessage(question, true);
    input.value = "";

    setTimeout(() => {
        const answer = generateAIAnswer(question);
        addAIMessage(answer, false);
    }, 500);
}

function generateAIAnswer(question) {
    const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (q.includes("vlookup")) {
        return `
            <strong>VLOOKUP</strong> dùng để tìm một giá trị trong cột đầu tiên của bảng và trả về dữ liệu tương ứng ở một cột khác.
            <br><br>
            Cú pháp:
            <br>
            <code>=VLOOKUP(giá_trị_cần_tìm, bảng, số_cột, FALSE)</code>
        `;
    }

    if (q.includes("left")) {
        return `
            Hàm <strong>LEFT</strong> lấy một số ký tự từ bên trái chuỗi.
            <br><br>
            Ví dụ: <code>=LEFT(A1,3)</code><br>
            Nếu A1 là ABCDE thì kết quả là ABC.
        `;
    }

    if (q.includes("mid")) {
        return `
            Hàm <strong>MID</strong> lấy ký tự bắt đầu từ vị trí xác định trong chuỗi.
            <br><br>
            <code>=MID(A1,2,3)</code> nghĩa là lấy 3 ký tự bắt đầu từ vị trí thứ 2.
        `;
    }

    if (q.includes("ctrl+b")) {
        return `<strong>Ctrl + B</strong> trong Word dùng để bật/tắt chữ <strong>in đậm</strong>.`;
    }

    if (q.includes("ctrl+s")) {
        return `<strong>Ctrl + S</strong> dùng để lưu tài liệu hiện tại.`;
    }

    if (q.includes("powerpoint") || q.includes("ppt")) {
        return `
            PowerPoint dùng để tạo bài trình chiếu. Bạn có thể hỏi tôi về:
            <br><br>
            • Slide<br>• Transition<br>• Animation<br>• Phím F5<br>• Thiết kế bài trình chiếu
        `;
    }

    if (q.includes("excel")) {
        return `Tôi có thể hỗ trợ bạn về Excel, bao gồm các hàm VLOOKUP, LEFT, MID, IF, SUM, COUNTIF,...`;
    }

    if (q.includes("word")) {
        return `Tôi có thể hỗ trợ Word về: Định dạng văn bản, Bảng biểu, Header/Footer, Styles, Phím tắt,...`;
    }

    return `
        Tôi đã nhận câu hỏi của bạn:
        <br><br>
        <strong>${escapeHTML(question)}</strong>
        <br><br>
        Bạn có thể hỏi cụ thể hơn về Word, Excel, PowerPoint, công thức, hàm hoặc bài học để tôi hỗ trợ.
    `;
}

function addAIMessage(message, user) {
    const box = document.getElementById("aiMessages");
    const div = document.createElement("div");
    div.className = user ? "ai-message user" : "ai-message";
    div.innerHTML = `
        <i class="fa-solid ${user ? "fa-user" : "fa-robot"}"></i>
        <div>${message}</div>
    `;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

/* =====================================================
   9. TRẮC NGHIỆM VÀ GIAO DIỆN LẬT TRANG
===================================================== */

  function openOtherPage(htmlContent) {
    hidePages();

    const other = document.getElementById("otherPage");

    // Xác định đây có phải trang THI THỬ hay không
    const isTrialPage = htmlContent.includes('class="trial-page');

    // Chỉ tắt hiệu ứng chuyển trang đối với THI THỬ
    other.classList.toggle("trial-static", isTrialPage);

    // Hiển thị nội dung
    other.innerHTML = htmlContent;
    other.classList.remove("hidden");

    // THI THỬ: cuộn ngay, không smooth để tránh cảm giác giật/chớp
    // Các trang khác vẫn giữ nguyên
    window.scrollTo({
        top: 0,
        behavior: isTrialPage ? "auto" : "smooth"
    });
}

function openExam() {
    let examHTML = `
        <h2 class="other-title">
            <i class="fa-solid fa-list-check" style="color:#2563eb;"></i>
            Ngân hàng câu hỏi Ôn tập Trắc nghiệm
        </h2>
        <p class="other-text">
            Chọn chủ đề bên dưới để bắt đầu luyện tập trắc nghiệm theo từng module chuẩn CNTT.
        </p>

        <div class="lesson-list" style="margin-top:20px;">
    `;

    for (const key in quizBank) {
        const topic = quizBank[key];
        const qLength = topic.questions ? topic.questions.length : 0;
        
        examHTML += `
            <div class="lesson-card" onclick="startQuiz('${key}')" style="cursor:pointer;">
                <div class="lesson-icon" style="background:#2563eb;">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div class="lesson-info">
                    <h3>${topic.title}</h3>
                    <p>${topic.description} (${qLength} câu hỏi)</p>
                </div>
                <button class="learn-button" style="background:#2563eb;">
                    Bắt đầu <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
    }

    examHTML += `</div>`;
    openOtherPage(examHTML);
}

function startQuiz(topicKey) {
    const topic = quizBank[topicKey];
    if (!topic || !topic.questions.length) {
        showToast("Module này chưa có câu hỏi! Vui lòng chọn module khác.");
        return;
    }

    currentQuizTopicKey = topicKey;
    currentQuestionIndex = 0;
    userQuizAnswers = {};
    isSubmitted = false;

    renderQuizBookView();
}

function renderQuizBookView() {
    const topic = quizBank[currentQuizTopicKey];
    if (!topic) return;

    const total = topic.questions.length;
    const qObj = topic.questions[currentQuestionIndex];
    const selectedAns = userQuizAnswers[currentQuestionIndex];

    let score = 0;
    if (isSubmitted) {
        topic.questions.forEach((q, idx) => {
            if (userQuizAnswers[idx] === q.answer) score++;
        });
    }

    let quizHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <button class="back-button" onclick="openExam()">
                <i class="fa-solid fa-arrow-left"></i> Quay lại chọn chủ đề
            </button>
            <span style="font-weight: bold; color: #2563eb;">Câu ${currentQuestionIndex + 1} / ${total}</span>
        </div>

        <h2 class="other-title" style="font-size:20px;">${topic.title}</h2>

        <div id="quizResultSummary">
            ${isSubmitted ? `
                <div class="quiz-result-summary" style="padding: 15px; background: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px; margin-bottom: 15px; text-align: center;">
                    <h3 style="color: #15803d; margin-bottom: 5px;"><i class="fa-solid fa-trophy"></i> KẾT QUẢ BÀI THI</h3>
                    <p style="font-size: 18px; color: #166534;">
                        Bạn đã trả lời đúng <strong>${score} / ${total}</strong> câu (${Math.round((score/total)*100)}%)!
                    </p>
                </div>
            ` : ''}
        </div>

        <div class="quiz-layout" style="margin-top: 15px; display: flex; gap: 20px; flex-wrap: wrap;">
            <!-- CỘT BÊN TRÁI: CÂU HỎI HIỆN TẠI -->
            <div class="quiz-container" style="flex:1; min-width: 300px;">
                <div class="quiz-item" id="question-${currentQuestionIndex}">
                    <div class="quiz-question" style="font-size:17px; font-weight:600; margin-bottom:15px;">
                        Câu ${currentQuestionIndex + 1}: ${qObj.q}
                    </div>

                    <div class="quiz-options-buttons" style="display: flex; flex-direction: column; gap: 10px;">
    `;

    qObj.options.forEach((opt, optIndex) => {
        const isSelected = selectedAns === optIndex;
        let borderColor = "#cbd5e1";
        let bgColor = "#ffffff";
        let textColor = "#334155";
        let badgeBg = "#f1f5f9";
        let badgeColor = "#475569";

        if (isSubmitted) {
            if (optIndex === qObj.answer) {
                borderColor = "#16a34a";
                bgColor = "#dcfce7";
                textColor = "#15803d";
                badgeBg = "#16a34a";
                badgeColor = "#ffffff";
            } else if (isSelected && isSelected !== qObj.answer) {
                borderColor = "#dc2626";
                bgColor = "#fee2e2";
                textColor = "#b91c1c";
                badgeBg = "#dc2626";
                badgeColor = "#ffffff";
            }
        } else if (isSelected) {
            borderColor = "#2563eb";
            bgColor = "#eff6ff";
            textColor = "#1e40af";
            badgeBg = "#2563eb";
            badgeColor = "#ffffff";
        }

        quizHTML += `
            <button type="button" class="btn-option ${isSelected ? "active-selected" : ""}" 
                onclick="${isSubmitted ? "" : `selectAnswerOption(${optIndex})`}" 
                style="
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                border: 2px solid ${borderColor};
                border-radius: 8px;
                background: ${bgColor};
                color: ${textColor};
                font-size: 15px;
                cursor: ${isSubmitted ? "default" : "pointer"};
                text-align: left;
                transition: all 0.2s ease;
            ">
                <span style="
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: ${badgeBg};
                    color: ${badgeColor};
                    font-weight: bold;
                    font-size: 14px;
                ">${String.fromCharCode(65 + optIndex)}</span>
                <span style="flex:1;">${opt}</span>
           ${isSubmitted && optIndex === qObj.answer
    ? '<i class="fa-solid fa-circle-check" style="color:#16a34a; font-size:18px;"></i>'
    : ''
}

        ${isSubmitted && selectedAns !== qObj.answer && optIndex === selectedAns
    ? '<i class="fa-solid fa-circle-xmark" style="color:#dc2626; font-size:18px;"></i>'
    : ''
        }
            </button>
        `;
    });

    quizHTML += `
                    </div>

                    ${isSubmitted ? `
                        <div class="quiz-explain" style="margin-top: 15px; padding: 12px; background: #fffbe3; border-left: 4px solid #eab308; border-radius: 4px;">
                            <strong><i class="fa-solid fa-lightbulb" style="color:#d97706;"></i> Giải thích:</strong> ${qObj.explain}
                        </div>
                    ` : ''}
                </div>

                <!-- ĐIỀU HƯỚNG TRANG -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 25px;">
                    <button class="learn-button" onclick="prevQuestion()" ${currentQuestionIndex === 0 ? "disabled style='opacity:0.5; cursor:not-allowed;'" : ""}>
                        <i class="fa-solid fa-arrow-left"></i> Câu trước
                    </button>

                    ${!isSubmitted ? `
                        <button class="learn-button" onclick="submitQuiz()" style="background:#16a34a;">
                            <i class="fa-solid fa-paper-plane"></i> Nộp bài
                        </button>
                    ` : `
                        <button class="learn-button" onclick="startQuiz('${currentQuizTopicKey}')" style="background:#0284c7;">
                            <i class="fa-solid fa-rotate-right"></i> Làm lại
                        </button>
                    `}

                    <button class="learn-button" onclick="nextQuestion()" ${currentQuestionIndex === total - 1 ? "disabled style='opacity:0.5; cursor:not-allowed;'" : ""}>
                        Câu tiếp <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <!-- CỘT BÊN PHẢI: BẢNG SỐ CÂU HỎI -->
            <div class="quiz-nav-panel" style="width: 260px; padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h4 style="margin-bottom: 12px; font-size: 15px; color: #475569;">
                    <i class="fa-solid fa-grip"></i> Danh sách câu hỏi
                </h4>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px;">
    `;

    for (let i = 0; i < total; i++) {
        const isCurrent = i === currentQuestionIndex;
        const isAns = userQuizAnswers[i] !== undefined;
        let btnBg = "#ffffff";
        let btnColor = "#334155";
        let btnBorder = "#cbd5e1";

        if (isSubmitted) {
            if (userQuizAnswers[i] === topic.questions[i].answer) {
                btnBg = "#22c55e";
                btnColor = "#ffffff";
                btnBorder = "#16a34a";
            } else {
                btnBg = "#ef4444";
                btnColor = "#ffffff";
                btnBorder = "#dc2626";
            }
        } else if (isAns) {
            btnBg = "#3b82f6";
            btnColor = "#ffffff";
            btnBorder = "#2563eb";
        }

        if (isCurrent) {
            btnBorder = "#000000";
        }

        quizHTML += `
            <button onclick="goToQuestion(${i})" style="
                height: 36px;
                border: 2px solid ${btnBorder};
                border-radius: 6px;
                background: ${btnBg};
                color: ${btnColor};
                font-weight: ${isCurrent ? "bold" : "normal"};
                cursor: pointer;
                transition: all 0.15s;
            ">${i + 1}</button>
        `;
    }

    quizHTML += `
                </div>
            </div>
        </div>
    `;

    const otherPage = document.getElementById("otherPage");
    otherPage.innerHTML = quizHTML;
}

function selectAnswerOption(optIndex) {
    if (isSubmitted) return;

    // Lưu đáp án
    userQuizAnswers[currentQuestionIndex] = optIndex;

    // KHÔNG render lại toàn bộ trang
    // => tránh hiện tượng màn hình chớp/nháy

    const optionButtons = document.querySelectorAll(
        ".quiz-options-buttons .btn-option"
    );

    optionButtons.forEach((button, index) => {
        const badge = button.querySelector(".opt-badge");

        // Xóa trạng thái cũ
        button.classList.remove("active-selected");

        button.style.borderColor = "#cbd5e1";
        button.style.background = "#ffffff";
        button.style.color = "#334155";

        if (badge) {
            badge.style.background = "#f1f5f9";
            badge.style.color = "#475569";
        }

        // Đáp án vừa chọn
        if (index === optIndex) {
            button.classList.add("active-selected");

            button.style.borderColor = "#2563eb";
            button.style.background = "#eff6ff";
            button.style.color = "#1e40af";

            if (badge) {
                badge.style.background = "#2563eb";
                badge.style.color = "#ffffff";
            }
        }
    });

    // Cập nhật ô số câu bên phải
    const questionButtons = document.querySelectorAll(
        ".quiz-nav-panel button"
    );

    if (questionButtons[currentQuestionIndex]) {
        const btn = questionButtons[currentQuestionIndex];

        btn.style.background = "#3b82f6";
        btn.style.color = "#ffffff";
        btn.style.borderColor = "#2563eb";
    }
}
function goToQuestion(index) {
    currentQuestionIndex = index;
    renderQuizBookView();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuizBookView();
    }
}

function nextQuestion() {
    const topic = quizBank[currentQuizTopicKey];
    if (topic && currentQuestionIndex < topic.questions.length - 1) {
        currentQuestionIndex++;
        renderQuizBookView();
    }
}

function submitQuiz() {
    if (isSubmitted) return;
    const topic = quizBank[currentQuizTopicKey];
    if (!topic) return;

    const answeredCount = Object.keys(userQuizAnswers).length;
    const total = topic.questions.length;

    if (answeredCount < total) {
        if (!confirm(`Bạn mới trả lời ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài ngay không?`)) {
            return;
        }
    }

    isSubmitted = true;
    renderQuizBookView();
    showToast("Đã nộp bài thi thành công!");
}

/* =========================================================
   🎆 PHÁO HOA KHI HOÀN THÀNH BÀI TRẮC NGHIỆM
   KHÔNG ZOOM - KHÔNG RUNG - KHÔNG NHÁY ĐÁP ÁN
   ========================================================= */

(function () {

    /* =====================================================
       TẠO CANVAS
       ===================================================== */

    function createFireworksCanvas() {

        let canvas =
            document.getElementById(
                "quizFireworksCanvas"
            );

        if (canvas) {
            return canvas;
        }

        canvas =
            document.createElement("canvas");

        canvas.id =
            "quizFireworksCanvas";

        document.body.appendChild(
            canvas
        );

        return canvas;
    }


    /* =====================================================
       PHÁO HOA
       ===================================================== */

    function launchQuizFireworks() {

        const canvas =
            createFireworksCanvas();

        const ctx =
            canvas.getContext("2d");

        let width =
            window.innerWidth;

        let height =
            window.innerHeight;

        canvas.width =
            width;

        canvas.height =
            height;


        let fireworks = [];

        let particles = [];

        let running = true;

        const startTime =
            performance.now();

        const duration =
            5200;


        /* =================================================
           RESIZE
           ================================================= */

        function resizeCanvas() {

            width =
                window.innerWidth;

            height =
                window.innerHeight;

            canvas.width =
                width;

            canvas.height =
                height;
        }


        window.addEventListener(
            "resize",
            resizeCanvas
        );


        /* =================================================
           TẠO PHÁO HOA BAY
           ================================================= */

        function createFirework() {

            const x =
                width * 0.1 +
                Math.random() *
                width * 0.8;

            const targetY =
                height * 0.12 +
                Math.random() *
                height * 0.42;


            fireworks.push({

                x: x,

                y: height + 10,

                targetY: targetY,

                speed:
                    7 +
                    Math.random() * 3,

                hue:
                    Math.random() * 360,

                trail: []
            });
        }


        /* =================================================
           NỔ PHÁO HOA
           ================================================= */

        function explode(firework) {

            const particleCount =
                70 +
                Math.floor(
                    Math.random() * 40
                );


            for (
                let i = 0;
                i < particleCount;
                i++
            ) {

                const angle =
                    Math.random() *
                    Math.PI * 2;

                const speed =
                    2 +
                    Math.random() * 6;


                particles.push({

                    x:
                        firework.x,

                    y:
                        firework.y,

                    vx:
                        Math.cos(angle) *
                        speed,

                    vy:
                        Math.sin(angle) *
                        speed,

                    gravity:
                        0.045 +
                        Math.random() *
                        0.03,

                    friction:
                        0.985,

                    life: 1,

                    decay:
                        0.012 +
                        Math.random() *
                        0.012,

                    size:
                        1.5 +
                        Math.random() *
                        2.2,

                    hue:
                        firework.hue +
                        Math.random() *
                        50 -
                        25
                });
            }
        }


        /* =================================================
           ANIMATION
           ================================================= */

        function animate(now) {

            if (!running) {
                return;
            }


            const elapsed =
                now - startTime;


            ctx.clearRect(
                0,
                0,
                width,
                height
            );


            /* ---------------------------------------------
               TẠO PHÁO MỚI
               --------------------------------------------- */

            if (
                elapsed <
                duration - 1000
                &&
                Math.random() <
                0.075
            ) {

                createFirework();
            }


            /* ---------------------------------------------
               PHÁO BAY LÊN
               --------------------------------------------- */

            for (
                let i =
                    fireworks.length - 1;
                i >= 0;
                i--
            ) {

                const firework =
                    fireworks[i];


                firework.trail.push({

                    x:
                        firework.x,

                    y:
                        firework.y
                });


                if (
                    firework.trail.length >
                    8
                ) {

                    firework.trail.shift();
                }


                firework.y -=
                    firework.speed;


                /* Trail */

                for (
                    let j = 0;
                    j <
                    firework.trail.length;
                    j++
                ) {

                    const point =
                        firework.trail[j];


                    ctx.beginPath();


                    ctx.arc(

                        point.x,

                        point.y,

                        Math.max(
                            1,
                            j / 2
                        ),

                        0,

                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        `hsla(
                            ${firework.hue},
                            100%,
                            65%,
                            ${j /
                            firework.trail.length}
                        )`;


                    ctx.fill();
                }


                /* Nổ */

                if (
                    firework.y <=
                    firework.targetY
                ) {

                    explode(
                        firework
                    );


                    fireworks.splice(
                        i,
                        1
                    );
                }
            }


            /* ---------------------------------------------
               HẠT PHÁO HOA
               --------------------------------------------- */

            for (
                let i =
                    particles.length - 1;
                i >= 0;
                i--
            ) {

                const particle =
                    particles[i];


                particle.vx *=
                    particle.friction;

                particle.vy *=
                    particle.friction;


                particle.vy +=
                    particle.gravity;


                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;


                particle.life -=
                    particle.decay;


                if (
                    particle.life <= 0
                ) {

                    particles.splice(
                        i,
                        1
                    );

                    continue;
                }


                ctx.beginPath();


                ctx.arc(

                    particle.x,

                    particle.y,

                    particle.size,

                    0,

                    Math.PI * 2
                );


                ctx.fillStyle =
                    `hsla(
                        ${particle.hue},
                        100%,
                        65%,
                        ${particle.life}
                    )`;


                ctx.shadowBlur =
                    10;

                ctx.shadowColor =
                    `hsla(
                        ${particle.hue},
                        100%,
                        65%,
                        ${particle.life}
                    )`;


                ctx.fill();


                ctx.shadowBlur =
                    0;
            }


            /* ---------------------------------------------
               TIẾP TỤC
               --------------------------------------------- */

            if (
                elapsed <
                duration
                ||
                particles.length > 0
            ) {

                requestAnimationFrame(
                    animate
                );

            } else {

                running = false;


                window.removeEventListener(
                    "resize",
                    resizeCanvas
                );


                if (
                    canvas.parentNode
                ) {

                    canvas.parentNode.removeChild(
                        canvas
                    );
                }
            }
        }


        /* =================================================
           BẮN 4 QUẢ ĐẦU TIÊN
           ================================================= */

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            setTimeout(

                createFirework,

                i * 280
            );
        }


        requestAnimationFrame(
            animate
        );
    }


    /* =====================================================
       🎉 THÔNG BÁO HOÀN THÀNH
       ===================================================== */

    function showQuizCompleteEffect() {

        const old =
            document.querySelector(
                ".quiz-complete-overlay"
            );


        if (old) {

            old.remove();
        }


        const overlay =
            document.createElement(
                "div"
            );


        overlay.className =
            "quiz-complete-overlay";


        overlay.innerHTML = `

            <div class="quiz-complete-message">

                <span class="complete-icon">
                    🏆
                </span>

                <h2>
                    HOÀN THÀNH BÀI THI!
                </h2>

                <p>
                    Chúc mừng bạn đã hoàn thành bài trắc nghiệm 🎉
                </p>

            </div>

        `;


        document.body.appendChild(
            overlay
        );


        /* Bắn pháo hoa */

        launchQuizFireworks();


        /* Xóa thông báo */

        setTimeout(

            function () {

                if (
                    overlay.parentNode
                ) {

                    overlay.remove();
                }

            },

            3800
        );
    }


    /* =====================================================
       🎯 BẮT SỰ KIỆN NỘP BÀI
       ===================================================== */

    const originalSubmitQuiz =
        window.submitQuiz;


    if (
        typeof originalSubmitQuiz ===
        "function"
    ) {

        window.submitQuiz =
            function () {

                /* Chạy nguyên hàm submit cũ */

                originalSubmitQuiz.apply(
                    this,
                    arguments
                );


                /* Chờ hệ thống chấm điểm */

                setTimeout(

                    function () {

                        if (
                            typeof isSubmitted !==
                            "undefined"
                            &&
                            isSubmitted ===
                            true
                        ) {

                            showQuizCompleteEffect();
                        }

                    },

                    350
                );
            };
    }

})();








/* =========================================================
   📊 HỆ THỐNG THỐNG KÊ KẾT QUẢ THI
   ========================================================= */

(function () {

    /* =====================================================
       1. KEY LƯU DỮ LIỆU
       ===================================================== */

    const QUIZ_HISTORY_KEY =
        "tinHocQuizHistory";


    /* =====================================================
       2. LẤY LỊCH SỬ THI
       ===================================================== */

    function getQuizHistory() {

        try {

            const data =
                JSON.parse(
                    localStorage.getItem(
                        QUIZ_HISTORY_KEY
                    )
                );

            return Array.isArray(data)
                ? data
                : [];

        } catch (error) {

            console.error(
                "Không thể đọc lịch sử thi:",
                error
            );

            return [];
        }
    }


    /* =====================================================
       3. LƯU LỊCH SỬ
       ===================================================== */

    function saveQuizHistory(history) {

        localStorage.setItem(
            QUIZ_HISTORY_KEY,
            JSON.stringify(history)
        );
    }


    /* =====================================================
       4. LƯU KẾT QUẢ BÀI THI
       ===================================================== */

    function saveQuizResult() {

        const topic =
            quizBank[currentQuizTopicKey];

        if (!topic) {
            return;
        }


        let score = 0;


        topic.questions.forEach(
            function (question, index) {

                if (
                    userQuizAnswers[index] ===
                    question.answer
                ) {

                    score++;
                }
            }
        );


        const total =
            topic.questions.length;


        const percent =
            total > 0
                ? Math.round(
                    (score / total) * 100
                )
                : 0;


        const history =
            getQuizHistory();


        /* ---------------------------------------------
           Tài khoản hiện tại
           --------------------------------------------- */

        const username =
            currentUser &&
            currentUser.username
                ? currentUser.username
                : "guest";


        /* ---------------------------------------------
           Tạo bản ghi
           --------------------------------------------- */

        history.push({

            id:
                Date.now() +
                "_" +
                Math.random()
                    .toString(36)
                    .substring(2, 8),

            username:
                username,

            topicKey:
                currentQuizTopicKey,

            title:
                topic.title,

            score:
                score,

            total:
                total,

            percent:
                percent,

            time:
                new Date().toLocaleString(
                    "vi-VN"
                )
        });


        saveQuizHistory(history);
    }


    /* =====================================================
       5. LỌC LỊCH SỬ THEO TÀI KHOẢN
       ===================================================== */

    function getMyQuizHistory() {

        const history =
            getQuizHistory();


        const username =
            currentUser &&
            currentUser.username
                ? currentUser.username
                : "guest";


        return history.filter(
            function (item) {

                return item.username ===
                    username;
            }
        );
    }


    /* =====================================================
       6. HIỂN THỊ THỐNG KÊ TRANG CHỦ
       ===================================================== */

    function renderQuizStatistics() {

        const totalElement =
            document.getElementById(
                "quizTotalAttempts"
            );


        const listElement =
            document.getElementById(
                "quizStatisticsList"
            );


        if (
            !totalElement ||
            !listElement
        ) {

            return;
        }


        const history =
            getMyQuizHistory();


        /* Tổng lượt thi */

        totalElement.textContent =
            history.length;


        /* Chưa thi */

        if (history.length === 0) {

            listElement.innerHTML = `

                <div class="quiz-stat-empty">

                    <i class="fa-solid fa-clipboard-check"></i>

                    <span>
                        Bạn chưa làm bài trắc nghiệm nào.
                    </span>

                    <small>
                        Hãy bắt đầu một bài thi để hệ thống
                        ghi lại kết quả.
                    </small>

                </div>

            `;

            return;
        }


        /* ---------------------------------------------
           Hiển thị từ mới nhất → cũ nhất
           --------------------------------------------- */

        const reversedHistory =
            [...history].reverse();


        listElement.innerHTML =
            reversedHistory
                .map(
                    function (item) {

                        const lowScore =
                            item.percent < 50
                                ? "low-score"
                                : "";


                        return `

                            <div
                                class="quiz-stat-item ${lowScore}"
                            >

                                <div
                                    class="quiz-stat-header"
                                >

                                    <i
                                        class="fa-solid fa-circle-check"
                                    ></i>

                                    <span
                                        class="quiz-stat-title"
                                        title="${escapeQuizStatText(item.title)}"
                                    >
                                        ${escapeQuizStatText(item.title)}
                                    </span>

                                </div>


                                <div
                                    class="quiz-stat-score"
                                >

                                    <span
                                        class="quiz-stat-correct"
                                    >
                                        ${item.score}
                                        /${item.total}
                                        câu đúng
                                    </span>

                                    <span
                                        class="quiz-stat-percent"
                                    >
                                        ${item.percent}%
                                    </span>

                                </div>


                                <div
                                    class="quiz-stat-progress"
                                >

                                    <div
                                        class="quiz-stat-progress-bar"
                                        style="width:${item.percent}%"
                                    ></div>

                                </div>


                                <div
                                    class="quiz-stat-footer"
                                >

                                    <span
                                        class="quiz-stat-date"
                                    >
                                        <i
                                            class="fa-regular fa-clock"
                                        ></i>
                                        ${item.time}
                                    </span>


                                    <button
                                        type="button"
                                        class="quiz-stat-retry"
                                        onclick="retryQuizFromStatistics('${item.topicKey}')"
                                    >
                                        <i
                                            class="fa-solid fa-rotate-right"
                                        ></i>
                                        Làm lại
                                    </button>

                                </div>

                            </div>

                        `;
                    }
                )
                .join("");
    }


    /* =====================================================
       7. BẢO VỆ TEXT
       ===================================================== */

    function escapeQuizStatText(text) {

        if (!text) {
            return "";
        }


        return String(text)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );
    }


    /* =====================================================
       8. NÚT LÀM LẠI TỪ THỐNG KÊ
       ===================================================== */

    window.retryQuizFromStatistics =
        function (topicKey) {

            if (
                !quizBank[topicKey]
            ) {

                showToast(
                    "Không tìm thấy phần thi này."
                );

                return;
            }


            startQuiz(topicKey);
        };


    /* =====================================================
       9. GẮN VÀO submitQuiz HIỆN TẠI
       ===================================================== */

    const originalSubmitQuiz =
        window.submitQuiz;


    if (
        typeof originalSubmitQuiz ===
        "function"
    ) {

        window.submitQuiz =
            function () {

                /*
                 * Kiểm tra trạng thái trước khi nộp.
                 * Nếu đã nộp rồi thì không ghi thêm.
                 */

                const wasSubmitted =
                    typeof isSubmitted !==
                    "undefined"
                    ? isSubmitted
                    : false;


                /*
                 * Chạy nguyên hàm submitQuiz
                 * cũ của website.
                 */

                originalSubmitQuiz.apply(
                    this,
                    arguments
                );


                /*
                 * Chỉ lưu khi bài vừa được
                 * nộp thành công.
                 */

                if (
                    !wasSubmitted
                    &&
                    typeof isSubmitted !==
                    "undefined"
                    &&
                    isSubmitted === true
                ) {

                    saveQuizResult();

                    renderQuizStatistics();
                }
            };
    }


    /* =====================================================
       10. CẬP NHẬT THỐNG KÊ MỖI KHI VỀ TRANG CHỦ
       ===================================================== */

    const originalShowHome =
        window.showHome;


    if (
        typeof originalShowHome ===
        "function"
    ) {

        window.showHome =
            function () {

                originalShowHome.apply(
                    this,
                    arguments
                );


                setTimeout(
                    function () {

                        renderQuizStatistics();

                    },
                    50
                );
            };
    }


    /* =====================================================
       11. HIỂN THỊ NGAY KHI WEBSITE LOAD
       ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            renderQuizStatistics();

        }
    );


    /* =====================================================
       12. CHO CÁC HÀM KHÁC CÓ THỂ GỌI
       ===================================================== */

    window.renderQuizStatistics =
        renderQuizStatistics;


    window.saveQuizResult =
        saveQuizResult;


})();



/* =========================================================
   📊 HỆ THỐNG THỐNG KÊ KẾT QUẢ THI
   ========================================================= */

(function () {

    /* =====================================================
       1. KEY LƯU DỮ LIỆU
       ===================================================== */

    const QUIZ_HISTORY_KEY =
        "tinHocQuizHistory";


    /* =====================================================
       2. LẤY LỊCH SỬ THI
       ===================================================== */

    function getQuizHistory() {

        try {

            const data =
                JSON.parse(
                    localStorage.getItem(
                        QUIZ_HISTORY_KEY
                    )
                );

            return Array.isArray(data)
                ? data
                : [];

        } catch (error) {

            console.error(
                "Không thể đọc lịch sử thi:",
                error
            );

            return [];
        }
    }


    /* =====================================================
       3. LƯU LỊCH SỬ
       ===================================================== */

    function saveQuizHistory(history) {

        localStorage.setItem(
            QUIZ_HISTORY_KEY,
            JSON.stringify(history)
        );
    }


    /* =====================================================
       4. LƯU KẾT QUẢ BÀI THI
       ===================================================== */

    function saveQuizResult() {

        const topic =
            quizBank[currentQuizTopicKey];

        if (!topic) {
            return;
        }


        let score = 0;


        topic.questions.forEach(
            function (question, index) {

                if (
                    userQuizAnswers[index] ===
                    question.answer
                ) {

                    score++;
                }
            }
        );


        const total =
            topic.questions.length;


        const percent =
            total > 0
                ? Math.round(
                    (score / total) * 100
                )
                : 0;


        const history =
            getQuizHistory();


        /* ---------------------------------------------
           Tài khoản hiện tại
           --------------------------------------------- */

        const username =
            currentUser &&
            currentUser.username
                ? currentUser.username
                : "guest";


        /* ---------------------------------------------
           Tạo bản ghi
           --------------------------------------------- */

        history.push({

            id:
                Date.now() +
                "_" +
                Math.random()
                    .toString(36)
                    .substring(2, 8),

            username:
                username,

            topicKey:
                currentQuizTopicKey,

            title:
                topic.title,

            score:
                score,

            total:
                total,

            percent:
                percent,

            time:
                new Date().toLocaleString(
                    "vi-VN"
                )
        });


        saveQuizHistory(history);
    }


    /* =====================================================
       5. LỌC LỊCH SỬ THEO TÀI KHOẢN
       ===================================================== */

    function getMyQuizHistory() {

        const history =
            getQuizHistory();


        const username =
            currentUser &&
            currentUser.username
                ? currentUser.username
                : "guest";


        return history.filter(
            function (item) {

                return item.username ===
                    username;
            }
        );
    }


    /* =====================================================
       6. HIỂN THỊ THỐNG KÊ TRANG CHỦ
       ===================================================== */

    function renderQuizStatistics() {

        const totalElement =
            document.getElementById(
                "quizTotalAttempts"
            );


        const listElement =
            document.getElementById(
                "quizStatisticsList"
            );


        if (
            !totalElement ||
            !listElement
        ) {

            return;
        }


        const history =
            getMyQuizHistory();


        /* Tổng lượt thi */

        totalElement.textContent =
            history.length;


        /* Chưa thi */

        if (history.length === 0) {

            listElement.innerHTML = `

                <div class="quiz-stat-empty">

                    <i class="fa-solid fa-clipboard-check"></i>

                    <span>
                        Bạn chưa làm bài trắc nghiệm nào.
                    </span>

                    <small>
                        Hãy bắt đầu một bài thi để hệ thống
                        ghi lại kết quả.
                    </small>

                </div>

            `;

            return;
        }


        /* ---------------------------------------------
           Hiển thị từ mới nhất → cũ nhất
           --------------------------------------------- */

        const reversedHistory =
            [...history].reverse();


        listElement.innerHTML =
            reversedHistory
                .map(
                    function (item) {

                        const lowScore =
                            item.percent < 50
                                ? "low-score"
                                : "";


                        return `

                            <div
                                class="quiz-stat-item ${lowScore}"
                            >

                                <div
                                    class="quiz-stat-header"
                                >

                                    <i
                                        class="fa-solid fa-circle-check"
                                    ></i>

                                    <span
                                        class="quiz-stat-title"
                                        title="${escapeQuizStatText(item.title)}"
                                    >
                                        ${escapeQuizStatText(item.title)}
                                    </span>

                                </div>


                                <div
                                    class="quiz-stat-score"
                                >

                                    <span
                                        class="quiz-stat-correct"
                                    >
                                        ${item.score}
                                        /${item.total}
                                        câu đúng
                                    </span>

                                    <span
                                        class="quiz-stat-percent"
                                    >
                                        ${item.percent}%
                                    </span>

                                </div>


                                <div
                                    class="quiz-stat-progress"
                                >

                                    <div
                                        class="quiz-stat-progress-bar"
                                        style="width:${item.percent}%"
                                    ></div>

                                </div>


                                <div
                                    class="quiz-stat-footer"
                                >

                                    <span
                                        class="quiz-stat-date"
                                    >
                                        <i
                                            class="fa-regular fa-clock"
                                        ></i>
                                        ${item.time}
                                    </span>


                                    <button
                                        type="button"
                                        class="quiz-stat-retry"
                                        onclick="retryQuizFromStatistics('${item.topicKey}')"
                                    >
                                        <i
                                            class="fa-solid fa-rotate-right"
                                        ></i>
                                        Làm lại
                                    </button>

                                </div>

                            </div>

                        `;
                    }
                )
                .join("");
    }


    /* =====================================================
       7. BẢO VỆ TEXT
       ===================================================== */

    function escapeQuizStatText(text) {

        if (!text) {
            return "";
        }


        return String(text)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );
    }


    /* =====================================================
       8. NÚT LÀM LẠI TỪ THỐNG KÊ
       ===================================================== */

    window.retryQuizFromStatistics =
        function (topicKey) {

            if (
                !quizBank[topicKey]
            ) {

                showToast(
                    "Không tìm thấy phần thi này."
                );

                return;
            }


            startQuiz(topicKey);
        };


    /* =====================================================
       9. GẮN VÀO submitQuiz HIỆN TẠI
       ===================================================== */

    const originalSubmitQuiz =
        window.submitQuiz;


    if (
        typeof originalSubmitQuiz ===
        "function"
    ) {

        window.submitQuiz =
            function () {

                /*
                 * Kiểm tra trạng thái trước khi nộp.
                 * Nếu đã nộp rồi thì không ghi thêm.
                 */

                const wasSubmitted =
                    typeof isSubmitted !==
                    "undefined"
                    ? isSubmitted
                    : false;


                /*
                 * Chạy nguyên hàm submitQuiz
                 * cũ của website.
                 */

                originalSubmitQuiz.apply(
                    this,
                    arguments
                );


                /*
                 * Chỉ lưu khi bài vừa được
                 * nộp thành công.
                 */

                if (
                    !wasSubmitted
                    &&
                    typeof isSubmitted !==
                    "undefined"
                    &&
                    isSubmitted === true
                ) {

                    saveQuizResult();

                    renderQuizStatistics();
                }
            };
    }


    /* =====================================================
       10. CẬP NHẬT THỐNG KÊ MỖI KHI VỀ TRANG CHỦ
       ===================================================== */

    const originalShowHome =
        window.showHome;


    if (
        typeof originalShowHome ===
        "function"
    ) {

        window.showHome =
            function () {

                originalShowHome.apply(
                    this,
                    arguments
                );


                setTimeout(
                    function () {

                        renderQuizStatistics();

                    },
                    50
                );
            };
    }


    /* =====================================================
       11. HIỂN THỊ NGAY KHI WEBSITE LOAD
       ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            renderQuizStatistics();

        }
    );


    /* =====================================================
       12. CHO CÁC HÀM KHÁC CÓ THỂ GỌI
       ===================================================== */

    window.renderQuizStatistics =
        renderQuizStatistics;


    window.saveQuizResult =
        saveQuizResult;


})();


















/* =========================================================
   🏠 TRANG CHỦ - DỌN BỐ CỤC DASHBOARD
   Không xóa code cũ.
   Chỉ ẩn 2 panel không còn dùng.
   ========================================================= */

(function () {

    function cleanHomeDashboard() {

        const dashboard =
            document.querySelector(
                ".dashboard-grid"
            );

        if (!dashboard) {
            return;
        }


        /* ---------------------------------------------
           Ẩn BÀI GIẢNG MỚI
           --------------------------------------------- */

        dashboard
            .querySelectorAll(".panel")
            .forEach(function (panel) {

                const text =
                    panel.textContent
                        .replace(/\s+/g, " ")
                        .trim()
                        .toLowerCase();


                if (
                    text.includes(
                        "bài giảng mới"
                    )
                ) {

                    panel.style.display =
                        "none";
                }


                /* -----------------------------------------
                   Ẩn ĐỀ THI NỔI BẬT
                   ----------------------------------------- */

                if (
                    text.includes(
                        "đề thi nổi bật"
                    )
                ) {

                    panel.style.display =
                        "none";
                }

            });


        /* ---------------------------------------------
           Đảm bảo thống kê được hiển thị
           --------------------------------------------- */

        const stats =
            dashboard.querySelector(
                ".stats-panel"
            );


        if (stats) {

            stats.style.display =
                "block";
        }


        /* ---------------------------------------------
           Chỉ còn 1 panel → full width
           --------------------------------------------- */

        dashboard.style.gridTemplateColumns =
            "minmax(0, 1fr)";
    }


    /* Chạy khi website mở */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            cleanHomeDashboard();

            setTimeout(
                cleanHomeDashboard,
                300
            );

            setTimeout(
                cleanHomeDashboard,
                800
            );

        }
    );


    /*
     * Nếu showHome() render lại trang chủ,
     * hệ thống sẽ tự dọn lại bố cục.
     */

    const oldShowHome =
        window.showHome;


    if (
        typeof oldShowHome ===
        "function"
    ) {

        window.showHome =
            function () {

                oldShowHome.apply(
                    this,
                    arguments
                );


                setTimeout(
                    cleanHomeDashboard,
                    50
                );

            };
    }


})();

/* =========================================================
   🏠 HOME STUDY DASHBOARD
   LỊCH SỬ THI + TIẾN ĐỘ VIDEO
   ========================================================= */

(function () {

    /* =====================================================
       1. KEY LƯU LỊCH SỬ
       ===================================================== */

    const QUIZ_HISTORY_KEY =
        "tinHoc_quiz_attempt_history_v2";

    const VIDEO_HISTORY_KEY =
        "tinHoc_video_learning_history_v2";


    /* =====================================================
       2. NGƯỜI DÙNG HIỆN TẠI
       ===================================================== */

    function getHomeUserKey() {

        if (
            typeof currentUser !== "undefined" &&
            currentUser &&
            currentUser.username
        ) {

            return currentUser.username;
        }

        return "guest";
    }


    /* =====================================================
       3. ĐỌC LỊCH SỬ THI
       ===================================================== */

    function getQuizHistory() {

        try {

            const all =
                JSON.parse(
                    localStorage.getItem(
                        QUIZ_HISTORY_KEY
                    ) || "{}"
                );

            return Array.isArray(
                all[getHomeUserKey()]
            )
                ? all[getHomeUserKey()]
                : [];

        } catch (error) {

            return [];
        }
    }


    /* =====================================================
       4. LƯU LỊCH SỬ THI
       ===================================================== */

    function saveQuizHistory(history) {

        let all = {};

        try {

            all =
                JSON.parse(
                    localStorage.getItem(
                        QUIZ_HISTORY_KEY
                    ) || "{}"
                );

        } catch (error) {

            all = {};
        }


        all[getHomeUserKey()] =
            history;


        localStorage.setItem(
            QUIZ_HISTORY_KEY,
            JSON.stringify(all)
        );
    }


    /* =====================================================
       5. LƯU 1 LẦN THI
       ===================================================== */

    function saveOneQuizAttempt() {

        const topic =
            quizBank[currentQuizTopicKey];


        if (!topic) {

            return;
        }


        let score = 0;


        topic.questions.forEach(
            function (q, index) {

                if (
                    userQuizAnswers[index] ===
                    q.answer
                ) {

                    score++;
                }

            }
        );


        const total =
            topic.questions.length;


        const percent =
            total > 0
                ? Math.round(
                    score /
                    total *
                    100
                )
                : 0;


        const history =
            getQuizHistory();


        /*
         * MỖI LẦN NHẤN NỘP BÀI
         * = 1 LẦN THI.
         *
         * Không cộng lại khi render.
         */

        history.push({

            id:
                Date.now() +
                "_" +
                Math.random()
                    .toString(36)
                    .slice(2),

            topicKey:
                currentQuizTopicKey,

            title:
                topic.title,

            correct:
                score,

            total:
                total,

            percent:
                percent,

            time:
                new Date()
                    .toLocaleString(
                        "vi-VN"
                    ),

            timestamp:
                Date.now()
        });


        saveQuizHistory(
            history
        );


        renderHomeStudyDashboard();
    }


    /* =====================================================
       6. GHI ĐÈ SUBMIT QUIZ
       KHÔNG XÓA HÀM CŨ
       ===================================================== */

    const oldSubmitQuiz =
        window.submitQuiz;


    if (
        typeof oldSubmitQuiz ===
        "function"
    ) {

        window.submitQuiz =
            function () {

                /*
                 * Nếu đã nộp thì không tạo thêm lần.
                 */

                if (
                    typeof isSubmitted !==
                    "undefined" &&
                    isSubmitted
                ) {

                    return;
                }


                /*
                 * Chạy chức năng nộp bài cũ.
                 */

                oldSubmitQuiz.apply(
                    this,
                    arguments
                );


                /*
                 * Hàm cũ đổi isSubmitted
                 * sang true.
                 */

                setTimeout(
                    function () {

                        saveOneQuizAttempt();

                    },
                    20
                );
            };
    }


    /* =====================================================
       7. XÓA LỊCH SỬ THI
       ===================================================== */

    window.clearHomeQuizHistory =
        function () {

            const history =
                getQuizHistory();


            if (
                history.length === 0
            ) {

                showToast(
                    "Lịch sử làm bài đang trống."
                );

                return;
            }


            const ok =
                confirm(
                    "Bạn có chắc muốn xóa toàn bộ lịch sử làm bài không?"
                );


            if (!ok) {

                return;
            }


            saveQuizHistory([]);


            renderHomeStudyDashboard();


            showToast(
                "Đã xóa lịch sử làm bài."
            );
        };


    /* =====================================================
       8. LÀM LẠI BÀI
       ===================================================== */

    window.retryHomeQuiz =
        function (topicKey) {

            if (
                !topicKey ||
                !quizBank[topicKey]
            ) {

                showToast(
                    "Không tìm thấy phần trắc nghiệm này."
                );

                return;
            }


            /*
             * Chuyển thẳng vào phần trắc nghiệm.
             */

            startQuiz(
                topicKey
            );
        };


    /* =====================================================
       9. VIDEO HISTORY
       ===================================================== */

    function getVideoHistoryAll() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    VIDEO_HISTORY_KEY
                ) || "{}"
            );

        } catch (error) {

            return {};
        }
    }


    function getVideoHistory() {

        const all =
            getVideoHistoryAll();


        return all[
            getHomeUserKey()
        ] || {};
    }


    function saveVideoHistory(history) {

        const all =
            getVideoHistoryAll();


        all[
            getHomeUserKey()
        ] =
            history;


        localStorage.setItem(
            VIDEO_HISTORY_KEY,
            JSON.stringify(all)
        );
    }


    /* =====================================================
       10. LƯU VIDEO
       ===================================================== */

    function saveCurrentVideo() {

        const video =
            document.querySelector(
                "#videoContainer video"
            );


        if (
            !video ||
            !currentLesson ||
            !currentLesson.video
        ) {

            return;
        }


        const name =
            currentLesson.video;


        const duration =
            Number(
                video.duration
            ) || 0;


        const currentTime =
            Number(
                video.currentTime
            ) || 0;


        let percent = 0;


        if (
            duration > 0
        ) {

            percent =
                Math.round(
                    currentTime /
                    duration *
                    100
                );
        }


        /*
         * Từ 98% trở lên xem là hoàn thành.
         */

        const completed =
            duration > 0 &&
            (
                video.ended ||
                percent >= 98
            );


        const history =
            getVideoHistory();


        history[name] = {

            name:
                name,

            title:
                currentLesson.title,

            category:
                currentCategory,

            lessonId:
                currentLesson.id,

            currentTime:
                completed
                    ? duration
                    : currentTime,

            duration:
                duration,

            percent:
                completed
                    ? 100
                    : percent,

            completed:
                completed,

            updatedAt:
                Date.now()
        };


        saveVideoHistory(
            history
        );


        renderHomeStudyDashboard();
    }


    /* =====================================================
       11. THEO DÕI VIDEO
       ===================================================== */

    function attachVideoTracking() {

        const video =
            document.querySelector(
                "#videoContainer video"
            );


        if (!video) {

            return;
        }


        /*
         * Không gắn listener 2 lần.
         */

        if (
            video.dataset.homeTracking ===
            "true"
        ) {

            return;
        }


        video.dataset.homeTracking =
            "true";


        /*
         * Khi người dùng bắt đầu xem
         * cũng ghi lại video.
         */

        video.addEventListener(
            "play",
            function () {

                saveCurrentVideo();

            }
        );


        /*
         * Đang xem -> lưu mỗi vài giây.
         */

        video.addEventListener(
            "timeupdate",
            function () {

                const now =
                    Date.now();


                if (
                    !window.__homeVideoLastSave ||
                    now -
                    window.__homeVideoLastSave >
                    3000
                ) {

                    window.__homeVideoLastSave =
                        now;

                    saveCurrentVideo();
                }

            }
        );


        /*
         * Tạm dừng.
         */

        video.addEventListener(
            "pause",
            function () {

                saveCurrentVideo();

            }
        );


        /*
         * Xem hết.
         */

        video.addEventListener(
            "ended",
            function () {

                saveCurrentVideo();

            }
        );


        /*
         * Khôi phục vị trí video.
         */

        const history =
            getVideoHistory();


        const old =
            history[
                currentLesson.video
            ];


        if (
            old &&
            !old.completed &&
            Number(
                old.currentTime
            ) > 2
        ) {

            video.addEventListener(
                "loadedmetadata",
                function () {

                    try {

                        if (
                            old.currentTime <
                            video.duration - 2
                        ) {

                            video.currentTime =
                                old.currentTime;
                        }

                    } catch (error) {}

                },
                {
                    once: true
                }
            );
        }
    }


    /* =====================================================
       12. GHI ĐÈ renderLesson
       ===================================================== */

    const oldRenderLesson =
        window.renderLesson;


    if (
        typeof oldRenderLesson ===
        "function"
    ) {

        window.renderLesson =
            function () {

                /*
                 * Chạy renderLesson cũ.
                 */

                oldRenderLesson.apply(
                    this,
                    arguments
                );


                /*
                 * Sau khi video được tạo
                 * mới gắn theo dõi.
                 */

                setTimeout(
                    function () {

                        attachVideoTracking();

                    },
                    50
                );

            };
    }


    /* =====================================================
       13. HỌC TIẾP
       ===================================================== */

    window.continueHomeVideo =
        function (
            category,
            lessonId
        ) {

            if (
                !lessons[category]
            ) {

                return;
            }


            const index =
                lessons[category]
                    .findIndex(
                        function (lesson) {

                            return (
                                lesson.id ===
                                lessonId
                            );

                        }
                    );


            if (
                index < 0
            ) {

                return;
            }


            openLesson(
                category,
                index
            );
        };


    /* =====================================================
       14. XÓA 1 VIDEO KHỎI LỊCH SỬ
       ===================================================== */

    window.deleteHomeVideoHistory =
        function (nameEncoded) {

            const name =
                decodeURIComponent(
                    nameEncoded
                );


            const history =
                getVideoHistory();


            delete history[
                name
            ];


            saveVideoHistory(
                history
            );


            renderHomeStudyDashboard();


            showToast(
                "Đã xóa video khỏi lịch sử học tập."
            );
        };


    /* =====================================================
       15. XÓA TOÀN BỘ LỊCH SỬ VIDEO
       ===================================================== */

    window.clearHomeVideoHistory =
        function () {

            const history =
                getVideoHistory();


            if (
                Object.keys(history)
                    .length === 0
            ) {

                showToast(
                    "Lịch sử học tập đang trống."
                );

                return;
            }


            if (
                !confirm(
                    "Bạn có chắc muốn xóa toàn bộ lịch sử học tập không?"
                )
            ) {

                return;
            }


            saveVideoHistory({});


            renderHomeStudyDashboard();


            showToast(
                "Đã xóa lịch sử học tập."
            );
        };


    /* =====================================================
       16. TÌM TOÀN BỘ VIDEO
       ===================================================== */

    function getAllVideos() {

        const result = [];


        Object.keys(lessons)
            .forEach(
                function (category) {

                    const list =
                        lessons[
                            category
                        ] || [];


                    list.forEach(
                        function (lesson) {

                            if (
                                lesson.video
                            ) {

                                result.push({

                                    category:
                                        category,

                                    lesson:
                                        lesson

                                });

                            }

                        }
                    );

                }
            );


        return result;
    }


    /* =====================================================
       17. XÁC ĐỊNH TRẠNG THÁI
       ===================================================== */

    function getVideoStatus(item) {

        /*
         * Chưa có lịch sử:
         * không đưa vào 3 nhóm đã học.
         */

        if (!item) {

            return "unstarted";
        }


        if (
            item.completed ===
            true ||
            Number(item.percent) >= 98
        ) {

            return "completed";
        }


        /*
         * 1% -> 79%
         * = học lỡ dở.
         */

        if (
            Number(item.percent) > 0 &&
            Number(item.percent) < 80
        ) {

            return "paused";
        }


        /*
         * 80% -> 97%
         * = đã học.
         */

        if (
            Number(item.percent) >= 80
        ) {

            return "studied";
        }


        return "studied";
    }


    /* =====================================================
       18. TẠO 1 VIDEO ITEM
       ===================================================== */

    function makeVideoItem(
        record,
        status
    ) {

        const lesson =
            record.lesson;


        const data =
            record.history;


        const percent =
            data
                ? Math.min(
                    100,
                    Math.max(
                        0,
                        Number(
                            data.percent ||
                            0
                        )
                    )
                )
                : 0;


        let statusText =
            "";


        if (
            status ===
            "studied"
        ) {

            statusText =
                "✓ Đã học";

        } else if (
            status ===
            "paused"
        ) {

            statusText =
                "⏸ Học lỡ dở";

        } else {

            statusText =
                "✓ Hoàn thành";
        }


        const showContinue =
            status ===
            "paused";


        return `

            <div
                class="home-video-item"
            >

                <div
                    class="home-video-icon ${status}"
                >

                    ${
                        status ===
                        "completed"
                            ? `
                                <i
                                    class="fa-solid fa-check"
                                ></i>
                            `
                            :
                        status ===
                        "paused"
                            ? `
                                <i
                                    class="fa-solid fa-pause"
                                ></i>
                            `
                            : `
                                <i
                                    class="fa-solid fa-play"
                                ></i>
                            `
                    }

                </div>


                <div
                    class="home-video-info"
                >

                    <div
                        class="home-video-title"
                        title="${escapeHTML(
                            lesson.title
                        )}"
                    >
                        ${escapeHTML(
                            lesson.title
                        )}
                    </div>


                    <div
                        class="home-video-status ${status}"
                    >
                        ${statusText}
                        ${
                            data &&
                            status !==
                            "completed"
                                ? `
                                    · ${percent}%
                                `
                                : ""
                        }
                    </div>


                    ${
                        status !==
                        "completed"
                            ? `
                                <div
                                    class="home-small-progress"
                                >
                                    <span
                                        style="width:${percent}%"
                                    ></span>
                                </div>
                            `
                            : ""
                    }

                </div>


                ${
                    showContinue
                        ? `
                            <button
                                type="button"
                                class="home-continue-video"
                                onclick="continueHomeVideo(
                                    '${escapeHTML(
                                        record.category
                                    )}',
                                    '${escapeHTML(
                                        lesson.id
                                    )}'
                                )"
                            >

                                <i
                                    class="fa-solid fa-play"
                                ></i>

                                Học tiếp

                            </button>
                        `
                        : ""
                }


                <button
                    type="button"
                    title="Xóa lịch sử video"
                    style="
                        border:none;
                        background:transparent;
                        color:#94a3b8;
                        cursor:pointer;
                        padding:4px;
                    "
                    onclick="deleteHomeVideoHistory(
                        '${encodeURIComponent(
                            lesson.video
                        )}'
                    )"
                >

                    <i
                        class="fa-solid fa-trash"
                    ></i>

                </button>

            </div>

        `;
    }


    /* =====================================================
       19. RENDER TIẾN ĐỘ VIDEO
       ===================================================== */

    function renderHomeVideoProgress() {

        const listBox =
            document.getElementById(
                "homeLearningListNew"
            );


        const countText =
            document.getElementById(
                "homeVideoCountNew"
            );


        const bar =
            document.getElementById(
                "homeOverallVideoBar"
            );


        if (
            !listBox
        ) {

            return;
        }


        const allVideos =
            getAllVideos();


        const history =
            getVideoHistory();


        let studied = [];
        let paused = [];
        let completed = [];


        allVideos.forEach(
            function (record) {

                const item =
                    history[
                        record.lesson.video
                    ];


                if (!item) {

                    return;
                }


                const status =
                    getVideoStatus(
                        item
                    );


                const obj = {

                    record:
                        record,

                    history:
                        item,

                    lesson:
                        record.lesson,

                    category:
                        record.category
                };


                if (
                    status ===
                    "completed"
                ) {

                    completed.push(
                        obj
                    );

                } else if (
                    status ===
                    "paused"
                ) {

                    paused.push(
                        obj
                    );

                } else {

                    studied.push(
                        obj
                    );
                }

            }
        );


        /*
         * Số video có lịch sử
         */

        const learnedCount =
            studied.length +
            paused.length +
            completed.length;


        if (
            countText
        ) {

            countText.textContent =
                `${learnedCount}/${allVideos.length} video`;
        }


        /*
         * Tính tiến độ tổng thể
         */

        let totalPercent = 0;


        allVideos.forEach(
            function (record) {

                const item =
                    history[
                        record.lesson.video
                    ];


                if (item) {

                    totalPercent +=
                        Number(
                            item.percent ||
                            0
                        );
                }

            }
        );


        const overall =
            allVideos.length > 0
                ? Math.round(
                    totalPercent /
                    allVideos.length
                )
                : 0;


        if (
            bar
        ) {

            bar.style.width =
                overall + "%";
        }


        function renderGroup(
            title,
            icon,
            className,
            data
        ) {

            if (
                data.length === 0
            ) {

                return "";
            }


            return `

                <div
                    class="home-learning-group"
                >

                    <div
                        class="home-learning-group-title ${className}"
                    >

                        <i
                            class="${icon}"
                        ></i>

                        ${title}

                        <span>
                            (${data.length})
                        </span>

                    </div>


                    ${data
                        .map(
                            function (item) {

                                return makeVideoItem(
                                    item.record,
                                    className
                                );

                            }
                        )
                        .join("")}

                </div>

            `;
        }


        /*
         * Nếu chưa xem video nào.
         */

        if (
            learnedCount === 0
        ) {

            listBox.innerHTML = `

                <div
                    class="home-empty-state"
                >

                    <i
                        class="fa-solid fa-video"
                    ></i>

                    <strong>
                        Chưa có tiến độ video
                    </strong>

                    <span>
                        Khi học PowerPoint, Excel hoặc Word,
                        tiến độ video sẽ tự động xuất hiện tại đây.
                    </span>

                </div>

            `;

            return;
        }


        listBox.innerHTML =

            renderGroup(
                "ĐÃ HỌC",
                "fa-solid fa-book-open",
                "studied",
                studied
            ) +

            renderGroup(
                "HỌC LỠ DỞ",
                "fa-solid fa-pause",
                "paused",
                paused
            ) +

            renderGroup(
                "HOÀN THÀNH",
                "fa-solid fa-circle-check",
                "completed",
                completed
            );
    }


    /* =====================================================
       20. RENDER LỊCH SỬ THI
       ===================================================== */

    function renderHomeQuizHistory() {

        const box =
            document.getElementById(
                "homeQuizHistoryNew"
            );


        const totalBox =
            document.getElementById(
                "homeQuizAttempts"
            );


        const bestBox =
            document.getElementById(
                "homeQuizBest"
            );


        const averageBox =
            document.getElementById(
                "homeQuizAverage"
            );


        if (
            !box
        ) {

            return;
        }


        const history =
            getQuizHistory();


        /*
         * Tổng lượt thi
         */

        if (
            totalBox
        ) {

            totalBox.textContent =
                history.length;
        }


        /*
         * Điểm cao nhất
         */

        const best =
            history.length > 0
                ? Math.max.apply(
                    null,
                    history.map(
                        function (item) {

                            return Number(
                                item.percent ||
                                0
                            );

                        }
                    )
                )
                : 0;


        if (
            bestBox
        ) {

            bestBox.textContent =
                best + "%";
        }


        /*
         * Điểm trung bình
         */

        const average =
            history.length > 0
                ? Math.round(
                    history.reduce(
                        function (
                            sum,
                            item
                        ) {

                            return (
                                sum +
                                Number(
                                    item.percent ||
                                    0
                                )
                            );

                        },
                        0
                    ) /
                    history.length
                )
                : 0;


        if (
            averageBox
        ) {

            averageBox.textContent =
                average + "%";
        }


        /*
         * Không có lịch sử
         */

        if (
            history.length === 0
        ) {

            box.innerHTML = `

                <div
                    class="home-empty-state"
                >

                    <i
                        class="fa-solid fa-clipboard-check"
                    ></i>

                    <strong>
                        Chưa có lần làm bài
                    </strong>

                    <span>
                        Khi bạn nộp một bài trắc nghiệm,
                        kết quả sẽ được lưu tại đây.
                    </span>

                </div>

            `;

            return;
        }


        /*
         * Mới nhất ở trên.
         */

        const reversed =
            [...history].reverse();


        box.innerHTML =
            reversed
                .map(
                    function (item) {

                        const percent =
                            Number(
                                item.percent ||
                                0
                            );


                        return `

                            <div
                                class="home-quiz-history-item"
                            >

                                <div
                                    class="home-quiz-history-icon"
                                >

                                    <i
                                        class="fa-solid fa-file-circle-check"
                                    ></i>

                                </div>


                                <div
                                    class="home-quiz-history-info"
                                >

                                    <div
                                        class="home-quiz-history-title"
                                        title="${escapeHTML(
                                            item.title
                                        )}"
                                    >

                                        ${escapeHTML(
                                            item.title
                                        )}

                                    </div>


                                    <div
                                        class="home-quiz-history-date"
                                    >

                                        <i
                                            class="fa-regular fa-clock"
                                        ></i>

                                        ${escapeHTML(
                                            item.time ||
                                            ""
                                        )}

                                    </div>

                                </div>


                                <div
                                    class="home-quiz-history-score"
                                >

                                    <div
                                        class="home-quiz-score-number"
                                    >

                                        ${Number(
                                            item.correct ||
                                            0
                                        )}
                                        /
                                        ${Number(
                                            item.total ||
                                            0
                                        )}

                                    </div>


                                    <span
                                        class="home-quiz-score-percent"
                                    >

                                        ${percent}%

                                    </span>

                                </div>


                                <button
                                    type="button"
                                    class="home-retry-quiz"
                                    onclick="retryHomeQuiz(
                                        '${escapeHTML(
                                            item.topicKey
                                        )}'
                                    )"
                                    title="Làm lại bài này"
                                >

                                    <i
                                        class="fa-solid fa-rotate-right"
                                    ></i>

                                    Làm lại

                                </button>

                            </div>

                        `;
                    }
                )
                .join("");
    }


    /* =====================================================
       21. TẠO 2 BẢNG TRANG CHỦ
       ===================================================== */

    function createHomeStudyDashboard() {

        /*
         * Không tạo trùng.
         */

        let dashboard =
            document.getElementById(
                "homeStudyDashboard"
            );


        if (
            dashboard
        ) {

            return dashboard;
        }


        /*
         * Dashboard cũ nằm sau main-categories.
         */

        const categories =
            document.querySelector(
                ".main-categories"
            );


        if (
            !categories
        ) {

            return null;
        }


        dashboard =
            document.createElement(
                "section"
            );


        dashboard.id =
            "homeStudyDashboard";


        dashboard.innerHTML = `

            <!-- =========================================
                 BÊN TRÁI: LỊCH SỬ LÀM BÀI
                 ========================================= -->

            <div
                class="home-history-panel"
            >

                <div
                    class="home-panel-header-new"
                >

                    <div
                        class="home-panel-title-new"
                    >

                        <i
                            class="fa-solid fa-chart-column"
                        ></i>

                        <span>
                            LỊCH SỬ LÀM BÀI
                        </span>

                    </div>


                    <button
                        type="button"
                        class="home-delete-history-btn"
                        onclick="clearHomeQuizHistory()"
                    >

                        <i
                            class="fa-solid fa-trash"
                        ></i>

                        Xóa lịch sử

                    </button>

                </div>


                <div
                    class="home-history-summary"
                >

                    <div
                        class="home-summary-box"
                    >

                        <strong
                            id="homeQuizAttempts"
                        >
                            0
                        </strong>

                        <span>
                            Lượt thi
                        </span>

                    </div>


                    <div
                        class="home-summary-box"
                    >

                        <strong
                            id="homeQuizBest"
                        >
                            0%
                        </strong>

                        <span>
                            Cao nhất
                        </span>

                    </div>


                    <div
                        class="home-summary-box"
                    >

                        <strong
                            id="homeQuizAverage"
                        >
                            0%
                        </strong>

                        <span>
                            Trung bình
                        </span>

                    </div>

                </div>


                <div
                    id="homeQuizHistoryNew"
                    class="home-quiz-history-new"
                ></div>

            </div>


            <!-- =========================================
                 BÊN PHẢI: TIẾN ĐỘ HỌC TẬP
                 ========================================= -->

            <div
                class="home-learning-panel-new"
            >

                <div
                    class="home-panel-header-new"
                >

                    <div
                        class="home-panel-title-new"
                    >

                        <i
                            class="fa-solid fa-graduation-cap"
                        ></i>

                        <span>
                            TIẾN ĐỘ HỌC TẬP
                        </span>

                    </div>


                    <button
                        type="button"
                        class="home-delete-history-btn"
                        onclick="clearHomeVideoHistory()"
                    >

                        <i
                            class="fa-solid fa-trash"
                        ></i>

                        Xóa lịch sử

                    </button>

                </div>


                <div
                    class="home-learning-summary"
                >

                    <div
                        class="home-learning-summary-top"
                    >

                        <strong>
                            Tiến độ video
                        </strong>

                        <span
                            id="homeVideoCountNew"
                        >
                            0/0 video
                        </span>

                    </div>


                    <div
                        class="home-overall-progress"
                    >

                        <span
                            id="homeOverallVideoBar"
                            style="width:0%"
                        ></span>

                    </div>

                </div>


                <div
                    id="homeLearningListNew"
                    class="home-learning-list-new"
                ></div>

            </div>

        `;


        /*
         * Chèn ngay dưới 5 ô.
         */

        categories.parentNode.insertBefore(
            dashboard,
            categories.nextSibling
        );


        return dashboard;
    }


    /* =====================================================
       22. RENDER TOÀN BỘ
       ===================================================== */

    function renderHomeStudyDashboard() {

        const dashboard =
            createHomeStudyDashboard();


        if (
            !dashboard
        ) {

            return;
        }


        dashboard.style.display =
            "grid";


        renderHomeQuizHistory();

        renderHomeVideoProgress();
    }


    /* =====================================================
       23. ẨN DASHBOARD CŨ
       KHÔNG XÓA HTML CŨ
       ===================================================== */

    function hideOldDashboard() {

        const oldDashboard =
            document.querySelector(
                "#homePage > .dashboard"
            );


        if (
            oldDashboard
        ) {

            oldDashboard.style.display =
                "none";
        }
    }


    /* =====================================================
       24. KHI VỀ TRANG CHỦ
       ===================================================== */

    const oldShowHome =
        window.showHome;


    if (
        typeof oldShowHome ===
        "function"
    ) {

        window.showHome =
            function () {

                oldShowHome.apply(
                    this,
                    arguments
                );


                setTimeout(
                    function () {

                        hideOldDashboard();

                        renderHomeStudyDashboard();

                    },
                    30
                );

            };
    }


    /* =====================================================
       25. KHỞI ĐỘNG
       ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            setTimeout(
                function () {

                    hideOldDashboard();

                    renderHomeStudyDashboard();

                },
                100
            );

        }
    );


})();

/* =========================================================
   📁 TRANG CON: ĐỀ THI & TÀI LIỆU
   📚 LÝ THUYẾT ÔN TẬP
   ❓ HỎI ĐÁP
   ℹ️ GIỚI THIỆU
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU ĐỀ THI
   ========================================================= */

const resourceExams = [

    {
        id: "exam01",

        title:
            "Đề thi Tin học cơ bản - Đề số 01",

        description:
            "Đề tổng hợp kiến thức CNTT cơ bản.",

        type:
            "PDF",

        file:
            "de-thi-1.pdf",

        icon:
            "fa-file-pdf"
    },


    {
        id: "exam02",

        title:
            "Đề thi Tin học cơ bản - Đề số 02",

        description:
            "Đề luyện tập tổng hợp theo module.",

        type:
            "PDF",

        file:
            "de-thi-2.pdf",

        icon:
            "fa-file-pdf"
    },


    {
        id: "exam03",

        title:
            "Đề thi PowerPoint",

        description:
            "Bài thực hành và ôn tập PowerPoint.",

        type:
            "PPTX",

        file:
            "de-powerpoint-2.pptx",

        icon:
            "fa-file-powerpoint"
    },


    {
        id: "exam04",

        title:
            "Bài tập Excel tổng hợp",

        description:
            "Các dạng bài tập Excel cần ôn.",

        type:
            "XLSX",

        file:
            "bai-tap-excel.xlsx",

        icon:
            "fa-file-excel"
    },


    {
        id: "exam05",

        title:
            "Bài tập Word tổng hợp",

        description:
            "Tài liệu thực hành Word.",

        type:
            "DOCX",

        file:
            "bai-tap-word.docx",

        icon:
            "fa-file-word"
    }

];


/* =========================================================
 /* =========================================================
   2. DỮ LIỆU LÝ THUYẾT
   ========================================================= */

const theoryModules = [

    {
        id: "theory-module-1",

        number: "01",

        title:
            "Module 1: Hiểu biết về Công nghệ thông tin cơ bản",

        description:
            "Máy tính, phần cứng, phần mềm, thiết bị và hệ điều hành.",

        icon:
            "fa-computer",

        /* 📕 FILE PDF MODULE 1 */
        pdf:
            "Module 1 HIỂU BIẾT VỀ CÔNG NGHỆ THÔNG TIN CƠ BẢN.pdf",

        content: `
            <h3>1. Máy tính và công nghệ thông tin</h3>

            <p>
                Máy tính là thiết bị điện tử có khả năng
                tiếp nhận, xử lý, lưu trữ và xuất thông tin
                theo chương trình đã được lập trình.
            </p>

            <h3>2. Phần cứng</h3>

            <ul>
                <li>CPU - bộ xử lý trung tâm.</li>
                <li>RAM - bộ nhớ tạm thời.</li>
                <li>Ổ cứng - thiết bị lưu trữ dữ liệu.</li>
                <li>Bàn phím, chuột - thiết bị nhập.</li>
                <li>Màn hình, máy in, loa - thiết bị xuất.</li>
            </ul>

            <h3>3. Phần mềm</h3>

            <p>
                Phần mềm gồm phần mềm hệ thống và
                phần mềm ứng dụng.
            </p>

            <h3>4. Hệ điều hành</h3>

            <p>
                Hệ điều hành quản lý phần cứng,
                tài nguyên máy tính và tạo môi trường
                cho các ứng dụng hoạt động.
            </p>
        `
    },


    {
        id: "theory-module-2",

        number: "02",

        title:
            "Module 2: Sử dụng máy tính cơ bản",

        description:
            "Tệp, thư mục, thao tác với hệ điều hành và dữ liệu.",

        icon:
            "fa-folder-open",

        /* 📕 FILE PDF MODULE 2 */
        pdf:
            "Module 2 SỬ DỤNG MÁY TÍNH CƠ BẢN .pdf",

        content: `
            <h3>1. Tệp và thư mục</h3>

            <p>
                Tệp dùng để lưu trữ dữ liệu.
                Thư mục dùng để tổ chức và quản lý các tệp.
            </p>

            <h3>2. Các thao tác cơ bản</h3>

            <ul>
                <li>Tạo tệp và thư mục.</li>
                <li>Sao chép dữ liệu.</li>
                <li>Di chuyển dữ liệu.</li>
                <li>Đổi tên tệp.</li>
                <li>Xóa và khôi phục dữ liệu.</li>
            </ul>

            <h3>3. Phím tắt quan trọng</h3>

            <ul>
                <li>Ctrl + C: Sao chép.</li>
                <li>Ctrl + V: Dán.</li>
                <li>Ctrl + X: Cắt.</li>
                <li>Ctrl + Z: Hoàn tác.</li>
                <li>Ctrl + S: Lưu.</li>
            </ul>
        `
    },


    {
        id: "theory-module-3",

        number: "03",

        title:
            "Module 3: Xử lý văn bản với Microsoft Word",

        description:
            "Soạn thảo, định dạng và trình bày văn bản.",

        icon:
            "fa-file-word",

        /* 📕 FILE PDF MODULE 3 */
        pdf:
            "Module 3 XỬ LÝ VĂN BẢN CƠ BẢN.pdf",

        content: `
            <h3>1. Soạn thảo văn bản</h3>

            <p>
                Word được sử dụng để tạo, chỉnh sửa,
                định dạng và in các tài liệu văn bản.
            </p>

            <h3>2. Định dạng văn bản</h3>

            <ul>
                <li>Font chữ.</li>
                <li>Cỡ chữ.</li>
                <li>In đậm, in nghiêng, gạch chân.</li>
                <li>Căn trái, căn giữa, căn phải.</li>
                <li>Giãn dòng và đoạn văn.</li>
            </ul>

            <h3>3. Phím tắt</h3>

            <ul>
                <li>Ctrl + B: In đậm.</li>
                <li>Ctrl + I: In nghiêng.</li>
                <li>Ctrl + U: Gạch chân.</li>
                <li>Ctrl + S: Lưu.</li>
            </ul>
        `
    },


    {
        id: "theory-module-4",

        number: "04",

        title:
            "Module 4: Bảng tính với Microsoft Excel",

        description:
            "Công thức, hàm và xử lý dữ liệu trong Excel.",

        icon:
            "fa-file-excel",

        /* 📕 FILE PDF MODULE 4 */
        pdf:
            "Module 4 SỬ DỤNG BẢNG TÍNH CƠ BẢN.pdf",

        content: `
            <h3>1. Công thức Excel</h3>

            <p>
                Công thức trong Excel thường bắt đầu
                bằng dấu "=".
            </p>

            <h3>2. Các hàm cơ bản</h3>

            <ul>
                <li>SUM - tính tổng.</li>
                <li>AVERAGE - tính trung bình.</li>
                <li>MAX - giá trị lớn nhất.</li>
                <li>MIN - giá trị nhỏ nhất.</li>
                <li>COUNT - đếm dữ liệu số.</li>
                <li>IF - kiểm tra điều kiện.</li>
            </ul>

            <h3>3. Hàm tìm kiếm</h3>

            <p>
                VLOOKUP được sử dụng để tìm một giá trị
                trong cột đầu tiên của bảng và trả về
                dữ liệu tương ứng.
            </p>

            <p>
                Ví dụ:
                <code>
                    =VLOOKUP(A2,$F$2:$H$10,2,FALSE)
                </code>
            </p>
        `
    },


    {
        id: "theory-module-5",

        number: "05",

        title:
            "Module 5: Trình chiếu với Microsoft PowerPoint",

        description:
            "Slide, bố cục, hiệu ứng và trình chiếu.",

        icon:
            "fa-file-powerpoint",

        /* 📕 FILE PDF MODULE 5 */
        pdf:
            "Module 5 SỬ DỤNG TRÌNH CHIẾU CƠ BẢN.pdf",

        content: `
            <h3>1. Slide</h3>

            <p>
                Slide là trang trình chiếu dùng để
                trình bày nội dung bằng văn bản,
                hình ảnh, biểu đồ và các đối tượng.
            </p>

            <h3>2. Transition</h3>

            <p>
                Transition là hiệu ứng chuyển tiếp
                giữa các slide.
            </p>

            <h3>3. Animation</h3>

            <p>
                Animation tạo hiệu ứng xuất hiện,
                nhấn mạnh hoặc biến mất cho đối tượng.
            </p>

            <h3>4. Trình chiếu</h3>

            <p>
                Phím F5 dùng để bắt đầu trình chiếu
                từ slide đầu tiên.
            </p>
        `
    },


    {
        id: "theory-module-6",

        number: "06",

        title:
            "Module 6: Internet và an toàn thông tin",

        description:
            "Internet, trình duyệt, email và bảo mật thông tin.",

        icon:
            "fa-globe",

        /* 📕 FILE PDF MODULE 6 */
        pdf:
            "Module 6 SỬ DỤNG INTERNET CƠ BẢN.pdf",

        content: `
            <h3>1. Internet</h3>

            <p>
                Internet là hệ thống mạng máy tính
                toàn cầu kết nối các thiết bị và
                cung cấp nhiều dịch vụ thông tin.
            </p>

            <h3>2. Trình duyệt</h3>

            <ul>
                <li>Chrome.</li>
                <li>Edge.</li>
                <li>Firefox.</li>
                <li>Safari.</li>
            </ul>

            <h3>3. An toàn thông tin</h3>

            <ul>
                <li>Sử dụng mật khẩu mạnh.</li>
                <li>Không chia sẻ mã xác thực.</li>
                <li>Cẩn thận với liên kết lạ.</li>
                <li>Không tải tệp không rõ nguồn gốc.</li>
            </ul>
        `
    }

];



/* =========================================================
   3. MỞ FILE
   ========================================================= */

function openResourceFile(
    file,
    title
) {

    /*
     * Dùng hàm openFile hiện có nếu website
     * của bạn đã có sẵn.
     */

    if (
        typeof openFile ===
        "function"
    ) {

        openFile(
            encodeURIComponent(file),
            encodeURIComponent(title)
        );

        return;
    }


    /*
     * Nếu chưa có openFile thì thử mở trực tiếp.
     */

    const url =
        file;


    const a =
        document.createElement(
            "a"
        );


    a.href =
        url;

    a.download =
        file;

    a.target =
        "_blank";

    document.body.appendChild(
        a
    );

    a.click();

    a.remove();

}


/* =========================================================
   4. TRANG ĐỀ THI & TÀI LIỆU
   ========================================================= */

function openDocuments() {

    const examHTML =
        resourceExams
            .map(
                function (exam) {

                    return `

                        <article
                            class="exam-resource-card"
                        >

                            <div
                                class="exam-file-icon"
                            >

                                <i
                                    class="fa-solid ${exam.icon}"
                                ></i>

                            </div>


                            <div
                                class="exam-file-info"
                            >

                                <h3>
                                    ${escapeHTML(
                                        exam.title
                                    )}
                                </h3>

                                <p>
                                    ${escapeHTML(
                                        exam.description
                                    )}

                                    • ${exam.type}
                                </p>

                            </div>


                            <button
    type="button"
    class="exam-download-btn"
    onclick="downloadExamFile('${escapeHTML(exam.file)}')"
>
    <i class="fa-solid fa-download"></i>
    Tải về
</button>

                        </article>

                    `;

                }
            )
            .join("");


    const moduleHTML =
        theoryModules
            .map(
                function (
                    module
                ) {

                    return `

                        <article
                            class="theory-module-card"
                            onclick="openTheoryModule(
                                '${module.id}'
                            )"
                        >

                            <div
                                class="theory-module-number"
                            >

                                ${module.number}

                            </div>


                            <div
                                class="theory-module-info"
                            >

                                <h4>
                                    ${escapeHTML(
                                        module.title
                                    )}
                                </h4>

                                <p>
                                    ${escapeHTML(
                                        module.description
                                    )}
                                </p>

                            </div>


                            <div
                                class="theory-module-arrow"
                            >

                                <i
                                    class="fa-solid fa-chevron-right"
                                ></i>

                            </div>

                        </article>

                    `;

                }
            )
            .join("");


    const html = `

        <div
            class="documents-page-new"
        >

            <section
                class="resource-page-header"
            >

                <div
                    class="resource-page-header-content"
                >

                    <div
                        class="resource-page-header-icon"
                    >

                        <i
                            class="fa-solid fa-folder-open"
                        ></i>

                    </div>


                    <div>

                        <h1>
                            ĐỀ THI & TÀI LIỆU
                        </h1>

                        <p>
                            Kho đề thi và tài liệu ôn tập
                            được sắp xếp theo từng nội dung
                            để bạn học và luyện tập dễ dàng.
                        </p>

                    </div>

                </div>

            </section>


            <section
                class="resources-two-columns"
            >

                <!-- ============================
                     CỘT ĐỀ THI
                     ============================ -->

                <div
                    class="resource-column exam-resource"
                >

                    <header
                        class="resource-column-header"
                    >

                        <div
                            class="resource-column-header-icon"
                        >

                            <i
                                class="fa-solid fa-file-circle-check"
                            ></i>

                        </div>


                        <div>

                            <h2>
                                ĐỀ THI
                            </h2>

                            <span>
                                Đề luyện tập & đề tham khảo
                            </span>

                        </div>

                    </header>


                    <div
                        class="exam-resource-list"
                    >

                        ${examHTML}

                    </div>

                </div>


                <!-- ============================
                     CỘT TÀI LIỆU
                     ============================ -->

                <div
                    class="resource-column theory-resource"
                >

                    <header
                        class="resource-column-header"
                    >

                        <div
                            class="resource-column-header-icon"
                        >

                            <i
                                class="fa-solid fa-book-open"
                            ></i>

                        </div>


                        <div>

                            <h2>
                                TÀI LIỆU ÔN TẬP
                            </h2>

                            <span>
                                Bộ trắc nghiệm theo từng module
                            </span>

                        </div>

                    </header>


                    <div
                        class="theory-resource-body"
                    >

                        <!-- LÝ THUYẾT -->

                        <div
                            class="theory-main-card"
                            onclick="toggleTheoryModules()"
                        >

                            <div
                                class="theory-main-icon"
                            >

                                <i
                                    class="fa-solid fa-book-open-reader"
                                ></i>

                            </div>


                            <h3>
                                LÝ THUYẾT ÔN TẬP
                            </h3>


                            <p>
                                Nhấn vào đây để xem toàn bộ
                                nội dung trắc nghiệm và lý thuyết được chia
                                thành từng module.
                            </p>

                        </div>


                        <!-- MODULE -->

                        <div
                            id="theoryModuleSection"
                            class="theory-module-section"
                        >

                            <div
                                class="theory-module-title"
                            >

                                <strong>
                                    CÁC MODULE ÔN TẬP
                                </strong>

                                <span>
                                    ${theoryModules.length}
                                    module
                                </span>

                            </div>


                            ${moduleHTML}

                        </div>

                    </div>

                </div>

            </section>

        </div>

    `;


    openOtherPage(
        html
    );
}


/* =========================================================
   5. HIỆN / ẨN MODULE
   ========================================================= */

function toggleTheoryModules() {

    const box =
        document.getElementById(
            "theoryModuleSection"
        );


    if (
        !box
    ) {

        return;
    }


    box.classList.toggle(
        "show"
    );


    if (
        box.classList.contains(
            "show"
        )
    ) {

        setTimeout(
            function () {

                box.scrollIntoView({
                    behavior:
                        "smooth",
                    block:
                        "nearest"
                });

            },
            80
        );

    }

}


/* =========================================================
   6. MỞ CHI TIẾT MODULE
   ========================================================= */

function openTheoryModule(
    moduleId
) {

    const module =
        theoryModules.find(
            function (item) {

                return (
                    item.id ===
                    moduleId
                );

            }
        );


    if (
        !module
    ) {

        showToast(
            "Không tìm thấy module."
        );

        return;
    }


    const html = `

        <div
            class="theory-detail-page"
        >

            <button
                type="button"
                class="theory-back-btn"
                onclick="openDocuments()"
            >

                <i
                    class="fa-solid fa-arrow-left"
                ></i>

                Quay lại Đề thi & Tài liệu

            </button>


            <article
                class="theory-detail-card"
            >

                <header
                    class="theory-detail-heading"
                >

                    <div
                        class="theory-detail-icon"
                    >

                        <i
                            class="fa-solid ${module.icon}"
                        ></i>

                    </div>


                    <div>

                        <h1>
                            ${escapeHTML(
                                module.title
                            )}
                        </h1>

                        <p>
                            ${escapeHTML(
                                module.description
                            )}
                        </p>

                    </div>

                </header>


                <div
                    class="theory-content-box"
                >

                    ${module.content}

                </div>

            </article>

        </div>

    `;


    openOtherPage(
        html
    );
}


/* =========================================================
   7. GIỚI THIỆU
   ========================================================= */

function openAbout() {

    const html = `

        <div
            class="about-page-new"
        >

            <section
                class="about-hero"
            >

                <h1>
                    <i
                        class="fa-solid fa-circle-info"
                    ></i>

                    GIỚI THIỆU
                </h1>


                <p>
                    Website Ôn tập Tin học được xây dựng
                    nhằm hỗ trợ người học hệ thống hóa kiến thức,
                    xem bài học, luyện tập trắc nghiệm và
                    chuẩn bị cho tin học chuẩn đầu ra trường QNU.
                </p>

            </section>


            <section
                class="about-grid"
            >

                <article
                    class="about-card"
                >

                    <i
                        class="fa-solid fa-graduation-cap"
                    ></i>

                    <h3>
                        HỌC TẬP
                    </h3>

                    <p>
                        Nội dung được tổ chức theo từng
                        chuyên mục PowerPoint, Excel và Word
                        để người học dễ dàng theo dõi.
                    </p>

                </article>


                <article
                    class="about-card"
                >

                    <i
                        class="fa-solid fa-list-check"
                    ></i>

                    <h3>
                        LUYỆN TẬP
                    </h3>

                    <p>
                        Hệ thống trắc nghiệm được chia thành
                        nhiều module, giúp người học luyện tập
                        theo từng phần kiến thức.
                    </p>

                </article>


                <article
                    class="about-card"
                >

                    <i
                        class="fa-solid fa-chart-line"
                    ></i>

                    <h3>
                        THEO DÕI
                    </h3>

                    <p>
                        Kết quả làm bài và tiến độ học video
                        có thể được lưu lại để người học
                        theo dõi quá trình ôn tập.
                    </p>

                </article>

            </section>

        </div>

    `;


    openOtherPage(
        html
    );
}


/* =========================================================
   8. HỎI ĐÁP
   ========================================================= */

function openDiscussion() {

    const questions = [

        {
            q:
                "Làm thế nào để bắt đầu học?",

            a:
                "Bạn có thể chọn PowerPoint, Excel hoặc Word trên trang chủ. Sau đó chọn bài học muốn xem."
        },


        {
            q:
                "Tôi có thể làm lại bài trắc nghiệm không?",

            a:
                "Có. Trong phần lịch sử làm bài, mỗi kết quả đều có nút Làm lại để chuyển trực tiếp đến bài trắc nghiệm."
        },


        {
            q:
                "Video đang xem dở có được lưu không?",

            a:
                "Có. Hệ thống sẽ lưu tiến độ video để bạn có thể quay lại và chọn Học tiếp."
        },


        {
            q:
                "Tài liệu ôn tập nằm ở đâu?",

            a:
                "Bạn chọn Đề thi & Tài liệu trên thanh điều hướng hoặc ô Tài liệu ở trang chủ. Sau đó chọn Lý thuyết ôn tập để xem các module."
        },


        {
            q:
                "Có thể tải đề thi về máy không?",

            a:
                "Có. Trong cột Đề thi, chọn đề muốn tải rồi nhấn nút Tải về."
        },


        {
            q:
                "Các module lý thuyết có liên quan đến module trắc nghiệm không?",

            a:
                "Có cùng định hướng nội dung. Phần lý thuyết được chia thành các module để người học ôn kiến thức trước khi làm trắc nghiệm."
        }

    ];


    const questionHTML =
        questions
            .map(
                function (
                    item,
                    index
                ) {

                    return `

                        <article
                            class="qa-item"
                            id="qa-${index}"
                        >

                            <button
                                type="button"
                                class="qa-question"
                                onclick="toggleQA(
                                    ${index}
                                )"
                            >

                                <span>
                                    ${escapeHTML(
                                        item.q
                                    )}
                                </span>

                                <i
                                    class="fa-solid fa-chevron-down"
                                ></i>

                            </button>


                            <div
                                class="qa-answer"
                            >

                                ${escapeHTML(
                                    item.a
                                )}

                            </div>

                        </article>

                    `;

                }
            )
            .join("");


    const html = `

        <div
            class="qa-page-new"
        >

            <section
                class="qa-hero"
            >

                <h1>
                    <i
                        class="fa-solid fa-comments"
                    ></i>

                    HỎI ĐÁP
                </h1>


                <p>
                    Một số câu hỏi thường gặp trong quá trình
                    học tập và sử dụng hệ thống.
                </p>

            </section>


            <section
                class="qa-list"
            >

                ${questionHTML}

            </section>

        </div>

    `;


    openOtherPage(
        html
    );
}


/* =========================================================
   9. MỞ / ĐÓNG CÂU HỎI
   ========================================================= */

function toggleQA(
    index
) {

    const item =
        document.getElementById(
            "qa-" + index
        );


    if (
        !item
    ) {

        return;
    }


    item.classList.toggle(
        "open"
    );
}




/* =========================================================
   🔐 KHÓA CHỨC NĂNG KHI CHƯA ĐĂNG NHẬP
   ========================================================= */

function requireLogin(message = "Vui lòng đăng ký hoặc đăng nhập để sử dụng chức năng này.") {

    if (currentUser) {
        return true;
    }

    showToast(message);

    setTimeout(() => {
        if (typeof openLogin === "function") {
            openLogin();
        }
    }, 250);

    return false;
}


/* =========================================================
   🔐 KHÓA POWERPOINT / EXCEL / WORD
   ========================================================= */

const originalOpenCategory = window.openCategory;

window.openCategory = function(category) {

    if (!requireLogin(
        "🔒 Vui lòng đăng ký hoặc đăng nhập để học bài."
    )) {
        return;
    }

    return originalOpenCategory(category);
};


/* =========================================================
   🔐 KHÓA ÔN TẬP TRẮC NGHIỆM
   ========================================================= */

const originalOpenExam = window.openExam;

window.openExam = function() {

    if (!requireLogin(
        "🔒 Vui lòng đăng ký hoặc đăng nhập để làm bài trắc nghiệm."
    )) {
        return;
    }

    return originalOpenExam();
};


/* =========================================================
   🔐 KHÓA ĐỀ THI & TÀI LIỆU
   ========================================================= */

const originalOpenDocuments = window.openDocuments;

window.openDocuments = function() {

    if (!requireLogin(
        "🔒 Vui lòng đăng ký hoặc đăng nhập để xem đề thi và tài liệu."
    )) {
        return;
    }

    return originalOpenDocuments();
};


/* =========================================================
   🔐 KHÓA VIDEO
   ========================================================= */

const originalOpenVideos = window.openVideos;

window.openVideos = function() {

    if (!requireLogin(
        "🔒 Vui lòng đăng ký hoặc đăng nhập để xem video bài giảng."
    )) {
        return;
    }

    return originalOpenVideos();
};


/* =========================================================
   🔐 KHÓA HỎI ĐÁP
   ========================================================= */

const originalOpenDiscussion = window.openDiscussion;

window.openDiscussion = function() {

    if (!requireLogin(
        "🔒 Vui lòng đăng ký hoặc đăng nhập để sử dụng Hỏi đáp."
    )) {
        return;
    }

    return originalOpenDiscussion();
};


/* =========================================================
   🔐 KHÓA TỪNG MODULE LÝ THUYẾT
   ========================================================= */

const originalOpenTheoryModule = window.openTheoryModule;

window.openTheoryModule = function(moduleId) {

    if (!requireLogin(
        "🔒 Vui lòng đăng ký hoặc đăng nhập để học lý thuyết."
    )) {
        return;
    }

    return originalOpenTheoryModule(moduleId);
};


/* =====================================================
   ADMIN BUTTON
===================================================== */

function showAdminButton() {

    let button = document.getElementById("adminButton");

    if (!button) {

        button = document.createElement("button");

        button.id = "adminButton";
        button.className = "admin-button";

        button.innerHTML = `
            <i class="fa-solid fa-shield-halved"></i>
            Quản trị
        `;

        button.onclick = openAdminPanel;

        const accountArea =
            document.querySelector(".account-area");

        if (accountArea) {
            accountArea.appendChild(button);
        }
    }

    button.classList.remove("hidden");
}


function hideAdminButton() {

    const button =
        document.getElementById("adminButton");

    if (button) {
        button.classList.add("hidden");
    }
}



/* ================================================================
   MOBILE NAVIGATION ENGINE — FINAL
   Không thay đổi các chức năng học tập hiện có.
   Chỉ bổ sung swipe/drag, chỉ dẫn trượt và nút về đầu trang.
   ================================================================ */
(function () {
    "use strict";

    function isMobile() {
        return window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
    }

    function initMobileNavigation() {
        const nav = document.querySelector(".main-nav");
        if (!nav) return;

        let hint = document.querySelector(".mobile-nav-hint");
        if (!hint) {
            hint = document.createElement("div");
            hint.className = "mobile-nav-hint";
            hint.innerHTML =
                '<span class="hint-arrow">←</span>' +
                '<span>TRƯỢT QUA</span>' +
                '<span class="hint-arrow">→</span>';
            document.body.appendChild(hint);
        }

        let topButton = document.querySelector(".mobile-top-button");
        if (!topButton) {
            topButton = document.createElement("button");
            topButton.type = "button";
            topButton.className = "mobile-top-button";
            topButton.setAttribute("aria-label", "Về đầu trang");
            topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            topButton.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
            document.body.appendChild(topButton);
        }

        function updateNavState() {
            const max = Math.max(0, nav.scrollWidth - nav.clientWidth);
            const left = nav.scrollLeft;
            const hasLeft = left > 4;
            const hasRight = left < max - 4;

            nav.classList.toggle("has-left-overflow", hasLeft);
            nav.classList.toggle("has-right-overflow", hasRight);

            if (isMobile() && max > 4) {
                const rect = nav.getBoundingClientRect();
                hint.style.left = "50%";
                hint.style.top = Math.max(4, rect.bottom - 5) + "px";
                hint.style.transform = "translate(-50%, -50%)";

                // Chỉ hiện khi menu thực sự còn phần bị che.
                if (hasRight || hasLeft) {
                    hint.classList.add("show");
                } else {
                    hint.classList.remove("show");
                }
            } else {
                hint.classList.remove("show");
                nav.classList.remove("has-left-overflow", "has-right-overflow");
            }
        }

        // Vuốt bằng cảm ứng được trình duyệt xử lý tự nhiên; phần này
        // bổ sung kéo bằng chuột trên desktop/tablet và wheel ngang.
        let dragging = false;
        let dragStartX = 0;
        let dragStartScroll = 0;

        nav.addEventListener("pointerdown", function (event) {
            if (event.pointerType === "touch") return;
            dragging = true;
            dragStartX = event.clientX;
            dragStartScroll = nav.scrollLeft;
            nav.classList.add("is-dragging");
        });

        nav.addEventListener("pointermove", function (event) {
            if (!dragging) return;
            const dx = event.clientX - dragStartX;
            nav.scrollLeft = dragStartScroll - dx;
            updateNavState();
        });

        function stopDrag() {
            dragging = false;
            nav.classList.remove("is-dragging");
        }

        nav.addEventListener("pointerup", stopDrag);
        nav.addEventListener("pointercancel", stopDrag);
        nav.addEventListener("pointerleave", stopDrag);

        nav.addEventListener("wheel", function (event) {
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                const canScroll = nav.scrollWidth > nav.clientWidth;
                if (canScroll) {
                    nav.scrollLeft += event.deltaY;
                    event.preventDefault();
                }
            }
            updateNavState();
        }, { passive: false });

        nav.addEventListener("scroll", updateNavState, { passive: true });
        window.addEventListener("resize", updateNavState);
        window.addEventListener("orientationchange", function () {
            setTimeout(updateNavState, 150);
        });

        // Nếu người dùng bấm một mục đang nằm ngoài vùng nhìn thấy,
        // tự cuộn mục đó vào giữa màn hình.
        nav.querySelectorAll(".nav-item").forEach(function (item) {
            item.addEventListener("click", function () {
                setTimeout(function () {
                    try {
                        item.scrollIntoView({
                            behavior: "smooth",
                            inline: "center",
                            block: "nearest"
                        });
                    } catch (e) {}
                    setTimeout(updateNavState, 300);
                }, 20);
            });
        });

        // Khi người dùng chạm menu lần đầu, chỉ dẫn biến mất để không che nội dung.
        nav.addEventListener("touchstart", function () {
            hint.classList.remove("show");
        }, { passive: true });

        function updateTopButton() {
            if (!isMobile()) {
                topButton.classList.remove("show");
                return;
            }
            topButton.classList.toggle("show", window.scrollY > 420);
        }

        window.addEventListener("scroll", updateTopButton, { passive: true });

        setTimeout(updateNavState, 80);
        setTimeout(updateNavState, 400);
        updateTopButton();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMobileNavigation);
    } else {
        initMobileNavigation();
    }
})();

/* ================================================================
   MOBILE VIEWPORT REPAIR
   Một số trình duyệt mobile thay đổi chiều cao viewport khi mở bàn phím.
   Dùng biến --app-height để các modal/khung cao ổn định hơn.
   ================================================================ */
(function () {
    function setAppHeight() {
        document.documentElement.style.setProperty("--app-height", window.innerHeight + "px");
    }
    setAppHeight();
    window.addEventListener("resize", setAppHeight, { passive: true });
    window.addEventListener("orientationchange", function () {
        setTimeout(setAppHeight, 200);
    });
})();



/* =========================================================
   HẠT SÁNG NHIỀU MÀU RƠI TOÀN TRANG
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("falling-particles")) return;

    const container = document.createElement("div");
    container.id = "falling-particles";

    const colors = [
        "#ffffff",
        "#00e5ff",
        "#4dabff",
        "#b56cff",
        "#ff5ec4",
        "#ffd166",
        "#00f5a0",
        "#ff6b6b"
    ];

    const amount = window.innerWidth <= 600 ? 60 : 120;

    for (let i = 0; i < amount; i++) {

        const particle = document.createElement("span");
        particle.className = "falling-particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.setProperty(
            "--size",
            (Math.random() * 4 + 2) + "px"
        );

        particle.style.setProperty(
            "--particle-color",
            colors[Math.floor(Math.random() * colors.length)]
        );

        particle.style.setProperty(
            "--duration",
            (Math.random() * 7 + 5) + "s"
        );

        particle.style.setProperty(
            "--delay",
            (Math.random() * -12) + "s"
        );

        particle.style.setProperty(
            "--opacity",
            (Math.random() * 0.7 + 0.3)
        );

        particle.style.setProperty(
            "--sway-duration",
            (Math.random() * 3 + 2) + "s"
        );

        container.appendChild(particle);
    }

    document.body.appendChild(container);

});


/* =========================================================
   ✅ TỰ ĐỘNG PHÁT HIỆN ĐĂNG NHẬP / ĐĂNG KÝ THÀNH CÔNG
   ========================================================= */

(() => {

    "use strict";

    let successShown = false;
    let previousLoggedInState = false;


    /* Kiểm tra trạng thái tài khoản */
    function isLoggedIn() {

        const userArea =
            document.querySelector(".user-area");

        const loginBtn =
            document.querySelector(".login-btn");

        const registerBtn =
            document.querySelector(".register-btn");


        /* user-area đang hiện */
        if (userArea) {

            const style =
                window.getComputedStyle(userArea);

            if (
                style.display !== "none" &&
                style.visibility !== "hidden" &&
                style.opacity !== "0"
            ) {
                return true;
            }
        }


        /* Nút login/register đã bị ẩn */
        const loginHidden =
            !loginBtn ||
            window.getComputedStyle(loginBtn).display === "none";

        const registerHidden =
            !registerBtn ||
            window.getComputedStyle(registerBtn).display === "none";


        return loginHidden && registerHidden;
    }


    /* Tạo hiệu ứng */
    function playSuccessEffect(message) {

        if (successShown) return;

        successShown = true;


        const screen =
            document.createElement("div");

        screen.className =
            "auth-success-screen";


        screen.innerHTML = `
            <div class="auth-success-glow"></div>

            <div class="auth-success-circle">
                ✓
            </div>

            <div class="auth-success-label">
                ${message}
            </div>
        `;


        /* Tạo nhiều hạt */
        const colors = [
            "#a78bfa",
            "#f472b6",
            "#22d3ee",
            "#facc15",
            "#34d399",
            "#ffffff"
        ];


        for (let i = 0; i < 28; i++) {

            const spark =
                document.createElement("span");

            spark.className =
                "auth-success-spark";


            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                100 +
                Math.random() *
                170;


            const x =
                Math.cos(angle) *
                distance;

            const y =
                Math.sin(angle) *
                distance;


            spark.style.setProperty(
                "--spark-x",
                `${x}px`
            );

            spark.style.setProperty(
                "--spark-y",
                `${y}px`
            );

            spark.style.setProperty(
                "--spark-color",
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]
            );


            spark.style.animationDelay =
                `${Math.random() * .15}s`;


            screen.appendChild(spark);
        }


        document.body.appendChild(screen);


        /* Tự biến mất */
        setTimeout(() => {

            screen.style.transition =
                "opacity .4s ease";

            screen.style.opacity = "0";


            setTimeout(() => {

                screen.remove();

                successShown = false;

            }, 400);

        }, 1700);
    }


    /* Theo dõi thay đổi DOM */
    const observer =
        new MutationObserver(() => {

            const loggedIn =
                isLoggedIn();


            /* Chỉ chạy khi chuyển từ
               chưa đăng nhập → đã đăng nhập */
            if (
                loggedIn &&
                !previousLoggedInState
            ) {

                playSuccessEffect(
                    "🎉 Đăng nhập thành công!"
                );
            }


            previousLoggedInState =
                loggedIn;

        });


    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                "class",
                "style"
            ]
        }
    );


    /* Lấy trạng thái ban đầu */
    previousLoggedInState =
        isLoggedIn();

})();


/* =========================================================
   🔄 LÀM LẠI → MỞ TRANG TRẮC NGHIỆM
   ========================================================= */

document.addEventListener("click", function (event) {

    const retryButton =
        event.target.closest(".home-retry-quiz");

    if (!retryButton) return;

    /*
       Không dùng preventDefault()
       Không dùng stopPropagation()
       để tránh làm hỏng hệ thống điều hướng hiện tại.
    */

    setTimeout(function () {

        /*
           CÁCH 1:
           Nếu web của bạn có hàm mở trang quiz
        */

        if (typeof showPage === "function") {

            showPage("quiz");
            return;
        }


        /*
           CÁCH 2:
           Một số code có tên hàm khác
        */

        if (typeof openQuizPage === "function") {

            openQuizPage();
            return;
        }


        /*
           CÁCH 3:
           Tìm nút Trắc nghiệm trên thanh menu
           và kích hoạt nó.
        */

        const quizButton =
            Array.from(
                document.querySelectorAll(
                    ".nav-item, .side-card button, .category-card button"
                )
            ).find(function (btn) {

                const text =
                    (
                        btn.innerText ||
                        btn.textContent ||
                        ""
                    )
                    .trim()
                    .toLowerCase();

                return (
                    text.includes("trắc nghiệm") ||
                    text.includes("trac nghiem") ||
                    text === "quiz"
                );
            });


        if (quizButton) {

            quizButton.click();
            return;
        }


        console.warn(
            "Không tìm thấy hàm hoặc nút mở trang Trắc nghiệm."
        );

    }, 0);

});


/* =====================================================
   PDF CHÍNH XÁC CHO 6 MODULE
   TÊN PHẢI TRÙNG 100% VỚI FILE TRONG THƯ MỤC
   ===================================================== */

const modulePdfFiles = {
    module1: "Module 1 HIỂU BIẾT VỀ CÔNG NGHỆ THÔNG TIN CƠ BẢN.pdf",

    module2: "Module 2 SỬ DỤNG MÁY TÍNH CƠ BẢN .pdf",

    module3: "Module 3 XỬ LÝ VĂN BẢN CƠ BẢN.pdf",

    module4: "Module 4 SỬ DỤNG BẢNG TÍNH CƠ BẢN.pdf",

    module5: "Module 5 SỬ DỤNG TRÌNH CHIẾU CƠ BẢN.pdf",

    module6: "Module 6 SỬ DỤNG INTERNET CƠ BẢN.pdf"
};

// 2. Ghi đè hàm renderQuizBookView để hiển thị nút xem/tải PDF
if (typeof renderQuizBookView === "function") {
    const originalRenderQuizBookView = renderQuizBookView;

    renderQuizBookView = function () {
        originalRenderQuizBookView.apply(this, arguments);

        const pdfFile = modulePdfFiles[currentQuizTopicKey];
        const summaryContainer = document.getElementById("quizResultSummary");

        if (pdfFile && summaryContainer) {
            const pdfHTML = `
                <div class="pdf-theory-container" style="margin-bottom: 15px; padding: 12px; background: #e0f2fe; border: 1px solid #38bdf8; border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 10px; color: #0369a1; font-weight: 600;">
                        <i class="fa-solid fa-file-pdf" style="font-size: 24px; color: #e11d48;"></i>
                        <span>${escapeHTML(pdfFile)}</span>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <a href="${encodeURI(pdfFile)}" target="_blank" style="padding: 6px 12px; background: #0284c7; color: #fff; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold;">
                            <i class="fa-solid fa-eye"></i> Xem online
                        </a>
                        <a href="${encodeURI(pdfFile)}" download style="padding: 6px 12px; background: #16a34a; color: #fff; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold;">
                            <i class="fa-solid fa-download"></i> Tải về
                        </a>
                    </div>
                </div>
            `;
            summaryContainer.insertAdjacentHTML("afterbegin", pdfHTML);
        }
    };
}


/* =========================================================
   6. MỞ CHI TIẾT MODULE + ĐỌC PDF
   KHÔNG ĐỤNG CÁC CHỨC NĂNG KHÁC
   ========================================================= */

function openTheoryModule(moduleId) {

    const module = theoryModules.find(function (item) {
        return item.id === moduleId;
    });

    if (!module) {
        showToast("Không tìm thấy module.");
        return;
    }

    /* =====================================================
       FILE PDF ĐƯỢC LẤY TRỰC TIẾP TỪ module.pdf
       6 MODULE = 6 FILE
       ===================================================== */

    const pdfFile = module.pdf;
    const pdfURL = encodeURI(pdfFile);

    const html = `

        <div class="theory-detail-page pdf-theory-page">

            <!-- NÚT QUAY LẠI -->

            <button
                type="button"
                class="theory-back-btn"
                onclick="openDocuments()"
            >
                <i class="fa-solid fa-arrow-left"></i>
                Quay lại Đề thi & Tài liệu
            </button>


            <!-- TIÊU ĐỀ -->

            <article class="pdf-module-card">

                <header class="theory-detail-heading pdf-module-heading">

                    <div class="theory-detail-icon pdf-module-icon">
                        <i class="fa-solid ${module.icon}"></i>
                    </div>

                    <div class="pdf-module-heading-text">

                        <span class="pdf-module-label">
                            MODULE ${module.number}
                        </span>

                        <h1>
                            ${escapeHTML(module.title)}
                        </h1>

                        <p>
                            ${escapeHTML(module.description)}
                        </p>

                    </div>

                </header>


                <!-- =====================================
                     PDF + CỘT CÔNG CỤ
                     ===================================== -->

                <div class="pdf-reader-layout">


                    <!-- =================================
                         KHUNG ĐỌC PDF
                         ================================= -->

                    <section class="pdf-reader-panel">

                        <div class="pdf-reader-toolbar">

                            <div class="pdf-file-title">

                                <i class="fa-solid fa-file-pdf"></i>

                                <div>

                                    <strong>
                                        Tài liệu lý thuyết
                                    </strong>

                                    <span>
                                        ${escapeHTML(pdfFile)}
                                    </span>

                                </div>

                            </div>

                            <div class="pdf-online-status">
                                <span></span>
                                Đọc trực tuyến
                            </div>

                        </div>


                        <!-- PDF -->

                        <div
                            class="pdf-viewer-wrapper"
                            id="pdfViewerWrapper"
                        >

                            <iframe
                                id="modulePDFViewer"
                                src="${pdfURL}"
                                class="module-pdf-viewer"
                                title="${escapeHTML(module.title)}"
                            ></iframe>

                        </div>

                    </section>


                    <!-- =================================
                         CỘT BÊN PHẢI
                         ================================= -->

                    <aside class="pdf-tools-panel">


                        <div class="pdf-tools-box">

                            <div class="pdf-tools-top">

                                <div class="pdf-tools-main-icon">
                                    <i class="fa-solid fa-file-pdf"></i>
                                </div>

                                <div>

                                    <h2>
                                        TÀI LIỆU
                                    </h2>

                                    <p>
                                        ${escapeHTML(module.title)}
                                    </p>

                                </div>

                            </div>


                            <div class="pdf-tools-line"></div>


                            <!-- TÊN FILE -->

                            <div class="pdf-current-file">

                                <div class="pdf-current-file-label">

                                    <i class="fa-solid fa-paperclip"></i>

                                    File hiện tại

                                </div>

                                <strong>
                                    ${escapeHTML(pdfFile)}
                                </strong>

                            </div>


                            <!-- TẢI -->

                            <a
                                href="${pdfURL}"
                                download
                                class="pdf-tool-button pdf-download"
                            >

                                <span class="pdf-tool-button-icon">
                                    <i class="fa-solid fa-download"></i>
                                </span>

                                <span class="pdf-tool-button-text">

                                    <b>Tải tài liệu</b>

                                    <small>
                                        Lưu file PDF về máy
                                    </small>

                                </span>

                            </a>


                            <!-- IN -->

                            <button
                                type="button"
                                class="pdf-tool-button pdf-print"
                                onclick="printModulePDF('${pdfURL}')"
                            >

                                <span class="pdf-tool-button-icon">
                                    <i class="fa-solid fa-print"></i>
                                </span>

                                <span class="pdf-tool-button-text">

                                    <b>In tài liệu</b>

                                    <small>
                                        In nội dung PDF
                                    </small>

                                </span>

                            </button>


                            <!-- TOÀN MÀN HÌNH -->

                            <button
                                type="button"
                                class="pdf-tool-button pdf-fullscreen"
                                onclick="fullscreenModulePDF()"
                            >

                                <span class="pdf-tool-button-icon">
                                    <i class="fa-solid fa-expand"></i>
                                </span>

                                <span class="pdf-tool-button-text">

                                    <b>Toàn màn hình</b>

                                    <small>
                                        Mở rộng khung đọc
                                    </small>

                                </span>

                            </button>


                            <!-- HƯỚNG DẪN -->

                            <div class="pdf-reading-guide">

                                <div class="pdf-guide-icon">
                                    <i class="fa-solid fa-lightbulb"></i>
                                </div>

                                <div>

                                    <b>Mẹo đọc tài liệu</b>

                                    <p>
                                        Kéo thanh cuộn trong khung
                                        PDF để xem toàn bộ tài liệu.
                                    </p>

                                </div>

                            </div>

                        </div>


                        <!-- =================================
                             DANH SÁCH 6 MODULE
                             ================================= -->

                        <div class="pdf-module-switcher">

                            <div class="pdf-switcher-title">

                                <i class="fa-solid fa-layer-group"></i>

                                6 MODULE LÝ THUYẾT

                            </div>

                            <div class="pdf-switcher-list">

                                ${theoryModules.map(function (item) {

                                    const active =
                                        item.id === module.id
                                            ? "active"
                                            : "";

                                    return `

                                        <button
                                            type="button"
                                            class="pdf-switcher-item ${active}"
                                            onclick="openTheoryModule('${item.id}')"
                                        >

                                            <span class="pdf-switcher-number">
                                                ${item.number}
                                            </span>

                                            <span class="pdf-switcher-name">
                                                ${escapeHTML(
                                                    item.title.replace(
                                                        /^Module\\s*\\d+\\s*:\\s*/i,
                                                        ""
                                                    )
                                                )}
                                            </span>

                                            <i class="fa-solid fa-chevron-right"></i>

                                        </button>

                                    `;

                                }).join("")}

                            </div>

                        </div>

                    </aside>

                </div>

            </article>

        </div>

    `;

    openOtherPage(html);

}


/* =========================================================
   🖨️ IN PDF MODULE
   ========================================================= */

function printModulePDF(pdfURL) {

    const printWindow = window.open(
        pdfURL,
        "_blank"
    );

    if (!printWindow) {

        showToast(
            "Trình duyệt đang chặn cửa sổ in. Hãy cho phép popup."
        );

        return;
    }

    setTimeout(function () {

        try {
            printWindow.focus();
            printWindow.print();
        } catch (error) {
            console.log(
                "Không thể mở hộp thoại in:",
                error
            );
        }

    }, 1200);

}


/* =========================================================
   ⛶ TOÀN MÀN HÌNH PDF
   ========================================================= */

function fullscreenModulePDF() {

    const viewer =
        document.getElementById(
            "pdfViewerWrapper"
        );

    if (!viewer) return;


    if (document.fullscreenElement) {

        document.exitFullscreen();

    } else if (viewer.requestFullscreen) {

        viewer.requestFullscreen();

    } else {

        showToast(
            "Trình duyệt không hỗ trợ chế độ toàn màn hình."
        );

    }

}

/* =========================================================
   ⭐ BỔ SUNG BÀI TẬP - GIỮ NGUYÊN VIDEO GỐC
   ========================================================= */


/* =========================================================
   1. FILE BÀI TẬP
   ========================================================= */

const EXTRA_EXERCISES_SAFE = {

    powerpoint: [
        "Bài tập PowerPoint 1,2,3,4.pdf"
        
    ],

    excel: [
        "Bài tập Excel 1,2,3,4.pdf"
       
    ],

    word: [
       
        "Bài tập Word 1,2,3,4.pdf"
    ]

};


/* =========================================================
   2. GẮN FILE BÀI TẬP VÀO LESSONS
   KHÔNG THAY VIDEO
   ========================================================= */

(function addExerciseFilesSafely() {

    if (
        typeof lessons === "undefined"
    ) {
        return;
    }


    Object.keys(
        EXTRA_EXERCISES_SAFE
    ).forEach(function(category) {

        if (!lessons[category]) {
            return;
        }


        lessons[category].forEach(
            function(lesson, index) {

                if (
                    EXTRA_EXERCISES_SAFE[
                        category
                    ][index]
                ) {

                    lesson.exerciseFile =
                        EXTRA_EXERCISES_SAFE[
                            category
                        ][index];

                }

            }
        );

    });

})();


/* =========================================================
   3. THÊM NÚT TẢI BÀI TẬP VÀO TRANG VIDEO
   KHÔNG GHI ĐÈ renderLesson
   ========================================================= */

function addExerciseDownloadToLesson() {

    if (
        typeof currentLesson ===
        "undefined" ||
        !currentLesson
    ) {
        return;
    }


    const fileContainer =
        document.getElementById(
            "fileContainer"
        );


    if (!fileContainer) {
        return;
    }


    /*
     * Xóa nút cũ nếu có
     * để không bị lặp khi chuyển bài.
     */

    const oldBox =
        document.getElementById(
            "exerciseDownloadBox"
        );


    if (oldBox) {
        oldBox.remove();
    }


    if (
        !currentLesson.exerciseFile
    ) {
        return;
    }


    const box =
        document.createElement(
            "div"
        );


    box.id =
        "exerciseDownloadBox";


    box.className =
        "safe-exercise-download-box";


    box.innerHTML = `

        <div class="safe-exercise-left">

            <div class="safe-exercise-icon">

                <i class="fa-solid fa-pen-to-square"></i>

            </div>


            <div class="safe-exercise-text">

                <span>
                    BÀI TẬP THỰC HÀNH
                </span>

                <strong>
                    ${currentLesson.exerciseFile}
                </strong>

                <small>
                    Tài liệu bài tập của bài học này
                </small>

            </div>

        </div>


        <a
            href="${encodeURI(
                currentLesson.exerciseFile
            )}"
            download
            class="safe-exercise-download"
        >

            <i class="fa-solid fa-download"></i>

            Tải bài tập

        </a>

    `;


    fileContainer.appendChild(
        box
    );

}


/* =========================================================
   4. CHỜ RENDER VIDEO GỐC XONG RỒI MỚI THÊM BÀI TẬP
   ========================================================= */

(function hookExerciseDownload() {

    if (
        typeof window.renderLesson !==
        "function"
    ) {
        return;
    }


    const originalRenderLesson =
        window.renderLesson;


    /*
     * Lưu hàm gốc.
     * Hàm gốc vẫn tạo VIDEO bình thường.
     */

    window.renderLesson =
        function() {

            /*
             * ⭐ CHẠY HÀM GỐC
             */

            originalRenderLesson.apply(
                this,
                arguments
            );


            /*
             * ⭐ SAU KHI VIDEO + FILE
             * ĐÃ ĐƯỢC TẠO THÌ THÊM
             * NÚT TẢI BÀI TẬP
             */

            setTimeout(
                function() {

                    addExerciseDownloadToLesson();

                },
                50
            );

        };

})();


/* =========================================================
   5. TRANG XEM FILE PDF
   ========================================================= */

function openExercisePDFSafe(
    file,
    title
) {

    const url =
        encodeURI(file);


    const html = `

        <div class="safe-pdf-page">


            <button
                class="safe-pdf-back"
                onclick="openDocuments()"
            >

                <i class="fa-solid fa-arrow-left"></i>

                Quay lại

            </button>


            <div class="safe-pdf-header">

                <div class="safe-pdf-header-icon">

                    <i class="fa-solid fa-file-pdf"></i>

                </div>


                <div>

                    <span>
                        BÀI TẬP
                    </span>

                    <h1>
                        ${title}
                    </h1>

                </div>

            </div>


            <div class="safe-pdf-layout">


                <div class="safe-pdf-viewer">

                    <div class="safe-pdf-bar">

                        <span>

                            <i class="fa-solid fa-file-pdf"></i>

                            ${file}

                        </span>

                        <span>
                            Đang xem tài liệu
                        </span>

                    </div>


                    <iframe
                        src="${url}"
                        class="safe-pdf-frame"
                    ></iframe>

                </div>


                <div class="safe-pdf-tools">

                    <h3>

                        <i class="fa-solid fa-toolbox"></i>

                        Công cụ

                    </h3>


                    <a
                        href="${url}"
                        download
                        class="safe-pdf-tool download"
                    >

                        <i class="fa-solid fa-download"></i>

                        <div>

                            <b>
                                Tải file
                            </b>

                            <small>
                                Lưu bài tập về máy
                            </small>

                        </div>

                    </a>


                    <button
                        class="safe-pdf-tool print"
                        onclick="
                            window.open(
                                '${url}',
                                '_blank'
                            ).print()
                        "
                    >

                        <i class="fa-solid fa-print"></i>

                        <div>

                            <b>
                                In tài liệu
                            </b>

                            <small>
                                In bài tập
                            </small>

                        </div>

                    </button>


                    <button
                        class="safe-pdf-tool fullscreen"
                        onclick="
                            document
                                .querySelector('.safe-pdf-viewer')
                                .requestFullscreen()
                        "
                    >

                        <i class="fa-solid fa-expand"></i>

                        <div>

                            <b>
                                Toàn màn hình
                            </b>

                            <small>
                                Mở rộng tài liệu
                            </small>

                        </div>

                    </button>

                </div>


            </div>

        </div>

    `;


    openOtherPage(
        html
    );

}


/* =========================================================
   6. TRANG BÀI TẬP
   ========================================================= */

function renderSafeExerciseGroups() {

    const groups = [

        {
            key: "powerpoint",
            name: "PowerPoint",
            icon: "fa-file-powerpoint",
            color: "#f4511e"
        },

        {
            key: "excel",
            name: "Excel",
            icon: "fa-file-excel",
            color: "#16a34a"
        },

        {
            key: "word",
            name: "Word",
            icon: "fa-file-word",
            color: "#2563eb"
        }

    ];


    return groups.map(
        function(group) {

            const files =
                EXTRA_EXERCISES_SAFE[
                    group.key
                ];


            const list =
                files.map(
                    function(file, index) {

                        return `

                            <div
                                class="safe-exercise-item"
                            >

                                <div
                                    class="safe-exercise-number"
                                >

                                    ${String(
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}

                                </div>


                                <div
                                    class="safe-exercise-name"
                                >

                                    <strong>
                                        ${group.name}
                                        - Bài tập ${index + 1}
                                    </strong>

                                    <span>
                                        ${file}
                                    </span>

                                </div>


                                <button
                                    class="safe-exercise-view"
                                    onclick="
                                        openExercisePDFSafe(
                                            '${file}',
                                            '${group.name} - Bài tập ${index + 1}'
                                        )
                                    "
                                >

                                    <i class="fa-solid fa-eye"></i>

                                    Nhấn vào đây để xem đề

                                </button>

                            </div>

                        `;

                    }
                ).join("");


            return `

                <div
                    class="safe-exercise-group"
                >

                    <button
                        class="safe-exercise-group-header"
                        onclick="
                            this
                                .parentElement
                                .classList
                                .toggle('opened')
                        "
                    >

                        <div
                            class="safe-group-icon"
                            style="background:${group.color}"
                        >

                            <i
                                class="fa-solid ${group.icon}"
                            ></i>

                        </div>


                        <div
                            class="safe-group-title"
                        >

                            <strong>
                                ${group.name}
                            </strong>

                            <span>
                                04 bài tập
                            </span>

                        </div>


                        <i
                            class="fa-solid fa-chevron-down"
                        ></i>

                    </button>


                    <div
                        class="safe-exercise-list"
                    >

                        ${list}

                    </div>

                </div>

            `;

        }
    ).join("");

}


/* =========================================================
   7. KHÔNG THAY OPENLESSON
   CHỈ THÊM HỆ THỐNG BÀI TẬP
   ========================================================= */

console.log(
    "✅ Đã bổ sung bài tập mà KHÔNG ghi đè hệ thống video."
);


/* =========================================================
   🚀🚀🚀 NÂNG CẤP TRANG ĐỀ THI & TÀI LIỆU
   3 BỘ:
   1. ĐỀ THI
   2. LÝ THUYẾT
   3. BÀI TẬP

   ⚠️ KHÔNG ĐỤNG renderLesson()
   ⚠️ KHÔNG ĐỤNG VIDEO
   ⚠️ KHÔNG ĐỤNG 6 MODULE HIỆN TẠI
   ========================================================= */


/* =========================================================
   📚 FILE LÝ THUYẾT POWERPOINT / EXCEL / WORD
   ========================================================= */

const EXTRA_THEORY_FILES_V2 = [

    {
        id: "extra-theory-powerpoint",
        title: "Lý thuyết PowerPoint",
        description:
            "Tài liệu lý thuyết tổng hợp PowerPoint",
        file: "Ly-thuyet-PowerPoint.pdf",
        icon: "fa-file-powerpoint",
        type: "POWERPOINT"
    },

    {
        id: "extra-theory-excel",
        title: "Lý thuyết Excel",
        description:
            "Tài liệu lý thuyết tổng hợp Excel",
        file: "Ly-thuyet-Excel.pdf",
        icon: "fa-file-excel",
        type: "EXCEL"
    },

    {
        id: "extra-theory-word",
        title: "Lý thuyết Word",
        description:
            "Tài liệu lý thuyết tổng hợp Word",
        file: "Ly-thuyet-Word.pdf",
        icon: "fa-file-word",
        type: "WORD"
    }

];


/* =========================================================
   ✏️ 12 FILE BÀI TẬP
   ========================================================= */

const EXTRA_EXERCISES_V2 = {

    powerpoint: [

        {
            title: "Bài tập PowerPoint 1,2,3,4",
            file: "Bài tập PowerPoint 1,2,3,4.pdf"
        }

    ],


    excel: [

        {
            title: "Bài tập Excel 1,2,3,4",
            file: "Bài tập Excel 1,2,3,4.pdf"
        }

    ],


    word: [

        {
            title: "Bài tập Word 1,2,3,4",
            file: "Bài tập Word 1,2,3,4.pdf"
        }

       

    ]

};


/* =========================================================
   📖 MỞ FILE BÀI TẬP / LÝ THUYẾT
   ========================================================= */

function openExtraPDF_V2(
    file,
    title
) {

    const url =
        encodeURI(file);


    const html = `

        <div class="v2-document-page">

            <!-- QUAY LẠI -->

            <button
                type="button"
                class="v2-document-back"
                onclick="openDocuments()"
            >

                <i
                    class="fa-solid fa-arrow-left"
                ></i>

                Quay lại Đề thi & Tài liệu

            </button>


            <!-- TIÊU ĐỀ -->

            <div class="v2-document-heading">

                <div
                    class="v2-document-heading-icon"
                >

                    <i
                        class="fa-solid fa-file-pdf"
                    ></i>

                </div>


                <div>

                    <span>
                        TÀI LIỆU HỌC TẬP
                    </span>

                    <h1>
                        ${escapeHTML(title)}
                    </h1>

                </div>

            </div>


            <!-- KHUNG -->

            <div
                class="v2-document-layout"
            >


                <!-- =====================
                     KHUNG XEM FILE
                     ===================== -->

                <section
                    class="v2-document-viewer"
                >

                    <div
                        class="v2-viewer-toolbar"
                    >

                        <div>

                            <i
                                class="fa-solid fa-file-pdf"
                            ></i>

                            <strong>
                                ${escapeHTML(file)}
                            </strong>

                        </div>


                        <span>

                            <i
                                class="fa-solid fa-circle"
                            ></i>

                            Đang đọc trực tuyến

                        </span>

                    </div>


                    <iframe
                        src="${url}"
                        class="v2-pdf-frame"
                        title="${escapeHTML(title)}"
                    ></iframe>

                </section>


                <!-- =====================
                     CỘT CÔNG CỤ
                     ===================== -->

                <aside
                    class="v2-document-tools"
                >

                    <div
                        class="v2-tools-header"
                    >

                        <i
                            class="fa-solid fa-toolbox"
                        ></i>

                        <div>

                            <strong>
                                CÔNG CỤ
                            </strong>

                            <span>
                                Tài liệu
                            </span>

                        </div>

                    </div>


                    <!-- TẢI -->

                    <a
                        href="${url}"
                        download
                        class="v2-tool download"
                    >

                        <div
                            class="v2-tool-icon"
                        >

                            <i
                                class="fa-solid fa-download"
                            ></i>

                        </div>


                        <div>

                            <strong>
                                Tải file
                            </strong>

                            <small>
                                Lưu tài liệu về máy
                            </small>

                        </div>

                    </a>


                    <!-- IN -->

                    <button
                        type="button"
                        class="v2-tool print"
                        onclick="
                            const printWindow =
                                window.open(
                                    '${url}',
                                    '_blank'
                                );

                            if(printWindow){

                                printWindow.onload =
                                    function(){

                                        printWindow.print();

                                    };

                            }
                        "
                    >

                        <div
                            class="v2-tool-icon"
                        >

                            <i
                                class="fa-solid fa-print"
                            ></i>

                        </div>


                        <div>

                            <strong>
                                In tài liệu
                            </strong>

                            <small>
                                In toàn bộ file
                            </small>

                        </div>

                    </button>


                    <!-- TOÀN MÀN HÌNH -->

                    <button
                        type="button"
                        class="v2-tool fullscreen"
                        onclick="
                            const reader =
                                document.querySelector(
                                    '.v2-document-viewer'
                                );

                            if(reader){
                                reader.requestFullscreen();
                            }
                        "
                    >

                        <div
                            class="v2-tool-icon"
                        >

                            <i
                                class="fa-solid fa-expand"
                            ></i>

                        </div>


                        <div>

                            <strong>
                                Toàn màn hình
                            </strong>

                            <small>
                                Mở rộng khung đọc
                            </small>

                        </div>

                    </button>


                    <div
                        class="v2-reading-note"
                    >

                        <i
                            class="fa-solid fa-circle-info"
                        ></i>

                        <span>
                            Kéo thanh cuộn trong
                            khung tài liệu để đọc
                            toàn bộ nội dung.
                        </span>

                    </div>

                </aside>

            </div>

        </div>

    `;


    openOtherPage(html);

}


/* =========================================================
   📚 TẠO 3 Ô LÝ THUYẾT
   ========================================================= */

function renderExtraTheory_V2() {

    return `

        <div class="v2-theory-extra-grid">

            ${EXTRA_THEORY_FILES_V2
                .map(function(item){

                    return `

                        <article
                            class="
                                v2-theory-extra-card
                                ${item.type.toLowerCase()}
                            "
                            onclick="
                                openExtraPDF_V2(
                                    '${item.file}',
                                    '${item.title}'
                                )
                            "
                        >

                            <div
                                class="v2-extra-icon"
                            >

                                <i
                                    class="fa-solid ${item.icon}"
                                ></i>

                            </div>


                            <div
                                class="v2-extra-info"
                            >

                                <span>
                                    ${item.type}
                                </span>

                                <h3>
                                    ${item.title}
                                </h3>

                                <p>
                                    ${item.description}
                                </p>

                            </div>


                            <div
                                class="v2-extra-arrow"
                            >

                                <i
                                    class="fa-solid fa-arrow-right"
                                ></i>

                            </div>

                        </article>

                    `;

                })
                .join("")}

        </div>

    `;

}


/* =========================================================
   ✏️ TẠO 3 BỘ BÀI TẬP
   ========================================================= */

function renderExtraExercises_V2() {

    const groups = [

        {
            key: "powerpoint",
            name: "PowerPoint",
            type: "POWERPOINT",
            icon: "fa-file-powerpoint",
            className: "powerpoint"
        },

        {
            key: "excel",
            name: "Excel",
            type: "EXCEL",
            icon: "fa-file-excel",
            className: "excel"
        },

        {
            key: "word",
            name: "Word",
            type: "WORD",
            icon: "fa-file-word",
            className: "word"
        }

    ];


    return `

        <div
            class="v2-exercise-groups"
        >

            ${groups.map(function(group){

                const exercises =
                    EXTRA_EXERCISES_V2[
                        group.key
                    ];


                return `

                    <article
                        class="
                            v2-exercise-group
                            ${group.className}
                        "
                    >


                        <!-- HEADER -->

                        <button
                            type="button"
                            class="v2-exercise-header"
                            onclick="
                                this
                                .closest('.v2-exercise-group')
                                .classList
                                .toggle('opened')
                            "
                        >

                            <div
                                class="v2-exercise-icon"
                            >

                                <i
                                    class="fa-solid ${group.icon}"
                                ></i>

                            </div>


                            <div
                                class="v2-exercise-title"
                            >

                                <span>
                                    ${group.type}
                                </span>

                                <strong>
                                    ${group.name}
                                </strong>

                                <small>
                                    04 bài tập
                                </small>

                            </div>


                            <i
                                class="
                                    fa-solid
                                    fa-chevron-down
                                    v2-exercise-chevron
                                "
                            ></i>

                        </button>


                        <!-- DANH SÁCH -->

                        <div
                            class="v2-exercise-list"
                        >

                            ${exercises
                                .map(function(
                                    exercise,
                                    index
                                ){

                                    return `

                                        <div
                                            class="
                                                v2-exercise-item
                                            "
                                        >

                                            <div
                                                class="
                                                    v2-exercise-number
                                                "
                                            >
                                                ${String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>


                                            <div
                                                class="
                                                    v2-exercise-file
                                                "
                                            >

                                                <strong>
                                                    ${exercise.title}
                                                </strong>

                                                <small>
                                                    ${exercise.file}
                                                </small>

                                            </div>


                                            <button
                                                type="button"
                                                class="
                                                    v2-view-exercise
                                                "
                                                onclick="
                                                    event.stopPropagation();

                                                    openExtraPDF_V2(
                                                        '${exercise.file}',
                                                        '${exercise.title}'
                                                    );
                                                "
                                            >

                                                <i
                                                    class="
                                                        fa-solid
                                                        fa-eye
                                                    "
                                                ></i>

                                                Nhấn vào đây
                                                để xem đề

                                            </button>

                                        </div>

                                    `;

                                })
                                .join("")}

                        </div>

                    </article>

                `;

            }).join("")}

        </div>

    `;

}


/* =========================================================
   📑 BỘ ĐỀ THI
   ========================================================= */

function renderExamBundle_V2() {

    return `

        <div
            class="v2-exam-list"
        >

            ${resourceExams
                .map(function(exam){

                    return `

                        <article
                            class="v2-exam-item"
                        >

                            <div
                                class="v2-exam-icon"
                            >

                                <i
                                    class="
                                        fa-solid
                                        ${exam.icon}
                                    "
                                ></i>

                            </div>


                            <div
                                class="v2-exam-info"
                            >

                                <strong>
                                    ${escapeHTML(
                                        exam.title
                                    )}
                                </strong>

                                <small>
                                    ${escapeHTML(
                                        exam.description
                                    )}
                                    • ${exam.type}
                                </small>

                            </div>


                            <button
                                type="button"
                                class="v2-exam-open"
                                onclick="
                                    openResourceFile(
                                        '${escapeHTML(
                                            exam.file
                                        )}',
                                        '${escapeHTML(
                                            exam.title
                                        )}'
                                    )
                                "
                            >

                                <i
                                    class="
                                        fa-solid
                                        fa-eye
                                    "
                                ></i>

                                Xem

                            </button>

                        </article>

                    `;

                })
                .join("")}

        </div>

    `;

}


/* =========================================================
   📚 6 MODULE HIỆN TẠI
   ========================================================= */

function renderSixModules_V2() {

    return `

        <div
            class="v2-six-module-grid"
        >

            ${theoryModules
                .map(function(module){

                    return `

                        <article
                            class="v2-module-item"
                            onclick="
                                openTheoryModule(
                                    '${module.id}'
                                )
                            "
                        >

                            <div
                                class="v2-module-number"
                            >

                                ${module.number}

                            </div>


                            <div
                                class="v2-module-info"
                            >

                                <strong>
                                    ${escapeHTML(
                                        module.title
                                    )}
                                </strong>

                                <small>
                                    ${escapeHTML(
                                        module.description
                                    )}
                                </small>

                            </div>


                            <i
                                class="
                                    fa-solid
                                    fa-chevron-right
                                "
                            ></i>

                        </article>

                    `;

                })
                .join("")}

        </div>

    `;

}


/* =========================================================
   🚀 OPEN DOCUMENTS MỚI
   ========================================================= */

function openDocuments() {


    const html = `

        <div
            class="v2-documents-page"
        >


            <!-- =================================================
                 HEADER
                 ================================================= -->

            <section
                class="v2-documents-hero"
            >

                <div
                    class="v2-hero-icon"
                >

                    <i
                        class="
                            fa-solid
                            fa-folder-open
                        "
                    ></i>

                </div>


                <div>

                    <span>
                        KHO TÀI LIỆU HỌC TẬP
                    </span>

                    <h1>
                        ĐỀ THI & TÀI LIỆU
                    </h1>

                    <p>
                        Đề thi · Lý thuyết · Bài tập
                    </p>

                </div>

            </section>



            <!-- =================================================
                 BỘ 1 — ĐỀ THI
                 ================================================= -->

            <section
                class="
                    v2-resource-bundle
                    v2-exam-bundle
                "
            >

                <header
                    class="v2-bundle-header"
                >

                    <div
                        class="v2-bundle-header-icon"
                    >

                        <i
                            class="
                                fa-solid
                                fa-file-circle-check
                            "
                        ></i>

                    </div>


                    <div>

                        <span>
                            BỘ 01
                        </span>

                        <h2>
                            ĐỀ THI
                        </h2>

                        <p>
                            Đề luyện tập và đề tham khảo
                        </p>

                    </div>

                </header>


                ${renderExamBundle_V2()}

            </section>



            <!-- =================================================
                 BỘ 2 — LÝ THUYẾT
                 ================================================= -->

            <section
                class="
                    v2-resource-bundle
                    v2-theory-bundle
                "
            >

                <header
                    class="v2-bundle-header"
                >

                    <div
                        class="v2-bundle-header-icon"
                    >

                        <i
                            class="
                                fa-solid
                                fa-book-open
                            "
                        ></i>

                    </div>


                    <div>

                        <span>
                            BỘ 02
                        </span>

                        <h2>
                            LÝ THUYẾT
                        </h2>

                        <p>
                            6 module + lý thuyết PowerPoint,
                            Excel và Word
                        </p>

                    </div>

                </header>


                <!-- 6 MODULE -->

                <div
                    class="v2-subtitle"
                >

                    <div>

                        <i
                            class="
                                fa-solid
                                fa-layer-group
                            "
                        ></i>

                        <strong>
                            06 MODULE ÔN TẬP
                        </strong>

                    </div>

                    <span>
                        Nhấn module để đọc file
                    </span>

                </div>


                ${renderSixModules_V2()}


                <!-- 3 LÝ THUYẾT -->

                <div
                    class="v2-subtitle v2-theory-subtitle"
                >

                    <div>

                        <i
                            class="
                                fa-solid
                                fa-book
                            "
                        ></i>

                        <strong>
                            LÝ THUYẾT POWERPOINT · EXCEL · WORD
                        </strong>

                    </div>

                </div>


                ${renderExtraTheory_V2()}

            </section>



            <!-- =================================================
                 BỘ 3 — BÀI TẬP
                 ================================================= -->

            <section
                class="
                    v2-resource-bundle
                    v2-exercise-bundle
                "
            >

                <header
                    class="v2-bundle-header"
                >

                    <div
                        class="v2-bundle-header-icon"
                    >

                        <i
                            class="
                                fa-solid
                                fa-pen-to-square
                            "
                        ></i>

                    </div>


                    <div>

                        <span>
                            BỘ 03
                        </span>

                        <h2>
                            BÀI TẬP
                        </h2>

                        <p>
                            Bài tập thực hành PowerPoint,
                            Excel và Word
                        </p>

                    </div>

                </header>


                <div
                    class="v2-exercise-note"
                >

                    <i
                        class="
                            fa-solid
                            fa-hand-pointer
                        "
                    ></i>

                    <span>
                        Nhấn vào PowerPoint, Excel hoặc Word
                        để mở rộng danh sách 04 bài tập.
                    </span>

                </div>


                ${renderExtraExercises_V2()}

            </section>


        </div>

    `;


    openOtherPage(html);

}
/* =========================================================
   🔽 3 BỘ LỚN — CLICK ĐỂ XỔ / THU
   ========================================================= */

document.addEventListener("click", function(e){

    const header =
        e.target.closest(
            ".v2-resource-bundle > .v2-bundle-header"
        );

    if(!header) return;

    const bundle =
        header.closest(
            ".v2-resource-bundle"
        );

    if(!bundle) return;

    bundle.classList.toggle("opened");

});



/* =========================================================
   FIX TẢI FILE PDF MODULE TRẮC NGHIỆM
   =========================================================
   - Bấm "Tải về" -> tải file trực tiếp về máy
   - Không mở PDF trong tab mới
   - Giữ nguyên tên file
   - Áp dụng cho các nút .pdf-download
   - Không cần sửa code cũ
   ========================================================= */

(function () {

    /* -----------------------------------------------------
       HÀM TẢI FILE PDF
       ----------------------------------------------------- */

    async function downloadPDFDirectly(url, fileName, button) {

        if (!url) {
            alert("Không tìm thấy file PDF.");
            return;
        }

        /* Lưu nội dung nút ban đầu */
        const oldHTML = button.innerHTML;

        try {

            /* Trạng thái đang tải */
            button.style.pointerEvents = "none";

            button.innerHTML = `
                <span class="pdf-tool-button-icon">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                </span>

                <span class="pdf-tool-button-text">
                    <b>Đang tải...</b>
                    <small>Vui lòng chờ</small>
                </span>
            `;

            /* ---------------------------------------------
               Lấy file PDF
               --------------------------------------------- */

            const response = await fetch(url, {
                method: "GET",
                cache: "no-store"
            });

            if (!response.ok) {
                throw new Error(
                    "Không thể tải file PDF."
                );
            }

            /* Chuyển thành Blob */
            const blob = await response.blob();

            /* Tạo URL tạm */
            const blobURL =
                window.URL.createObjectURL(blob);

            /* ---------------------------------------------
               TẠO FILE DOWNLOAD
               --------------------------------------------- */

            const downloadLink =
                document.createElement("a");

            downloadLink.href = blobURL;

            /*
             * Lấy đúng tên file
             */
            downloadLink.download =
                fileName ||
                decodeURIComponent(
                    url.split("/").pop()
                );

            /* Ẩn link */
            downloadLink.style.display = "none";

            document.body.appendChild(
                downloadLink
            );

            /* Tự động tải */
            downloadLink.click();

            /* Xóa link */
            document.body.removeChild(
                downloadLink
            );

            /* Giải phóng bộ nhớ */
            setTimeout(function () {

                window.URL.revokeObjectURL(
                    blobURL
                );

            }, 1500);


            /* ---------------------------------------------
               THÔNG BÁO THÀNH CÔNG
               --------------------------------------------- */

            if (
                typeof showToast === "function"
            ) {

                showToast(
                    "✓ Đã tải tài liệu về máy."
                );

            }


        } catch (error) {

            console.error(
                "Lỗi tải PDF:",
                error
            );


            /* ---------------------------------------------
               FALLBACK
               Nếu trình duyệt không cho fetch
               --------------------------------------------- */

            const fallback =
                document.createElement("a");

            fallback.href = url;

            fallback.download =
                fileName ||
                decodeURIComponent(
                    url.split("/").pop()
                );

            fallback.style.display =
                "none";

            document.body.appendChild(
                fallback
            );

            fallback.click();

            document.body.removeChild(
                fallback
            );


            if (
                typeof showToast === "function"
            ) {

                showToast(
                    "Đang tải tài liệu về máy..."
                );

            }

        } finally {

            /* Trả nút về ban đầu */

            button.innerHTML =
                oldHTML;

            button.style.pointerEvents =
                "";

        }

    }



    /* =====================================================
       BẮT TẤT CẢ NÚT "TẢI VỀ"
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            /*
             * Tìm nút tải PDF
             */
            const button =
                event.target.closest(
                    ".pdf-download"
                );


            /*
             * Không phải nút PDF
             * -> bỏ qua
             */
            if (!button) {
                return;
            }


            /*
             * Ngăn link mặc định
             * Không cho trình duyệt mở PDF
             */
            event.preventDefault();

            event.stopPropagation();


            /* ---------------------------------------------
               LẤY ĐƯỜNG DẪN FILE
               --------------------------------------------- */

            const url =
                button.getAttribute(
                    "href"
                );


            if (!url) {

                if (
                    typeof showToast ===
                    "function"
                ) {

                    showToast(
                        "Không tìm thấy file PDF."
                    );

                }

                return;
            }


            /* ---------------------------------------------
               LẤY TÊN FILE
               --------------------------------------------- */

            let fileName =
                button.getAttribute(
                    "download"
                );


            /*
             * Nếu download không có tên,
             * lấy tên trực tiếp từ href
             */
            if (
                !fileName ||
                fileName === ""
            ) {

                try {

                    fileName =
                        decodeURIComponent(
                            url
                                .split("/")
                                .pop()
                                .split("?")[0]
                        );

                } catch (e) {

                    fileName =
                        url
                            .split("/")
                            .pop();

                }

            }


            /* ---------------------------------------------
               TẢI FILE
               --------------------------------------------- */

            downloadPDFDirectly(
                url,
                fileName,
                button
            );

        },
        true
    );


    /* =====================================================
       XỬ LÝ CÁC NÚT PDF ĐƯỢC TẠO SAU KHI LOAD TRANG
       ===================================================== */

    function fixExistingPDFButtons() {

        const buttons =
            document.querySelectorAll(
                ".pdf-download"
            );


        buttons.forEach(function (button) {

            /*
             * Đánh dấu để kiểm tra
             * không cần chỉnh HTML
             */

            button.setAttribute(
                "data-direct-download",
                "true"
            );

        });

    }


    /* Chạy ngay */
    fixExistingPDFButtons();


    /*
     * Chạy lại khi giao diện thay đổi
     * vì Module được tạo bằng JavaScript
     */

    const observer =
        new MutationObserver(
            function () {

                fixExistingPDFButtons();

            }
        );


    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );


})();






/* ============================================================
   🚀 FIX CUỐI CÙNG
   ĐỀ THI + TẢI PDF TRỰC TIẾP
   6 MODULE + XEM PDF ONLINE
   ============================================================ */

(function () {

    /* ========================================================
       1. HÀM TẢI PDF TRỰC TIẾP
       KHÔNG ĐI QUA openFile()
       ======================================================== */

    window.downloadPDFDirect = async function (fileName) {

        if (!fileName) {
            if (typeof showToast === "function") {
                showToast("Không tìm thấy file PDF.");
            }
            return;
        }

        const cleanName = String(fileName)
            .split("/")
            .pop()
            .split("?")[0];

        try {

            if (typeof showToast === "function") {
                showToast("Đang chuẩn bị tải tài liệu...");
            }

            const response = await fetch(
                encodeURI(fileName),
                {
                    method: "GET",
                    cache: "no-cache"
                }
            );

            if (!response.ok) {
                throw new Error(
                    "HTTP " + response.status
                );
            }

            const blob =
                await response.blob();

            const blobURL =
                URL.createObjectURL(blob);

            const a =
                document.createElement("a");

            a.href = blobURL;
            a.download = cleanName;
            a.style.display = "none";

            document.body.appendChild(a);

            a.click();

            a.remove();

            setTimeout(function () {
                URL.revokeObjectURL(blobURL);
            }, 3000);

            if (typeof showToast === "function") {
                showToast(
                    "Đã gửi lệnh tải PDF về máy."
                );
            }

        } catch (error) {

            console.error(
                "Không thể tải PDF:",
                error
            );

            /*
             * Fallback:
             * Không gọi openFile().
             * Thử download trực tiếp bằng trình duyệt.
             */

            const a =
                document.createElement("a");

            a.href =
                encodeURI(fileName);

            a.download =
                cleanName;

            a.style.display =
                "none";

            document.body.appendChild(a);

            a.click();

            a.remove();

            if (typeof showToast === "function") {
                showToast(
                    "Trình duyệt đang xử lý tải file..."
                );
            }
        }
    };


    /* ========================================================
       2. LẤY MODULE
       ======================================================== */

    window.getPDFTheoryModule =
        function (moduleId) {

            if (
                typeof theoryModules === "undefined" ||
                !Array.isArray(theoryModules)
            ) {
                return null;
            }

            return theoryModules.find(
                function (module) {
                    return module.id === moduleId;
                }
            ) || null;
        };


    /* ========================================================
       3. RENDER DANH SÁCH ĐỀ THI
       NÚT TẢI VỀ KHÔNG GỌI openResourceFile()
       ======================================================== */

    window.renderExamBundle_V2 =
        function () {

            if (
                typeof resourceExams === "undefined" ||
                !Array.isArray(resourceExams)
            ) {
                return `
                    <div class="pdf-empty-message">
                        Không có đề thi.
                    </div>
                `;
            }

            return `
                <div class="v2-exam-list">

                    ${
                        resourceExams
                            .map(function (exam, index) {

                                const safeFile =
                                    encodeURIComponent(
                                        exam.file || ""
                                    );

                                return `
                                    <article
                                        class="v2-exam-item pdf-exam-card"
                                    >

                                        <div
                                            class="v2-exam-icon pdf-exam-icon"
                                        >
                                            <i
                                                class="
                                                    fa-solid
                                                    ${exam.icon || "fa-file-pdf"}
                                                "
                                            ></i>
                                        </div>

                                        <div
                                            class="v2-exam-info"
                                        >

                                            <strong>
                                                ${escapeHTML(
                                                    exam.title || "Đề thi"
                                                )}
                                            </strong>

                                            <small>
                                                ${escapeHTML(
                                                    exam.description || ""
                                                )}

                                                ${
                                                    exam.type
                                                        ? " • " +
                                                          escapeHTML(
                                                              exam.type
                                                          )
                                                        : ""
                                                }
                                            </small>

                                        </div>

                                        <button
                                            type="button"
                                            class="
                                                v2-exam-open
                                                pdf-direct-download-btn
                                            "
                                            data-pdf-file="${safeFile}"
                                            onclick="
                                                event.stopPropagation();

                                                downloadPDFDirect(
                                                    decodeURIComponent(
                                                        this.dataset.pdfFile
                                                    )
                                                );
                                            "
                                        >

                                            <i
                                                class="
                                                    fa-solid
                                                    fa-download
                                                "
                                            ></i>

                                            <span>
                                                Tải về
                                            </span>

                                        </button>

                                    </article>
                                `;

                            })
                            .join("")
                    }

                </div>
            `;
        };


    /* ========================================================
       4. RENDER 6 MODULE
       KHÔNG MỞ module.content
       MỞ TRANG PDF RIÊNG
       ======================================================== */

    window.renderSixModules_V2 =
        function () {

            if (
                typeof theoryModules === "undefined" ||
                !Array.isArray(theoryModules)
            ) {
                return `
                    <div class="pdf-empty-message">
                        Không tìm thấy Module.
                    </div>
                `;
            }

            return `
                <div class="v2-six-module-grid pdf-six-module-grid">

                    ${
                        theoryModules
                            .map(function (module) {

                                return `
                                    <article
                                        class="
                                            v2-module-item
                                            pdf-module-item
                                        "
                                        onclick="
                                            openTheoryPDFPage(
                                                '${module.id}'
                                            );
                                        "
                                    >

                                        <div
                                            class="
                                                v2-module-number
                                                pdf-module-number
                                            "
                                        >
                                            ${module.number}
                                        </div>

                                        <div
                                            class="v2-module-info"
                                        >

                                            <strong>
                                                ${escapeHTML(
                                                    module.title
                                                )}
                                            </strong>

                                            <small>
                                                ${escapeHTML(
                                                    module.description || ""
                                                )}
                                            </small>

                                        </div>

                                        <div
                                            class="pdf-module-view-button"
                                        >

                                            <i
                                                class="
                                                    fa-solid
                                                    fa-eye
                                                "
                                            ></i>

                                            <span>
                                                Xem online
                                            </span>

                                        </div>

                                    </article>
                                `;

                            })
                            .join("")
                    }

                </div>
            `;
        };


    /* ========================================================
       5. TRANG ĐỀ THI & TÀI LIỆU
       GHI ĐÈ OPEN DOCUMENTS CUỐI FILE
       ======================================================== */

    window.openDocuments =
        function () {

            const html = `

                <div
                    class="v2-documents-page pdf-documents-page"
                >

                    <!-- ================================
                         HEADER
                         ================================ -->

                    <section
                        class="
                            v2-documents-hero
                            pdf-documents-hero
                        "
                    >

                        <div
                            class="v2-hero-icon"
                        >
                            <i
                                class="
                                    fa-solid
                                    fa-folder-open
                                "
                            ></i>
                        </div>

                        <div>

                            <span>
                                KHO TÀI LIỆU HỌC TẬP
                            </span>

                            <h1>
                                ĐỀ THI & TÀI LIỆU
                            </h1>

                            <p>
                                Đề thi · Lý thuyết · Bài tập
                            </p>

                        </div>

                    </section>


                    <!-- ================================
                         BỘ 1 — ĐỀ THI
                         ================================ -->

                    <section
                        class="
                            v2-resource-bundle
                            v2-exam-bundle
                            opened
                            pdf-resource-bundle
                        "
                    >

                        <header
                            class="v2-bundle-header"
                        >

                            <div
                                class="
                                    v2-bundle-header-icon
                                "
                            >
                                <i
                                    class="
                                        fa-solid
                                        fa-file-circle-check
                                    "
                                ></i>
                            </div>

                            <div>

                                <span>
                                    BỘ 01
                                </span>

                                <h2>
                                    ĐỀ THI
                                </h2>

                                <p>
                                    Đề luyện tập và đề tham khảo
                                </p>

                            </div>

                        </header>

                        <div class="pdf-bundle-content">

                            ${window.renderExamBundle_V2()}

                        </div>

                    </section>


                    <!-- ================================
                         BỘ 2 — LÝ THUYẾT
                         ================================ -->

                    <section
                        class="
                            v2-resource-bundle
                            v2-theory-bundle
                            opened
                            pdf-resource-bundle
                        "
                    >

                        <header
                            class="v2-bundle-header"
                        >

                            <div
                                class="
                                    v2-bundle-header-icon
                                "
                            >
                                <i
                                    class="
                                        fa-solid
                                        fa-book-open
                                    "
                                ></i>
                            </div>

                            <div>

                                <span>
                                    BỘ 02
                                </span>

                                <h2>
                                    LÝ THUYẾT
                                </h2>

                                <p>
                                    06 Module lý thuyết
                                </p>

                            </div>

                        </header>


                        <div
                            class="v2-subtitle"
                        >

                            <div>

                                <i
                                    class="
                                        fa-solid
                                        fa-layer-group
                                    "
                                ></i>

                                <strong>
                                    06 MODULE ÔN TẬP
                                </strong>

                            </div>

                            <span>
                                Nhấn “Xem online” để đọc PDF
                            </span>

                        </div>


                        ${window.renderSixModules_V2()}

                    </section>


                    <!-- ================================
                         BỘ 3 — BÀI TẬP
                         GIỮ NGUYÊN
                         ================================ -->

                    <section
                        class="
                            v2-resource-bundle
                            v2-exercise-bundle
                            opened
                        "
                    >

                        <header
                            class="v2-bundle-header"
                        >

                            <div
                                class="
                                    v2-bundle-header-icon
                                "
                            >

                                <i
                                    class="
                                        fa-solid
                                        fa-pen-to-square
                                    "
                                ></i>

                            </div>

                            <div>

                                <span>
                                    BỘ 03
                                </span>

                                <h2>
                                    BÀI TẬP
                                </h2>

                                <p>
                                    Bài tập thực hành PowerPoint,
                                    Excel và Word
                                </p>

                            </div>

                        </header>

                        <div class="v2-exercise-note">

                            <i
                                class="
                                    fa-solid
                                    fa-hand-pointer
                                "
                            ></i>

                            <span>
                                Nhấn vào PowerPoint, Excel hoặc Word
                                để mở rộng danh sách bài tập.
                            </span>

                        </div>

                        ${
                            typeof renderExtraExercises_V2 ===
                            "function"
                                ? renderExtraExercises_V2()
                                : ""
                        }

                    </section>


                    <!-- ================================
                         VỀ TRẮC NGHIỆM
                         ================================ -->

                    <div
                        class="
                            pdf-documents-bottom-navigation
                        "
                    >

                        <button
                            type="button"
                            onclick="openExam()"
                        >

                            <i
                                class="
                                    fa-solid
                                    fa-list-check
                                "
                            ></i>

                            Về trang thi trắc nghiệm

                            <i
                                class="
                                    fa-solid
                                    fa-arrow-right
                                "
                            ></i>

                        </button>

                    </div>

                </div>
            `;

            openOtherPage(html);
        };


    /* ========================================================
       6. MỞ PDF MODULE
       TRANG CON RIÊNG
       ======================================================== */

    window.openTheoryPDFPage =
        function (moduleId) {

            const module =
                window.getPDFTheoryModule(
                    moduleId
                );

            if (!module) {

                if (typeof showToast === "function") {
                    showToast(
                        "Không tìm thấy Module."
                    );
                }

                return;
            }


            const pdfFile =
                module.pdf;


            if (!pdfFile) {

                if (typeof showToast === "function") {
                    showToast(
                        "Module này chưa có file PDF."
                    );
                }

                return;
            }


            const pdfURL =
                encodeURI(pdfFile);


            /* ================================================
               DANH SÁCH 6 MODULE
               ================================================ */

            const moduleNavigation =
                theoryModules
                    .map(function (item) {

                        const active =
                            item.id === module.id
                                ? "active"
                                : "";

                        return `

                            <button
                                type="button"
                                class="
                                    pdf-module-nav-item
                                    ${active}
                                "
                                onclick="
                                    openTheoryPDFPage(
                                        '${item.id}'
                                    );
                                "
                            >

                                <span
                                    class="
                                        pdf-nav-number
                                    "
                                >
                                    ${item.number}
                                </span>

                                <span
                                    class="
                                        pdf-nav-content
                                    "
                                >

                                    <strong>
                                        ${escapeHTML(
                                            item.title
                                        )}
                                    </strong>

                                    <small>
                                        ${escapeHTML(
                                            item.description || ""
                                        )}
                                    </small>

                                </span>

                                <i
                                    class="
                                        fa-solid
                                        fa-chevron-right
                                    "
                                ></i>

                            </button>

                        `;

                    })
                    .join("");


            /* ================================================
               TRANG CON
               ================================================ */

            const html = `

                <div
                    class="
                        pdf-reader-page
                        theory-detail-page
                    "
                >


                    <!-- ========================================
                         THANH ĐIỀU HƯỚNG
                         ======================================== -->

                    <div
                        class="
                            pdf-reader-navigation
                        "
                    >

                        <button
                            type="button"
                            class="
                                pdf-nav-back
                            "
                            onclick="openDocuments()"
                        >

                            <i
                                class="
                                    fa-solid
                                    fa-arrow-left
                                "
                            ></i>

                            Về Đề thi & Tài liệu

                        </button>


                        <button
                            type="button"
                            class="
                                pdf-nav-quiz
                            "
                            onclick="openExam()"
                        >

                            <i
                                class="
                                    fa-solid
                                    fa-list-check
                                "
                            ></i>

                            Về trang thi trắc nghiệm

                        </button>

                    </div>


                    <!-- ========================================
                         TIÊU ĐỀ MODULE
                         ======================================== -->

                    <section
                        class="
                            pdf-reader-header
                        "
                    >

                        <div
                            class="
                                pdf-reader-module-icon
                            "
                        >

                            <i
                                class="
                                    fa-solid
                                    ${module.icon || "fa-book"}
                                "
                            ></i>

                        </div>


                        <div
                            class="
                                pdf-reader-title
                            "
                        >

                            <span>
                                MODULE ${module.number}
                            </span>

                            <h1>
                                ${escapeHTML(
                                    module.title
                                )}
                            </h1>

                            <p>
                                ${escapeHTML(
                                    module.description || ""
                                )}
                            </p>

                        </div>

                    </section>


                    <!-- ========================================
                         PDF READER
                         ======================================== -->

                    <section
                        class="
                            pdf-reader-main
                        "
                    >

                        <div
                            class="
                                pdf-reader-toolbar
                            "
                        >

                            <div
                                class="
                                    pdf-file-information
                                "
                            >

                                <div
                                    class="
                                        pdf-file-icon-large
                                    "
                                >

                                    <i
                                        class="
                                            fa-solid
                                            fa-file-pdf
                                        "
                                    ></i>

                                </div>


                                <div>

                                    <strong>
                                        TÀI LIỆU LÝ THUYẾT
                                    </strong>

                                    <span>
                                        ${escapeHTML(
                                            pdfFile
                                        )}
                                    </span>

                                </div>

                            </div>


                            <div
                                class="
                                    pdf-reader-actions
                                "
                            >

                                <button
                                    type="button"
                                    onclick="
                                        downloadPDFDirect(
                                            '${pdfFile.replace(
                                                /'/g,
                                                "\\'"
                                            )}'
                                        );
                                    "
                                    class="
                                        pdf-action-download
                                    "
                                >

                                    <i
                                        class="
                                            fa-solid
                                            fa-download
                                        "
                                    ></i>

                                    Tải PDF

                                </button>


                                <button
                                    type="button"
                                    onclick="
                                        fullscreenPDFReader();
                                    "
                                    class="
                                        pdf-action-fullscreen
                                    "
                                >

                                    <i
                                        class="
                                            fa-solid
                                            fa-expand
                                        "
                                    ></i>

                                    Toàn màn hình

                                </button>

                            </div>

                        </div>


                        <!-- ==================================
                             KHUNG PDF
                             ================================== -->

                        <div
                            id="pdfReaderFrame"
                            class="
                                pdf-reader-frame
                            "
                        >

                            <div
                                class="
                                    pdf-loading
                                "
                            >

                                <div
                                    class="
                                        pdf-loading-spinner
                                    "
                                ></div>

                                <strong>
                                    Đang tải tài liệu...
                                </strong>

                                <span>
                                    ${escapeHTML(
                                        module.title
                                    )}
                                </span>

                            </div>


                            <iframe
                                id="theoryPDFIframe"
                                src="${pdfURL}"
                                title="${escapeHTML(
                                    module.title
                                )}"
                                class="
                                    theory-pdf-iframe
                                "
                                onload="
                                    this.previousElementSibling.style.display='none';
                                "
                            ></iframe>

                        </div>

                    </section>


                    <!-- ========================================
                         CHUYỂN MODULE
                         ======================================== -->

                    <section
                        class="
                            pdf-module-selector
                        "
                    >

                        <div
                            class="
                                pdf-module-selector-title
                            "
                        >

                            <div>

                                <i
                                    class="
                                        fa-solid
                                        fa-layer-group
                                    "
                                ></i>

                                <strong>
                                    06 MODULE LÝ THUYẾT
                                </strong>

                            </div>

                            <span>
                                Chọn module để đọc
                            </span>

                        </div>


                        <div
                            class="
                                pdf-module-navigation
                            "
                        >

                            ${moduleNavigation}

                        </div>

                    </section>


                    <!-- ========================================
                         ĐIỀU HƯỚNG CUỐI
                         ======================================== -->

                    <div
                        class="
                            pdf-reader-bottom
                        "
                    >

                        <button
                            type="button"
                            onclick="openExam()"
                        >

                            <i
                                class="
                                    fa-solid
                                    fa-arrow-left
                                "
                            ></i>

                            Về trang thi trắc nghiệm

                        </button>


                        <button
                            type="button"
                            onclick="openDocuments()"
                        >

                            <i
                                class="
                                    fa-solid
                                    fa-folder-open
                                "
                            ></i>

                            Về Đề thi & Tài liệu

                        </button>

                    </div>

                </div>

            `;


            openOtherPage(html);

        };


    /* ========================================================
       7. TOÀN MÀN HÌNH PDF
       ======================================================== */

    window.fullscreenPDFReader =
        function () {

            const frame =
                document.getElementById(
                    "pdfReaderFrame"
                );

            if (!frame) {

                if (typeof showToast === "function") {
                    showToast(
                        "Không tìm thấy khung PDF."
                    );
                }

                return;
            }


            if (
                document.fullscreenElement
            ) {

                if (
                    document.exitFullscreen
                ) {
                    document.exitFullscreen();
                }

                return;
            }


            if (
                frame.requestFullscreen
            ) {

                frame.requestFullscreen();

            } else {

                if (typeof showToast === "function") {
                    showToast(
                        "Trình duyệt không hỗ trợ toàn màn hình."
                    );
                }

            }

        };


    /* ========================================================
       8. CSS
       ======================================================== */

    if (
        document.getElementById(
            "final-pdf-system-css"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "final-pdf-system-css";


    style.textContent = `

        /* =====================================================
           NÚT TẢI ĐỀ
           ===================================================== */

        .pdf-direct-download-btn {

            display: inline-flex !important;

            align-items: center;

            justify-content: center;

            gap: 8px;

            min-width: 125px;

            cursor: pointer;

            border: none;

            transition:
                transform .25s ease,
                box-shadow .25s ease,
                filter .25s ease;

        }


        .pdf-direct-download-btn:hover {

            transform:
                translateY(-3px)
                scale(1.03);

            filter:
                brightness(1.08);

            box-shadow:
                0 12px 28px
                rgba(0,0,0,.20);

        }


        .pdf-direct-download-btn:active {

            transform:
                translateY(0)
                scale(.97);

        }


        /* =====================================================
           MODULE CARD
           ===================================================== */

        .pdf-module-item {

            position: relative;

            cursor: pointer;

            min-height: 120px;

            transition:
                transform .3s ease,
                box-shadow .3s ease;

        }


        .pdf-module-item:hover {

            transform:
                translateY(-7px);

            box-shadow:
                0 18px 38px
                rgba(15,23,42,.18);

        }


        .pdf-module-view-button {

            display: inline-flex;

            align-items: center;

            justify-content: center;

            gap: 7px;

            padding:
                10px 15px;

            margin-left: 10px;

            border-radius: 12px;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #7c3aed
                );

            color: white;

            font-size: 13px;

            font-weight: 800;

            white-space: nowrap;

            box-shadow:
                0 7px 18px
                rgba(37,99,235,.24);

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        .pdf-module-item:hover
        .pdf-module-view-button {

            transform:
                translateX(4px);

            box-shadow:
                0 10px 24px
                rgba(124,58,237,.30);

        }


        /* =====================================================
           TRANG PDF
           ===================================================== */

        .pdf-reader-page {

            width: 100%;

            max-width: 1500px;

            margin:
                0 auto;

            padding:
                20px;

            box-sizing:
                border-box;

        }


        /* =====================================================
           THANH ĐIỀU HƯỚNG
           ===================================================== */

        .pdf-reader-navigation {

            display: flex;

            justify-content: space-between;

            align-items: center;

            gap: 12px;

            flex-wrap: wrap;

            margin-bottom: 18px;

        }


        .pdf-reader-navigation button {

            border: none;

            border-radius: 14px;

            padding:
                12px 18px;

            color: white;

            font-weight: 800;

            cursor: pointer;

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        .pdf-nav-back {

            background:
                linear-gradient(
                    135deg,
                    #334155,
                    #475569
                );

        }


        .pdf-nav-quiz {

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #06b6d4
                );

        }


        .pdf-reader-navigation button:hover {

            transform:
                translateY(-3px);

            box-shadow:
                0 12px 25px
                rgba(0,0,0,.18);

        }


        /* =====================================================
           HEADER MODULE
           ===================================================== */

        .pdf-reader-header {

            display: flex;

            align-items: center;

            gap: 20px;

            padding:
                25px;

            margin-bottom: 18px;

            border-radius: 22px;

            background:
                linear-gradient(
                    135deg,
                    #eff6ff,
                    #f5f3ff,
                    #ecfeff
                );

            border:
                1px solid
                rgba(37,99,235,.15);

            box-shadow:
                0 15px 40px
                rgba(15,23,42,.08);

        }


        .pdf-reader-module-icon {

            width: 75px;

            height: 75px;

            min-width: 75px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 22px;

            color: white;

            font-size: 31px;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #7c3aed
                );

            box-shadow:
                0 12px 30px
                rgba(37,99,235,.28);

        }


        .pdf-reader-title span {

            display: inline-block;

            margin-bottom: 5px;

            color: #2563eb;

            font-size: 13px;

            font-weight: 900;

            letter-spacing:
                1.2px;

        }


        .pdf-reader-title h1 {

            margin:
                0 0 7px;

            color: #0f172a;

            font-size: clamp(
                22px,
                3vw,
                34px
            );

            line-height: 1.2;

        }


        .pdf-reader-title p {

            margin: 0;

            color: #475569;

            font-size: 15px;

        }


        /* =====================================================
           PDF MAIN
           ===================================================== */

        .pdf-reader-main {

            overflow: hidden;

            border-radius: 22px;

            background:
                #0f172a;

            box-shadow:
                0 20px 50px
                rgba(15,23,42,.22);

        }


        .pdf-reader-toolbar {

            display: flex;

            align-items: center;

            justify-content: space-between;

            gap: 15px;

            padding:
                14px 18px;

            background:
                linear-gradient(
                    135deg,
                    #111827,
                    #1e293b
                );

        }


        .pdf-file-information {

            min-width: 0;

            display: flex;

            align-items: center;

            gap: 12px;

        }


        .pdf-file-icon-large {

            width: 45px;

            height: 45px;

            min-width: 45px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 12px;

            background:
                #fee2e2;

            color:
                #dc2626;

            font-size: 21px;

        }


        .pdf-file-information strong {

            display: block;

            color: white;

            font-size: 13px;

        }


        .pdf-file-information span {

            display: block;

            max-width: 650px;

            overflow: hidden;

            text-overflow: ellipsis;

            white-space: nowrap;

            color: #cbd5e1;

            font-size: 12px;

            margin-top: 3px;

        }


        .pdf-reader-actions {

            display: flex;

            gap: 8px;

            flex-wrap: wrap;

        }


        .pdf-reader-actions button {

            display: inline-flex;

            align-items: center;

            gap: 7px;

            border: none;

            border-radius: 11px;

            padding:
                10px 14px;

            color: white;

            font-weight: 800;

            cursor: pointer;

            transition:
                transform .2s ease,
                box-shadow .2s ease;

        }


        .pdf-action-download {

            background:
                linear-gradient(
                    135deg,
                    #16a34a,
                    #22c55e
                );

        }


        .pdf-action-fullscreen {

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #7c3aed
                );

        }


        .pdf-reader-actions button:hover {

            transform:
                translateY(-2px);

            box-shadow:
                0 8px 20px
                rgba(0,0,0,.22);

        }


        /* =====================================================
           KHUNG PDF
           ===================================================== */

        .pdf-reader-frame {

            position: relative;

            width: 100%;

            height: 820px;

            background:
                #1e293b;

        }


        .theory-pdf-iframe {

            position: absolute;

            inset: 0;

            width: 100%;

            height: 100%;

            border: none;

            display: block;

            background: white;

        }


        .pdf-loading {

            position: absolute;

            z-index: 1;

            inset: 0;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            gap: 10px;

            background:
                #f8fafc;

            color:
                #334155;

        }


        .pdf-loading strong {

            font-size: 17px;

        }


        .pdf-loading span {

            color:
                #64748b;

            font-size: 13px;

            text-align: center;

            padding: 0 20px;

        }


        .pdf-loading-spinner {

            width: 42px;

            height: 42px;

            border-radius: 50%;

            border:
                4px solid
                #dbeafe;

            border-top-color:
                #2563eb;

            animation:
                pdfSpin .8s linear infinite;

        }


        @keyframes pdfSpin {

            to {
                transform:
                    rotate(360deg);
            }

        }


        /* =====================================================
           6 MODULE NAVIGATION
           ===================================================== */

        .pdf-module-selector {

            margin-top: 20px;

            padding:
                20px;

            border-radius: 20px;

            background:
                white;

            box-shadow:
                0 12px 35px
                rgba(15,23,42,.09);

        }


        .pdf-module-selector-title {

            display: flex;

            justify-content: space-between;

            align-items: center;

            gap: 10px;

            margin-bottom: 15px;

        }


        .pdf-module-selector-title div {

            display: flex;

            align-items: center;

            gap: 9px;

            color:
                #1e293b;

        }


        .pdf-module-selector-title div i {

            color:
                #2563eb;

        }


        .pdf-module-selector-title span {

            color:
                #64748b;

            font-size: 13px;

        }


        .pdf-module-navigation {

            display: grid;

            grid-template-columns:
                repeat(
                    2,
                    minmax(0, 1fr)
                );

            gap: 10px;

        }


        .pdf-module-nav-item {

            display: flex;

            align-items: center;

            gap: 12px;

            width: 100%;

            min-width: 0;

            border:
                1px solid
                #e2e8f0;

            border-radius: 15px;

            padding:
                12px;

            background:
                #f8fafc;

            cursor: pointer;

            text-align: left;

            transition:
                transform .22s ease,
                box-shadow .22s ease,
                border-color .22s ease;

        }


        .pdf-module-nav-item:hover {

            transform:
                translateY(-3px);

            box-shadow:
                0 10px 25px
                rgba(15,23,42,.10);

            border-color:
                #93c5fd;

        }


        .pdf-module-nav-item.active {

            border-color:
                #2563eb;

            background:
                linear-gradient(
                    135deg,
                    #eff6ff,
                    #f5f3ff
                );

            box-shadow:
                0 8px 22px
                rgba(37,99,235,.12);

        }


        .pdf-nav-number {

            width: 42px;

            height: 42px;

            min-width: 42px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 12px;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #7c3aed
                );

            color: white;

            font-weight: 900;

        }


        .pdf-nav-content {

            min-width: 0;

            flex: 1;

        }


        .pdf-nav-content strong {

            display: block;

            color:
                #0f172a;

            font-size: 14px;

            line-height: 1.3;

        }


        .pdf-nav-content small {

            display: block;

            margin-top: 4px;

            color:
                #64748b;

            font-size: 11px;

            line-height: 1.35;

        }


        .pdf-module-nav-item > i {

            color:
                #64748b;

        }


        .pdf-module-nav-item.active > i {

            color:
                #2563eb;

        }


        /* =====================================================
           NÚT CUỐI TRANG
           ===================================================== */

        .pdf-reader-bottom {

            display: flex;

            justify-content: center;

            gap: 12px;

            flex-wrap: wrap;

            margin-top: 20px;

        }


        .pdf-reader-bottom button {

            border: none;

            border-radius: 14px;

            padding:
                13px 20px;

            color: white;

            font-weight: 800;

            cursor: pointer;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #06b6d4
                );

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        .pdf-reader-bottom button:last-child {

            background:
                linear-gradient(
                    135deg,
                    #475569,
                    #1e293b
                );

        }


        .pdf-reader-bottom button:hover {

            transform:
                translateY(-3px);

            box-shadow:
                0 12px 25px
                rgba(0,0,0,.18);

        }


        /* =====================================================
           BOTTOM DOCUMENTS
           ===================================================== */

        .pdf-documents-bottom-navigation {

            display: flex;

            justify-content: center;

            margin-top: 25px;

            padding-bottom: 20px;

        }


        .pdf-documents-bottom-navigation button {

            display: inline-flex;

            align-items: center;

            gap: 10px;

            border: none;

            border-radius: 15px;

            padding:
                14px 22px;

            background:
                linear-gradient(
                    135deg,
                    #2563eb,
                    #06b6d4
                );

            color: white;

            font-weight: 900;

            cursor: pointer;

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        .pdf-documents-bottom-navigation button:hover {

            transform:
                translateY(-3px);

            box-shadow:
                0 14px 28px
                rgba(37,99,235,.25);

        }


        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 900px) {

            .pdf-reader-frame {

                height:
                    700px;

            }


            .pdf-module-navigation {

                grid-template-columns:
                    1fr;

            }

        }


        @media (max-width: 650px) {

            .pdf-reader-page {

                padding:
                    10px;

            }


            .pdf-reader-navigation {

                flex-direction:
                    column;

                align-items:
                    stretch;

            }


            .pdf-reader-navigation button {

                width: 100%;

            }


            .pdf-reader-header {

                padding:
                    18px;

                align-items:
                    flex-start;

            }


            .pdf-reader-module-icon {

                width: 58px;

                height: 58px;

                min-width: 58px;

                font-size:
                    23px;

            }


            .pdf-reader-title h1 {

                font-size:
                    22px;

            }


            .pdf-reader-toolbar {

                flex-direction:
                    column;

                align-items:
                    stretch;

            }


            .pdf-file-information span {

                white-space:
                    normal;

                overflow:
                    visible;

                text-overflow:
                    unset;

                word-break:
                    break-word;

            }


            .pdf-reader-actions {

                width: 100%;

            }


            .pdf-reader-actions button {

                flex: 1;

                justify-content:
                    center;

            }


            .pdf-reader-frame {

                height:
                    600px;

            }


            .pdf-module-view-button {

                min-width:
                    105px;

                padding:
                    9px 10px;

                font-size:
                    11px;

            }

        }


        @media (max-width: 480px) {

            .pdf-reader-frame {

                height:
                    560px;

            }


            .pdf-module-item {

                min-height:
                    100px;

            }


            .pdf-module-view-button span {

                display:
                    none;

            }


            .pdf-module-view-button {

                min-width:
                    42px;

                width:
                    42px;

                height:
                    42px;

                padding:
                    0;

                border-radius:
                    12px;

            }

        }

    `;


    document.head.appendChild(style);


    /* ========================================================
       9. QUAN TRỌNG:
       GHI ĐÈ NGAY TRANG HIỆN TẠI NẾU ĐANG Ở DOCUMENTS
       ======================================================== */

    console.log(
        "✅ PDF SYSTEM V2 đã được kích hoạt."
    );

})();



/* =========================================================
   🎯 THI THỬ 40 CÂU - BỔ SUNG TỪ 6 MODULE
   - 40 câu ngẫu nhiên từ module1 -> module6
   - 30 phút
   - Tạo lại đề = bộ câu hỏi mới
   - Lưu toàn bộ đề + đáp án học sinh + kết quả
   - Xem lại từng câu và nguồn Module/câu gốc
   ========================================================= */
(function () {
    const TRIAL_HISTORY_KEY = "tinHocTrialExamHistory_v1";
    const TRIAL_ACTIVE_KEY = "tinHocTrialExamActive_v1";
    const TRIAL_TOTAL = 40;
    const TRIAL_TIME = 30 * 60 * 1000;

    let trialQuestions = [];
    let trialAnswers = {};
    let trialIndex = 0;
    let trialSubmitted = false;
    let trialEndTime = 0;
    let trialHistoryId = null;
    let trialTimer = null;

    function trialUserKey() {
        try {
            if (typeof currentUser !== "undefined" &&
                currentUser &&
                currentUser.username) {
                return String(currentUser.username);
            }
        } catch (e) {}

        return "guest";
    }

    function readTrialHistory() {
        try {
            const all = JSON.parse(
                localStorage.getItem(TRIAL_HISTORY_KEY) || "{}"
            );

            return Array.isArray(all[trialUserKey()])
                ? all[trialUserKey()]
                : [];

        } catch (e) {
            return [];
        }
    }

    function writeTrialHistory(history) {

        let all = {};

        try {
            all = JSON.parse(
                localStorage.getItem(TRIAL_HISTORY_KEY) || "{}"
            );
        } catch (e) {
            all = {};
        }

        all[trialUserKey()] = history;

        localStorage.setItem(
            TRIAL_HISTORY_KEY,
            JSON.stringify(all)
        );
    }

    function shuffleTrial(arr) {

        const a = arr.slice();

        for (let i = a.length - 1; i > 0; i--) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [a[i], a[j]] =
                [a[j], a[i]];
        }

        return a;
    }

    /* =====================================================
       LẤY TOÀN BỘ CÂU HỎI TỪ 6 MODULE
       ===================================================== */

    function buildTrialQuestionPool() {

        const pool = [];

        for (let m = 1; m <= 6; m++) {

            const key =
                "module" + m;

            const topic =
                quizBank[key];

            if (
                !topic ||
                !Array.isArray(topic.questions)
            ) {
                continue;
            }

            topic.questions.forEach(
                function (q, index) {

                    pool.push({

                        q: q.q,

                        options:
                            Array.isArray(q.options)
                                ? q.options.slice()
                                : [],

                        answer:
                            q.answer,

                        explain:
                            q.explain || "",

                        sourceModule:
                            m,

                        sourceModuleKey:
                            key,

                        sourceModuleTitle:
                            topic.title,

                        sourceQuestion:
                            index + 1
                    });

                }
            );
        }

        return pool;
    }

    /* =====================================================
       TẠO ĐỀ MỚI
       ===================================================== */

    function createTrialSet() {

        const pool =
            buildTrialQuestionPool();

        if (pool.length < TRIAL_TOTAL) {

            showToast(
                "Ngân hàng 6 module hiện chưa đủ 40 câu để tạo đề thi thử."
            );

            return false;
        }

        trialQuestions =
            shuffleTrial(pool)
                .slice(0, TRIAL_TOTAL);

        trialAnswers = {};

        trialIndex = 0;

        trialSubmitted = false;

        trialEndTime =
            Date.now() + TRIAL_TIME;

        trialHistoryId =
            "trial_" +
            Date.now() +
            "_" +
            Math.random()
                .toString(36)
                .slice(2);

        saveActiveTrial();

        return true;
    }

    /* =====================================================
       LƯU ĐỀ ĐANG LÀM
       ===================================================== */

    function saveActiveTrial() {

        if (
            !trialQuestions.length ||
            trialSubmitted
        ) {

            localStorage.removeItem(
                TRIAL_ACTIVE_KEY +
                "_" +
                trialUserKey()
            );

            return;
        }

        localStorage.setItem(

            TRIAL_ACTIVE_KEY +
            "_" +
            trialUserKey(),

            JSON.stringify({

                id:
                    trialHistoryId,

                questions:
                    trialQuestions,

                answers:
                    trialAnswers,

                index:
                    trialIndex,

                endTime:
                    trialEndTime
            })
        );
    }

    /* =====================================================
       KHÔI PHỤC ĐỀ ĐANG LÀM
       ===================================================== */

    function loadActiveTrial() {

        try {

            const raw =
                localStorage.getItem(
                    TRIAL_ACTIVE_KEY +
                    "_" +
                    trialUserKey()
                );

            if (!raw) {
                return false;
            }

            const data =
                JSON.parse(raw);

            if (
                !data ||
                !Array.isArray(data.questions) ||
                data.questions.length !== TRIAL_TOTAL
            ) {
                return false;
            }

            if (
                !data.endTime ||
                data.endTime <= Date.now()
            ) {
                return false;
            }

            trialQuestions =
                data.questions;

            trialAnswers =
                data.answers || {};

            trialIndex =
                Math.max(
                    0,
                    Math.min(
                        Number(data.index) || 0,
                        TRIAL_TOTAL - 1
                    )
                );

            trialSubmitted =
                false;

            trialEndTime =
                data.endTime;

            trialHistoryId =
                data.id ||
                ("trial_" + Date.now());

            return true;

        } catch (e) {

            return false;
        }
    }

    /* =====================================================
       TIMER
       ===================================================== */

    function clearTrialTimer() {

        if (trialTimer) {

            clearInterval(
                trialTimer
            );

            trialTimer =
                null;
        }
    }

    function startTrialTimer() {

        clearTrialTimer();

        const el =
            document.getElementById(
                "trialTimerValue"
            );

        if (
            !el ||
            trialSubmitted
        ) {
            return;
        }

        const tick =
            function () {

                const left =
                    Math.max(
                        0,
                        trialEndTime -
                        Date.now()
                    );

                const sec =
                    Math.ceil(
                        left / 1000
                    );

                const mm =
                    String(
                        Math.floor(
                            sec / 60
                        )
                    ).padStart(
                        2,
                        "0"
                    );

                const ss =
                    String(
                        sec % 60
                    ).padStart(
                        2,
                        "0"
                    );

                el.textContent =
                    mm + ":" + ss;

                el.classList.toggle(
                    "danger",
                    sec <= 300
                );

                if (left <= 0) {

                    clearTrialTimer();

                    submitTrialExam(
                        true
                    );
                }
            };

        tick();

        trialTimer =
            setInterval(
                tick,
                1000
            );
    }

    function trialScore() {

        return trialQuestions.reduce(

            function (n, q, i) {

                return n +
                    (
                        trialAnswers[i] ===
                        q.answer
                            ? 1
                            : 0
                    );
            },

            0
        );
    }

    function trialAnsweredCount() {

        return Object.keys(
            trialAnswers
        ).length;
    }

    /* =====================================================
       TRANG THI THỬ
       ===================================================== */

    function renderTrialHome() {

        clearTrialTimer();

        const history =
            readTrialHistory();

        const active =
            loadActiveTrial();

        let html = `

            <div class="trial-page">

                <section class="trial-hero">

                    <div class="trial-hero-icon">
                        <i class="fa-solid fa-file-circle-check"></i>
                    </div>

                    <div>

                        <span class="trial-kicker">
                            THI THỬ CHÍNH THỨC
                        </span>

                        <h1>
                            ĐỀ THI THỬ 40 CÂU
                        </h1>

                        <p>
                            40 câu được trộn ngẫu nhiên từ toàn bộ 6 module trắc nghiệm
                            • Thời gian 30 phút
                        </p>

                    </div>

                </section>

                <section class="trial-actions">

                    <div class="trial-info-grid">

                        <div>
                            <i class="fa-solid fa-layer-group"></i>
                            <strong>6 Module</strong>
                            <span>
                                Toàn bộ ngân hàng câu hỏi
                            </span>
                        </div>

                        <div>
                            <i class="fa-solid fa-list-ol"></i>
                            <strong>40 Câu</strong>
                            <span>
                                Mỗi đề được trộn lại
                            </span>
                        </div>

                        <div>
                            <i class="fa-solid fa-clock"></i>
                            <strong>30 Phút</strong>
                            <span>
                                Tự động nộp khi hết giờ
                            </span>
                        </div>

                        <div>
                            <i class="fa-solid fa-clock-rotate-left"></i>
                            <strong>Lịch sử</strong>
                            <span>
                                Lưu từng bộ đề và kết quả
                            </span>
                        </div>

                    </div>

                    <div class="trial-start-row">

                        ${
                            active
                                ? `
                                    <button
                                        class="trial-btn trial-continue"
                                        onclick="continueTrialExam()"
                                    >
                                        <i class="fa-solid fa-play"></i>
                                        Tiếp tục đề đang làm
                                    </button>
                                  `
                                : ""
                        }

                        <button
                            class="trial-btn trial-new"
                            onclick="createNewTrialExam()"
                        >
                            <i class="fa-solid fa-shuffle"></i>
                            Tạo đề thi thử mới
                        </button>

                    </div>

                    <p class="trial-note">

                        <i class="fa-solid fa-circle-info"></i>

                        Mỗi lần bấm
                        <b>Tạo đề thi thử mới</b>,
                        hệ thống lấy lại 40 câu ngẫu nhiên
                        từ đúng 6 module hiện có.

                    </p>

                </section>

                <section class="trial-history-section">

                    <div class="trial-section-heading">

                        <div>

                            <span>
                                LỊCH SỬ THI
                            </span>

                            <h2>
                                <i class="fa-solid fa-clock-rotate-left"></i>
                                Các bộ đề đã làm
                            </h2>

                        </div>

                        <b>
                            ${history.length} lượt thi
                        </b>

                    </div>

                    ${
                        history.length
                            ? history
                                .slice()
                                .reverse()
                                .map(
                                    function (
                                        item,
                                        reverseIndex
                                    ) {

                                        const realIndex =
                                            history.length -
                                            1 -
                                            reverseIndex;

                                        const pct =
                                            item.percent || 0;

                                        return `

                                            <article
                                                class="trial-history-card"
                                            >

                                                <div
                                                    class="trial-history-number"
                                                >
                                                    ${
                                                        history.length -
                                                        reverseIndex
                                                    }
                                                </div>

                                                <div
                                                    class="trial-history-main"
                                                >

                                                    <h3>
                                                        ${
                                                            escapeHTML(
                                                                item.title ||
                                                                (
                                                                    "Đề thi thử #" +
                                                                    (
                                                                        history.length -
                                                                        reverseIndex
                                                                    )
                                                                )
                                                            )
                                                        }
                                                    </h3>

                                                    <p>

                                                        <i class="fa-regular fa-calendar"></i>

                                                        ${
                                                            escapeHTML(
                                                                item.time || ""
                                                            )
                                                        }

                                                        &nbsp; • &nbsp;

                                                        <i class="fa-solid fa-circle-check"></i>

                                                        ${
                                                            item.correct
                                                        }/
                                                        ${
                                                            item.total
                                                        }
                                                        câu đúng

                                                    </p>

                                                </div>

                                                <div
                                                    class="trial-score ${
                                                        pct >= 50
                                                            ? "pass"
                                                            : "fail"
                                                    }"
                                                >

                                                    <strong>
                                                        ${pct}%
                                                    </strong>

                                                    <span>
                                                        ${
                                                            item.correct
                                                        }/
                                                        ${
                                                            item.total
                                                        }
                                                    </span>

                                                </div>

                                                <button
                                                    class="trial-review-btn"
                                                    onclick="reviewTrialHistory(${realIndex})"
                                                >

                                                    <i class="fa-solid fa-eye"></i>
                                                    Xem lại đề

                                                </button>

                                            </article>
                                        `;
                                    }
                                )
                                .join("")
                            : `

                                <div
                                    class="trial-empty-history"
                                >

                                    <i
                                        class="fa-regular fa-folder-open"
                                    ></i>

                                    <h3>
                                        Chưa có lịch sử thi thử
                                    </h3>

                                    <p>
                                        Hãy tạo đề đầu tiên để hệ thống lưu lại
                                        toàn bộ câu hỏi, đáp án và kết quả.
                                    </p>

                                </div>
                              `
                    }

                </section>

            </div>
        `;

        openOtherPage(
            html
        );
    }

    /* =====================================================
       RENDER ĐỀ THI
       ===================================================== */

    function renderTrialExam() {

        clearTrialTimer();

        if (!trialQuestions.length) {
            return renderTrialHome();
        }

        const q =
            trialQuestions[
                trialIndex
            ];

        const selected =
            trialAnswers[
                trialIndex
            ];

        const answered =
            trialAnsweredCount();

        const total =
            TRIAL_TOTAL;

        const progress =
            Math.round(
                (
                    (trialIndex + 1) /
                    total
                ) * 100
            );

        let options =
            q.options
                .map(
                    function (
                        opt,
                        oi
                    ) {

                        const chosen =
                            selected === oi;

                        return `

                            <button
                                type="button"
                                class="trial-option ${
                                    chosen
                                        ? "selected"
                                        : ""
                                }"
                                onclick="selectTrialAnswer(${oi})"
                            >

                                <span
                                    class="trial-option-letter"
                                >
                                    ${
                                        String.fromCharCode(
                                            65 + oi
                                        )
                                    }
                                </span>

                                <span>
                                    ${
                                        escapeHTML(
                                            opt
                                        )
                                    }
                                </span>

                            </button>

                        `;
                    }
                )
                .join("");

        const nums =
            trialQuestions
                .map(
                    function (_, i) {

                        return `

                            <button
                                class="
                                    trial-number
                                    ${
                                        i === trialIndex
                                            ? "current"
                                            : ""
                                    }
                                    ${
                                        trialAnswers[i] !== undefined
                                            ? "answered"
                                            : ""
                                    }
                                "
                                onclick="goTrialQuestion(${i})"
                            >
                                ${i + 1}
                            </button>

                        `;
                    }
                )
                .join("");

        const html = `

            <div
                class="
                    trial-page
                    trial-taking
                "
            >

                <div
                    class="trial-taking-top"
                >

                    <button
                        class="trial-small-back"
                        onclick="confirmLeaveTrial()"
                    >

                        <i class="fa-solid fa-arrow-left"></i>
                        Thi thử

                    </button>

                    <div
                        class="trial-live-title"
                    >

                        <i class="fa-solid fa-file-circle-check"></i>

                        <span>
                            ĐỀ THI THỬ CHÍNH THỨC
                        </span>

                    </div>

                    <div
                        class="trial-timer"
                    >

                        <i class="fa-regular fa-clock"></i>

                        <strong
                            id="trialTimerValue"
                        >
                            30:00
                        </strong>

                    </div>

                </div>

                <div
                    class="trial-progress"
                >
                    <span
                        style="width:${progress}%"
                    ></span>
                </div>

                <div
                    class="trial-taking-grid"
                >

                    <main
                        class="trial-question-card"
                    >

                        <div
                            class="trial-question-meta"
                        >

                            <span>
                                CÂU
                                ${
                                    trialIndex + 1
                                }
                                /
                                ${total}
                            </span>

                            <b>
                                Đã làm
                                ${answered}/${total}
                            </b>

                        </div>

                        <h2>
                            ${
                                escapeHTML(
                                    q.q
                                )
                            }
                        </h2>

                        <div
                            class="trial-options"
                        >

                            ${options}

                        </div>

                        <div
                            class="trial-source-badge"
                        >

                            <i class="fa-solid fa-database"></i>

                            Nguồn:
                            <b>
                                Module
                                ${q.sourceModule}
                            </b>

                            • Câu
                            <b>
                                ${q.sourceQuestion}
                            </b>

                        </div>

                        <div
                            class="trial-navigation"
                        >

                            <button
                                onclick="goTrialQuestion(${trialIndex - 1})"
                                ${
                                    trialIndex === 0
                                        ? "disabled"
                                        : ""
                                }
                            >

                                <i class="fa-solid fa-arrow-left"></i>
                                Câu trước

                            </button>

                            ${
                                trialIndex === total - 1
                                    ? `

                                        <button
                                            class="finish"
                                            onclick="submitTrialExam(false)"
                                        >

                                            <i class="fa-solid fa-paper-plane"></i>
                                            Nộp bài

                                        </button>

                                      `
                                    : `

                                        <button
                                            class="next"
                                            onclick="goTrialQuestion(${trialIndex + 1})"
                                        >

                                            Câu tiếp
                                            <i class="fa-solid fa-arrow-right"></i>

                                        </button>

                                      `
                            }

                        </div>

                    </main>

                    <aside
                        class="trial-question-map"
                    >

                        <div
                            class="trial-map-head"
                        >

                            <h3>
                                <i class="fa-solid fa-grip"></i>
                                Danh sách 40 câu
                            </h3>

                            <span>
                                ${answered}/${total}
                            </span>

                        </div>

                        <div
                            class="trial-numbers"
                        >

                            ${nums}

                        </div>

                        <div
                            class="trial-map-legend"
                        >

                            <span>
                                <i class="answered-dot"></i>
                                Đã chọn
                            </span>

                            <span>
                                <i class="current-dot"></i>
                                Đang xem
                            </span>

                        </div>

                        <button
                            class="trial-submit-side"
                            onclick="submitTrialExam(false)"
                        >

                            <i class="fa-solid fa-paper-plane"></i>
                            Nộp bài

                        </button>

                    </aside>

                </div>

            </div>

        `;

        openOtherPage(
            html
        );

        startTrialTimer();
    }

    /* =====================================================
       CHỌN ĐÁP ÁN
       ===================================================== */

    function selectTrialAnswer(index) {

        if (trialSubmitted) {
            return;
        }

        trialAnswers[
            trialIndex
        ] = index;

        saveActiveTrial();

        renderTrialExam();
    }

    /* =====================================================
       CHUYỂN CÂU
       ===================================================== */

    function goTrialQuestion(index) {

        if (
            trialSubmitted ||
            index < 0 ||
            index >= trialQuestions.length
        ) {
            return;
        }

        trialIndex =
            index;

        saveActiveTrial();

        renderTrialExam();
    }

    /* =====================================================
       TẠO ĐỀ MỚI
       ===================================================== */

    function createNewTrialExam() {

        const hasActive =
            trialQuestions.length &&
            !trialSubmitted &&
            trialEndTime > Date.now();

        if (
            hasActive &&
            trialAnsweredCount() > 0
        ) {

            if (
                !confirm(
                    "Bạn đang có một đề thi chưa hoàn thành. " +
                    "Tạo đề mới sẽ bỏ đề đang làm. Bạn có chắc chắn không?"
                )
            ) {
                return;
            }
        }

        if (!createTrialSet()) {
            return;
        }

        renderTrialExam();
    }

    /* =====================================================
       TIẾP TỤC
       ===================================================== */

    function continueTrialExam() {

        if (!loadActiveTrial()) {

            showToast(
                "Không còn đề thi đang làm hoặc đề đã hết thời gian."
            );

            renderTrialHome();

            return;
        }

        renderTrialExam();
    }

    /* =====================================================
       RỜI ĐỀ
       ===================================================== */

    function confirmLeaveTrial() {

        if (trialSubmitted) {

            renderTrialHome();

            return;
        }

        if (
            confirm(
                "Bạn có muốn rời đề thi? " +
                "Tiến độ hiện tại vẫn được lưu để bạn có thể tiếp tục."
            )
        ) {

            renderTrialHome();
        }
    }

    /* =====================================================
       NỘP BÀI
       ===================================================== */

    function submitTrialExam(
        autoSubmit
    ) {

        if (
            trialSubmitted ||
            !trialQuestions.length
        ) {
            return;
        }

        if (
            !autoSubmit &&
            trialAnsweredCount() < TRIAL_TOTAL
        ) {

            if (
                !confirm(
                    `Bạn mới trả lời ${
                        trialAnsweredCount()
                    }/${TRIAL_TOTAL} câu. ` +
                    "Bạn có chắc chắn muốn nộp bài?"
                )
            ) {
                return;
            }
        }

        trialSubmitted =
            true;

        clearTrialTimer();

        const correct =
            trialScore();

        const total =
            TRIAL_TOTAL;

        const history =
            readTrialHistory();

        const record = {

            id:
                trialHistoryId ||
                ("trial_" + Date.now()),

            title:
                "Đề thi thử 40 câu",

            correct:
                correct,

            total:
                total,

            percent:
                Math.round(
                    correct /
                    total *
                    100
                ),

            time:
                new Date()
                    .toLocaleString(
                        "vi-VN"
                    ),

            timestamp:
                Date.now(),

            autoSubmit:
                !!autoSubmit,

            questions:
                trialQuestions.map(
                    function (
                        q,
                        i
                    ) {

                        return {

                            q:
                                q.q,

                            options:
                                q.options,

                            answer:
                                q.answer,

                            explain:
                                q.explain,

                            selected:
                                trialAnswers[i] === undefined
                                    ? null
                                    : trialAnswers[i],

                            sourceModule:
                                q.sourceModule,

                            sourceModuleKey:
                                q.sourceModuleKey,

                            sourceModuleTitle:
                                q.sourceModuleTitle,

                            sourceQuestion:
                                q.sourceQuestion
                        };
                    }
                )
        };

        history.push(
            record
        );

        writeTrialHistory(
            history
        );

        localStorage.removeItem(
            TRIAL_ACTIVE_KEY +
            "_" +
            trialUserKey()
        );

        renderTrialResult(
            record
        );
    }

    /* =====================================================
       KẾT QUẢ + XEM LẠI 40 CÂU
       ===================================================== */

    function renderTrialResult(
        record
    ) {

        const pass =
            record.percent >= 50;

        const html = `

            <div
                class="
                    trial-page
                    trial-result-page
                "
            >

                <section
                    class="
                        trial-result-hero
                        ${
                            pass
                                ? "pass"
                                : "fail"
                        }
                    "
                >

                    <div
                        class="result-icon"
                    >

                        <i
                            class="
                                fa-solid
                                ${
                                    pass
                                        ? "fa-trophy"
                                        : "fa-rotate-right"
                                }
                            "
                        ></i>

                    </div>

                    <span>
                        KẾT QUẢ THI THỬ
                    </span>

                    <h1>
                        ${record.percent}%
                    </h1>

                    <p>

                        Đúng
                        <b>
                            ${record.correct}/${record.total}
                        </b>
                        câu

                        •

                        ${
                            record.autoSubmit
                                ? "Bài được tự động nộp khi hết 30 phút."
                                : "Bài thi đã được nộp thành công."
                        }

                    </p>

                </section>

                <div
                    class="trial-result-actions"
                >

                    <button
                        class="trial-btn trial-new"
                        onclick="createNewTrialExam()"
                    >

                        <i class="fa-solid fa-shuffle"></i>
                        Tạo đề mới

                    </button>

                    <button
                        class="trial-btn trial-history"
                        onclick="renderTrialHome()"
                    >

                        <i class="fa-solid fa-clock-rotate-left"></i>
                        Lịch sử thi

                    </button>

                </div>

                <section
                    class="trial-review-list"
                >

                    <div
                        class="trial-section-heading"
                    >

                        <div>

                            <span>
                                XEM LẠI BỘ ĐỀ VỪA THI
                            </span>

                            <h2>

                                <i
                                    class="fa-solid fa-list-check"
                                ></i>

                                40 câu hỏi và kết quả

                            </h2>

                        </div>

                    </div>

                    ${
                        record.questions
                            .map(
                                function (
                                    q,
                                    i
                                ) {

                                    const ok =
                                        q.selected ===
                                        q.answer;

                                    const skipped =
                                        q.selected ===
                                        null;

                                    const selectedText =
                                        skipped
                                            ? "Chưa trả lời"
                                            : (
                                                q.options[
                                                    q.selected
                                                ] ||
                                                ""
                                            );

                                    const correctText =
                                        q.options[
                                            q.answer
                                        ] ||
                                        "";

                                    return `

                                        <article
                                            class="
                                                trial-review-card
                                                ${
                                                    ok
                                                        ? "correct"
                                                        : "wrong"
                                                }
                                            "
                                        >

                                            <div
                                                class="trial-review-head"
                                            >

                                                <span
                                                    class="review-q-number"
                                                >
                                                    Câu ${i + 1}
                                                </span>

                                                <span
                                                    class="
                                                        review-status
                                                        ${
                                                            ok
                                                                ? "ok"
                                                                : "bad"
                                                        }
                                                    "
                                                >

                                                    <i
                                                        class="
                                                            fa-solid
                                                            ${
                                                                ok
                                                                    ? "fa-circle-check"
                                                                    : "fa-circle-xmark"
                                                            }
                                                        "
                                                    ></i>

                                                    ${
                                                        ok
                                                            ? "ĐÚNG"
                                                            : (
                                                                skipped
                                                                    ? "BỎ TRỐNG"
                                                                    : "SAI"
                                                            )
                                                    }

                                                </span>

                                                <span
                                                    class="review-source"
                                                >
                                                    Module
                                                    ${q.sourceModule}
                                                    • Câu
                                                    ${q.sourceQuestion}
                                                </span>

                                            </div>

                                            <h3>
                                                ${
                                                    escapeHTML(
                                                        q.q
                                                    )
                                                }
                                            </h3>

                                            <div
                                                class="review-answer-grid"
                                            >

                                                <div
                                                    class="
                                                        review-answer
                                                        student
                                                    "
                                                >

                                                    <span>
                                                        Bạn chọn
                                                    </span>

                                                    <strong>
                                                        ${
                                                            escapeHTML(
                                                                selectedText
                                                            )
                                                        }
                                                    </strong>

                                                </div>

                                                <div
                                                    class="
                                                        review-answer
                                                        correct-answer
                                                    "
                                                >

                                                    <span>
                                                        Đáp án đúng
                                                    </span>

                                                    <strong>
                                                        ${
                                                            escapeHTML(
                                                                correctText
                                                            )
                                                        }
                                                    </strong>

                                                </div>

                                            </div>

                                            ${
                                                q.explain
                                                    ? `

                                                        <div
                                                            class="review-explain"
                                                        >

                                                            <i
                                                                class="
                                                                    fa-solid
                                                                    fa-lightbulb
                                                                "
                                                            ></i>

                                                            ${
                                                                escapeHTML(
                                                                    q.explain
                                                                )
                                                            }

                                                        </div>

                                                      `
                                                    : ""
                                            }

                                            <button
                                                class="trial-module-link"
                                                onclick="
                                                    openTrialSourceModule(
                                                        ${q.sourceModule}
                                                    )
                                                "
                                            >

                                                <i
                                                    class="
                                                        fa-solid
                                                        fa-arrow-up-right-from-square
                                                    "
                                                ></i>

                                                Xem cụ thể câu này trong
                                                Module
                                                ${q.sourceModule}

                                            </button>

                                        </article>

                                    `;
                                }
                            )
                            .join("")
                    }

                </section>

            </div>

        `;

        openOtherPage(
            html
        );
    }

    /* =====================================================
       XEM LỊCH SỬ
       ===================================================== */

    function reviewTrialHistory(
        index
    ) {

        const history =
            readTrialHistory();

        const record =
            history[index];

        if (
            !record ||
            !Array.isArray(
                record.questions
            )
        ) {

            showToast(
                "Không tìm thấy bộ đề trong lịch sử."
            );

            return;
        }

        renderTrialResult(
            record
        );
    }

    /* =====================================================
       MỞ MODULE NGUỒN
       ===================================================== */

    function openTrialSourceModule(
        moduleNumber
    ) {

        const id =
            "theory-module-" +
            moduleNumber;

        if (
            typeof openTheoryModule ===
            "function"
        ) {

            openTheoryModule(
                id
            );

        } else {

            showToast(
                "Không tìm thấy trang Module " +
                moduleNumber +
                "."
            );
        }
    }

    /* =====================================================
       PUBLIC FUNCTIONS
       ===================================================== */

    window.openTrialExam =
        renderTrialHome;

    window.createNewTrialExam =
        createNewTrialExam;

    window.continueTrialExam =
        continueTrialExam;

    window.confirmLeaveTrial =
        confirmLeaveTrial;

    window.selectTrialAnswer =
        selectTrialAnswer;

    window.goTrialQuestion =
        goTrialQuestion;

    window.submitTrialExam =
        submitTrialExam;

    window.reviewTrialHistory =
        reviewTrialHistory;

    window.openTrialSourceModule =
        openTrialSourceModule;

    /* =====================================================
       GẮN THẺ THI THỬ VÀO TRANG TRẮC NGHIỆM HIỆN TẠI
       ===================================================== */

    const originalOpenExamForTrial =
        window.openExam;

    if (
        typeof originalOpenExamForTrial ===
        "function"
    ) {

        window.openExam =
            function () {

                originalOpenExamForTrial.apply(
                    this,
                    arguments
                );

                setTimeout(
                    function () {

                        const page =
                            document.getElementById(
                                "otherPage"
                            );

                        if (
                            !page ||
                            page.querySelector(
                                ".trial-entry-card"
                            )
                        ) {
                            return;
                        }

                        const intro =
                            page.querySelector(
                                ".other-title"
                            );

                        if (!intro) {
                            return;
                        }

                        const card =
                            document.createElement(
                                "section"
                            );

                        card.className =
                            "trial-entry-card";

                        card.innerHTML = `

                            <div
                                class="trial-entry-icon"
                            >

                                <i
                                    class="
                                        fa-solid
                                        fa-file-circle-check
                                    "
                                ></i>

                            </div>

                            <div
                                class="trial-entry-text"
                            >

                                <span>
                                    CHỨC NĂNG MỚI
                                </span>

                                <h3>
                                    Thi thử 40 câu chính thức
                                </h3>

                                <p>
                                    Lấy ngẫu nhiên 40 câu từ toàn bộ
                                    6 module • 30 phút • Có lịch sử
                                    và xem lại từng câu
                                </p>

                            </div>

                            <button
                                type="button"
                                onclick="openTrialExam()"
                            >

                                <i
                                    class="fa-solid fa-play"
                                ></i>

                                Vào thi thử

                            </button>

                        `;

                        intro.parentNode.insertBefore(
                            card,
                            intro.nextSibling
                        );

                    },
                    0
                );
            };
    }

})();

/* ============================================================
   🚀 THI THỬ 40 CÂU — BỘ HOÀN CHỈNH ALL-IN-ONE
   DÁN NGUYÊN KHỐI NÀY VÀO CUỐI script.js
   ============================================================ */

(function () {

    "use strict";

    /* ========================================================
       1. CSS TỰ ĐỘNG
       ======================================================== */

    const style = document.createElement("style");

    style.id = "trial-all-in-one-style";

    style.textContent = `

    /* ========================================================
       CARD THI THỬ Ở TRANG TRẮC NGHIỆM
       ======================================================== */

    #otherPage .trial-entry-card {
        width:100% !important;
        box-sizing:border-box !important;

        margin:18px 0 22px !important;
        padding:18px 20px !important;

        display:flex !important;
        align-items:center !important;
        gap:16px !important;

        position:relative !important;
        overflow:hidden !important;

        border-radius:20px !important;

        border:2px solid #dbeafe !important;

        background:
            linear-gradient(
                135deg,
                #ffffff,
                #effcff 48%,
                #f5efff
            ) !important;

        box-shadow:
            0 12px 35px rgba(37,99,235,.10),
            0 4px 15px rgba(124,58,237,.07) !important;

        font-family:"Poppins","Segoe UI",Arial,sans-serif !important;
    }


    #otherPage .trial-entry-icon {
        width:62px !important;
        height:62px !important;
        min-width:62px !important;

        display:flex !important;
        align-items:center !important;
        justify-content:center !important;

        border-radius:17px !important;

        color:white !important;
        font-size:26px !important;

        background:
            linear-gradient(
                135deg,
                #06b6d4,
                #2563eb,
                #7c3aed
            ) !important;

        box-shadow:
            0 9px 22px rgba(37,99,235,.25) !important;
    }


    #otherPage .trial-entry-text {
        flex:1 !important;
        min-width:0 !important;
    }


    #otherPage .trial-entry-text span {
        display:block !important;

        color:#7c3aed !important;

        font-size:10px !important;
        font-weight:900 !important;

        letter-spacing:1.4px !important;

        margin-bottom:3px !important;
    }


    #otherPage .trial-entry-text h3 {
        margin:0 0 5px !important;

        color:#172554 !important;

        font-size:20px !important;
        line-height:1.3 !important;

        font-weight:900 !important;
    }


    #otherPage .trial-entry-text p {
        margin:0 !important;

        color:#64748b !important;

        font-size:12px !important;
        line-height:1.5 !important;
    }


    /* ========================================================
       3 NÚT
       ======================================================== */

    .trial-entry-actions {
        display:flex !important;

        flex-direction:column !important;

        gap:7px !important;

        flex-shrink:0 !important;
    }


    .trial-entry-btn {
        min-width:160px !important;

        padding:10px 14px !important;

        border:0 !important;

        border-radius:11px !important;

        display:flex !important;

        align-items:center !important;

        justify-content:center !important;

        gap:7px !important;

        color:white !important;

        font-size:12px !important;

        font-weight:900 !important;

        cursor:pointer !important;

        transition:
            transform .22s ease,
            box-shadow .22s ease,
            filter .22s ease !important;
    }


    .trial-entry-btn:hover {
        transform:translateY(-2px) !important;

        filter:brightness(1.06) !important;
    }


    .trial-entry-start {
        background:
            linear-gradient(
                135deg,
                #2563eb,
                #4f46e5
            ) !important;

        box-shadow:
            0 7px 18px rgba(37,99,235,.22) !important;
    }


    .trial-entry-continue {
        background:
            linear-gradient(
                135deg,
                #0891b2,
                #0d9488
            ) !important;

        box-shadow:
            0 7px 18px rgba(13,148,136,.20) !important;
    }


    .trial-entry-history {
        background:
            linear-gradient(
                135deg,
                #7c3aed,
                #db2777
            ) !important;

        box-shadow:
            0 7px 18px rgba(124,58,237,.20) !important;
    }


    /* ========================================================
       TRANG LỊCH SỬ
       ======================================================== */

    .trial-history-page {
        width:100%;

        font-family:"Poppins","Segoe UI",Arial,sans-serif;
    }


    .trial-history-hero {
        display:flex;

        align-items:center;

        gap:18px;

        padding:24px;

        margin-bottom:18px;

        border-radius:22px;

        color:white;

        background:
            linear-gradient(
                135deg,
                #172554,
                #2563eb,
                #7c3aed,
                #db2777
            );

        box-shadow:
            0 15px 40px rgba(37,99,235,.20);
    }


    .trial-hero-icon {
        width:65px;
        height:65px;
        min-width:65px;

        display:flex;
        align-items:center;
        justify-content:center;

        border-radius:18px;

        background:rgba(255,255,255,.16);

        font-size:28px;
    }


    .trial-history-hero h1 {
        margin:2px 0 4px;

        font-size:25px;

        font-weight:900;
    }


    .trial-history-hero p {
        margin:0;

        color:rgba(255,255,255,.82);

        font-size:13px;
    }


    .trial-kicker {
        font-size:10px;

        font-weight:900;

        letter-spacing:1.5px;

        color:#a5f3fc;
    }


    /* ========================================================
       TOOLBAR
       ======================================================== */

    .trial-history-toolbar {
        display:flex;

        flex-wrap:wrap;

        gap:10px;

        margin-bottom:18px;
    }


    .trial-history-toolbar button {
        border:0;

        border-radius:11px;

        padding:11px 15px;

        color:white;

        font-size:12px;

        font-weight:800;

        cursor:pointer;

        transition:
            transform .2s ease,
            box-shadow .2s ease;
    }


    .trial-history-toolbar button:hover {
        transform:translateY(-2px);
    }


    .trial-new {
        background:
            linear-gradient(
                135deg,
                #2563eb,
                #06b6d4
            );

        box-shadow:
            0 7px 18px rgba(37,99,235,.20);
    }


    .trial-continue {
        background:
            linear-gradient(
                135deg,
                #059669,
                #0d9488
            );
    }


    .trial-back {
        background:
            linear-gradient(
                135deg,
                #64748b,
                #475569
            );
    }


    /* ========================================================
       DANH SÁCH LỊCH SỬ
       ======================================================== */

    .trial-history-section {
        background:
            linear-gradient(
                145deg,
                #ffffff,
                #f8fbff,
                #faf5ff
            );

        border:1px solid #dbe4f0;

        border-radius:20px;

        padding:18px;

        box-shadow:
            0 10px 30px rgba(37,99,235,.07);
    }


    .trial-section-heading {
        display:flex;

        align-items:center;

        justify-content:space-between;

        margin-bottom:15px;
    }


    .trial-section-heading span {
        color:#7c3aed;

        font-size:10px;

        font-weight:900;

        letter-spacing:1.2px;
    }


    .trial-section-heading h2 {
        margin:3px 0 0;

        color:#172554;

        font-size:19px;

        font-weight:900;
    }


    .trial-section-heading > b {
        padding:8px 12px;

        border-radius:999px;

        color:#4338ca;

        background:#eef2ff;

        font-size:11px;
    }


    /* ========================================================
       TỪNG BÀI THI
       ======================================================== */

    .trial-history-card {
        display:flex;

        align-items:center;

        gap:13px;

        padding:14px;

        margin-bottom:10px;

        border-radius:15px;

        border:2px solid #e2e8f0;

        background:white;

        transition:
            transform .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
    }


    .trial-history-card:hover {
        transform:translateY(-2px);

        border-color:#a78bfa;

        box-shadow:
            0 9px 24px rgba(124,58,237,.10);
    }


    .trial-history-number {
        width:42px;
        height:42px;
        min-width:42px;

        display:flex;
        align-items:center;
        justify-content:center;

        border-radius:12px;

        color:white;

        font-weight:900;

        background:
            linear-gradient(
                135deg,
                #06b6d4,
                #2563eb,
                #7c3aed
            );
    }


    .trial-history-main {
        flex:1;
        min-width:0;
    }


    .trial-history-main h3 {
        margin:0 0 4px;

        color:#172554;

        font-size:14px;

        font-weight:900;
    }


    .trial-history-main p {
        margin:0;

        color:#64748b;

        font-size:11px;
    }


    .trial-score {
        min-width:65px;

        text-align:center;

        padding:7px 10px;

        border-radius:11px;
    }


    .trial-score strong {
        display:block;

        font-size:17px;

        font-weight:900;
    }


    .trial-score span {
        font-size:10px;
    }


    .trial-score.pass {
        color:#047857;

        background:#d1fae5;
    }


    .trial-score.fail {
        color:#be123c;

        background:#ffe4e6;
    }


    .trial-review-btn {
        padding:9px 13px;

        border:0;

        border-radius:10px;

        color:white;

        background:
            linear-gradient(
                135deg,
                #7c3aed,
                #db2777
            );

        font-size:11px;

        font-weight:900;

        cursor:pointer;

        transition:transform .2s ease;
    }


    .trial-review-btn:hover {
        transform:translateY(-2px);
    }


    /* ========================================================
       THÔNG TIN MODULE + CÂU GỐC
       ======================================================== */

    .trial-source-badge {
        display:inline-flex;

        align-items:center;

        flex-wrap:wrap;

        gap:5px;

        margin-top:10px;

        padding:7px 11px;

        border-radius:9px;

        color:#4338ca;

        background:
            linear-gradient(
                135deg,
                #ecfeff,
                #eef2ff,
                #faf5ff
            );

        border-left:4px solid #7c3aed;

        font-size:11px;

        font-weight:700;
    }


    .trial-source-badge b {
        color:#7c3aed;
    }


    .trial-module-link {
        display:inline-flex !important;

        align-items:center !important;

        gap:7px !important;

        margin-top:9px !important;

        padding:9px 13px !important;

        border:0 !important;

        border-radius:10px !important;

        color:white !important;

        background:
            linear-gradient(
                135deg,
                #2563eb,
                #7c3aed
            ) !important;

        font-size:11px !important;

        font-weight:900 !important;

        cursor:pointer !important;

        transition:
            transform .2s ease,
            box-shadow .2s ease !important;
    }


    .trial-module-link:hover {
        transform:translateY(-2px) !important;

        box-shadow:
            0 8px 20px rgba(124,58,237,.20) !important;
    }


    /* ========================================================
       TRANG THI — KHÔNG CHUYỂN TRANG / KHÔNG CHỚP
       ======================================================== */

    #otherPage.trial-static .trial-page,
    #otherPage.trial-static .trial-question-card {
        animation:none !important;
    }


    #otherPage.trial-static {
        scroll-behavior:auto !important;
    }


    /* ========================================================
       MOBILE
       ======================================================== */

    @media(max-width:700px) {

        #otherPage .trial-entry-card {
            flex-direction:column !important;

            align-items:stretch !important;

            padding:16px !important;
        }


        #otherPage .trial-entry-icon {
            width:55px !important;
            height:55px !important;
            min-width:55px !important;
        }


        #otherPage .trial-entry-actions {
            width:100% !important;
        }


        #otherPage .trial-entry-btn {
            width:100% !important;
        }


        .trial-history-hero {
            padding:18px;

            border-radius:17px;
        }


        .trial-history-hero h1 {
            font-size:20px;
        }


        .trial-history-card {
            flex-wrap:wrap;
        }


        .trial-history-main {
            min-width:calc(100% - 60px);
        }


        .trial-score {
            margin-left:55px;
        }


        .trial-review-btn {
            margin-left:auto;
        }


        .trial-history-toolbar {
            flex-direction:column;
        }


        .trial-history-toolbar button {
            width:100%;
        }
    }

    `;

    document.head.appendChild(style);


    /* ========================================================
       2. ĐỌC LỊCH SỬ
       ======================================================== */

    function getTrialHistorySafe() {

        try {

            if (typeof readTrialHistory === "function") {

                const data = readTrialHistory();

                if (Array.isArray(data)) {
                    return data;
                }
            }

        } catch (e) {}


        try {

            const raw =
                localStorage.getItem(
                    "tinHocTrialExamHistory_v1"
                );

            if (!raw) {
                return [];
            }

            const data = JSON.parse(raw);

            if (Array.isArray(data)) {
                return data;
            }

            if (
                currentUser &&
                currentUser.email &&
                Array.isArray(data[currentUser.email])
            ) {
                return data[currentUser.email];
            }

            if (
                currentUser &&
                currentUser.username &&
                Array.isArray(data[currentUser.username])
            ) {
                return data[currentUser.username];
            }

        } catch (e) {}

        return [];
    }


    /* ========================================================
       3. TRANG LỊCH SỬ
       ======================================================== */

    window.openTrialHistory = function () {

        try {

            if (typeof clearTrialTimer === "function") {
                clearTrialTimer();
            }

        } catch (e) {}


        const history =
            getTrialHistorySafe();


        let html = `

        <div class="trial-page trial-history-page">

            <section class="trial-history-hero">

                <div class="trial-hero-icon">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>

                <div>

                    <span class="trial-kicker">
                        THEO DÕI KẾT QUẢ
                    </span>

                    <h1>
                        LỊCH SỬ LÀM BÀI
                    </h1>

                    <p>
                        Theo dõi toàn bộ các đề thi thử 40 câu đã thực hiện.
                    </p>

                </div>

            </section>


            <div class="trial-history-toolbar">

                <button
                    type="button"
                    class="trial-new"
                    onclick="createNewTrialExam()"
                >
                    <i class="fa-solid fa-shuffle"></i>
                    Tạo đề mới
                </button>


                <button
                    type="button"
                    class="trial-continue"
                    onclick="continueTrialExam()"
                >
                    <i class="fa-solid fa-play"></i>
                    Tiếp tục làm đề
                </button>


                <button
                    type="button"
                    class="trial-back"
                    onclick="renderTrialHome()"
                >
                    <i class="fa-solid fa-arrow-left"></i>
                    Quay lại Thi thử
                </button>

            </div>


            <section class="trial-history-section">

                <div class="trial-section-heading">

                    <div>

                        <span>
                            LỊCH SỬ THI THỬ
                        </span>

                        <h2>
                            <i class="fa-solid fa-list-check"></i>
                            Các bộ đề đã làm
                        </h2>

                    </div>

                    <b>
                        ${history.length} lượt thi
                    </b>

                </div>

        `;


        if (!history.length) {

            html += `

                <div
                    style="
                        text-align:center;
                        padding:45px 20px;
                        color:#64748b;
                    "
                >

                    <i
                        class="fa-regular fa-folder-open"
                        style="
                            font-size:45px;
                            color:#8b5cf6;
                            margin-bottom:12px;
                        "
                    ></i>

                    <h3
                        style="
                            color:#172554;
                            margin:0 0 6px;
                        "
                    >
                        Chưa có lịch sử làm bài
                    </h3>

                    <p>
                        Hãy hoàn thành một đề thi thử.
                        Kết quả sẽ được lưu tại đây.
                    </p>

                    <button
                        type="button"
                        class="trial-new"
                        style="
                            border:0;
                            border-radius:11px;
                            padding:11px 16px;
                            color:white;
                            font-weight:900;
                            cursor:pointer;
                        "
                        onclick="createNewTrialExam()"
                    >
                        <i class="fa-solid fa-play"></i>
                        Làm đề đầu tiên
                    </button>

                </div>

            `;

        } else {

            history
                .slice()
                .reverse()
                .forEach(function (item, reverseIndex) {

                    const realIndex =
                        history.length -
                        1 -
                        reverseIndex;


                    const correct =
                        Number(item.correct || 0);


                    const total =
                        Number(item.total || 40);


                    const percent =
                        Number(
                            item.percent ??
                            Math.round(
                                correct /
                                Math.max(total, 1) *
                                100
                            )
                        );


                    const title =
                        item.title ||
                        (
                            "Đề thi thử #" +
                            (history.length - reverseIndex)
                        );


                    const time =
                        item.time ||
                        (
                            item.timestamp
                                ? new Date(
                                    item.timestamp
                                ).toLocaleString("vi-VN")
                                : ""
                        );


                    /* TỔNG HỢP MODULE */

                    const questions =
                        Array.isArray(item.questions)
                            ? item.questions
                            : [];


                    const moduleMap = {};


                    questions.forEach(function (q) {

                        const module =
                            q.sourceModule ||
                            q.module ||
                            "?";


                        if (!moduleMap[module]) {
                            moduleMap[module] = [];
                        }


                        const sourceQuestion =
                            q.sourceQuestion ||
                            q.originalQuestion ||
                            q.questionNumber;


                        if (sourceQuestion) {

                            moduleMap[module].push(
                                sourceQuestion
                            );

                        }

                    });


                    const moduleText =
                        Object.keys(moduleMap)
                            .map(function (module) {

                                const nums =
                                    moduleMap[module]
                                        .slice(0, 8)
                                        .join(", ");

                                return `
                                    Module ${module}
                                    ${
                                        nums
                                            ? "• câu " + nums
                                            : ""
                                    }
                                `;

                            })
                            .join(" | ");


                    html += `

                        <article
                            class="trial-history-card"
                        >

                            <div
                                class="trial-history-number"
                            >
                                ${history.length - reverseIndex}
                            </div>


                            <div
                                class="trial-history-main"
                            >

                                <h3>
                                    ${escapeHTML(title)}
                                </h3>

                                <p>

                                    <i
                                        class="fa-regular fa-calendar"
                                    ></i>

                                    ${escapeHTML(time)}

                                    &nbsp; • &nbsp;

                                    <i
                                        class="fa-solid fa-circle-check"
                                    ></i>

                                    ${correct}/${total}
                                    câu đúng

                                </p>

                                ${
                                    moduleText
                                    ?
                                    `
                                    <div
                                        style="
                                            margin-top:6px;
                                            color:#6366f1;
                                            font-size:10px;
                                            font-weight:800;
                                        "
                                    >
                                        <i
                                            class="fa-solid fa-layer-group"
                                        ></i>

                                        ${moduleText}
                                    </div>
                                    `
                                    :
                                    ""
                                }

                            </div>


                            <div
                                class="trial-score ${
                                    percent >= 50
                                        ? "pass"
                                        : "fail"
                                }"
                            >

                                <strong>
                                    ${percent}%
                                </strong>

                                <span>
                                    ${correct}/${total}
                                </span>

                            </div>


                            <button
                                type="button"
                                class="trial-review-btn"
                                onclick="
                                    reviewTrialHistory(
                                        ${realIndex}
                                    )
                                "
                            >

                                <i
                                    class="fa-solid fa-eye"
                                ></i>

                                Xem lại

                            </button>

                        </article>

                    `;

                });

        }


        html += `

            </section>

        </div>

        `;


        openOtherPage(html);
    };


    /* ========================================================
       4. THAY CARD THI THỬ BẰNG 3 NÚT
       ======================================================== */

    function decorateTrialHome() {

        const card =
            document.querySelector(
                "#otherPage .trial-entry-card"
            );


        if (!card) {
            return;
        }


        if (
            card.querySelector(
                ".trial-entry-actions"
            )
        ) {
            return;
        }


        const oldButton =
            card.querySelector("button");


        if (oldButton) {
            oldButton.remove();
        }


        const actions =
            document.createElement("div");


        actions.className =
            "trial-entry-actions";


        actions.innerHTML = `

            <button
                type="button"
                class="trial-entry-btn trial-entry-start"
                onclick="openTrialExam()"
            >
                <i class="fa-solid fa-play"></i>
                Vào thi thử
            </button>


            <button
                type="button"
                class="trial-entry-btn trial-entry-continue"
                onclick="continueTrialExam()"
            >
                <i class="fa-solid fa-forward"></i>
                Tiếp tục làm đề
            </button>


            <button
                type="button"
                class="trial-entry-btn trial-entry-history"
                onclick="openTrialHistory()"
            >
                <i class="fa-solid fa-clock-rotate-left"></i>
                Lịch sử làm bài
            </button>

        `;


        card.appendChild(actions);
    }


    /* ========================================================
       5. GHI ĐÈ TRANG HOME THI THỬ
       ======================================================== */

    if (
        typeof window.renderTrialHome ===
        "function"
    ) {

        const oldRenderTrialHome =
            window.renderTrialHome;


        window.renderTrialHome =
            function () {

                oldRenderTrialHome.apply(
                    this,
                    arguments
                );


                setTimeout(
                    decorateTrialHome,
                    30
                );

            };
    }


    /* ========================================================
       6. GHI ĐÈ NÚT MỞ THI THỬ
       ======================================================== */

    const oldOpenTrial =
        window.openTrialExam;


    window.openTrialExam =
        function () {

            if (
                typeof oldOpenTrial ===
                "function"
            ) {

                oldOpenTrial.apply(
                    this,
                    arguments
                );

            } else if (
                typeof renderTrialHome ===
                "function"
            ) {

                renderTrialHome();

            }


            setTimeout(
                decorateTrialHome,
                30
            );

        };


    /* ========================================================
       7. MỞ ĐÚNG MODULE + ĐÚNG CÂU GỐC
       ======================================================== */

    window.openTrialSourceModule =
        function (
            moduleNumber,
            questionNumber
        ) {

            const key =
                "module" +
                Number(moduleNumber);


            const topic =
                typeof quizBank !== "undefined"
                    ? quizBank[key]
                    : null;


            if (
                !topic ||
                !Array.isArray(topic.questions)
            ) {

                showToast(
                    "Không tìm thấy Module " +
                    moduleNumber
                );

                return;
            }


            let index =
                Number(questionNumber || 1) - 1;


            index =
                Math.max(
                    0,
                    Math.min(
                        index,
                        topic.questions.length - 1
                    )
                );


            try {

                currentQuizTopicKey =
                    key;

                currentQuestionIndex =
                    index;

                userQuizAnswers = {};

                isSubmitted = false;


                if (
                    typeof renderQuizBookView ===
                    "function"
                ) {

                    openOtherPage(
                        renderQuizBookView()
                    );

                }

            } catch (e) {

                /*
                 * Cách dự phòng:
                 * dùng startQuiz nếu hệ thống hiện tại
                 * yêu cầu mở module trước.
                 */

                if (
                    typeof startQuiz ===
                    "function"
                ) {

                    startQuiz(key);

                    setTimeout(
                        function () {

                            currentQuestionIndex =
                                index;

                            if (
                                typeof renderQuizBookView ===
                                "function"
                            ) {
                                renderQuizBookView();
                            }

                        },
                        30
                    );

                } else {

                    showToast(
                        "Không thể mở câu gốc."
                    );

                }

            }

        };


    /* ========================================================
       8. HỖ TRỢ NÚT "XEM CÂU GỐC"
       ======================================================== */

    window.goToTrialOriginalQuestion =
        function (
            moduleNumber,
            questionNumber
        ) {

            window.openTrialSourceModule(
                moduleNumber,
                questionNumber
            );

        };


    /* ========================================================
       9. SAU KHI TRANG THI THỬ RENDER
          ĐẢM BẢO HIỆN MODULE + CÂU
       ======================================================== */

    function addSourceInfoToTrial() {

        const page =
            document.querySelector(
                "#otherPage .trial-page"
            );


        if (!page) {
            return;
        }


        const history =
            getTrialHistorySafe();


        /*
         * Không đụng vào nội dung câu hỏi hiện tại
         * nếu JS gốc đã hiển thị source.
         */
    }


    /* ========================================================
       10. OBSERVER NHẸ
       ======================================================== */

    const observer =
        new MutationObserver(
            function () {

                decorateTrialHome();

                addSourceInfoToTrial();

            }
        );


    const otherPage =
        document.getElementById(
            "otherPage"
        );


    if (otherPage) {

        observer.observe(
            otherPage,
            {
                childList:true,
                subtree:true
            }
        );

    }


    /* ========================================================
       11. XUẤT RA WINDOW
       ======================================================== */

    window.openTrialHistory =
        window.openTrialHistory;

    window.goToTrialOriginalQuestion =
        window.goToTrialOriginalQuestion;


})();


/* ============================================================
   THI THỬ 40 CÂU — ALL IN ONE
   - Vào thi thử
   - Tiếp tục làm đề
   - Lịch sử
   - Xem lại đề
   - Xem từng câu
   - Hiện CÂU TRONG ĐỀ + MODULE GỐC + CÂU GỐC
   - Nút quay lại ở mọi trang con
   ============================================================ */

(function () {

"use strict";


/* ============================================================
   CSS
   ============================================================ */

const css = document.createElement("style");

css.id = "trial-complete-all-style";

css.textContent = `

/* ===============================
   BUTTON BACK
   =============================== */

.trial-back-top{
    display:inline-flex !important;
    align-items:center !important;
    gap:8px !important;

    margin-bottom:16px !important;

    padding:10px 15px !important;

    border:0 !important;
    border-radius:11px !important;

    color:#fff !important;

    background:
        linear-gradient(
            135deg,
            #475569,
            #334155
        ) !important;

    font-size:12px !important;
    font-weight:900 !important;

    cursor:pointer !important;

    box-shadow:
        0 7px 18px rgba(15,23,42,.15) !important;

    transition:
        transform .2s ease,
        box-shadow .2s ease !important;
}

.trial-back-top:hover{
    transform:translateY(-2px) !important;

    box-shadow:
        0 10px 22px rgba(15,23,42,.20) !important;
}


/* ===============================
   HISTORY HERO
   =============================== */

.trial-history-page{
    width:100%;
    box-sizing:border-box;

    font-family:
        "Poppins",
        "Segoe UI",
        Arial,
        sans-serif;
}


.trial-history-hero{
    display:flex;
    align-items:center;
    gap:18px;

    padding:24px;

    margin-bottom:16px;

    border-radius:22px;

    color:white;

    background:
        linear-gradient(
            135deg,
            #172554,
            #2563eb,
            #7c3aed,
            #db2777
        );

    box-shadow:
        0 15px 40px rgba(37,99,235,.20);
}


.trial-hero-icon{
    width:64px;
    height:64px;
    min-width:64px;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:17px;

    background:rgba(255,255,255,.15);

    font-size:27px;
}


.trial-history-hero h1{
    margin:3px 0 4px;

    font-size:25px;
    font-weight:900;
}


.trial-history-hero p{
    margin:0;

    color:rgba(255,255,255,.82);

    font-size:12px;
}


/* ===============================
   HISTORY TOOLBAR
   =============================== */

.trial-history-toolbar{
    display:flex;
    flex-wrap:wrap;
    gap:9px;

    margin-bottom:17px;
}


.trial-history-toolbar button{
    border:0;
    border-radius:11px;

    padding:10px 14px;

    color:white;

    font-size:12px;
    font-weight:900;

    cursor:pointer;

    transition:
        transform .2s ease,
        box-shadow .2s ease;
}


.trial-history-toolbar button:hover{
    transform:translateY(-2px);
}


.trial-new{
    background:
        linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
        );
}


.trial-continue{
    background:
        linear-gradient(
            135deg,
            #059669,
            #0d9488
        );
}


.trial-back{
    background:
        linear-gradient(
            135deg,
            #64748b,
            #475569
        );
}


/* ===============================
   HISTORY SECTION
   =============================== */

.trial-history-section{
    background:
        linear-gradient(
            145deg,
            #fff,
            #f8fbff,
            #faf5ff
        );

    border:1px solid #dbe4f0;

    border-radius:20px;

    padding:18px;

    box-shadow:
        0 10px 30px rgba(37,99,235,.07);
}


.trial-section-heading{
    display:flex;
    align-items:center;
    justify-content:space-between;

    margin-bottom:14px;
}


.trial-section-heading span{
    color:#7c3aed;

    font-size:10px;
    font-weight:900;

    letter-spacing:1.2px;
}


.trial-section-heading h2{
    margin:3px 0 0;

    color:#172554;

    font-size:19px;
    font-weight:900;
}


/* ===============================
   HISTORY CARD
   =============================== */

.trial-history-card{
    display:flex;
    align-items:center;

    gap:13px;

    padding:14px;

    margin-bottom:10px;

    border:2px solid #e2e8f0;
    border-radius:15px;

    background:#fff;

    transition:
        transform .2s ease,
        border-color .2s ease,
        box-shadow .2s ease;
}


.trial-history-card:hover{
    transform:translateY(-2px);

    border-color:#a78bfa;

    box-shadow:
        0 9px 24px rgba(124,58,237,.10);
}


.trial-history-number{
    width:42px;
    height:42px;
    min-width:42px;

    display:flex;
    align-items:center;
    justify-content:center;

    border-radius:12px;

    color:#fff;

    font-weight:900;

    background:
        linear-gradient(
            135deg,
            #06b6d4,
            #2563eb,
            #7c3aed
        );
}


.trial-history-main{
    flex:1;
    min-width:0;
}


.trial-history-main h3{
    margin:0 0 4px;

    color:#172554;

    font-size:14px;
    font-weight:900;
}


.trial-history-main p{
    margin:0;

    color:#64748b;

    font-size:11px;
}


/* ===============================
   MODULE TAGS
   =============================== */

.trial-module-summary{
    display:flex;
    flex-wrap:wrap;
    gap:5px;

    margin-top:7px;
}


.trial-module-tag{
    display:inline-flex;
    align-items:center;
    gap:4px;

    padding:4px 8px;

    border-radius:7px;

    color:#4338ca;

    background:#eef2ff;

    font-size:9px;
    font-weight:800;
}


/* ===============================
   SCORE
   =============================== */

.trial-score{
    min-width:65px;

    padding:7px 9px;

    border-radius:11px;

    text-align:center;
}


.trial-score strong{
    display:block;

    font-size:17px;
    font-weight:900;
}


.trial-score span{
    font-size:10px;
}


.trial-score.pass{
    color:#047857;
    background:#d1fae5;
}


.trial-score.fail{
    color:#be123c;
    background:#ffe4e6;
}


/* ===============================
   REVIEW BUTTON
   =============================== */

.trial-review-btn{
    padding:9px 13px;

    border:0;
    border-radius:10px;

    color:#fff;

    background:
        linear-gradient(
            135deg,
            #7c3aed,
            #db2777
        );

    font-size:11px;
    font-weight:900;

    cursor:pointer;

    transition:
        transform .2s ease,
        box-shadow .2s ease;
}


.trial-review-btn:hover{
    transform:translateY(-2px);

    box-shadow:
        0 8px 20px rgba(124,58,237,.20);
}


/* ============================================================
   REVIEW PAGE
   ============================================================ */

.trial-review-page{
    width:100%;

    font-family:
        "Poppins",
        "Segoe UI",
        Arial,
        sans-serif;
}


/* header */

.trial-review-header{
    padding:22px;

    margin-bottom:15px;

    border-radius:20px;

    color:white;

    background:
        linear-gradient(
            135deg,
            #172554,
            #2563eb,
            #7c3aed
        );

    box-shadow:
        0 13px 35px rgba(37,99,235,.18);
}


.trial-review-header h1{
    margin:5px 0;

    font-size:23px;
    font-weight:900;
}


.trial-review-header p{
    margin:0;

    color:rgba(255,255,255,.82);

    font-size:12px;
}


/* summary */

.trial-review-summary{
    display:flex;
    flex-wrap:wrap;

    gap:9px;

    margin-bottom:15px;
}


.trial-review-stat{
    flex:1;

    min-width:120px;

    padding:12px;

    border-radius:13px;

    border:1px solid #dbeafe;

    background:
        linear-gradient(
            135deg,
            #fff,
            #f8fbff
        );
}


.trial-review-stat span{
    display:block;

    color:#64748b;

    font-size:10px;
}


.trial-review-stat strong{
    display:block;

    margin-top:3px;

    color:#312e81;

    font-size:18px;
}


/* question review card */

.trial-review-question{
    padding:17px;

    margin-bottom:11px;

    border:2px solid #e2e8f0;

    border-radius:17px;

    background:#fff;

    box-shadow:
        0 7px 20px rgba(37,99,235,.05);
}


/* HEADER CỦA CÂU */

.trial-review-question-head{
    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:10px;

    margin-bottom:10px;
}


.trial-review-question-number{
    padding:7px 11px;

    border-radius:9px;

    color:#fff;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
        );

    font-size:11px;

    font-weight:900;
}


/* MODULE */

.trial-review-source{
    display:inline-flex;

    align-items:center;

    gap:6px;

    padding:7px 10px;

    border-radius:9px;

    color:#4338ca;

    background:
        linear-gradient(
            135deg,
            #ecfeff,
            #eef2ff,
            #faf5ff
        );

    border:1px solid #ddd6fe;

    font-size:10px;

    font-weight:800;
}


.trial-review-source b{
    color:#7c3aed;
}


/* question text */

.trial-review-question-text{
    margin-bottom:12px;

    color:#172554;

    font-size:14px;

    line-height:1.6;

    font-weight:800;
}


/* answer */

.trial-review-answer{
    padding:10px 12px;

    margin:6px 0;

    border-radius:10px;

    border:1px solid #e2e8f0;

    background:#f8fafc;

    color:#475569;

    font-size:12px;
}


.trial-review-answer.correct{
    color:#047857;

    background:#ecfdf5;

    border-color:#6ee7b7;

    font-weight:800;
}


.trial-review-answer.wrong{
    color:#be123c;

    background:#fff1f2;

    border-color:#fda4af;

    font-weight:800;
}


/* source button */

.trial-original-btn{
    display:inline-flex;

    align-items:center;

    gap:7px;

    margin-top:10px;

    padding:9px 13px;

    border:0;

    border-radius:10px;

    color:#fff;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
        );

    font-size:11px;

    font-weight:900;

    cursor:pointer;

    transition:
        transform .2s ease,
        box-shadow .2s ease;
}


.trial-original-btn:hover{
    transform:translateY(-2px);

    box-shadow:
        0 8px 20px rgba(124,58,237,.20);
}


/* ===============================
   MOBILE
   =============================== */

@media(max-width:700px){

    .trial-history-hero{
        padding:18px;

        border-radius:17px;
    }

    .trial-history-hero h1{
        font-size:20px;
    }

    .trial-history-card{
        flex-wrap:wrap;
    }

    .trial-history-main{
        min-width:
            calc(100% - 60px);
    }

    .trial-score{
        margin-left:55px;
    }

    .trial-review-btn{
        margin-left:auto;
    }

    .trial-history-toolbar{
        flex-direction:column;
    }

    .trial-history-toolbar button{
        width:100%;
    }

    .trial-review-question-head{
        flex-direction:column;

        align-items:flex-start;
    }

    .trial-review-source{
        width:100%;

        box-sizing:border-box;
    }

}

`;

document.head.appendChild(css);


/* ============================================================
   LẤY LỊCH SỬ
   ============================================================ */

function getHistory(){

    try{

        if(
            typeof readTrialHistory === "function"
        ){

            const x = readTrialHistory();

            if(Array.isArray(x)){
                return x;
            }

        }

    }catch(e){}


    try{

        const raw =
            localStorage.getItem(
                "tinHocTrialExamHistory_v1"
            );

        if(!raw){
            return [];
        }

        const data = JSON.parse(raw);

        if(Array.isArray(data)){
            return data;
        }

    }catch(e){}

    return [];
}


/* ============================================================
   NÚT QUAY LẠI
   ============================================================ */

function backToTrialHome(){

    if(
        typeof renderTrialHome === "function"
    ){

        renderTrialHome();

    }

}


/* ============================================================
   LỊCH SỬ
   ============================================================ */

window.openTrialHistory = function(){

    const history = getHistory();

    let html = `

    <div class="trial-history-page">

        <button
            class="trial-back-top"
            onclick="renderTrialHome()"
        >
            <i class="fa-solid fa-arrow-left"></i>
            Quay lại Thi thử
        </button>


        <section class="trial-history-hero">

            <div class="trial-hero-icon">

                <i class="fa-solid fa-clock-rotate-left"></i>

            </div>

            <div>

                <span class="trial-kicker">
                    THEO DÕI KẾT QUẢ
                </span>

                <h1>
                    LỊCH SỬ LÀM BÀI
                </h1>

                <p>
                    Xem lại toàn bộ các đề thi thử đã hoàn thành.
                </p>

            </div>

        </section>


        <div class="trial-history-toolbar">

            <button
                class="trial-new"
                onclick="createNewTrialExam()"
            >
                <i class="fa-solid fa-shuffle"></i>
                Tạo đề mới
            </button>


            <button
                class="trial-continue"
                onclick="continueTrialExam()"
            >
                <i class="fa-solid fa-forward"></i>
                Tiếp tục làm đề
            </button>

        </div>


        <section class="trial-history-section">

            <div class="trial-section-heading">

                <div>

                    <span>
                        LỊCH SỬ THI THỬ
                    </span>

                    <h2>
                        <i class="fa-solid fa-list-check"></i>
                        Các đề đã làm
                    </h2>

                </div>

            </div>

    `;


    if(!history.length){

        html += `

        <div style="
            text-align:center;
            padding:45px 15px;
        ">

            <i
                class="fa-regular fa-folder-open"
                style="
                    font-size:45px;
                    color:#8b5cf6;
                "
            ></i>

            <h3>
                Chưa có lịch sử làm bài
            </h3>

            <p>
                Hãy hoàn thành một đề thi thử.
            </p>

            <button
                class="trial-new"
                onclick="createNewTrialExam()"
                style="
                    border:0;
                    border-radius:10px;
                    padding:10px 15px;
                    color:#fff;
                    font-weight:900;
                    cursor:pointer;
                "
            >
                <i class="fa-solid fa-play"></i>
                Làm đề đầu tiên
            </button>

        </div>

        `;

    }
    else{

        history
        .slice()
        .reverse()
        .forEach(function(item, reverseIndex){

            const realIndex =
                history.length -
                1 -
                reverseIndex;


            const correct =
                Number(item.correct || 0);


            const total =
                Number(item.total || 40);


            const percent =
                Number(
                    item.percent ??
                    Math.round(
                        correct /
                        Math.max(total,1) *
                        100
                    )
                );


            const title =
                item.title ||
                (
                    "Đề thi thử #" +
                    (history.length - reverseIndex)
                );


            const time =
                item.time ||
                (
                    item.timestamp
                    ?
                    new Date(
                        item.timestamp
                    ).toLocaleString("vi-VN")
                    :
                    ""
                );


            const questions =
                Array.isArray(item.questions)
                ?
                item.questions
                :
                [];


            const modules = {};


            questions.forEach(function(q){

                const m =
                    q.sourceModule ||
                    q.module ||
                    "?";


                const n =
                    q.sourceQuestion ||
                    q.originalQuestion ||
                    q.questionNumber;


                if(!modules[m]){
                    modules[m] = [];
                }


                if(n){
                    modules[m].push(n);
                }

            });


            let moduleHTML = "";


            Object.keys(modules)
            .forEach(function(m){

                const nums =
                    modules[m]
                    .slice()
                    .join(", ");


                moduleHTML += `

                    <span class="trial-module-tag">

                        <i class="fa-solid fa-layer-group"></i>

                        Module ${m}

                        ${
                            nums
                            ?
                            " • câu " + nums
                            :
                            ""
                        }

                    </span>

                `;

            });


            html += `

            <article
                class="trial-history-card"
            >

                <div
                    class="trial-history-number"
                >
                    ${history.length - reverseIndex}
                </div>


                <div
                    class="trial-history-main"
                >

                    <h3>
                        ${escapeHTML(title)}
                    </h3>


                    <p>

                        <i class="fa-regular fa-calendar"></i>

                        ${escapeHTML(time)}

                        &nbsp; • &nbsp;

                        <i class="fa-solid fa-circle-check"></i>

                        ${correct}/${total}
                        câu đúng

                    </p>


                    <div class="trial-module-summary">

                        ${moduleHTML}

                    </div>

                </div>


                <div
                    class="trial-score ${
                        percent >= 50
                        ?
                        "pass"
                        :
                        "fail"
                    }"
                >

                    <strong>
                        ${percent}%
                    </strong>

                    <span>
                        ${correct}/${total}
                    </span>

                </div>


                <button
                    class="trial-review-btn"
                    onclick="
                        reviewTrialHistory(
                            ${realIndex}
                        )
                    "
                >

                    <i class="fa-solid fa-eye"></i>

                    Xem lại đề

                </button>

            </article>

            `;

        });

    }


    html += `

        </section>

    </div>

    `;


    openOtherPage(html);

};


/* ============================================================
   XEM LẠI MỘT ĐỀ
   ============================================================ */

window.reviewTrialHistory = function(index){

    const history = getHistory();

    const item = history[index];


    if(!item){

        showToast(
            "Không tìm thấy đề thi này."
        );

        return;
    }


    const questions =
        Array.isArray(item.questions)
        ?
        item.questions
        :
        [];


    const correct =
        Number(item.correct || 0);


    const total =
        Number(item.total || questions.length || 40);


    const percent =
        Number(
            item.percent ??
            Math.round(
                correct /
                Math.max(total,1) *
                100
            )
        );


    let html = `

    <div class="trial-review-page">

        <button
            class="trial-back-top"
            onclick="openTrialHistory()"
        >
            <i class="fa-solid fa-arrow-left"></i>
            Quay lại Lịch sử làm bài
        </button>


        <section class="trial-review-header">

            <span class="trial-kicker">
                XEM LẠI ĐỀ THI
            </span>

            <h1>
                ${escapeHTML(
                    item.title ||
                    "Đề thi thử"
                )}
            </h1>

            <p>
                Xem chính xác từng câu đã làm
                và vị trí câu hỏi trong Module gốc.
            </p>

        </section>


        <div class="trial-review-summary">

            <div class="trial-review-stat">

                <span>
                    KẾT QUẢ
                </span>

                <strong>
                    ${correct}/${total}
                </strong>

            </div>


            <div class="trial-review-stat">

                <span>
                    ĐIỂM
                </span>

                <strong>
                    ${percent}%
                </strong>

            </div>


            <div class="trial-review-stat">

                <span>
                    THỜI GIAN
                </span>

                <strong style="font-size:13px;">
                    ${escapeHTML(
                        item.time || ""
                    )}
                </strong>

            </div>

        </div>


        <section>

    `;


    questions.forEach(function(q,indexQ){

        const moduleNumber =
            q.sourceModule ||
            q.module ||
            "?";


        const sourceQuestion =
            q.sourceQuestion ||
            q.originalQuestion ||
            q.questionNumber ||
            "?";


        const userAnswer =
            q.userAnswer ??
            q.answer ??
            "";


        const correctAnswer =
            q.correctAnswer ??
            q.correct ??
            "";


        const questionText =
            q.question ||
            q.text ||
            q.questionText ||
            "";


        /*
         * Xác định đúng/sai
         */

        const isCorrect =
            String(userAnswer)
            .trim()
            .toUpperCase()
            ===
            String(correctAnswer)
            .trim()
            .toUpperCase();


        let answersHTML = "";


        if(Array.isArray(q.options)){

            answersHTML =
                q.options
                .map(function(option,optIndex){

                    let text =
                        typeof option === "string"
                        ?
                        option
                        :
                        (
                            option.text ||
                            option.content ||
                            ""
                        );


                    let letter =
                        String.fromCharCode(
                            65 + optIndex
                        );


                    let cls = "";


                    if(
                        letter ===
                        String(correctAnswer)
                        .trim()
                        .toUpperCase()
                    ){

                        cls = "correct";

                    }
                    else if(
                        letter ===
                        String(userAnswer)
                        .trim()
                        .toUpperCase()
                    ){

                        cls = "wrong";

                    }


                    return `

                        <div
                            class="
                                trial-review-answer
                                ${cls}
                            "
                        >

                            <b>
                                ${letter}.
                            </b>

                            ${escapeHTML(text)}

                            ${
                                cls === "correct"
                                ?
                                " ✓ Đáp án đúng"
                                :
                                ""
                            }

                            ${
                                cls === "wrong"
                                ?
                                " ✗ Bạn chọn"
                                :
                                ""
                            }

                        </div>

                    `;

                })
                .join("");

        }


        html += `

        <article
            class="trial-review-question"
        >

            <!-- SỐ CÂU TRONG ĐỀ + MODULE -->

            <div
                class="trial-review-question-head"
            >

                <span
                    class="trial-review-question-number"
                >
                    CÂU ${indexQ + 1}
                    / ${total}
                </span>


                <span
                    class="trial-review-source"
                >

                    <i class="fa-solid fa-database"></i>

                    Module

                    <b>
                        ${moduleNumber}
                    </b>

                    • Câu gốc

                    <b>
                        ${sourceQuestion}
                    </b>

                </span>

            </div>


            <!-- NỘI DUNG -->

            <div
                class="trial-review-question-text"
            >

                ${escapeHTML(questionText)}

            </div>


            <!-- ĐÁP ÁN -->

            ${answersHTML}


            <!-- TRẠNG THÁI -->

            <div
                style="
                    margin-top:10px;
                    font-size:11px;
                    font-weight:900;
                    color:${
                        isCorrect
                        ?
                        "#059669"
                        :
                        "#e11d48"
                    };
                "
            >

                ${
                    isCorrect
                    ?
                    "✓ Bạn trả lời đúng"
                    :
                    "✗ Bạn trả lời sai"
                }

            </div>


            <!-- NÚT MỞ ĐÚNG CÂU GỐC -->

            <button
                type="button"
                class="trial-original-btn"
                onclick="
                    openTrialSourceModule(
                        ${Number(moduleNumber)},
                        ${Number(sourceQuestion)}
                    )
                "
            >

                <i
                    class="fa-solid fa-arrow-up-right-from-square"
                ></i>

                Mở câu ${sourceQuestion}
                trong Module ${moduleNumber}

            </button>

        </article>

        `;

    });


    html += `

        </section>


        <!-- QUAY LẠI Ở CUỐI -->

        <button
            class="trial-back-top"
            onclick="openTrialHistory()"
            style="margin-top:6px !important;"
        >

            <i class="fa-solid fa-arrow-left"></i>

            Quay lại Lịch sử làm bài

        </button>

    </div>

    `;


    openOtherPage(html);

};


/* ============================================================
   MỞ ĐÚNG MODULE + ĐÚNG CÂU
   ============================================================ */

window.openTrialSourceModule =
function(moduleNumber,questionNumber){

    const key =
        "module" +
        Number(moduleNumber);


    if(
        typeof quizBank === "undefined" ||
        !quizBank[key]
    ){

        showToast(
            "Không tìm thấy Module " +
            moduleNumber
        );

        return;
    }


    const topic =
        quizBank[key];


    if(
        !Array.isArray(topic.questions)
    ){

        showToast(
            "Module này không có câu hỏi."
        );

        return;
    }


    let index =
        Number(questionNumber || 1) - 1;


    index =
        Math.max(
            0,
            Math.min(
                index,
                topic.questions.length - 1
            )
        );


    /*
     * Lưu trạng thái module
     */

    try{

        currentQuizTopicKey =
            key;

        currentQuestionIndex =
            index;

        userQuizAnswers = {};

        isSubmitted = false;

    }catch(e){}


    /*
     * Nếu hệ thống có hàm startQuiz,
     * mở module trước.
     */

    if(
        typeof startQuiz === "function"
    ){

        try{

            startQuiz(key);

        }catch(e){}

    }


    /*
     * Sau khi module mở,
     * đưa tới đúng câu.
     */

    setTimeout(function(){

        try{

            currentQuizTopicKey =
                key;

            currentQuestionIndex =
                index;


            if(
                typeof renderQuizBookView ===
                "function"
            ){

                renderQuizBookView();

            }

        }catch(e){

            console.error(
                "Không mở được câu gốc:",
                e
            );

        }

    },50);

};


/* ============================================================
   ĐẢM BẢO CARD TRANG THI THỬ CÓ 3 NÚT
   ============================================================ */

function decorateTrialCard(){

    const card =
        document.querySelector(
            "#otherPage .trial-entry-card"
        );


    if(!card){
        return;
    }


    if(
        card.querySelector(
            ".trial-entry-actions"
        )
    ){
        return;
    }


    const oldButton =
        card.querySelector("button");


    if(oldButton){
        oldButton.remove();
    }


    const actions =
        document.createElement("div");


    actions.className =
        "trial-entry-actions";


    actions.innerHTML = `

        <button
            type="button"
            class="
                trial-entry-btn
                trial-entry-start
            "
            onclick="openTrialExam()"
        >

            <i class="fa-solid fa-play"></i>

            Vào thi thử

        </button>


        <button
            type="button"
            class="
                trial-entry-btn
                trial-entry-continue
            "
            onclick="continueTrialExam()"
        >

            <i class="fa-solid fa-forward"></i>

            Tiếp tục làm đề

        </button>


        <button
            type="button"
            class="
                trial-entry-btn
                trial-entry-history
            "
            onclick="openTrialHistory()"
        >

            <i
                class="fa-solid fa-clock-rotate-left"
            ></i>

            Lịch sử làm bài

        </button>

    `;


    card.appendChild(actions);

}


/* ============================================================
   QUAN SÁT TRANG
   ============================================================ */

const observer =
new MutationObserver(function(){

    decorateTrialCard();

});


const other =
document.getElementById(
    "otherPage"
);


if(other){

    observer.observe(
        other,
        {
            childList:true,
            subtree:true
        }
    );

}


/* ============================================================
   ĐẢM BẢO HÀM GLOBAL
   ============================================================ */

window.backToTrialHome =
    backToTrialHome;


})();