import { c as u, j as i, R as g, r as s } from "./index-BlnmAowk.js";
const N = 0.9;
function _() {
  const [a, p] = s.useState([]),
    [n, f] = s.useState([]),
    [r, t] = s.useState(new Set()),
    [o, l] = s.useState(!1);
  s.useEffect(() => {
    chrome.storage.local.get(
      ["companiesArray", "unverifiedCompanies", "visitedLinks"],
      (e) => {
        e.companiesArray && p(e.companiesArray),
          e.unverifiedCompanies && f(e.unverifiedCompanies),
          e.visitedLinks &&
            Array.isArray(e.visitedLinks) &&
            t(new Set(e.visitedLinks));
      }
    );
  }, []);
  const m = async (e) => {
      if (!r.has(e))
        try {
          const { quota: c, usage: k } = await navigator.storage.estimate(),
            x = k / c,
            d = [...Array.from(r), e],
            h = x > N ? d.slice(50) : d;
          await new Promise((j, v) => {
            chrome.storage.local.set({ visitedLinks: h }, () => {
              chrome.runtime.lastError ? v(chrome.runtime.lastError) : j();
            });
          }),
            t(new Set(h));
        } catch (c) {
          console.error("Error handling link click:", c);
        }
    },
    y = () => {
      n.length === 0 ||
        o ||
        (l(!0),
        chrome.runtime.sendMessage(
          { action: "retryVerification", companies: n },
          (e) => {
            (!e || !e.success) &&
              (console.error(
                "Failed to start verification retry:",
                (e == null ? void 0 : e.error) || "Unknown error"
              ),
              l(!1));
          }
        ));
    };
  return i.jsxs("div", {
    className: "results-container",
    children: [
      i.jsx("h1", { children: "Search Results" }),
      i.jsx("div", {
        className: "results-summary",
        children: i.jsxs("p", {
          children: [
            i.jsxs("span", {
              className: "stat-item",
              children: [
                i.jsx("strong", { children: "Verified companies:" }),
                " ",
                a.length,
              ],
            }),
            i.jsxs("span", {
              className: "stat-item",
              children: [
                i.jsx("strong", { children: "Unverified companies:" }),
                " ",
                n.length,
              ],
            }),
          ],
        }),
      }),
      n.length > 0 &&
        i.jsx("div", {
          className: "retry-section",
          children: i.jsxs("button", {
            className: "retry-button",
            onClick: y,
            disabled: o,
            children: ["Retry Verification for ", n.length, " Companies"],
          }),
        }),
      i.jsxs("div", {
        className: "companies-section",
        children: [
          i.jsxs("h2", {
            className: "section-title",
            children: ["Verified Unique Companies (", a.length, ")"],
          }),
          a.length > 0
            ? i.jsx("ol", {
                children: a.map((e) =>
                  i.jsxs(
                    "li",
                    {
                      className: "company-item",
                      children: [
                        i.jsx("span", {
                          className: "company-name",
                          children: e.company_name,
                        }),
                        i.jsx("div", {
                          className: "company-link-container",
                          children: i.jsx("a", {
                            href: e.company_linkedin,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () => m(e.company_linkedin),
                            className: r.has(e.company_linkedin)
                              ? "visited-link"
                              : "",
                            children: e.company_linkedin,
                          }),
                        }),
                      ],
                    },
                    e.company_linkedin
                  )
                ),
              })
            : i.jsx("p", {
                className: "no-results",
                children: "No verified unique companies found.",
              }),
        ],
      }),
      n.length > 0 &&
        i.jsxs("div", {
          className: "companies-section unverified-section",
          children: [
            i.jsxs("h2", {
              className: "section-title",
              children: ["Unverified Companies (", n.length, ")"],
            }),
            i.jsx("p", {
              className: "section-description",
              children: `These companies couldn't be verified due to network issues. Click "Retry Verification" button above to try again.`,
            }),
            i.jsx("ol", {
              children: n.map((e) =>
                i.jsxs(
                  "li",
                  {
                    className: "company-item",
                    children: [
                      i.jsx("span", {
                        className: "company-name",
                        children: e.company_name,
                      }),
                      i.jsx("div", {
                        className: "company-link-container",
                        children: i.jsx("a", {
                          href: e.company_linkedin,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          onClick: () => m(e.company_linkedin),
                          className: r.has(e.company_linkedin)
                            ? "visited-link"
                            : "",
                          children: e.company_linkedin,
                        }),
                      }),
                    ],
                  },
                  e.company_linkedin
                )
              ),
            }),
          ],
        }),
    ],
  });
}
u.createRoot(document.getElementById("results-root")).render(
  i.jsx(g.StrictMode, { children: i.jsx(_, {}) })
);
