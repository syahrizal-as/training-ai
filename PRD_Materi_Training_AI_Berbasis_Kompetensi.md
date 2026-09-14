# PRD — Materi Pelatihan Penerapan Artificial Intelligence (AI) Berbasis Kompetensi

## 1. Informasi Dokumen

- **Nama Program:** Penerapan Artificial Intelligence (AI): Dari Data, Integrasi hingga Maintenance
- **Format:** Training berbasis praktik dan kompetensi
- **Target:** Peserta pemula hingga intermediate yang ingin mampu menerapkan solusi AI di lingkungan kerja
- **Pendekatan:** Competency-Based Training (CBT)
- **Bahasa:** Indonesia
- **Dokumen ini ditujukan untuk:** Trainer/penyusun materi dan AI coding assistant seperti Antigravity
- **Status:** Master PRD / blueprint materi

---

# 2. Kompetensi yang Dicakup

| No | Kode Kompetensi | Unit Kompetensi |
|---|---|---|
| 1 | J.63OPR00.014.2 | Melakukan Pemasukan Data |
| 2 | J.63OPR00.015.2 | Memastikan Validitas Data |
| 3 | J.62AIN00.014.1 | Mengintegrasikan Komponen Solusi Artificial Intelligence (AI) |
| 4 | J.62AIN00.015.1 | Memasang Solusi Artificial Intelligence (AI) |
| 5 | J.62AIN00.016.1 | Merencanakan Perawatan Solusi Artificial Intelligence (AI) |
| 6 | J.62AIN00.017.1 | Merawat Solusi Artificial Intelligence (AI) |

> Catatan: Materi final untuk kebutuhan sertifikasi harus divalidasi kembali terhadap dokumen SKKNI, Elemen Kompetensi, Kriteria Unjuk Kerja (KUK), batasan variabel, dan panduan penilaian resmi yang berlaku.

---

# 3. Tujuan Program

Setelah menyelesaikan pelatihan, peserta diharapkan mampu:

1. Memahami konsep dasar Artificial Intelligence dan Generative AI.
2. Menyiapkan dan memasukkan data ke sistem secara benar.
3. Memastikan data akurat, lengkap, konsisten, valid, aman, dan mutakhir.
4. Mengintegrasikan komponen AI ke dalam aplikasi/workflow.
5. Menggunakan AI API, knowledge base, RAG, database, dan aplikasi sebagai bagian dari solusi.
6. Memasang/deploy solusi AI ke environment operasional.
7. Melakukan konfigurasi, pengujian, troubleshooting, dan dokumentasi instalasi.
8. Menentukan metrik untuk monitoring solusi AI.
9. Menyusun rencana perawatan solusi AI.
10. Melakukan corrective, preventive, dan adaptive maintenance.
11. Mendokumentasikan seluruh proses sebagai bukti kompetensi.

---

# 4. Prinsip Desain Pembelajaran

## 4.1 Prinsip Utama

Materi harus mengikuti alur:

```text
PAHAMI
  ↓
LIHAT CONTOH
  ↓
DEMO TRAINER
  ↓
PRAKTIK
  ↓
STUDI KASUS
  ↓
TESTING
  ↓
DOKUMENTASI
  ↓
EVALUASI
```

## 4.2 Komposisi

| Aktivitas | Porsi |
|---|---:|
| Teori dan konsep | 25% |
| Demo trainer | 20% |
| Praktik peserta | 40% |
| Studi kasus/diskusi | 10% |
| Evaluasi | 5% |

## 4.3 Prinsip Penyampaian

Trainer tidak hanya mengajarkan "cara menggunakan ChatGPT".

Fokus utama:

> Bagaimana AI menjadi bagian dari solusi pekerjaan dan sistem nyata.

Gunakan bahasa sederhana, contoh dunia kerja, visual flow, demo langsung, dan praktik bertahap.

---

# 5. Studi Kasus Utama

Gunakan satu studi kasus end-to-end agar semua unit kompetensi saling terhubung.

## 5.1 Studi Kasus

### PT Maju Bersama

Perusahaan memiliki:

- data customer
- data produk
- data transaksi
- FAQ
- SOP
- dokumentasi produk
- invoice
- percakapan customer service

Perusahaan ingin membangun:

> **AI Customer Service Assistant**

## 5.2 Kemampuan Sistem

