import { c as d, j as n, R as l, r as s } from "./index-BlnmAowk.js";
function m() {
  const [c, r] = s.useState([]),
    [t, a] = s.useState(new Set());
  s.useEffect(() => {
    chrome.storage.local.get(["companiesArray", "visitedLinks"], function (e) {
      e.companiesArray && r(e.companiesArray),
        e.visitedLinks && a(new Set(e.visitedLinks));
    });
  }, []);
  const o = (e) => {
    const i = new Set(t);
    i.add(e), a(i), chrome.storage.local.set({ visitedLinks: Array.from(i) });
  };
  return n.jsxs("div", {
    style: { padding: "2rem" },
    children: [
      n.jsx("h1", { children: "Search Results" }),
      n.jsx("ol", {
        children: c.map((e) =>
          n.jsxs(
            "li",
            {
              children: [
                n.jsx("b", { children: e.company_name }),
                n.jsx("div", {
                  children: n.jsx("a", {
                    href: e.company_linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: () => o(e.company_linkedin),
                    className: t.has(e.company_linkedin) ? "visited-link" : "",
                    children: e.company_linkedin,
                  }),
                }),
              ],
            },
            e.company_name
          )
        ),
      }),
    ],
  });
}
d.createRoot(document.getElementById("results-root")).render(
  n.jsx(l.StrictMode, { children: n.jsx(m, {}) })
);
