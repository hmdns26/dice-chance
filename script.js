const btn = document.querySelector(".btn-close");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".fact-list");
function datalist(datafetch) {
  const array = datafetch.map(
    (facts) => `<li class='fact'><p>${facts.text}
                
                <a
                  class="source"
                  href="${facts.source}"
                  target="_blank"
                  >(Source)</a
                >
              </p>
              <span class="tag" style="background-color: #3b82f6"
                >technology</span
              >
              </li>`
  );
  const html = array.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

async function loadfacts() {
  const res = await fetch(
    "https://wvkjuedxubeoccjmzsap.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2a2p1ZWR4dWJlb2Njam16c2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzNTA3MjAsImV4cCI6MjA0NDkyNjcyMH0.-CCKLIj3E8ISvj4z9thB4IlyTTHKIoTNLMjph1NUsnA",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2a2p1ZWR4dWJlb2Njam16c2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzNTA3MjAsImV4cCI6MjA0NDkyNjcyMH0.-CCKLIj3E8ISvj4z9thB4IlyTTHKIoTNLMjph1NUsnA",
      },
    }
  );
  const data = await res.json();
  datalist(data);
}
loadfacts();
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