AI Assistant minimal mampu:

1. Menjawab FAQ.
2. Mencari informasi dari knowledge base.
3. Merangkum percakapan customer.
4. Mengambil informasi tertentu dari dokumen.
5. Menggunakan data customer secara terbatas.
6. Memberikan jawaban berdasarkan sumber.
7. Mencatat aktivitas.
8. Menghasilkan response terstruktur.
9. Dipantau dari sisi error, latency, usage, cost, dan kualitas.
10. Dirawat secara berkala.

## 5.3 Lifecycle Project

```text
RAW DATA
   ↓
DATA INPUT
   ↓
DATA VALIDATION
   ↓
DATA CLEANING
   ↓
AI INTEGRATION
   ↓
TESTING
   ↓
INSTALLATION / DEPLOYMENT
   ↓
PRODUCTION
   ↓
MONITORING
   ↓
MAINTENANCE PLANNING
   ↓
MAINTENANCE
```

---

# 6. Modul 0 — AI Fundamentals

## Kode

Tidak secara langsung merupakan unit kompetensi, tetapi menjadi prerequisite seluruh modul AI.

## Tujuan

Peserta memahami konsep dasar AI sebelum masuk implementasi.

## Materi

### 0.1 Apa Itu AI?

Bahas:

- Artificial Intelligence
- Machine Learning
- Deep Learning
- Generative AI
- Large Language Model
- Computer Vision
- Speech AI
- Recommendation System
- AI Agent

### 0.2 AI vs Automation

Contoh:

```text
Automation:

Jika invoice masuk
→ kirim email

AI:

Invoice masuk
→ pahami isi invoice
→ ekstrak informasi
→ klasifikasikan
→ berikan hasil
```

### 0.3 Generative AI

Kenalkan:

- text generation
- summarization
- classification
- extraction
- image generation
- document analysis
- coding assistant

Tidak perlu menjadikan satu provider sebagai satu-satunya pilihan.

### 0.4 Komponen AI Solution

```text
USER
 ↓
APPLICATION
 ↓
BACKEND
 ↓
AI SERVICE
 ↓
MODEL
 ↓
KNOWLEDGE / DATA
 ↓
OUTPUT
```

Komponen yang diperkenalkan:

- application
- backend
- database
- API
- AI model
- prompt
- knowledge base
- vector database
- RAG
- authentication
- logging
- monitoring

## Demo

Buat AI summarizer sederhana.

Input:

```text
Teks panjang
```

Output:

```json
{
  "summary": "...",
  "keywords": []
}
```

## Praktik

Peserta mencoba:

1. memberikan prompt,
2. membandingkan output,
3. mengubah instruksi,
4. mengevaluasi hasil.

## Assessment

Peserta menjelaskan:

> Apa perbedaan automation, AI, dan Generative AI?

---

# 7. Modul 1 — J.63OPR00.014.2
# Melakukan Pemasukan Data

## Tujuan Kompetensi

Peserta mampu:

- menyiapkan data,
- memasukkan data,
- melakukan scanning,
- melakukan import data,
- menyimpan data,
- mencatat aktivitas input data.

## 1.1 Memahami Data

Materi:

- data terstruktur
- data semi-terstruktur
- data tidak terstruktur
- text
- angka
- tanggal
- gambar
- PDF
- Excel
- CSV
- JSON

## 1.2 Persiapan Data

Sebelum input, peserta harus memeriksa:

- sumber data,
- format,
- struktur,
- kelengkapan,
- keterbacaan,
- kebutuhan konversi.

## Praktik

Berikan:

```text
customers.xlsx
products.xlsx
transactions.csv
invoice.pdf
customer-form.pdf
```

Peserta menentukan:

- tipe data,
- sumber,
- format,
- metode input,
- risiko kesalahan.

## 1.3 Input Data Manual

Contoh:

```text
Customer Form
-----------------------
Name
Email
Phone
Address
City
```

Peserta melakukan input dan menyimpan data.

## 1.4 Scanning dan OCR

Flow:

```text
Dokumen
 ↓
Scanner / Upload
 ↓
OCR
 ↓
Extracted Text
 ↓
Structured Data
```

## 1.5 AI Data Extraction

Contoh:

```text
Invoice PDF
 ↓
OCR
 ↓
AI
 ↓
JSON
```

