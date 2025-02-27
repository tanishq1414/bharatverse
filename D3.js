const timelineData = [
    { year: 2008, event: "Chandrayaan-1", details: "India's first lunar probe." },
    { year: 2013, event: "Mangalyaan", details: "India's first Mars orbiter." },
    { year: 2023, event: "Gaganyaan", details: "India's first manned space mission." },
  ];
  
  const timeline = d3.select("#timeline")
    .append("svg")
    .attr("width", 800)
    .attr("height", 200);
  
  timeline.selectAll("circle")
    .data(timelineData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => i * 200 + 100)
    .attr("cy", 100)
    .attr("r", 10)
    .attr("fill", "#ff0")
    .on("mouseover", (event, d) => {
      alert(`${d.event}: ${d.details}`);
    });