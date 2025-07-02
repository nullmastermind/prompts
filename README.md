1. Chạy proxy sau:

- tạo file `compose.yaml` với nội dung sau:

```yaml
services:
  augment-proxy:
    image: "nullmastermind/augment-proxy:latest"
    ports:
      - '${PROXY_PORT:-8864}:8080'
    restart: unless-stopped
    pull_policy: always
```

- chạy lệnh `docker compose up -d` proxy của bạn sẽ ở địa chỉ `http://localhost:8864`
- thiết lập proxy đó vào trình duyệt của bạn
- từ trình duyệt đã được set proxy truy cập `http://mitm.it` cài chứng chỉ phù hợp, bước này chỉ cần làm duy nhất 1 lần
  đầu setup
- bỏ proxy khỏi trình duyệt sau đó thiết lập proxy đó vào vscode hoặc jetbrains của bạn
- khởi động lại vscode hoặc jetbrains của bạn

2. tải tool tự động thêm prompt

```shell
npm i -g @dccxx/aug
```

lệnh thêm prompt:

```yaml
aug prompt_name
```

ví dụ `aug coder`, `aug research`,... là tên các file.md đang có trong git này

### Tại sao cần proxy

Proxy sẽ có tính năng tắt tool không cần thiết (ví dụ agent research sẽ không được phép dùng tool chỉnh sửa file)

Proxy sẽ giúp có thể sử dụng prompt dài hơn giá trị giới hạn của Augment

Và một số black magic tiết kiệm request credit cuối tháng trả tiền bạn sẽ bất ngờ