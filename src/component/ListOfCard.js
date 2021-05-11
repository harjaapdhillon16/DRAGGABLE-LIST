import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Container = styled.div``;

const ListOfCard = ({ headers = [], data = [] }) => {
  const [headerState, _setHeaderState] = React.useState([]);

  const [itemBeingDragged, _setDragged] = React.useState({
    itemDragged: {},
    dragOver: {},
  });

  React.useEffect(() => {
    _setHeaderState([...headers]);
  }, [headers]);

  const handDragStart = (e, item) => {
    console.log(item, "dragleave");
    _setDragged({ ...itemBeingDragged, itemDragged: { ...item } });

    e.stopPropagation();
  };
  const handleDragOver = (e, item) => {
    if (itemBeingDragged.dragOver.title !== item.title) {
      console.log(item);
      _setDragged({ ...itemBeingDragged, dragOver: { ...item } });
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const DragEnd = () => {
    if (
      itemBeingDragged.dragOver.hasOwnProperty("title") &&
      itemBeingDragged.itemDragged.hasOwnProperty("title")
    ) {
      const findDropIndex = headerState.findIndex(
        (item2) => item2.title === itemBeingDragged.dragOver.title
      );
      const findPickIndex = headerState.findIndex(
        (item2) => item2.title === itemBeingDragged.itemDragged.title
      );
      const Copy = [...headerState];
      [Copy[findDropIndex], Copy[findPickIndex]] = [
        Copy[findPickIndex],
        Copy[findDropIndex],
      ];
      _setHeaderState([...Copy]);
    }

    _setDragged({ itemDragged: {}, dragOver: {} });
  };

  return (
    <Container>
      <table>
        <tr>
          {headerState.map((item) => (
            <th
              draggable
              onDragEnd={() => {
                DragEnd();
              }}
              onDragOver={(e) => handleDragOver(e, item)}
              onDragStart={(e) => handDragStart(e, item)}
            >
              {item.title}
            </th>
          ))}
        </tr>
        {data.map((item) => (
          <Card data={item} headers={headerState} />
        ))}
      </table>
    </Container>
  );
};
export default ListOfCard;
