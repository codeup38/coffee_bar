# Family Coffee Bar

명절 기간 집 거실에서 운영하는 팝업 커피바용 모바일 웹사이트입니다.

- 손님은 메뉴/원두 설명을 읽고 이름만 입력해 주문합니다.
- 주문은 `Netlify Forms (orders)`에 저장됩니다.
- 운영자는 Netlify Dashboard에서 주문을 확인하고 완료된 제출을 삭제합니다.

## 핵심 기능

- 정적 사이트 (Astro + Tailwind CSS)
- 원두 목록/상세/스토리 페이지
- 원두 상세 페이지에서 바로 주문
- JS 가능 시 AJAX 제출 + 토스트 `주문 접수됨 ✅`
- JS 실패/비활성 시 `/thanks` 폴백
- `/share` 페이지에서 QR 생성 + URL 복사/공유
- 큰 글씨 모드 토글 (`localStorage` 유지)

## 페이지 구성

- `/` 홈
- `/beans` 원두 목록
- `/beans/[id]` 원두 상세 + 주문 폼
- `/story` 스토리
- `/thanks` 제출 폴백 페이지
- `/share` QR 공유 페이지

## 데이터 파일

- `src/data/beans.json`: 원두 데이터
- `src/data/site.json`: 사이트 텍스트/QR 설정

## 로컬 실행

```bash
npm install
npm run dev
```

빌드 확인:

```bash
npm run build
npm run preview
```

## 배포/브랜치 운영

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

## Netlify Forms 설정 (중요)

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
- `form-name=orders` (hidden)

## 명절 당일 운영

1. Netlify Dashboard > Forms > `orders`를 열어둡니다.
2. 주문 확인 후 커피를 준비합니다.
3. 전달 완료한 주문은 Delete로 제거합니다.

## QR 공유 운영

- `/share` 페이지를 열고 가족이 QR을 스캔하도록 안내합니다.
- 필요 시 URL 복사 버튼으로 메신저에 공유합니다.
