修改Trojan_workers.js 
let Pswd = 'trojan'; 改成自己的密码
修改Vless_workers.js 
let userID = '3a633010-2cd8-4578-99fc-1486ad84806d'; 改成自己的id
Trojan 需要自己的域名支持不然不能访问
或者别的使用cf 的域名
Vless没域名可以访问 只能是http 端口 https 端口不能访问
端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)
访问或者连接

# 修改好后对代码进行混淆
```
安装混淆工具
npm install -g javascript-obfuscator

混淆
javascript-obfuscator Trojan_workers.js --output _Trojan_worker.js \
          --compact true \
          --control-flow-flattening true \
          --control-flow-flattening-threshold 1 \
          --dead-code-injection true \
          --dead-code-injection-threshold 1 \
          --identifier-names-generator hexadecimal \
          --rename-globals true \
          --string-array true \
          --string-array-encoding 'rc4' \
          --string-array-threshold 1 \
          --transform-object-keys true \
          --unicode-escape-sequence true

javascript-obfuscator Vless_workers.js --output _Vless_workers.js \
          --compact true \
          --control-flow-flattening true \
          --control-flow-flattening-threshold 1 \
          --dead-code-injection true \
          --dead-code-injection-threshold 1 \
          --identifier-names-generator hexadecimal \
          --rename-globals true \
          --string-array true \
          --string-array-encoding 'rc4' \
          --string-array-threshold 1 \
          --transform-object-keys true \
          --unicode-escape-sequence true 
```
xxx/userID 或者 xxx/Pswd


部署方式参考：https://peanut996.com/vless-on-cloudflare-workers/



可以使用https://github.com/XIU2/CloudflareSpeedTest 做ip 优选


