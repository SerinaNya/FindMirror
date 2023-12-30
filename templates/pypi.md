    ``` bash title="pip"
    pip3 config set global.index-url {{ mirror_base }}
    ```

    ``` bash title="PDM"
    pdm config pypi.url {{ mirror_base }}
    ```

    ``` bash title="Poetry"
    poetry source add --priority=default mirrors {{ mirror_base }}
    ```