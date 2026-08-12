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

## History Perubahan Library

Karena project ini dipakai untuk belajar, dicatat di sini kapan & kenapa sebuah library diganti (package.json sendiri tidak bisa dikomentari karena format JSON).

### Agustus 2026 — Upgrade WebdriverIO v8 → v9

**Alasan:** Menjalankan test di Node.js versi baru (v22+) memunculkan error `ERR_REQUIRE_ASYNC_MODULE`. Ini terjadi karena `@cucumber/cucumber` v9 (CommonJS) me-require `@wdio/cucumber-framework` (ESM) yang punya dependency dengan top-level `await`, dan Node versi baru tidak mengizinkan `require()` sinkron untuk itu. Fix permanennya adalah upgrade ke WebdriverIO v9, karena versi ini sudah pakai `@cucumber/cucumber` v10 (full ESM) sehingga tidak lagi lewat jalur `require()` yang bermasalah.

**Yang berubah:**

- `@wdio/cli`, `@wdio/cucumber-framework`, `@wdio/local-runner`, `@wdio/spec-reporter`: `^8.39.0` → `^9.30.1`
- `@wdio/globals`: ditambahkan eksplisit ke `devDependencies` (`^9.29.1`) — sebelumnya cuma kebawa transitif, tidak pernah didaftarkan padahal dipakai langsung di page object (`import { browser } from '@wdio/globals'`)
- `wdio-cucumberjs-json-reporter`: `^5.2.1` → `^6.0.1` (versi 5.x tidak kompatibel dengan WebdriverIO v9)
- **`wdio-html-nice-reporter` (`^8.1.6`) — dihapus.** Package ini terakhir di-update Oktober 2024 dan tidak mengikuti perubahan internal API `@wdio/reporter` di v9, sehingga HTML report gagal ter-generate (gagal diam-diam, tanpa pesan error). Config lama-nya masih disimpan sebagai komentar di [wdio.conf.js](wdio.conf.js) untuk referensi.
- **`multiple-cucumber-html-reporter` (`^3.10.0`) — pengganti.** Dipilih karena aktif dimaintain dan cara kerjanya generate HTML dari file JSON hasil `wdio-cucumberjs-json-reporter`, jadi independen dari internal API reporter WebdriverIO (lebih tahan kalau WebdriverIO update lagi ke depannya). Dipanggil lewat hook `onComplete()` di `wdio.conf.js`.
