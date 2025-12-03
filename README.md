
# Wutthichai Patthaisong

# Game List Assignment

## 🛠 Tech Stack ที่ใช้

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Data Fetching:** Axios (Service Layer Pattern)
* **Icons:** Lucide React
* **Deployment/Container:** Docker & Docker Compose

---

## 🚀 Getting Started

### 1. Prerequisites (สิ่งที่ต้องมี)
* Node.js (v18 หรือสูงกว่า)
* npm หรือ yarn

### 2. Installation (การติดตั้ง)

Clone โปรเจกต์และติดตั้ง Dependencies:

```bash
# ติดตั้ง dependencies
npm install
# หรือ
yarn install
```

### 3. Run Locally (รันบนเครื่อง)
เริ่มการทำงานในโหมด Development:
```
npm run dev
```
เปิด Browser ไปที่ http://localhost:3000

---
## 🐋Run with Docker (แนะนำ)
เพื่อให้มั่นใจว่าทำงานได้เหมือน Production:

ตรวจสอบว่าเปิด Docker Desktop แล้ว

รันคำสั่ง:
```
docker-compose up -d --build
```
เปิด Browser ไปที่ http://localhost:3000

หากต้องการหยุดการทำงาน:

```
docker-compose down
```