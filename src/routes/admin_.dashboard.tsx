import { createFileRoute } from "@tanstack/react-router";

import { AdminPage } from "./admin";

export const Route = createFileRoute("/admin_/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard | Chaitanya EM High School Admin" },
      {
        name: "description",
        content: "Manage content, images, gallery and enquiries for Chaitanya EM High School.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  ssr: false,
  component: AdminPage,
});
