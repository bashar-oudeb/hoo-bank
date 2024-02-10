import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className=" flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="" className="w-[266px] h-[62px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px] ml-5`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]:"
          >
            <h4 className="font-popping font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-3">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-all cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex  items-center justify-between md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-popping font-normal text-[18px] leading-[27px] text-dimWhite">
        2021 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((Social, index) => (
          <img
            src={Social.icon}
            key={Social.id}
            alt="social"
            className={`w-[21px] h-[21px] object-contain cursor-pointer  ${
              index !== Social.length - 1 ? "mr-6" : "mb-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
