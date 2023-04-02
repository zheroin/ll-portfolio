import { BiCommentDetail } from "react-icons/bi";
import { TbBrandDiscord, TbBrandSkype, TbBrandTelegram } from "react-icons/tb";
export default function Footer({}) {
  return (
    <div className="gap-6">
      <div className="flex pb-9 items-center  w-9/12  mx-auto md:mx-4 sm:mx-2">
        {/* Socials */}
        <div className="flex justify-center space-x-8  text-green ">
          <a href="https://discord.gg/qZcnyErB" target="_blank">
            <TbBrandDiscord className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="https://join.skype.com/invite/yEMGNPuV5TQh">
            <TbBrandSkype className="w-8 h-8 cursor-pointer" />
          </a>
          <a href="https://gist.github.com/CleanCodeCreature/7403794361b0c6958aafa46f75079c17">
            <BiCommentDetail className="w-8 h-8 cursor-pointer" />{" "}
          </a>
          <a href="#">
            <TbBrandTelegram className="w-8 h-8 cursor-pointer" />{" "}
          </a>
        </div>
      </div>
      <div className="flex    mx-auto md:mx-4 sm:mx-2">
        <p>
          Portions of this content are @2013-{new Date().getFullYear()}.
          <span className="mx-4 ">
            You can contact me whenever. Don't hesitate, please click!
          </span>
        </p>
      </div>
    </div>
  );
}
