import { Chrono } from 'react-chrono';

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  },
  {
    title: "April 2022",
    cardTitle: "Event 4",
    cardSubtitle: "Event 4 Subtitle",
    cardDetailedText: "This is the fourth event on the timeline.",
  }
];

const Timeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL"
      slideItemDuration={5000}
      slideshow
    />
  );
};

export default Timeline;