Target output:

```json
{
  "invoice_number": "INV-001",
  "customer": "Budi",
  "date": "2026-09-14",
  "items": [
    {
      "name": "Produk A",
      "qty": 2,
      "price": 100000
    }
  ]
}
```

Tekankan bahwa hasil AI harus divalidasi.

## 1.6 Import Data

Materi:

- CSV import
- Excel import
- JSON import
- API input
- database import

Flow:

```text
Excel
 ↓
CSV
 ↓
Validation
 ↓
Import
 ↓
Database
```

## 1.7 Data Input Log

Format:

| Tanggal | Aktivitas | Data | Status | Operator |
|---|---|---|---|---|
| 14/09/2026 | Import customer | customer.xlsx | Success | Peserta |

## Praktik Modul

Peserta:

1. menerima file,
2. memeriksa data,
3. melakukan input/import,
4. melakukan OCR bila diperlukan,
5. menggunakan AI extraction,
6. menyimpan hasil,
7. membuat log.

## Output

- dataset hasil input,
- input log,
- dokumentasi proses.

## Assessment

Peserta diberikan dataset baru dan diminta melakukan proses input tanpa panduan langkah demi langkah.

---

# 8. Modul 2 — J.63OPR00.015.2
# Memastikan Validitas Data

## Tujuan Kompetensi

Peserta mampu memastikan data:

- benar,
- lengkap,
- konsisten,
- sesuai format,
- aman,
- dapat digunakan,
- diperbarui ketika diperlukan.

## 2.1 Konsep Data Quality

Bahas:

### Accuracy

Apakah data benar?

### Completeness

Apakah data lengkap?

### Consistency

Apakah data konsisten?

### Validity

Apakah data mengikuti aturan?

### Uniqueness

Apakah terdapat duplicate?

### Timeliness

Apakah data masih relevan/terbaru?

## 2.2 Contoh Data Bermasalah

```text
Nama   | Email        | Tanggal
Budi   | budi@gmail   | 2026-09-14
Siti   |              | 2026-13-40
Budi   | budi@gmail   | 2026-09-14
```

Masalah:

- email invalid,
- tanggal invalid,
- data kosong,
- duplicate.

## 2.3 Rule Validation

Contoh:

```text
email harus valid
phone hanya angka
tanggal harus valid
qty > 0
price >= 0
customer_id harus tersedia
```

## 2.4 AI-Assisted Validation

Flow:

```text
RAW DATA
 ↓
RULE VALIDATION
 ↓
AI VALIDATION
 ↓
HUMAN REVIEW
 ↓
CLEAN DATA
```

Tekankan:

> AI membantu validasi, tetapi tidak boleh dianggap sebagai satu-satunya sumber kebenaran.

## 2.5 Security dan Privacy

Materi:

- data pribadi
- PII
- password
- token
- API key
- data customer
- data perusahaan
- data sensitif

Prinsip:

```text
Minimize Data
 ↓
Mask Sensitive Data
 ↓
Control Access
 ↓
Use Appropriate Environment
 ↓
Audit
```

Jangan memasukkan API key ke source code atau membagikan data sensitif sembarangan.

## 2.6 Data Updating

Flow:

```text
Data Lama
 ↓
Compare
 ↓
Data Terbaru
 ↓
Update
 ↓
Audit Log
```

## Praktik Modul

Peserta diberikan 100–500 record yang mengandung:

- duplicate,
- missing value,
- invalid email,
- invalid phone,
- invalid date,
- inconsistent format.

Peserta harus:

1. menemukan masalah,
2. membuat validation rules,
3. memperbaiki data,
4. membuat validation report.

## Output

```text
validation-rules.md
validation-report.xlsx
clean-data.csv
audit-log.csv
```

## Assessment

Peserta diberikan dataset baru dan diminta menjelaskan:

> Apakah data tersebut layak digunakan sebagai input AI? Mengapa?

---

# 9. Modul 3 — J.62AIN00.014.1
# Mengintegrasikan Komponen Solusi Artificial Intelligence (AI)

## Tujuan Kompetensi

Peserta mampu mengintegrasikan komponen AI menjadi sebuah solusi yang dapat digunakan.

## 3.1 Arsitektur

Contoh:

