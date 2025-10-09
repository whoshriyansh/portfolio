import { Activity, ArrowRight } from "react-feather";
import GitHubCalendar from "react-github-calendar";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 8;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const HighlightCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[24px] px-4 ">
      <a
        href="https://www.linkedin.com/in/whoshriyansh/"
        target="blank"
        className="w-full md:w-3/6  bg-green flex flex-col px-4 py-10 gap-3 text-black rounded-2xl hover:cursor-pointer hover:scale-105 duration-300 transition-all"
      >
        <Activity />
        <p className="font-medium text-lg">Join with me on Linkedin</p>
        <div className="px-1 py-1 border-[1px] border-black w-10 rounded-xl items-end">
          <ArrowRight />
        </div>
      </a>
      <a
        href="https://calendly.com/whoshriyansh"
        target="blank"
        className="w-full md:w-4/6 bg-orange flex flex-col px-4 py-10 gap-3 text-white rounded-2xl hover:cursor-pointer hover:scale-105 duration-300 transition-all"
      >
        <GitHubCalendar
          username="whoshriyansh"
          colorScheme="light"
          blockMargin={0}
          blockSize={12}
          transformData={selectLastHalfYear}
          hideColorLegend
          labels={{
            totalCount: "{{count}} contributions in the last 8 months",
          }}
        />
      </a>
    </div>
  );
};

export default HighlightCard;
