import { c, j as i, R as l, r } from "./index-QlLMW6Qq.js";
function m() {
  const [o, a] = r.useState([]),
    [n, t] = r.useState(new Set());
  r.useEffect(() => {
    chrome.storage.local.get(["companiesArray", "visitedLinks"], function (e) {
      e.companiesArray && a(e.companiesArray),
        e.visitedLinks && t(new Set(e.visitedLinks));
    });
  }, []);
  const d = (e) => {
    const s = new Set(n);
    s.add(e), t(s), chrome.storage.local.set({ visitedLinks: Array.from(s) });
  };
  return i.jsxs("div", {
    style: { padding: "2rem" },
    children: [
      i.jsxs("div", {
        style: { marginBottom: "2rem" },
        children: [
          i.jsx("h1", { children: "Search Results" }),
          i.jsxs("div", {
            style: { marginTop: "1rem", fontSize: "0.9em", color: "#666" },
            children: ["Visited Links: ", n.size],
          }),
        ],
      }),
      i.jsx("ol", {
        children: o.map((e) =>
          i.jsxs(
            "li",
            {
              children: [
                i.jsx("b", { children: e.company_name }),
                i.jsx("div", {
                  children: i.jsx("a", {
                    href: e.company_linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: () => d(e.company_linkedin),
                    className: n.has(e.company_linkedin) ? "visited-link" : "",
                    children: e.company_linkedin,
                  }),
                }),
              ],
            },
            e.company_name
          )
        ),
      }),
      n.size > 0 &&
        i.jsxs("div", {
          style: {
            marginTop: "2rem",
            borderTop: "1px solid #444",
            paddingTop: "1rem",
          },
          children: [
            i.jsx("h2", {
              style: { fontSize: "1em", marginBottom: "1rem" },
              children: "Visited Links History",
            }),
            i.jsx("ul", {
              style: { listStyle: "none", padding: 0 },
              children: Array.from(n).map((e) =>
                i.jsx(
                  "li",
                  {
                    style: { marginBottom: "0.5rem" },
                    children: i.jsx("a", {
                      href: e,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "visited-link",
                      children: e,
                    }),
                  },
                  e
                )
              ),
            }),
          ],
        }),
    ],
  });
}
c.createRoot(document.getElementById("results-root")).render(
  i.jsx(l.StrictMode, { children: i.jsx(m, {}) })
);
