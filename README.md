### 安装依赖

```bash
npm install -g pnpm
pnpm add -D electron
```

### 运行

```bash
pnpm run dev
```

### nodemon

```bash
nodemon --exec electron .
```

### gitignore

```bash
node_modules
```

[Microsoft language debugger](https://github.com/microsoft/vscode-recipes/tree/main/Electron)

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Electron: Main",
            "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
            "runtimeArgs": [
                "--remote-debugging-port=9223",
                "."
            ],
            "windows": {
                "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
            }
        },
        {
            "name": "Electron: Renderer",
            "type": "chrome",
            "request": "attach",
            "port": 9223,
            "webRoot": "${workspaceFolder}",
            "timeout": 30000
        }
    ],
    "compounds": [
        {
            "name": "Electron: All",
            "configurations": [
                "Electron: Main",
                "Electron: Renderer"
            ]
        }
    ]
}
```