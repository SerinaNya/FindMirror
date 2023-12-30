# Alpine

!!! abstract

    Alpine Linux 是一个轻量级的 Linux 发行版，专注于安全和效率。

    <https://alpinelinux.org/>

{% for name, mirror_base in {
    "上海交通大学 SJTUG": "https://mirror.sjtu.edu.cn",
    "清华大学 TUNA": "https://mirrors.tuna.tsinghua.edu.cn",
    "南京大学 NJU": "https://mirror.nju.edu.cn",
    "中国科学技术大学 USTC": "https://mirrors.ustc.edu.cn",
    "兰州大学 LZUOSS": "https://mirror.lzu.edu.cn",
    "华为云 HUAWEI": "https://repo.huaweicloud.com",
    "阿里云 ALIYUN": "https://mirrors.aliyun.com",
    }.items() %}
=== "{{ name }}"
{% include "../templates/alpine.md" %}
{% endfor %}
