## 在 Ubuntu 上安装

!!! info

    本文所有操作均在 Ubuntu 22.04 (aka. _Jammy Jellyfish_) 的环境下操作，其他版本的操作类似。

---

### 1. apt 镜像源

根据 👉 [此文档：镜像 > apt](apt.md) 👈 进行设置。

### 2. UTF-8 支持性

``` bash
sudo locale
```

若上述命令成功输出带有 `UTF-8` 字样的内容，表明你的系统环境已支持 UTF-8；  
否则，请前往 [ROS 2 文档：Set locale](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html#set-locale) 进行操作，直至符合要求。

??? success

    ``` bash
    jin@vm-ros-demo:~# sudo locale
    LANG=zh_CN.UTF-8
    LANGUAGE=zh_CN:zh
    LC_CTYPE="zh_CN.UTF-8"
    LC_NUMERIC="zh_CN.UTF-8"
    LC_TIME="zh_CN.UTF-8"
    LC_COLLATE="zh_CN.UTF-8"
    LC_MONETARY="zh_CN.UTF-8"
    LC_MESSAGES="zh_CN.UTF-8"
    LC_PAPER="zh_CN.UTF-8"
    LC_NAME="zh_CN.UTF-8"
    LC_ADDRESS="zh_CN.UTF-8"
    LC_TELEPHONE="zh_CN.UTF-8"
    LC_MEASUREMENT="zh_CN.UTF-8"
    LC_IDENTIFICATION="zh_CN.UTF-8"
    LC_ALL=
    ```

### 3. ROS 2（apt 仓库）镜像源
   
``` bash
apt install software-properties-common -y
add-apt-repository universe
```

??? success
    ``` bash
    jin@vm-ros-demo:~# sudo apt install software-properties-common
    正在读取软件包列表... 完成
    正在分析软件包的依赖关系树... 完成
    正在读取状态信息... 完成                 
    将会同时安装下列软件：
    python3-software-properties software-properties-gtk
    下列软件包将被升级：
    python3-software-properties software-properties-common software-properties-gtk
    升级了 3 个软件包，新安装了 0 个软件包，要卸载 0 个软件包，有 164 个软件包未被升级。
    需要下载 114 kB 的归档。
    解压缩后会消耗 6,144 B 的额外空间。
    您希望继续执行吗？ [Y/n] 
    获取:1 https://mirror.sjtu.edu.cn/ubuntu jammy-updates/main amd64 software-properties-common all 0.99.22.9 [14.1 kB]
    获取:2 https://mirror.sjtu.edu.cn/ubuntu jammy-updates/main amd64 software-properties-gtk all 0.99.22.9 [71.3 kB]
    获取:3 https://mirror.sjtu.edu.cn/ubuntu jammy-updates/main amd64 python3-software-properties all 0.99.22.9 [28.8 kB]
    已下载 114 kB，耗时 0秒 (741 kB/s)                     
    (正在读取数据库 ... 系统当前共安装有 141946 个文件和目录。)
    准备解压 .../software-properties-common_0.99.22.9_all.deb  ...
    正在解压 software-properties-common (0.99.22.9) 并覆盖 (0.99.22.7) ...
    准备解压 .../software-properties-gtk_0.99.22.9_all.deb  ...
    正在解压 software-properties-gtk (0.99.22.9) 并覆盖 (0.99.22.7) ...
    准备解压 .../python3-software-properties_0.99.22.9_all.deb  ...
    正在解压 python3-software-properties (0.99.22.9) 并覆盖 (0.99.22.7) ...
    正在设置 python3-software-properties (0.99.22.9) ...
    正在设置 software-properties-common (0.99.22.9) ...
    正在设置 software-properties-gtk (0.99.22.9) ...
    正在处理用于 dbus (1.12.20-2ubuntu4.1) 的触发器 ...
    正在处理用于 shared-mime-info (2.1-2) 的触发器 ...
    正在处理用于 mailcap (3.70+nmu1ubuntu1) 的触发器 ...
    正在处理用于 desktop-file-utils (0.26-1ubuntu3) 的触发器 ...
    正在处理用于 hicolor-icon-theme (0.17-2) 的触发器 ...
    正在处理用于 gnome-menus (3.36.0-1ubuntu3) 的触发器 ...
    正在处理用于 libglib2.0-0:amd64 (2.72.4-0ubuntu2.2) 的触发器 ...
    正在处理用于 man-db (2.10.2-1) 的触发器 ...
    jin@vm-ros-demo:~# sudo add-apt-repository universe
    正在添加组件‘universe’到所有软件源。
    按 [ENTER] 继续，或按 Ctrl-c 取消。
    命中:1 https://mirror.sjtu.edu.cn/ubuntu jammy InRelease
    命中:2 https://mirror.sjtu.edu.cn/ubuntu jammy-updates InRelease
    命中:3 https://mirror.sjtu.edu.cn/ubuntu jammy-backports InRelease
    命中:4 https://mirror.sjtu.edu.cn/ubuntu jammy-security InRelease
    正在读取软件包列表... 完成
    ```

以上，启用了 Ubuntu 的 `universe` 仓库。

---

``` bash
sudo apt install curl -y
sudo curl -sSL https://mirrors.tuna.tsinghua.edu.cn/rosdistro/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] https://mirrors.tuna.tsinghua.edu.cn/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list
```

??? success

    ``` bash
    jin@vm-ros-demo:~# sudo apt install curl -y
    正在读取软件包列表... 完成
    正在分析软件包的依赖关系树... 完成
    正在读取状态信息... 完成
    将会同时安装下列软件：
    libcurl4
    下列【新】软件包将被安装：
    curl
    下列软件包将被升级：
    libcurl4
    升级了 1 个软件包，新安装了 1 个软件包，要卸载 0 个软件包，有 163 个软件包未被升级。
    需要下载 483 kB 的归档。
    解压缩后会消耗 454 kB 的额外空间。
    获取:1 https://mirror.sjtu.edu.cn/ubuntu jammy-updates/main amd64 libcurl4 amd64 7.81.0-1ubuntu1.15 [289 kB]
    获取:2 https://mirror.sjtu.edu.cn/ubuntu jammy-updates/main amd64 curl amd64 7.81.0-1ubuntu1.15 [194 kB]
    已下载 483 kB，耗时 0秒 (2,512 kB/s)
    (正在读取数据库 ... 系统当前共安装有 141985 个文件和目录。)
    准备解压 .../libcurl4_7.81.0-1ubuntu1.15_amd64.deb  ...
    正在解压 libcurl4:amd64 (7.81.0-1ubuntu1.15) 并覆盖 (7.81.0-1ubuntu1.13) ...
    正在选中未选择的软件包 curl。
    准备解压 .../curl_7.81.0-1ubuntu1.15_amd64.deb  ...
    正在解压 curl (7.81.0-1ubuntu1.15) ...
    正在设置 libcurl4:amd64 (7.81.0-1ubuntu1.15) ...
    正在设置 curl (7.81.0-1ubuntu1.15) ...
    正在处理用于 man-db (2.10.2-1) 的触发器 ...
    正在处理用于 libc-bin (2.35-0ubuntu3.1) 的触发器 ...
    jin@vm-ros-demo:~# sudo curl -sSL https://mirrors.tuna.tsinghua.edu.cn/rosdistro/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
    jin@vm-ros-demo:~# echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] https://mirrors.tuna.tsinghua.edu.cn/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list
    deb [arch=amd64 signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] https://mirrors.tuna.tsinghua.edu.cn/ros2/ubuntu jammy main
    ```

以上，下载并信任了从仓库下载 ROS 2 套件所需的公钥。

---

``` bash
sudo apt update
```

??? success

    ``` bash
    jin@vm-ros-demo:~# sudo apt update
    命中:1 https://mirror.sjtu.edu.cn/ubuntu jammy InRelease
    获取:2 https://mirror.sjtu.edu.cn/ubuntu jammy-updates InRelease [119 kB]
    命中:3 https://mirror.sjtu.edu.cn/ubuntu jammy-backports InRelease
    获取:4 https://mirror.sjtu.edu.cn/ubuntu jammy-security InRelease [110 kB]
    获取:5 https://mirrors.tuna.tsinghua.edu.cn/ros2/ubuntu jammy InRelease [4,682 B]
    获取:6 https://mirrors.tuna.tsinghua.edu.cn/ros2/ubuntu jammy/main amd64 Packages [1,423 kB]
    已下载 1,657 kB，耗时 1秒 (2,939 kB/s)
    正在读取软件包列表... 完成
    正在分析软件包的依赖关系树... 完成
    正在读取状态信息... 完成
    有 163 个软件包可以升级。请执行 ‘apt list --upgradable’ 来查看它们。
    ```

以上，更新了 apt 的缓存，以应用刚刚添加的仓库。

---

### 4. ROS 2 套件安装

``` bash
sudo apt install ros-humble-desktop
```

安装可能会耗费一些时间。需要下载约 700MB 的文件，安装后将会占用约 3GB 的磁盘空间。

ROS 2 将被安装至 `/opt/ros/humble/` 目录。

### 5. 配置环境变量

``` bash
source /opt/ros/humble/setup.bash

echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

以上，将 ROS 2 的环境变量添加至 `.bashrc` 文件中。
