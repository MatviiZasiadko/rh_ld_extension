const h = (e, r) => ({
  content: `**<@&1245715744130334772>** 
# New search result from \`${r}\``,
  embeds: [
    {
      color: 16748288,
      fields: e.map(o => ({
        name: o.company_name,
        value: o.company_linkedin
      })),
      timestamp: new Date().toISOString()
    }
  ],
  username: "Linkedin Extension"
});

async function g(e) {
  try {
    const r = await fetch(
      "https://discord.com/api/webhooks/1245720887219585125/_wG7CWAQnmQE_P_QpIV-OJEwsB93rDHmh9jkHuj3OW6T7mwEuAtJ_YYQgzmSgluV-qr2",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
      }
    );
    if (!r.ok) {
      const o = await r.json();
      console.error(r, o);
    }
  } catch (r) {
    console.error(r);
  }
}

const d = (e, r) => {
  console.log("companiesArray", e);

  const o = i(e, 2);
  console.log("chunks", o);

  let t = 0;
  const l = [];

  const m = s => {
    const n = new FormData();
    n.append("companies", JSON.stringify(s));

    return fetch("https://crm-s.com/api/v1/lead/get-unique-companies", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${r}`
      },
      body: n
    })
      .then(a => a.json())
      .then(a => {
        t++;
        console.log("Resolved count:", t);
        l.push(...a.data);
        console.log("Fetched data for chunk:", s);

        chrome.storage.local.set(
          { requestData: { resolvedCount: t, totalChunks: o.length } },
          function () {
            chrome.storage.local.get(["requestData"], function (c) {
              console.log("requestData", c.requestData);
            });
          }
        );

        return a;
      })
      .catch(a => {
        console.error("Error fetching chunk:", s, a);
        throw a;
      });
  };

  const u = o.map(s => m(s));

  return Promise.all(u)
    .then(() => {
      const s = l.filter(n => n.is_unique === true);
      console.log("isUniqueTrue", s);

      chrome.storage.local.get("userName", async function (n) {
        console.log("userName", n.userName);

        if (s.length > 0 && n.userName) {
          const a = i(s, 25);
          for (const c of a) {
            await g(h(c, n.userName));
          }

          chrome.storage.local.set({ companiesArray: s }, () => {
            console.log("Companies data saved to local storage");
            chrome.tabs.create({
              url: chrome.runtime.getURL("src/results/index.html")
            });
          });
        } else if (s.length === 0 && n.userName) {
          chrome.storage.local.set({
            error: "No unique companies found"
          });
        } else if (!n.userName) {
          chrome.storage.local.set({
            error: "User name not found. Try again"
          });
        }
      });
    })
    .catch(s => {
      chrome.storage.local.set({
        error: "Error in Promise.all. Try again"
      });
    });
};

const i = (e, r) => {
  const o = [];
  for (let t = 0; t < e.length; t += r) {
    o.push(e.slice(t, t + r));
  }
  return o;
};

chrome.runtime.onMessage.addListener(function (e, r, o) {
  if (e.action === "companiesArray") {
    console.log(JSON.stringify(e.companiesArray));

    d(e.companiesArray, e.accessToken)
      .then(() => {
        o({ success: true });
      })
      .catch(t => {
        o({ success: false, error: t });
      });

    return true;
  }
});
