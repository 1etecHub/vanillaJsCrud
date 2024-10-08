module.exports = (req, res) => {
  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else {
    res.writehead(404, { "Content-type": "application/json" });
    res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "UUID is not valid",
        })
      );
  }
};
