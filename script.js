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
    ]
  },

  module2: {
    title: "Module 2: SỬ DỤNG MÁY TÍNH CƠ BẢN",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 2.",
    questions: [
      {
        q: "Trong Windows, tổ hợp phím nào dùng để chụp màn hình và lưu vào Clipboard?",
        options: ["Print Screen (PrtScn)", "Ctrl + C", "Alt + F4", "Ctrl + V"],
        answer: 0,
        explain: "Phím Print Screen giúp chụp toàn bộ màn hình vào bộ nhớ tạm Clipboard."
      },
      {
        q: "Đâu là phím tắt để mở nhanh Windows Explorer?",
        options: ["Windows + E", "Windows + R", "Windows + D", "Windows + L"],
        answer: 0,
        explain: "Tổ hợp phím Windows + E giúp mở nhanh cửa sổ File Explorer."
      },
      {
        q: "Để xóa vĩnh viễn một tệp tin mà không chuyển vào Recycle Bin, ta nhấn tổ hợp phím nào?",
        options: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"],
        answer: 0,
        explain: "Shift + Delete sẽ xóa vĩnh viễn tệp/thư mục khỏi đĩa cứng."
      }
    ]
  },

  module3: {
    title: "Module 3: XỬ LÝ VĂN BẢN CƠ BẢN (MS WORD)",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 3.",
    questions: [
      {
        q: "Trong MS Word, tổ hợp phím Ctrl + Z có tác dụng gì?",
        options: ["Khôi phục thao tác trước đó (Undo)", "Lưu văn bản", "Đóng văn bản", "In văn bản"],
        answer: 0,
        explain: "Ctrl + Z dùng để hoàn tác (Undo) thao tác vừa thực hiện."
      },
      {
        q: "Để chọn toàn bộ văn bản trong MS Word, ta nhấn tổ hợp phím nào?",
        options: ["Ctrl + A", "Ctrl + B", "Ctrl + C", "Ctrl + X"],
        answer: 0,
        explain: "Ctrl + A (Select All) chọn toàn bộ nội dung văn bản."
      }
    ]
  },

  module4: {
    title: "Module 4: SỬ DỤNG BẢNG TÍNH CƠ BẢN (MS EXCEL)",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 4.",
    questions: [
      {
        q: "Trong Excel, công thức luôn bắt đầu bằng ký tự nào?",
        options: ["Dấu bằng (=)", "Dấu cộng (+)", "Dấu hai chấm (:)", "Dấu chấm hỏi (?)"],
        answer: 0,
        explain: "Tất cả các công thức trong Excel đều phải bắt đầu bằng dấu '='."
      },
      {
        q: "Địa chỉ ô $A$1 trong Excel thuộc loại địa chỉ nào?",
        options: ["Địa chỉ tuyệt đối", "Địa chỉ tương đối", "Địa chỉ hỗn hợp", "Địa chỉ ngoài"],
        answer: 0,
        explain: "Dấu $ đằng trước tên cột và dòng cố định ô, gọi là địa chỉ tuyệt đối."
      }
    ]
  },

  module5: {
    title: "Module 5: SỬ DỤNG CÁC BẢN TRÌNH CHIẾU CƠ BẢN (MS POWERPOINT)",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 5.",
    questions: [
      {
        q: "Để bắt đầu trình chiếu bài PowerPoint từ slide đầu tiên, ta nhấn phím nào?",
        options: ["F5", "Shift + F5", "F1", "ESC"],
        answer: 0,
        explain: "Phím F5 dùng để bắt đầu trình chiếu từ slide đầu tiên."
      },
      {
        q: "Phím tắt Shift + F5 trong PowerPoint dùng để làm gì?",
        options: ["Trình chiếu từ slide đang chọn", "Thoát trình chiếu", "Thêm slide mới", "Xóa slide"],
        answer: 0,
        explain: "Shift + F5 trình chiếu ngay tại trang slide hiện tại."
      }
    ]
  },

  module6: {
    title: "Module 6: SỬ DỤNG INTERNET CƠ BẢN",
    description: "Ngân hàng câu hỏi trắc nghiệm Module 6.",
    questions: [
      {
        q: "Giao thức bảo mật HTTPS sử dụng cổng kết nối mặc định nào?",
        options: ["443", "80", "21", "25"],
        answer: 0,
        explain: "HTTPS giao tiếp qua cổng 443 an toàn hơn cổng 80 của HTTP."
      },
      {
        q: "WWW là viết tắt của từ nào?",
        options: ["World Wide Web", "World Wide Waves", "World Wide Work", "World Wide Windows"],
        answer: 0,
        explain: "WWW = World Wide Web."
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
    other.innerHTML = htmlContent;
    other.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    userQuizAnswers[currentQuestionIndex] = optIndex;
    renderQuizBookView();
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
                                onclick="openResourceFile(
                                    '${escapeHTML(
                                        exam.file
                                    )}',
                                    '${escapeHTML(
                                        exam.title
                                    )}'
                                )"
                            >

                                <i
                                    class="fa-solid fa-download"
                                ></i>

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
                                Lý thuyết theo từng module
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
                                nội dung lý thuyết được chia
                                thành từng module giống hệ thống
                                ôn tập trắc nghiệm.
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
                    chuẩn bị cho các bài kiểm tra.
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

