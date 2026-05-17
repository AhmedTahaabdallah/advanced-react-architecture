import styled from "styled-components";
import TasksBoard from "./use-immer-tasks-board";
import ShoppingList from "./use-immer-reducer-shopping-list";

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: flex-start;
`;

function AppStateManagementPatterns() {
  return (
    <AppContent>
      {/* <TasksBoard /> */}
      <ShoppingList/>
    </AppContent>
  );
}

export default AppStateManagementPatterns;
