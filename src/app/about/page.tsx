import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container m-auto lg:px-0 px-2">
      <div className="lg:flex">
        <div className="lg:w-1/4">
          <Image src="/profile.png" width={500} height={500} priority alt="narumir's profile" className="rounded-full m-auto lg:w-48 lg:h-48 w-32 h-32" />
        </div>
        <div className="lg:w-3/4">
          <div className="lg:text-7xl text-5xl lg:text-start text-center">
            나루미르
          </div>
          <div className="mt-2 text-gray-400 text-font-bold lg:text-left text-center">Web Developer, I love VR games.</div>
          <div className="flex flex-wrap mt-1 lg:justify-start justify-center">
            <a href="mailto:jacob@narumir.io" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 inline-block mr-1" fill="none" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
              jacob@narumir.io
            </a>
            <a target="_blank" href="https://github.com/narumir" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 inline-block mr-1 fill-slate-900">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z" />
              </svg>
              github
            </a>
            <a target="_blank" href="https://twitter.com/_narumir" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 inline-block mr-1">
                <path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0" />
              </svg>
              twitter
            </a>
            <a target="_blank" href="https://bsky.app/profile/narumir.io" className="rounded-full border-solid border-2 border-gray-400 border-1 px-2 pb-1 m-2">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 inline-block mr-1" fill="none" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
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
            <h2>병역 여부</h2>
          </a>
          <p>2022.1 ~ 2023.7 육군 병장 만기 전역</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
