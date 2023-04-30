interface YouTubeVideoProps {
  title: string;
  url: string;
}

function YouTubeVideo(props: YouTubeVideoProps) {
  const { title, url } = props;
  return (
    <div className="relative w-full my-3" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute border-0 w-full h-full"
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}>
      </iframe>
    </div>
  );
}

export default YouTubeVideo;
