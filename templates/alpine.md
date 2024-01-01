    ``` bash
    sed -i "s@(http|https)://dl-cdn.alpinelinux.org@{{ mirror_base }}@g" /etc/apk/repositories && apk update
    ```