```text
                    USER
                      ↓
                APPLICATION
                      ↓
                  BACKEND
                      ↓
                AI SERVICE
                 ↙       ↘
          KNOWLEDGE       MODEL
              ↓             ↓
              └──────┬──────┘
                     ↓
                   OUTPUT
                     ↓
                   USER
```

## 3.2 Komponen

Bahas:

- frontend
- backend
- database
- AI API
- model
- prompt
- knowledge base
- vector database
- RAG
- authentication
- logging
- monitoring

## 3.3 AI API

Flow:

```text
Application
 ↓
API Request
 ↓
AI Provider
 ↓
Model
 ↓
Response
 ↓
Application
```

## Contoh Request

```json
{
  "input": "Ringkas teks berikut..."
}
```

## Contoh Response

```json
{
  "summary": "...",
  "status": "success"
}
```

## 3.4 Structured Output

Peserta memahami pentingnya output terstruktur.

Contoh:

```json
{
  "intent": "complaint",
  "priority": "high",
  "summary": "...",
  "suggested_action": "..."
}
```

## 3.5 RAG

Flow:

```text
DOCUMENT
 ↓
CHUNKING
 ↓
EMBEDDING
 ↓
VECTOR DATABASE
 ↓
SEARCH
 ↓
RELEVANT CONTEXT
 ↓
LLM
 ↓
ANSWER
```

Jelaskan dengan bahasa sederhana:

> RAG membuat AI mencari informasi yang relevan terlebih dahulu sebelum menghasilkan jawaban.

## 3.6 Integrasi Database

Contoh:

```text
User
 ↓
Backend
 ↓
Authentication
 ↓
Database Query
 ↓
Relevant Data
 ↓
AI
 ↓
Response
```

Tekankan authorization dan pembatasan data.

## 3.7 Prompt Engineering

Materi:

- role
- context
- instruction
- constraint
- output format
- examples

Template:

```text
ROLE:
Kamu adalah customer service.

CONTEXT:
Gunakan informasi berikut...

TASK:
Jawab pertanyaan customer.

CONSTRAINT:
Jangan membuat informasi baru.

OUTPUT:
JSON.
```

## 3.8 Testing Integration

Test:

- valid request
- invalid request
- empty input
- timeout
- provider error
- malformed response
- sensitive input
- prompt injection sederhana
- rate limit

## 3.9 Dokumentasi

Peserta membuat:

- architecture diagram,
- integration flow,
- API documentation,
- configuration documentation,
- test result.

## Praktik Utama

Buat:

> AI Customer Service Assistant.

Minimal:

```text
Question
 ↓
Backend
 ↓
Knowledge Search
 ↓
AI
 ↓
Structured Response
 ↓
Frontend
```

## Output

```text
architecture.png
integration-report.md
api-documentation.md
test-result.md
```

---

# 10. Modul 4 — J.62AIN00.015.1
# Memasang Solusi Artificial Intelligence (AI)

## Tujuan Kompetensi

Peserta mampu memasang solusi AI dari environment pengembangan ke environment operasional.

## 4.1 Environment

```text
DEVELOPMENT
 ↓
TESTING
 ↓
STAGING
 ↓
PRODUCTION
```

## 4.2 Kebutuhan Instalasi

Identifikasi:

- hardware
- operating system
- runtime
- dependency
- database
- network
- domain
- HTTPS
- AI provider
- API credentials
- storage

## 4.3 Configuration

Contoh:

```env
APP_ENV=production
AI_API_KEY=
AI_MODEL=
DATABASE_URL=
```

Tekankan:

> Secret/API key tidak boleh disimpan di repository publik.

## 4.4 Deployment

Flow:

```text
SOURCE CODE
 ↓
BUILD / INSTALL
 ↓
CONFIGURATION
 ↓
DATABASE
 ↓
AI SERVICE
 ↓
APPLICATION
 ↓
TEST
 ↓
PRODUCTION
```

## 4.5 Installation Checklist

```text
[ ] Server ready
[ ] Runtime ready
[ ] Dependency installed
[ ] Database ready
[ ] Environment configured
[ ] AI credential configured
[ ] Application running
[ ] HTTPS configured
[ ] API tested
[ ] Logging enabled
[ ] Backup considered
```

## 4.6 Testing

Uji:

- application access
- login
- database
- AI request
- AI response
- timeout
- invalid credential
- error handling
- logging.

