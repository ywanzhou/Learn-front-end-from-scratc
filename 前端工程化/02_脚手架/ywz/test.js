// win32 表示 Windows 系统
console.log(process.platform) // win32
const user = process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME']
console.log(user) // C:\Users\Administrator
