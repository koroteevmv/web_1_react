import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default class About extends React.Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      marginLeft: "5%",
      marginRight: "5%",
      borderBottom: "1px #ccc dotted"
    };
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <div>
          <h1>О приложении</h1>
        </div>
        <div>
          <p>
            Это наикрутейшее приложение спокойно заменяет различные бумажные
            блокнотики.
          </p>
          <p>
            В приложении Вы можете добавлять дела, добавлять дедлайн к ним, а
            также фильтровать свои дела по имени.
          </p>
          <p>
            Естественно, чтобы не потерять никакие данные, добавлено
            автоматическое сохранение вашего списка.
          </p>
          <p>
            Но нужно быть крайне внимательным. Если не отменить фильтрацию, а
            зачем обновить приложении, автоматически сохраниться отфильтрованный
            список!
          </p>
          <p>Желаем удачи!</p>
        </div>

        <div>
          <DropdownButton
            as={ButtonGroup}
            title="Нажни на меня"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Приветик</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}