## 4.7 Troubleshooting

Skenario:

### 401 Unauthorized

Periksa:

- API key,
- permission,
- endpoint,
- environment.

### Timeout

Periksa:

- network,
- provider,
- timeout setting,
- request size,
- retry strategy.

### Database connection failed

Periksa:

- host,
- port,
- credential,
- firewall,
- database status.

## Output

```text
installation-checklist.md
installation-report.md
deployment-test.md
troubleshooting-log.md
```

---

# 11. Modul 5 — J.62AIN00.016.1
# Merencanakan Perawatan Solusi Artificial Intelligence (AI)

## Tujuan Kompetensi

Peserta mampu:

1. mengumpulkan hasil monitoring,
2. mengevaluasi performa,
3. menentukan komponen yang membutuhkan maintenance,
4. menentukan tindakan,
5. membuat jadwal,
6. mendokumentasikan rencana maintenance.

## 5.1 Monitoring

Monitor:

- uptime
- latency
- error rate
- API usage
- token usage
- cost
- response quality
- user feedback
- model performance.

## 5.2 Metrics

Untuk model/AI tertentu dapat digunakan:

- Accuracy
- Precision
- Recall
- F1 Score
- MAE
- MSE
- RMSE

Untuk Generative AI:

- relevance
- factuality
- hallucination
- groundedness
- human evaluation.

Tekankan:

> Metrik harus disesuaikan dengan jenis solusi AI. Tidak semua AI harus dinilai hanya dengan accuracy.

## 5.3 Cost Monitoring

Flow:

```text
REQUEST
 ↓
TOKEN / USAGE
 ↓
COST
 ↓
MONTHLY ESTIMATION
 ↓
OPTIMIZATION
```

Praktik:

Peserta menghitung estimasi biaya berdasarkan jumlah request dan penggunaan model.

## 5.4 Maintenance Priority

| Komponen | Masalah | Metric | Prioritas | Tindakan |
|---|---|---|---|---|
| AI API | Latency tinggi | 4.5 sec | High | Optimize |
| Knowledge | Outdated | 70% | High | Update |
| Database | Storage | 80% | Medium | Cleanup |
| Prompt | Quality turun | Score 65 | High | Revise |

## 5.5 Maintenance Schedule

### Harian

- error,
- uptime,
- critical incident.

### Mingguan

- usage,
- cost,
- response quality.

### Bulanan

- knowledge base,
- dependency,
- security,
- performance.

### Berkala

- model evaluation,
- architecture review,
- prompt review.

## 5.6 Risk Assessment

Contoh:

| Risiko | Dampak | Kemungkinan | Mitigasi |
|---|---|---|---|
| AI provider down | High | Medium | Fallback |
| Data outdated | High | High | Knowledge refresh |
| API cost meningkat | Medium | Medium | Usage limit |
| Hallucination | High | Medium | RAG + evaluation |

## Output

```text
monitoring-report.xlsx
maintenance-plan.md
risk-register.xlsx
metric-definition.md
```

---

# 12. Modul 6 — J.62AIN00.017.1
# Merawat Solusi Artificial Intelligence (AI)

## Tujuan Kompetensi

Peserta mampu menjalankan maintenance berdasarkan hasil monitoring dan maintenance plan.

## 6.1 Corrective Maintenance

Memperbaiki masalah yang sudah terjadi.

```text
DETECT
 ↓
INVESTIGATE
 ↓
ROOT CAUSE
 ↓
FIX
 ↓
TEST
 ↓
DEPLOY
 ↓
DOCUMENT
```

## 6.2 Preventive Maintenance

Mencegah masalah.

Contoh:

- update dependency,
- backup,
- security patch,
- knowledge refresh,
- monitoring review.

## 6.3 Adaptive Maintenance

Menyesuaikan sistem terhadap perubahan.

Contoh:

```text
AI Provider berubah
 ↓
API berubah
 ↓
Integration diperbarui
 ↓
Testing
 ↓
Deploy
```

## 6.4 AI Drift

Jelaskan:

> Solusi AI dapat mengalami penurunan kualitas walaupun source code tidak berubah.

Contoh:

```text
Data Lama
 ↓
AI bagus

Pola Data Berubah
 ↓
Performance turun
```

Kenalkan:

- data drift,
- concept drift,
- model degradation.

