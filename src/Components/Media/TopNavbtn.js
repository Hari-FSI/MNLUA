import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function ToggleClass() {
  const pathname = usePathname();
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <style jsx>{`
        .page-submenu {
          padding-top: 0;
        }
      `}</style>
      <div className="page-submenu">
        <div className="container">
          <div className="galleryNav">
            <Link
              // className={isActive ? "active" : ""}
              className={pathname == "/photo-gallery" ? "active" : ""}
              href="/photo-gallery"
              onClick={handleClick}
            >
              Photo Gallery
            </Link>

            <Link
              // className={!isActive ? "active" : ""}
              className={pathname == "/video-gallery" ? "active" : ""}
              href="/video-gallery"
              onClick={handleClick}
            >
              Video Gallery
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToggleClass;
