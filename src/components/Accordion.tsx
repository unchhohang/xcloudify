type props = {
  question: string
}

export default function Accordion({question}: props) {
  return(
  <div>{question}</div>
  );
}
