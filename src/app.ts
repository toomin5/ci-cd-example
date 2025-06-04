import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3001;

// 기본 라우트
app.get("/", (_: Request, res: Response) => {
  res.json({
    message: "TypeScript Express 서버가 정상적으로 실행 중입니다!",
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
