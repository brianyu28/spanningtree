import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface VideoCardProps {
  title: string;
  url: string;
  img: StaticImageData;
}

function VideoCard(props: VideoCardProps) {
  const { title, url, img } = props;
  return (
    <Link href={url}>
      <div className="md:w-52 h-full bg-slate-200 rounded-lg p-2 hover:bg-slate-300 hover:drop-shadow-md">
        <Image className="rounded-md pb-2" alt={title} src={img} />
        <div className="font-bold text-center">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
