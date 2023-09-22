import { Component, Match, Switch, createSignal } from "solid-js";

const SwitchMatch: Component = () => {
  const [number, setNumber] = createSignal<number>(0);

  return (
    <div>
      <button onClick={() => setNumber((p) => p + 1)}>
        Number is {number()}
      </button>
      <Switch fallback={<p>Nothing to show</p>}>
        <Match when={number() % 10 === 0}>Divisible by 10</Match>
        <Match when={number() % 5 === 0}>Divisible by 5</Match>
        <Match when={number() % 2 === 0}>Even</Match>
        <Match when={number() % 2 !== 0}>Odd</Match>
      </Switch>
    </div>
  );
};

export default SwitchMatch;
