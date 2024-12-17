import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { getUser } from "../utils/local-storage";
// import { navigate } from "../main";
export const ProfilePage = () => {
  // 페이지 구조 생성
  const header = Header();
  const footer = Footer();

  const { username, email, bio } = getUser() || {};
  const value = getUser();
  console.log(`user: ${JSON.stringify(value)}`);

  const html = `
      <div id="root">
        <div class="bg-gray-100 min-h-screen flex justify-center">
          <div class="max-w-md w-full">
            ${header}
            <main class="p-4">
              <div class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                  내 프로필
                </h2>
                <form id="profile-form">
                  <div class="mb-4">
                    <label
                      for="username"
                      class="block text-gray-700 text-sm font-bold mb-2"
                      >사용자 이름</label
                    >
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value="${username}"
                      class="w-full p-2 border rounded"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="email"
                      class="block text-gray-700 text-sm font-bold mb-2"
                      >이메일</label
                    >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value="${email}"
                      class="w-full p-2 border rounded"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="bio"
                      class="block text-gray-700 text-sm font-bold mb-2"
                      >자기소개</label
                    >
                    <textarea
                      id="bio"
                      name="bio"
                      rows="4"
                      class="w-full p-2 border rounded"
                    >${bio}</textarea>
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                  >
                    프로필 업데이트
                  </button>
                </form>
              </div>
            </main>
  
            ${footer}
          </div>
        </div>
      </div>
    `;

  // DOM에 추가된 후 이벤트 리스너 설정
  // setTimeout(() => {
  //   const form = document.getElementById("profile-form");

  //   if (form) {
  //     form.addEventListener("submit", (event) => {
  //       const usernameInput = document.getElementById("username").value;
  //       const emailInput = document.getElementById("email").value;
  //       const bioInput = document.getElementById("bio").value;
  //       saveUser(usernameInput, emailInput, bioInput);

  //       console.log(`inputs: ${usernameInput} ${emailInput} ${bioInput}`);
  //       event.preventDefault();
  //       alert("프로필이 업데이트되었습니다.");

  //       // const formData = new FormData(form);
  //     });
  //   }
  // }, 0);

  return html;
};