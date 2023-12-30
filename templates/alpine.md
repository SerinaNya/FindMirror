    ``` bash
    sed -i "s@https?://dl-cdn.alpinelinux.org@{{ mirror_base }}@g" /etc/apk/repositories && apk update
    ```