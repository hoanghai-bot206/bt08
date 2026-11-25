
const fs = require('fs');

// 1. Tạo thư mục data
if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
    console.log('Tạo thư mục data thành công!');
} else {
    console.log('Thư mục data đã tồn tại!');
}

// 2. Tạo và ghi nội dung vào ghichu.txt
const noiDung = `Dong 1: Hoc lap trinh Node.js
Dong 2: Tim hieu module fs
Dong 3: Thuc hanh doc va ghi tap tin`;

fs.writeFileSync('./data/ghichu.txt', noiDung);
console.log('Ghi file ghichu.txt thành công!');

// 3. Đổi tên file bằng fs.rename()
fs.renameSync('./data/ghichu.txt', './data/ghichu_moi.txt');
console.log('Đổi tên thành ghichu_moi.txt thành công!');

// 4. Đọc và hiển thị nội dung file sau khi đổi tên
const duLieu = fs.readFileSync('./data/ghichu_moi.txt', 'utf8');
console.log('\nNội dung file ghichu_moi.txt:');
console.log(duLieu);

// 5. Tạo file tam.txt
fs.writeFileSync('./data/tam.txt', 'Day la tap tin tam.');
console.log('\nTạo file tam.txt thành công!');

// 6. Xóa file bằng fs.unlink()
fs.unlinkSync('./data/tam.txt');
console.log('Xóa file tam.txt thành công!');
