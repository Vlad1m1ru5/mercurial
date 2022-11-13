import { rest } from "msw";

const listQueriesProjectsHandler = rest.get("/api/projects", (_, res, ctx) =>
  res(
    ctx.json({
      page: 1,
      perPage: 10,
      total: 1,
      totalPages: 1,
      data: [{ id: "1", name: "Test Project" }],
    })
  )
);

export { listQueriesProjectsHandler };
