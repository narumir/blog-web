import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  route("/api/logout", "./routes/api/logout.tsx"),
  layout("routes/layout.tsx", [
    index("routes/page.tsx"),
    route("/articles/new", "./routes/articles/new/page.tsx"),
    route("/articles/:articleId", "./routes/articles/[articleId]/page.tsx"),
  ]),
  layout("routes/(auth)/layout.tsx", [
    route("/login", "./routes/(auth)/login/page.tsx"),
    route("/signup", "./routes/(auth)/signup/page.tsx"),
  ]),
] satisfies RouteConfig;
