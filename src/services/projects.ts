import { api } from "./api";

interface Project {
  id: string;
  name: string;
}

interface ListQueriedRequest {
  page?: number;
  perPage?: number;
  query?: string;
}

interface ListQueriedResponse<T> {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: T[];
}

const projectsApi = api.injectEndpoints({
  endpoints: (build) => ({
    listQueriedProjects: build.query<
      ListQueriedResponse<Project>,
      ListQueriedRequest
    >({
      query: ({ page = 1, perPage = 10, query = "" }) =>
        `/projects?page=${page}&perPage=${perPage}&query=${query}`,
    }),
  }),
});

export type { Project };

export const { useListQueriedProjectsQuery } = projectsApi;
