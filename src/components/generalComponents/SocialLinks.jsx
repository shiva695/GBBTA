const SocialLinks = () => {
  return (
    <div className="w-[248px] h-[28px] flex flex-row space-x-4 ml-[40px] mb-[20px] ">
      <a
        className="cursor-pointer"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/svg/Facebook (1).svg" />
      </a>
      <a
        className="cursor-pointer"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="assets/svg/Instagram (1).svg" />
      </a>
      <a
        className="cursor-pointer"
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/svg/Twitter (1).svg" />
      </a>
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/svg/Linkedin.svg" />
      </a>
      <a
        className="cursor-pointer"
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/svg/Google.svg" />
      </a>
      <a
        className="cursor-pointer"
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/assets/svg/YouTube.svg" />
      </a>
    </div>
  );
};

export default SocialLinks;
