# apt

!!! abstract

    apt 是 Debian 系 Linux 系统中用于管理软件包的高级包管理工具。

    - <https://debian.org/>
    - <https://ubuntu.com/>
    - ...

!!! info

    适用于使用 apt 的**常见**系统。

    好消息是，几乎所有镜像站都至少支持 Debian 和 Ubuntu 系统。但，若你使用的系统未被某镜像站收录，则无法使用该镜像源。

{% for name, mirror_base in {
    "上海交通大学 SJTUG": "https://mirror.sjtu.edu.cn",
    "清华大学 TUNA": "https://mirrors.tuna.tsinghua.edu.cn",
    "南京大学 NJU": "https://mirror.nju.edu.cn",
    "中国科学技术大学 USTC": "https://mirrors.ustc.edu.cn",
    "山东大学 SDU": "https://mirror.sdu.edu.cn",
    "兰州大学 LZUOSS": "https://mirror.lzu.edu.cn",
    "华为云 HUAWEI": "https://repo.huaweicloud.com",
    "阿里云 ALIYUN": "https://mirrors.aliyun.com",
    'xTom HK': 'https://mirrors.xtom.com.hk',
    }.items() %}
=== "{{ name }}"
{% include "../templates/apt.md" %}
{% endfor %}
