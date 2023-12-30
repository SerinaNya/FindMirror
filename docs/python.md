# Python

## PyPI

!!! abstract

    PyPI 是 Python 的默认软件仓库，帮助用户找到并安装由 Python 社区开发和共享的软件。
    
    绝大多数的 Python 包都发布于此。

    <https://pypi.org/>

{% for name, mirror_base in {
    "上海交通大学 SJTUG": "https://mirror.sjtu.edu.cn/pypi/web/simple",
    "清华大学 TUNA": "https://pypi.tuna.tsinghua.edu.cn/simple",
    "南京大学 NJU": "https://mirror.nju.edu.cn/pypi/web/simple",
    "兰州大学 LZUOSS": "https://mirror.lzu.edu.cn/pypi/web/simple",
    "华为云 HUAWEI": "https://repo.huaweicloud.com/repository/pypi/simple",
    "阿里云 ALIYUN": "https://mirrors.aliyun.com/pypi/simple",
    }.items() %}
=== "{{ name }}"
{% include "../templates/pypi.md" %}
{% endfor %}

## Anaconda

!!! abstract

    Anaconda 是一个开源的 Python 和 R 语言的发行版本，用于计算科学（数据科学、机器学习、大数据处理和预测分析），致力于简化软件包管理系统和部署。

    <https://www.anaconda.com/>

!!! note

    需要修改用户目录下的 `.condarc` 文件，此文件在不同系统下位于不同位置。

    - macOS / Linux: `~/.condarc`
    - Windows: `%USERPROFILE%\.condarc`
    
    🧐 Windows 用户无法直接创建名为 `.condarc` 的文件，可先执行 `conda config --set show_channel_urls yes` 生成该文件再操作。

操作步骤：

1. 找到并打开 `.condarc` 文件
2. 将 `.condarc` 中的内容替换为下方内容
3. 运行 `conda clean -i` 清空缓存

{% for name, mirror_base in {
    "上海交通大学 SJTUG": "https://mirror.sjtu.edu.cn",
    "清华大学 TUNA": "https://mirrors.tuna.tsinghua.edu.cn",
    "南京大学 NJU": "https://mirror.nju.edu.cn",
    "阿里云 ALIYUN": "https://mirrors.aliyun.com",
    }.items() %}
=== "{{ name }}"
{% include "../templates/anaconda.md" %}
{% endfor %}

## PyTorch

!!! abstract

    PyTorch 是一个开源的深度学习框架，用于构建神经网络和进行机器学习研究。

    <https://pytorch.org/>

!!! warning

    以下例子均以 `cu118` 为例，请根据实际情况修改 URL。访问 [PyTorch 官网](https://pytorch.org/#:~:text=Aid%20to%20Ukraine.-,INSTALL%20PYTORCH,-Select%20your%20preferences) 以选择合适的版本。


{% for name, mirror_base in {
    "上海交通大学 SJTUG": "https://mirror.sjtu.edu.cn/pytorch-wheels",
    "清华大学 TUNA": "https://mirrors.tuna.tsinghua.edu.cn/pytorch-wheels",
    "阿里云 ALIYUN": "https://mirrors.aliyun.com/pytorch-wheels",
    }.items() %}
=== "{{ name }}"
{% include "../templates/pytorch.md" %}
{% endfor %}
