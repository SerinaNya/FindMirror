    ``` bash
    sudo sed -i 's@(http|https)://[^/]*@{{ mirror_base }}@g' /etc/apt/sources.list && sudo apt update
    ```

    {% if mirror_base.endswith('.hk') %}
    !!! danger "地區限定"

        🌏 僅推薦位於 **🇭🇰 中國香港特別行政區** 的使用者使用。

        其他地区的用户可能无法访问。
    {% endif %}

    !!! warning "适用于 DEB822 格式"

        通常来说，对于 Debian 12 (bookworm) 及后续版本的**👉 容器镜像 👈**（Docker Image 之类的），**才需要**使用以下命令。

        ``` bash
        sudo sed -i 's@(http|https)://deb.debian.org@{{ mirror_base }}@g' /etc/apt/sources.list.d/debian.sources && sudo apt update
        ```
