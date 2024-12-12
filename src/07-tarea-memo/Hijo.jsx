export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log(" It's me again  ");

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
