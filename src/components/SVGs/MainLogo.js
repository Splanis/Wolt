import React from "react";
import styled, { keyframes } from "styled-components";

// The SVG was created with free software 'Figma'.
const MainLogo = () => {
    return (
        <svg width="121" height="62" viewBox="0 0 121 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="121" height="62" fill="black">
                <rect fill="white" width="121" height="62" />
                <PathW d="M43.9387 16.9189C43.5605 17.7838 43.0659 19.027 42.4548 20.6486C41.8438 22.2703 41.1455 24.1351 40.3599 26.2432C39.5743 28.3243 38.7305 30.5946 37.8285 33.0541C36.9265 35.4865 36.0245 37.9595 35.1225 40.473C34.2205 42.9865 33.3331 45.4595 32.4602 47.8919C31.5873 50.3243 30.7871 52.5946 30.0597 54.7027C33.0858 53.3514 35.7917 51.5946 38.1776 49.4324C40.5927 47.2432 42.7021 44.8243 44.5061 42.1757C46.3392 39.527 47.8959 36.7162 49.1761 33.7432C50.4855 30.7432 51.5475 27.7568 52.3622 24.7838C53.1769 21.8108 53.7734 18.9324 54.1516 16.1486C54.5299 13.3378 54.719 10.7703 54.719 8.44595C54.719 8.22973 54.6462 7.97297 54.5008 7.67568C54.3553 7.37838 54.1807 7.10811 53.977 6.86486C53.7734 6.59459 53.5406 6.36486 53.2787 6.17568C53.0459 5.98649 52.8423 5.89189 52.6677 5.89189C52.2312 5.89189 51.7366 6.04054 51.1838 6.33784C50.6309 6.63514 50.1799 6.89189 49.8308 7.10811L49.2634 6.2973C49.8453 5.81081 50.4855 5.31081 51.1838 4.7973C51.8821 4.28378 52.5659 3.82432 53.2351 3.41892C53.9334 2.98649 54.5881 2.64865 55.1991 2.40541C55.8392 2.13514 56.392 2 56.8576 2C57.876 2 58.7779 2.2973 59.5636 2.89189C60.3783 3.48649 61.062 4.16216 61.6149 4.91892C62.1968 5.64865 62.6332 6.36486 62.9242 7.06757C63.2443 7.77027 63.4043 8.22973 63.4043 8.44595C63.4043 9.58108 63.2297 11.0946 62.8806 12.9865C62.5605 14.8784 62.0513 17.0135 61.353 19.3919C60.6547 21.7432 59.7527 24.2568 58.647 26.9324C57.5704 29.6081 56.2611 32.2973 54.719 35C53.206 37.6757 51.4602 40.2973 49.4816 42.8649C47.5322 45.4054 45.3354 47.7297 42.8913 49.8378C40.4763 51.9459 37.7848 53.7568 34.817 55.2703C31.8783 56.7568 28.6776 57.8108 25.2152 58.4324C24.9242 58.4865 24.6769 58.527 24.4732 58.5541C24.2695 58.6081 24.0368 58.6487 23.7749 58.6757C23.5421 58.7297 23.2657 58.7838 22.9456 58.8378C22.6256 58.8919 22.2037 58.9459 21.6799 59L21.1126 58.1081C21.3744 57.6486 21.6945 56.973 22.0727 56.0811C22.4801 55.1622 22.9311 54.0811 23.4257 52.8378C23.9495 51.5946 24.4877 50.2297 25.0406 48.7432C25.6225 47.2297 26.219 45.6486 26.83 44C23.9204 47.8649 20.5452 51.027 16.7044 53.4865C12.8928 55.9459 8.64472 57.7838 3.96018 59L3 58.1081C3.40735 56.9459 3.97473 55.3514 4.70214 53.3243C5.45865 51.2703 6.2879 48.9595 7.18989 46.3919C8.12098 43.7973 9.09571 41.0405 10.1141 38.1216C11.1616 35.1757 12.1945 32.2432 13.2129 29.3243C14.2312 26.3784 15.206 23.5405 16.1371 20.8108C17.0972 18.0811 17.941 15.6216 18.6685 13.4324C19.3959 11.2432 19.9778 9.43243 20.4142 8C20.8798 6.54054 21.1417 5.63514 21.1998 5.28378C21.1998 4.98649 21.1126 4.71622 20.938 4.47297C19.8614 4.55405 18.7994 4.67568 17.7519 4.83784C16.7044 5 15.7734 5.21622 14.9587 5.48649C14.5804 5.62162 14.173 5.85135 13.7366 6.17568C13.3002 6.47297 12.8928 6.85135 12.5145 7.31081C12.1363 7.77027 11.8162 8.28378 11.5544 8.85135C11.3216 9.39189 11.2052 9.94595 11.2052 10.5135C11.2052 10.8649 11.2343 11.3108 11.2925 11.8514C11.3507 12.3649 11.4671 12.8919 11.6417 13.4324L11.1179 13.9189C9.634 12.9189 8.45559 11.8784 7.5827 10.7973C6.7098 9.68919 6.27335 8.66216 6.27335 7.71622C6.27335 7.17568 6.46248 6.58108 6.84074 5.93243C7.24809 5.28378 7.74273 4.68919 8.32466 4.14865C8.90659 3.58108 9.53216 3.10811 10.2014 2.72973C10.8706 2.35135 11.4671 2.16216 11.9908 2.16216C13.7948 2.16216 15.7734 2.22973 17.9265 2.36486C20.0796 2.5 22.3637 2.56757 24.7787 2.56757C25.3025 2.56757 25.768 2.56757 26.1753 2.56757C26.5827 2.56757 26.961 2.56757 27.3101 2.56757C27.6884 2.54054 28.0666 2.52703 28.4449 2.52703C28.8231 2.5 29.2741 2.45946 29.7979 2.40541L30.0597 2.81081C29.536 4.27027 28.925 5.98649 28.2266 7.95946C27.5283 9.93243 26.7718 12.0676 25.9571 14.3649C25.1715 16.6351 24.3423 19.0135 23.4694 21.5C22.6256 23.9595 21.7818 26.4324 20.938 28.9189C20.0942 31.4054 19.2649 33.8514 18.4502 36.2568C17.6355 38.6351 16.879 40.8784 16.1807 42.9865C15.4824 45.0676 14.8423 46.9595 14.2603 48.6622C13.7075 50.3378 13.2565 51.7162 12.9074 52.7973C16.8936 50.6081 20.4142 47.8378 23.4694 44.4865C26.5245 41.1351 28.925 37.4054 30.6708 33.2973V33.3784C31.2527 31.7297 31.791 30.1486 32.2856 28.6351C32.8093 27.0946 33.2603 25.7162 33.6386 24.5C34.0459 23.2568 34.366 22.2027 34.5988 21.3378C34.8606 20.4459 35.0207 19.8108 35.0789 19.4324C35.0789 18.9459 34.9334 18.6081 34.6424 18.4189V17.9324C35.428 17.7162 36.1409 17.5405 36.781 17.4054C37.4502 17.2432 38.1194 17.1216 38.7887 17.0405C39.487 16.9324 40.2289 16.8514 41.0145 16.7973C41.8002 16.7432 42.7021 16.7027 43.7205 16.6757L43.9387 16.9189Z" />
                <PathO d="M60 37.1081C60.6983 35.5405 61.5567 34.1351 62.575 32.8919C63.5934 31.6216 64.7136 30.5541 65.9357 29.6892C67.1577 28.7973 68.4525 28.1216 69.8201 27.6622C71.1876 27.2027 72.5697 26.973 73.9663 26.973C74.5773 26.973 75.2466 27.1351 75.974 27.4595C76.7305 27.7568 77.4288 28.1757 78.0689 28.7162C78.709 29.2568 79.2328 29.9189 79.6401 30.7027C80.0766 31.4595 80.2948 32.2973 80.2948 33.2162C80.2948 34 80.193 34.9054 79.9893 35.9324C79.7856 36.9324 79.5237 37.973 79.2037 39.0541C78.8836 40.1081 78.5345 41.1622 78.1562 42.2162C77.7779 43.2703 77.4142 44.2432 77.0651 45.1351C76.7159 46 76.3959 46.7432 76.1049 47.3649C75.843 47.9865 75.6539 48.4054 75.5375 48.6216C74.8392 50.2162 73.9809 51.6351 72.9625 52.8784C71.9441 54.1216 70.8239 55.1892 69.6018 56.0811C68.3798 56.9459 67.085 57.6081 65.7175 58.0676C64.379 58.527 63.0115 58.7568 61.6149 58.7568C61.0038 58.7568 60.3346 58.6081 59.6072 58.3108C58.8507 58.0135 58.1524 57.5946 57.5123 57.0541C56.8721 56.4865 56.3484 55.8243 55.941 55.0676C55.5046 54.3108 55.2864 53.473 55.2864 52.5541C55.2864 51.7432 55.3882 50.8378 55.5919 49.8378C55.7956 48.8108 56.0574 47.7703 56.3775 46.7162C56.6976 45.6351 57.0467 44.5676 57.425 43.5135C57.8032 42.4595 58.1669 41.5 58.5161 40.6351C58.8652 39.7703 59.1708 39.027 59.4326 38.4054C59.6945 37.7568 59.8836 37.3243 60 37.1081ZM72.0896 29.2027C71.4204 29.2027 70.693 29.7568 69.9074 30.8649C69.1508 31.9459 68.3798 33.3378 67.5942 35.0405C66.8377 36.7432 66.0957 38.6081 65.3683 40.6351C64.67 42.6351 64.0444 44.5676 63.4916 46.4324C62.9678 48.2973 62.5314 49.9459 62.1822 51.3784C61.8622 52.7838 61.7021 53.7297 61.7021 54.2162C61.7021 55 61.8622 55.5676 62.1822 55.9189C62.5023 56.2703 62.9387 56.4459 63.4916 56.4459C63.9862 56.4459 64.51 56.1351 65.0628 55.5135C65.6156 54.8649 66.183 54.0135 66.7649 52.9595C67.3469 51.9054 67.9142 50.6892 68.4671 49.3108C69.049 47.9324 69.6018 46.5135 70.1256 45.0541C70.6493 43.5676 71.1294 42.0946 71.5659 40.6351C72.0314 39.1757 72.4242 37.8243 72.7443 36.5811C73.0934 35.3378 73.3553 34.2703 73.5299 33.3784C73.7335 32.4595 73.8354 31.8243 73.8354 31.473C73.8354 30.6892 73.6753 30.1216 73.3553 29.7703C73.0352 29.3919 72.6133 29.2027 72.0896 29.2027Z" />
                <PathL d="M100.546 14.2838C99.8185 16.2838 98.9602 18.5676 97.9709 21.1351C96.9816 23.6757 95.9632 26.2973 94.9158 29C93.8974 31.6757 92.879 34.3378 91.8606 36.9865C90.8423 39.6351 89.9403 42.0541 89.1547 44.2432C88.3691 46.4054 87.7289 48.2568 87.2343 49.7973C86.7397 51.3378 86.4923 52.3378 86.4923 52.7973C86.4923 53.2838 86.7106 53.527 87.147 53.527C87.438 53.5 87.9035 53.3514 88.5436 53.0811C89.1838 52.7838 89.9257 52.3514 90.7695 51.7838C91.6133 51.2162 92.5153 50.527 93.4755 49.7162C94.4648 48.8784 95.4541 47.9054 96.4433 46.7973L97.4035 47.6486C96.1233 49.0811 94.7412 50.473 93.2573 51.8243C91.8025 53.1486 90.3622 54.3243 88.9364 55.3514C87.5398 56.3784 86.2305 57.2027 85.0084 57.8243C83.7864 58.4459 82.768 58.7568 81.9533 58.7568C81.5459 58.7568 81.2113 58.5811 80.9495 58.2297C80.6876 57.9054 80.4839 57.5 80.3384 57.0135C80.1639 56.5 80.0475 55.9595 79.9893 55.3919C79.9311 54.7973 79.902 54.2568 79.902 53.7703C79.902 53.6622 79.9165 53.5 79.9456 53.2838C79.9456 53.0405 79.9602 52.7838 79.9893 52.5135C80.0184 52.2162 80.062 51.9324 80.1202 51.6622C80.1493 51.3649 80.193 51.1081 80.2512 50.8919C80.804 49.0811 81.4587 47.1081 82.2152 44.973C82.9426 42.8378 83.7282 40.6351 84.572 38.3649C85.4158 36.0946 86.2887 33.7973 87.1907 31.473C88.0927 29.1486 88.9655 26.9054 89.8093 24.7432C90.6822 22.5541 91.4969 20.5 92.2534 18.5811C93.01 16.6351 93.6792 14.9189 94.2611 13.4324C94.843 11.9189 95.294 10.6892 95.6141 9.74324C95.9632 8.77027 96.1378 8.17568 96.1378 7.95946C96.1378 7.36486 95.9632 6.95946 95.6141 6.74324C95.294 6.5 94.8867 6.39189 94.392 6.41892C93.8974 6.44595 93.3591 6.55405 92.7772 6.74324C92.1953 6.90541 91.657 7.09459 91.1623 7.31081L90.5949 6.21622C93.5919 4.86486 95.9923 3.91892 97.7963 3.37838C99.6294 2.83784 100.895 2.56757 101.593 2.56757C101.797 2.56757 102.03 2.64865 102.292 2.81081C102.583 2.94595 102.845 3.14865 103.077 3.41892C103.31 3.68919 103.514 4 103.688 4.35135C103.863 4.67568 103.95 5.01351 103.95 5.36486C103.95 5.58108 103.616 6.48649 102.946 8.08108C102.277 9.64865 101.477 11.7162 100.546 14.2838Z" />
                <PathT d="M117 12.7027C116.651 13.4595 116.243 14.3649 115.778 15.4189C115.342 16.473 114.861 17.6216 114.338 18.8649C113.814 20.1081 113.261 21.4324 112.679 22.8378C112.126 24.2432 111.544 25.6757 110.933 27.1351L117 26.973L116.214 28.8784L110.191 28.9595C109.202 31.4189 108.242 33.8784 107.311 36.3378C106.38 38.7703 105.536 41.0405 104.779 43.1486C104.052 45.2568 103.456 47.1081 102.99 48.7027C102.554 50.2973 102.335 51.473 102.335 52.2297C102.335 52.6892 102.394 53.0135 102.51 53.2027C102.626 53.3649 102.874 53.4459 103.252 53.4459C103.485 53.4459 103.965 53.2568 104.692 52.8784C105.449 52.473 106.307 51.9054 107.267 51.1757C108.257 50.4459 109.275 49.5676 110.322 48.5405C111.399 47.5135 112.403 46.3784 113.334 45.1351L114.294 45.9865C113.276 47.3649 112.039 48.8108 110.584 50.3243C109.159 51.8108 107.689 53.1892 106.176 54.4595C104.663 55.7027 103.179 56.7297 101.724 57.5405C100.299 58.3514 99.0766 58.7568 98.0582 58.7568C97.9127 58.7568 97.6363 58.6892 97.2289 58.5541C96.8216 58.4459 96.5015 58.2703 96.2688 58.027C96.0942 57.8108 95.9051 57.3514 95.7014 56.6486C95.4686 55.9459 95.3522 55.027 95.3522 53.8919C95.3522 53.1081 95.585 51.8514 96.0505 50.1216C96.487 48.3919 97.0835 46.3919 97.84 44.1216C98.5674 41.8514 99.3966 39.4189 100.328 36.8243C101.288 34.2027 102.263 31.6081 103.252 29.0405L98.2328 29.1216L98.9311 27.3784L103.863 27.2973L109.319 13.5946C109.871 13.4054 110.57 13.2432 111.413 13.1081C112.257 12.973 113.087 12.8514 113.901 12.7432C114.861 12.6351 115.836 12.5405 116.825 12.4595C116.825 12.5135 116.855 12.5541 116.913 12.5811C116.971 12.6081 117 12.6486 117 12.7027Z" />
            </mask>
            <PathW
                d="M43.9387 16.9189C43.5605 17.7838 43.0659 19.027 42.4548 20.6486C41.8438 22.2703 41.1455 24.1351 40.3599 26.2432C39.5743 28.3243 38.7305 30.5946 37.8285 33.0541C36.9265 35.4865 36.0245 37.9595 35.1225 40.473C34.2205 42.9865 33.3331 45.4595 32.4602 47.8919C31.5873 50.3243 30.7871 52.5946 30.0597 54.7027C33.0858 53.3514 35.7917 51.5946 38.1776 49.4324C40.5927 47.2432 42.7021 44.8243 44.5061 42.1757C46.3392 39.527 47.8959 36.7162 49.1761 33.7432C50.4855 30.7432 51.5475 27.7568 52.3622 24.7838C53.1769 21.8108 53.7734 18.9324 54.1516 16.1486C54.5299 13.3378 54.719 10.7703 54.719 8.44595C54.719 8.22973 54.6462 7.97297 54.5008 7.67568C54.3553 7.37838 54.1807 7.10811 53.977 6.86486C53.7734 6.59459 53.5406 6.36486 53.2787 6.17568C53.0459 5.98649 52.8423 5.89189 52.6677 5.89189C52.2312 5.89189 51.7366 6.04054 51.1838 6.33784C50.6309 6.63514 50.1799 6.89189 49.8308 7.10811L49.2634 6.2973C49.8453 5.81081 50.4855 5.31081 51.1838 4.7973C51.8821 4.28378 52.5659 3.82432 53.2351 3.41892C53.9334 2.98649 54.5881 2.64865 55.1991 2.40541C55.8392 2.13514 56.392 2 56.8576 2C57.876 2 58.7779 2.2973 59.5636 2.89189C60.3783 3.48649 61.062 4.16216 61.6149 4.91892C62.1968 5.64865 62.6332 6.36486 62.9242 7.06757C63.2443 7.77027 63.4043 8.22973 63.4043 8.44595C63.4043 9.58108 63.2297 11.0946 62.8806 12.9865C62.5605 14.8784 62.0513 17.0135 61.353 19.3919C60.6547 21.7432 59.7527 24.2568 58.647 26.9324C57.5704 29.6081 56.2611 32.2973 54.719 35C53.206 37.6757 51.4602 40.2973 49.4816 42.8649C47.5322 45.4054 45.3354 47.7297 42.8913 49.8378C40.4763 51.9459 37.7848 53.7568 34.817 55.2703C31.8783 56.7568 28.6776 57.8108 25.2152 58.4324C24.9242 58.4865 24.6769 58.527 24.4732 58.5541C24.2695 58.6081 24.0368 58.6487 23.7749 58.6757C23.5421 58.7297 23.2657 58.7838 22.9456 58.8378C22.6256 58.8919 22.2037 58.9459 21.6799 59L21.1126 58.1081C21.3744 57.6486 21.6945 56.973 22.0727 56.0811C22.4801 55.1622 22.9311 54.0811 23.4257 52.8378C23.9495 51.5946 24.4877 50.2297 25.0406 48.7432C25.6225 47.2297 26.219 45.6486 26.83 44C23.9204 47.8649 20.5452 51.027 16.7044 53.4865C12.8928 55.9459 8.64472 57.7838 3.96018 59L3 58.1081C3.40735 56.9459 3.97473 55.3514 4.70214 53.3243C5.45865 51.2703 6.2879 48.9595 7.18989 46.3919C8.12098 43.7973 9.09571 41.0405 10.1141 38.1216C11.1616 35.1757 12.1945 32.2432 13.2129 29.3243C14.2312 26.3784 15.206 23.5405 16.1371 20.8108C17.0972 18.0811 17.941 15.6216 18.6685 13.4324C19.3959 11.2432 19.9778 9.43243 20.4142 8C20.8798 6.54054 21.1417 5.63514 21.1998 5.28378C21.1998 4.98649 21.1126 4.71622 20.938 4.47297C19.8614 4.55405 18.7994 4.67568 17.7519 4.83784C16.7044 5 15.7734 5.21622 14.9587 5.48649C14.5804 5.62162 14.173 5.85135 13.7366 6.17568C13.3002 6.47297 12.8928 6.85135 12.5145 7.31081C12.1363 7.77027 11.8162 8.28378 11.5544 8.85135C11.3216 9.39189 11.2052 9.94595 11.2052 10.5135C11.2052 10.8649 11.2343 11.3108 11.2925 11.8514C11.3507 12.3649 11.4671 12.8919 11.6417 13.4324L11.1179 13.9189C9.634 12.9189 8.45559 11.8784 7.5827 10.7973C6.7098 9.68919 6.27335 8.66216 6.27335 7.71622C6.27335 7.17568 6.46248 6.58108 6.84074 5.93243C7.24809 5.28378 7.74273 4.68919 8.32466 4.14865C8.90659 3.58108 9.53216 3.10811 10.2014 2.72973C10.8706 2.35135 11.4671 2.16216 11.9908 2.16216C13.7948 2.16216 15.7734 2.22973 17.9265 2.36486C20.0796 2.5 22.3637 2.56757 24.7787 2.56757C25.3025 2.56757 25.768 2.56757 26.1753 2.56757C26.5827 2.56757 26.961 2.56757 27.3101 2.56757C27.6884 2.54054 28.0666 2.52703 28.4449 2.52703C28.8231 2.5 29.2741 2.45946 29.7979 2.40541L30.0597 2.81081C29.536 4.27027 28.925 5.98649 28.2266 7.95946C27.5283 9.93243 26.7718 12.0676 25.9571 14.3649C25.1715 16.6351 24.3423 19.0135 23.4694 21.5C22.6256 23.9595 21.7818 26.4324 20.938 28.9189C20.0942 31.4054 19.2649 33.8514 18.4502 36.2568C17.6355 38.6351 16.879 40.8784 16.1807 42.9865C15.4824 45.0676 14.8423 46.9595 14.2603 48.6622C13.7075 50.3378 13.2565 51.7162 12.9074 52.7973C16.8936 50.6081 20.4142 47.8378 23.4694 44.4865C26.5245 41.1351 28.925 37.4054 30.6708 33.2973V33.3784C31.2527 31.7297 31.791 30.1486 32.2856 28.6351C32.8093 27.0946 33.2603 25.7162 33.6386 24.5C34.0459 23.2568 34.366 22.2027 34.5988 21.3378C34.8606 20.4459 35.0207 19.8108 35.0789 19.4324C35.0789 18.9459 34.9334 18.6081 34.6424 18.4189V17.9324C35.428 17.7162 36.1409 17.5405 36.781 17.4054C37.4502 17.2432 38.1194 17.1216 38.7887 17.0405C39.487 16.9324 40.2289 16.8514 41.0145 16.7973C41.8002 16.7432 42.7021 16.7027 43.7205 16.6757L43.9387 16.9189Z"
                stroke="white"
                stroke-width="4"
                mask="url(#path-1-outside-1)"
            />
            <PathO
                d="M60 37.1081C60.6983 35.5405 61.5567 34.1351 62.575 32.8919C63.5934 31.6216 64.7136 30.5541 65.9357 29.6892C67.1577 28.7973 68.4525 28.1216 69.8201 27.6622C71.1876 27.2027 72.5697 26.973 73.9663 26.973C74.5773 26.973 75.2466 27.1351 75.974 27.4595C76.7305 27.7568 77.4288 28.1757 78.0689 28.7162C78.709 29.2568 79.2328 29.9189 79.6401 30.7027C80.0766 31.4595 80.2948 32.2973 80.2948 33.2162C80.2948 34 80.193 34.9054 79.9893 35.9324C79.7856 36.9324 79.5237 37.973 79.2037 39.0541C78.8836 40.1081 78.5345 41.1622 78.1562 42.2162C77.7779 43.2703 77.4142 44.2432 77.0651 45.1351C76.7159 46 76.3959 46.7432 76.1049 47.3649C75.843 47.9865 75.6539 48.4054 75.5375 48.6216C74.8392 50.2162 73.9809 51.6351 72.9625 52.8784C71.9441 54.1216 70.8239 55.1892 69.6018 56.0811C68.3798 56.9459 67.085 57.6081 65.7175 58.0676C64.379 58.527 63.0115 58.7568 61.6149 58.7568C61.0038 58.7568 60.3346 58.6081 59.6072 58.3108C58.8507 58.0135 58.1524 57.5946 57.5123 57.0541C56.8721 56.4865 56.3484 55.8243 55.941 55.0676C55.5046 54.3108 55.2864 53.473 55.2864 52.5541C55.2864 51.7432 55.3882 50.8378 55.5919 49.8378C55.7956 48.8108 56.0574 47.7703 56.3775 46.7162C56.6976 45.6351 57.0467 44.5676 57.425 43.5135C57.8032 42.4595 58.1669 41.5 58.5161 40.6351C58.8652 39.7703 59.1708 39.027 59.4326 38.4054C59.6945 37.7568 59.8836 37.3243 60 37.1081ZM72.0896 29.2027C71.4204 29.2027 70.693 29.7568 69.9074 30.8649C69.1508 31.9459 68.3798 33.3378 67.5942 35.0405C66.8377 36.7432 66.0957 38.6081 65.3683 40.6351C64.67 42.6351 64.0444 44.5676 63.4916 46.4324C62.9678 48.2973 62.5314 49.9459 62.1822 51.3784C61.8622 52.7838 61.7021 53.7297 61.7021 54.2162C61.7021 55 61.8622 55.5676 62.1822 55.9189C62.5023 56.2703 62.9387 56.4459 63.4916 56.4459C63.9862 56.4459 64.51 56.1351 65.0628 55.5135C65.6156 54.8649 66.183 54.0135 66.7649 52.9595C67.3469 51.9054 67.9142 50.6892 68.4671 49.3108C69.049 47.9324 69.6018 46.5135 70.1256 45.0541C70.6493 43.5676 71.1294 42.0946 71.5659 40.6351C72.0314 39.1757 72.4242 37.8243 72.7443 36.5811C73.0934 35.3378 73.3553 34.2703 73.5299 33.3784C73.7335 32.4595 73.8354 31.8243 73.8354 31.473C73.8354 30.6892 73.6753 30.1216 73.3553 29.7703C73.0352 29.3919 72.6133 29.2027 72.0896 29.2027Z"
                stroke="white"
                stroke-width="4"
                mask="url(#path-1-outside-1)"
            />
            <PathL
                d="M100.546 14.2838C99.8185 16.2838 98.9602 18.5676 97.9709 21.1351C96.9816 23.6757 95.9632 26.2973 94.9158 29C93.8974 31.6757 92.879 34.3378 91.8606 36.9865C90.8423 39.6351 89.9403 42.0541 89.1547 44.2432C88.3691 46.4054 87.7289 48.2568 87.2343 49.7973C86.7397 51.3378 86.4923 52.3378 86.4923 52.7973C86.4923 53.2838 86.7106 53.527 87.147 53.527C87.438 53.5 87.9035 53.3514 88.5436 53.0811C89.1838 52.7838 89.9257 52.3514 90.7695 51.7838C91.6133 51.2162 92.5153 50.527 93.4755 49.7162C94.4648 48.8784 95.4541 47.9054 96.4433 46.7973L97.4035 47.6486C96.1233 49.0811 94.7412 50.473 93.2573 51.8243C91.8025 53.1486 90.3622 54.3243 88.9364 55.3514C87.5398 56.3784 86.2305 57.2027 85.0084 57.8243C83.7864 58.4459 82.768 58.7568 81.9533 58.7568C81.5459 58.7568 81.2113 58.5811 80.9495 58.2297C80.6876 57.9054 80.4839 57.5 80.3384 57.0135C80.1639 56.5 80.0475 55.9595 79.9893 55.3919C79.9311 54.7973 79.902 54.2568 79.902 53.7703C79.902 53.6622 79.9165 53.5 79.9456 53.2838C79.9456 53.0405 79.9602 52.7838 79.9893 52.5135C80.0184 52.2162 80.062 51.9324 80.1202 51.6622C80.1493 51.3649 80.193 51.1081 80.2512 50.8919C80.804 49.0811 81.4587 47.1081 82.2152 44.973C82.9426 42.8378 83.7282 40.6351 84.572 38.3649C85.4158 36.0946 86.2887 33.7973 87.1907 31.473C88.0927 29.1486 88.9655 26.9054 89.8093 24.7432C90.6822 22.5541 91.4969 20.5 92.2534 18.5811C93.01 16.6351 93.6792 14.9189 94.2611 13.4324C94.843 11.9189 95.294 10.6892 95.6141 9.74324C95.9632 8.77027 96.1378 8.17568 96.1378 7.95946C96.1378 7.36486 95.9632 6.95946 95.6141 6.74324C95.294 6.5 94.8867 6.39189 94.392 6.41892C93.8974 6.44595 93.3591 6.55405 92.7772 6.74324C92.1953 6.90541 91.657 7.09459 91.1623 7.31081L90.5949 6.21622C93.5919 4.86486 95.9923 3.91892 97.7963 3.37838C99.6294 2.83784 100.895 2.56757 101.593 2.56757C101.797 2.56757 102.03 2.64865 102.292 2.81081C102.583 2.94595 102.845 3.14865 103.077 3.41892C103.31 3.68919 103.514 4 103.688 4.35135C103.863 4.67568 103.95 5.01351 103.95 5.36486C103.95 5.58108 103.616 6.48649 102.946 8.08108C102.277 9.64865 101.477 11.7162 100.546 14.2838Z"
                stroke="white"
                stroke-width="4"
                mask="url(#path-1-outside-1)"
            />
            <PathT
                d="M117 12.7027C116.651 13.4595 116.243 14.3649 115.778 15.4189C115.342 16.473 114.861 17.6216 114.338 18.8649C113.814 20.1081 113.261 21.4324 112.679 22.8378C112.126 24.2432 111.544 25.6757 110.933 27.1351L117 26.973L116.214 28.8784L110.191 28.9595C109.202 31.4189 108.242 33.8784 107.311 36.3378C106.38 38.7703 105.536 41.0405 104.779 43.1486C104.052 45.2568 103.456 47.1081 102.99 48.7027C102.554 50.2973 102.335 51.473 102.335 52.2297C102.335 52.6892 102.394 53.0135 102.51 53.2027C102.626 53.3649 102.874 53.4459 103.252 53.4459C103.485 53.4459 103.965 53.2568 104.692 52.8784C105.449 52.473 106.307 51.9054 107.267 51.1757C108.257 50.4459 109.275 49.5676 110.322 48.5405C111.399 47.5135 112.403 46.3784 113.334 45.1351L114.294 45.9865C113.276 47.3649 112.039 48.8108 110.584 50.3243C109.159 51.8108 107.689 53.1892 106.176 54.4595C104.663 55.7027 103.179 56.7297 101.724 57.5405C100.299 58.3514 99.0766 58.7568 98.0582 58.7568C97.9127 58.7568 97.6363 58.6892 97.2289 58.5541C96.8216 58.4459 96.5015 58.2703 96.2688 58.027C96.0942 57.8108 95.9051 57.3514 95.7014 56.6486C95.4686 55.9459 95.3522 55.027 95.3522 53.8919C95.3522 53.1081 95.585 51.8514 96.0505 50.1216C96.487 48.3919 97.0835 46.3919 97.84 44.1216C98.5674 41.8514 99.3966 39.4189 100.328 36.8243C101.288 34.2027 102.263 31.6081 103.252 29.0405L98.2328 29.1216L98.9311 27.3784L103.863 27.2973L109.319 13.5946C109.871 13.4054 110.57 13.2432 111.413 13.1081C112.257 12.973 113.087 12.8514 113.901 12.7432C114.861 12.6351 115.836 12.5405 116.825 12.4595C116.825 12.5135 116.855 12.5541 116.913 12.5811C116.971 12.6081 117 12.6486 117 12.7027Z"
                stroke="white"
                stroke-width="4"
                mask="url(#path-1-outside-1)"
            />
        </svg>
    );
};

// Components' style
const Animation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const Fill = keyframes`
    from {
        fill: transparent;
    }
    to {
        fill: white;
    }
`;

// stroke's values are the length of each path
const PathW = styled.path`
    stroke-dasharray: 451;
    stroke-dashoffset: 451;
    animation: ${Animation} 0.5s ease forwards, ${Fill} 0.5s ease forwards 0.5s;
`;

const PathO = styled.path`
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
    animation: ${Animation} 0.5s ease forwards 0.3s, ${Fill} 0.5s ease forwards 0.8s;
`;

const PathL = styled.path`
    stroke-dasharray: 161;
    stroke-dashoffset: 161;
    animation: ${Animation} 0.5s ease forwards 0.6s, ${Fill} 0.5s ease forwards 1.1s;
`;

const PathT = styled.path`
    stroke-dasharray: 158;
    stroke-dashoffset: 158;
    animation: ${Animation} 0.5s ease forwards 0.9s, ${Fill} 0.5s ease forwards 1.4s;
`;

export default MainLogo;