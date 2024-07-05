# WEB-AUTOMATION-WDIO-POM-CUCUMBER-DS4

-   Create Web Automation using [webdriver.io](https://webdriver.io/docs/gettingstarted) & [cucumber](https://webdriver.io/docs/frameworks/#using-cucumber).
-   Running secara pararel dengan multiple browser yaitu chrome dan edge.
-   Setiap kali **Failed Test Case**, akan secara otomatis diambil screenshot dan disimpan dalam direktori, dengan nama file yang berbeda berdasarkan timestamp.

    ```text
    ./reports/screenshot/
    ```

-   Untuk report saya menggunakan [HTML Nice Reports](https://www.npmjs.com/package/wdio-html-nice-reporter), Laporan disimpan dalam direktori yang dibuat otomatis dengan UUID.

    ```text
    ./reports/html/
    ```

## How to Run?

Setelah anda clone repo ini, silahkan install seluruh library yang dibutuhkan dengan cara run comand

```bash
npm install
```

### Run in Terminal

Untuk melihat detail script run berdasarkan **TAG** cucumber sudah saya sediakan pada file **package.json**.
Berikut salah satu **TAG** yang digunakan untuk running All Scenario pada Feature Login

```bash
npm run wdio-cu-login
```

Tunggu hingga seluruh proses testing selesai.

### Boom!! Test Report is ready

Reports dan capture berhasil dibuat, silahkan cek direktori **reports**

```text
  html report   : "/reports/html/" --> open file.html pada browser
  screenshot    : "/reports/screenshot/"
```
