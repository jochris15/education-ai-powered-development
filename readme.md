# AI-Enhanced Code Writing , Refactoring and Debugging
test
## Code Writing
Kita akan menggunakan bantuan **GITHUB COPILOT** untuk membuat starter code dalam pembuatan aplikasi menggunakan react. 

1. Lakukan initialization menggunakan vite seperti biasa
2. Lakukan instalasi tailwind menggunakan vite
3. Buka **Github copilot chat** lalu lakukan prompting **"Please make me an simple portfolio application using react with vite and tailwind"**
4. Lalu kita bisa copy paste codingan per component (dikarenakan jika langsung menggunakan fitur **Create Workspace** langsung dari github copilot, instalasi vitenya error)

<br>

## Code Refactoring
Kita akan menggunakan bantuan **GITHUB COPILOT** untuk melakukan improvement kepada website kita dengan menambahkan react router.

1. Buka github copilot chat
2. Pastikan file yang di watch oleh github copilot adalah file **App.jsx**
3. Lakukan prompting **please improve my current website using react router v7**
4. Ikutin step by step yang diarahkan oleh github copilot

<br>

## Code Debugging
Kita akan menambahkan halaman yaitu halaman **Projects**. Pada halaman home, tombol **View Projects** akan menjadi tombol navigasi menuju **/projects**. Yuk kita coba test apakah **GITHUB COPILOT** bisa bantu kita buat debug codingan ini : 

```js
// tulis codingan ini di halaman home
import { useNavigate } from 'react-router-dom';

function handleProject() {
    useNavigate('/projects');
}
```

1. Buka github copilot chat
2. Pastikan file yang di watch oleh github copilot adalah file **Home.jsx**
3. Lakukan prompting **why my handleProject function doesnt work when i click button My Project, even though i already put handleProject function at onClick button**
4. Ikutin step by step yang diarahkan oleh github copilot