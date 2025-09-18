<div id="magma">
  <input id="q" placeholder="Ask Jack Magma..." />
  <button id="send">Send</button>
  <div id="log" style="margin-top:8px"></div>
</div>

<script>
const WORKER_URL = "https://jack-magma-00.halfassed.workers.dev"; // your Worker URL
const SITE_KEY   = "PingaTePasaMaricon"; // same as MY_SITE_KEY

document.getElementById('send').onclick = async () => {
  const q = document.getElementById('q').value.trim();
  if (!q) return;
  const r = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-site-key": SITE_KEY },
    body: JSON.stringify({ user: q })
  });
  const j = await r.json();
  document.getElementById('log').innerHTML += `<p><b>You:</b> ${q}<br><b>Bot:</b> ${j.answer}</p>`;
  document.getElementById('q').value = "";
};
</script>
