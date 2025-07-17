Nếu chỉ cần prompt mà không muốn qua proxy, có thể tham khảo các file [xxx]compact.md.

If you only need the prompt and don't want to use a proxy, you can refer to the [xxx]compact.md files.

---

# Augment Prompts Collection

A collection of specialized prompts for Augment AI assistant to enhance development workflows and research capabilities.

### Available Prompts / Prompt Có Sẵn

- `coder.md` - Enhanced coding assistant with systematic development approach
- `research.md` - Specialized research and analysis capabilities
- `prompt.md` - General prompt engineering and optimization

Feel free to suggest new prompt categories or improvements! / Hãy thoải mái đề xuất danh mục prompt mới hoặc cải tiến!

### Setup Instructions

#### 1. Run the Proxy

Create a `compose.yaml` file with the following content:

```yaml
services:
  augment-request-parser:
    container_name: augment-request-parser
    image: nullmastermind/augment-request-parser
    pull_policy: always
    restart: unless-stopped
    expose:
      - 8863

  augment-proxy:
    image: "nullmastermind/augment-prompt-proxy:latest"
    ports:
      - '${PROXY_PORT:-8864}:8080'
    environment:
      - REQUEST_PARSET_BASE_URL=http://augment-request-parser:8863
    restart: unless-stopped
    pull_policy: always
```

**Setup Steps:**

1. Run the command `docker compose up -d` - your proxy will be available at `http://localhost:8864`
2. Configure this proxy in your browser
3. From the browser with proxy configured, visit `http://mitm.it` and install the appropriate certificate (this step
   only needs to be done once during initial setup)
4. Remove the proxy from your browser, then configure it in your VSCode or JetBrains IDE
5. Restart your VSCode or JetBrains IDE

#### 2. Prompt Setup

Go to 'Augment Memories' to set up the prompt using the syntax:

$(prompt_name)

For example, if you want to use the research.md prompt, go to Augment Memories and add `$(research)`

### Why Use a Proxy?

- **Tool Management**: The proxy can disable unnecessary tools (e.g., research agents won't be allowed to use file
  editing tools)
- **Extended Prompts**: Enables using prompts longer than Augment's default limits

---

### Hướng Dẫn Cài Đặt

#### 1. Chạy Proxy

Tạo file `compose.yaml` với nội dung sau:

```yaml
services:
  augment-request-parser:
    container_name: augment-request-parser
    image: nullmastermind/augment-request-parser
    pull_policy: always
    restart: unless-stopped
    expose:
      - 8863

  augment-proxy:
    image: "nullmastermind/augment-prompt-proxy:latest"
    ports:
      - '${PROXY_PORT:-8864}:8080'
    environment:
      - REQUEST_PARSET_BASE_URL=http://augment-request-parser:8863
    restart: unless-stopped
    pull_policy: always
```

**Các bước thiết lập:**

1. Chạy lệnh `docker compose up -d` - proxy của bạn sẽ ở địa chỉ `http://localhost:8864`
2. Thiết lập proxy đó vào trình duyệt của bạn
3. Từ trình duyệt đã được set proxy, truy cập `http://mitm.it` và cài chứng chỉ phù hợp (bước này chỉ cần làm duy nhất 1
   lần đầu setup)
4. Bỏ proxy khỏi trình duyệt, sau đó thiết lập proxy đó vào VSCode hoặc JetBrains của bạn
5. Khởi động lại VSCode hoặc JetBrains của bạn

#### 2. Thiết Lập Prompt

Vào 'Augment Memories' để thiết lập prompt sử dụng bằng cú pháp:

$(prompt_name)

ví dụ muốn sử dụng prompt research.md thì vào Augement Memories và thêm `$(research)`

### Tại Sao Cần Proxy?

- **Quản Lý Tool**: Proxy có tính năng tắt tool không cần thiết (ví dụ agent research sẽ không được phép dùng tool chỉnh
  sửa file)
- **Prompt Dài Hơn**: Giúp có thể sử dụng prompt dài hơn giá trị giới hạn của Augment
- **Tối Ưu Chi Phí**: Bao gồm các tối ưu hóa giúp tiết kiệm request credit

---

## Contributing / Đóng Góp

We welcome contributions to improve existing prompts or add new ones! / Chúng tôi hoan nghênh các đóng góp để cải thiện
prompt hiện có hoặc thêm prompt mới!

### How to Contribute / Cách Đóng Góp

1. **Fork this repository** / **Fork repository này**
2. **Create a new branch** for your changes / **Tạo branch mới** cho thay đổi của bạn
3. **Add or modify prompts** in the `.md` files / **Thêm hoặc chỉnh sửa prompt** trong các file `.md`
4. **Test your prompts** with the Augment AI assistant / **Test prompt** với Augment AI assistant
5. **Submit a pull request** with a clear description of your changes / **Gửi pull request** với mô tả rõ ràng về thay
   đổi

### Guidelines / Hướng Dẫn

- **English and Vietnamese**: Please provide prompts in both languages when possible / **Tiếng Anh và Tiếng Việt**: Vui
  lòng cung cấp prompt bằng cả hai ngôn ngữ khi có thể
- **Clear Documentation**: Include clear descriptions of what each prompt does / **Tài Liệu Rõ Ràng**: Bao gồm mô tả rõ
  ràng về chức năng của mỗi prompt
- **Testing**: Ensure your prompts work correctly with the Augment system / **Kiểm Tra**: Đảm bảo prompt hoạt động chính
  xác với hệ thống Augment
- **Formatting**: Follow proper Markdown formatting standards / **Định Dạng**: Tuân theo chuẩn định dạng Markdown
