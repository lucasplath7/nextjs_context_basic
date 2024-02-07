import { CounterStateProvider } from "./counterStore";
import { UsersStateProvider } from "./usersStore";

function combineComponents(components) {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>,
  );
};

const providers = [
  CounterStateProvider,
  UsersStateProvider,
]

const AppProvider = combineComponents(providers);

export default AppProvider;