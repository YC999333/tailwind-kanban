const cards1 = [
  {
    id: "card1-1",
    title: "Learning how to cook",
  },
  {
    id: "card1-2",
    title: "Making sandwich",
  },
  {
    id: "card11-3",
    title: "Taking the trash out",
  },
];

const cards2 = [
  {
    id: "card2-1",
    title: "Learning React",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards: cards1,
    },
    "list-2": {
      id: "list-2",
      title: "Doing",
      cards: cards2,
    },
  },
  listIds: ["list-1", "list-2"],
};

export default data;
