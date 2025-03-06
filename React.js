const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// مسیر برای شروع استخراج
app.post('/start-mining', (req, res) => {
    const { userId, hashPower } = req.body;
    // اینجا منطق استخراج را اضافه کنید.
    res.json({ message: 'استخراج با موفقیت شروع شد!', userId, hashPower });
});

app.listen(port, () => {
    console.log(`سرور در حال اجرا است: http://localhost:${port}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nicehash-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    hashPower: Number,
    balance: Number,
});

const User = mongoose.model('User', userSchema);

// ایجاد یک کاربر جدید
const newUser = new User({
    username: 'testuser',
    hashPower: 100,
    balance: 0,
});

newUser.save().then(() => console.log('کاربر ذخیره شد.'));