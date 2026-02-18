import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const projects = [
    { title: "Fire Alarm System", description: "IoT based detection system." },
    { title: "Intrusion Detection", description: "ML based network security." },
    { title: "Portfolio Website", description: "Built using HTML, CSS, React." }
  ];

  return (
    <div>
      <Header title="My React Portfolio" />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      <Form />

      <Footer />
    </div>
  );
}

export default App;
