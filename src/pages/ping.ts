const formatDate = (date: Date): string => {
  return date.toLocaleTimeString("en-GB", {
    timeStyle: 'medium',
    timeZone: "UTC",
  });
};

const messages = [
  "😘 KISS: Keep things simple, stupid.",
  "🧠 Optimise for learning.",
  "💅 Built by a human",
  "❤️ Happiness comes from within.",
  "🌄 It's not the destination, but the journey that counts.",
];

const pick = (coll) => coll[Math.floor(Math.random() * coll.length)];

export async function post() {
  const body = {
    msg: pick(messages),
    date: formatDate(new Date()),
  };

  return new Response(JSON.stringify(body), {
    status: 201,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}
