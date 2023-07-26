import Image from "next/image";
import {
  EmailSVG,
  GithubSVG,
  TwitterSVG,
} from "src/icons";

const AboutPage = () => {
  return (
    <div className="container m-auto lg:px-0 px-2">
      <div className="lg:flex">
        <div className="lg:w-1/4">
          <Image src="profile.png" width={500} height={500} priority alt="narumir's profile" className="rounded-full m-auto lg:w-48 lg:h-48 w-32 h-32" />
        </div>
        <div className="lg:w-3/4">
          <div className="lg:text-7xl text-5xl lg:text-start text-center">
            나루미르
          </div>
          <div className="mt-2 text-gray-400 text-font-bold lg:text-left text-center">Web Developer, I love VR games.</div>
          <div className="flex flex-wrap mt-1 lg:justify-start justify-center">
            <a href="mailto:jacob@narumir.io" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <EmailSVG className="w-5 h-5 inline-block mr-1" />
              jacob@narumir.io
            </a>
            <a target="_blank" href="https://github.com/narumir" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <GithubSVG className="w-5 h-5 inline-block mr-1" />
              github
            </a>
            <a target="_blank" href="https://twitter.com/_narumir" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <TwitterSVG className="w-5 h-5 inline-block mr-1" />
              twitter
            </a>
            <a target="_blank" href="https://bsky.app/profile/narumir.io" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <EmailSVG className="w-5 h-5 inline-block mr-1" />
              bsky
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
        </div>
        <div className="lg:w-3/4">
          <h1 className="hidden">이력서</h1>
          <a href="#military">
            <h2 className="text-2xl text-[#f75d5d] font-bold font">병역 여부</h2>
          </a>
          <p>2022.1 ~ 2023.7 육군 병장 만기 전역</p>

          <a>
            <h2>학력</h2>
          </a>
          <span>2021년 3월 ~ 현재</span>
          <p>한국방송통신대학교, 서울특별시 - 재학 중</p>
          <span>컴퓨터과학과</span>


        </div>
      </div>
    </div>
  );
};

export default AboutPage;
