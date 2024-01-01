    ``` yaml title=".condarc"
    channels:
        - defaults
    show_channel_urls: true
    default_channels:
        - {{ mirror_base }}/anaconda/pkgs/main
        - {{ mirror_base }}/anaconda/pkgs/r
        - {{ mirror_base }}/anaconda/pkgs/msys2
    custom_channels:
        conda-forge: {{ mirror_base }}/anaconda/cloud
        msys2: {{ mirror_base }}/anaconda/cloud
        bioconda: {{ mirror_base }}/anaconda/cloud
        menpo: {{ mirror_base }}/anaconda/cloud
        pytorch: {{ mirror_base }}/anaconda/cloud
        pytorch-lts: {{ mirror_base }}/anaconda/cloud
        simpleitk: {{ mirror_base }}/anaconda/cloud
        deepmodeling: {{ mirror_base }}/anaconda/cloud
    ```
