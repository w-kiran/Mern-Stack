import express, { Request, Response } from 'express';

const app = express();

enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500
}

app.get("/", (req: Request, res: Response) => {
  if (!req.query.userId) {
    res.status(ResponseStatus.Error).json({});
    return;
  }

  res.status(ResponseStatus.Success).json({});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