## 6.5 Prompt Maintenance

Gunakan versioning:

```text
prompt-v1
prompt-v2
prompt-v3
```

Flow:

```text
PROMPT
 ↓
EVALUATION
 ↓
REVISION
 ↓
TEST
 ↓
APPROVAL
 ↓
PRODUCTION
```

## 6.6 Knowledge Base Maintenance

```text
OLD DOCUMENT
 ↓
REVIEW
 ↓
REMOVE / UPDATE
 ↓
NEW DOCUMENT
 ↓
RE-INDEX
 ↓
TEST
```

## 6.7 Incident Handling

Skenario:

> AI tiba-tiba memberikan jawaban yang salah.

Peserta harus:

1. mendeteksi masalah,
2. mengumpulkan bukti,
3. mencari root cause,
4. memperbaiki,
5. melakukan testing,
6. deploy,
7. melakukan monitoring,
8. membuat incident report.

## 6.8 Maintenance Report

Template:

```text
# Maintenance Report

Tanggal:
Sistem:
Komponen:
Masalah:
Dampak:
Root Cause:
Tindakan:
Testing:
Hasil:
PIC:
Status:
Rekomendasi:
```

## Output

```text
maintenance-report.md
incident-report.md
change-log.md
test-after-maintenance.md
```

---

# 13. Final Project

## Judul

> Membangun, Memasang, dan Merawat AI Customer Service Assistant

## Requirement

Peserta harus:

### A. Data

- menerima dataset,
- melakukan input/import,
- melakukan validasi,
- membersihkan data.

### B. AI

- membuat AI workflow,
- mengintegrasikan AI API,
- menggunakan knowledge base,
- menerapkan RAG atau pendekatan retrieval yang sesuai,
- menghasilkan structured output.

### C. Deployment

- memasang aplikasi,
- mengkonfigurasi environment,
- melakukan testing,
- mendokumentasikan deployment.

### D. Monitoring

- menentukan metrics,
- membuat monitoring plan,
- menghitung usage/cost,
- mengevaluasi kualitas output.

### E. Maintenance

- membuat maintenance plan,
- melakukan simulasi incident,
- memperbaiki masalah,
- melakukan testing ulang,
- membuat maintenance report.

---

# 14. Final Project Deliverables

Peserta wajib mengumpulkan:

```text
final-project/
├── 01-data/
│   ├── raw-data/
│   ├── clean-data/
│   ├── data-input-log.md
│   └── validation-report.md
│
├── 02-ai/
│   ├── architecture.md
│   ├── integration-report.md
│   ├── prompt/
│   └── knowledge-base/
│
├── 03-installation/
│   ├── installation-checklist.md
│   ├── installation-report.md
│   └── deployment-test.md
│
├── 04-monitoring/
│   ├── monitoring-plan.md
│   ├── metric-definition.md
│   └── cost-analysis.md
│
├── 05-maintenance/
│   ├── maintenance-plan.md
│   ├── incident-report.md
│   ├── change-log.md
│   └── maintenance-report.md
│
└── README.md
```

---

# 15. Mapping Kompetensi dan Evidence

| Kode | Kompetensi | Aktivitas | Evidence |
|---|---|---|---|
| J.63OPR00.014.2 | Melakukan Pemasukan Data | Input/import/OCR | Data + Input Log |
| J.63OPR00.015.2 | Memastikan Validitas Data | Validation/cleaning/security | Validation Report |
| J.62AIN00.014.1 | Integrasi AI | API/RAG/database/application | Architecture + Integration Report |
| J.62AIN00.015.1 | Memasang AI | Configuration/deployment/testing | Installation Report |
| J.62AIN00.016.1 | Merencanakan Maintenance | Monitoring/metrics/risk/schedule | Maintenance Plan |
| J.62AIN00.017.1 | Merawat AI | Incident/fix/testing/documentation | Maintenance Report |

---

# 16. Assessment Strategy

## 16.1 Pengetahuan

Tes tertulis/oral.

Contoh:

1. Apa perbedaan AI dan automation?
2. Apa yang dimaksud data validity?
3. Mengapa data perlu divalidasi sebelum digunakan AI?
4. Apa fungsi API?
5. Apa fungsi RAG?
6. Apa perbedaan development dan production?
7. Apa itu hallucination?
8. Apa itu AI drift?
9. Apa fungsi monitoring?
10. Apa perbedaan corrective dan preventive maintenance?

