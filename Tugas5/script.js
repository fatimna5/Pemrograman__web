
const form = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username");
const searchBtn = document.querySelector("#searchBtn");
const statusMessage = document.querySelector("#status");
const result = document.querySelector("#result");


form.addEventListener("submit", async (event) => {
    event.preventDefault();

  
    const username = usernameInput.value.trim();

   
    result.replaceChildren();

    if (username === "") {
        statusMessage.textContent = "Masukkan username GitHub!";
        return;
    }


    statusMessage.textContent = "Loading... Sedang mencari pengguna.";
    searchBtn.disabled = true;

    try {
     
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

    
        if (response.status === 404) {
            statusMessage.textContent =
                "User tidak ditemukan. Periksa kembali username!";
            return;
        }

    
        if (!response.ok) {
            throw new Error("Terjadi kesalahan saat mengambil data.");
        }

     
        const data = await response.json();

     
        const card = document.createElement("div");
        card.className = "profile-card";

     
        const avatar = document.createElement("img");
        avatar.src = data.avatar_url;
        avatar.alt = "Avatar " + data.login;
        avatar.className = "avatar";

     
        const name = document.createElement("h2");
        name.textContent = data.name || data.login;

    
        const bio = document.createElement("p");
        bio.textContent = data.bio || "Bio tidak tersedia";

     
        const repos = document.createElement("p");
        repos.textContent =
            "Jumlah repositori publik: " + data.public_repos;

        const link = document.createElement("a");
        link.href = data.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Lihat Profil GitHub";

     
        card.appendChild(avatar);
        card.appendChild(name);
        card.appendChild(bio);
        card.appendChild(repos);
        card.appendChild(link);

      
        result.appendChild(card);

        statusMessage.textContent = "Data pengguna berhasil ditemukan!";

    } catch (error) {
        statusMessage.textContent =
            "Gagal mengambil data. Periksa koneksi internet!";
        console.error(error);

    } finally {
        searchBtn.disabled = false;
    }
});