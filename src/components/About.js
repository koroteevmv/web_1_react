import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2 id="get-involved">
            <span class="bd-content-title">О приложении</span>
          </h2>
          <p className="text-left">
            Сложная работа на 15 баллов, котрые очень нужны. Это приложение
            "Список дел" версии 1.0.0. Это часть учебного курса "Основы
            библиотеки React.js"
          </p>
        </div>
      </div>
    );
  }
}

export default About;