## 16.2 Praktik

Peserta harus mampu:

- input data,
- import data,
- validasi data,
- integrate AI,
- deploy,
- test,
- monitoring,
- maintenance.

## 16.3 Studi Kasus

Berikan masalah tanpa memberikan solusi.

Contoh:

> Setelah tiga bulan, AI Customer Service mulai memberikan jawaban yang tidak sesuai dengan SOP terbaru.

Peserta harus menentukan:

- kemungkinan penyebab,
- data yang diperiksa,
- metric,
- tindakan,
- testing,
- dokumentasi.

## 16.4 Wawancara

Pertanyaan:

- Mengapa menggunakan komponen tersebut?
- Bagaimana memastikan data valid?
- Bagaimana menjaga API key?
- Bagaimana menangani AI provider down?
- Bagaimana mengetahui AI mengalami degradation?
- Bagaimana melakukan maintenance?
- Bagaimana membuktikan perubahan sudah berhasil?

---

# 17. Rubrik Penilaian Final Project

| Aspek | Bobot |
|---|---:|
| Data input | 10% |
| Data validation | 15% |
| AI integration | 25% |
| Installation/deployment | 15% |
| Monitoring & maintenance planning | 15% |
| Maintenance execution | 10% |
| Dokumentasi | 10% |
| **Total** | **100%** |

Minimal kelulusan internal yang direkomendasikan:

> 70/100

Untuk sertifikasi BNSP, nilai kelulusan final harus mengikuti skema/ketentuan asesmen resmi yang digunakan oleh LSP/asesor.

---

# 18. Struktur Slide Per Modul

Gunakan template konsisten:

1. Judul modul
2. Kode kompetensi
3. Tujuan pembelajaran
4. Mengapa kompetensi ini penting?
5. Konsep dasar
6. Contoh dunia kerja
7. Diagram/visual workflow
8. Demo trainer
9. Praktik peserta
10. Studi kasus
11. Kesalahan umum
12. Checklist kompetensi
13. Assessment
14. Kesimpulan

---

# 19. Struktur Setiap Lesson

Setiap lesson harus memiliki:

```text
LESSON
├── Learning Objective
├── Kompetensi terkait
├── Konsep
├── Istilah penting
├── Contoh sederhana
├── Contoh dunia kerja
├── Demo
├── Praktik
├── Expected Result
├── Common Mistakes
├── Checklist
└── Assessment
```

---

# 20. Standar Materi untuk Antigravity

Antigravity harus membantu menghasilkan materi berdasarkan PRD ini.

## Jangan langsung membuat semua materi sekaligus.

Kerjakan secara bertahap:

### Phase 1

Buat struktur project dokumentasi:

```text
ai-training/
├── README.md
├── PRD.md
├── curriculum/
├── modules/
├── slides/
├── labs/
├── assessments/
├── datasets/
├── case-study/
└── assets/
```

### Phase 2

Buat curriculum map.

File:

```text
curriculum/curriculum-map.md
```

Berisi:

- kode kompetensi,
- unit kompetensi,
- tujuan,
- lesson,
- praktik,
- evidence,
- assessment.

### Phase 3

Buat Modul 1.

Output:

```text
modules/01-pemasukan-data/
├── README.md
├── lesson-01-data.md
├── lesson-02-input.md
├── lesson-03-ocr.md
├── lesson-04-ai-extraction.md
├── lesson-05-import.md
├── lab.md
└── assessment.md
```

### Phase 4

Buat Modul 2.

### Phase 5

Buat Modul 3.

### Phase 6

Buat Modul 4.

### Phase 7

Buat Modul 5.

### Phase 8

Buat Modul 6.

### Phase 9

Buat final project.

### Phase 10

Buat slide trainer.

### Phase 11

Buat assessment bank.

---

# 21. Instruksi Khusus untuk Antigravity

Saat mengimplementasikan PRD ini:

1. Jangan mengarang KUK resmi.
2. Jika membutuhkan KUK detail, tandai sebagai `NEEDS_OFFICIAL_REFERENCE`.
3. Pisahkan antara:
   - fakta SKKNI,
   - materi pengayaan,
   - contoh praktik.
