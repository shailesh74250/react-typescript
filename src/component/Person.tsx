type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      First name {props.name.firstName} Last Name: {props.name.lastName}
    </div>
  );
};
