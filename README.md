# ☕ coffee bar

> 명절에 가족에게 드립 커피를 내려주면서 사용한 모바일 웹사이트

**[Live Demo →](https://drip-coffee.netlify.app)**

## 만든 이유

가족 모임에서 드립 커피를 내려주는데, 원두 설명을 일일이 하기 어려워서
모바일 웹으로 원두 소개 · 주문 · 읽을거리를 한곳에 모았습니다.
JSON 파일(원두/사이트 텍스트)만 바꾸면 다른 팝업에도 재사용할 수 있습니다.

## 기능

- 원두별 상세 페이지 — 맛 프로필, 이야기, 배경
- 이름만 입력하는 간단 주문 → Netlify Forms
- 주문 후 읽을거리 흐름 (story → bean reading)
- QR 코드 공유 페이지
- 모바일 퍼스트 반응형

## 기술 스택

Astro · Tailwind CSS · Netlify Forms
JS 프레임워크 없는 정적 사이트 — 빌드 결과물은 순수 HTML/CSS/JS

## 시작하기

```bash
npm install
npm run dev       # 개발 서버
npm run build     # 프로덕션 빌드
```

## 커스터마이징

| 파일 | 내용 |
|------|------|
| `src/data/beans.json` | 원두 목록·프로필·텍스트 |
| `src/data/site.json` | 사이트 제목·스토리·QR 설정 |

## 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 홈 |
| `/beans` | 원두 목록 |
| `/beans/[id]` | 원두 상세 + 주문 |
| `/story` | 커피 이야기 |
| `/thanks` | 주문 완료 |
| `/share` | QR 공유 |

<details>
<summary>운영 가이드 (Netlify Forms · 당일 운영)</summary>

### 배포/브랜치 운영

기본 운영 흐름:

1. `dev` 브랜치에서 작업
2. `dev -> main` Pull Request 생성
3. PR Deploy Preview를 모바일에서 확인
4. PR 승인 후 `main` 병합
5. Netlify 프로덕션 자동 배포

권장 Netlify 설정:

- Production branch: `main`
- Branch deploy: `dev`
- Build command: `npm run build`
- Publish directory: `dist`

### Netlify Forms 설정 (중요)

1. Netlify Site settings에서 Form detection ON
2. 배포 1회 재실행(redeploy)
3. 원두 상세 페이지에서 테스트 주문 1건 제출
4. Dashboard > Forms > `orders`에 제출이 쌓이는지 확인

폼 필드:

- `customer_name` (required)
- `bean_id` (hidden)
- `bean_name` (hidden)
- `page_path` (hidden)
- `created_at_client` (hidden)
- `serve_temp` (hidden, `hot` 또는 `ice`)
- `form-name=orders` (hidden)

### 명절 당일 운영

1. Netlify Dashboard > Forms > `orders`를 열어둡니다.
2. 주문 확인 후 커피를 준비합니다.
3. 전달 완료한 주문은 Delete로 제거합니다.

### QR 공유 운영

- `/share` 페이지를 열고 가족이 QR을 스캔하도록 안내합니다.
- 필요 시 URL 복사 버튼으로 메신저에 공유합니다.

</details>

## License

MIT