4. Jangan menyatakan suatu materi sebagai KUK resmi jika belum diverifikasi dari dokumen resmi.
5. Setiap modul harus mempunyai mapping kompetensi.
6. Setiap kompetensi harus mempunyai evidence.
7. Materi harus mudah dipahami pemula.
8. Gunakan contoh dunia kerja.
9. Jangan terlalu fokus pada teori matematika AI.
10. Fokus pada implementasi dan lifecycle solusi AI.
11. Semua praktik harus memiliki expected result.
12. Semua praktik harus dapat dilakukan ulang oleh peserta.
13. Jangan menggunakan API key asli.
14. Gunakan environment variable untuk credential.
15. Dataset training harus menggunakan data dummy/sintetis.
16. Materi harus provider-agnostic sejauh memungkinkan.
17. Jika menggunakan provider tertentu untuk demo, sediakan catatan alternatif.
18. Jangan membuat klaim bahwa AI selalu benar.
19. Selalu sertakan human verification untuk proses berisiko.
20. Gunakan versioning untuk prompt, knowledge base, dan konfigurasi penting.

---

# 22. Definition of Done

Materi dianggap selesai jika:

- [ ] Semua 6 kode kompetensi sudah memiliki modul.
- [ ] Setiap modul memiliki learning objective.
- [ ] Setiap modul memiliki teori.
- [ ] Setiap modul memiliki demo.
- [ ] Setiap modul memiliki lab/praktik.
- [ ] Setiap modul memiliki assessment.
- [ ] Setiap modul memiliki evidence.
- [ ] Ada mapping kode → aktivitas → evidence.
- [ ] Ada studi kasus end-to-end.
- [ ] Ada final project.
- [ ] Ada rubrik penilaian.
- [ ] Ada dataset dummy.
- [ ] Ada dokumentasi deployment.
- [ ] Ada monitoring plan.
- [ ] Ada maintenance plan.
- [ ] Ada incident simulation.
- [ ] Ada trainer notes.
- [ ] Ada slide outline.
- [ ] Tidak ada API key/credential asli.
- [ ] Klaim terkait SKKNI telah diverifikasi dengan sumber resmi sebelum digunakan untuk kebutuhan sertifikasi.

---

# 23. Output Akhir yang Diharapkan

Pada akhir proses, repository training harus memiliki:

```text
ai-training/
│
├── README.md
├── PRD.md
│
├── curriculum/
│   └── curriculum-map.md
│
├── modules/
│   ├── 01-pemasukan-data/
│   ├── 02-validitas-data/
│   ├── 03-integrasi-ai/
│   ├── 04-pemasangan-ai/
│   ├── 05-perencanaan-maintenance/
│   └── 06-maintenance-ai/
│
├── labs/
│   ├── lab-data-input/
│   ├── lab-data-validation/
│   ├── lab-ai-integration/
│   ├── lab-deployment/
│   ├── lab-monitoring/
│   └── lab-maintenance/
│
├── assessments/
│   ├── theory/
│   ├── practical/
│   ├── case-study/
│   └── final-project/
│
├── case-study/
│   └── ai-customer-service/
│
├── datasets/
│   └── synthetic/
│
├── slides/
│
└── assets/
```

---

# 24. Prioritas Eksekusi

Urutan pengerjaan:

```text
P0 — PRD & Curriculum Map
 ↓
P0 — Official Competency/KUK Verification
 ↓
P1 — Module 1: Data Input
 ↓
P1 — Module 2: Data Validation
 ↓
P1 — Module 3: AI Integration
 ↓
P1 — Module 4: AI Installation
 ↓
P1 — Module 5: Maintenance Planning
 ↓
P1 — Module 6: AI Maintenance
 ↓
P1 — Final Project
 ↓
P2 — Assessment Bank
 ↓
P2 — Trainer Guide
 ↓
P2 — Slide Deck
```

---

# 25. Target Akhir Trainer

Peserta tidak hanya pulang dengan kemampuan:

> "Saya bisa menggunakan ChatGPT."

Tetapi:

> "Saya memahami bagaimana data disiapkan dan divalidasi, bagaimana AI diintegrasikan ke dalam sebuah solusi, bagaimana solusi tersebut dipasang, dimonitor, direncanakan maintenance-nya, dan dirawat ketika terjadi masalah."

Itulah outcome utama program ini.

