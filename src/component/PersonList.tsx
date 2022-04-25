type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <p>
            {name.firstName} and {name.lastName}
          </p>
        );
      })}
    </div>
  );
};
