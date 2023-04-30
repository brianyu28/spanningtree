import Image from "next/image";

import Link from "../components/core/Link";
import Paragraph from "../components/text/Paragraph";
import Heading from "../components/text/Heading";

import logo from "../public/images/logo.png";
import YouTubeVideo from "../components/YouTubeVideo";
import YouTubeSubscribe from "../components/YouTubeSubscribe";
import VideoCard from "../components/VideoCard";

function Home() {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center place-content-center py-3">
        <Image width={90} className="rounded-2xl" alt="Spanning Tree Robot" src={logo} />
        <div>
          <div className="text-3xl font-semibold">
            Spanning Tree
          </div>
          <div>
            by <Link href="https://brianyu.me">Brian Yu</Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Paragraph>
          A video series about computer science
        </Paragraph>
      </div>

      <div>
        <Heading>Watch</Heading>
        <Heading level={2}>Latest Video</Heading>
        <YouTubeVideo title="Minimax" url="https://youtube.com/embed/SLgZhpDsrfc" />
        <Heading level={2}>Watch More</Heading>
        <div className="flex flex-row flex-wrap gap-2 md:justify-between items-stretch place-content-center">
          <VideoCard title="Dijkstra's Algorithm" url="https://youtu.be/EFg3u_E6eHU" img={require("../public/images/video-cards/dijkstra.png")} />
          <VideoCard title="Race Conditions" url="https://youtu.be/MqnpIwN7dz0" img={require("../public/images/video-cards/dekker.png")} />
          <VideoCard title="Error-Correcting Codes" url="https://youtu.be/NQ4gLJYspdA" img={require("../public/images/video-cards/hamming.png")} />
          <VideoCard title="Sending Secret Messages" url="https://youtu.be/I6Unxb-PFhs" img={require("../public/images/video-cards/three-pass.png")} />
          <VideoCard title="Google's PageRank Algorithm" url="https://youtu.be/meonLcN7LD4" img={require("../public/images/video-cards/pagerank.png")} />
          <VideoCard title="Bloom Filters" url="https://youtu.be/kfFacplFY4Y" img={require("../public/images/video-cards/bloom.png")} />
          <VideoCard title="Computer Made of Dominos" url="https://youtu.be/w6E7aQnA4Ws" img={require("../public/images/video-cards/dominos.png")} />
          <VideoCard title="Pigeonhole Principle" url="https://youtu.be/B2A2pGrDG8I" img={require("../public/images/video-cards/pigeonhole.png")} />
          <VideoCard title="Launching a Mars Mission" url="https://youtu.be/yAj_JhJoNDo" img={require("../public/images/video-cards/mars.png")} />
        </div>
      </div>

      <div>
        <Heading>Subscribe</Heading>
        <Paragraph>
          To get updates when new videos are published,
          {" "}<Link href="https://spanningtree.substack.com/">join the mailing list</Link> or
          {" "}<Link href="https://www.youtube.com/channel/UCDzVUXiTr3hClI-zzCWbYzg?sub_confirmation=1">subscribe on YouTube</Link>.
        </Paragraph>
        <YouTubeSubscribe />
        <div className="py-3">
          <iframe src="https://spanningtree.substack.com/embed" width="480" height="320" style={{border: "1px solid #EEE", background: "white", width:"100%"}} frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>

      <div>
        <Heading>About Spanning Tree</Heading>
        <Paragraph>
          Spanning Tree is a video series about topics in computer science and mathematics.
          Contact me at <Link href="mailto:brian@spanningtree.me">brian@spanningtree.me</Link> with
          questions, feedback, or future topic suggestions.
        </Paragraph>
      </div>

    </div>
  );
}

Home.getLayout = (page) => page;

export default Home;
