import { ArrowUpRight } from "react-feather";

const SingleThoughtCard = ({ article }) => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-5 items-start">
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-[20px] md:text-[26px] font-semibold">
            {article?.name}
          </h3>
          <p className="text-base font-normal text-dark_gray">
            {article?.description}
          </p>
          <p className="text-base font-normal text-dark_gray">
            {article?.readTime}
          </p>
        </div>
      </div>
      <div className="flex text-orange gap-4">
        {article.liveUrl ? (
          <a
            href={article?.liveUrl}
            target="blank"
            className="flex items-center gap-1 cursor-pointer hover:scale-125 duration-300"
          >
            <ArrowUpRight />
          </a>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

const ThoughtCard = () => {
  const articles = [
    {
      name: "How to do Payment Integration in Next.js with Razorpay",
      description:
        "Learn how to integrate Razorpay payment gateway in a Next.js application with step-by-step code examples. This guide covers both client and server-side setup, payment verification, and going live",
      readTime: "5 min",
      liveUrl:
        "https://medium.com/@whoshriyansh/how-to-do-payment-integration-in-next-js-with-razorpay-b885e5c3efbc",
    },
    {
      name: "Deploying Next.js Application on AWS EC2",
      description:
        "Learn deploy your own Next.js application to the cloud, and not just with a basic Vercel setup. We’re talking about a full CI/CD pipeline.",
      readTime: "8 min",
      liveUrl:
        "https://medium.com/@whoshriyansh/deploying-next-js-application-on-aws-ec2-f0d6a1fdd825",
    },
    {
      name: "Centralized API Service in React with Axios",
      description:
        "In React apps, making API requests is common. Instead of duplicating code and adding tokens manually, we can centralize the process with Axios, simplifying our code and ensuring consistency.",
      readTime: "2 min",
      liveUrl:
        "https://medium.com/@whoshriyansh/how-to-create-a-centralized-api-service-in-react-with-axios-96f80fde0436",
    },
  ];

  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        SOME
        <br />
        <span className="text-soft_gray/20">THOUGHTS</span>
      </h1>
      <p className="text-gray px-2 text-center  lg:text-left">
        These articles reflect my journey, what I’ve learned, where I got stuck,
        and how I solved real problems. I write them to help developers who
        might be facing the same challenges I did.
      </p>
      <div className="flex flex-col mt-10">
        {articles.map((article, index) => (
          <SingleThoughtCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ThoughtCard;
