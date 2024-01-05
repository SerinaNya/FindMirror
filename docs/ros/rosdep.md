## rosdep

### 1. 安装

``` bash
sudo apt install python3-rosdep
```

??? success

    ``` bash
    jin@vm-ros-demo:~# sudo apt install python3-rosdep
    正在读取软件包列表... 完成
    正在分析软件包的依赖关系树... 完成
    正在读取状态信息... 完成
    将会同时安装下列软件：
    python3-rosdep-modules
    下列【新】软件包将被安装：
    python3-rosdep python3-rosdep-modules
    升级了 0 个软件包，新安装了 2 个软件包，要卸载 0 个软件包，有 133 个软件包未被升级。
    需要下载 56.1 kB 的归档。
    解压缩后会消耗 356 kB 的额外空间。
    您希望继续执行吗？ [Y/n]
    获取:1 https://mirrors.tuna.tsinghua.edu.cn/ros2/ubuntu jammy/main amd64 python3-rosdep-modules all 0.22.2-1 [52.6 kB]
    获取:2 https://mirrors.tuna.tsinghua.edu.cn/ros2/ubuntu jammy/main amd64 python3-rosdep all 0.22.2-1 [3,532 B]
    已下载 56.1 kB，耗时 0秒 (251 kB/s)
    正在选中未选择的软件包 python3-rosdep-modules。
    (正在读取数据库 ... 系统当前共安装有 228287 个文件和目录。)
    准备解压 .../python3-rosdep-modules_0.22.2-1_all.deb  ...
    正在解压 python3-rosdep-modules (0.22.2-1) ...
    正在选中未选择的软件包 python3-rosdep。
    准备解压 .../python3-rosdep_0.22.2-1_all.deb  ...
    正在解压 python3-rosdep (0.22.2-1) ...
    正在设置 python3-rosdep-modules (0.22.2-1) ...
    正在设置 python3-rosdep (0.22.2-1) ...
    ```

### 2. rosdep init


为了以非侵入式的方式进行换源，在此手动模拟 `rosdep init` 的行为。

无需执行 `rosdep init`。

``` bash

sudo mkdir -p /etc/ros/rosdep/sources.list.d/
sudo curl -o /etc/ros/rosdep/sources.list.d/20-default.list https://mirrors.tuna.tsinghua.edu.cn/github-raw/ros/rosdistro/master/rosdep/sources.list.d/20-default.list
```

??? success

    ``` bash
    jin@vm-ros-demo:~# sudo mkdir -p /etc/ros/rosdep/sources.list.d/
    jin@vm-ros-demo:~# sudo curl -o /etc/ros/rosdep/sources.list.d/20-default.list https://mirrors.tuna.tsinghua.edu.cn/github-raw/ros/rosdistro/master/rosdep/sources.list.d/20-default.list
    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
    100   550  100   550    0     0   4603      0 --:--:-- --:--:-- --:--:--  4621
    ```

### 3. rosdep update

使用环境变量为 `rosdep update` 换源。

并将环境变量写入 `~/.bashrc` 文件以自动加载。

``` bash
export ROSDISTRO_INDEX_URL=https://mirrors.tuna.tsinghua.edu.cn/rosdistro/index-v4.yaml
echo 'export ROSDISTRO_INDEX_URL=https://mirrors.tuna.tsinghua.edu.cn/rosdistro/index-v4.yaml' >> ~/.bashrc

rosdep update
```

??? success

    ``` bash
    jin@vm-ros-demo:~$ export ROSDISTRO_INDEX_URL=https://mirrors.tuna.tsinghua.edu.cn/rosdistro/index-v4.yaml
    jin@vm-ros-demo:~$ echo 'export ROSDISTRO_INDEX_URL=https://mirrors.tuna.tsinghua.edu.cn/rosdistro/index-v4.yaml' >> ~/.bashrc
    jin@vm-ros-demo:~$ rosdep update
    reading in sources list data from /etc/ros/rosdep/sources.list.d
    Hit https://mirrors.tuna.tsinghua.edu.cn/github-raw/ros/rosdistro/master/rosdep/osx-homebrew.yaml
    Hit https://mirrors.tuna.tsinghua.edu.cn/github-raw/ros/rosdistro/master/rosdep/base.yaml
    Hit https://mirrors.tuna.tsinghua.edu.cn/github-raw/ros/rosdistro/master/rosdep/python.yaml
    Hit https://mirrors.tuna.tsinghua.edu.cn/github-raw/ros/rosdistro/master/rosdep/ruby.yaml
    Query rosdistro index https://mirrors.tuna.tsinghua.edu.cn/rosdistro/index-v4.yaml
    Skip end-of-life distro "ardent"
    Skip end-of-life distro "bouncy"
    Skip end-of-life distro "crystal"
    Skip end-of-life distro "dashing"
    Skip end-of-life distro "eloquent"
    Skip end-of-life distro "foxy"
    Skip end-of-life distro "galactic"
    Skip end-of-life distro "groovy"
    Add distro "humble"
    Skip end-of-life distro "hydro"
    Skip end-of-life distro "indigo"
    Add distro "iron"
    Skip end-of-life distro "jade"
    Skip end-of-life distro "kinetic"
    Skip end-of-life distro "lunar"
    Skip end-of-life distro "melodic"
    Add distro "noetic"
    Add distro "rolling"
    updated cache in /home/jin/.ros/rosdep/sources.cache
    ```