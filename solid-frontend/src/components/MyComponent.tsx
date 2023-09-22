import { For, Index, Show, createEffect, createSignal } from "solid-js";

const MyComponent = (props: { name: string }) => {
  const [first, setFirst] = createSignal("Char");
  const [last, setLast] = createSignal("Mander");
  const [list, setList] = createSignal<string[]>(["1", "2", "3", "4"]);

  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  createEffect(() => {
    console.log(first(), " ", last());
  });

  return (
    <Show when={true}>
      Hello {props.name}. You own {first()} {last()}
      <button onClick={() => setFirst((prev) => prev + "chachaca")}>
        Click to go nuts
      </button>
      <For each={list()}>
        {(item, i) => {
          return (
            <p>
              {i() + 1}: {item}
            </p>
          );
        }}
      </For>
      <Index each={cats()}>
        {(cat, i) => (
          <p>
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${cat().id}`}
            >
              {i + 1}
              {cat().name}
            </a>
          </p>
        )}
      </Index>
    </Show>
  );
};

export default MyComponent;
