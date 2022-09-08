// import { useCallback, useState } from "react";

// function persistItem(key: string, value: string) {
//   localStorage.setItem(key, value);
//   return value;
// }

// export function usePersistState(key: string, initialValue?: string) {
//   const [state, setState] = useState(
//     () => localStorage.getItem(key) || persistItem(key, initialValue),
//   );
//   const setStateAndPersist = useCallback(
//     (newState: string) => {
//       setState(newState);
//       return persistItem(key, newState);
//     },
//     [key, setState],
//   );
//   return [state, setStateAndPersist];
// }

export {};
