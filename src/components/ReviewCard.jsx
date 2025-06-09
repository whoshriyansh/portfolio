import React from "react";
import { Linkedin, Star, ChevronLeft, ChevronRight } from "react-feather";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SingleReviewCard = ({ review }) => {
  return (
    <div className="w-full flex flex-col hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl cursor-pointer">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="h-16 w-16 md:h-36 md:w-1/2 flex items-center justify-center">
          <img
            src={review?.clientImg}
            alt={review?.clientName || "review Image"}
            loading="lazy"
            className="rounded-lg shadow-md h-36"
          />
        </div>

        <div>
          <div className="flex gap-4 items-center mb-1">
            <h2 className="text-xl font-semibold text-white">
              {review?.clientName}
            </h2>
            {review.linkedinLink && (
              <a
                href={review?.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-orange hover:scale-110 duration-300"
              >
                <Linkedin />
              </a>
            )}
          </div>

          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={20}
                className={
                  index < review.starsGiven
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-500"
                }
              />
            ))}
          </div>

          <p className="text-sm text-soft_gray">{review?.clientReview}</p>

          <div className="flex gap-4 mt-2">
            <a
              href={review?.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <p className="text-lg text-orange font-semibold hover:text-green duration-300 hover:scale-105">
                {review?.companyName}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Custom Button Group for Carousel (Includes Both Arrows)
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex justify-between items-center absolute top-1/2 w-full transform -translate-y-1/2 px-4 z-20">
      <button onClick={previous}>
        <ChevronLeft size={32} className="text-white hover:text-orange" />
      </button>
      <button onClick={next}>
        <ChevronRight size={32} className="text-white hover:text-orange" />
      </button>
    </div>
  );
};

const ReviewCard = () => {
  const reviews = [
    {
      id: 1,
      clientName: "Himanshu Arya",
      clientReview:
        "The best part about working with Shriyansh was that he didn’t just use a standard template, he delivered a fully custom-designed website tailored to our brand. On top of that, the site was SEO-optimized from the start, and he even set up Google Analytics so we could track performance from day one. Great experience overall.",
      starsGiven: 5,
      companyName: "Garg N Garg's Associates",
      clientImg:
        "https://media.licdn.com/dms/image/v2/D5603AQEVf_9ZU_QZ2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709802048136?e=1750291200&v=beta&t=pngD9iNJ7drkzemdq1kQMrFkdJgC7s9X7X_LjoTsDOA",
      linkedinLink: "https://www.linkedin.com/in/himanshu-arya-/",
    },
    {
      id: 2,
      clientName: "Mayell Real Estate",
      clientReview:
        "We hired Shriyansh to improve our Google search presence for our company, and within 2 months, we noticed a 60% increase in local inquiries. He's fast, responsive, and knows his stuff. We’re continuing with him for SEO and site maintenance. Highly recommended.",
      starsGiven: 5,
      companyName: "Mayell Real Estate",
      clientImg:
        "https://media.licdn.com/dms/image/v2/C560BAQGJ1Jht2nHBDg/company-logo_200_200/company-logo_200_200/0/1630656751313?e=1753920000&v=beta&t=ARD6JsqQDodJiq9jURKuhQc-rTS40yO5hCrTyWZAaQM",
      linkedinLink: "https://www.linkedin.com/company/mayellrealestate/",
    },
    // {
    //   id: 3,
    //   clientName: "Rajeev Bansal",
    //   clientReview:
    //     "Delivered a full-stack product with modern UX. Super happy with the communication and outcome.",
    //   starsGiven: 5,
    //   companyName: "Bansal & Co.",
    //   clientImg: "https://randomuser.me/api/portraits/men/55.jpg",
    //   linkedinLink: "https://www.linkedin.com/in/rajeevb",
    // },
    // {
    //   id: 4,
    //   clientName: "Sonal Kapoor",
    //   clientReview:
    //     "Loved how responsive and creative Shriyansh was. Our site now stands out and converts better!",
    //   starsGiven: 5,
    //   companyName: "Kapoor Studio",
    //   clientImg: "https://randomuser.me/api/portraits/women/65.jpg",
    //   linkedinLink: "https://www.linkedin.com/in/sonalkapoor",
    // },
  ];

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full flex flex-col relative">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        SOME <br />
        <span className="text-soft_gray/20">TESTIMONIALS</span>
      </h1>

      <div className="mt-10 relative">
        <Carousel
          responsive={responsive}
          infinite
          arrows={false} // ← let react-multi-carousel know we're using our own
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
        >
          {reviews.map((review) => (
            <SingleReviewCard key={review.id} review={review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewCard;
