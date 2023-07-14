const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};

export async function post() {
  const body = {
    msg: 'Keep things simple. Optimise for learning.',
    date: formatDate(new Date()),
  };

  return new Response(JSON.stringify(body), {
    status: 201,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}
