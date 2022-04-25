type GreetTypes = {
  name: string;
  age: number;
  weight: number;
  married: boolean;
};

export const Greet = (props: GreetTypes) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>age {props.age}</p>
      <p>weight {props.weight}</p>
      {props.married ? <p>married</p> : <p>Unmarrid</p>}
    </div>
  );
};
